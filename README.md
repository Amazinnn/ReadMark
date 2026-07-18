<div align="center">

<p>
  <img src="./assets/readmark-icon.svg" alt="ReadMark icon" width="112" height="112">
</p>

# ReadMark

**A local-first reading tracker for Markdown books in Obsidian.**

Track reading time, progress, highlights, bold excerpts, annotations, commentary, and Obsidian callout excerpts without sending your reading life to a service.

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.6.0--alpha.1-4719b8?style=flat-square">
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
    <td><strong>Callout excerpts</strong></td>
    <td>Detects complete Obsidian callouts such as <code>&gt; [!NOTE]</code>, including nested, foldable, title-only, aliased, and custom types.</td>
  </tr>
  <tr>
    <td><strong>Custom colors</strong></td>
    <td>Provides live color controls for all five excerpt types and six callout semantic groups, with precise HEX input and one-click resets.</td>
  </tr>
  <tr>
    <td><strong>Stats</strong></td>
    <td>Shows today's reading, current-book stats, all-books stats, hourly distribution, and a monthly heatmap.</td>
  </tr>
  <tr>
    <td><strong>Book World Labs</strong></td>
    <td>Runs a source-grounded MiniMax-M3 semantic pipeline for one tracked book and automatically imports its validated revision.</td>
  </tr>
</table>

## Book World Labs

`0.6.0-beta.2` renders the semantic and scoring foundation as a zoomable, book-specific **Book World** in a central Obsidian view. Labs remains disabled by default.

1. Install and build the separate `readmark-map-runner` Node/TypeScript CLI beside the vault, or select its installation directory once.
2. Open a tracked book and choose **Open Book World -> Enable and configure**.
3. Enter the MiniMax API Key once, then choose **Generate Book World**.
4. Confirm the proposed world attributes when prompted. ReadMark resumes the checkpoints and imports the finished revision automatically.

The API Key exists transiently in the setup field and is sent to the Runner over stdin. Only the Runner stores it, as plaintext in its ignored local `config.json`; ReadMark never writes it to plugin settings, task artifacts, logs, or map state. The default text model is `MiniMax-M3`. Closing Obsidian or cancelling a task stops the child process, and **Continue generation** resumes from Runner checkpoints.

Automatic import re-reads the current Markdown and verifies the protocol version, task checksums, source fingerprint, source IDs, completion marker, and source path containment before storing a revision. Each book retains the newest three semantic revisions. Manual export and import remain under **Advanced operations** for troubleshooting.

While the tracked book remains in the central reading area, ReadMark observes the centered source sentence on the existing 0.5-second tick. A sentence becomes read once after 2.5 seconds of continuous exposure; no per-tick event log is stored. Scores are recomputed from first-read exposures and current excerpts using defaults of read `1`, bold `2`, highlight `3`, annotation `4`, callout `4`, and commentary `6`. Each behavior contributes one fixed total weight, normalized across related concepts, so adding more links cannot inflate the score. Deleting an excerpt removes its contribution automatically.

The map uses Three.js with a fixed orthographic isometric camera and deterministic D3 force layout. Attribute fields form continuous procedural terrain; concept buildings unlock from reading or excerpt evidence. Existing coordinates remain fixed across semantic updates while new nodes are placed incrementally. The view supports pan, zoom, semantic label detail, roads, fog, terrain and lighting controls, hover evidence cards, pinned concept details, and source navigation in an adjacent leaf. A non-WebGL environment falls back to an unlocked-concept list.

Choose **Generate world assets** to ask MiniMax-M3 for a book-specific `StyleManifest`, then review one world concept image before formal image generation begins. The Runner uses MiniMax `image-01` for four reusable building modules and at most one landmark per attribute. A configured SenseNova key is used only after MiniMax image quota, rate-limit, overload, or network failures. Imported files are checked for fixed paths, revision identity, MIME signatures, hashes, sizes, and a 20 MB per-book limit. Missing or damaged assets leave the procedural geometry buildings in place.

## Excerpt Colors

Open **Settings -> ReadMark -> Excerpt colors** (`摘录配色`) to customize the five excerpt categories and six callout semantic groups. The native color picker and HEX field stay synchronized, changes appear immediately in the sidebar, and every color can be reset individually or as a complete palette.

Callouts remain one category in statistics. Their semantic colors only distinguish information, emphasis, success, warning, danger, and neutral callout cards.

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
- callout type, title, fold state, and cleaned plain-text body.
- Book World semantic revisions, source IDs, and quality reports when Labs is enabled.

Do not commit runtime data:

```text
data.json
books/
maps/
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

ReadMark is usable but still young. Book World is an experimental alpha: semantic extraction, scoring, the 2.5D renderer, and AI-generated world assets are delivered in separate milestones.
