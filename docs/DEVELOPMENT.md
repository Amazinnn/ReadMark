# Development

Use this document for local setup, build, verification, and release preparation.

## Project Root

Use the stable source project:

```text
D:\Projects\项目仓库Bingo\.obsidian\plugins\readmark
```

This repository lives directly inside the local Obsidian test vault's plugin directory so builds can be tested immediately.

## Install

```powershell
cd "D:\Projects\项目仓库Bingo\.obsidian\plugins\readmark"
npm install
```

## Build

```powershell
npm run build
```

This runs TypeScript checking and bundles `src/main.ts` to `main.js`.

Do not edit `main.js` manually.

## Obsidian Test Vault

```text
D:\Projects\项目仓库Bingo
```

The plugin directory is this repository:

```text
D:\Projects\项目仓库Bingo\.obsidian\plugins\readmark
```

After `npm run build`, reload the plugin or restart Obsidian to test the new `main.js`.

## Manual Obsidian Verification

After building:

1. Reload Obsidian or reload the plugin.
2. Enable `ReadMark`.
3. Open the ReadMark sidebar from the ribbon or command palette.
4. Open a tracked Markdown book in the central workspace.
5. Confirm timing starts only while that book is shown centrally.
6. Click the sidebar and confirm timing continues.
7. Close or replace the central book and confirm timing stops.
8. Add, edit, and delete a highlight or annotation and confirm excerpt snapshots update.
9. Check the three sidebar sections:
   - Current Book
   - Bookshelf
   - Stats
10. Confirm charts render and collapsible sections do not flicker closed.
11. Confirm the hero status pill at the right of the current-book block changes label and color across `TrackingState` (tracking / locked / paused / idle). Only `tracking` should pulse.
12. Hover the hourly distribution chart and confirm a tooltip showing `HH:00 · 时长` follows the cursor over each hour.
13. Hover any day cell in the monthly heatmap and confirm a tooltip showing `日期 · 段数 · 时长` (or `无阅读` for zero-duration days), with an orange outline that does not shift layout.

## Release Artifacts

Obsidian consumes:

- `manifest.json`
- `main.js`
- `styles.css`

For GitHub Releases and future Obsidian community plugin submission, these files are the runtime artifacts.

See `docs/VERSIONING.md` before tagging or publishing a release.

## Repository Hygiene

Before committing:

```powershell
git status --short
```

Do not stage:

- `data.json`
- `books/`
- `node_modules/`
- local logs or temporary files.

## Remote

The intended GitHub remote is:

```text
https://github.com/Amazinnn/ReadMark.git
```
