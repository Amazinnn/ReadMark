# Data Model

> **Book World v3 note:** Protocol-v2 semantic revision, relation, Attribute-cardinality, and map-state descriptions below are historical until implemented v3 documentation replaces them. Use `docs/ADR/2026-07-19-pre-render-semantic-network.md` for the current Source Unit -> Concept -> Attribute hierarchy, Evidence Mount model, and import storage decision.

ReadMark stores durable reading data as local JSON. JSON is the canonical internal storage format.

## Storage Layout

Inside the installed Obsidian plugin directory:

```text
.obsidian/plugins/readmark/
  data.json
  books/
    <bookId>.json
```

In the source repository, `data.json` and `books/` are ignored because they contain user data.

## `data.json`

`data.json` stores plugin-level state:

- schema version;
- settings;
- bookshelf index;
- last loaded timestamp.

`settings.colors` contains two complete validated palettes:

- `excerpts`: highlight, bold, annotation, commentary, and callout category colors;
- `callouts`: information, emphasis, success, warning, danger, and neutral semantic colors.

Colors are normalized to six-digit lowercase HEX values. Missing or invalid values fall back independently to defaults, so older settings remain compatible without a book-record migration.

The bookshelf index stores metadata needed to locate records, not the full reading history.

## Book Records

Each tracked book has a per-book JSON record under `books/<bookId>.json`.

A book record contains:

- schema version;
- book identity and paths;
- progress percent;
- last stable progress position;
- last reading anchor;
- bounded restore candidates;
- total reading time;
- content scan state;
- reading sessions;
- excerpt snapshots;
- cached excerpt counts.

Per-book files keep sync conflicts and manual recovery smaller than one large global data file.

## Book Identity

A tracked book is bound to a user-controlled local filesystem path.

- Local path is the book identity.
- Vault path is derived when the file is inside the current Obsidian vault.
- Rebinding changes the local path while preserving the existing record.

ReadMark trusts the user to rebind records correctly.

## Reading Sessions

Reading sessions represent continuous blocks of readable context:

```json
{
  "id": "...",
  "startedAt": "...",
  "endedAt": "...",
  "durationMs": 123000
}
```

ReadMark does not persist timer tick events.

Session rules:

- nearby sessions can be merged;
- short accidental sessions can be removed;
- `totalReadMs` should match the sum of valid sessions.

This preserves useful history without generating large noisy logs.

## Restore Candidates

Each book record stores `restoreCandidates`, a bounded list of recent restore samples captured only during Readable Context.

Restore candidates are not a timer tick log. They are kept only for the recent restore window:

- maximum window: 60 seconds from the latest captured candidate;
- maximum count: 180 candidates;
- progress precision: four decimal places;
- source mode candidates may include a paragraph anchor;
- reading mode candidates use high-precision scroll percentage.

This gives restore enough recent evidence without creating long timestamp histories. The expected storage cost is small because old candidates are pruned continuously and during record normalization.

## Reading Anchor

`lastReadingAnchor` is retained for compatibility and as the newest source-mode paragraph anchor. Source-mode restore primarily uses anchors attached to recent restore candidates.

An anchor is captured from the paragraph near the middle of the visible Markdown editor. It stores:

- captured timestamp;
- progress percent fallback;
- paragraph start offset and line;
- paragraph text;
- surrounding context before and after the paragraph.

On restore, ReadMark searches restore candidates backward from the latest captured moment until it finds a usable target. In source mode it first tries candidate anchors; exact paragraph matches are preferred, then conservative fuzzy matching with nearby context. In reading mode it restores to the latest high-precision scroll percentage. If no candidate is usable, restore falls back to stable progress percent and then the general progress percent.

## Excerpt Snapshots

Excerpt snapshots are derived from current Markdown source markup.

Supported source syntaxes:

- Markdown highlight: `==...==`
- Markdown bold: `**...**`
- Obsidian comment: `%%...%%`
- commentary excerpt: `==...==%%...%%` or `**...**%%...%%`
- footnote definition: `[^id]: ...`
- Obsidian callout: `> [!TYPE]`, including nested, foldable, title-only, and custom types

An excerpt snapshot stores:

- type;
- source syntax;
- text;
- commentary text when the type is commentary;
- callout type, custom title, and fold state when the type is callout;
- position and line;
- surrounding context;
- captured and updated timestamps;
- baseline flag.

Excerpt totals are canonical: total excerpts equal `highlights + bolds + annotations + commentaries + callouts`. Commentary excerpts count once and do not also count as their source highlight/bold or comment. A callout and reader marks inside it are separate excerpt objects and each count once.

Each book stores `hasScannedCallouts` independently from the older content baseline. Existing callouts discovered during the first callout-capable scan are baseline snapshots: they appear in current-book and aggregate views, but do not count as excerpts newly captured today.

If the source markup disappears, the snapshot should disappear too. This is not a permanent quote library.

## Future Saved Excerpts

`Saved Excerpt` is reserved for a future feature where the user explicitly preserves an excerpt independently from source synchronization.

Do not mix saved excerpts into the current excerpt snapshot semantics without a design update.

## Future Search

Excerpt search and original-text search are planned features. They should search existing source-derived snapshots and nearby original Markdown context without changing the current snapshot deletion semantics.

## Privacy

Reading data is user-owned. It may contain:

- local paths;
- book titles;
- reading times;
- progress;
- excerpt text.

Never commit runtime data. Never use it in examples without redaction.

## Book World Storage

Book World data is separate from core book records:

```text
.obsidian/plugins/readmark/maps/<bookId>/state.json
```

The state document atomically stores status, scoring activity, and up to three confirmed semantic revisions. Scoring activity contains global-weight values, historical-import switches, the first map import time, and one `ReadExposure` per source ID. It does not contain 0.5-second samples or accumulated score totals; totals are recomputed from exposures and current excerpts. Recoverable Runner state may add the task directory, current stage, task state, and update time. It never stores a PID or API Key. Deleting a Book World removes only this map-specific state. It does not remove the Bookshelf entry, reading sessions, progress, restore candidates, or Excerpt Snapshots.

Exported Runner tasks contain exact source units and therefore remain private runtime artifacts. They must not be committed with the plugin or Runner source repositories.

The Runner installation owns `config.json` and its configured task workspace. `config.json` may contain a plaintext MiniMax API Key and must remain ignored. ReadMark plugin data stores only the Runner installation directory and an optional Node path.

Runner configuration schema 2 separates `text` and `image`. Text stores one active compatible protocol, complete endpoint, model, generation limits, concurrency, timeout, and plaintext credential. Image stores an independent constrained HTTP template. The plugin may pass configuration through Runner stdin but persists neither configuration object nor credentials.

Map state also stores one deterministic `StableLayout`: attribute-field centers and per-concept `x/y/z` coordinates. A matching revision reuses the layout exactly. A newer revision locks surviving nodes to their old coordinates and solves positions only for new nodes. Camera and temporary display controls remain view state rather than semantic data.

The optional current `AssetBundle` stores a validated `StyleManifest` and `AssetManifest`. The manifest contains the semantic revision ID, style hash, total bytes, asset IDs, roles, relative paths, MIME types, file sizes, SHA-256 hashes, optional attribute landmarks, and concept-to-module recipes. Only the current pack is retained under `maps/<bookId>/assets/`; its total runtime files may not exceed 20 MB. Generated concept images and Runner task artifacts remain outside plugin state.

## Reading Map Artifacts

Protocol v2 adds an exactly-one `SourceDisposition` for every Source Unit. A linked disposition must resolve through candidate membership to at least one final concept; exclusions must use an allowed reason such as table of contents, copyright, acknowledgement, boilerplate, fragment, or duplicate. Missing, duplicate, or unknown source IDs invalidate the revision.

Each independent Semantic Run produces a complete immutable revision and score. `semantic-revision.run-1.json` through `semantic-revision.run-3.json` preserve candidate outcomes for comparison. `selection-report.json` records base scores, cross-run agreement, final scores, the selected run ID, and a deterministic reason. `semantic-revision.json` is a copy of the selected validated revision; `complete.json` is the publication marker.

Checkpoint inputs currently include stage-specific hashes, source hashes, run IDs, and prompt versions. They do not yet include a sanitized Provider Profile fingerprint. Consequently, the frozen run 1 is mixed-provider and its provenance cannot be inferred from artifacts alone. Future schema work should add a non-secret protocol/endpoint-host/model/config fingerprint and invalidate only affected checkpoints when it changes.

Task directories, source snapshots, checkpoints, confirmations, per-run revisions, reports, logs, and generated assets are private runtime data. Even when they contain no credential, they may contain exact or derived book content and must never enter either public repository.

Reading Map protocol artifacts are separate from core book records. A source snapshot has a normalized Markdown SHA-256 fingerprint and source units for prose, code, and formulas. Each unit records deterministic identity, exact source text, offsets, line range, heading path, content hash, and optional explanatory prose context.

A semantic revision contains attributes, concepts, relations, edges, and a quality report. Its relation vocabulary is fixed to `support`, `contrast`, `causal`, `application`, and `example`. A revision import must not mutate reading sessions, progress, or excerpt snapshots.
