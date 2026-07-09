# ReadMark

ReadMark is an Obsidian plugin for tracking reading time, progress, highlights, and annotations in local Markdown books.

It is built for readers who keep books as Markdown files and want local, inspectable reading records without sending reading data to a service.

## Features

- Track reading time for Markdown books added to a user-managed bookshelf.
- Preserve reading progress and continue from the last position.
- Detect Markdown highlights, Obsidian comments, and footnote annotations.
- Show today's reading, current-book stats, all-books stats, hourly distribution, and a monthly heatmap.
- Store durable reading data as local per-book JSON records.

## Privacy

ReadMark is local-first. Runtime data may include local filesystem paths, reading sessions, progress, and excerpt text.

Do not commit:

- `data.json`
- `books/`
- `node_modules/`

These files are ignored by `.gitignore`.

## Development

```powershell
cd "D:\Projects\项目仓库Bingo\.obsidian\plugins\readmark"
npm install
npm run build
```

This repository lives directly inside the local Obsidian test vault's plugin directory:

```text
D:\Projects\项目仓库Bingo\.obsidian\plugins\readmark
```

After `npm run build`, Obsidian can load the updated `main.js` from the same directory. Reload the plugin or restart Obsidian to see code changes.

Obsidian loads `manifest.json`, `main.js`, and `styles.css`. Edit `src/main.ts` and `styles.css`; do not edit `main.js` directly.

## Repository

GitHub description:

```text
ReadMark: Track reading time, progress, highlights, and annotations for local Markdown books in Obsidian.
```

Remote:

```text
https://github.com/Amazinnn/ReadMark.git
```

## Documentation

- `AGENTS.md` - required handoff notes for coding agents.
- `CLAUDE.md` - Claude Code entry notes.
- `docs/ARCHITECTURE.md` - runtime structure and data flow.
- `docs/DATA_MODEL.md` - storage and record semantics.
- `docs/DEVELOPMENT.md` - setup, build, QA, and release workflow.
- `docs/VERSIONING.md` - version, tag, and release rules.
