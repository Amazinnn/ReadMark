# Architecture

ReadMark is a desktop-only Obsidian plugin. It tracks selected Markdown books, records reading sessions, scans source markup for excerpts, and renders a right-sidebar reading dashboard.

## Main Parts

- `manifest.json` declares the Obsidian plugin ID `readmark` and display name `ReadMark`.
- `src/main.ts` contains the plugin class, sidebar view, settings tab, storage helpers, excerpt parsing, and chart rendering.
- `styles.css` styles the sidebar UI.
- `main.js` is the bundled output consumed by Obsidian.

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
- `%%Obsidian comment%%`
- footnote definitions

Detected excerpts are stored as source-derived snapshots. When source markup is removed, matching snapshots are removed too.

## Sidebar Structure

The sidebar has three navigable sections plus a compact app header.

- App header: only a book icon and the "ReadMark" title. It carries no action buttons or status badge.
- Current Book: reading state, progress, and recent excerpts. The current tracking state is shown as a small pill at the right side of the hero block.
- Bookshelf: book management, recent-reading cards, and the "加入当前文件" / "添加本地路径" actions live at the bottom of the book list block. These two actions are only visible while the Bookshelf section is active.
- Stats: today, current-book, and all-books statistics.
  - Today: 3 metrics (阅读时长/目标时长, 阅读时段, 书目).
  - Current Book: 4 metrics (总时长, 进度, 阅读时段, 活跃天数) plus an excerpt-type donut.
  - All: 3 metrics (总时长, 书目, 活跃+连续).

Charts are rendered with local DOM/SVG code. No chart library is used.

## Visual System

The sidebar uses a compact, light-theme-first palette defined in `styles.css`. All values are baked into CSS; no CSS variables are introduced.

- Accent: `#ff9f6b` (warm orange). Used for progress bars, status pill in `tracking` state, focus borders on hover, and the donut center text.
- Border: `#e1b437` (mustard yellow). All `.mrt-*` cards and panels use this 1px border.
- Page background: `#e6e6e6` (gray). Applied to `.mrt-view` so cards float on a slightly darker surface.
- Card background: `#ffffff`. Cards keep white fills to separate from the gray page.
- Radius: 10px. Block gap: 6px. Card padding: 8px.
- Heading: 17px / weight 650. Stat values use a larger variant (clamp 20–30px, weight 850).
- Hover: 2px upward translation with `0 6px 14px rgba(0,0,0,0.18)` shadow. Border color shifts toward the accent.
- Status pill colors:
  - `tracking`: orange border, 18%–32% orange background, 2s linear breathing animation.
  - `locked`: mustard border, light yellow background.
  - `paused`: gray border, light gray background, muted text.
  - `idle`: orange border, 8% orange background.
- Heatmap 5 levels: pure orange gradient, with white text from level 3 upward for legibility.

## Information Layer

The sidebar surfaces numeric detail that charts and grids would otherwise hide.

- **Hero status pill**: a single pill at the right edge of the current-book hero. Its label is the short form of `TrackingState` (计时中 / 已锁定 / 已暂停 / 空闲). Only the `tracking` state animates, with a 2s linear background pulse.
- **Hourly chart tooltip**: the SVG adds 24 transparent `<rect>` hotzones covering each hour. `mousemove` resolves the cursor x to an hour index and shows `HH:00 · 时长` in a floating tooltip above the chart. `mouseleave` hides it.
- **Heatmap tooltip**: each day cell carries `data-day` / `data-ms` / `data-sessions`. `mouseenter` shows `YYYY-MM-DD · X 段 · 时长`; zero-duration days show "无阅读". On hover, the cell paints an orange outline that does not shift layout.

## Build Output

`npm run build` compiles `src/main.ts` into `main.js`.

The repository itself is the local Obsidian test plugin directory. After `npm run build`, Obsidian reads the updated `main.js` from the same folder after the plugin is reloaded.

Runtime data remains ignored even though the source repository lives inside the plugin directory.
