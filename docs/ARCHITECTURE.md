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

The sidebar has three sections:

- Current Book - reading state, progress, and recent excerpts.
- Bookshelf - book management and continue-reading actions.
- Stats - today, current-book, and all-books statistics.

Charts are rendered with local DOM/SVG code. No chart library is used.

## Build Output

`npm run build` compiles `src/main.ts` into `main.js`.

The repository itself is the local Obsidian test plugin directory. After `npm run build`, Obsidian reads the updated `main.js` from the same folder after the plugin is reloaded.

Runtime data remains ignored even though the source repository lives inside the plugin directory.
