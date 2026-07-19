# Development

> **Book World v3 note:** The old beta.3 long-text recovery and protocol-v2 acceptance instructions remain historical operational context. New semantic work follows `docs/ADR/2026-07-19-pre-render-semantic-network.md`, starts a fresh v3 task, and must not resume the old task as v3 truth.

Use this document for local setup, build, verification, and release preparation.

## Project Root

For local development, use a test vault and place the repository in that vault's plugin directory:

```text
<your-vault>/.obsidian/plugins/readmark
```

Keeping the repository at the plugin path lets Obsidian load the built output immediately after the plugin is reloaded.

## Install

```powershell
cd "<your-vault>\.obsidian\plugins\readmark"
npm install
```

## Build

```powershell
npm run build
```

This runs TypeScript checking and bundles `src/main.ts` to `main.js`.

Do not edit `main.js` manually.

Run local regression tests with:

```powershell
npm test
```

## Obsidian Test Vault

Use any local Obsidian vault for manual testing. The plugin directory should be this repository:

```text
<your-vault>/.obsidian/plugins/readmark
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
8. Add, edit, and delete a highlight, bold excerpt, annotation, and commentary excerpt; confirm excerpt snapshots and totals update.
9. Add, edit, and delete NOTE, IMPORTANT, WARNING, nested, foldable, title-only, and custom callouts; confirm each whole block syncs as one callout while internal reader marks remain separate.
10. Confirm existing callouts from the first callout scan appear under the current book and aggregate totals but not under today's newly captured excerpts.
11. Check the three sidebar sections:
   - Current Book
   - Bookshelf
   - Stats
12. Confirm charts render and collapsible sections do not flicker closed.
13. Confirm the hero status pill at the right of the current-book block changes label and color across `TrackingState` (tracking / locked / paused / idle). Only `tracking` should pulse.
14. Hover the hourly distribution chart and confirm a tooltip showing `HH:00 · 时长` follows the cursor over each hour.
15. Hover any day cell in the monthly heatmap and confirm a tooltip showing `日期 · 段数 · 时长` (or `无阅读` for zero-duration days), with an orange outline that does not shift layout.
16. Open ReadMark settings and verify all 11 color rows provide a picker, synchronized HEX input, and individual reset.
17. Change excerpt and callout semantic colors; confirm the preview and open sidebar update immediately without reloading.
18. Confirm the five excerpt colors affect donut segments, legend dots, and ordinary excerpt rails, while semantic colors affect callout cards only.
19. Reset one color and then the full palette; restart Obsidian and confirm the resulting palette persists.
20. Switch between light and dark Obsidian themes and confirm the same configured colors remain readable with theme-owned text colors.
21. Restart Obsidian with a tracked book open and confirm ReadMark restores the last stable reading position instead of the document start.

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
- local agent configuration files
- local logs or temporary files.

## Beta.3 Two-Repository Workflow

The active roots are:

```text
Plugin: D:\Projects\.obsidian\plugins\ReadMark
Runner: D:\Projects\readmark-map-runner
```

Read `docs/HANDOFF-2026-07-19-BETA3.md` before touching the current task. Do not use the obsolete `D:\Projects\项目仓库Bingo` path.

Runner verification:

```powershell
Set-Location 'D:\Projects\readmark-map-runner'
npm test
npm run typecheck
npm run build
```

Plugin verification:

```powershell
Set-Location 'D:\Projects\.obsidian\plugins\ReadMark'
npm test
npm run build
```

Reload ReadMark in Obsidian after a successful plugin build. Do not hand-edit `main.js`.

## Provider Configuration

Users configure one active OpenAI Compatible or Anthropic Compatible text endpoint and an independent optional image HTTP template. There are no mandatory vendor presets. Local development currently prefers MiniMax-M3 text and SenseNova u1-fast images.

Credentials are accepted through a transient plugin field and passed to `configure --stdin`. They must never appear in command arguments, console output, notices, task artifacts, logs, checkpoints, documentation, or Git. The Runner alone stores them in ignored `config.json`.

## Long-Text Recovery

Inspect the task directory before starting a process. A PID may have expired or been reused; match command lines and task ID. If a task stopped without `complete.json`, read only the Supervisor summary and the JSONL tail, then resume the same task. Never delete valid checkpoints or restart source analysis merely because a later stage failed.

The completion audit must verify exactly-one source disposition, linked-source coverage, source-ID containment, 100-250 concepts, valid relation endpoints, three run reports, and a valid selection reason. A mixed-provider run must be disclosed.

## Freeze Hygiene

Before any commit or release, inspect both repositories with `git status --short`. Confirm that `config.json`, `workspace/`, source snapshots, checkpoints, task reports, book content, `data.json`, `books/`, and `maps/` are absent from the public scope. The 2026-07-19 freeze authorizes no commit, push, tag, or release.

## Remote

The intended GitHub remote is:

```text
https://github.com/Amazinnn/ReadMark.git
```
