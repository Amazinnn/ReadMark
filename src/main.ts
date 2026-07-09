import {
  App,
  FileSystemAdapter,
  ItemView,
  MarkdownView,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  TFile,
  WorkspaceLeaf,
  normalizePath,
  setIcon
} from "obsidian";

const VIEW_TYPE = "readmark-view";
const PLUGIN_DIR = ".obsidian/plugins/readmark";
const SESSION_MERGE_GAP_MS = 5 * 60_000;
const SHORT_SESSION_MS = 30_000;

type ExcerptType = "highlight" | "annotation";
type SourceSyntax = "markdown-highlight" | "obsidian-comment" | "footnote-definition";

interface TrackerSettings {
  idleThresholdMs: number;
  timingTickMs: number;
  summaryFolder: string;
  dailyGoalMinutes: number;
  detectHighlights: boolean;
  detectComments: boolean;
  detectFootnotes: boolean;
}

interface BookIndex {
  id: string;
  absolutePath: string;
  vaultPath: string | null;
  title: string;
  addedAt: string;
  updatedAt: string;
  lastOpenedAt: string | null;
}

interface PluginData {
  schemaVersion: 2;
  settings: TrackerSettings;
  books: BookIndex[];
  lastLoadedAt: string | null;
}

interface ReadingSession {
  id: string;
  startedAt: string;
  endedAt: string | null;
  durationMs: number;
}

interface ExcerptRecord {
  id: string;
  type: ExcerptType;
  sourceSyntax: SourceSyntax;
  text: string;
  capturedAt: string;
  updatedAt: string;
  baseline: boolean;
  position: number;
  line: number;
  contextBefore: string;
  contextAfter: string;
}

interface BookRecord {
  schemaVersion: 2;
  id: string;
  absolutePath: string;
  vaultPath: string | null;
  title: string;
  progressPercent: number;
  totalReadMs: number;
  hasScannedContent: boolean;
  sessions: ReadingSession[];
  excerpts: ExcerptRecord[];
  cachedCounts: {
    highlights: number;
    annotations: number;
  };
}

interface ObservedExcerpt {
  type: ExcerptType;
  sourceSyntax: SourceSyntax;
  text: string;
  position: number;
  line: number;
  contextBefore: string;
  contextAfter: string;
}

interface BookStatus {
  exists: boolean;
  inVault: boolean;
  vaultPath: string | null;
}

type SidebarSection = "current" | "bookshelf" | "stats";
type StatsScope = "today" | "book" | "all";
type TrackingState = "tracking" | "locked" | "paused" | "idle";
type ActiveWorkspaceContext =
  | { kind: "tracked-book"; book: BookIndex; file: TFile; view: MarkdownView }
  | { kind: "untracked-markdown"; file: TFile; view: MarkdownView }
  | { kind: "other-file"; file: TFile }
  | { kind: "reading-tracker" }
  | { kind: "non-file" };

const DEFAULT_SETTINGS: TrackerSettings = {
  idleThresholdMs: 60_000,
  timingTickMs: 500,
  summaryFolder: "Reading Summaries",
  dailyGoalMinutes: 30,
  detectHighlights: true,
  detectComments: true,
  detectFootnotes: true
};

const DEFAULT_DATA: PluginData = {
  schemaVersion: 2,
  settings: DEFAULT_SETTINGS,
  books: [],
  lastLoadedAt: null
};

export default class MarkdownReadingTrackerPlugin extends Plugin {
  data: PluginData = createDefaultData();
  statusBarEl: HTMLElement;
  records = new Map<string, BookRecord>();
  dirtyRecords = new Set<string>();
  currentBookId: string | null = null;
  activeMarkdownBookId: string | null = null;
  activeSessionId: string | null = null;
  trackingPaused = false;
  lastActivityAt = Date.now();
  lastTickAt = Date.now();
  lastFlushAt = Date.now();
  lastRenderAt = Date.now();
  private tickBusy = false;
  private contentScanTimer: number | null = null;

  async onload() {
    await this.loadPluginData();
    this.data.lastLoadedAt = new Date().toISOString();

    this.statusBarEl = this.addStatusBarItem();
    this.statusBarEl.setText("ReadMark loaded");
    this.registerView(VIEW_TYPE, (leaf) => new ReadingTrackerView(leaf, this));
    this.addSettingTab(new ReadingTrackerSettingTab(this.app, this));

    this.addRibbonIcon("book-open", "打开 ReadMark", () => void this.activateView());

    this.addCommand({
      id: "open-reading-tracker",
      name: "打开 ReadMark",
      callback: () => void this.activateView()
    });
    this.addCommand({
      id: "add-current-file-to-bookshelf",
      name: "将当前文件加入书架",
      callback: () => void this.addCurrentFileToBookshelf()
    });
    this.addCommand({
      id: "add-book-by-local-path",
      name: "通过本地路径添加书本",
      callback: () => this.openPathModal()
    });
    this.addCommand({
      id: "continue-last-book",
      name: "继续阅读上一本书",
      callback: () => void this.continueLastBook()
    });
    this.addCommand({
      id: "generate-today-reading-summary",
      name: "生成今日阅读摘要",
      callback: () => void this.generateTodaySummary()
    });
    this.addCommand({
      id: "pause-resume-reading-tracking",
      name: "暂停或继续自动计时",
      callback: () => void this.toggleTracking()
    });

    this.registerEvent(this.app.workspace.on("file-open", () => void this.handleActiveFile()));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => void this.handleActiveFile()));
    this.registerEvent(this.app.workspace.on("layout-change", () => void this.handleActiveFile()));
    this.registerEvent(
      this.app.workspace.on("editor-change" as never, () => {
        this.markActivity();
        this.scheduleContentScan();
      })
    );

    this.registerDomEvent(window, "focus", () => this.markActivity());
    this.registerDomEvent(window, "blur", () => void this.endActiveSession());
    this.registerDomEvent(document, "wheel", () => this.markActivity(), { passive: true });
    this.registerDomEvent(document, "keydown", () => this.markActivity());
    this.registerDomEvent(document, "click", () => this.markActivity());
    this.registerDomEvent(document, "touchstart", () => this.markActivity(), { passive: true });
    this.registerInterval(window.setInterval(() => void this.tick(), this.data.settings.timingTickMs));

    await this.normalizeStoredRecords();
    await this.handleActiveFile();
    await this.saveData(this.data);
    this.updateStatusBar();
  }

  async onunload() {
    if (this.contentScanTimer !== null) {
      window.clearTimeout(this.contentScanTimer);
    }
    await this.endActiveSession();
    await this.flushDirtyRecords();
  }

  async loadPluginData() {
    const raw = await this.loadData();
    if (raw?.schemaVersion === 2) {
      this.data = {
        schemaVersion: 2,
        settings: { ...DEFAULT_SETTINGS, ...raw.settings },
        books: Array.isArray(raw.books) ? raw.books.map(normalizeBookIndex) : [],
        lastLoadedAt: typeof raw.lastLoadedAt === "string" ? raw.lastLoadedAt : null
      };
      return;
    }

    this.data = createDefaultData();
  }

  async savePluginData() {
    this.data.books = this.data.books.map(normalizeBookIndex);
    await this.saveData(this.data);
    await this.renderViews();
    this.updateStatusBar();
  }

  async activateView() {
    try {
      let leaf = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0];
      if (!leaf) {
        leaf =
          this.app.workspace.getRightLeaf(false) ??
          this.app.workspace.getRightLeaf(true) ??
          this.app.workspace.getLeaf(true);
        await leaf.setViewState({ type: VIEW_TYPE, active: true });
      }
      (this.app.workspace as unknown as { rightSplit?: { expand?: () => void } }).rightSplit?.expand?.();
      this.app.workspace.revealLeaf(leaf);
    } catch (error) {
      console.error("Failed to open ReadMark view", error);
      new Notice("无法打开 ReadMark，请查看开发者控制台。");
    }
  }

  get trackerSettings(): TrackerSettings {
    return this.data.settings;
  }

  get vaultBasePath(): string | null {
    const adapter = this.app.vault.adapter;
    if (adapter instanceof FileSystemAdapter) {
      return normalizeAbsolutePath(adapter.getBasePath());
    }
    const maybeAdapter = adapter as unknown as { getBasePath?: () => string };
    return maybeAdapter.getBasePath ? normalizeAbsolutePath(maybeAdapter.getBasePath()) : null;
  }

  getReadableLeaf(): WorkspaceLeaf | null {
    return this.app.workspace.getMostRecentLeaf(this.app.workspace.rootSplit);
  }

  getReadableMarkdownView(): MarkdownView | null {
    const view = this.getReadableLeaf()?.view ?? null;
    return view instanceof MarkdownView ? view : null;
  }

  getActiveMarkdownView(): MarkdownView | null {
    return this.getReadableMarkdownView();
  }

  getActiveMarkdownFile(): TFile | null {
    const view = this.getReadableMarkdownView();
    const file = view?.file ?? null;
    return file instanceof TFile && file.extension === "md" ? file : null;
  }

  getMarkdownFileForUserAction(): TFile | null {
    const strictFile = this.getActiveMarkdownFile();
    if (strictFile) return strictFile;
    const file = this.app.workspace.getActiveFile();
    return file instanceof TFile && file.extension === "md" ? file : null;
  }

  getActiveWorkspaceContext(): ActiveWorkspaceContext {
    const view = this.getReadableLeaf()?.view ?? null;
    if (view instanceof ReadingTrackerView) return { kind: "reading-tracker" };

    if (view instanceof MarkdownView) {
      const file = view.file;
      if (!(file instanceof TFile) || file.extension !== "md") return { kind: "non-file" };
      const absolutePath = this.absolutePathForVaultPath(file.path);
      const book = absolutePath ? this.findBookByAbsolutePath(absolutePath) : null;
      return book ? { kind: "tracked-book", book, file, view } : { kind: "untracked-markdown", file, view };
    }

    const file = (view as { file?: unknown } | null)?.file;
    if (file instanceof TFile) return { kind: "other-file", file };
    return { kind: "non-file" };
  }

  absolutePathForVaultPath(vaultPath: string): string | null {
    const base = this.vaultBasePath;
    if (!base) return null;
    return normalizeAbsolutePath(`${base}\\${vaultPath.replace(/\//g, "\\")}`);
  }

  vaultPathForAbsolutePath(absolutePath: string): string | null {
    const base = this.vaultBasePath;
    if (!base) return null;
    const absolute = normalizeAbsolutePath(absolutePath);
    const baseComparable = comparablePath(base);
    const absoluteComparable = comparablePath(absolute);
    if (absoluteComparable === baseComparable) return null;
    if (!absoluteComparable.startsWith(`${baseComparable}\\`)) return null;
    return normalizePath(absolute.slice(base.length + 1).replace(/\\/g, "/"));
  }

  statusForBook(book: BookIndex): BookStatus {
    const absolutePath = normalizeAbsolutePath(book.absolutePath);
    const vaultPath = this.vaultPathForAbsolutePath(absolutePath);
    const inVault = !!vaultPath;
    const exists = inVault && vaultPath ? this.app.vault.getAbstractFileByPath(vaultPath) instanceof TFile : false;
    return { exists, inVault, vaultPath };
  }

  findBookByAbsolutePath(absolutePath: string): BookIndex | null {
    const key = comparablePath(absolutePath);
    return this.data.books.find((book) => comparablePath(book.absolutePath) === key) ?? null;
  }

  getCurrentBookIndex(): BookIndex | null {
    const file = this.getActiveMarkdownFile();
    if (!file) return null;
    const absolutePath = this.absolutePathForVaultPath(file.path);
    if (!absolutePath) return null;
    return this.findBookByAbsolutePath(absolutePath);
  }

  getLockedCurrentBook(): BookIndex | null {
    if (!this.currentBookId) return null;
    return this.data.books.find((item) => item.id === this.currentBookId) ?? null;
  }

  getActiveMarkdownBook(): BookIndex | null {
    if (!this.activeMarkdownBookId) return null;
    return this.data.books.find((item) => item.id === this.activeMarkdownBookId) ?? null;
  }

  async addCurrentFileToBookshelf() {
    const file = this.getMarkdownFileForUserAction();
    if (!file) {
      new Notice("请先打开一份 Markdown 文件。");
      return;
    }
    const absolutePath = this.absolutePathForVaultPath(file.path);
    if (!absolutePath) {
      new Notice("当前库没有暴露本地文件系统路径。");
      return;
    }
    await this.addBookByPath(absolutePath, { scanMode: "baseline" });
  }

  openPathModal(book?: BookIndex) {
    new PathModal(this.app, {
      title: book ? "修改书本本地路径" : "通过本地路径添加书本",
      initialPath: book?.absolutePath ?? "",
      submitLabel: book ? "保存路径" : "添加书本",
      onSubmit: async (input) => {
        if (book) {
          await this.rebindBook(book.id, input);
        } else {
          await this.addBookByPath(input, { scanMode: "baseline" });
        }
      }
    }).open();
  }

  async addBookByPath(inputPath: string, options: { scanMode: "baseline" | "capture" }) {
    const absolutePath = normalizeAbsolutePath(inputPath);
    if (!absolutePath.toLowerCase().endsWith(".md")) {
      new Notice("只能跟踪 Markdown 文件。");
      return;
    }

    const existing = this.findBookByAbsolutePath(absolutePath);
    if (existing) {
      new Notice("这本书已经在书架中。");
      return;
    }

    const now = new Date().toISOString();
    const status = this.statusForBook({ id: "", absolutePath, vaultPath: null, title: "", addedAt: now, updatedAt: now, lastOpenedAt: null });
    const book: BookIndex = {
      id: randomId(),
      absolutePath,
      vaultPath: status.vaultPath,
      title: titleFromPath(absolutePath),
      addedAt: now,
      updatedAt: now,
      lastOpenedAt: null
    };

    this.data.books.push(book);
    await this.savePluginData();
    const record = createBookRecord(book);
    this.records.set(book.id, record);
    this.markRecordDirty(book.id);
    if (status.exists && status.inVault) {
      await this.scanBook(book, options.scanMode);
    } else {
      await this.flushDirtyRecords();
    }
    await this.handleActiveFile();
    new Notice(`已加入书架：${book.title}`);
  }

  async rebindBook(bookId: string, inputPath: string) {
    const book = this.data.books.find((item) => item.id === bookId);
    if (!book) return;

    const absolutePath = normalizeAbsolutePath(inputPath);
    if (!absolutePath.toLowerCase().endsWith(".md")) {
      new Notice("只能跟踪 Markdown 文件。");
      return;
    }

    const duplicate = this.data.books.find((item) => item.id !== bookId && comparablePath(item.absolutePath) === comparablePath(absolutePath));
    if (duplicate) {
      new Notice("另一本文档已经绑定了这个路径。");
      return;
    }

    const status = this.statusForBook({ ...book, absolutePath });
    book.absolutePath = absolutePath;
    book.vaultPath = status.vaultPath;
    book.title = titleFromPath(absolutePath);
    book.updatedAt = new Date().toISOString();

    const record = await this.getRecord(book);
    record.absolutePath = book.absolutePath;
    record.vaultPath = book.vaultPath;
    record.title = book.title;
    this.markRecordDirty(book.id);

    await this.savePluginData();
    if (status.exists && status.inVault) {
      await this.scanBook(book, "capture");
    } else {
      await this.flushDirtyRecords();
    }
    await this.handleActiveFile();
    new Notice(`已更新书本路径：${book.title}`);
  }

  async removeBook(bookId: string) {
    const book = this.data.books.find((item) => item.id === bookId);
    this.data.books = this.data.books.filter((item) => item.id !== bookId);
    this.records.delete(bookId);
    this.dirtyRecords.delete(bookId);
    await this.savePluginData();
    await this.renderViews();
    if (book) new Notice(`已从书架移除：${book.title}`);
  }

  async continueLastBook() {
    const books = [...this.data.books]
      .filter((book) => book.lastOpenedAt)
      .sort((a, b) => String(b.lastOpenedAt).localeCompare(String(a.lastOpenedAt)));
    for (const book of books) {
      if (await this.continueBook(book)) return;
    }
    new Notice("没有可继续阅读的书本。");
  }

  async openBook(book: BookIndex): Promise<boolean> {
    const status = this.statusForBook(book);
    if (!status.exists) {
      new Notice(`书本缺失：${book.absolutePath}`);
      return false;
    }
    if (!status.vaultPath) {
      new Notice("这本书不在当前 Obsidian 库中，无法直接打开。");
      return false;
    }
    const file = this.app.vault.getAbstractFileByPath(status.vaultPath);
    if (!(file instanceof TFile)) {
      new Notice(`库内文件不存在：${status.vaultPath}`);
      return false;
    }
    await this.app.workspace.getLeaf(true).openFile(file);
    return true;
  }

  async continueBook(book: BookIndex): Promise<boolean> {
    if (!(await this.openBook(book))) return false;
    const record = await this.getRecord(book);
    const view = await waitForMarkdownView(this.app, book.vaultPath);
    if (!view) return true;
    await sleep(80);
    const scroller = findScroller(view.containerEl);
    if (!scroller) return true;
    const max = scroller.scrollHeight - scroller.clientHeight;
    if (max <= 0) return true;
    scroller.scrollTop = (clamp(record.progressPercent, 0, 100) / 100) * max;
    return true;
  }

  async generateTodaySummary() {
    const today = todayKey();
    const lines: string[] = [
      `# 今日阅读摘要 - ${today}`,
      "",
      "由 ReadMark 生成。",
      ""
    ];

    let totalMs = 0;
    let activeBooks = 0;
    let excerptCount = 0;

    for (const book of this.data.books) {
      const record = await this.getRecord(book);
      const sessions = sessionsForDay(record, today);
      const excerpts = record.excerpts.filter((excerpt) => !excerpt.baseline && sameDay(excerpt.capturedAt, today));
      if (sessions.length === 0 && excerpts.length === 0) continue;

      activeBooks += sessions.length > 0 ? 1 : 0;
      const duration = sessions.reduce((sum, session) => sum + session.durationMs, 0);
      totalMs += duration;
      excerptCount += excerpts.length;

      lines.push(`## ${book.title}`);
      lines.push("");
      lines.push(`- 本地路径：\`${book.absolutePath}\``);
      lines.push(`- 阅读时长：${formatDuration(duration)}`);
      lines.push(`- 阅读进度：${formatPercent(record.progressPercent)}`);
      lines.push("");

      for (const excerpt of excerpts) {
        const type = formatExcerptType(excerpt.type);
        lines.push(`> [!quote] ${type} · ${timeOnly(excerpt.capturedAt)}`);
        for (const line of excerpt.text.split(/\r?\n/)) {
          lines.push(`> ${line}`);
        }
        lines.push("");
      }
    }

    lines.splice(4, 0, `- 总阅读时长：${formatDuration(totalMs)}`, `- 阅读书目：${activeBooks}`, `- 新摘录：${excerptCount}`, "");
    if (totalMs === 0 && excerptCount === 0) {
      lines.push("今天还没有捕捉到阅读活动。");
      lines.push("");
    }

    await this.ensureVaultFolder(this.trackerSettings.summaryFolder);
    const outputPath = normalizePath(`${cleanVaultPath(this.trackerSettings.summaryFolder)}/${today}.md`);
    await this.app.vault.adapter.write(outputPath, lines.join("\n"));
    new Notice(`已生成今日阅读摘要：${outputPath}`);
  }

  async toggleTracking() {
    this.trackingPaused = !this.trackingPaused;
    if (this.trackingPaused) {
      await this.endActiveSession();
    } else {
      this.markActivity();
    }
    this.updateStatusBar();
    await this.renderViews();
    new Notice(this.trackingPaused ? "自动计时已暂停" : "自动计时已继续");
  }

  markActivity() {
    this.lastActivityAt = Date.now();
  }

  async handleActiveFile() {
    const context = this.getActiveWorkspaceContext();
    if (context.kind === "reading-tracker" || context.kind === "non-file" || context.kind === "untracked-markdown" || context.kind === "other-file") {
      if (this.activeMarkdownBookId) {
        await this.endActiveSession();
      }
      this.activeMarkdownBookId = null;
      this.updateStatusBar();
      await this.renderViews();
      return;
    }

    const currentBook = context.book;
    const changedBook = this.activeMarkdownBookId !== currentBook.id || this.currentBookId !== currentBook.id;
    if (changedBook) {
      await this.endActiveSession();
    }

    const status = this.statusForBook(currentBook);
    if (!status.exists || !status.inVault) {
      this.activeMarkdownBookId = null;
      this.updateStatusBar();
      await this.renderViews();
      return;
    }

    const changedVaultPath = currentBook.vaultPath !== status.vaultPath;
    if (changedBook || changedVaultPath) {
      currentBook.lastOpenedAt = new Date().toISOString();
      currentBook.vaultPath = status.vaultPath;
    }
    this.currentBookId = currentBook.id;
    this.activeMarkdownBookId = currentBook.id;
    if (changedBook) this.markActivity();
    if (changedBook || changedVaultPath) {
      await this.savePluginData();
      await this.scanBook(currentBook, "baseline");
    }
    await this.captureProgress();
    this.updateStatusBar();
    if (changedBook) {
      await this.renderViews();
    } else {
      await this.refreshViews();
    }
  }

  async tick() {
    if (this.tickBusy) return;
    this.tickBusy = true;
    try {
      const now = Date.now();
      const delta = Math.max(0, now - this.lastTickAt);
      this.lastTickAt = now;

      if (!this.canAccumulate(now) || !this.currentBookId) {
        await this.endActiveSession();
        this.updateStatusBar();
        await this.refreshViews();
        return;
      }

      const book = this.data.books.find((item) => item.id === this.currentBookId);
      if (!book) return;

      const record = await this.getRecord(book);
      const session = this.getOrStartSession(record);
      session.durationMs += delta;
      session.endedAt = new Date(now).toISOString();
      record.totalReadMs += delta;
      this.markRecordDirty(record.id);

      await this.captureProgress();
      if (now - this.lastFlushAt > 5_000) {
        await this.flushDirtyRecords();
        this.lastFlushAt = now;
      }
      this.updateStatusBar();
      if (now - this.lastRenderAt > 1_000) {
        this.lastRenderAt = now;
        await this.refreshViews();
      }
    } finally {
      this.tickBusy = false;
    }
  }

  canAccumulate(now: number): boolean {
    if (this.trackingPaused || !this.currentBookId) return false;
    const context = this.getActiveWorkspaceContext();
    if (document.hidden || !document.hasFocus()) return false;
    if (now - this.lastActivityAt > this.trackerSettings.idleThresholdMs) return false;
    if (context.kind !== "tracked-book") return false;
    if (context.book.id !== this.currentBookId) return false;
    if (this.activeMarkdownBookId !== this.currentBookId) return false;
    return true;
  }

  getOrStartSession(record: BookRecord): ReadingSession {
    if (this.activeSessionId) {
      const existing = record.sessions.find((session) => session.id === this.activeSessionId);
      if (existing) return existing;
    }
    const now = new Date().toISOString();
    const mergeable = findMergeableSession(record, new Date(now));
    if (mergeable) {
      this.activeSessionId = mergeable.id;
      return mergeable;
    }
    const session: ReadingSession = {
      id: randomId(),
      startedAt: now,
      endedAt: now,
      durationMs: 0
    };
    record.sessions.push(session);
    this.activeSessionId = session.id;
    return session;
  }

  async endActiveSession() {
    if (!this.activeSessionId || !this.currentBookId) {
      this.activeSessionId = null;
      return;
    }
    const book = this.data.books.find((item) => item.id === this.currentBookId);
    if (!book) {
      this.activeSessionId = null;
      return;
    }
    const record = await this.getRecord(book);
    const session = record.sessions.find((item) => item.id === this.activeSessionId);
    if (session) {
      session.endedAt = new Date().toISOString();
      if (normalizeReadingSessions(record)) {
        this.markRecordDirty(record.id);
      }
      this.markRecordDirty(record.id);
    }
    this.activeSessionId = null;
    await this.flushDirtyRecords();
  }

  scheduleContentScan() {
    const book = this.activeMarkdownBookId ? this.data.books.find((item) => item.id === this.activeMarkdownBookId) : null;
    if (!book) return;
    if (this.contentScanTimer !== null) window.clearTimeout(this.contentScanTimer);
    this.contentScanTimer = window.setTimeout(() => {
      this.contentScanTimer = null;
      void this.scanBook(book, "baseline");
    }, 500);
  }

  async scanBook(book: BookIndex, mode: "baseline" | "capture") {
    const status = this.statusForBook(book);
    if (!status.exists || !status.inVault || !status.vaultPath) return;
    const file = this.app.vault.getAbstractFileByPath(status.vaultPath);
    if (!(file instanceof TFile)) return;

    const activeView = this.getActiveMarkdownView();
    const content = activeView?.file?.path === status.vaultPath
      ? activeView.editor.getValue()
      : await this.app.vault.cachedRead(file);
    const observed = parseExcerpts(content, this.trackerSettings);
    const record = await this.getRecord(book);
    const baseline = mode === "baseline" && !record.hasScannedContent;
    const now = new Date().toISOString();
    let changed = false;

    record.absolutePath = book.absolutePath;
    record.vaultPath = status.vaultPath;
    record.title = book.title;

    const matchedExcerptIds = new Set<string>();
    for (const item of observed) {
      const match = findMatchingExcerpt(record.excerpts.filter((excerpt) => !matchedExcerptIds.has(excerpt.id)), item);
      if (match) {
        matchedExcerptIds.add(match.id);
        if (
          match.text !== item.text ||
          match.position !== item.position ||
          match.contextBefore !== item.contextBefore ||
          match.contextAfter !== item.contextAfter
        ) {
          match.text = item.text;
          match.position = item.position;
          match.line = item.line;
          match.contextBefore = item.contextBefore;
          match.contextAfter = item.contextAfter;
          match.updatedAt = now;
          changed = true;
        }
      } else {
        record.excerpts.push({
          id: randomId(),
          type: item.type,
          sourceSyntax: item.sourceSyntax,
          text: item.text,
          capturedAt: now,
          updatedAt: now,
          baseline,
          position: item.position,
          line: item.line,
          contextBefore: item.contextBefore,
          contextAfter: item.contextAfter
        });
        matchedExcerptIds.add(record.excerpts[record.excerpts.length - 1].id);
        changed = true;
      }
    }

    const beforeDeleteCount = record.excerpts.length;
    record.excerpts = record.excerpts.filter((excerpt) => {
      if (!shouldSyncExcerptDeletion(excerpt, this.trackerSettings)) return true;
      return matchedExcerptIds.has(excerpt.id);
    });
    if (record.excerpts.length !== beforeDeleteCount) {
      changed = true;
    }

    if (!record.hasScannedContent) {
      record.hasScannedContent = true;
      changed = true;
    }

    if (changed) {
      updateCachedCounts(record);
      this.markRecordDirty(record.id);
      await this.flushDirtyRecords();
      await this.renderViews();
      this.updateStatusBar();
    }
  }

  async captureProgress() {
    if (!this.activeMarkdownBookId) return;
    const context = this.getActiveWorkspaceContext();
    if (context.kind !== "tracked-book" || context.book.id !== this.activeMarkdownBookId) return;
    const book = context.book;
    if (!book.vaultPath) return;
    const view = context.view;
    const scroller = findScroller(view.containerEl);
    if (!scroller) return;

    const max = scroller.scrollHeight - scroller.clientHeight;
    const progress = max <= 0 ? 100 : clamp((scroller.scrollTop / max) * 100, 0, 100);
    const record = await this.getRecord(book);
    if (Math.abs(record.progressPercent - progress) >= 0.25) {
      record.progressPercent = progress;
      this.markRecordDirty(record.id);
    }
  }

  async getRecord(book: BookIndex): Promise<BookRecord> {
    const cached = this.records.get(book.id);
    if (cached) return cached;

    const recordPath = this.recordPath(book.id);
    let record: BookRecord | null = null;
    if (await this.app.vault.adapter.exists(recordPath)) {
      try {
        record = JSON.parse(await this.app.vault.adapter.read(recordPath)) as BookRecord;
      } catch (error) {
        console.error("Failed to read book record", recordPath, error);
      }
    }
    if (!record || record.schemaVersion !== 2) {
      record = createBookRecord(book);
    }
    record.absolutePath = book.absolutePath;
    record.vaultPath = book.vaultPath;
    record.title = book.title;
    if (normalizeReadingSessions(record)) {
      this.markRecordDirty(book.id);
    }
    updateCachedCounts(record);
    this.records.set(book.id, record);
    return record;
  }

  async normalizeStoredRecords() {
    for (const book of this.data.books) {
      await this.getRecord(book);
    }
    await this.flushDirtyRecords();
  }

  markRecordDirty(bookId: string) {
    this.dirtyRecords.add(bookId);
  }

  async flushDirtyRecords() {
    if (this.dirtyRecords.size === 0) return;
    await this.ensureVaultFolder(`${PLUGIN_DIR}/books`);
    const dirty = Array.from(this.dirtyRecords);
    this.dirtyRecords.clear();
    for (const id of dirty) {
      const record = this.records.get(id);
      if (!record) continue;
      updateCachedCounts(record);
      await this.app.vault.adapter.write(this.recordPath(id), JSON.stringify(record, null, 2));
    }
  }

  recordPath(bookId: string): string {
    return normalizePath(`${PLUGIN_DIR}/books/${bookId}.json`);
  }

  async ensureVaultFolder(folderPath: string) {
    const clean = cleanVaultPath(folderPath);
    const parts = clean.split("/").filter(Boolean);
    let current = "";
    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      if (!(await this.app.vault.adapter.exists(current))) {
        await this.app.vault.adapter.mkdir(current);
      }
    }
  }

  updateStatusBar() {
    if (!this.statusBarEl) return;
    const state = this.getTrackingState();
    if (state === "paused") {
      this.statusBarEl.setText("阅读统计已暂停");
      return;
    }
    if (state === "idle") {
      this.statusBarEl.setText("阅读统计空闲");
      return;
    }
    const book = this.data.books.find((item) => item.id === this.currentBookId);
    const record = book ? this.records.get(book.id) : null;
    if (!book || !record) {
      this.statusBarEl.setText("阅读统计载入中");
      return;
    }
    const todayMs = sessionsForDay(record, todayKey()).reduce((sum, session) => sum + session.durationMs, 0);
    this.statusBarEl.setText(`${trackingStateLabel(state)} · ${book.title} · 今日 ${formatDuration(todayMs)} · 累计 ${formatDuration(record.totalReadMs)}`);
  }

  getTrackingState(): TrackingState {
    if (this.trackingPaused) return "paused";
    if (!this.currentBookId) return "idle";
    return this.canAccumulate(Date.now()) ? "tracking" : "locked";
  }

  async renderViews() {
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
      if (leaf.view instanceof ReadingTrackerView) {
        await leaf.view.render();
      }
    }
  }

  async refreshViews() {
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
      if (leaf.view instanceof ReadingTrackerView) {
        await leaf.view.refreshDynamic();
      }
    }
  }

  async todayGoalProgress(): Promise<{ readMs: number; goalMs: number; streak: number }> {
    const today = todayKey();
    let readMs = 0;
    const records: BookRecord[] = [];
    for (const book of this.data.books) {
      const record = await this.getRecord(book);
      records.push(record);
      readMs += sessionsForDay(record, today).reduce((sum, session) => sum + session.durationMs, 0);
    }
    return {
      readMs,
      goalMs: this.trackerSettings.dailyGoalMinutes * 60_000,
      streak: calculateStreak(records)
    };
  }
}

class ReadingTrackerView extends ItemView {
  private activeSection: SidebarSection = "current";
  private statsScope: StatsScope = "today";

  constructor(leaf: WorkspaceLeaf, private plugin: MarkdownReadingTrackerPlugin) {
    super(leaf);
  }

  getViewType(): string {
    return VIEW_TYPE;
  }

  getDisplayText(): string {
    return "ReadMark";
  }

  getIcon(): string {
    return "book-open";
  }

  async onOpen() {
    await this.render();
  }

  async render() {
    this.contentEl.empty();
    this.contentEl.addClass("mrt-view");
    this.renderToolbar(this.contentEl);
    this.renderMainNav(this.contentEl);
    if (this.activeSection === "current") {
      await this.renderCurrentBookSection(this.contentEl);
    } else if (this.activeSection === "bookshelf") {
      await this.renderBookshelfSection(this.contentEl);
    } else {
      await this.renderStatsSection(this.contentEl);
    }
  }

  async refreshDynamic() {
    const state = this.plugin.getTrackingState();
    this.contentEl.querySelectorAll<HTMLElement>("[data-mrt-tracking-state]").forEach((item) => {
      item.setText(trackingStateLabel(state));
      item.toggleClass("is-tracking", state === "tracking");
      item.toggleClass("is-locked", state === "locked");
      item.toggleClass("is-paused", state === "paused");
      item.toggleClass("is-idle", state === "idle");
    });

    if (this.activeSection === "stats") {
      await this.refreshStatsDynamic();
      return;
    }
    if (this.activeSection !== "current") return;
    const book = this.plugin.getActiveMarkdownBook() ?? this.plugin.getLockedCurrentBook();
    if (!book) return;
    const record = await this.plugin.getRecord(book);
    const todayMs = sessionsForDay(record, todayKey()).reduce((sum, session) => sum + session.durationMs, 0);
    this.updateDynamicText("today", formatDuration(todayMs));
    this.updateDynamicText("total", formatDuration(record.totalReadMs));
    this.updateDynamicText("progress", formatPercent(record.progressPercent));
    this.updateDynamicText("excerpts", String(record.cachedCounts.highlights + record.cachedCounts.annotations));
    this.updateDynamicText("progress-label", `阅读进度 · ${formatPercent(record.progressPercent)}`);
    const fill = this.contentEl.querySelector<HTMLElement>("[data-mrt-dynamic='progress-fill']");
    if (fill) fill.style.width = `${clamp(record.progressPercent, 0, 100)}%`;
  }

  async refreshStatsDynamic() {
    if (this.statsScope === "today") {
      const pairs = await this.getBookPairs();
      const values = this.getTodayStatsValues(pairs);
      this.updateStatsValues(values);
      return;
    }
    if (this.statsScope === "book") {
      const pair = await this.getCurrentBookPair();
      if (!pair) return;
      this.updateStatsValues(this.getCurrentBookStatsValues(pair));
      return;
    }
    const pairs = await this.getBookPairs();
    this.updateStatsValues(this.getAllStatsValues(pairs));
  }

  updateStatsValues(values: Record<string, string>) {
    for (const [key, value] of Object.entries(values)) {
      this.updateDynamicText(key, value);
    }
  }

  updateDynamicText(key: string, text: string) {
    this.contentEl.querySelectorAll<HTMLElement>(`[data-mrt-dynamic='${key}']`).forEach((item) => item.setText(text));
  }

  renderToolbar(root: HTMLElement) {
    const section = root.createDiv({ cls: "mrt-app-header" });
    const titleRow = section.createDiv({ cls: "mrt-title-row" });
    const icon = titleRow.createSpan({ cls: "mrt-title-icon" });
    setIcon(icon, "book-open");
    titleRow.createEl("h3", { text: "ReadMark", cls: "mrt-heading" });
    titleRow.createSpan({ text: trackingStateLabel(this.plugin.getTrackingState()), cls: "mrt-status-badge", attr: { "data-mrt-tracking-state": "true" } });

    const toolbar = section.createDiv({ cls: "mrt-toolbar" });
    this.createToolButton(toolbar, "plus", "加入当前文件", () => void this.plugin.addCurrentFileToBookshelf());
    this.createToolButton(toolbar, "folder-plus", "添加本地路径", () => this.plugin.openPathModal());
    this.createToolButton(toolbar, "file-output", "生成今日摘要", () => void this.plugin.generateTodaySummary());
  }

  createToolButton(root: HTMLElement, iconName: string, label: string, onClick: () => void) {
    const button = root.createEl("button", { cls: "mrt-icon-button", attr: { "aria-label": label, title: label } });
    setIcon(button.createSpan({ cls: "mrt-button-icon" }), iconName);
    button.createSpan({ text: label, cls: "mrt-button-label" });
    button.addEventListener("click", onClick);
  }

  renderMainNav(root: HTMLElement) {
    const nav = root.createDiv({ cls: "mrt-segmented mrt-section" });
    this.addMainSegment(nav, "current", "当前书本");
    this.addMainSegment(nav, "bookshelf", "书架");
    this.addMainSegment(nav, "stats", "统计");
  }

  addMainSegment(root: HTMLElement, value: SidebarSection, label: string) {
    const button = root.createEl("button", {
      text: label,
      cls: value === this.activeSection ? "mrt-segment is-active" : "mrt-segment"
    });
    button.addEventListener("click", () => {
      this.activeSection = value;
      void this.render();
    });
  }

  addStatsSegment(root: HTMLElement, value: StatsScope, label: string) {
    const button = root.createEl("button", {
      text: label,
      cls: value === this.statsScope ? "mrt-segment is-active" : "mrt-segment"
    });
    button.addEventListener("click", () => {
      this.statsScope = value;
      void this.render();
    });
  }

  async renderCurrentBookSection(root: HTMLElement) {
    const section = root.createDiv({ cls: "mrt-panel mrt-current-section" });
    section.createEl("h4", { text: "当前书本", cls: "mrt-heading" });
    const file = this.plugin.getActiveMarkdownFile();
    const activeAbsolutePath = file ? this.plugin.absolutePathForVaultPath(file.path) : null;
    const activeBook = activeAbsolutePath ? this.plugin.findBookByAbsolutePath(activeAbsolutePath) : null;
    const book = activeBook ?? (file ? null : this.plugin.getLockedCurrentBook());

    if (!book) {
      section.createDiv({ text: file ? "这份文件还不在书架中。" : "还没有锁定当前书本。请先打开书架中的 Markdown。", cls: "mrt-empty" });
      if (file) section.createDiv({ text: file.path, cls: "mrt-path" });
      const actions = section.createDiv({ cls: "mrt-actions" });
      actions.createEl("button", { text: "加入当前文件" }).addEventListener("click", () => void this.plugin.addCurrentFileToBookshelf());
      return;
    }

    const record = await this.plugin.getRecord(book);
    const hero = section.createDiv({ cls: "mrt-current-hero" });
    const heroTop = hero.createDiv({ cls: "mrt-hero-top" });
    heroTop.createDiv({ text: book.title, cls: "mrt-title" });
    hero.createDiv({ text: displayBookPath(book), cls: "mrt-path" });
    if (file && !activeBook) {
      const status = hero.createDiv({ cls: "mrt-metrics" });
      status.createSpan({ text: "当前活动文件未加入书架", cls: "mrt-pill mrt-pill-warning" });
    }
    this.renderMetricGrid(section, [
      ["今日", formatDuration(sessionsForDay(record, todayKey()).reduce((sum, session) => sum + session.durationMs, 0)), "today"],
      ["总时长", formatDuration(record.totalReadMs), "total"],
      ["进度", formatPercent(record.progressPercent), "progress"],
      ["摘录", String(record.cachedCounts.highlights + record.cachedCounts.annotations), "excerpts"]
    ]);
    this.renderProgressBar(section, record.progressPercent, "阅读进度", "progress");
    this.renderExcerptTypeChart(section, [{ label: "高亮", value: record.cachedCounts.highlights }, { label: "批注", value: record.cachedCounts.annotations }]);
    this.renderExcerptFeed(section, book, record, "本书最近摘录");
  }

  async renderBookshelfSection(root: HTMLElement) {
    const section = root.createDiv({ cls: "mrt-panel" });
    section.createEl("h4", { text: "书架", cls: "mrt-heading" });
    if (this.plugin.data.books.length === 0) {
      section.createDiv({ text: "还没有书目。你可以加入当前 Markdown 文件，或者粘贴本地绝对路径。", cls: "mrt-empty" });
      const actions = section.createDiv({ cls: "mrt-actions" });
      actions.createEl("button", { text: "加入当前文件" }).addEventListener("click", () => void this.plugin.addCurrentFileToBookshelf());
      actions.createEl("button", { text: "添加本地路径" }).addEventListener("click", () => this.plugin.openPathModal());
      return;
    }

    await this.renderRecent(root);
    for (const book of this.plugin.data.books) {
      const status = this.plugin.statusForBook(book);
      const record = await this.plugin.getRecord(book);
      const card = section.createDiv({ cls: "mrt-card" });
      card.createDiv({ text: book.title, cls: "mrt-title" });
      card.createDiv({ text: displayBookPath(book), cls: "mrt-path" });
      const metrics = card.createDiv({ cls: "mrt-metrics" });
      metrics.createSpan({ text: status.exists ? "可用" : "缺失", cls: status.exists ? "mrt-pill" : "mrt-pill mrt-pill-error" });
      metrics.createSpan({ text: status.inVault ? "库内" : "库外", cls: "mrt-pill" });
      metrics.createSpan({ text: formatDuration(record.totalReadMs), cls: "mrt-pill" });
      metrics.createSpan({ text: `${record.cachedCounts.highlights + record.cachedCounts.annotations} 摘录`, cls: "mrt-pill" });

      const actions = card.createDiv({ cls: "mrt-actions" });
      actions.createEl("button", { text: "打开" }).addEventListener("click", () => void this.plugin.continueBook(book));
      actions.createEl("button", { text: "改路径" }).addEventListener("click", () => this.plugin.openPathModal(book));
      actions.createEl("button", { text: "移除" }).addEventListener("click", () => void this.plugin.removeBook(book.id));
    }
  }

  async renderRecent(root: HTMLElement) {
    const section = root.createDiv({ cls: "mrt-section" });
    section.createEl("h4", { text: "继续阅读", cls: "mrt-heading" });
    const recent = [...this.plugin.data.books]
      .filter((book) => book.lastOpenedAt)
      .sort((a, b) => String(b.lastOpenedAt).localeCompare(String(a.lastOpenedAt)))
      .slice(0, 3);

    if (recent.length === 0) {
      section.createDiv({ text: "暂无最近阅读的书目。", cls: "mrt-muted" });
      return;
    }

    for (const book of recent) {
      const record = await this.plugin.getRecord(book);
      const card = section.createDiv({ cls: "mrt-card mrt-clickable" });
      card.createDiv({ text: book.title, cls: "mrt-title" });
      card.createDiv({ text: displayBookPath(book), cls: "mrt-path" });
      const metrics = card.createDiv({ cls: "mrt-metrics" });
      metrics.createSpan({ text: formatPercent(record.progressPercent), cls: "mrt-pill" });
      metrics.createSpan({ text: formatDuration(record.totalReadMs), cls: "mrt-pill" });
      card.addEventListener("click", () => void this.plugin.continueBook(book));
    }
  }

  async renderStatsSection(root: HTMLElement) {
    const section = root.createDiv({ cls: "mrt-panel" });
    section.createEl("h4", { text: "统计", cls: "mrt-heading" });
    const nav = section.createDiv({ cls: "mrt-segmented" });
    this.addStatsSegment(nav, "today", "当天");
    this.addStatsSegment(nav, "book", "当前书");
    this.addStatsSegment(nav, "all", "全部");

    if (this.statsScope === "today") {
      await this.renderTodayStats(section);
    } else if (this.statsScope === "book") {
      await this.renderCurrentBookStats(section);
    } else {
      await this.renderAllStats(section);
    }
  }

  async renderTodayStats(root: HTMLElement) {
    const pairs = await this.getBookPairs();
    const today = todayKey();
    const records = pairs.map((pair) => pair.record);
    const todayMs = records.reduce((sum, record) => sum + sessionsForDay(record, today).reduce((inner, session) => inner + session.durationMs, 0), 0);
    const todaySessions = records.reduce((sum, record) => sum + visibleSessionsForDay(record, today).length, 0);
    const todayExcerpts = records.flatMap((record) => record.excerpts.filter((excerpt) => !excerpt.baseline && sameDay(excerpt.capturedAt, today)));
    const touchedBooks = records.filter((record) => sessionsForDay(record, today).length > 0).length;
    const goalMs = this.plugin.trackerSettings.dailyGoalMinutes * 60_000;

    this.renderMetricGrid(root, [
      ["阅读", formatDuration(todayMs), "stats-today-total"],
      ["目标", formatPercent(goalMs === 0 ? 100 : (todayMs / goalMs) * 100), "stats-today-goal"],
      ["阅读时段", String(todaySessions), "stats-today-sessions"],
      ["书目", String(touchedBooks), "stats-today-books"],
      ["高亮", String(todayExcerpts.filter((excerpt) => excerpt.type === "highlight").length), "stats-today-highlights"],
      ["批注", String(todayExcerpts.filter((excerpt) => excerpt.type === "annotation").length), "stats-today-annotations"]
    ]);
    this.renderProgressBar(root, goalMs === 0 ? 100 : (todayMs / goalMs) * 100, "今日目标", "stats-today-goal");
    this.renderHourlyChart(root, records, today);
    this.renderTodayExcerpts(root, pairs);
  }

  getTodayStatsValues(pairs: Array<{ book: BookIndex; record: BookRecord; status: BookStatus }>): Record<string, string> {
    const today = todayKey();
    const records = pairs.map((pair) => pair.record);
    const todayMs = records.reduce((sum, record) => sum + sessionsForDay(record, today).reduce((inner, session) => inner + session.durationMs, 0), 0);
    const todaySessions = records.reduce((sum, record) => sum + visibleSessionsForDay(record, today).length, 0);
    const todayExcerpts = records.flatMap((record) => record.excerpts.filter((excerpt) => !excerpt.baseline && sameDay(excerpt.capturedAt, today)));
    const touchedBooks = records.filter((record) => sessionsForDay(record, today).length > 0).length;
    const goalMs = this.plugin.trackerSettings.dailyGoalMinutes * 60_000;
    const goalPercent = goalMs === 0 ? 100 : (todayMs / goalMs) * 100;
    this.updateProgressDynamic("stats-today-goal", goalPercent);
    return {
      "stats-today-total": formatDuration(todayMs),
      "stats-today-goal": formatPercent(goalPercent),
      "stats-today-goal-label": `今日目标 · ${formatPercent(goalPercent)}`,
      "stats-today-sessions": String(todaySessions),
      "stats-today-books": String(touchedBooks),
      "stats-today-highlights": String(todayExcerpts.filter((excerpt) => excerpt.type === "highlight").length),
      "stats-today-annotations": String(todayExcerpts.filter((excerpt) => excerpt.type === "annotation").length)
    };
  }

  getCurrentBookStatsValues(pair: { book: BookIndex; record: BookRecord; status: BookStatus }): Record<string, string> {
    const { record } = pair;
    const activeDays = new Set(record.sessions.filter((session) => session.durationMs >= SHORT_SESSION_MS).map((session) => dateKey(new Date(session.startedAt))));
    this.updateProgressDynamic("stats-book-progress", record.progressPercent);
    return {
      "stats-book-total": formatDuration(record.totalReadMs),
      "stats-book-progress": formatPercent(record.progressPercent),
      "stats-book-progress-label": `阅读进度 · ${formatPercent(record.progressPercent)}`,
      "stats-book-sessions": String(visibleSessions(record).length),
      "stats-book-days": String(activeDays.size),
      "stats-book-highlights": String(record.cachedCounts.highlights),
      "stats-book-annotations": String(record.cachedCounts.annotations)
    };
  }

  getAllStatsValues(pairs: Array<{ book: BookIndex; record: BookRecord; status: BookStatus }>): Record<string, string> {
    const records = pairs.map((pair) => pair.record);
    const totalMs = records.reduce((sum, record) => sum + record.totalReadMs, 0);
    const available = pairs.filter((pair) => pair.status.exists).length;
    const activeDays = new Set(records.flatMap((record) => record.sessions.filter((session) => session.durationMs >= SHORT_SESSION_MS).map((session) => dateKey(new Date(session.startedAt)))));
    const streak = calculateStreak(records);
    const highlights = records.reduce((sum, record) => sum + record.cachedCounts.highlights, 0);
    const annotations = records.reduce((sum, record) => sum + record.cachedCounts.annotations, 0);
    return {
      "stats-all-total": formatDuration(totalMs),
      "stats-all-books": String(pairs.length),
      "stats-all-available": `${available}/${pairs.length}`,
      "stats-all-days": String(activeDays.size),
      "stats-all-streak": `${streak} 天`,
      "stats-all-excerpts": String(highlights + annotations)
    };
  }

  updateProgressDynamic(key: string, value: number) {
    const label = this.contentEl.querySelector<HTMLElement>(`[data-mrt-dynamic='${key}-label']`);
    if (label) label.setText(`${label.textContent?.split(" · ")[0] ?? "进度"} · ${formatPercent(value)}`);
    const fill = this.contentEl.querySelector<HTMLElement>(`[data-mrt-dynamic='${key}-fill']`);
    if (fill) fill.style.width = `${clamp(value, 0, 100)}%`;
  }

  async renderCurrentBookStats(root: HTMLElement) {
    const pair = await this.getCurrentBookPair();
    if (!pair) {
      root.createDiv({ text: "当前文件还不是书架中的书目。", cls: "mrt-muted" });
      root.createEl("button", { text: "加入当前文件" }).addEventListener("click", () => void this.plugin.addCurrentFileToBookshelf());
      return;
    }
    const { book, record } = pair;
    root.createDiv({ text: book.title, cls: "mrt-title" });
    root.createDiv({ text: displayBookPath(book), cls: "mrt-path" });
    const activeDays = new Set(record.sessions.filter((session) => session.durationMs >= SHORT_SESSION_MS).map((session) => dateKey(new Date(session.startedAt))));
    this.renderMetricGrid(root, [
      ["总时长", formatDuration(record.totalReadMs), "stats-book-total"],
      ["进度", formatPercent(record.progressPercent), "stats-book-progress"],
      ["阅读时段", String(visibleSessions(record).length), "stats-book-sessions"],
      ["活跃天", String(activeDays.size), "stats-book-days"],
      ["高亮", String(record.cachedCounts.highlights), "stats-book-highlights"],
      ["批注", String(record.cachedCounts.annotations), "stats-book-annotations"]
    ]);
    this.renderProgressBar(root, record.progressPercent, "阅读进度", "stats-book-progress");
    this.renderExcerptTypeChart(root, [{ label: "高亮", value: record.cachedCounts.highlights }, { label: "批注", value: record.cachedCounts.annotations }]);
    this.renderRecentSessions(root, record);
  }

  async renderAllStats(root: HTMLElement) {
    const pairs = await this.getBookPairs();
    const records = pairs.map((pair) => pair.record);
    const totalMs = records.reduce((sum, record) => sum + record.totalReadMs, 0);
    const available = pairs.filter((pair) => pair.status.exists).length;
    const activeDays = new Set(records.flatMap((record) => record.sessions.filter((session) => session.durationMs >= SHORT_SESSION_MS).map((session) => dateKey(new Date(session.startedAt)))));
    const streak = calculateStreak(records);
    const highlights = records.reduce((sum, record) => sum + record.cachedCounts.highlights, 0);
    const annotations = records.reduce((sum, record) => sum + record.cachedCounts.annotations, 0);

    this.renderMetricGrid(root, [
      ["总时长", formatDuration(totalMs), "stats-all-total"],
      ["书目", String(pairs.length), "stats-all-books"],
      ["可用", `${available}/${pairs.length}`, "stats-all-available"],
      ["活跃天", String(activeDays.size), "stats-all-days"],
      ["连续", `${streak} 天`, "stats-all-streak"],
      ["摘录", String(highlights + annotations), "stats-all-excerpts"]
    ]);
    this.renderExcerptTypeChart(root, [{ label: "高亮", value: highlights }, { label: "批注", value: annotations }]);
    this.renderMonthHeatmap(root, records);
  }

  async getBookPairs(): Promise<Array<{ book: BookIndex; record: BookRecord; status: BookStatus }>> {
    const pairs: Array<{ book: BookIndex; record: BookRecord; status: BookStatus }> = [];
    for (const book of this.plugin.data.books) {
      pairs.push({ book, record: await this.plugin.getRecord(book), status: this.plugin.statusForBook(book) });
    }
    return pairs;
  }

  async getCurrentBookPair(): Promise<{ book: BookIndex; record: BookRecord; status: BookStatus } | null> {
    const file = this.plugin.getActiveMarkdownFile();
    const activeAbsolutePath = file ? this.plugin.absolutePathForVaultPath(file.path) : null;
    const activeBook = activeAbsolutePath ? this.plugin.findBookByAbsolutePath(activeAbsolutePath) : null;
    if (file && !activeBook) return null;
    const book = activeBook ?? this.plugin.getLockedCurrentBook();
    if (!book) return null;
    return { book, record: await this.plugin.getRecord(book), status: this.plugin.statusForBook(book) };
  }

  renderMetricGrid(root: HTMLElement, metrics: Array<[string, string, string?]>) {
    const grid = root.createDiv({ cls: "mrt-stat-grid" });
    for (const [label, value, key] of metrics) {
      const card = grid.createDiv({ cls: "mrt-stat-card" });
      const valueEl = card.createDiv({ text: value, cls: "mrt-stat-value" });
      if (key) valueEl.setAttr("data-mrt-dynamic", key);
      card.createDiv({ text: label, cls: "mrt-stat-label" });
    }
  }

  renderProgressBar(root: HTMLElement, value: number, label: string, dynamicKey?: string) {
    const wrap = root.createDiv({ cls: "mrt-progress-wrap" });
    const labelEl = wrap.createDiv({ text: `${label} · ${formatPercent(value)}`, cls: "mrt-module-title" });
    if (dynamicKey) labelEl.setAttr("data-mrt-dynamic", `${dynamicKey}-label`);
    const track = wrap.createDiv({ cls: "mrt-progress-track" });
    const fill = track.createDiv({ cls: "mrt-progress-fill" });
    if (dynamicKey) fill.setAttr("data-mrt-dynamic", `${dynamicKey}-fill`);
    fill.style.width = `${clamp(value, 0, 100)}%`;
  }

  renderExcerptTypeChart(root: HTMLElement, items: Array<{ label: string; value: number }>) {
    const total = items.reduce((sum, item) => sum + item.value, 0);
    const section = root.createDiv({ cls: "mrt-type-card" });
    section.createDiv({ text: "摘录类型", cls: "mrt-module-title" });
    const body = section.createDiv({ cls: "mrt-type-body" });
    const donut = body.createDiv({ cls: total > 0 ? "mrt-donut" : "mrt-donut is-empty" });
    donut.style.background = buildDonutGradient(items);
    donut.createDiv({ text: String(total), cls: "mrt-donut-center" });
    const list = body.createDiv({ cls: "mrt-type-list" });
    for (const [index, item] of items.entries()) {
      const row = list.createDiv({ cls: "mrt-type-row" });
      row.createSpan({ cls: `mrt-type-dot type-${index}` });
      row.createSpan({ text: item.label, cls: "mrt-type-name" });
      row.createSpan({ text: String(item.value), cls: "mrt-type-count" });
    }
  }

  renderHourlyChart(root: HTMLElement, records: BookRecord[], day: string) {
    const buckets = hourlyBuckets(records, day);
    const max = Math.max(1, ...buckets);
    const section = root.createDiv({ cls: "mrt-chart mrt-hourly-chart", attr: { "data-mrt-chart": "hourly" } });
    section.createDiv({ text: "今日时段分布", cls: "mrt-module-title" });
    const peak = Math.max(...buckets);
    section.createDiv({ text: peak > 0 ? `峰值 ${formatDuration(peak)}/小时` : "今日暂无阅读时段", cls: "mrt-chart-meta" });
    section.appendChild(renderSmoothHourlySvg(buckets, max));
    const axis = section.createDiv({ cls: "mrt-hour-axis" });
    for (const label of ["0", "6", "12", "18", "24"]) {
      axis.createSpan({ text: label });
    }
  }

  renderMonthHeatmap(root: HTMLElement, records: BookRecord[]) {
    const days = daysInCurrentMonth();
    const values = days.map((day) => records.reduce((sum, record) => sum + sessionsForDay(record, day.key).reduce((inner, session) => inner + session.durationMs, 0), 0));
    const max = Math.max(1, ...values);
    const section = root.createDiv({ cls: "mrt-chart" });
    section.createDiv({ text: "本月热力图", cls: "mrt-module-title" });
    const weekdays = section.createDiv({ cls: "mrt-month-weekdays" });
    for (const weekday of ["一", "二", "三", "四", "五", "六", "日"]) {
      weekdays.createSpan({ text: weekday });
    }
    const grid = section.createDiv({ cls: "mrt-month-heatmap" });
    for (let index = 0; index < days[0].weekdayOffset; index += 1) {
      grid.createDiv({ cls: "mrt-month-pad" });
    }
    days.forEach((day, index) => {
      const level = values[index] === 0 ? 0 : Math.max(1, Math.ceil((values[index] / max) * 4));
      const cell = grid.createDiv({ cls: `mrt-month-cell level-${level}` });
      cell.createSpan({ text: String(day.day), cls: "mrt-month-day" });
      cell.setAttr("title", `${day.key}: ${formatDuration(values[index])}`);
    });
  }

  renderRecentSessions(root: HTMLElement, record: BookRecord) {
    const details = root.createEl("details", { cls: "mrt-details", attr: { open: "true" } });
    details.createEl("summary", { text: "最近阅读时段" });
    const sessions = visibleSessions(record).sort((a, b) => b.startedAt.localeCompare(a.startedAt)).slice(0, 8);
    if (sessions.length === 0) {
      details.createDiv({ text: "暂无阅读时段。", cls: "mrt-muted" });
      return;
    }
    for (const session of sessions) {
      const row = details.createDiv({ cls: "mrt-record-row" });
      row.createDiv({ text: `${dateKey(new Date(session.startedAt))} ${timeOnly(session.startedAt)}`, cls: "mrt-record-time" });
      row.createDiv({ text: formatDuration(session.durationMs), cls: "mrt-record-duration" });
    }
  }

  renderExcerptFeed(root: HTMLElement, book: BookIndex, record: BookRecord, title: string) {
    const feed = root.createDiv({ cls: "mrt-excerpt-feed" });
    feed.createDiv({ text: title, cls: "mrt-subheading" });
    const excerpts = [...record.excerpts].filter((excerpt) => !excerpt.baseline).sort((a, b) => b.capturedAt.localeCompare(a.capturedAt)).slice(0, 8);
    if (excerpts.length === 0) {
      const empty = feed.createDiv({ cls: "mrt-empty mrt-empty-card" });
      empty.createDiv({ text: "还没有新的摘录。" });
      empty.createDiv({ text: "在书中使用 ==高亮==、%%批注%% 或脚注批注后，这里会出现可回跳的摘录卡片。", cls: "mrt-muted" });
      return;
    }
    for (const excerpt of excerpts) {
      const item = feed.createDiv({ cls: "mrt-excerpt mrt-clickable" });
      item.createDiv({ text: `${formatExcerptType(excerpt.type)} · ${dateKey(new Date(excerpt.capturedAt))} ${timeOnly(excerpt.capturedAt)}`, cls: "mrt-excerpt-type" });
      item.createDiv({ text: excerpt.text, cls: "mrt-excerpt-text" });
      item.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        void this.jumpToExcerpt(book, excerpt);
      });
    }
  }

  async renderTodayExcerpts(root: HTMLElement, pairs: Array<{ book: BookIndex; record: BookRecord; status: BookStatus }>) {
    const details = root.createEl("details", { cls: "mrt-details" });
    details.createEl("summary", { text: "今日摘录" });
    const today = todayKey();
    let rendered = false;
    for (const pair of pairs) {
      const excerpts = pair.record.excerpts.filter((excerpt) => !excerpt.baseline && sameDay(excerpt.capturedAt, today));
      if (excerpts.length === 0) continue;
      rendered = true;
      details.createDiv({ text: pair.book.title, cls: "mrt-subheading" });
      for (const excerpt of excerpts) {
        const item = details.createDiv({ cls: "mrt-excerpt mrt-clickable" });
        item.createDiv({ text: `${formatExcerptType(excerpt.type)} · ${timeOnly(excerpt.capturedAt)}`, cls: "mrt-excerpt-type" });
        item.createDiv({ text: excerpt.text, cls: "mrt-excerpt-text" });
        item.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          void this.jumpToExcerpt(pair.book, excerpt);
        });
      }
    }
    if (!rendered) {
      details.createDiv({ text: "今天还没有捕捉到摘录。", cls: "mrt-muted" });
    }
  }

  async jumpToExcerpt(book: BookIndex, excerpt: ExcerptRecord) {
    try {
      if (!(await this.plugin.openBook(book))) return;
      const view = await waitForMarkdownView(this.app, book.vaultPath);
      if (!view) {
        new Notice("已打开书本，但编辑器尚未就绪。");
        return;
      }
      await ensureSourceMode(view);
      await sleep(60);
      const content = view.editor?.getValue?.();
      if (typeof content !== "string") {
        new Notice("已打开书本，但当前视图无法定位摘录。");
        return;
      }
      const index = findExcerptIndex(content, excerpt);
      if (index < 0 || index > content.length) {
        new Notice("已打开书本，但没有找到这条摘录的原文。");
        return;
      }
      const pos = view.editor.offsetToPos(index);
      view.editor.setCursor(pos);
      try {
        view.editor.scrollIntoView({ from: pos, to: pos }, true);
      } catch (error) {
        console.warn("Failed to scroll to excerpt", error);
      }
    } catch (error) {
      console.error("Failed to jump to excerpt", error);
      new Notice("定位摘录失败，但插件已避免中断。");
    }
  }
}

class PathModal extends Modal {
  constructor(
    app: App,
    private options: {
      title: string;
      initialPath: string;
      submitLabel: string;
      onSubmit: (path: string) => Promise<void>;
    }
  ) {
    super(app);
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h2", { text: this.options.title });
    const input = contentEl.createEl("textarea", { cls: "mrt-modal-textarea" });
    input.value = this.options.initialPath;
    input.placeholder = "C:\\path\\to\\book.md";
    input.focus();

    new Setting(contentEl)
      .addButton((button) =>
        button
          .setButtonText(this.options.submitLabel)
          .setCta()
          .onClick(async () => {
            await this.options.onSubmit(input.value);
            this.close();
          })
      )
      .addButton((button) => button.setButtonText("取消").onClick(() => this.close()));
  }
}

class ReadingTrackerSettingTab extends PluginSettingTab {
  constructor(app: App, private plugin: MarkdownReadingTrackerPlugin) {
    super(app, plugin);
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "ReadMark" });

    containerEl.createEl("h3", { text: "自动计时" });
    new Setting(containerEl)
      .setName("无操作停止计时")
      .setDesc("中央阅读区仍显示当前书本，但超过这个秒数没有滚动、点击或键盘活动时，停止累加阅读时长。")
      .addText((text) =>
        text.setValue(String(Math.round(this.plugin.trackerSettings.idleThresholdMs / 1000))).onChange(async (value) => {
          const seconds = Number(value);
          if (Number.isFinite(seconds) && seconds > 0) {
            this.plugin.trackerSettings.idleThresholdMs = seconds * 1000;
            await this.plugin.savePluginData();
          }
        })
      );

    new Setting(containerEl)
      .setName("计时精度")
      .setDesc("自动计时的刷新间隔，推荐 0.5 秒。修改后需要重载插件才会完全生效。")
      .addText((text) =>
        text.setValue(String(this.plugin.trackerSettings.timingTickMs / 1000)).onChange(async (value) => {
          const seconds = Number(value);
          if (Number.isFinite(seconds) && seconds >= 0.25) {
            this.plugin.trackerSettings.timingTickMs = seconds * 1000;
            await this.plugin.savePluginData();
            new Notice("请重载插件以应用新的计时精度。");
          }
        })
      );

    new Setting(containerEl)
      .setName("每日目标")
      .setDesc("单位为分钟，只用于本地统计展示，不会影响计时。")
      .addText((text) =>
        text.setValue(String(this.plugin.trackerSettings.dailyGoalMinutes)).onChange(async (value) => {
          const minutes = Number(value);
          if (Number.isFinite(minutes) && minutes >= 0) {
            this.plugin.trackerSettings.dailyGoalMinutes = minutes;
            await this.plugin.savePluginData();
          }
        })
      );

    new Setting(containerEl)
      .setName(this.plugin.trackingPaused ? "继续自动计时" : "暂停自动计时")
      .setDesc("这是临时控制。日常阅读不需要手动开始；只有中央阅读区正在显示当前书本 Markdown 时，插件才会自动计时。")
      .addButton((button) => button.setButtonText(this.plugin.trackingPaused ? "继续" : "暂停").onClick(() => void this.plugin.toggleTracking().then(() => this.display())));

    containerEl.createEl("h3", { text: "摘要导出" });
    new Setting(containerEl)
      .setName("每日摘要文件夹")
      .setDesc("库内相对路径。生成的今日阅读摘要会写入这里。")
      .addText((text) =>
        text.setValue(this.plugin.trackerSettings.summaryFolder).onChange(async (value) => {
          this.plugin.trackerSettings.summaryFolder = value || DEFAULT_SETTINGS.summaryFolder;
          await this.plugin.savePluginData();
        })
      );

    containerEl.createEl("h3", { text: "摘录识别" });
    new Setting(containerEl)
      .setName("识别 Markdown 高亮")
      .setDesc("识别 ==高亮== 并保存为摘录。")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.trackerSettings.detectHighlights).onChange(async (value) => {
          this.plugin.trackerSettings.detectHighlights = value;
          await this.plugin.savePluginData();
        })
      );

    new Setting(containerEl)
      .setName("识别 Obsidian 批注")
      .setDesc("识别 %%批注%% 并保存为摘录。")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.trackerSettings.detectComments).onChange(async (value) => {
          this.plugin.trackerSettings.detectComments = value;
          await this.plugin.savePluginData();
        })
      );

    new Setting(containerEl)
      .setName("识别脚注批注")
      .setDesc("识别 [^id]: 形式的脚注定义并保存为批注摘录。")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.trackerSettings.detectFootnotes).onChange(async (value) => {
          this.plugin.trackerSettings.detectFootnotes = value;
          await this.plugin.savePluginData();
        })
      );

    containerEl.createEl("h3", { text: "书架绑定" });
    containerEl.createDiv({
      text: "本地路径是书本身份；库内路径只是 Obsidian 能打开它时派生出的路径。改路径就是手动恢复同一本书的阅读时段和摘录快照。",
      cls: "setting-item-description"
    });
    new Setting(containerEl)
      .setName("加入当前文件")
      .setDesc("把当前打开的 Markdown 文件加入书架。")
      .addButton((button) => button.setButtonText("加入").onClick(() => void this.plugin.addCurrentFileToBookshelf()));
    new Setting(containerEl)
      .setName("添加本地路径")
      .setDesc("粘贴一个 Markdown 文件的绝对路径。")
      .addButton((button) => button.setButtonText("添加").onClick(() => this.plugin.openPathModal()));

    for (const book of this.plugin.data.books) {
      const status = this.plugin.statusForBook(book);
      new Setting(containerEl)
        .setName(book.title)
        .setDesc(`${status.exists ? "可用" : "缺失"} · ${book.absolutePath}`)
        .addButton((button) => button.setButtonText("改路径").onClick(() => this.plugin.openPathModal(book)))
        .addButton((button) => button.setButtonText("移除").onClick(() => void this.plugin.removeBook(book.id).then(() => this.display())));
    }
  }
}

function trackingStateLabel(state: TrackingState): string {
  if (state === "tracking") return "正在自动计时";
  if (state === "locked") return "已锁定";
  if (state === "paused") return "已暂停";
  return "空闲";
}

function formatExcerptType(type: ExcerptType): string {
  return type === "highlight" ? "高亮" : "批注";
}

function displayBookPath(book: BookIndex): string {
  if (book.vaultPath) return book.vaultPath;
  return compactAbsolutePath(book.absolutePath);
}

function compactAbsolutePath(path: string): string {
  const normalized = normalizeAbsolutePath(path);
  const parts = normalized.split("\\").filter(Boolean);
  if (parts.length <= 3) return normalized;
  return `${parts[0]}\\...\\${parts.slice(-2).join("\\")}`;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function waitForMarkdownView(app: App, vaultPath: string | null, attempts = 12): Promise<MarkdownView | null> {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const active = app.workspace.getActiveViewOfType(MarkdownView);
    if (active && (!vaultPath || active.file?.path === vaultPath)) return active;

    for (const leaf of app.workspace.getLeavesOfType("markdown")) {
      if (leaf.view instanceof MarkdownView && (!vaultPath || leaf.view.file?.path === vaultPath)) {
        return leaf.view;
      }
    }
    await sleep(50);
  }
  return null;
}

async function ensureSourceMode(view: MarkdownView): Promise<void> {
  const editableView = view as unknown as {
    getMode?: () => string;
    getState?: () => Record<string, unknown>;
    setState?: (state: Record<string, unknown>, result: { history: boolean }) => Promise<void> | void;
  };
  if (editableView.getMode?.() === "source") return;
  if (!editableView.getState || !editableView.setState) return;
  await editableView.setState({ ...editableView.getState(), mode: "source" }, { history: false });
}

function parseExcerpts(content: string, settings: TrackerSettings): ObservedExcerpt[] {
  const results: ObservedExcerpt[] = [];
  if (settings.detectHighlights) collectMatches(content, /==([\s\S]*?)==/g, "highlight", "markdown-highlight", 1, results);
  if (settings.detectComments) collectMatches(content, /%%([\s\S]*?)%%/g, "annotation", "obsidian-comment", 1, results);
  if (settings.detectFootnotes) {
    const footnoteRegex = /^\[\^([^\]]+)\]:\s*(.+)$/gm;
    let match: RegExpExecArray | null;
    while ((match = footnoteRegex.exec(content)) !== null) {
      const text = match[2]?.trim();
      if (text) results.push(makeObserved(content, match.index, text, "annotation", "footnote-definition"));
    }
  }
  return results.sort((a, b) => a.position - b.position);
}

function collectMatches(
  content: string,
  regex: RegExp,
  type: ExcerptType,
  sourceSyntax: SourceSyntax,
  textGroup: number,
  results: ObservedExcerpt[]
) {
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    const text = match[textGroup]?.trim();
    if (text) results.push(makeObserved(content, match.index, text, type, sourceSyntax));
  }
}

function makeObserved(content: string, position: number, text: string, type: ExcerptType, sourceSyntax: SourceSyntax): ObservedExcerpt {
  return {
    type,
    sourceSyntax,
    text,
    position,
    line: content.slice(0, position).split(/\r?\n/).length,
    contextBefore: normalizeText(content.slice(Math.max(0, position - 120), position)),
    contextAfter: normalizeText(content.slice(position + text.length, position + text.length + 120))
  };
}

function findMatchingExcerpt(existing: ExcerptRecord[], observed: ObservedExcerpt): ExcerptRecord | null {
  let best: { excerpt: ExcerptRecord; score: number } | null = null;
  for (const excerpt of existing) {
    if (excerpt.type !== observed.type || excerpt.sourceSyntax !== observed.sourceSyntax) continue;
    const sameText = normalizeText(excerpt.text) === normalizeText(observed.text);
    const nearby = Math.abs(excerpt.position - observed.position) <= 1_000;
    const contextScore = Math.max(similarity(excerpt.contextBefore, observed.contextBefore), similarity(excerpt.contextAfter, observed.contextAfter));
    const textScore = similarity(excerpt.text, observed.text);
    const score = sameText ? 1 : textScore * 0.75 + contextScore * 0.25;
    if ((sameText && nearby) || (nearby && textScore >= 0.7) || (contextScore >= 0.75 && textScore >= 0.7)) {
      if (!best || score > best.score) best = { excerpt, score };
    }
  }
  return best?.excerpt ?? null;
}

function findExcerptIndex(content: string, excerpt: ExcerptRecord): number {
  const exact = content.indexOf(excerpt.text);
  if (exact >= 0) return exact;
  const lines = content.split(/\r?\n/);
  let offset = 0;
  let best = { index: -1, score: 0 };
  for (const line of lines) {
    const score = similarity(line, excerpt.text);
    if (score > best.score) best = { index: offset, score };
    offset += line.length + 1;
  }
  return best.score >= 0.7 ? best.index : -1;
}

function createBookRecord(book: BookIndex): BookRecord {
  return {
    schemaVersion: 2,
    id: book.id,
    absolutePath: book.absolutePath,
    vaultPath: book.vaultPath,
    title: book.title,
    progressPercent: 0,
    totalReadMs: 0,
    hasScannedContent: false,
    sessions: [],
    excerpts: [],
    cachedCounts: { highlights: 0, annotations: 0 }
  };
}

function updateCachedCounts(record: BookRecord) {
  record.cachedCounts = {
    highlights: record.excerpts.filter((excerpt) => excerpt.type === "highlight").length,
    annotations: record.excerpts.filter((excerpt) => excerpt.type === "annotation").length
  };
}

function findMergeableSession(record: BookRecord, now: Date): ReadingSession | null {
  const today = dateKey(now);
  const candidates = record.sessions
    .filter((session) => sameDay(session.startedAt, today))
    .sort((a, b) => sessionEndTime(b) - sessionEndTime(a));
  const latest = candidates[0];
  if (!latest) return null;
  const gap = now.getTime() - sessionEndTime(latest);
  return gap >= 0 && gap <= SESSION_MERGE_GAP_MS ? latest : null;
}

function normalizeReadingSessions(record: BookRecord): boolean {
  const original = JSON.stringify(record.sessions.map((session) => [session.id, session.startedAt, session.endedAt, session.durationMs]));
  const sorted = [...record.sessions]
    .filter((session) => Number.isFinite(session.durationMs) && session.durationMs > 0)
    .sort((a, b) => new Date(a.startedAt).getTime() - new Date(b.startedAt).getTime());
  const merged: ReadingSession[] = [];

  for (const session of sorted) {
    const previous = merged[merged.length - 1];
    if (previous && sameDay(previous.startedAt, dateKey(new Date(session.startedAt))) && sessionStartTime(session) - sessionEndTime(previous) <= SESSION_MERGE_GAP_MS) {
      previous.durationMs += session.durationMs;
      previous.endedAt = new Date(Math.max(sessionEndTime(previous), sessionEndTime(session))).toISOString();
      continue;
    }
    merged.push({ ...session });
  }

  const kept = merged.filter((session) => session.durationMs >= SHORT_SESSION_MS);
  const total = kept.reduce((sum, session) => sum + session.durationMs, 0);
  const changed = original !== JSON.stringify(kept.map((session) => [session.id, session.startedAt, session.endedAt, session.durationMs])) || record.totalReadMs !== total;
  if (changed) {
    record.sessions = kept;
    record.totalReadMs = total;
  }
  return changed;
}

function sessionStartTime(session: ReadingSession): number {
  return new Date(session.startedAt).getTime();
}

function sessionEndTime(session: ReadingSession): number {
  return new Date(session.endedAt ?? session.startedAt).getTime();
}

function shouldSyncExcerptDeletion(excerpt: ExcerptRecord, settings: TrackerSettings): boolean {
  if (excerpt.sourceSyntax === "markdown-highlight") return settings.detectHighlights;
  if (excerpt.sourceSyntax === "obsidian-comment") return settings.detectComments;
  if (excerpt.sourceSyntax === "footnote-definition") return settings.detectFootnotes;
  return false;
}

function buildDonutGradient(items: Array<{ label: string; value: number }>): string {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  if (total <= 0) return "conic-gradient(var(--background-modifier-hover) 0% 100%)";
  const colors = ["var(--interactive-accent)", "var(--text-accent)", "#8f6f4f", "#4f7a64", "#7a587a"];
  let cursor = 0;
  const segments: string[] = [];
  for (const [index, item] of items.entries()) {
    if (item.value <= 0) continue;
    const next = cursor + (item.value / total) * 100;
    segments.push(`${colors[index % colors.length]} ${cursor}% ${next}%`);
    cursor = next;
  }
  return `conic-gradient(${segments.join(", ")})`;
}

function hourlyBuckets(records: BookRecord[], day: string): number[] {
  const buckets = Array.from({ length: 24 }, () => 0);
  const dayStart = dayStartTime(day);
  const dayEnd = dayStart + 24 * 60 * 60_000;

  for (const record of records) {
    for (const session of record.sessions) {
      if (session.durationMs <= 0) continue;
      const start = sessionStartTime(session);
      let end = sessionEndTime(session);
      if (end <= start) end = start + session.durationMs;
      if (end <= dayStart || start >= dayEnd) continue;
      const span = Math.max(1, end - start);
      const scale = session.durationMs / span;

      for (let hour = 0; hour < 24; hour += 1) {
        const hourStart = dayStart + hour * 60 * 60_000;
        const hourEnd = hourStart + 60 * 60_000;
        const overlap = Math.max(0, Math.min(end, hourEnd) - Math.max(start, hourStart));
        if (overlap > 0) buckets[hour] += overlap * scale;
      }
    }
  }

  return buckets;
}

function renderSmoothHourlySvg(values: number[], max: number): SVGSVGElement {
  const svg = svgEl("svg");
  setSvgAttrs(svg, { viewBox: "0 0 100 58", preserveAspectRatio: "none", class: "mrt-hour-svg", role: "img", "aria-label": "今日 0 到 24 小时阅读分布" });

  for (const y of [14, 30, 46]) {
    const line = svgEl("line");
    setSvgAttrs(line, { x1: "0", y1: String(y), x2: "100", y2: String(y), class: "mrt-hour-grid" });
    svg.appendChild(line);
  }

  const bottom = 52;
  const top = 8;
  const height = bottom - top;
  const points = values.map((value, index) => ({
    x: (index / 23) * 100,
    y: bottom - (clamp(value / max, 0, 1) * height)
  }));
  const linePath = smoothPath(points);
  const areaPath = `${linePath} L ${points[points.length - 1].x.toFixed(2)} ${bottom} L ${points[0].x.toFixed(2)} ${bottom} Z`;

  const area = svgEl("path");
  setSvgAttrs(area, { d: areaPath, class: "mrt-hour-area" });
  svg.appendChild(area);

  const line = svgEl("path");
  setSvgAttrs(line, { d: linePath, class: "mrt-hour-line" });
  svg.appendChild(line);

  return svg;
}

function svgEl<K extends keyof SVGElementTagNameMap>(tag: K): SVGElementTagNameMap[K] {
  return document.createElementNS("http://www.w3.org/2000/svg", tag);
}

function setSvgAttrs(element: SVGElement, attrs: Record<string, string>) {
  for (const [key, value] of Object.entries(attrs)) {
    element.setAttribute(key, value);
  }
}

function smoothPath(points: Array<{ x: number; y: number }>): string {
  if (points.length === 0) return "";
  let path = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
  for (let index = 0; index < points.length - 1; index += 1) {
    const p0 = points[index - 1] ?? points[index];
    const p1 = points[index];
    const p2 = points[index + 1];
    const p3 = points[index + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    path += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }
  return path;
}

function daysInCurrentMonth(): Array<{ key: string; day: number; weekdayOffset: number }> {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const first = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0).getDate();
  const weekdayOffset = (first.getDay() + 6) % 7;
  const days: Array<{ key: string; day: number; weekdayOffset: number }> = [];
  for (let day = 1; day <= lastDay; day += 1) {
    days.push({ key: dateKey(new Date(year, month, day)), day, weekdayOffset });
  }
  return days;
}

function dayStartTime(day: string): number {
  const [year, month, date] = day.split("-").map(Number);
  return new Date(year, month - 1, date).getTime();
}

function normalizeBookIndex(book: BookIndex): BookIndex {
  const absolutePath = normalizeAbsolutePath(book.absolutePath);
  return {
    id: book.id || randomId(),
    absolutePath,
    vaultPath: book.vaultPath ? normalizePath(book.vaultPath) : null,
    title: book.title || titleFromPath(absolutePath),
    addedAt: book.addedAt || new Date().toISOString(),
    updatedAt: book.updatedAt || new Date().toISOString(),
    lastOpenedAt: book.lastOpenedAt ?? null
  };
}

function createDefaultData(): PluginData {
  return {
    schemaVersion: 2,
    settings: { ...DEFAULT_SETTINGS },
    books: [],
    lastLoadedAt: null
  };
}

function findScroller(container: HTMLElement): HTMLElement | null {
  return (
    container.querySelector<HTMLElement>(".cm-scroller") ??
    container.querySelector<HTMLElement>(".markdown-preview-view") ??
    container.querySelector<HTMLElement>(".workspace-leaf-content")
  );
}

function sessionsForDay(record: BookRecord, day: string): ReadingSession[] {
  return record.sessions.filter((session) => sameDay(session.startedAt, day));
}

function visibleSessions(record: BookRecord): ReadingSession[] {
  return record.sessions.filter((session) => session.durationMs >= SHORT_SESSION_MS);
}

function visibleSessionsForDay(record: BookRecord, day: string): ReadingSession[] {
  return visibleSessions(record).filter((session) => sameDay(session.startedAt, day));
}

function calculateStreak(records: BookRecord[]): number {
  const activeDays = new Set<string>();
  for (const record of records) {
    for (const session of record.sessions) {
      if (session.durationMs >= SHORT_SESSION_MS) activeDays.add(dateKey(new Date(session.startedAt)));
    }
  }
  let streak = 0;
  const cursor = new Date();
  while (activeDays.has(dateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function normalizeAbsolutePath(value: string): string {
  const cleaned = value.trim().replace(/^["']|["']$/g, "");
  return cleaned.replace(/\//g, "\\").replace(/\\+/g, "\\").replace(/\\$/g, "");
}

function comparablePath(value: string): string {
  return normalizeAbsolutePath(value).toLowerCase();
}

function titleFromPath(value: string): string {
  const normalized = normalizeAbsolutePath(value);
  return (normalized.split("\\").pop() ?? normalized).replace(/\.md$/i, "");
}

function cleanVaultPath(value: string): string {
  return normalizePath((value || "").trim()).replace(/^\/+|\/+$/g, "");
}

function randomId(): string {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function todayKey(): string {
  return dateKey(new Date());
}

function dateKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function sameDay(iso: string | null, day: string): boolean {
  return !!iso && dateKey(new Date(iso)) === day;
}

function timeOnly(iso: string): string {
  return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatDuration(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

function formatPercent(value: number): string {
  return `${Math.round(clamp(value, 0, 100))}%`;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function normalizeText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function similarity(a: string, b: string): number {
  const left = normalizeText(a).toLowerCase();
  const right = normalizeText(b).toLowerCase();
  if (left === right) return 1;
  if (!left || !right) return 0;
  if (left.includes(right) || right.includes(left)) return Math.min(left.length, right.length) / Math.max(left.length, right.length);
  const leftSet = bigrams(left);
  const rightSet = bigrams(right);
  let intersection = 0;
  for (const item of leftSet) {
    if (rightSet.has(item)) intersection += 1;
  }
  return leftSet.size + rightSet.size === 0 ? 0 : (2 * intersection) / (leftSet.size + rightSet.size);
}

function bigrams(value: string): Set<string> {
  const result = new Set<string>();
  if (value.length < 2) {
    result.add(value);
    return result;
  }
  for (let index = 0; index < value.length - 1; index += 1) {
    result.add(value.slice(index, index + 2));
  }
  return result;
}
