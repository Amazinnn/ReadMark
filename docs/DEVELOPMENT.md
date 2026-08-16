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

The pure Semantic Report view-model gate is accepted in the ignored development source tree. It consumes only the three immutable raw JSON artifacts, runs the closed protocol-`@2` validators, binds the selected Revision's exact byte hash to the selected Selection Report run, and rejects identity, hard-gate, repair-audit, version, or v2 drift. It exposes overview, Attribute groups, stable Concepts, up to three representative Evidence items with exact current UTF-16 navigation, Related neighbors, exclusions in Snapshot order, four score categories, selection reason, and sanitized actual-provider counts. Search is restricted to label, aliases, Summary, and representative Source text; the WeakMap-backed view state is isolated by book and has no persistence shape. Focused gates reached 6/6 after review-driven hash and ordering negatives, the fresh aggregate Plugin suite and no-emit TypeScript passed, and independent review returned `Ready`. No DOM, layout, renderer, image, art, activity-score, unlock, v2 compatibility, persistence, or external-call route is present. Active view wiring remains a later gate.

### Post-Disposition Concept Target Migration

Structural ADR Q505 is a blocking protocol correction discovered before Plugin orchestration activation. The Plugin must export a Source Snapshot without `targetConceptCount`. The Runner must compute the target exactly once from the final shared `linked` dispositions and pass it explicitly through Term Pool, Attribute, Evidence Cluster, Run validation, Revision validation, and scoring. Runner and Plugin publication validators must independently derive the same value from the closed Revision dispositions. No caller-provided target, placeholder, total-Source estimate, inferred compatibility value, or fallback is allowed.

TDD order is: reject the superseded Snapshot shape and lock formula vectors; migrate the byte-identical Runner/Plugin Schema bundle and manifest; thread the derived scalar through Runner stages and checkpoint dependencies; update independent scoring and completion fixtures; then resume Plugin task orchestration. Until those gates pass, `main.ts` v3 activation remains RED and no real provider or non-text route is permitted.

Q505 is accepted at Runner commit `3b67883`. The closed bundle is now `readmark-protocol-v3@3` / `protocol-v3@3`, with Schema manifest `d4b1febee41522e52192646369b3c8bdeaf3c9230a485d4c2dcc6fe835a8efb0`. Runner derives the target from final dispositions, Term Pool and Evidence Cluster independently reject a mismatched scalar, Revision validation and scoring recompute from published dispositions, and the Plugin mirror exports no target field. The fresh Runner suite reached 298/298 with build green; Plugin protocol, Source Snapshot, task export, import, and scoring focused gates reached 32/32; cross-repository Schema/vector/scorer identity reached 1/1. No real provider or non-text route was called. The Runner commit remains local because that repository has no configured push destination.

The Plugin aggregate gate now stops at the retained protocol-v2 `reading-map-e2e` fixture because it imports the removed confirm/art Runner-client APIs. This is the next intentional RED replacement boundary: add the v3 orchestration/import/report E2E first, then retire the obsolete fixture and active routes. Do not restore compatibility exports.

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

The earlier 6/6 import gate is superseded by the canonical-storage acceptance gate. Independent re-review mechanically found that a pre-existing `snapshots`, `revisions`, or `reports` junction could escape the already canonical `mapsRoot` and book root during publication or retention cleanup. TDD now covers both pre-publication and post-publication directory replacement. Import creates and verifies every immutable directory as a canonical direct child, verifies an existing immutable file and `state.json` without following a reparse alias, and immediately before the index switch re-verifies all three published files and hashes. A second review found that preparing the temporary state file before the second freshness callback exposed it to replacement; the accepted order now creates that temp only after freshness and immutable verification, immediately before rename. Cleanup operates only through verified directories. Focused import gates reached 10/10; the fresh aggregate Plugin suite and no-emit TypeScript check passed. The implementation remains ignored and uncommitted under repository policy; this development record is the tracked acceptance artifact.

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

Runner commits `816fd65`, `f5020cb`, and `f3a6cd4` implement the v3-only top-level semantic orchestrator without importing the old `long-pipeline`. Term Extraction now exposes its canonical dynamic input beside the exact rendered request so the shared executor can consume it without Prompt parsing or duplicated packing logic. The Run adapter carries canonical `runId` through Prompt metadata, checkpoint identity, and Provider Ledger accounting while retaining the accepted round-robin Critic scheduler. The orchestrator executes the fixed Bundle → Extraction → materialization → shared Disposition → Q504 Filter/repair → Term Pool → Attribute → Evidence Clusters → three Runs → Revisions → selection/publication sequence with one global text semaphore and ledger. A 60-Source/30-Term production-style fake provider completes all text stages and publishes `complete.json`; copying the resulting checkpoints into a fresh unfinished task then completes with zero provider calls and checkpoint-only ledger activity. The fresh Runner suite is 301/301 with build passing. No real provider, image, SenseNova, art, or 2.5D route was called. CLI activation is the next isolated gate.

### Protocol-v3 CLI Activation Gate

Runner commits `2d230ed`, `6ee8b0e`, `591e917`, `081e257`, `48233b6`, and `bf32864` activate only `configure`, `doctor`, `probe`, `run`, `status`, and `report`. `confirm`, `confirm-art`, and `art` are usage errors; the active `run` path loads only the closed v3 Task Bundle and invokes the v3 semantic orchestrator. It publishes all three candidates and the Selection Report before `complete.json`, returns only safe v3 task/run identities, and never imports the protocol-v2 pipeline or human-confirmation flow.

`status` and `report` independently read the fixed five referenced artifacts and accept completion only after `validateCompletionBundleV3` rechecks hashes, all three candidates, deterministic scoring, and selection. A present but invalid completion bundle fails explicitly instead of becoming `ready` or `complete`. `configure` stdin is closed to primary text, optional recovery-only `fallbackText`, and task workspace. Active configuration and diagnostics exclude credentials, provider endpoints, local config/workspace paths, image configuration, source text, model output, and raw exception messages; stderr and JSONL failures expose only fixed error codes.

Replacement CLI evals are 9/9. After those passed, 11 tests that existed only for the closed protocol-v2 confirmation/art CLI were removed; valid doctor, fake probe, compiled-binary dispatch, completion validation, and lifecycle coverage were retained or migrated. The fresh Runner suite is 297/297 with build passing. No real provider, fallback, image, SenseNova, art, 2.5D, or historical v2 task was called. The Runner commits remain local because no push destination is configured.

**Superseded by Runner commit `01dad24`; original checkpoint retained:** This gate does not claim live provider admission for `probe`: the current fake probe proves only v3 provider configuration assembly and sanitized output. It also does not yet emit truthful stage/progress events because the orchestrator has no live event callback boundary. Add one canonical synthetic two-message probe call and live stage/progress callbacks under separate RED fixtures before declaring the CLI phase complete; do not fabricate post-hoc progress events.

Runner commit `01dad24` closes the remaining CLI gate. `probe` renders one canonical `term-extraction@2` System/User request over a fixed synthetic Source, calls the primary text transport exactly once, and accepts only a strict Schema-valid response; it never invokes fallback, writes a checkpoint, or retains response text. The semantic orchestrator exposes one optional live event callback and emits nine truthful module-boundary pairs in execution order: `stage_started` before work and `progress 1/1` after successful return. A thrown module emits `interrupted` with a fixed error code and is then rethrown to the task-level `failed` terminal; no recovery or post-hoc event fabrication was added.

CLI focused evals remain 9/9 and validate every JSONL record through the closed RunnerEvent validator. The fresh Runner suite remains 297/297 with build passing. Tests used only the local fake primary; no real provider, configured fallback, image, SenseNova, art, 2.5D, or historical v2 task was called. CLI activation is complete for Runner scope. Plugin task orchestration and import remain separate later gates.

### Plugin Semantic Report Activation Gate

The Plugin active Reading Map view is now registered to `SemanticReportView`, not the historical `ReadingMapView`. Its generation action exports a protocol-v3 Source Snapshot without a caller target, runs the closed v3 event stream, requires `task_completed`, imports only `complete.json` through both freshness gates, and then reads immutable artifacts through the validated v3 state index. The view builds the closed report model, exposes concept/attribute/summary/evidence/relationship/selection diagnostics, and navigates representative evidence by the stored UTF-16 offset. Search, attribute filter, scroll, and expanded-concept state use the in-memory per-book store only.

Runner setup on the active path now exposes the primary text model and an optional failure-recovery fallback. It has no image configuration or art action. The v2 manual export/import commands were removed from command registration, and the active report view contains no renderer, layout, unlock, activity-score, confirmation, art, image, or 2.5D route. Focused replacement gates are 3/3 for active main wiring, 6/6 for the report model, 2/2 for orchestration, and 11/11 for import; `tsc --noEmit --skipLibCheck` passes. The production build was not run because it would overwrite the user's unrelated dirty `main.js`.

This is not yet aggregate acceptance. Historical v2 view/modal/method bodies remain as unregistered dead source pending the cleanup gate, and the old `reading-map-e2e` fixture still imports already removed v2 confirmation/art client APIs. The next RED boundary is a real cross-repository fake-provider E2E that starts from Plugin v3 task export, runs the compiled Runner, verifies completion-last, imports through both freshness gates, and builds the Semantic Report. Only after that replacement passes may the obsolete fixture and dead source be deleted.

The preceding RED boundary is superseded by the Plugin/Runner v3 replacement E2E. One public synthetic task now produces 64 Plugin Source Units, runs the compiled Runner fake provider through all three candidates, terminates with the closed `task_completed` event and `complete.json`, imports through both fresh Snapshot rebuilds, and builds a 32-Concept Semantic Report from the immutable state index. After this passed, the unregistered Book World view/modals, protocol-v2 workflow/storage/scoring/layout/renderer/assets modules, their dedicated tests, and the visual harness were removed. The aggregate Plugin suite now contains only the retained core reading tests and protocol-v3 semantic gates.

Checkpoint resume is also accepted on the Plugin boundary. The persisted book index carries only `semanticTaskId` and `running|interrupted`; no task directory, endpoint, credential, Source text, output, or checkpoint content is persisted. Resume derives the directory from the configured Runner root, requires the existing Task Bundle to equal the freshly rebuilt canonical Snapshot bytes and manifests, and either continues that directory through Runner checkpoints or imports an already present `complete.json` without rerunning Runner. Focused orchestration/main gates reached 8/8 and no-emit TypeScript passed.

Final fake acceptance is green. The fresh Plugin aggregate suite and no-emit TypeScript check pass after the replacement E2E, cleanup, and resume integration. The fresh Runner suite builds and passes 298/298, including the cross-repository Schema/manifest/vector/scorer equality fixture and the full fake semantic pipeline. Static scans find no retired route in the Plugin active source, no legacy import in the Runner v3 CLI/orchestrator/runtime entry points, no unresolved Prompt placeholder in Prompt source, and no console statement combining a sensitive-field name with logged data. The Plugin production bundle remains intentionally unrun because it would overwrite the user's pre-existing dirty `main.js`.

Runner protocol-v2 implementation/tests are not active CLI dependencies, but some corresponding files contain pre-existing unrelated uncommitted user edits. They were left untouched rather than deleted, in accordance with the preservation constraint. This does not reopen any v2 route or weaken v3 acceptance; physical cleanup of those user-owned dirty files is deferred until their owner resolves or explicitly authorizes replacement. No real provider, configured fallback, SenseNova, image, art, or 2.5D call occurred.

Runner commit `ea86121` accepts the sanitized provider-ledger accumulator. Review-driven fixtures require primary-only and optional-fallback configurations, exact code-unit ordering, identity equality before same-key aggregation, three canonical Run coverage, and rejection of `endpoint`, `key`, `messages`, `output`, and `path` at activity, identity, and options boundaries. Focused gates reached 9/9, typecheck passed, and independent review returned `Ready`; the commit remains local because no Runner remote is configured.

Runner commit `ca2beb7` accepts the Term Extraction request packer and ordered aggregator. It uses the exact rendered two-message request for the 100-Source/40,000-token hard limits, rejects an oversized atomic Source before invocation, bisects only the typed exhausted structural-recovery result, and preserves Q399's atomic failure terminal. Independent review corrected the boundary so structurally valid nonliteral strings reach Q398 materialization for local drop/audit rather than triggering repair; closed coverage/order/0..8 uniqueness negatives remain enforced. Relevant focused gates reached 34/34 with typecheck passing. The local commit cannot be pushed without a Runner destination.

Runner commit `8ca56be` accepts the protocol-v3 text-stage executor and its reconstructible repair-checkpoint identity. The executor requires the Runner-global semaphore and transport classifier, fixes MiniMax recoverable transport retries to two, renders the exact two-message base and repair requests, returns one typed atomic structural terminal to the caller-owned split/discard policy, and records transport successes rather than conflating them with accepted stage outputs. A review finding exposed that matching only the base Prompt and repair contract could reuse a forged or obsolete repair example/rendering hash; accepted checkpoints now retain closed normalized mechanical diagnostics and reconstruct the exact used repair trace before reuse. Checkpoint identity, recovery, diagnostics, and repair-contract records are closed against extra Prompt/response/endpoint fields. Focused gates reached 47/47, typecheck and diff checks passed. The constrained reviewer lens was mechanically disabled by local calibration state, so its attempted review produced no acceptance verdict; the main thread completed the evidence-based review and corrections required by that escalation. Push remains blocked because the Runner has no configured destination.

Runner commits `1f9330d`, `f9f7a7e`, `6a5d7f5`, and `448195b` accept live Concept Formation quarantine after three review-driven provenance corrections. The Run no longer accepts a top-level discard record or exposes a quarantine constructor. Only the executor's module-authenticated terminal produced after the current exact primary/repair/fallback structural exhaustion can create the current cluster record; the terminal binds stage, Run, base contract, and the pre-invocation canonical dynamic-input hash through runtime-frozen fields. Cross-cluster replay, terminal mutation, and in-place input mutation are negative fixtures. Per-Run `floor(2%)` cluster and 20-distinct-Source limits, canonical audit order, remount exclusion, and Q501 exact-cluster overlap behavior are retained. Focused Run/assembly/executor gates reached 38/38, the fresh Runner suite reached 275/275, typecheck passed, and final independent review returned `Ready`. All commits remain local because the Runner has no configured destination.

Top-level v3 orchestration remains RED and no orchestrator code has been accepted. A no-edit interface audit found three exact contract gaps: finalized `TermBinding` records do not carry the Prompt-visible distribution buckets required by Attribute Proposal and its two-distribution gate; the narrow stage invokers erase executor call/trace results needed to build an actual Provider Ledger; and Generic Filter's authorized atomic-discard recovery exposes only a caller callback, without a closed implementation boundary for the required re-extract-then-explicit-exclude chain. The first gap changes Prompt-visible bytes and must be closed as the next Prompt ADR decision; the latter two need contract-bound implementation interfaces. Until then, the Runner must not fabricate bucket strings, caller-supplied ledger counts, empty replacement Terms, or guessed Source Dispositions. The fresh pre-orchestrator Runner baseline is 277/277 with typecheck and build green.

The Provider Ledger orchestration gap is now closed by Runner commits `da2e4c3` through `2faef3c`. The executor returns a module-authenticated, runtime-frozen accounting envelope containing its exact contract/stage/Run scope, Prompt trace, recovery, provider call counts, and reuse state. Ledger translation accepts only that envelope, verifies the exact executor counter equations, separates historical checkpoint provenance from current checkpoint activity, requires an independent checkpoint-store identity, consumes each result once per ledger, and atomically commits multi-provider activity through a shadow map. Review-driven negatives cover fabricated scope/counts/trace, impossible retry/repair/fallback equations, checkpoint history, replay, and partial fallback-ledger failure. Focused executor/ledger gates reached 19/19, typecheck passed, and independent review returned `Ready`. The commits remain local because the Runner has no configured push destination. Top-level orchestration remains blocked only by Attribute distribution-bucket encoding and the Generic Filter atomic-discard recovery boundary.

Prompt and structural ADR Q503 close the Attribute distribution boundary before code. Attribute Proposal, Critic, and repair advance together to `@2` and receive the same Runner-derived `distribution` records. Each record is the exact top-level heading bucket plus midpoint position decile; records are unique, ordered by earliest Snapshot Source position then heading and decile, and capped at twelve per Term. The producer recomputes them from complete finalized bindings. Callers and models cannot supply, reorder, or replace them with free strings or counts. TDD must begin with negative exact-render and projection fixtures, then advance only Attribute-stage Prompt identities and the aggregate Prompt-set fingerprint. Term Pool publication stays unchanged; Attribute and all descendants invalidate.

Runner commits `91e4658`, `ad6f055`, and `da024f0` accept the Q503 implementation boundary. Attribute preparation projects only from the canonical Snapshot, exact Source dispositions, and complete finalized `TermBinding` records; the authenticated projection binds its producer ID, Snapshot hash, disposition hash, binding hash, and ordered-output hash. Attribute Proposal, Critic, repair, exact rendering, structured repair, checkpoint lookup, and checkpoint write all consume that same authority. The dependency fingerprint includes the full projection identity, and a regression proves the first accepted write is reused on the second execution with zero provider calls. The exact-render fixture advances to version 2 while retaining the three superseded `@1` hash triples. Independent review first rejected incomplete authority and then a write-path identity shadow; both findings were corrected without adding fallback behavior, and the final review returned `READY`. The fresh Runner suite reached 285/285 and build passed. The active Prompt-set fingerprint remains `18c5a88e6292b996346a940b55e143c9858a407a568314e5842e4d68853eb1c4`. Runner push remains blocked because no remote is configured.

Prompt/structural ADR Q504 closes the final pre-orchestrator RED boundary before code. Replace `repairLinkedSource` with the Runner-owned `generic-filter-discard-repair@1` chain. Reuse exact existing Prompt contracts through the actual executor and ledger: atomic Term Extraction, literal/new-candidate validation, Generic Filter, then full Source Disposition classify/review/adjudicate only when no candidate survives. Never accept a caller-created Term/reason, never restore a candidate already dropped in the current stage, and never infer an exclusion from missing terminology. A final `linked` outcome is `filter_discard_repair_unresolved`.

Runner commits `123aebe` and `036901b` make the Q504 semantic core green but do not yet accept the full boundary. `repairLinkedSource` is removed; the core owns atomic re-extraction, canonical local materialization, candidate Generic Filter, shared process-discard budget, fresh classify/review, disagreement-only adjudication, explicit exclusion, and the unresolved-linked terminal. Focused gates are 29/29 and the full Runner suite is 288/288 with build passing. The remaining RED boundary is the chain-level `generic-filter-discard-repair@1` checkpoint plus actual executor trace and Provider Ledger observation; until those are implemented and tested, Q504 is not marked accepted. Runner push remains blocked because no remote is configured.

Runner commits `cf61dfd`, `849828e`, `78cda8e`, `ab43757`, `a5c0c50`, and `94e8b9e` close and accept the remaining Q504 boundary. Structural executor terminals now retain the exact sanitized base PromptTrace and authenticated call counters and can be recorded once in the Provider Ledger. The semantic invoker derives the exact Prompt stage code from the contract, records every accepted or exhausted executor observation, and never accepts caller-supplied trace/count data. `generic-filter-discard-repair@1` checkpoints the complete pre-filter authority, ordinary and recovery decisions, explicit process-discard audits, ordered repair result, sanitized observations, relevant Prompt/Schema identities, and its producer identity. Reuse makes zero provider calls and records only checkpoint activity; input/producer changes invalidate the chain and descendants, not original extraction or shared pre-filter disposition. Review-driven fixtures additionally close cross-Source recovery-drop memory, multi-Term relink order, extraction/disposition structural terminals, checksum-consistent cache tampering, privacy, and exact observation-to-ledger reconciliation. The fresh Runner suite is 298/298 with build passing. The configured constrained reviewer was unavailable because its local calibration gate is disabled, so no independent verdict is claimed; the main thread completed the mechanical audit and corrected both the recovery-memory gap and an accidentally staged unrelated `hasDescendant` hunk. Runner push remains blocked because no remote is configured.

### Private v3 Task Bundle Gate

Fresh v3 work uses an independent closed private task bundle and never extends the protocol-v2 loader. The task directory contains exactly the authoritative fixed inputs `task.json`, `source-snapshot.json`, and `checksums.json`; later checkpoints and publication artifacts are outputs, not task-manifest inputs. `task.json` is closed to `protocolVersion:3`, `taskId`, `bookId`, `sourceFingerprint`, `snapshotHash`, fixed `sourceSnapshotFile:'source-snapshot.json'`, and the current `schemaManifestHash`. `checksums.json` is closed to `protocolVersion:3`, `taskId`, `taskSha256`, `sourceSnapshotSha256`, and `schemaManifestHash`.

The Runner resolves the task directory and every fixed input through real paths, rejects any escape, parses exactly one JSON value per file, validates the Source Snapshot under protocol `@2`, requires every task/checksum identity to equal the Snapshot/current Schema authority, requires canonical Snapshot bytes, and verifies both SHA-256 values. It returns only the canonical task root, validated Snapshot, and a deterministic input fingerprint; it does not search sibling names, migrate v2, infer defaults, inspect old tasks, or write anything. The Plugin exporter must later emit these exact bytes and hashes atomically. Focused fixtures must cover the positive bundle, unknown fields, v2 identity, stale/mismatched identities, noncanonical Snapshot bytes, checksum drift, and reparse-point escape.

The Plugin exporter gate is accepted. It writes only the closed `task.json`, canonical `source-snapshot.json`, and `checksums.json` into a fresh staging directory, completes every fallible validation before one atomic directory rename, and returns immediately after publication. Existing task destinations, protocol-v3 `@1`, manifest drift, noncanonical Snapshot bytes, and reparse-point aliases are rejected; no output, checkpoint, v2, provider, image, or UI route is consulted. Focused fixtures reached 4/4, no-emit TypeScript passed, and independent review returned `Ready`. The normal build remains intentionally unrun because it would overwrite the user's pre-existing dirty `main.js`.

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
