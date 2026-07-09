# ReadMark

This context defines the reading-domain language for a local Obsidian plugin that tracks user-selected Markdown books.

## Language

**Bookshelf**:
The user-managed collection of Markdown files whose reading records are tracked.
_Avoid_: Library, folder, vault scope

**Current Book**:
The Tracked Book corresponding to the active Markdown file in Obsidian.
_Avoid_: Current file, active note

**Current Book Lock**:
The remembered Current Book shown in the sidebar. It is a display lock, not permission to keep counting time.
_Avoid_: Active pane, focused view, readable state

**Readable Context**:
The central Obsidian reading area is currently showing the Current Book's Markdown file while Obsidian is focused and the reader is not idle.
_Avoid_: Sidebar focus, background tab, locked book

**Tracked Book**:
A Markdown file explicitly added to the Bookshelf and bound to a user-controlled local path.
_Avoid_: Note, document

**Local Path**:
The absolute filesystem path that identifies a Tracked Book.
_Avoid_: Relative path, vault path

**Vault Path**:
The Obsidian path derived from a Local Path when the file is inside the current vault.
_Avoid_: Book identity

**Missing Book**:
A Tracked Book whose Local Path does not currently exist.
_Avoid_: Deleted book, invalid book

**Rebind**:
The user action of editing a Tracked Book's Local Path, thereby attaching its existing record to another file.
_Avoid_: Auto-detect, migration

**Rebuild Scan**:
A scan performed after a Rebind to capture highlights and annotations currently present in the new file.
_Avoid_: Restore, import

**Reading Session**:
A continuous period during which a Tracked Book has Readable Context. Short interruptions within the merge gap may be represented as one session.
_Display as_: 阅读时段
_Avoid_: Timer run, focus block, conversation, chat, 会话, 对话

**Excerpt Snapshot**:
A highlight or annotation derived from the current Markdown source. If the source markup is removed, the snapshot is removed too.
_Avoid_: Clip, quote

**Saved Excerpt**:
A future user-owned permanent excerpt explicitly saved outside source synchronization.
_Avoid_: Current source highlight, automatic snapshot

**Canonical Storage**:
The per-book JSON records used as the plugin's durable source of truth. User-readable exports are generated separately.
_Avoid_: Tick event log, SQLite, Markdown as internal state

**Reading Statistics**:
Aggregated reading activity shown for a day, the Current Book, or the whole Bookshelf.
_Avoid_: Analytics, dashboard
