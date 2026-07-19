# ReadMark 0.6.0-beta.3 Freeze Handoff

Frozen at `2026-07-19T12:31:35+08:00`.

> **Semantic-plan supersession:** This file remains the historical operational freeze for the unfinished beta.3 task. Its instructions to rescue protocol-v2 semantic generation, reuse the old semantic task, produce 100-250 concepts, assign 1-3 attributes, or generate five directed relation types are superseded by `docs/ADR/2026-07-19-pre-render-semantic-network.md`. New semantic generation starts from a fresh protocol-v3 Source Snapshot and task. Preserve the old task only for diagnosis; do not resume or import it as v3 semantic truth.

This is the authoritative entry point for the next development conversation. Beta.3 is not complete, validated, imported, committed, pushed, tagged, or released.

## Repository State

Plugin:

- Root: `D:\Projects\.obsidian\plugins\ReadMark`
- Branch: `feat/beta3-long-text`
- Public tracked changes already present before this documentation pass: `main.js`, `styles.css`
- Existing untracked release leftovers: `readmark-0.3.3.zip`, `readmark-0.3.3/`
- `package.json` says `0.6.0-beta.3`; public `manifest.json` and `versions.json` stop at `0.6.0-beta.2`.
- The public README contains older version language. This freeze intentionally does not update public files.

Runner:

- Root: `D:\Projects\readmark-map-runner`
- Branch: `main` (also points at local `feat/beta3-provider-pipeline`)
- Uncommitted files: `src/checkpoint-store.ts`, `src/long-pipeline.ts`, `src/provider.ts`, `tests/long-pipeline.test.ts`, `tests/provider.test.ts`
- The uncommitted work adds detailed schema feedback, adaptive batch bisection, persistent split markers, Retry-After handling, shared request gating, and more durable provider retries.
- The last recorded full Runner verification before the freeze was 61 passing tests. Re-run it before claiming completion.

Do not push, tag, release, commit, clean, or revert either repository without explicit user approval.

## Active Long-Text Task

An unfinished private protocol-v2 task existed at freeze and accumulated reusable historical checkpoints before repeatedly stopping during candidate reduction. Its exact directory, task identity, process IDs, logs, checkpoint inventory, and recovery commands are intentionally omitted from documentation because they are private runtime state.

That task is no longer the semantic-generation target. Preserve its private files for diagnosis, but do not resume, import, migrate, or describe them as protocol-v3 truth. New semantic generation starts from a fresh v3 task and Source Snapshot under the current ADR.

## Provider State

- Preferred text provider: MiniMax-M3 through the Anthropic Compatible protocol.
- Active text transport at freeze used an Anthropic Compatible MiniMax-M3 configuration; the exact endpoint remains private Runner configuration.
- Image provider: SenseNova `sensenova-u1-fast` through its image-generation endpoint.
- API keys exist only in ignored Runner-local configuration. Never print or copy them into documentation, logs, task artifacts, process arguments, plugin data, or Git.

Run 1 is mixed-provider evidence: early source batches were produced by MiniMax-M3 and later batches by SenseNova Flash-Lite. Candidate consolidation resumed under MiniMax-M3. Existing checkpoints do not include a sanitized provider/config fingerprint, so this limitation cannot be reconstructed mechanically. It must be disclosed in every quality report and must not be described as a pure-provider run.

Runs 2 and 3 are expected to use MiniMax-M3 if the active configuration remains unchanged. Verify this assumption before reporting it as fact.

## Executive Status At Handoff

The documentation freeze is complete. The Beta.3 product work is not complete.

| Workstream | State | Mechanical evidence | Remaining work |
| --- | --- | --- | --- |
| Local freeze documentation | Complete | Eleven ignored local documents updated and secret-scanned | Keep synchronized when the task reaches a new terminal state |
| Provider configuration schema 2 | Implemented locally | Runner accepts separate compatible text and HTTP-template image settings | Re-run tests; verify plugin settings persistence and non-flickering local updates |
| MiniMax-M3 text configuration | Active locally | Runner doctor previously reported Anthropic Compatible, complete MiniMax endpoint, model configured | Never expose the credential; verify real output only through pipeline artifacts |
| SenseNova u1-fast image configuration | Active locally | Separate image endpoint/model remains in Runner-local config | Do not start art generation before semantic acceptance |
| Source snapshot/task export | Complete for current task | Existing task bundle and source checkpoint graph | Re-read the source before final import and verify fingerprint containment |
| Run-1 source disposition calls | Historical top-level pass reached the end; final coverage was never accepted | Private batch/checkpoint counts intentionally omitted | Historical only; do not reuse as v3 semantic truth |
| Run-1 candidate reduction | Historical work was repeatedly interrupted | Private checkpoint names/counts intentionally omitted | Historical only; do not resume as the v3 target |
| Attribute proposal/review | Not started | No attribute checkpoint or proposal artifact | Three proposals, critic integration, write proposal/template |
| Attribute confirmation | Not started | No confirmation artifact | Confirm one complete attribute set, then resume automatically |
| Run-1 final concepts/relations/audit | Not started | No run-1 revision | Consolidate 100-250 concepts, classify relations, audit and score |
| Run 2 | Not started | No run-2 source or revision artifacts | Perform independent MiniMax-M3 source analysis and finalization |
| Run 3 | Not started | No run-3 source or revision artifacts | Perform independent MiniMax-M3 source analysis and finalization |
| Cross-run selection | Not started | No Selection Report | Compare base quality and partition agreement; publish best revision |
| Plugin automatic import | Not started | No selected revision or completion marker | Rebuild fresh snapshot, validate, then import atomically |
| Semantic report UI | Incomplete/unaccepted | Local plugin build artifacts changed, no real report to inspect | Show attributes, representative concepts/evidence, exclusions, three scores, and selection reason |
| Central Book World stability | Locally changed but unaccepted | `main.js` and `styles.css` differ from beta.2 | Test view entry, event updates, idle rendering, resource disposal, and WebGL fallback in Obsidian |
| Image/world asset pipeline | Gated and not started for this revision | No accepted semantic revision | Generate only after text acceptance; fall back to procedural buildings on failure |
| Beta.3 version/release | Not authorized | Package and public manifest are intentionally inconsistent | Synchronize only after all tests and manual acceptance; then request explicit release approval |

Historical checkpoint counts were never proof of Source Unit coverage: adaptive splits replace failed parent work with child batches and private checkpoint directories may contain obsolete descendants. Exact runtime counts and names are intentionally omitted. The v3 workflow must prove coverage from its accepted leaf graph and exact Source IDs.

## Complete Beta.3 Delivery Plan

### Goal And Release Definition

`0.6.0-beta.3` must make Book World generation stable enough to run a real long Markdown book end to end without manually moving task files. A user configures compatible providers once, presses one generation/update action, confirms attributes once when required, and receives an imported, auditable Semantic Revision. Progress events must not destabilize the central Obsidian view.

Beta.3 is complete only when all of the following are true:

1. The Current Book produces three mechanically valid Semantic Revisions with complete Source Disposition and linked-source coverage.
2. A deterministic Selection Report chooses one run and records all scores and agreement values.
3. The plugin imports the selected revision against a freshly rebuilt Source Snapshot.
4. The semantic report exposes enough grounded evidence to audit the model result without reading raw task files.
5. The central view opens reliably and remains responsive during Runner events.
6. Runner and plugin automated tests/builds pass from clean commands.
7. Manual Obsidian checks pass for generation, cancellation/resume, reporting, map interaction, and source navigation.
8. No credential, book content, task artifact, runtime state, or private map output enters public Git scope.
9. Public version files and README are synchronized only after the preceding gates pass.

### Phase A: Central View And Settings Stability

Intent: the user must be able to enter Book World and configure providers without flickering, repeated full renders, or an idle WebGL loop.

Required behavior:

- Create the Book World page shell and Canvas once per view lifetime.
- Treat Runner JSONL events as state updates to the progress region, not reasons to clear and reconstruct the entire view.
- Use a render generation token and serialized async queue so stale configuration, doctor, import, or asset results cannot overwrite a newer view state.
- Cache `doctor --json`; invalidate the cache only after Runner path, Node path, or provider configuration changes.
- Settings save, diagnostic state, probe result, and validation errors update their own rows rather than calling full-page `render()`.
- Render Three.js only after initialization, resize, pan, zoom, control changes, layout changes, or asset completion. Stop rendering while hidden or idle.
- Dispose textures, sprite materials, geometries, event handlers, ResizeObservers, and the WebGL context when the view closes or is replaced.
- Handle `webglcontextlost` and retain a usable procedural/list fallback.

Acceptance evidence:

- Opening Book World repeatedly does not hang Obsidian.
- High-frequency fake Runner events do not rebuild the Canvas or reset camera state.
- Settings fields do not flash or lose focus while saving/diagnosing.
- Background and hidden views do not produce continuous idle frames.
- Closing and reopening the view does not accumulate GPU resources or duplicate handlers.

Current state: local plugin build output contains related changes, but real Obsidian acceptance has not been recorded. Do not mark this phase complete from source inspection alone.

### Phase B: Provider Configuration And Security

Text configuration schema 2 contains one active user-configured profile:

- `protocol`: `openai-compatible` or `anthropic-compatible`;
- complete HTTPS `endpoint`;
- plaintext Runner-local `apiKey`;
- `model`;
- context-window tokens, maximum output tokens, temperature, concurrency, and request timeout.

OpenAI Compatible requests use Bearer authorization and parse `choices[0].message.content`. Anthropic Compatible requests use `x-api-key` and `anthropic-version`, and parse text blocks from `content[]`.

Image configuration is independent and contains complete URL, key, model, constrained headers/body JSON templates, response type, response path, optional download headers, and timeout. Only `{{apiKey}}`, `{{model}}`, `{{prompt}}`, and `{{aspectRatio}}` are legal substitutions. Templates cannot execute code, read files, or interpolate arbitrary environment variables.

Current local operating policy:

- Text: MiniMax-M3, Anthropic Compatible, China endpoint.
- Images: SenseNova u1-fast, OpenAI-style image endpoint.
- New users: no provider preset. They must supply protocol, complete URL, model, and credential.
- Fallback: SenseNova does not silently replace MiniMax for semantic text. Image failure falls back to procedural geometry and does not block semantic import.

Security invariants:

- The plugin may receive a key transiently and send it over Runner stdin.
- The plugin never saves the key.
- The Runner may save plaintext only in ignored `config.json`.
- Keys must not enter command arguments, environment dumps, JSONL events, stderr, Notice text, checkpoints, reports, stack traces, docs, or Git.
- `doctor` reports only `apiKeyConfigured: true/false` and sanitized configuration.

Current state: configuration and real compatible-provider calls were implemented and previously exercised. Full regression and plugin settings acceptance remain required.

### Phase C: Mechanical Source Preparation

Input: the tracked Markdown book and its current local path.

The plugin rebuilds a deterministic Source Snapshot using Markdown AST parsing and language-aware sentence boundaries. It preserves exact source IDs, source kind (`prose`, `code`, or `formula`), original coordinates, heading path, content hash, normalized-source fingerprint, and explanatory context references.

Every Source Unit must receive exactly one disposition:

- `linked`; or
- excluded as `toc`, `copyright`, `acknowledgement`, `boilerplate`, `fragment`, or `duplicate`.

No unit may disappear implicitly. Code and formula evidence cannot stand alone without explanatory prose context.

Batching rules:

- Split mechanically by Markdown heading and input budget.
- Reserve context space for prompt and output.
- Never send the complete 1.17 MB snapshot in every request.
- On context overflow, bisect only the affected batch.
- On repeated structured-output failure, persist a split marker and bisect only that batch.
- Reuse valid child checkpoints after restart.

Historical state: the old run visited all of its original top-level batches and performed adaptive splits, but never proved the final exactly-one disposition invariant. It is not a v3 input.

### Phase D: Run-Local Evidence And Candidate Extraction

For each accepted source batch, the model returns:

- exactly one disposition per supplied Source ID;
- one to three local concept IDs for every linked source;
- reciprocal candidate membership, so each candidate's `sourceIds` and each linked disposition's `conceptIds` agree;
- short meaningful labels and grounded summaries;
- no invented Source IDs.

Validation happens before checkpoint acceptance. Invalid JSON receives bounded repair prompts with explicit mechanical feedback. Authentication failures stop immediately. Rate limits, overload, network failures, and timeouts use bounded exponential/backoff behavior. Exhausted structured repair may split a multi-unit batch, but a one-unit failure must remain a surfaced failure rather than disappear.

Current state: run-1 source outputs exist, but their aggregate has not yet passed the full-snapshot audit. Run 1 is mixed-provider and must remain disclosed.

### Phase E: Hierarchical Candidate Reduction

Purpose: reduce thousands of local candidates to a manageable book-level candidate set without losing member coverage.

Algorithm:

1. Group at most 80 candidates.
2. Ask the provider to create at most 40 coherent bundles.
3. Require every supplied member ID exactly once.
4. Materialize each bundle with the union of its source evidence.
5. Repeat by levels until no more than 320 candidates remain.
6. Abort with an explicit non-convergence error after the bounded level limit.

Checkpoint identity includes prompt version, member IDs, and candidate hashes. A completed group must not be repeated on process restart.

Current state: eight level-0 run-1 reduction groups were durable at the last observation. Repeated child exits occur after or during further reduction work, but each recovery cycle has produced additional accepted groups. The only confirmed CLI classification is `kind=runner`; the exact exception text remains unread while PowerShell exclusively holds the JSONL file. Do not label schema failure, provider failure, or local bug as the root cause until the log is captured after an attempt releases the file.

### Phase F: Attribute Proposal And Confirmation

After run-1 candidate reduction:

1. Generate three independent attribute proposals.
2. Each proposal describes a small stable set of broad, distinguishable world regions.
3. A critic compares proposals, removes overlap, repairs missing coverage, and returns 4-12 final attributes.
4. Write `attribute-proposal.json`, human-readable proposal Markdown, and a confirmation template.
5. Pause with `awaiting_confirmation`.
6. The plugin displays one read-only batch confirmation; the local Supervisor may auto-confirm only for this explicitly approved development run.
7. Confirmation binds task ID and proposal hash so stale confirmation cannot authorize a changed proposal.

Current state: no attribute checkpoint, proposal, template, or confirmation exists.

### Phase G: Finalize Semantic Run 1

Using confirmed attributes:

- Consolidate candidates into 100-250 distinct final concepts.
- Preserve every candidate member exactly once.
- Assign one to three exact attribute IDs to each concept.
- Materialize evidence from exact Source IDs.
- Create only strongly justified `support`, `contrast`, `causal`, `application`, or `example` relations.
- Reject unknown relation endpoints and duplicate normalized concept labels.
- Compute linked-source evidence coverage.
- Run an independent quality critique for omissions, over-exclusion, concentration, duplicates, and unsupported relations.
- Validate the complete revision against the Source Snapshot before scoring.

Current state: not started. There is no `semantic-revision.run-1.json`.

### Phase H: Independent Runs 2 And 3

The confirmed attributes may be reused, but source evidence extraction, candidate reduction, concept consolidation, relation classification, and audit must run independently for run 2 and run 3. Existing run-1 semantic checkpoints must not be reused under another run ID.

The expected provider for both runs is MiniMax-M3. This remains an expectation until sanitized provenance is captured or observed mechanically. If a provider change occurs, document it.

Current state: neither run has started.

### Phase I: Quality Gates And Selection

Every run must satisfy hard gates before comparison:

- all Source Units have exactly one disposition;
- all linked sources appear in final concept evidence;
- no invented or out-of-range Source IDs;
- 100-250 concepts;
- unique valid IDs and normalized labels;
- all relation endpoints exist;
- code/formula evidence has explanatory context;
- protocol, book, task, and source fingerprints match.

Scoring combines source completeness, over-exclusion penalty, evidence distribution, concept concentration, graph connectivity, duplicate rate, and cross-run partition agreement. The Selection Report must contain each run's base score, agreement value, final score, selected run ID, and deterministic reason.

Required outputs:

- `semantic-revision.run-1.json`
- `semantic-revision.run-2.json`
- `semantic-revision.run-3.json`
- `selection-report.json`
- `quality-report.json` and human-readable quality report
- selected `semantic-revision.json`
- `complete.json`

Current state: none of these outputs exists.

### Phase J: Safe Plugin Import

Import is not a file copy. The plugin must:

1. Re-read the Current Book after Runner completion.
2. Rebuild the Source Snapshot.
3. Validate protocol version, task ID, book ID, source fingerprint, checksums, and source-path containment.
4. Reject unknown Source IDs, invalid dispositions, malformed concepts, invalid relation endpoints, missing completion marker, and stale source.
5. Import the selected immutable revision atomically.
6. Retain only the newest three semantic revisions per book.
7. Preserve reading sessions, progress, excerpts, bookshelf identity, and other non-map records.

Current state: blocked by missing selected revision and completion marker.

### Phase K: Semantic Report And Book World UX

The report must expose:

- confirmed attributes and their scopes;
- representative concepts and grounded Source Evidence;
- representative excluded sources by reason, without dumping the entire book;
- concept/evidence counts and source coverage;
- three run scores and agreement values;
- selected run and exact selection reason;
- warnings, provenance limitations, and the mixed-provider run-1 disclosure.

The central Book World view must retain camera state while opening evidence in an adjacent leaf. Progress updates cannot collapse panels, clear the view, or cause setup fields to flash. Hover cards show score, attributes, and up to three representative source passages; pinned details show full evidence and relations.

Current state: local UI changes exist, but no real imported revision is available for acceptance. Treat the semantic report as unfinished.

### Phase L: Art Pipeline

Art begins only after text selection and import pass.

Flow:

1. Derive a Style Manifest from book attributes, concepts, and representative evidence.
2. Generate one world concept image and wait for explicit art-direction confirmation.
3. Generate reusable building modules and confirmed landmarks using the configured image provider.
4. Emit a hashed Asset Manifest and deterministic concept recipes.
5. Validate path containment, MIME signatures, hashes, dimensions, byte limits, revision identity, and the 20 MB per-book cap.
6. Import valid assets; use procedural geometry for missing or failed assets.

Current state: not started for the frozen revision and must remain gated.

### Phase M: Tests, Deployment, Documentation, And Release

Runner tests must cover compatible protocols, endpoint handling, redaction, batching, adaptive splits, checkpoint migration, Prompt-version invalidation, retries, structured repair, three-run selection, task containment, malicious artifacts, and image templates.

Plugin tests must cover Runner detection/configuration, stdin credential transfer, progress/event races, cancellation/resume, safe import, semantic report data, demand rendering, WebGL fallback/recovery, resource disposal, and source navigation.

End-to-end acceptance must include:

- fake-provider one-click generation with no manual file operations;
- the real Current Book through three runs and import without recording its private unit count here;
- Obsidian wide/narrow view inspection;
- nonblank Canvas pixel checks;
- pan, zoom, hover, pin, and adjacent-source navigation;
- shutdown/cancel and checkpoint resume;
- no private artifacts in Git.

Only after all gates pass:

1. Synchronize plugin `package.json`, lockfile, `manifest.json`, `versions.json`, public README, and release notes to `0.6.0-beta.3`.
2. Synchronize Runner package metadata and public README where required.
3. Build final plugin runtime files.
4. Inspect staged scope manually.
5. Ask the user for explicit commit/push/tag/release approval.

Current state: local documentation freeze is complete; release work is prohibited.

## Historical V2 Failure And Recovery Notes

The old private task repeatedly stopped during candidate reduction while preserving some accepted checkpoints. Exact chronology, process identity, task paths, logs, checkpoint inventories, and recovery commands are private runtime data and are intentionally not reproduced here.

The root cause was never accepted mechanically. Do not turn the historical sanitized `runner` classification into a provider/schema diagnosis without new evidence. More importantly, do not continue its v2 recovery tree as current product work: the v3 semantic architecture deliberately starts a fresh task. Preserve the old task directory only outside documentation for possible diagnosis, without deleting or importing it.

## First Actions For Current V3 Work

1. Read `AGENTS.md`, this historical handoff, `CONTEXT.md`, and the current v3 pre-render semantic ADR.
2. Treat any old protocol-v2 task as private historical state, not an active generation target.
3. Complete the v3 contract and prompt-engineering review before implementation.
4. Create a fresh v3 Source Snapshot/task only when implementation is ready.
5. Preserve private old task files and checkpoints; do not expose, delete, migrate, or import them.
6. Keep commit, push, tag, release, cleanup, and revert prohibited until the user explicitly approves them.

## Required Completion Artifacts

- `attribute-proposal.json`
- `attribute-confirmation.json`
- `semantic-revision.run-1.json`
- `semantic-revision.run-2.json`
- `semantic-revision.run-3.json`
- `selection-report.json`
- `quality-report.json`
- `semantic-revision.json`
- `complete.json`

## Acceptance Audit

Before import, verify mechanically:

- Every source unit has exactly one disposition.
- Every `linked` source is attached to at least one final concept.
- No disposition or evidence references a source ID outside the current snapshot.
- The selected revision has 100-250 concepts.
- Concept IDs and relation endpoints are valid and unique.
- No normalized concept labels are duplicated.
- Code and formula evidence includes explanatory context.
- All three run revisions and scores exist.
- `selection-report.json` names a real run and explains the selection.
- The mixed-provider limitation of run 1 is visible in the human-facing audit.

Do not silently accept a mechanically invalid revision. Repair only the failed stage or batch and preserve valid checkpoints.

## Work Remaining After Text Acceptance

1. Import the selected revision through the plugin's existing safe import path.
2. Implement or finish the semantic report UI: attributes, representative concepts, evidence, exclusion samples, three scores, and selection reason.
3. Verify the Book World central view no longer flickers or rebuilds its Canvas on Runner progress events.
4. Run Runner tests, typecheck, and build.
5. Run plugin tests and build, then reload ReadMark in the `D:\Projects` vault.
6. Manually verify generation progress, report navigation, map rendering, cancellation/resume, and source navigation.
7. Only after acceptance, synchronize `manifest.json`, `versions.json`, public README, and release notes to `0.6.0-beta.3`.
8. Inspect both Git scopes for secrets and private artifacts. Wait for explicit approval before any commit or push.

## Privacy Boundary

Never commit or quote:

- Runner `config.json` or any provider credential;
- task bundles, source snapshots, checkpoints, model responses, or quality reports containing book-derived material;
- plugin `data.json`, `books/`, `maps/`, local paths, reading records, or excerpts;
- the user's Markdown book or generated private assets.

The public repositories must remain reproducible code and release artifacts, not a copy of the user's reading environment.

## Prompt For The Next Conversation

Paste the following prompt into the next development conversation:

```text
Continue the unfinished ReadMark 0.6.0-beta.3 work from the frozen local state.

Before taking any action, read these files in order:
1. D:\Projects\.obsidian\plugins\ReadMark\AGENTS.md
2. D:\Projects\.obsidian\plugins\ReadMark\docs\HANDOFF-2026-07-19-BETA3.md
3. D:\Projects\.obsidian\plugins\ReadMark\CONTEXT.md
4. D:\Projects\.obsidian\plugins\ReadMark\docs\ADR\2026-07-18-reading-map-runner-protocol.md

The plugin root is D:\Projects\.obsidian\plugins\ReadMark and the Runner root is D:\Projects\readmark-map-runner. First inspect the existing background task and expected completion artifacts exactly once. Do not restart completed source batches, delete checkpoints, expose API keys, or describe run 1 as a pure-provider run. MiniMax-M3 is preferred for text; SenseNova u1-fast is for images.

If the task is still running, leave it in the background. If it stopped, diagnose the log boundary and resume the same task directory. When complete, mechanically audit all three revisions, source dispositions, linked-source coverage, concept and relation validity, scores, and selection reason. Then import the selected revision through the plugin safety path, finish the semantic report UI and central-view stability work, run both repositories' full tests/builds, deploy locally to Obsidian, and inspect Git scope.

Do not commit, push, tag, release, clean, or revert existing changes without my explicit approval. Never include config.json, workspace data, checkpoints, task artifacts, book content, plugin runtime data, or credentials in Git or documentation. Report actual evidence and remaining risks rather than assuming Beta.3 is complete.
```
