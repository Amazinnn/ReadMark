# Claude Code Notes

Work from this stable project root:

```text
D:\Projects\项目仓库Bingo\.obsidian\plugins\readmark
```

This repository is also the local Obsidian test plugin directory. Build output is visible to Obsidian after reload:

```text
D:\Projects\项目仓库Bingo\.obsidian\plugins\readmark
```

Before editing, read:

1. `AGENTS.md`
2. `CONTEXT.md`
3. The relevant file under `docs/`

The most important rules:

- Edit `src/main.ts` and `styles.css`, not `main.js`.
- Run `npm run build` after code changes.
- Reload the plugin or restart Obsidian after building.
- Never commit `data.json` or `books/`.
- Keep `manifest.json.id` as lowercase `readmark`; use `ReadMark` as the display name.
