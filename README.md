<div align="center">

<p>
  <img src="./assets/readmark-icon.svg" alt="ReadMark icon" width="112" height="112">
</p>

# ReadMark

**A local-first reading tracker for Markdown books in Obsidian.**

Track reading time, progress, highlights, bold excerpts, annotations, and commentary excerpts without sending your reading life to a service.

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.4.3-4719b8?style=flat-square">
  <img alt="Obsidian" src="https://img.shields.io/badge/Obsidian-1.5.0%2B-7c3aed?style=flat-square">
  <img alt="Desktop only" src="https://img.shields.io/badge/Desktop-only-e1b437?style=flat-square">
  <img alt="Local first" src="https://img.shields.io/badge/Local--first-yes-2f855a?style=flat-square">
</p>

</div>

---

## Quickstart

ReadMark is not yet listed in the Obsidian community plugin directory.

1. Open the [latest GitHub Release](https://github.com/Amazinnn/ReadMark/releases/latest).
2. Download these three files from the release assets:

```text
manifest.json
main.js
styles.css
```

3. Create this folder inside your Obsidian vault:

```text
<your-vault>/.obsidian/plugins/readmark/
```

4. Put the three downloaded files directly inside `readmark/`.
5. Restart Obsidian, or reload the app.
6. Go to **Settings -> Community plugins**, enable **ReadMark**, then open the ReadMark sidebar.
7. Open a Markdown book and use **Add current file** (`加入当前文件`) or **Add local path** (`添加本地路径`) to start tracking it.

If the release assets are not available yet, download this repository as a ZIP and copy the same three files from the repository root.

## What It Does

ReadMark turns local Markdown files into a lightweight reading shelf inside Obsidian.

<table>
  <tr>
    <td><strong>Reading time</strong></td>
    <td>Counts reading time while the book is actually visible in the central Obsidian workspace.</td>
  </tr>
  <tr>
    <td><strong>Progress</strong></td>
    <td>Remembers the screen-middle paragraph and falls back to stable scroll progress when needed.</td>
  </tr>
  <tr>
    <td><strong>Highlights</strong></td>
    <td>Detects Markdown highlights written as <code>==highlight==</code>.</td>
  </tr>
  <tr>
    <td><strong>Bold excerpts</strong></td>
    <td>Detects reader-marked Markdown bold text written as <code>**bold**</code>.</td>
  </tr>
  <tr>
    <td><strong>Annotations</strong></td>
    <td>Detects Obsidian comments, footnote annotations, and source-derived excerpt snapshots.</td>
  </tr>
  <tr>
    <td><strong>Commentary</strong></td>
    <td>Detects <code>==highlight==%%comment%%</code> and <code>**bold**%%comment%%</code> as one commentary excerpt.</td>
  </tr>
  <tr>
    <td><strong>Stats</strong></td>
    <td>Shows today's reading, current-book stats, all-books stats, hourly distribution, and a monthly heatmap.</td>
  </tr>
</table>

## Why ReadMark

Most reading apps assume a cloud library. ReadMark assumes your books are already yours: local Markdown files in an Obsidian vault.

- No account.
- No remote sync service.
- No media storage.
- No hidden event stream.
- Reading records are plain local JSON.

## Reading Model

ReadMark only counts time when there is a readable context:

```text
Obsidian is focused
+ the central workspace shows the tracked Markdown book
+ the user is not idle
= reading time
```

Clicking the ReadMark sidebar does not stop timing. Closing the book, switching the central workspace to another file, backgrounding Obsidian, or becoming idle does stop timing.

## Data And Privacy

ReadMark is local-first. Runtime data may include:

- local filesystem paths;
- book titles;
- reading sessions;
- progress;
- excerpt text.

Do not commit runtime data:

```text
data.json
books/
node_modules/
```

These files are local runtime data and are not part of the published plugin files.

## Installation

Install ReadMark by placing the plugin files in:

```text
<your-vault>/.obsidian/plugins/readmark/
```

Required runtime files:

```text
manifest.json
main.js
styles.css
```

Then reload Obsidian and enable **ReadMark** under Community plugins.

## Updating

To update ReadMark manually, replace only these files:

```text
manifest.json
main.js
styles.css
```

Do not delete `data.json` or the `books/` folder if they exist. They contain your local reading records.

## Troubleshooting

- `.obsidian` may be hidden by your file manager.
- The plugin folder must be named `readmark`.
- `manifest.json`, `main.js`, and `styles.css` must be directly inside `readmark/`, not inside a nested folder.
- ReadMark is desktop-only and does not support Obsidian mobile.

## Repository Contents

This repository publishes the installable plugin package, not the local development workspace.

Plugin files:

```text
manifest.json
main.js
styles.css
versions.json
```

README asset:

```text
assets/readmark-icon.svg
```

## Status

ReadMark is usable but still young. The current focus is stabilizing reading detection, polishing the sidebar UI, and keeping the data model simple enough for long-term local ownership.
