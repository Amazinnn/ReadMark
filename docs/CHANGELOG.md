# Changelog

## 0.3.1 - 2026-07-09

### Branding

- Added a custom ReadMark SVG icon based on the rounded page, bookmark, reading marks, and bottom-notch motif.
- Registered the custom icon with Obsidian and replaced the built-in `book-open` icon in the ribbon, view tab, and sidebar header.
- Added the icon to the README hero area for clearer GitHub presentation.

## 0.3.0 - 2026-07-09

### UI

- Redid the sidebar visual system: warm orange accent `#ff9f6b`, mustard border `#e1b437`, gray page background; 10px radius, compact layout (6px block gap, 8px card padding); 17px / 650 headings.
- Slimmed the top app header to a book icon plus title. Removed the three toolbar buttons and the inline status badge.
- Moved tracking state to a `.mrt-status-pill` at the right of the current-book hero. Only the `tracking` state animates with a 2s breathing pulse.
- Added 24 transparent hotzones to the hourly distribution chart so a `HH:00 · 时长` tooltip can follow the cursor.
- Rebuilt the monthly heatmap with a 5-step orange gradient and a per-cell tooltip showing `日期 · 段数 · 时长` (or "无阅读" for zero-duration days). Hover paints a non-layout-shifting orange outline.
- Removed the browser default disclosure triangle on `<details>` summary elements so the title text falls inside the card padding.

### Window simplification

- Stats - Today: 6 metrics → 3. Merged "阅读" and "目标" into a single `阅读时长/目标时长` cell.
- Stats - Current Book: 6 metrics → 4. Dropped "高亮" and "批注" (the donut below already conveys this).
- Stats - All: 6 metrics → 3. Merged "活跃天数" and "连续天数" into one cell with a two-line label.
- Moved "加入当前文件" and "添加本地路径" from the top toolbar to the bottom of the Bookshelf list block. They are only visible while the Bookshelf section is active.

### Removed

- Dropped the "生成今日摘要" feature entirely: UI, the `generate-today-reading-summary` command, and the `generateTodaySummary` method.
- Cleaned up obsolete dynamic keys from `getTodayStatsValues` / `getAllStatsValues` / `getCurrentBookStatsValues`: `stats-today-total`, `stats-today-goal`, `stats-today-goal-label`, `stats-today-highlights`, `stats-today-annotations`, `stats-all-available`, `stats-all-streak`, `stats-all-excerpts`, `stats-book-highlights`, `stats-book-annotations`.
- Removed the unused `available` local in `renderAllStats` and `getAllStatsValues`.
- Removed the `createToolButton` helper and its three call sites.
