# Data Model

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

The bookshelf index stores metadata needed to locate records, not the full reading history.

## Book Records

Each tracked book has a per-book JSON record under `books/<bookId>.json`.

A book record contains:

- schema version;
- book identity and paths;
- progress percent;
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

## Excerpt Snapshots

Excerpt snapshots are derived from current Markdown source markup.

Supported source syntaxes:

- Markdown highlight: `==...==`
- Obsidian comment: `%%...%%`
- footnote definition: `[^id]: ...`

An excerpt snapshot stores:

- type;
- source syntax;
- text;
- position and line;
- surrounding context;
- captured and updated timestamps;
- baseline flag.

If the source markup disappears, the snapshot should disappear too. This is not a permanent quote library.

## Future Saved Excerpts

`Saved Excerpt` is reserved for a future feature where the user explicitly preserves an excerpt independently from source synchronization.

Do not mix saved excerpts into the current excerpt snapshot semantics without a design update.

## Privacy

Reading data is user-owned. It may contain:

- local paths;
- book titles;
- reading times;
- progress;
- excerpt text.

Never commit runtime data. Never use it in examples without redaction.
