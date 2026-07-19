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

**Reading Entry**:
The moment the central Obsidian reading area enters a Tracked Book. Automatic position restore is tied to this event, not to sidebar focus or ordinary layout refreshes.
_Avoid_: Sidebar click, render refresh, every timer tick

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
A scan performed after a Rebind to capture source-derived excerpts currently present in the new file.
_Avoid_: Restore, import

**Reading Session**:
A continuous period during which a Tracked Book has Readable Context. Short interruptions within the merge gap may be represented as one session.
_Display as_: 阅读时段
_Avoid_: Timer run, focus block, conversation, chat, 会话, 对话

**Reading Anchor**:
The newest usable paragraph near the middle of the visible Markdown editor, stored with context so reopening can return to the same paragraph instead of only the same scroll percentage.
_Avoid_: Cursor position, tick log

**Restore Candidate**:
A bounded recent position sample captured during Readable Context. In reading mode it is a high-precision scroll percentage; in source mode it may also include a Reading Anchor. Restore searches candidates backward from the latest moment.
_Avoid_: Permanent history, tick log, diagnostic trace

**Excerpt Snapshot**:
A highlight, bold excerpt, annotation, commentary excerpt, or Callout Excerpt derived from the current Markdown source. If the source markup is removed, the snapshot is removed too.
_Avoid_: Clip, quote

**Bold Excerpt**:
A source-derived excerpt captured from Markdown `**...**` emphasis used by the reader as a reading mark.
_Display as_: 加粗
_Avoid_: Author formatting

**Commentary Excerpt**:
A compound excerpt made from a highlighted or bolded source fragment immediately followed by a reader comment.
_Display as_: 点评摘录 / 点评
_Avoid_: Standalone annotation, saved excerpt

**Callout Excerpt**:
A complete Obsidian callout block captured as one source-derived excerpt while preserving its type, title, and fold state.
_Display as_: 标注块 / 标注
_Avoid_: Annotation, comment, ordinary blockquote

**Saved Excerpt**:
A future user-owned permanent excerpt explicitly saved outside source synchronization.
_Avoid_: Current source highlight, automatic snapshot

**Excerpt Search**:
A future search feature over Excerpt Snapshots and nearby original Markdown context.
_Avoid_: Full-text index requirement, permanent quote library

**Canonical Storage**:
The per-book JSON records used as the plugin's durable source of truth. User-readable exports are generated separately.
_Avoid_: Tick event log, SQLite, Markdown as internal state

**Reading Statistics**:
Aggregated reading activity shown for a day, the Current Book, or the whole Bookshelf.
_Avoid_: Analytics, dashboard

**Book World**:
An experimental, source-grounded semantic world for one Tracked Book, opened as a central Obsidian view.
_Avoid_: Sidebar map, global graph, generated summary

**Source Snapshot**:
A deterministic protocol artifact built from the Current Book. It contains the exact Source Units, structural context, positions, reader markers, and hashes used by one semantic task.
_Avoid_: LLM quotation, free-form chunk

**Source Unit**:
The smallest source item that can receive a Source Disposition, usually a sentence, list item, or table row from the Current Book.
_Avoid_: Paragraph chunk, concept, evidence by default

**Semantic Revision**:
A validated, immutable set of Source Dispositions, Attributes, Concepts, Evidence Mounts, and undirected Related Edges produced for one Source Snapshot.
_Avoid_: Editable node draft, model memory

**Companion Runner**:
The external Node/TypeScript CLI that performs staged model calls without giving provider credentials to the Obsidian plugin.
_Avoid_: Plugin backend, cloud service

**Compatible Text Provider**:
A user-configured OpenAI Compatible or Anthropic Compatible endpoint used by the Companion Runner. ReadMark does not assume a vendor preset.
_Avoid_: Built-in MiniMax account, plugin backend

**Provider Profile**:
The active protocol, endpoint, model, bounded generation parameters, and credential held in Runner-local configuration. A sanitized profile fingerprint is required for future checkpoint provenance; the current run predates it.
_Avoid_: API key, provider log

**Task Workspace**:
The Runner-owned private directory containing exported source snapshots, checkpoints, confirmations, revisions, and reports.
_Avoid_: Runner installation directory, plugin data directory

**Source Disposition**:
The exactly-one outcome assigned to every Source Unit: linked source or an explicit exclusion reason.
_Avoid_: Missing source, implicit filtering

**Linked Source**:
A Source Unit judged eligible to enter the semantic network. A valid Semantic Revision mounts it under at least one Concept.
_Avoid_: Evidence Mount, concept, term candidate

**Evidence Mount**:
The grounding relationship from one Linked Source to one Concept. The complete mount set preserves source coverage; a Concept's representative sources are only a bounded subset used for explanation, scoring, and display.
_Avoid_: Separate evidence object, linked source before mounting, displayed excerpt

**Term Candidate**:
A possible source-derived name or alias for a Concept. It may name a Concept but never becomes a graph node by itself.
_Avoid_: Concept, keyword without source IDs

**Attribute**:
A higher-level semantic category that groups Concepts within one book. Every Concept belongs to exactly one Attribute; cross-category closeness remains a Related Edge between Concepts.
_Avoid_: Metadata value, relation type, overlapping tag

**Concept**:
A final concept-word node in a Semantic Revision, named by a source-grounded term, grounded by Evidence Mounts, and assigned to exactly one Attribute.
_Avoid_: Proposition, sentence, summary, term candidate

**Related Edge**:
An undirected scored neighbor relation between two Concepts in the concept-word network.
_Avoid_: Causal relation, support relation, example relation, typed predicate

**Semantic Run**:
One independent candidate Semantic Revision and quality-audit pass for the same shared semantic task inputs.
_Avoid_: Retry, checkpoint replay

**Selection Report**:
The comparison artifact containing all run results, the selected run, and its mechanical selection reason.
_Avoid_: Quality report, model recommendation

**Mixed-Provider Run**:
A Semantic Run whose checkpoints were generated under more than one Provider Profile. It must be disclosed and cannot be described as a pure-provider result.
_Avoid_: Ensemble, automatic fallback result

**Semantic Report**:
The planned Book World view of confirmed attributes, representative concepts, grounded evidence, exclusion samples, per-run scores, and the final selection reason.
_Avoid_: Editable ontology, raw model output
