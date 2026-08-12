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

Reviewed publication commit `974664e` stages the exact Source Snapshot, three candidate Revisions, Selection Report, and completion marker inside the existing Runner task directory without replacing or deleting checkpoints. It validates staged bytes, atomically replaces retryable non-completion artifacts, verifies their exact final bytes, and writes `complete.json` last. A mismatched or invalid in-flight completion marker is retracted before failure; a pre-existing valid completion marker is a zero-write conflict. Independent review concluded `Ready`; no real provider or image route was involved.

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

Reviewed Runner commit `b67d65e` implements this explicit-cluster boundary. It executes canonical `run-1` through `run-3` with the same contracts and isolated outputs, routes dependency-ready Concept Critic batches through one canonical fair scheduler, and retains the external shared semaphore boundary. Formation and repair accept only complete authoritative Term/Source intersections from linked Sources; the five structural Source types remain deterministic `excluded(fragment)` and never reach Formation.

Post-Critic processing applies global name, mount-cap, direct-anchor, one-mount exception, and alias-binding gates. One affected-only remount recomputes Concept IDs across frozen and replacement labels, re-reviews changed items, and accumulates actual audit drops. Representative selection precedes Summary; Summary Critic uses Q494 v2's text-only context, allows one reason-only rewrite, and a second semantic failure ends the Run. Acceptance evidence was focused 18/18, fresh Runner 194/194, build/typecheck/diff green, and independent review `Ready` after four rounds. No real provider, SenseNova, image, art, or 2.5D call occurred.

Implementation review mechanically proved that Q461's Summary Critic firewall conflicts with the version-one shared representative renderer inherited from Q455. Prompt ADR Q494 resolves the conflict before code changes: Summary generation/rewrite keep contextual representative records, while Summary Critic v2 receives only `sourceId` and exact `text`. The stage-local change invalidates only Summary Critic and its declared downstream checkpoints; exact-render and negative fixtures must change explicitly and never auto-rewrite.

### Source Snapshot v3 Contract-Correction Gate

Plugin Snapshot TDD mechanically exposed four pre-release protocol contradictions before acceptance: normalized table-row text could not retain an exact raw row under `TextAudit`; callout type/title had no closed marker fields; deterministic long-Unit children had no parent-coordinate field; and `snapshotHash` had no excluding-self canonicalization rule. Structural ADR Q495-Q498 and Prompt ADR Q496/Q498 now resolve these before further implementation.

The implementation must first add failing cross-repository Schema/validator/hash fixtures, then advance the byte-identical bundle, Schema ID, and validator to `@2`. It must not add an `@1` compatibility reader, optional catch-all metadata, guessed callout encoding, permissive hash acceptance, or migration path. Existing v2 and protocol-v3 `@1` artifacts remain untouched on disk but are stale and rejected. Term Extraction alone advances to `@2`; all semantic descendants invalidate because the Source Snapshot/Term input changed, while unrelated Prompt contracts retain their versions.

Only after the corrected two-repository protocol fixtures pass may Source Snapshot implementation resume. Its acceptance must prove normalized data rows plus exact raw audit, no separator-row Unit, closed callout metadata and nesting order, exact UTF-16 child/parent coordinates, deterministic over-limit splitting/failure, exact source hash, excluding-self canonical Snapshot hash, and zero provider/image calls.

The corrected protocol gate is now accepted at Runner commit `ead5f6b`. Both repositories expose byte-identical `protocol-v3@2` runtime and `readmark-protocol-v3@2` Schema bundle bytes with manifest `bacedcbce9ffc052c419b8f96c4f0efa429343454d6649d62e9e91d495065dae`; `protocol-v3@1` and manifest `7a422371311a5394ffe02a966579e0291535f93efbb267219e0b9bd1b10d3998` remain retained only as superseded identities and are rejected. Independent review found and closed one split-parent defect by requiring sibling grouping to include every UTF-16 parent coordinate field, not offsets alone. Focused Runner protocol gates reached 22/22, the corrected Snapshot file reached 5/5, the Plugin mirror reached 2/2, and Runner typecheck passed. The Runner commit is local because that repository has no configured push destination; no remote was guessed or added.

The Plugin Source Snapshot and import boundaries are now accepted in the ignored development source tree. Snapshot focused gates reached 10/10 and import gates 6/6; both independent reviews returned `Ready`. The aggregate Plugin `npm test` now includes `test:import-v3` and passed end to end, followed by a green no-emit TypeScript check. Import accepts only fixed task-local siblings and protocol `@2`, performs both freshness checks, validates and independently scores all three candidates before an immutable state switch, and retains the newest three successful imports. The production build remains intentionally deferred because it would overwrite an unrelated pre-existing `main.js` worktree change; ignored source/tests are not force-published under the repository policy.

### Evidence Cluster Implementation Gate

Structural ADR Q499 replaces the previously blocked clustering placeholder with `evidence-cluster-builder@1`. Implement it as a pure deterministic module between accepted shared preparation/Attributes and the existing explicit-cluster Run executor. The module receives only Snapshot, filtered TermBindings, complete `sourceTermIndex`, accepted Source Disposition, accepted Attributes, and target count; it must not call a provider, embedding service, fallback, or image route.

TDD must lock integer score arithmetic and cross-multiplied ties before implementation, then cover full Linked Source coverage, three-proposal capacity, target/max termination, canonical ordering, exact cluster-local Term bindings, exact-render 40,000-token packing, atomic oversize failure, Q354 split pairs, and global split budget. After focused acceptance, connect its ordered output directly to the already reviewed Run executor; absent or malformed clusters remain hard failures and there is no compatibility inference from v2 artifacts.

Runner commit `a9a4a2e` accepts `evidence-cluster-builder@1` and the Q501 Run-boundary correction. Independent review required and verified global proposal-cap enforcement before calls, later-only remounts without renumbering, exact Disposition/structural/Linked-Term/Attribute validation including Q268 distribution, explicit code-unit ID ordering, and first-nonfitting Term termination. Combined builder/Run gates reached 35/35 and typecheck passed. No provider, embedding, fallback, SenseNova, image, art, or 2.5D route participates in cluster construction.

### Revision Assembly Integration Gate

The next Runner boundary converts each accepted `SemanticRunResultV3` into one closed `SemanticRevisionV3` before scoring and publication. Assembly is pure and receives only the accepted Source Snapshot, finalized Term Pool, accepted Attributes and Source Dispositions, one Run result, and the current Prompt-set fingerprint. It deterministically builds Related Edges, orders Concepts by Attribute group / earliest complete mount / normalized label / Concept ID, materializes the closed revision identity, computes the hard-gate audit, and refuses any structure or supplied-audit mismatch. It does not call a provider, infer missing Concepts, repair a failed Run, or select a candidate.

Run results must expose sufficient exact audit provenance instead of assembly inventing zeroes. `initialConceptCount` is the first Formation result count before Concept Critic or remount. `affectedConceptIds` and `affectedSourceIds` are Snapshot/Concept-order de-duplicated unions of entities actually touched by Run-local Critic drops, remount, or Summary rewrite. `processDiscardCount` counts only Q439-authorized Concept Formation quarantine records supplied by the recovery runtime; absence of such records means zero, not a guessed recovery. Assembly preserves the final Critic drop totals, requires passed Concept IDs to equal the final Concept set, and validates the resulting Revision before it can reach scoring.

TDD must first prove exact Related Edge construction, concept order, audit provenance, identity binding, and negative rejection of malformed Run audit. A three-candidate integration fixture must then assemble canonical `run-1..run-3`, recompute selection, and hand the exact candidates to atomic publication. No CLI activation occurs until this pure boundary is independently accepted.

Runner commit `999d57e` accepts Revision Assembly after two independent review rounds. The retained first review exposed duplicate passed IDs, remount-time ID/provenance drift, inconsistent Run/Revision audit order, arbitrary SHA-shaped Prompt identity, and caller-invented process-discard counts; all became negative fixtures. The accepted boundary requires exact ordered passed Concepts, uses the final Attribute/mount/label/ID order, binds `PROMPT_SET_FINGERPRINT_V3`, migrates affected provenance across deterministic ID changes, and derives process discard only from closed quarantine records. A legal Q501 overlap fixture additionally proves that every quarantined cluster is remounted exactly without pulling a healthy overlapping cluster into repair. Focused gates reached 30/30 and the fresh Runner suite reached 245/245 with typecheck/build passing. The local commit cannot be pushed because no Runner destination is configured.

### Runtime Orchestration Integration Gate

The next Runner phase connects the accepted modules without redefining them. Add one protocol-v3 text-stage executor that owns exact Prompt rendering, primary transport, one structured repair, atomic fallback, stage-local checkpoint reuse/write, actual accepted `PromptTrace`, and sanitized provider-ledger accounting. It returns validated stage output plus recovery metadata; it does not apply semantic decisions, invent stage defaults, call image routes, or duplicate a caller-owned batching/discard policy.

Term Extraction gets its own deterministic request packer and ordered record aggregator before literal materialization. Generic Filter keeps its accepted recursive bisection, 2%/20 process-discard budget, and linked-Source repair in `semantic-preparation-v3`; the generic stage executor converts an exhausted structural recovery gradient into the typed terminal consumed by that owner and never performs a second discard. Source Disposition and Attribute flows use the same executor but retain their already accepted review/adjudication and one-repair semantics.

Concept Formation quarantine must be produced during the current Run by the actual recovery result. A top-level orchestrator may not predeclare or inject a successful-looking quarantine count. An unrecoverable authorized atomic cluster yields one closed `{clusterId, sourceIds}` record, skips normal Formation for exactly that cluster, and forces exactly that cluster through the one remount cycle even under legal Q501 Source overlap. The Run/Assembly boundary may continue to validate and consume those records, but the production data path must make caller fabrication impossible.

Add one v3-only orchestrator that loads the closed Task Bundle, carries its already validated canonical Snapshot bytes, executes the fixed stage order, finalizes Terms, builds Evidence Clusters, executes three independent Runs, assembles three Revisions, and invokes the accepted atomic publication boundary. It emits only the closed Runner events and never imports the old `long-pipeline`, confirmation, art, image, or protocol-v2 task loader.

Runner commit `a5fb131` extends only the accepted v3 loader return value with those already validated canonical Snapshot bytes. The focused Task Bundle suite remained 6/6 and typecheck passed. Orchestration must pass this exact value to publication; reserializing the parsed Snapshot is an eval failure. The commit is local because the Runner remote is still absent.

TDD is split into reviewable gates: text-stage executor and ledger; Term Extraction packing; live Formation quarantine/remount; then a scripted fake-provider full pipeline and checkpoint-resume fixture. The fake E2E must reconcile ledger counts to observed calls/reuse, prove `complete.json` is last, prove checkpoint records contain no messages/responses/Source excerpts/endpoints/credentials, and assert zero image, SenseNova, art, 2.5D, and real-network calls. CLI activation remains blocked until this integration passes independent review.

Runner commit `ea86121` accepts the sanitized provider-ledger accumulator. Review-driven fixtures require primary-only and optional-fallback configurations, exact code-unit ordering, identity equality before same-key aggregation, three canonical Run coverage, and rejection of `endpoint`, `key`, `messages`, `output`, and `path` at activity, identity, and options boundaries. Focused gates reached 9/9, typecheck passed, and independent review returned `Ready`; the commit remains local because no Runner remote is configured.

Runner commit `ca2beb7` accepts the Term Extraction request packer and ordered aggregator. It uses the exact rendered two-message request for the 100-Source/40,000-token hard limits, rejects an oversized atomic Source before invocation, bisects only the typed exhausted structural-recovery result, and preserves Q399's atomic failure terminal. Independent review corrected the boundary so structurally valid nonliteral strings reach Q398 materialization for local drop/audit rather than triggering repair; closed coverage/order/0..8 uniqueness negatives remain enforced. Relevant focused gates reached 34/34 with typecheck passing. The local commit cannot be pushed without a Runner destination.

### Private v3 Task Bundle Gate

Fresh v3 work uses an independent closed private task bundle and never extends the protocol-v2 loader. The task directory contains exactly the authoritative fixed inputs `task.json`, `source-snapshot.json`, and `checksums.json`; later checkpoints and publication artifacts are outputs, not task-manifest inputs. `task.json` is closed to `protocolVersion:3`, `taskId`, `bookId`, `sourceFingerprint`, `snapshotHash`, fixed `sourceSnapshotFile:'source-snapshot.json'`, and the current `schemaManifestHash`. `checksums.json` is closed to `protocolVersion:3`, `taskId`, `taskSha256`, `sourceSnapshotSha256`, and `schemaManifestHash`.

The Runner resolves the task directory and every fixed input through real paths, rejects any escape, parses exactly one JSON value per file, validates the Source Snapshot under protocol `@2`, requires every task/checksum identity to equal the Snapshot/current Schema authority, requires canonical Snapshot bytes, and verifies both SHA-256 values. It returns only the canonical task root, validated Snapshot, and a deterministic input fingerprint; it does not search sibling names, migrate v2, infer defaults, inspect old tasks, or write anything. The Plugin exporter must later emit these exact bytes and hashes atomically. Focused fixtures must cover the positive bundle, unknown fields, v2 identity, stale/mismatched identities, noncanonical Snapshot bytes, checksum drift, and reparse-point escape.

Runner commit `b7921fe` accepts the private v3 Task Bundle loader after independent review. The review found that hashing a decoded string did not prove the exact on-disk bytes; the accepted correction reads `Buffer` values, hashes the raw bytes, rejects invalid UTF-8 before JSON parsing, and compares canonical Snapshot bytes at the byte level. Focused gates reached 6/6, with typecheck, build, and the fresh 243-test Runner suite passing. The loader does not inspect outputs or checkpoints and does not extend the v2 loader. Its push remains blocked because the Runner repository has no configured destination.

Prompt ADR Q500 preserves Q384's two-message boundary during Term Extraction v2 implementation. Callout metadata rules belong to the Term stage contract in the User message; the shared System constitution must remain byte-identical. Tests must reject any implementation that changes the constitution hash or increments unrelated stage contracts.

Runner commit `b5b2640` accepts this Term Extraction v2 boundary. The shared constitution remains `constitution@1` with hash `bde8c837b51b59bf7973e05511a9c4c2e39158c68c892239b613c49e65502c35`; the callout rule and closed marker union occur only in User `TASK_GOAL_AUTHORITY`. Active semantic calls and provider fixtures expose `term-extraction@2` only; `term-extraction@1` survives solely in explicitly named retained golden audit constants. Scoped Prompt/checkpoint/preparation/provider gates reached 37/37, build passed before concurrent Term Pool work began, and independent review returned `Ready` after closing the stale active-interface literal. The Runner commit remains local because no push destination is configured.

Structural ADR Q501 removes the pre-Q499 Run executor's incorrect mutual-exclusion and earliest-Source cluster assumptions. Run validation must accept overlapping admitted sets while retaining exact per-cluster authority, selection-order processing, builder proposal cap three, and global final mount cap three. Repair scopes use a Snapshot-ordered unique Source union. This validator correction changes no Concept Formation Prompt byte.

### Filtered Term Pool Finalization Gate

Structural ADR Q502 defines `term-pool-finalizer@1` between Generic Filter and Attribute Proposal. Implement it as a provider-free deterministic module; no fixture or caller may directly invent `percentileRank`. It recomputes complete Linked bindings, integer ranking signals and duplicate penalties, applies the exact 600-global plus 200-distribution selection, materializes tied integer percentiles, prunes `sourceTermIndex`, and enforces the legal Concept-count minimum.

TDD must lock each integer signal and tie before implementation, then cover multi-bucket de-duplication, 800 ceiling, minimum failure, callout non-signal, table marker boundary, and exact repeatability. Connect finalized TermBindings to Attributes, Q499 clustering, Revisions, and scoring only after focused acceptance. This module does not authorize a new extraction heuristic, stopword table, model call, or compatibility rank.

Runner commit `3d7af6f` accepts `term-pool-finalizer@1` with integer signal identity `term-pool-signals@1`. Focused gates reached 8/8, typecheck and build passed, and independent review returned `Ready`. A fresh run caught and closed ordinary-connector folding for `.`, `/`, and `:` while preserving `+` and `#`; the accepted implementation rejects inconsistent Linked bindings/indexes instead of repairing them and makes no external call.

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
