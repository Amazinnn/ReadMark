# Development

> **Book World v3 status:** `Semantic v3 Recovery And Acceptance` below is the accepted target workflow, not current protocol-v2 behavior. Read `README.md` and `CURRENT.md` first. New semantic work must start a fresh v3 task and never resume the old v2 task as v3 truth.

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
Plugin: <plugin-root>
Runner: <runner-root>
```

Read `docs/README.md` and `docs/CURRENT.md` before semantic work. The old `docs/HANDOFF-2026-07-19-BETA3.md` path is only a redirect to an archived protocol-v2 freeze and is not executable guidance.

Runner verification:

```powershell
Set-Location '<runner-root>'
npm test
npm run typecheck
npm run build
```

Plugin verification:

```powershell
Set-Location '<plugin-root>'
npm test
npm run build
```

Reload ReadMark in Obsidian after a successful plugin build. Do not hand-edit `main.js`.

## Provider Configuration

Runner configuration has one primary compatible text provider and one optional failed-batch `fallbackText`; it has no public stage route table or multi-profile UI. Local development uses MiniMax-M3 as the primary text model. SenseNova u1-fast remains image-only for the later 2.5D phase and must not be called by pre-render semantic work.

Credentials are accepted through a transient plugin field and passed to `configure --stdin`. They must never appear in command arguments, console output, notices, task artifacts, logs, checkpoints, documentation, or Git. The Runner alone stores them in ignored `config.json`.

## Protocol v3 Implementation Gate

This section is the implementation checklist for the accepted structural and Prompt ADRs. It must exist and pass the checks below before protocol-v3 source code is changed. The ADRs remain the semantic authority; this section fixes execution order, ownership, test gates, and stop conditions without redefining Prompt behavior.

### Required Phase Order

Implement in this order:

1. Establish the identical closed protocol-v3 JSON Schema bundle, Schema manifest hash, TypeScript protocol types, and public synthetic scorer vectors in both repositories.
2. Implement the Runner two-message Prompt manifest, provider runtime, recovery gradients, sanitized Prompt trace, and selective checkpoint invalidation.
3. Implement shared Term Extraction, Generic Filter, Source Disposition, Attribute Proposal/Critic, and machine Attribute acceptance.
4. Implement three independent Concept Formation/Critic/Summary runs, deterministic representative selection, Related Edges, scoring, selection, and atomic completion publication.
5. Implement plugin Source IR and Source Snapshot v3 production, Runner lifecycle, double-freshness validation, independent candidate validation/scoring, and immutable atomic import.
6. Activate the central Semantic Report and remove protocol-v2 Book World, art, human confirmation, world-score, Concept-unlock, and ReadingMapActivity paths from the active v3 product flow.
7. Run cross-repository fake-provider, Schema, golden-vector, recovery, checkpoint, build, and privacy verification. Stop before any real provider task or manual Obsidian acceptance until the user grants separate operational approval.

No later phase may compensate for a missing earlier contract. In particular, UI implementation cannot define protocol fields, and Prompt prose cannot override Schema or validator behavior.

### Repository Ownership

The plugin owns Markdown parsing, unified Source IR, deterministic Source Snapshot production, task orchestration, independent validation and scoring of all three candidates, double freshness checks, immutable atomic import, newest-three historical-import retention, and the Semantic Report.

The Runner owns compatible text-provider calls, the global fair text semaphore, Prompt rendering, recovery, checkpoints, shared semantic preparation, the three independent Runs and Critics, deterministic proposed scoring/selection, sanitized provenance, and atomic completion publication.

The repositories carry independent runtime implementations of validation and scoring. They share only contract data: byte-identical Schema bundle content, its manifest hash, and public synthetic scorer vectors. A production import must not call the Runner scorer as the plugin's authority.

### Public Protocol And Prompt Interfaces

- `protocolVersion` is exactly `3`. New v3 code does not import or migrate semantic-v2 artifacts.
- `TextStageRequest` contains the stage identity, an ordered `[system, user]` message tuple, and a sanitized `PromptTrace`; it does not contain a concatenated single Prompt.
- The System message contains only `constitution@1`. The User message uses the Prompt ADR's fixed section order and ASCII sentinels, including the canonical mechanically rendered stage Schema and an inert dynamic-data section.
- Responses are exactly one raw JSON value. Fences, prose, comments, multiple values, and substring salvage are structural failures.
- `RunnerEvent` is a closed protocol-v3 union for task/stage start, progress, completion, interruption, and failure. Events contain only IDs, stage codes, counts, and sanitized error codes.
- `complete.json` is the sole completion signal. It binds fixed task-local basenames and SHA-256 hashes for the Source Snapshot, all three candidate Revisions, the Selection Report, the selected Run, Schema manifest, Prompt-set fingerprint, and scoring version.
- Prompt and validator identities are stage-local. A checkpoint records contract IDs and versions, content hashes, constitution, Schema/validator/example identities, sanitized provider fingerprint, and whether repair or fallback produced the output. Prompt text, response text, and source excerpts are forbidden.

### TDD And Fake-Provider Gates

Every behavior change follows red-green-refactor:

1. Add one focused failing test or fixture and run it to confirm the expected failure.
2. Implement the minimum behavior required for that test.
3. Run the focused test to green before expanding the next behavior.
4. Run the affected repository suite before crossing a phase boundary.

Required fixture families are exact-render golden, Schema conformance, unknown/additional-field rejection, instruction-like inert data, evidence and opaque-ID negatives, strict-single-JSON negatives, structured repair, split-marker-before-child recovery, byte-identical atomic fallback, discard budgets, stage-local checkpoint invalidation, repair-only checkpoint reuse, scorer vectors, stale import, atomic import, retention, and an explicit zero-call assertion for SenseNova/image routes.

Golden Prompt fixtures are never automatically rewritten. Any expected model-visible change first requires a retained ADR supersession decision, a contract-version increment, and a checkpoint-invalidation assertion.

### Recovery, Checkpoints, And Failure Terminals

Transport retry, structured repair, deterministic bisection, atomic fallback, semantic targeted repair, and locally authorized discard are separate bounded mechanisms. One mechanism does not reset another's budget.

Each request node receives at most one structured-repair attempt. A still-invalid splittable node writes its split marker before creating deterministic children. An atomic fallback starts from the original contract and byte-identical messages; it never receives the primary response. Persistent atomic failures may be locally discarded only where the ADR explicitly permits it and only within the accepted combined budgets. Other atomic failures end the stage or Run.

Checkpoint reuse requires matching input fingerprints, dependency fingerprints, Prompt trace, Schema identity, validator identity, and task/source identity. Constitution changes invalidate all text stages. A stage contract change invalidates only that stage and its declared descendants. Repair-contract changes invalidate only checkpoints whose stored trace says that repair produced the accepted output. Valid unrelated checkpoints and old private task directories are never deleted.

No failed or partial task writes `complete.json`. Valid intermediate checkpoints remain resumable, and startup may discover and mark a task interrupted but must not restart model calls automatically.

### Publication, Import, And Migration

The Runner writes temporary artifacts, validates them, atomically publishes all three candidate files and the sanitized Selection Report, and writes `complete.json` last. Candidate scoring and selection use deterministic integer ten-thousandths and the accepted stable tie order.

The plugin rebuilds the current Source Snapshot before full completion validation and again immediately before switching its index. It validates every referenced hash and closed Schema, independently audits all three candidates, recomputes their scores and tie-break, and rejects any Runner/plugin mismatch.

Successful import writes immutable Snapshot, selected Revision, and sanitized Selection Report artifacts before atomically switching the small `state.json` index. The current report remains visible during regeneration and survives failure or interruption. Each book retains the newest three successful imports; removal of an unreferenced historical file is best-effort and never rolls back a valid index. Runner tasks and checkpoints are never modified by plugin retention.

Protocol-v2 semantic artifacts, stored revisions, and task directories remain untouched and read-only. They are marked incompatible/stale with regeneration guidance and are never silently migrated, resumed as v3, rewritten, or deleted.

### Semantic Report Activation

The v3 central view presents overview counts, Attributes, three Run scores, the four score categories, selected reason, Concepts grouped by Attribute and source position, representative Evidence, exclusions, Related neighbors, and sanitized provenance limitations.

Search covers labels, aliases, Summaries, and representative Source text only. Attribute filtering, scroll, and expanded state are isolated by `bookId` for the current view lifetime and never persisted to `data.json`. Progress events update only the status region; they never rebuild the report or reset view state. Exact navigation uses current UTF-16 coordinates, while stale navigation requires a unique conservative text/context match and otherwise refuses the jump.

Only after the replacement report tests pass may the active v3 paths for the old renderer, layout, assets, art generation, human Attribute confirmation, activity score, and Concept unlock be removed. Existing runtime files are not cleaned.

### Verification And Stop Conditions

Before declaring fake-provider implementation complete:

- Runner: run `npm test`, `npm run typecheck`, and `npm run build`.
- Plugin: run `npm test` and `npm run build`.
- Verify the two Schema manifest hashes and scorer-vector results are identical.
- Verify fake-provider end-to-end publication and plugin import of three candidates.
- Scan for Prompt placeholders, active deprecated CLI/UI routes, protocol-v2 acceptance, secrets, private task paths, source excerpts, endpoints, and credentials.
- Confirm tests made zero SenseNova, image, art, 2.5D, and real-provider calls.

After these gates pass, stop. One fresh private MiniMax-M3 v3 task and manual Obsidian acceptance require a separate explicit user approval. A failure revealing a contradiction with Q001-Q493 stops implementation for an ADR correction; implementation code must not invent a replacement rule.

Throughout this work, preserve unrelated dirty files and historical runtime artifacts. Do not commit, push, tag, release, clean, reset, restore, or delete without explicit approval.

### Version-Control Authorization Supersession (2026-08-12)

The preceding freeze text is retained as historical context. On 2026-08-12, the user explicitly authorized frequent, reviewable commits and pushes for protocol-v3 implementation and requested continuous eval and development records. This authorization supersedes only the earlier commit/push prohibition for the accepted v3 implementation scope.

Each commit must remain narrowly scoped, pass its applicable synthetic gates, exclude unrelated dirty files and private runtime material, and use a feature branch. Push only to an already verified repository remote; an absent or ambiguous remote is a reported version-maintenance blocker, not permission to invent one. Tagging, releasing, cleaning, resetting, restoring, deleting historical data, running real providers, and starting image, art, SenseNova, or 2.5D work remain unauthorized.

Implementation must avoid speculative fallback behavior, silent error swallowing, compatibility paths without an accepted consumer, and guessed semantic outcomes. Closed validation, fail-closed boundaries, bounded recovery, and explicit failure terminals required by Q001-Q493 are contract behavior rather than optional defensive additions.

### Reviewed Implementation Checkpoint: Shared Preparation

Runner commit `bd850c6` implements the reviewed shared pre-Run boundary. Deterministic callers must supply the unique snapshot-known mechanical-anomaly Source IDs explicitly, including an explicit empty list. The review sample applies its 5% target, minimum 20 when possible, and cap 100 independently of forced marker/anomaly additions, and deterministically covers both disposition outcomes and source distribution when those strata exist.

The Source Disposition request packer treats both 100 Units and 40,000 estimated input tokens as hard limits. A single over-limit Source Unit reaches an explicit pre-provider terminal instead of being sent as an oversized singleton. Generic Filter only bisects and locally discards after the typed structural-recovery terminal; authentication and other runtime failures propagate unchanged. A successful strict Term restoration leaves the Source linked and is not recorded as a disposition repair. An actual linked-to-excluded repair has a mandatory closed exclusion reason plus stage, Source ID, and `filterDiscard` trigger.

Acceptance evidence was focused 12/12, fresh Runner 165/165, typecheck/build green, scoped diff check green, and independent review `Ready`. No real provider, SenseNova, image, art, or 2.5D route was called. The Runner commit remains local because that repository has no configured push destination; this is a version-maintenance blocker, not authority to invent a remote.

### Three-Run Implementation Boundary

The next code boundary accepts an explicit ordered Evidence Cluster set and implements three independent Concept Formation/Critic and Summary/Critic Runs. It may materialize deterministic Concept IDs, Evidence Mounts, representative Sources, summaries, Critic drops, audit counts, and revision ordering from those accepted clusters. Formation calls for different Runs use the same contract/version and do not read another Run's output; Critics receive only their contract-authorized fresh inputs.

The structural ADR requires deterministic term-seeded weighted-coverage clustering, balancing term quality, uncovered-source gain, distribution, and overlap penalty, but Q001-Q493 do not freeze numeric weights, exact tie order, or a termination formula. Until that formula receives a retained ADR decision, implementation must not invent defaults. The Run execution boundary therefore requires clusters from a separately accepted deterministic cluster builder and fails on absent or malformed cluster input. This does not authorize a free model-generated cluster list, embeddings, heading-only grouping, or compatibility with semantic v2.

Implementation review mechanically proved that Q461's Summary Critic firewall conflicts with the version-one shared representative renderer inherited from Q455. Prompt ADR Q494 resolves the conflict before code changes: Summary generation/rewrite keep contextual representative records, while Summary Critic v2 receives only `sourceId` and exact `text`. The stage-local change invalidates only Summary Critic and its declared downstream checkpoints; exact-render and negative fixtures must change explicitly and never auto-rewrite.

## Semantic v3 Recovery And Acceptance

This section specifies acceptance behavior to implement. The plugin permits one active semantic task globally. Inspect task identity, book ID, source fingerprint, Snapshot hash, stage versions, and `complete.json` once at startup. A stopped v3 task is marked interrupted; the single Continue action resumes it only after the user invokes it. Never delete valid checkpoints or restart completed source batches.

The completion audit must verify the closed v3 schemas, exactly-one shared Source Disposition coverage, complete Evidence Mount coverage, literal Term Candidate/name constraints, Concept Critic decisions, representative subsets, valid Attributes, undirected Related Edges, all three candidate Revisions, scoringVersion, deterministic Selection Report, and sanitized provider ledger. A mixed-provider result must remain visible and must never be described as pure MiniMax.

After both repositories' fake-provider tests and golden-vector conformance pass, run one fresh private MiniMax-M3 v3 task. Confirm actual fresh/reused provider counts, all three Runs, every Critic stage, plugin scorer revalidation, double freshness check, automatic import, stale behavior, evidence navigation, and zero SenseNova/image calls. Keep every task artifact, book excerpt, model output, checkpoint, and credential outside Git and documentation.

## Freeze Hygiene

Before any commit or release, inspect both repositories with `git status --short`. Confirm that `config.json`, `workspace/`, source snapshots, checkpoints, task reports, book content, `data.json`, `books/`, and `maps/` are absent from the public scope. The 2026-07-19 freeze authorizes no commit, push, tag, or release.

## Remote

The intended GitHub remote is:

```text
https://github.com/Amazinnn/ReadMark.git
```
