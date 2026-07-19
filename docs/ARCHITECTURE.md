# Architecture

> **Book World v3 note:** Protocol-v2 semantic shapes described in this document are historical implementation context. The current pre-render semantic design, terminology, ownership refinements, and hard compatibility cut are defined by `docs/ADR/2026-07-19-pre-render-semantic-network.md`.

ReadMark is a desktop-only Obsidian plugin. It tracks selected Markdown books, records reading sessions, scans source markup for excerpts, and renders a right-sidebar reading dashboard.

## Main Parts

- `manifest.json` declares the Obsidian plugin ID `readmark` and display name `ReadMark`.
- `src/main.ts` contains the plugin class, sidebar view, settings tab, storage helpers, excerpt parsing, and chart rendering.
- `src/color-settings.ts` owns color defaults, validation, legacy-setting normalization, and CSS variable mapping.
- `styles.css` styles the sidebar UI.
- `main.js` is the bundled output consumed by Obsidian.
- `src/reading-map/protocol.ts` defines the versioned JSON contract shared with the external Reading Map Runner.
- `src/reading-map/source-snapshot.ts` mechanically extracts Markdown AST source units for that contract.

## Reading Map Protocol Boundary

Reading Map Labs is an optional external workflow. ReadMark creates a protocol v2 source snapshot locally and accepts only validated semantic revisions. The external Runner is a separate repository and receives no plugin runtime state. ReadMark may receive a provider key transiently in a password field and sends it to the Runner through stdin, but never persists it. Semantic records may refer only to snapshot IDs, while code and formula evidence must carry explanatory prose references.

## Obsidian Lifecycle

The plugin registers:

- a custom sidebar view, `readmark-view`;
- a ribbon icon and commands;
- a settings tab;
- workspace events for file, leaf, layout, and editor changes;
- DOM activity events for idle detection;
- an interval timer based on `settings.timingTickMs`.

`onload()` loads plugin data, registers views and commands, normalizes stored records, detects the current readable book, and updates the status bar.

`onunload()` ends the active session and flushes dirty records.

## Readable Context

Timing permission is intentionally stricter than "a book is locked in the sidebar."

ReadMark counts time only when:

- Obsidian is focused and not hidden;
- the user is not idle;
- the central Obsidian workspace is currently showing the tracked Markdown book;
- the active book matches the current book lock.

The sidebar can be focused without stopping time, because the central reading area remains the source of truth. A background tab, closed page, or unrelated central document does not count as readable context.

## Timing Flow

The timer runs at the configured tick interval, currently 0.5 seconds by default.

On each tick:

1. Check readable context.
2. End the active session if context is invalid.
3. Find or start a mergeable reading session.
4. Add elapsed time to the session and book total.
5. Capture progress from the Markdown scroller.
6. Flush dirty records periodically.
7. Refresh visible sidebar dynamic fields.

UI time display uses whole seconds. Internal detection can remain more frequent than display.

## Session Model

Reading sessions are stored as coarse blocks, not tick logs.

- Sessions within the merge gap are combined.
- Very short sessions are removed during normalization.
- `totalReadMs` is kept consistent with valid sessions.

This keeps files small and preserves useful reading history.

## Excerpt Scan Flow

ReadMark scans Markdown source for configured markup:

- `==highlight==`
- `**bold**`
- `%%Obsidian comment%%`
- `==highlight==%%commentary%%` and `**bold**%%commentary%%`
- footnote definitions
- complete Obsidian callout blocks, including nested and custom types

Commentary excerpts are parsed before standalone highlights, bold excerpts, and annotations so a compound reader action counts once. Fenced code blocks and inline code are ignored by excerpt parsing.

Callouts use a line-oriented parser that tracks blockquote depth. Every declaration becomes one Callout Excerpt, nested callouts remain independently addressable, and reader marks inside callouts continue through the existing parsers. The parser also exposes quoted fenced-code ranges so fake markup inside callout code examples is ignored consistently.

Detected excerpts are stored as source-derived snapshots. When source markup is removed, matching snapshots are removed too.

## Position Restore

ReadMark stores three restore signals in each book record:

- `restoreCandidates`: a bounded recent history of usable restore targets.
- `lastReadingAnchor`: the newest source-mode paragraph near the middle of the visible Markdown editor, retained for compatibility and fallback.
- `lastStableProgressPercent`: a scroll-progress fallback.

Automatic restore happens on Reading Entry: when the central Obsidian reading area enters a tracked Markdown book. Sidebar focus and ordinary layout refreshes should not trigger repeated restore attempts. Explicit ReadMark actions such as "打开" and "继续阅读" always restore once after opening the book.

Restore candidates are captured only during Readable Context and are pruned to the latest 60 seconds, with a hard cap of 180 candidates. The restore resolver searches from the last captured moment backward until it finds a usable target.

Mode-specific restore:

- Reading/preview mode restores by high-precision scroll percentage.
- Source/live-preview mode prefers a matching paragraph anchor, then falls back to high-precision percentage.
- Restore keeps the user's current Obsidian view mode; it does not switch the book into source mode.

A stable progress position remains a coarse fallback. It is a 3-second window whose progress changes by no more than 1.5 percentage points within the last minute.

## Sidebar Structure

The sidebar has three navigable sections plus a compact app header.

- App header: only a book icon and the "ReadMark" title. It carries no action buttons or status badge.
- Current Book: reading state, progress, and all source-derived excerpts for the current book. The current tracking state is shown as a small pill at the right side of the hero block.
- Bookshelf: book management, recent-reading cards, and the "加入当前文件" / "添加本地路径" actions live at the bottom of the book list block. These two actions are only visible while the Bookshelf section is active.
- Stats: today, current-book, and all-books statistics.
  - Today: 4 metrics (阅读时长/目标时长, 阅读时段, 书目, 摘录).
  - Current Book: 4 metrics (总时长, 进度, 阅读时段, 活跃天数) plus an excerpt-type donut.
  - All: 3 metrics (总时长, 书目, 活跃+连续).

Charts are rendered with local DOM/SVG code. No chart library is used.

## Visual System

The sidebar uses a compact, light-theme-first visual system defined in `styles.css`. Structural colors remain part of the theme, while excerpt colors are user settings applied as CSS variables on ReadMark roots only. The settings preview and sidebar therefore share one color source without modifying Obsidian or other plugins.

- Accent: `#8b7cff` / `#523cfb` / `#6653f3` (purple family). Used for progress bars, hover borders, and the ReadMark logo halo.
- Excerpt palette: five configurable colors drive donut segments, legend dots, and ordinary excerpt rails. The callout category remains one donut segment.
- Callout semantic palette: six configurable colors drive callout rails, badges, and tinted badge backgrounds without splitting callout statistics.
- Border: `#e6dfd0` (soft warm gray). Cards and panels use thin 0.5px borders.
- Page background: `#f4f1ea` (warm page gray). Applied to `.mrt-view` so white cards read as distinct surfaces.
- Card background: `#ffffff`. Cards keep white fills to separate from the page surface.
- Radius: 12px for cards and panels; block gap: 5px; card padding: 11px.
- Heading: 18px / weight 750 / line-height 1.4. Stat and donut values are slimmed to avoid crowding.
- Hover: 1px upward translation with a stronger shadow; border color shifts toward deep purple.
- Status pill colors:
  - `tracking`: purple border, 18%–32% purple background, 2s linear breathing animation.
  - `locked`: soft warm-gray border and light neutral background.
  - `paused`: gray border, light gray background, muted text.
  - `idle`: purple border, 8% purple background.
- Heatmap 5 levels: purple-forward accent levels, with white text from level 3 upward for legibility.

## Information Layer

The sidebar surfaces numeric detail that charts and grids would otherwise hide.

- **Hero status pill**: a single pill at the right edge of the current-book hero. Its label is the short form of `TrackingState` (计时中 / 已锁定 / 已暂停 / 空闲). Only the `tracking` state animates, with a 2s linear background pulse.
- **Hourly chart tooltip**: the SVG adds 24 transparent `<rect>` hotzones covering each hour. `mousemove` resolves the cursor x to an hour index and shows `HH:00 · 时长` in a floating tooltip above the chart. `mouseleave` hides it.
- **Heatmap tooltip**: each day cell carries `data-day` / `data-ms` / `data-sessions`. `mouseenter` shows `YYYY-MM-DD · X 段 · 时长`; zero-duration days show "无阅读". On hover, the cell paints an orange outline that does not shift layout.

## Build Output

`npm run build` compiles `src/main.ts` into `main.js`.

The repository itself is the local Obsidian test plugin directory. After `npm run build`, Obsidian reads the updated `main.js` from the same folder after the plugin is reloaded.

Runtime data remains ignored even though the source repository lives inside the plugin directory.

## Book World Labs

Book World uses an external companion Runner and protocol v2 JSON artifacts. The plugin owns Markdown AST extraction, source fingerprints, task export, child-process orchestration, import validation, revision retention, and the central `readmark-map-view`. The Runner owns its plaintext local configuration, compatible-provider calls, checkpoints, three staged semantic runs, quality audits, and result selection.

The plugin auto-detects the Runner installation and Node, invokes commands with argument arrays and `shell: false`, sends configuration through stdin, consumes sanitized JSONL stage events, and permits only one active task. Attribute proposals are confirmed as one read-only batch. Completion triggers a fresh read of the Current Book and automatic validated import. Cancellation or plugin unload terminates the child process; persisted task-directory and stage state allow checkpoint continuation without storing a PID or key.

Beta.2 adds explainable scoring, a central Three.js/D3 view, and book-specific art. D3 performs a deterministic stopped simulation and persists layout coordinates; it does not animate the production world continuously. Three.js owns the orthographic scene, procedural terrain, geometry fallback buildings, AI Sprites, contact shadows, roads, fog, lights, raycasting, and camera. HTML overlays own controls, labels, hover evidence, pinned detail, and art confirmation.

The Runner derives a versioned `StyleManifest` from semantic attributes, concept labels, and representative source evidence. It generates one concept image and stops for confirmation. After confirmation it creates reusable modules and attribute landmarks, then emits a hashed `AssetManifest` and deterministic concept recipes. Text and image providers are configured independently. The current local policy prefers MiniMax-M3 for text and SenseNova u1-fast for images; no vendor preset is imposed on new users. Plugin import validates the current revision, fixed paths, real file locations, MIME signatures, hashes, sizes, recipes, and the 20 MB limit before copying assets under map storage. Semantic imports remain validated against a fresh source snapshot rebuilt from the Current Book, never against Runner-supplied source text.

## Beta.3 Long-Text Pipeline

The Runner mechanically splits Markdown into language-aware Source Units and guarantees that every unit receives one Source Disposition. Bounded source batches are analyzed concurrently, and context or repeated schema failures split only the affected batch. Accepted checkpoints are keyed by source hashes and prompt version. Local candidates are reduced hierarchically before three attribute proposals and one critic review produce the batch-confirmed world regions.

After confirmation, the Runner finalizes run 1 and performs independent runs 2 and 3. Each run consolidates 100-250 concepts, classifies typed relations, validates references, audits quality, and receives a mechanical score. The Selection Report combines base quality with cross-run agreement and publishes the highest-scoring revision atomically.

The plugin creates its Book World shell once. Runner events update only progress state; they must not clear the central view or rebuild the Three.js Canvas. Rendering is demand-driven and resources must be released on view closure or WebGL loss.

The local Supervisor is an operational recovery aid, not product architecture or a public artifact. It resumes one task directory, confirms attributes when required, applies bounded retry delays, and detects `complete.json`. Obsidian remains the intended product-level orchestrator.

## Freeze Note: 2026-07-19

Beta.3 is unfinished. Source run 1 completed its source batches, but the frozen task was only entering candidate consolidation. Run 1 contains checkpoints from both MiniMax and SenseNova because checkpoint inputs do not yet include a sanitized Provider Profile fingerprint. Runs and reports must disclose this provenance gap. See `docs/HANDOFF-2026-07-19-BETA3.md` before resuming.
