# ADR: Pre-Render Semantic Network Generation

Status: accepted for the v3 pre-render semantic-network implementation plan.

This document records the decisions from the intensive design review for finishing everything before 2.5D rendering. It intentionally avoids private task directories, checkpoints, provider credentials, book content, plugin runtime data, and local artifact excerpts.

## Goal

Finish the complete v3 semantic generation, import, audit, and report workflow before any 2.5D rendering or image/art pipeline work begins.

The target user flow is one primary generation/update action that exports the Current Book snapshot, runs the semantic pipeline, automatically confirms mechanically valid attributes, validates the selected revision, imports it safely, and shows a stable Semantic Report view.

This phase stops before:

- 2.5D rendering;
- image generation;
- world concept art;
- asset manifests;
- SenseNova visual/OCR use;
- public release/version synchronization.

## Non-Negotiable Constraints

- This ADR supersedes the earlier beta3 rescue direction for semantic-network generation. The old v2/beta3 task may be preserved for diagnosis, but v3 semantic generation starts from a fresh task directory and a fresh v3 Source Snapshot.
- Protocol v3 is a hard cut for new semantic artifacts. Do not preserve v2 semantic artifact compatibility merely for local historical results.
- Manual import of v2 semantic artifacts should be rejected with a clear local-development message that regeneration is required.
- MiniMax-M3 is the primary text model for semantic text.
- Text fallback is allowed only at failed-batch granularity after the primary call fails; successful MiniMax-M3 batches are not rerun merely for purity.
- Fallback provenance is recorded in audit artifacts. Human-facing reports must not describe a mixed-provider run as a pure MiniMax/SenseNova result.
- SenseNova remains image-only and is not used by this pre-render semantic phase.
- Do not expand this phase into public multi-profile routing UI, stage route tables, or release-facing provider telemetry.
- Preserve all valid checkpoints; do not change prompt versions or checkpoint input hashes casually.
- Do not restart completed source batches.
- Do not delete checkpoints.
- Do not commit, push, tag, release, clean, or revert without explicit approval.
- Do not place credentials, task workspaces, checkpoints, book content, plugin data, or model outputs in documentation or Git.

## One-Kill Architecture

The intended design is a single golden path with a small, explicit exception table.

Golden path:

1. Rebuild/export a deterministic protocol v3 Source Snapshot from the Current Book through one unified Source IR pipeline.
2. Extract Source Units, structural context, reader markers, source dispositions, and a bounded term-candidate pool.
3. Apply rule-based generic filtering, LLM keep/delete generic filtering, and checkpointed structural validation.
4. Review shared Source Dispositions lightly before three semantic revisions begin.
5. Build evidence clusters from linked Source Units and term-candidate overlap.
6. Produce three independent semantic revisions in parallel from the shared Source Snapshot, term pool, and disposition set.
7. Name concepts from term candidates mounted on evidence clusters; never let a term candidate without evidence become a concept.
8. Build the undirected `related` concept graph by deterministic score rules.
9. Apply hard mechanical revision audit, bounded targeted repair, scoring, and deterministic selection.
10. Re-read the Current Book and rebuild the Source Snapshot.
11. Import the selected revision atomically only if the fresh snapshot matches.
12. Show a stable Semantic Report central view.

Allowed automatic exception handling:

- transient provider failures use bounded exponential backoff with jitter;
- context overflow in splittable stages uses deterministic bisection;
- structured-output failure in splittable stages writes a split marker first, then deterministically bisects;
- small generic-filter batch failures may discard only the failed term candidates within the approved discard budget;
- failed text batches may switch to a fallback text model at batch granularity, with audit provenance and mechanical consistency gates;
- three failed revisions may trigger one targeted repair pass over the best candidate revision;
- non-splittable or over-budget failure stops with a sanitized diagnostic.

No broad branch explosion is allowed. Stages must not grow custom recovery logic unless it is added to the shared exception table.

## Terminology And Drift Firewall

The semantic design has one canonical hierarchy. Prompts, model wire formats, checkpoints, reports, and UI must not invent parallel meanings for these terms.

`CONTEXT.md` is the sole canonical domain glossary. `docs/TERMINOLOGY.md` is a retired pointer and must not become a second glossary. This ADR owns protocol layers, implementation decisions, scoring rules, supersession history, and the question ledger; those details do not belong in `CONTEXT.md`.

```text
Current Book
  -> Source Unit
       -> Source Disposition: linked | excluded(reason)
       -> when linked: Evidence Mount -> Concept
                                      -> exactly one Attribute
       -> when linked: extraction -> Term Candidate -> may name/alias Concept
Concept <-> related(score) <-> Concept
```

The layers are deliberately separate:

- Domain entities are only `Source Unit`, `Term Candidate`, `Concept`, and `Attribute`.
- Domain states/relationships are `Source Disposition`, `Evidence Mount`, and `Related Edge`.
- Protocol artifacts are `Source Snapshot`, `Semantic Revision`, and `Selection Report`.
- Runner-only intermediate structures include Source IR, the Term Pool, `sourceTermIndex`, Evidence Clusters, checkpoints, and model request/response wire objects. They are not graph entities and do not belong in the user-facing glossary.
- Derived quantities such as mount affinity, heading similarity, position similarity, repair ratio, and cross-run agreement are scoring functions only. They must not become protocol entities, UI ontology, or free-standing domain terms.

Model output and final protocol are also different layers. A model may return constrained IDs such as `labelTermId` in a stage-local wire object; the Runner must validate and materialize those references into the final Concept fields. The imported plugin state must not depend on the complete Runner Term Pool or on unresolved stage-local IDs.

`Evidence` is not a fifth entity. It is the Evidence Mount relationship between a Linked Source and a Concept. A revision stores the complete mount set for coverage. Each Concept separately selects at most 12 representative source IDs from its mounts for summary generation, related scoring, audit presentation, and UI display; the UI shows at most three by default.

Every new term introduced after this ADR must be classified as a domain entity, domain relationship/state, protocol artifact, Runner intermediate, or derived metric. If it cannot be placed without duplicating an existing meaning, it must not be introduced.

## Runner Pipeline Decisions

### Provider And Configuration

- MiniMax-M3 is the preferred primary text provider.
- Runner-local configuration may contain one optional `fallbackText` provider block. This is a single bounded recovery provider, not a profile list, public route table, or per-stage routing system.
- Reading the existing configuration schema in v3 may normalize it in memory with `fallbackText: null`; only an explicit configure action writes the newer schema. This configuration accommodation does not restore protocol-v2 semantic artifact compatibility.
- A text fallback provider may be used for a failed atomic batch only after the primary recovery gradient is exhausted. This is recovery, not a second independent semantic run and not a reason to rerun successful MiniMax-M3 batches.
- Fallback output must pass the same schema, term-pool, source-ID, label, and coverage gates as primary output.
- Fallback provenance is recorded in a sanitized provider ledger grouped by provider role, protocol, model, stage, run, success, retry, fallback, and checkpoint-reuse counts. The ledger never contains keys, authentication headers, endpoint text, prompts, raw responses, or book excerpts.
- The Semantic Report may keep provider detail collapsed, but internal selection reasons must not claim pure-provider provenance when fallback occurred and the detail view must make actual MiniMax-M3 use mechanically visible.
- A sanitized profile fingerprint hashes normalized protocol, endpoint, model, context/output limits, temperature, and other non-secret generation parameters. It explicitly excludes API keys and authentication headers.
- The existing sanitized doctor output remains the source for checking whether a text provider is configured.
- A future multi-profile design may use named profiles and stage route tables in ignored Runner-local configuration, but that is explicitly deferred.
- Public configuration UX for stage route tables remains out of scope.

### Failure Recovery

- There is no silent model switch. Batch-level text fallback is allowed only when recorded in audit provenance and followed by the same mechanical gates.
- All text calls share one Runner-global concurrency semaphore governed by the existing text concurrency limit. Three Semantic Runs use fair round-robin scheduling and never multiply the configured concurrency by three.
- Backoff waits release the global concurrency slot. Retry timing obeys a valid server `Retry-After` first; otherwise it uses a five-second exponential base, a 60-second cap, and full jitter.
- Recoverable network, timeout, rate-limit, overload, and server failures receive at most two MiniMax-M3 retries after the first attempt. Authentication, missing-credential, and explicit quota errors do not spend meaningless retries.
- Source batches, generic-filter batches, and evidence-cluster/concept-generation groups are splittable where their contracts allow deterministic partitioning.
- Splittable failures must write a split marker before child requests are attempted.
- Structured failure bisects under MiniMax-M3 first. Only the smallest failed atomic descendant may use fallback. Atomic units are one term for generic filtering, one Source Unit for disposition, and one Evidence Cluster for concept formation.
- Existing valid parent or child checkpoints must be reused on resume.
- If all recovery available to the current stage is exhausted, the Runner fails clearly and preserves existing checkpoints for later resume.
- User cancellation is `interrupted`, not destructive failure; valid checkpoints remain resumable.

### Checkpoint Compatibility

- Existing accepted checkpoints remain valid unless there is mechanical evidence that their input contract is invalid.
- A reusable checkpoint must match stage input hash, prompt version, validator version, run identity where applicable, and sanitized provider fingerprint.
- Fixes should target the failed stage or failed batch/group.
- Prompt-version changes are high-cost and require explicit justification because they invalidate expensive checkpoints.
- Exact prompt engineering is intentionally not settled by this structural ADR. Prompt wording, information order, examples, counterexamples, tone, provider-specific expression, and version changes require a separate dedicated design review after stage contracts are stable.

### Source Unit Policy

- Source Snapshot v3 is produced through one unified Source IR pipeline before Source Units are emitted.
- Source IR is ephemeral. It is not persisted beside the Snapshot as a second copy of the source structure. Source Snapshot is the complete durable source protocol artifact.
- The persisted Source Unit fields retain `id`, `type`, `text`, `position`, `headingPath`, `parentContext`, `markers`, hashes, and type-specific audit material required to reproduce the emitted unit.
- Source Unit `type` is one closed enum: `sentence`, `list_item`, `table_row`, `footnote`, `code_block`, `formula`, `image_ref`, or `attachment_ref`. Callout identity remains contextual metadata rather than another Unit type.
- Source Unit IDs are deterministic fixed-width sequence IDs within one Snapshot. They are stable for an identical source/parser build and make no cross-fingerprint identity promise.
- `position` uses JavaScript UTF-16 code-unit offsets with a half-open `[startOffset, endOffset)` interval. Line numbers are one-based and include the first and last line.
- `sourceFingerprint` is SHA-256 over the exact Markdown string read by the plugin encoded as UTF-8. It does not normalize BOMs or line endings.
- Source Snapshot declares an independent `parserVersion`. Parser behavior changes advance this version and require a new task; only incompatible wire-schema changes advance the semantic protocol.
- A Semantic Revision binds both `sourceFingerprint` and `sourceSnapshotSha256`, distinguishing changed source text from changed parsing/output structure.
- Source Units remain sentence-level by default.
- Very long sentences or list items may be split deterministically by punctuation/list boundaries while retaining parent coordinates.
- Markdown headings do not become Source Units. They are retained as `headingPath` context and ranking/distribution signal.
- Markdown tables become row-level Source Units. Each row has normalized key-value text using table headers and retains raw row material for audit.
- Markdown lists become list-item-level Source Units; nested lists preserve at most two parent-context levels.
- Footnotes, image/attachment references, code blocks, and formulas are still emitted as Source Units with exact positions; deterministic rules then exclude them in this text phase. They never disappear at the parser boundary.
- Code, formula, and image-reference exclusions use the existing `fragment` reason.
- Obsidian callout text is parsed as prose/list content while retaining callout type/title as context markers.
- Reader highlights, bolds, comments, and excerpt records enter Source IR as `markers`. They may influence term-candidate ranking, but they do not directly change Source Disposition and do not directly create concepts.

### Source Dispositions

- Every Source Unit must receive exactly one disposition.
- Disposition is either `linked` or an explicit exclusion reason.
- There is no implicit disappearance.
- Missing, duplicate, or unknown source IDs fail the revision.
- Exclusion reasons remain limited to:
  - `toc`
  - `copyright`
  - `acknowledgement`
  - `boilerplate`
  - `fragment`
  - `duplicate`
- `duplicate` remains simple and does not require a referenced duplicate source ID.
- A `linked` Source Unit means the unit is eligible for semantic-network evidence. It is not itself a concept.
- A linked Source Unit must become evidence for at least one concept in every valid final revision.
- If a linked Source Unit has no usable term candidate, the repair order is: first strictly extract a term candidate from that source; if no valid terminology-like candidate exists, repair the disposition to an explicit exclusion and record the repair.
- Disposition repair records must include `sourceId`, original disposition, final disposition, reason, stage, and triggering cause.
- Deterministic rules decide structurally certain cases first. MiniMax-M3 classifies only the remaining `sentence`, `list_item`, and `table_row` units using the narrow fields `sourceId`, `status`, and conditional exclusion `reason`.
- Disposition output contains exactly one record per requested Source Unit and cannot contain concepts, terms, summaries, confidence values, or free explanations.
- Disposition batches preserve source order and prefer heading/block boundaries. A batch contains at most 100 undecided units and at most 40,000 estimated input tokens, whichever limit is reached first.
- Before the three runs, the shared disposition set reviews every mechanically anomalous unit plus a deterministic stratified 5% sample across linked/exclusion outcomes and source distribution; use at least 20 samples when enough sources exist and cap the additional sample at 100.
- A reader marker on an excluded unit forces review but never automatically flips the disposition.
- When initial classification and review disagree, a third narrow adjudication over the same Source Unit resolves the conflict by majority outcome. All changes leave audit records.

### Attributes

- An Attribute is a higher-level semantic category that groups Concepts; it is not a book metadata value, relation type, or overlapping tag.
- The hierarchy is `Source Unit -> Concept -> Attribute`: one Source Unit may mount under one to three Concepts, while every Concept belongs to exactly one Attribute.
- Attribute schema is `id`, `label`, and `scope`. IDs and labels must be unique and scope must state a non-empty category boundary.
- Attribute label may be a model-normalized higher category and is not required to be a literal Concept Term Candidate. Its proposal must cite 3-12 valid basis terms spanning at least two heading/position distributions.
- Attribute count is deterministic: `targetAttributeCount = clamp(round(sqrt(targetConceptCount)), 4, 12)`.
- Attribute proposal uses one model proposal, one constrained critic, and at most one targeted repair. It does not generate three proposals or perform a second selection tree.
- The critic may only return set/per-attribute verdicts and the fixed issue codes `insufficient_basis`, `overlap`, `too_broad`, `too_narrow`, `off_source`, `unclear_scope`, and `coverage_gap`; it does not rewrite attributes.
- Default local flow auto-confirms the set only after pre-run definition gates pass. Concept-distribution gates are necessarily checked after each run forms Concepts.
- No single attribute should cover more than 45% of concepts.
- Each attribute should cover at least 5% of concepts.
- Every concept has exactly one `attributeId`.
- A run that violates attribute coverage first uses deterministic rebalance. Concept-to-Attribute affinity is label-basis match `0.45`, alias-basis match `0.15`, and basis-term coverage across all mounted sources `0.40`.
- A rebalance move is legal only when target affinity is at least `0.20` and no more than `0.10` below current affinity. If the coverage range remains impossible, the run fails instead of forcing an unrelated assignment.
- Attribute confirmation remains bound to task identity and proposal hash.

## Concept Model

### Term Candidates, Linked Sources, Evidence Mounts, Concepts, And Attributes

The v3 semantic graph uses four distinct layers. They must not be collapsed in prompts, schemas, code, reports, or tests.

```text
Source Unit --disposition--> linked | excluded
linked Source Unit --Evidence Mount--> Concept
term candidate --may name/alias--> Concept
Concept --belongs to exactly one--> Attribute
Concept --related(score)--> Concept
```

- A term candidate is a possible term/name extracted from source text. It is not a concept.
- A linked source is a Source Unit that must receive at least one Evidence Mount in the final revision. It is not a mount by itself.
- An Evidence Mount is only the unique `{sourceId, conceptId}` relationship. It has no model confidence, weight, or primary/secondary role.
- A concept is a final clean concept-word node with label, aliases, grounded summary, one Attribute, representative sources, and graph edges.
- An Attribute is the exclusive higher-level category for a Concept; it is not another graph relation.
- A `related` edge is an undirected neighbor relation between two concept words. It is not a proposition, causal claim, example relation, support relation, or typed semantic predicate.
- Term-pool coverage is not a linked-source coverage gate. The term pool supplies legal labels and aliases; final revision coverage is enforced by evidence mounting.

### Term Candidate Pool

- The system extracts a term-candidate pool before concept generation.
- The model is not allowed to invent out-of-pool terms for concept labels or aliases.
- The term candidate pool has a maximum size of 800.
- A pool size of 300 is a quality target when the source contains enough valid terms, not permission to pad with generic words. The hard precondition is at least the run's minimum legal concept count.
- Initial extraction combines deterministic seeds with MiniMax-M3 exact-span extraction. Rules seed headings, reader markers, technical English terms, proper nouns, and high-signal CJK spans; the model may only return literal source substrings.
- Exact-span output is `{ units: [{ sourceId, terms: string[] }] }`, with exactly one item per input Source Unit and zero to eight strings. The model does not emit offsets, term IDs, explanations, or rankings; invalid non-literal strings are discarded and audited.
- A term appearing only in a heading may enter the pool with heading provenance only when that heading scope contains at least two linked Source Units to which it can bind. The heading itself is not Evidence.
- Term-candidate ranking uses frequency, source coverage/distribution, headingPath occurrence, reader emphasis/highlight markers, proper nouns or English technical terms, and duplicate penalties.
- Initial weights are: frequency `0.25`, source coverage/distribution `0.25`, headingPath `0.20`, emphasis/highlight `0.15`, proper noun/English `0.10`, duplicate penalty up to `-0.20`.
- Built-in small generic/stopword tables filter vague terms before LLM filtering.
- A dedicated LLM generic filter may only keep or delete terms. It must not rename, sort, add, or merge terms.
- LLM generic filter batches contain 100 terms.
- Generic-filter output is exactly `{ decisions: [{ termId, decision: 'keep'|'generic', reasonCode }] }`.
- Allowed generic-filter reason codes are `generic`, `functional`, and `too_broad`.
- The generic filter must output exactly one decision per input `termId`.
- On structural failure, the generic-filter batch is bisected.
- If small bisection descendants still fail, discard only the failed term candidates when the total discard is at most 2% of the term pool and at most 20 terms; record the discard in audit.
- Term-filter discard never changes Source Disposition directly. Any linked source left without a usable term candidate enters the disposition/term repair chain.
- Numeric technical terms such as `CS61C`, `RISC-V`, or `2.5D` may remain; pure numbers and page-like references are filtered.
- Display spelling preserves common source spelling. Comparison uses NFKC, case folding, and whitespace/ordinary connector folding while preserving meaningful embedded `+` and `#`, so `RISC-V` may match `RISCV` without collapsing `C`, `C++`, and `C#`.
- Chinese term candidates are normally 2-8 characters.
- English term candidates are normally 1-3 tokens.
- Every term candidate binds representative `sourceIds`, up to 10 per candidate.
- Representative source selection is distribution-first, then high-signal examples.
- The shared Term Pool also persists a complete compact `sourceTermIndex` for all linked Source Units. The index is a Runner intermediate used by clustering and all three runs; the ten representative IDs are not treated as the complete occurrence set.
- If more than 800 legal terms remain, select the highest-scoring 600 globally, then add up to 200 terms by deterministic round-robin coverage across top-level heading/position buckets. Unused distribution slots are filled from the remaining global ranking.

### Concept Labels

The graph is a concept-word network, not a proposition graph.

- A concept label is a single term or very short term-like expression.
- Chinese labels should usually be 2-8 characters.
- English labels should usually be 1-3 tokens.
- Labels must be noun-like or terminology-like.
- Labels must not be sentences, judgments, explanatory phrases, or mini-summaries.
- Labels follow the source's primary language.
- Proper nouns may remain in their original form.
- Labels should prioritize high-frequency or key terms from the source text.
- Model-normalized labels are allowed only when they remain grounded in source terms.
- Normalized labels must be unique after trimming, case folding, and whitespace normalization.

### Aliases

- Synonymous or near-synonymous concept terms are merged into one canonical concept.
- Each concept may keep up to five aliases.
- Aliases follow the same term-like constraints as labels.
- Aliases support search, report explanation, and merge audit; they do not replace the canonical label.

### Summaries

The summary has one job only: explain how the mounted evidence sentences support the concept.

- Summary must not introduce book-external knowledge.
- Summary must not invent new semantics.
- Summary must not act as a second label.
- Summary must not be used as a free relation-inference source.
- Summary is limited to 80 Chinese characters or an equivalently short English explanation where possible.
- Summaries are generated only after a run freezes its Concepts and complete Evidence Mounts and the system selects at most 12 representative sources per Concept.
- Summary generation cannot change labels, aliases, attributes, mounts, or representative selection.
- A separate constrained summary critic sees only the Concept label, summary, and representative source text. It returns exactly one `pass`/`fail` per Concept with reason code `unsupported_claim`, `misstates_evidence`, `not_role_explanation`, `label_restatement`, or `too_broad`.
- A failing summary is rewritten once from the label, representative sources, and reason code without replaying free-form critique. A second failure makes that run fail its summary hard gate.

### Candidate And Concept Coverage

- Concept generation is evidence-cluster-first, then label-selection. The system never asks the model to freely invent a book-wide concept list.
- Evidence clustering is a deterministic term-seeded weighted-coverage problem over the complete `sourceTermIndex`. Each legal term defines a candidate linked-source set; seed selection balances term quality, uncovered-source gain, distribution, and overlap penalty. Embeddings and LLM sentence-similarity grouping are not default dependencies.
- System-selected candidate mounts are proposals. Within one Evidence Cluster, MiniMax-M3 may keep/drop candidate source IDs or add only another source ID already admitted to that cluster. It cannot cite an unknown or cluster-external source.
- Concept-formation output is the stage-local wire object `{ concepts: [{ labelTermId, aliasTermIds, sourceIds, attributeId }] }`, with one Concept by default and at most two. The model does not emit final IDs, label strings, summaries, scores, or prose reasons. The Runner validates IDs, materializes final strings, stably orders results, and creates final Concept IDs.
- The three Semantic Runs use identical input contracts and prompt versions in independent calls. They do not use conservative/aggressive/creative personas to manufacture divergence.
- A cluster defaults to one concept and may produce at most two concepts.
- Splitting one cluster into two concepts requires two high-signal terms, each with at least two primary evidence items, and no more than 50% shared evidence.
- The same normalized term across multiple heading paths defaults to one global concept. It is split only when evidence is overloaded and semantically clustered.
- Concept count target is computed from linked Source Unit count as `targetConceptCount = clamp(round(4 * sqrt(linkedSourceCount)), 30, 160)`.
- Final concept count must be within `targetConceptCount ± 20%`, then clamped to the hard range of 30-160.
- Short/medium books normally land around 30-80 concept words; long books normally land around 80-160.
- The hard upper cap is 160 concepts unless explicitly approved.
- Each ordinary concept requires at least two Evidence Mounts. Rare but key proper nouns or key terms may have one mount only when marked `lowEvidence`; this remains valid but is penalized.
- The same linked Source Unit may have Evidence Mounts to at most three Concepts.
- The revision stores all Evidence Mounts. Each Concept separately retains at most 12 `representativeSourceIds`, all of which must be a subset of its mounts.
- Representative selection is distribution-first across positions and heading paths, then fills with high-signal examples such as heading hits, reader markers, or especially representative sentences.
- A Concept with more than 12 mounts whose evidence spans at least three heading paths or semantic subclusters is an overload split candidate. The 12-item representative cap never limits complete linked-source coverage.
- If a final revision leaves linked Source Units unmounted, repair by clustering those sources and naming new concepts from term candidates bound to those sources.
- If a linked Source Unit has no usable term candidate after strict repair, it is treated as a disposition error and may be repaired to an explicit exclusion with audit trace.
- Concept ordering in the revision is stable and deterministic, preferably by attribute grouping, source position, then label.
- Final concept IDs are generated by the system as stable safe-ASCII IDs; the model does not control final IDs.
- If an atomic Evidence Cluster still fails structurally after primary bisection and fallback, quarantine only its invalid output and send all affected Sources to the unmounted-source repair path. This tolerance is allowed only when failed clusters are at most 2% of clusters and affect no more than 20 linked Sources; otherwise the run fails.

## Related Graph Model

The relation model is changed from proposition-style typed relations to an undirected concept-neighborhood graph.

### Protocol Direction

- New semantic output should use protocol v3.
- Protocol v3 replaces the five directed relation types with a single undirected `related` edge model.
- Protocol v3 Source Snapshots also declare `protocolVersion: 3`.
- Checksums/fingerprints must declare v3 and cover the task identity, snapshot marker, and revision marker.
- Protocol v2 semantic artifacts are obsolete for this v3 semantic workflow.
- New v3 code is not required to preserve v2 semantic artifact compatibility.
- Manual import of v2 semantic artifacts should fail with a clear local-development message that v3 regeneration is required.
- Existing v2 records are not automatically migrated.

### Related Edge Semantics

- A `related` edge means two concept terms are semantically close enough to be neighbors in the concept network.
- The edge is undirected.
- Each concept pair can have at most one edge.
- Edge ID is generated from the canonical sorted concept pair.
- Related edge score is normalized to `0..1`.
- Related score is computed by deterministic system rules, not by free model scoring.
- Edge schema stays minimal: `id`, `sourceConceptId`, `targetConceptId`, and `score`.
- Edge score sub-signals are written to audit/report diagnostics, not to each edge in the final revision.

### Related Score Signals

Initial score design:

- label similarity: 0.35
- attribute signal: 0.20
- member/source distribution: 0.45

Rules:

- label similarity uses normalized token Jaccard;
- Chinese label similarity uses character bigrams rather than a new segmentation dependency;
- aliases do not contribute to label similarity; alias equality or near-equality is duplicate/merge evidence rather than a reason to preserve two nodes and connect them;
- source/member distribution uses only the at-most-12 representative sources and combines representative Source-ID Jaccard `0.50`, heading-path distribution similarity `0.30`, and normalized source-position proximity `0.20`;
- heading path is part of the source distribution signal, not a standalone signal;
- heading-path similarity uses longest-common-prefix depth normalized by maximum path depth, then symmetric best-match averaging across both representative sets; empty paths add no similarity;
- position proximity normalizes each representative source midpoint to `0..1`, computes symmetric nearest-neighbor distance across both sets, and converts it to `1 - meanDistance`;
- sharing the one exact `attributeId` contributes the fixed attribute signal `0.20`; there is no additional same-attribute bonus and attribute equality alone cannot reach the threshold;
- initial related threshold is `0.55`;
- threshold may be tuned after observing density, but tuning must be deliberate and tested;
- candidate scores are rounded to integer ten-thousandths before thresholding and ordering; threshold is `5500`, and the protocol emits a four-decimal `0..1` score;
- threshold-passing candidate edges are sorted by score descending and canonical edge ID for ties, then accepted only while both endpoints have degree below four;
- each concept therefore keeps at most four related edges;
- the graph is not required to be connected;
- isolated concepts are valid and should be marked as isolated rather than force-connected.
- Related score uses the final representative evidence set for each concept, not all mounts and not only the three snippets displayed by default.

## Revision Audit And Selection

Before import, a mechanical audit must verify:

- all expected per-run revision files exist;
- every Source Unit has exactly one disposition;
- every linked source appears in at least one complete Evidence Mount;
- no unknown or out-of-range source ID exists;
- concept count is within `targetConceptCount ± 20%` and the hard 30-160 range;
- concept IDs are unique and valid;
- normalized concept labels are unique;
- aliases obey label constraints and count limits;
- every concept label and alias comes from the term-candidate pool;
- no term candidate without evidence becomes a concept;
- every `{sourceId, conceptId}` Evidence Mount is unique;
- no linked source mounts under more than three Concepts;
- ordinary Concepts have at least two mounts;
- one-mount Concepts are marked `lowEvidence`;
- every Concept belongs to exactly one existing Attribute;
- every Attribute covers 5%-45% of Concepts after bounded deterministic rebalance;
- every Concept retains at most 12 representative source IDs, and each representative is a subset of that Concept's complete mounts;
- every summary passes structural limits and the grounded-summary critic hard gate;
- related edges reference existing concept IDs;
- related edges are canonical undirected pairs;
- related edge scores are finite and within `0..1`;
- degree cap is respected;
- all three run scores exist;
- selection report names an existing run;
- selection reason is deterministic and displayed exactly in the report;
- mixed-provider limitations from older run-1 evidence remain visible in details when applicable.

Selection:

- runs must pass hard gates before scoring comparison;
- scoring remains deterministic with initial weights: evidence coverage and quality `35`, concept quality `25`, graph quality `20`, source disposition quality `10`, audit stability `10`;
- Evidence quality's 35 points are divided into mount grounding `15`, representative distribution `8`, mount specificity `5`, unresolved overload `4`, and low-evidence prevalence `3`. These are derived scorer functions, not protocol concepts.
- Audit stability's 10 points are cross-run structural agreement `7` and repair burden `3`.
- Structural agreement compares canonical Concept term identity `40%`, source-to-Concept mounts `35%`, Concept-to-Attribute assignment `15%`, and canonical related-edge sets `10%`; summary wording is excluded.
- Repair burden deduplicates affected Concepts and Sources, computes each affected ratio, then averages and clamps the result. Repeated edits to the same entity do not multiply the penalty.
- Provider identity and fallback use do not directly reduce a passing revision's quality score. They remain visible provenance; actual structural repair and instability are what affect scoring.
- The exact internal formula for the 15-point mount-grounding component remains deliberately unsettled after the terminology-drift audit. It must be finalized using existing Source/Term/Concept relationships without promoting Evidence Cluster provenance or a new metric noun into the final protocol.
- tie-breaks must be stable;
- selected revision is copied/published only after hard validation.
- If all three revisions fail hard gates, choose the best candidate mechanically and perform at most one targeted repair pass.
- A targeted repair pass may change only hard-gate failures such as unmounted linked sources, illegal labels, invalid edges, or mild concept-count drift.
- Repair must not become a hidden fourth full revision rewrite.
- Concept-count repair merges only concepts with highly overlapping evidence/aliases when there are too many, and splits uncovered or overloaded evidence clusters when there are too few.

## Safe Plugin Import

Import is never a file copy.

- The plugin must re-read the Current Book after Runner completion.
- The plugin must rebuild a fresh Source Snapshot.
- Import validates both exact-source fingerprint and Source Snapshot hash, distinguishing changed Markdown from changed parser/snapshot structure.
- `complete.json` is the only trusted v3 import entry point. It binds fixed task-local basenames and SHA-256 hashes for Source Snapshot, selected Semantic Revision, and sanitized Selection Report; implicit sibling discovery and directory guessing are not allowed.
- Import accepts protocol v3 semantic revisions only for this workflow.
- Import rejects protocol v2 semantic artifacts with a local-development regeneration message.
- Import rejects unknown Source IDs, invalid dispositions, malformed concepts, invalid related edges, missing completion marker, and stale source.
- Import writes atomically.
- Plugin Canonical Storage persists both artifacts: one immutable Source Snapshot per `sourceFingerprint`/snapshot hash and up to three immutable Semantic Revisions that reference it. Snapshot text is not duplicated into every revision.
- A sanitized immutable Selection Report accompanies every imported revision. It contains three-run scores, hard-gate results, deterministic selection reason, repair summary, and sanitized provider provenance; raw responses and checkpoints remain Runner-private.
- Physical storage uses immutable artifact files plus a small `state.json` index. Import validates all artifacts, writes temporary files, atomically publishes immutable files, and switches the index last.
- Import retains the newest three semantic revisions per book. After the new index is committed, it may safely remove unreferenced revision/snapshot/report files from plugin Canonical Storage. A removal failure leaves a harmless orphan for a later retry and never rolls back the valid import.
- Plugin artifact retention never deletes or modifies the Runner task directory or checkpoints.
- Import must preserve reading sessions, progress, excerpts, bookshelf identity, and other non-map records.
- Import status may be `stale`, `error`, `building`, or `current`, but partial imports are not allowed.

## Semantic Report View

This phase's central view is a Semantic Report view, not a 2.5D world.

### Default Contents

The report must expose:

- overview counts;
- confirmed attributes;
- concept counts;
- source disposition counts;
- linked-source evidence coverage;
- related edge counts and isolated concept count;
- three run scores in a table;
- selected run and exact selection reason;
- concept list grouped by attribute and ordered by source position;
- representative evidence;
- representative exclusions;
- provenance limitations in details.

### Display Density

- Default expanded sections: overview, attributes, scores.
- Concept/evidence details may be expandable.
- Mixed-provider limitation is shown in details rather than as a top-level alarm, but it must remain visible.
- Per-concept evidence display defaults to at most three representative evidence items.
- Each evidence excerpt is truncated to about 120 characters.
- Excluded source samples are shown by reason, at most three per reason.
- Evidence source navigation is deferred in this phase; the report still displays source position/identity and representative text snippets for audit.

### Search And Filtering

- The report supports concept search.
- Search covers label, aliases, and summary.
- The report supports attribute filtering.
- Concept list default ordering is attribute group, then source position.

### Stability Requirements

- Runner progress events update only the progress/status region.
- Progress events must not rebuild the whole report.
- Progress events must not reset search, filters, scroll, or expanded sections.
- View state retained during the current view lifetime:
  - search text;
  - attribute filter;
  - scroll position;
  - expanded/collapsed state.
- These view-state fields are not persisted to `data.json`.

## Central View And Runner Status

- Each book may have only one active semantic generation task at a time.
- Runner process identity is not durable task identity.
- Resume uses task directory plus task/book/source/checksum validation.
- A killed or cancelled job is recoverable if checkpoints remain valid.
- UI should distinguish `interrupted` from true failed semantic validation.
- Plugin progress updates must not clear the central report view or rebuild expensive view state.

## Testing Requirements

Runner tests must cover:

- source unit extraction for prose, tables, lists, callouts, footnotes, images, code, and formulas;
- default exclusions for footnotes, image references, code, and formulas;
- exactly-one Source Disposition coverage;
- linked-source evidence coverage;
- term-candidate extraction, ranking, generic filtering, discard budget, and repair cascade;
- evidence-cluster-first concept generation;
- split marker write-before-child behavior;
- checkpoint reuse after split marker recovery;
- protocol v3 concept label, alias, summary, and related edge validation;
- related score calculation and thresholding;
- related edge degree cap;
- isolated concept retention;
- three-run scoring and deterministic selection;
- stale source rejection;
- sanitized failure diagnostics.

Plugin tests must cover:

- safe import of protocol v3;
- explicit rejection of manual protocol v2 semantic artifact import for this v3 workflow;
- stale source rejection;
- atomic import behavior;
- retention of newest three semantic revisions;
- report overview, attributes, scores, concepts, evidence, exclusions, and provenance details;
- search and attribute filtering;
- progress updates that do not rebuild the whole report;
- in-memory retention of search/filter/scroll/expanded state;
- no persistence of transient report view state into plugin data.

Manual Obsidian checks before declaring this phase complete:

- reload ReadMark locally;
- open the Semantic Report central view;
- verify report content after a real imported revision;
- trigger or replay progress updates and confirm no flicker/state reset;
- verify search/filter behavior;
- verify report remains usable in narrow and wide panes;
- confirm no 2.5D rendering or image generation starts.

## Deferred Work

These are explicitly out of scope for this phase:

- public multi-profile text configuration UI;
- public stage route tables;
- full-run or full-stage provider switching;
- provider telemetry beyond existing sanitized doctor/status behavior;
- OCR or image understanding;
- world concept image generation;
- asset pipeline;
- 2.5D rendering;
- public release synchronization;
- automatic migration of protocol v2 revisions into protocol v3.

## Implementation Notes

- Treat this ADR as the source of truth for pre-render semantic-network behavior.
- Where this ADR narrows earlier protocol behavior, the narrower pre-render rule applies for this phase. In particular, code and formula evidence is excluded rather than imported with explanatory context.
- If a future phase re-enables code or formula evidence, explanatory prose context again becomes mandatory.
- Protocol v3 requires coordinated Runner and plugin changes; do not generate v3 artifacts until plugin import validation accepts them.
- Do not update public version files until all automated and manual gates pass and the user explicitly approves release work.

## Appendix A: Grill Decision Ledger

This appendix preserves the numbered review decisions. Items marked `deferred` were discussed and then explicitly removed from the current phase after the decision to keep the existing single text-provider configuration.

### Pre-Numbered Decisions

- Stop point: finish semantic generation, safe import, Semantic Report UI, central-view stability, tests, build, local deployment, and manual Obsidian acceptance; stop before 2.5D rendering.
- Work order: Runner completion first, then plugin import/report/stability.
- Current task strategy: initially continue rescuing the existing task and preserve valid checkpoints; superseded by the later v3 hard reset for semantic generation.
- Acceptance scope: include local Obsidian reload and manual acceptance checks.
- Release scope: do not touch version, release, manifest, README, tag, or publication work.
- Priority: mechanical correctness over speed.
- Background task policy during planning: keep the recovered Runner/Supervisor running unless a boundary releases or the user explicitly stops it.
- Art scope: no image generation, OCR, asset generation, or SenseNova visual work in this phase.
- Change strength: allow local refactoring inside touched problem areas, but avoid broad rewrites.
- Mixed-provider run policy: run 1 may participate in selection if mechanically valid, but provenance limitations must remain visible.
- Report density: audit-oriented report content is required.
- Verification cadence: verify incrementally after each meaningful subsystem.
- Provider telemetry: initially considered, then excluded from this phase by Q027.
- Multi-model text routing: initially considered, then excluded from this phase by Q027; later narrowed back in by Q197-Q200 only as failed-batch fallback with audit provenance and mechanical gates, not as public stage routing.

### Q001-Q026: Deferred Multi-Profile Design Notes

These questions recorded a possible future multi-profile routing design. They are not current-phase implementation requirements.

- Q001: Backup models must not see a primary model's raw failed response; only sanitized mechanical diagnostics may be passed. Status: deferred with multi-profile routing.
- Q002: Prompt templates should share common base constraints. Status: still useful, but no broad prompt refactor is required in this phase.
- Q003: Schema authority should be TypeScript types plus runtime validation, not prompt-only schema prose.
- Q004: A future central orchestrator should be modeled as an explicit finite-state machine. Status: deferred.
- Q005: Future concurrency should be config-capped and adaptive. Status: deferred.
- Q006: Adaptive concurrency should respond to error rate and latency. Status: deferred.
- Q007: Retry backoff should use exponential backoff with jitter.
- Q008: Retry budgets should be stage-level fixed budgets.
- Q009: In a multi-model future, structured failure would spend one attempt per model before moving on. Status: deferred.
- Q010: After all text profiles fail structurally, the initial answer was direct failure. Status: superseded by Q016-Q018 and then deferred by Q027.
- Q011: If all profiles fail, recovery would be config change and checkpoint resume. Status: deferred.
- Q012: A future route table would be per pipeline stage. Status: deferred.
- Q013: Branching philosophy is golden path plus explicit exception table.
- Q014: Golden path is snapshot export, source analysis, candidate reduction, attribute confirmation, three revisions, audit, selection, import, report. Superseded for v3 by the evidence-cluster-first golden path in Q201-Q218.
- Q015: The user preferred as much automation as possible, but noted branch explosion risk.
- Q016: To avoid branch explosion, automatic recovery should follow a fixed gradient rather than open-ended branching.
- Q017: Recovery gradient order was profile switch, shrink input, then failure diagnostic. Status: profile switch deferred; shrink/diagnose remains relevant for single-provider splittable stages.
- Q018: Input shrink strategy is deterministic bisection.
- Q019: Failure diagnostics should be sanitized JSON, not a release-facing feature.
- Q020: A future central scheduler should be the only provider-call exit. Status: deferred.
- Q021: Future provider profile contract should stay minimal: protocol, endpoint, model, limits. Status: deferred.
- Q022: Future multiple keys would live per profile in ignored Runner-local configuration; doctor only reports configured booleans. Status: deferred.
- Q023: Future profile IDs would be user-named but safe-ASCII and unique. Status: deferred.
- Q024: Future routes referencing missing profiles should fail configure/doctor. Status: deferred.
- Q025: Future routing should have `defaultRoute` for stages without overrides. Status: deferred.
- Q026: Future stage route override should replace the whole default route, not merge incrementally. Status: deferred.

### Q027-Q042: Current-Phase Scope And Hard Gates

- Q027: Since provider config is not upgraded now, exclude provider telemetry and routing diagnostics from this phase; keep existing sanitized doctor. Later Q197-Q200 add failed-batch fallback without adding public routing diagnostics.
- Q028: In the single-provider phase, structured failure uses deterministic bisection only for splittable stages; non-splittable stages fail with diagnosis. Later Q193-Q200 add small failed generic-filter discard and batch-level text fallback as bounded exceptions.
- Q029: Valid checkpoints must remain reusable; do not casually change prompt versions or input hashes.
- Q030: Split marker must be written before any child request is made.
- Q031: Each book has at most one active semantic generation task.
- Q032: User cancellation marks a task `interrupted` and recoverable, not destructively failed.
- Q033: Resume identity requires task directory plus task/book/source/checksum validation.
- Q034: If the current Markdown fingerprint differs from the exported snapshot, import must reject as stale. This was defaulted to the recommended answer.
- Q035: Semantic revision import must be atomic.
- Q036: Keep the newest three semantic revisions per book.
- Q037: Every Source Unit must have exactly one disposition.
- Q038: Every linked source must appear in final concept evidence.
- Q039: Final concept count initially remained 100-250. Superseded by Q172-Q175: target is `clamp(round(4 * sqrt(linkedSourceCount)), 30, 160)` with `±20%` tolerance and hard cap 160.
- Q040: Concept labels must be unique after normalization.
- Q041: Initial discussion questioned code/formula context; corrected decision is not to override the ADR where code/formula evidence exists. Later Q087-Q089 narrow this phase by excluding code/formula evidence as `fragment`.
- Q042: Existing five directed relation labels were initially accepted, then superseded by Q055-Q058 after clarifying that this is a concept-word graph, not a proposition graph.

### Q043-Q065: Concept Graph And Relation Model

- Q043: Relation/edge density should be sparse-first.
- Q044: A relation should not be based on label similarity alone; it needs concept-level evidence signals. Superseded by deterministic `related` score rules.
- Q045: Initial outgoing relation cap was four. Superseded by undirected related degree cap Q063.
- Q046: Summary role is strictly limited to explaining how mounted evidence supports the concept.
- Q047: Concept closeness is based mainly on concept label, attributes, and member/source distribution; summary only constrains grounding.
- Q048: Relation candidates should be system-filtered before any model classification. Superseded by system-scored `related` graph.
- Q049: Candidate relation entry required at least two signals. Superseded by the score threshold design.
- Q050: Directed relation handling was initially default single-direction. Superseded by undirected graph.
- Q051: Contrast was initially canonicalized as one edge. Superseded by single undirected `related` edge.
- Q052: Multiple relation types between the same pair were initially collapsed to the strongest one. Superseded by single edge type.
- Q053: Relation type priority was not answered and became not applicable after Q056.
- Q054: A fixed relation confidence gate was accepted and became the `related` score threshold.
- Q055: User clarified that relation targets concept words; concept words should not use causal/application/example semantics.
- Q056: Concept graph edge model changes to a single undirected `related` edge with score.
- Q057: This requires a real protocol upgrade rather than mapping `related` to old `support`.
- Q058: The semantic protocol for new output becomes protocol v3.
- Q059: Protocol v2 initially remained read-compatible but not generated. Superseded by Q128-Q132: v3 is a hard cut for semantic artifacts, manual v2 import is rejected, and local v2 semantic artifacts require regeneration.
- Q060: Related score is normalized from 0 to 1.
- Q061: Related score is computed by system rules, not by model free scoring.
- Q062: Initial related threshold is 0.55, with later density tuning allowed only deliberately.
- Q063: Each concept keeps at most four related edges.
- Q064: The graph is not forced to be connected. This was defaulted to the recommended answer.
- Q065: Isolated concepts remain valid and are marked isolated, not force-connected.

### Q066-Q083: Related Score And Source Structure

- Q066: Same-attribute relationship lightly increases related score but cannot create an edge alone. Status: refined by Q265 and Q275 to one exact Attribute signal.
- Q067: Same-attribute bonus starts at +0.05. Status: superseded by Q275; the extra bonus is removed.
- Q068: Related signal weights start as label 0.35, attribute 0.20, member/source distribution 0.45.
- Q069: Label similarity uses normalized token Jaccard.
- Q070: Chinese label tokenization uses character bigrams.
- Q071: Source distribution combines source position proximity and candidate/source overlap.
- Q072: Heading path is part of source distribution, not an independent weight.
- Q073: Auto-confirmed attributes must pass hard checks: 4-12 attributes, unique IDs/names, non-empty scope, and acceptable coverage distribution.
- Q074: No single attribute should cover more than 45% of concepts.
- Q075: Each attribute should cover at least 5% of concepts.
- Q076: Each concept may have 1-3 attributes. Status: superseded by Q265; every Concept now belongs to exactly one Attribute.
- Q077: Each candidate initially mapped to exactly one final concept. Superseded by the term/evidence distinction in Q160-Q171: term candidates are legal label/alias inputs, not concepts.
- Q078: Each linked Source Unit initially mapped to 1-3 local candidates. Superseded by Q176-Q183 and Q211-Q215: linked sources mount as evidence under concepts, while term candidates only name concepts.
- Q079: Exclusion reasons remain the existing six: `toc`, `copyright`, `acknowledgement`, `boilerplate`, `fragment`, `duplicate`.
- Q080: `duplicate` exclusions do not need to reference another source ID.
- Q081: Source Unit granularity remains sentence-level.
- Q082: Extremely long sentences/list items are split deterministically into sub-sentence units while retaining parent coordinates.
- Q083: Markdown tables are represented as row-level Source Units with table-header context.

### Q084-Q100: Markdown Structures And Concept Words

- Q084: Markdown lists are list-item-level Source Units; nested lists preserve parent context.
- Q085: Footnotes are excluded by default.
- Q086: Image and attachment references are excluded by default in the text semantic phase.
- Q087: Code blocks are excluded by default in this phase.
- Q088: Formulas are excluded by default in this phase.
- Q089: Code, formula, and image-reference exclusions use `fragment`.
- Q090: Obsidian callout text is parsed as prose/list content and retains callout-type context.
- Q091: Reader highlights, bolds, comments, and excerpt records initially did not affect semantic generation. Superseded by Q150-Q155 and Q203: reader signals enter Source IR as markers and may affect term-candidate ranking, but never directly create concepts or change disposition.
- Q092: Concept ordering is stable and deterministic.
- Q093: Final concept IDs are generated by the system as stable safe-ASCII IDs.
- Q094: Related edge IDs are generated from canonical sorted concept pairs.
- Q095: Concept summary is limited to at most 80 Chinese characters or equivalent concise English.
- Q096: Concept label is a single concept word/term, not a phrase-like explanation; Chinese usually 2-8 characters, English usually 1-3 tokens.
- Q097: Concept labels must be terminology-like or noun-like, not sentences, judgments, or long phrases.
- Q098: Concept label language follows the source's primary language; proper nouns may remain original.
- Q099: Synonymous or near-synonymous concept terms are merged into one canonical concept.
- Q100: Merged concepts keep aliases.

### Q101-Q117: Report UI And View Stability

- Q101: Each concept keeps at most five aliases, and each alias follows the same term-like label rules.
- Q102: Concept labels should prefer high-frequency or key terms from the source text.
- Q103: Record a short `labelSource` enum such as `source_term` or `model_normalized`. This was defaulted to the recommended answer.
- Q104: Semantic Report shows up to three representative evidence items per concept by default.
- Q105: A single evidence display excerpt is truncated to about 120 characters. This was defaulted to the recommended answer.
- Q106: Excluded source samples are shown by reason, up to three samples per reason.
- Q107: Mixed-provider limitation is shown in details, not as a top-level alarm, but must remain visible.
- Q108: Three run scores are displayed in a table.
- Q109: The selected run's exact deterministic selection reason is displayed.
- Q110: Default expanded report sections are overview, attributes, and scores.
- Q111: Concept list defaults to attribute grouping and source-position ordering.
- Q112: Semantic Report needs concept search and attribute filtering.
- Q113: Evidence click-to-source navigation is deferred in this phase.
- Q114: Central view stability scope is the Semantic Report view, not old map rendering or 2.5D.
- Q115: Runner progress events update only the progress/status region and do not rebuild the whole report.
- Q116: During the current view lifetime, preserve search text, attribute filter, scroll position, and expanded/collapsed state.
- Q117: Report UI state is in-memory only and is not persisted to `data.json`.

### Q118-Q132: V3 Hard Reset And Compatibility Cut

- Q118: Stop treating the unfinished old beta3 task as the semantic-generation target. The old task directory may be preserved for diagnosis, but the semantic-network implementation direction is a v3 hard reset.
- Q119: Do not continue investing in rescuing v2/beta3 semantic artifacts when the architecture itself is being changed. The cost of regeneration is acceptable because this is local development.
- Q120: The product has no external semantic-artifact users at this moment. Compatibility should not be justified by imaginary public users.
- Q121: The current actor should be described as local developer/tester, not external user population.
- Q122: New semantic generation should create a fresh task directory rather than mutating or pretending to complete the obsolete v2/beta3 task.
- Q123: The new task must rebuild Source Snapshot from the Current Book. Do not reuse old source-disposition checkpoints for v3 semantic truth.
- Q124: Source Snapshot must also become protocol v3, not only the final Semantic Revision.
- Q125: Source Snapshot checksums and revision checksums must declare v3 and include task/snapshot/revision markers so stale cross-protocol reuse is mechanically rejected.
- Q126: Attribute confirmation remains automatic when hard mechanical gates pass. The v3 reset does not reintroduce a manual attribute-confirmation dependency for this local development flow.
- Q127: Public release files, README, manifest, versions, tags, and release notes remain untouched until explicit release approval.
- Q128: Do not preserve v2 semantic artifact compatibility merely to save local historical results.
- Q129: Existing v2 local semantic results can be marked outdated and requiring regeneration.
- Q130: Manual import of v2 semantic artifacts should be rejected with a clear local-development message instead of migrated or silently accepted.
- Q131: No automatic v2-to-v3 migration is implemented in this phase.
- Q132: The implementation may delete v2 semantic import assumptions from the v3 path, but must not clean, revert, or remove private local artifacts without explicit approval.

### Q133-Q159: Term-Candidate Pool, Ranking, And Generic Filtering

- Q133: Concept labels must come from a system-extracted term-candidate pool. The model is not allowed to invent arbitrary out-of-pool labels.
- Q134: A term candidate is not a concept. It is only a possible name/alias that may later label a concept if evidence supports it.
- Q135: Term-candidate pool maximum is 800.
- Q136: Term-candidate pool minimum before concept generation is 300 when the source has enough extractable terms.
- Q137: The system should not create chapter concepts. It should use source position distribution and `headingPath`, not a separate chapter-concept layer.
- Q138: Term ranking uses frequency as one signal, but frequency alone is insufficient.
- Q139: Term ranking uses source coverage/distribution as a signal about where a term appears, not as a requirement that the term pool cover every linked source.
- Q140: Term ranking uses `headingPath` occurrence as a strong signal because headings reveal source structure without becoming evidence themselves.
- Q141: Reader emphasis/highlight/comment/excerpt signals may influence term-candidate ranking.
- Q142: Proper nouns and English technical terms receive a positive ranking signal.
- Q143: Duplicate or near-duplicate candidates receive a penalty rather than being allowed to crowd the pool.
- Q144: Initial term-ranking weights are frequency `0.25`, source coverage/distribution `0.25`, headingPath `0.20`, emphasis/highlight `0.15`, proper noun/English technical term `0.10`, duplicate penalty up to `-0.20`.
- Q145: Built-in small generic/stopword tables should filter obvious vague terms before model filtering.
- Q146: Numeric technical terms such as `CS61C`, `RISC-V`, and `2.5D` may remain. Pure numbers, page numbers, and numeric noise are filtered.
- Q147: Display spelling preserves common source spelling. Comparison folds case, punctuation, and spaces. Status: refined by Q250 to preserve meaningful embedded `+` and `#`.
- Q148: Chinese term candidates are normally 2-8 characters.
- Q149: English term candidates are normally 1-3 tokens.
- Q150: Every term candidate must bind representative `sourceIds`.
- Q151: Each term candidate binds up to 10 representative source IDs.
- Q152: Representative source selection is distribution-first and then high-signal examples.
- Q153: Highlights, bolds, comments, and excerpt records do not directly create concepts.
- Q154: Reader signals do not directly change Source Disposition.
- Q155: Reader signals are allowed only as term-candidate extraction/ranking signals before concept generation.
- Q156: Vague or generic terms deserve a dedicated LLM screening stage after rule-based filtering.
- Q157: The LLM generic filter may only output keep/delete decisions. It must not rename, add, reorder, sort, or merge terms.
- Q158: Generic-filter batch size is 100 terms, with exactly one decision per input `termId`.
- Q159: Generic-filter reason codes are limited to `generic`, `functional`, and `too_broad`; structural failure triggers bisection and checkpointed retry.

### Q160-Q171: Linked Source, Evidence, Concept, And Count Corrections

- Q160: `Source Unit` means the minimum source unit from the Current Book, usually a sentence, list item, or table row.
- Q161: `Source Disposition` means every Source Unit is exactly one of `linked` or an explicit exclusion reason.
- Q162: `linked source` means a Source Unit judged eligible to enter the semantic network. It is not automatically evidence until mounted under a concept.
- Q163: `evidence` means a linked Source Unit actually mounted under a concept. Status: sharpened by Q254-Q255; the canonical term is the Evidence Mount relationship, not a separate Evidence entity.
- Q164: `term candidate` means a possible term/name candidate for a concept label or alias. It is not itself a concept.
- Q165: `concept` means a final clean concept-word node such as `递归`, `缓存`, or `抽象`, with evidence and valid metadata.
- Q166: `related edge` means an undirected neighbor relation between two concept words. It is not a proposition, causal relation, example relation, or support relation.
- Q167: The hard relationship chain is: `Source Unit --disposition--> linked/excluded`; `linked Source Unit --mounted as evidence--> Concept`; `Concept --related(score)--> Concept`.
- Q168: Every linked source must become evidence for at least one concept in a valid final revision.
- Q169: A term candidate without evidence cannot become a concept.
- Q170: The concept network is not a proposition graph and must not contain relation semantics that pretend concept words are statements.
- Q171: The earlier framing of linked-source coverage on the term pool was wrong. Term pool coverage is not the gate; final revision evidence mounting is the gate. The earlier 100-250 concept target was also too high for a concept-word graph and is superseded by Q172-Q175.

### Q172-Q192: Concept Count, Evidence Mounting, Repair, And Revision Scoring

- Q172: v3 final concept count is based on `linkedSourceCount`, not total Source Units or raw character/word count. Concept quantity follows the amount of source material actually eligible for semantic evidence.
- Q173: The concept-count policy uses a square-root formula rather than manual buckets or LLM-suggested targets.
- Q174: The default formula is `targetConceptCount = clamp(round(4 * sqrt(linkedSourceCount)), 30, 160)`. Examples: 100 linked sources produce about 40 concepts, 400 produce about 80, and 900 produce about 120.
- Q175: Final concept count may float within `±20%` of target, then is clamped to the hard 30-160 range.
- Q176: Ordinary concepts require at least two evidence mounts. Rare but key proper nouns or key terms may have one mount only when marked `lowEvidence`; this is valid but penalized.
- Q177: The same linked Source Unit may be mounted as evidence under up to three concepts.
- Q178: Each concept retains at most 12 evidence items in the final revision. Status: superseded by Q254; all mounts are retained and only the representative subset is capped at 12.
- Q179: Representative evidence is selected distribution-first across source positions and heading paths, then by high-signal examples. This applies to the at-most-12 representative subset, not complete mounts.
- Q180: If linked sources remain unmounted in a final revision, repair by clustering the unmounted linked sources and trying to add evidence-backed concepts.
- Q181: Concept labels created during unmounted-source repair must still come from the term pool, preferably term candidates bound to the affected evidence cluster.
- Q182: If a linked source has no usable term candidate, treat it as a disposition/candidate precondition error, not as permission to invent a concept.
- Q183: The repair order for linked-without-term is: first strictly extract a valid term candidate from that source; if none exists, repair the source disposition to an explicit exclusion such as `fragment` or `boilerplate`.
- Q184: Any disposition repair must write an audit record including original disposition, final disposition, reason, stage, source ID, and trigger.
- Q185: Three-run revision selection gives highest priority to evidence coverage and evidence quality.
- Q186: After hard gates pass, soft scoring weights are evidence coverage/quality `35`, concept quality `25`, graph quality `20`, source-disposition quality `10`, and audit stability `10`.
- Q187: If all three revisions fail hard gates, choose the best candidate mechanically and allow at most one targeted repair pass before stopping.
- Q188: Targeted repair may change only hard-gate failures such as missing evidence, illegal labels, invalid edges, or mild concept-count drift. It must not rewrite the whole revision.
- Q189: If concept count is too high, repair by merging concepts with highly overlapping evidence or aliases. If concept count is too low, repair by splitting uncovered or overloaded evidence clusters.
- Q190: A concept is overload-split candidate when it has more mounts than the 12-item representative set and spans at least three heading paths or semantic subclusters. Status: wording refined by Q254.
- Q191: A concept split from an overloaded cluster chooses its new label from the child evidence cluster's term candidates. `headingPath` itself must not become the label.
- Q192: When merging duplicate or near-synonymous concepts, canonical label selection prioritizes source-term status, frequency, heading/highlight signal, shortness, and normativity; remaining names become aliases.

### Q193-Q200: Generic-Filter Tolerance And Text Fallback

- Q193: If only a small part of generic filtering fails after bisection, the system may discard that failed place rather than failing the whole round or preserving polluted candidates. This tolerance applies to the failed term-candidate slice, not to source evidence.
- Q194: Generic-filter final failure discard budget is at most 2% of the term pool and at most 20 term candidates.
- Q195: Generic-filter discard scope is term candidates only. Source Unit disposition is not changed by generic-filter failure.
- Q196: If term discard causes a linked source to have no usable candidate, cascade into the Q183 repair chain and record that the trigger was `filterDiscard`.
- Q197: If MiniMax-M3 fails in a text semantic stage, text-model fallback is allowed rather than total failure. Status: recovery order refined by Q237-Q240; retry and MiniMax bisection precede atomic fallback.
- Q198: Fallback provenance must exist at least in audit artifacts. The main report need not prominently warn, but internal artifacts must not claim a mixed-provider result is pure MiniMax/SenseNova.
- Q199: Fallback granularity is only the failed batch. Successful MiniMax-M3 batches remain accepted and are not rerun.
- Q200: Fallback batch output must pass a lightweight mechanical consistency gate: schema validity, term-pool constraint, source-ID coverage, and label legality. Do not add an LLM review solely because fallback occurred.

### Q201-Q218: Unified Source IR, Shared Front Matter, Evidence Clustering, And Edge Diagnostics

- Q201: Source Snapshot v3 uses one unified Source IR pipeline. Markdown, HTML-like structures, and Reader-derived data are normalized into Source IR before Source Units are emitted.
- Q202: Source IR minimal fields are `id`, `type`, `text`, `position`, `headingPath`, `parentContext`, and `markers`.
- Q203: Reader highlight, bold, comment, and excerpt signals are represented as a unified `markers[]` array. They may affect term ranking but not source disposition or direct concept creation.
- Q204: Markdown headings do not generate Source Units. They are context and ranking/distribution signals only.
- Q205: Table-row Source Units use normalized key-value text such as `column: value; column: value` and retain raw row material for audit.
- Q206: Nested list Source Units carry at most two levels of parent context.
- Q207: Obsidian callout type/title enter Source IR as context markers. Callout body text is parsed as prose/list content.
- Q208: Three semantic revisions share Source Snapshot, term pool, and Source Disposition, then run independently in parallel from concept/evidence/graph generation onward.
- Q209: Because shared Source Disposition can become a single point of semantic failure, it requires lightweight review before the three revisions begin.
- Q210: Source Disposition lightweight review combines rule-based anomaly detection with small-sample LLM review of boundary cases. It may repair and must leave audit trace.
- Q211: Concept generation is evidence-cluster-first. The system clusters linked sources and term candidates first, then names concepts, instead of asking the model for a free concept list.
- Q212: Evidence clustering uses term-candidate overlap as the primary signal and heading/position distribution as secondary signals. Status: made concrete by Q251-Q252 as term-seeded weighted coverage over the complete source-term index.
- Q213: The same normalized term across multiple heading paths defaults to one global concept. Split only when overloaded evidence clearly forms subclusters.
- Q214: One evidence cluster produces one concept by default and at most two concepts.
- Q215: Splitting one cluster into two concepts requires two high-signal terms, each with at least two primary evidence items, and no more than 50% shared evidence.
- Q216: Related-edge score uses the at-most-12 representative source set for each Concept, not all mounts and not only the three evidence items shown in the report. Status: terminology refined by Q254.
- Q217: Related-edge score diagnostics are written to audit/report diagnostics. Each edge in the final revision keeps only the minimal `id`, `sourceConceptId`, `targetConceptId`, and `score`.
- Q218: Source Snapshot v3 and Semantic Revision v3 are separate artifacts connected by fingerprint/checksum. Snapshot is not memory-only and is not duplicated into every revision.

### Q219-Q231: Import Storage And Source Snapshot Identity

- Q219: Final plugin import stores both Source Snapshot v3 and Semantic Revision v3. Snapshots are deduplicated by source/snapshot identity rather than copied into each revision.
- Q220: Plugin semantic storage uses immutable artifact files plus a lightweight `state.json` index. Artifact publication precedes the final atomic index switch.
- Q221: After an index commits the newest-three retention set, plugin storage may remove only unreferenced local map artifacts. Failed removal leaves a retryable orphan and never touches Runner checkpoints or task workspaces.
- Q222: Import also stores a sanitized Selection Report with three-run scores, hard-gate results, selection reason, repair summary, and provider provenance. Full Runner audit material and raw responses remain Runner-private.
- Q223: `complete.json` is the sole v3 import entry point and binds fixed task-local artifact basenames plus hashes. Selecting a revision file and implicitly discovering siblings is rejected.
- Q224: Source IR is ephemeral; Source Snapshot is the one complete persisted source artifact and must retain all structure and audit material required by the v3 contract.
- Q225: Footnotes, code blocks, formulas, image references, and attachment references are emitted as Source Units and deterministically excluded. They do not vanish before Source Disposition.
- Q226: Source Unit uses one closed `type` enum: `sentence`, `list_item`, `table_row`, `footnote`, `code_block`, `formula`, `image_ref`, and `attachment_ref`. Callout identity stays contextual.
- Q227: Source positions use JavaScript UTF-16 code-unit offsets with half-open ranges; line numbers are one-based.
- Q228: Source Unit IDs are deterministic fixed-width sequence IDs inside one Snapshot. No cross-fingerprint identity stability is promised.
- Q229: Semantic Revision binds both exact-source fingerprint and full Source Snapshot hash.
- Q230: Source fingerprint hashes the exact Markdown string read by the plugin as UTF-8 and does not normalize BOM or line endings.
- Q231: Snapshot declares an independent parser version. Parser-behavior changes require regeneration without forcing a semantic protocol bump unless the wire schema itself changes incompatibly.

### Q232-Q244: Disposition, Scheduling, Recovery, And Provider Provenance

- Q232: Source Disposition uses deterministic rules for certain structures and MiniMax-M3 only for remaining semantic boundary decisions.
- Q233: Disposition model output contains exactly `sourceId`, `status`, and conditional `reason`; it cannot emit concepts, terms, summaries, confidence, or prose explanations.
- Q234: Disposition batches stay contiguous and structure-aware, with dual limits of 100 undecided Units and 40,000 estimated input tokens.
- Q235: All text calls share one Runner-global concurrency semaphore. Three runs do not multiply the configured concurrency.
- Q236: Three runs use fair round-robin scheduling among dependency-ready work.
- Q237: Recoverable primary-provider errors receive at most two MiniMax-M3 retries after the first attempt. Non-recoverable authentication/credential/quota failures do not spend those retries.
- Q238: Retry timing honors `Retry-After`; otherwise it uses five-second exponential backoff, a 60-second cap, and full jitter while releasing the concurrency slot.
- Q239: Structured failure bisects under MiniMax-M3 first; fallback receives only the smallest failed descendant.
- Q240: Atomic descendants are one term, one Source Unit, or one Evidence Cluster according to stage.
- Q241: Runner configuration gains only one optional `fallbackText` block, not general provider profiles or stage routing.
- Q242: Existing configuration is normalized in memory with no fallback and is written in the new shape only by explicit configure. This does not imply semantic-v2 compatibility.
- Q243: Selection Report contains a sanitized provider ledger by stage, run, protocol/model, retries, fallback, successes, and checkpoint reuse so actual MiniMax-M3 use is visible without exposing endpoints, prompts, responses, or credentials.
- Q244: Provider fingerprint covers normalized protocol, endpoint, model, and non-secret generation parameters and excludes keys/authentication headers.

### Q245-Q262: Term Extraction, Weighted Coverage, Mounts, And Grounded Summaries

- Q245: A heading-only term may be a Term Candidate when its heading scope contains at least two linked Sources. The heading remains context, not Evidence.
- Q246: Term extraction combines deterministic seeds with MiniMax-M3 exact source spans; every model span is mechanically checked against its stated source.
- Q247: Exact-span output contains one record per Source Unit and zero to eight literal strings, with no model-controlled offsets, IDs, explanations, or ranking.
- Q248: A 300-term pool is a quality target, not a hard padding requirement. The hard minimum is enough legal terms to name the run's minimum Concept count.
- Q249: When more than 800 terms survive, choose 600 by global score and up to 200 by deterministic heading/position distribution round-robin, then globally fill unused slots.
- Q250: Term comparison is technical-symbol-aware: NFKC, case/space/ordinary-connector folding, while preserving embedded `+` and `#` distinctions.
- Q251: The Runner persists both at-most-ten representative source IDs per term and a complete `sourceTermIndex` for all linked Sources.
- Q252: Evidence Clusters are produced by deterministic term-seeded weighted coverage, not general sentence-pair clustering, embeddings, or heading-only grouping.
- Q253: The initial answer limited a seed's coverage contribution to 12 sources. Status: superseded immediately by Q254 after proving that `160 * 12 = 1920` makes long-book coverage mathematically impossible.
- Q254: Final revision stores all Evidence Mounts separately from at-most-12 representative sources per Concept. Complete coverage uses all mounts; summaries, related scoring, and UI use the representative subset.
- Q255: Evidence Mount is only the unique `{sourceId, conceptId}` pair. It has no role, weight, or model confidence.
- Q256: The system proposes cluster-local mounts; MiniMax-M3 may keep/drop or choose only within that admitted cluster set and may not reference cluster-external Sources.
- Q257: Summary generation occurs only after Concepts, complete mounts, and representative sources are frozen.
- Q258: Within one Evidence Cluster, MiniMax-M3 performs only bounded structure selection: one Concept by default, at most two under the split gate, legal term references, legal source references, and a confirmed Attribute reference.
- Q259: Concept-formation wire output contains only term/source/Attribute references; the model does not control final IDs, strings, summaries, scores, or reasons. Status: the earlier plural `attributeIds` shape is superseded by Q265 and is singular `attributeId`.
- Q260: Three runs use the same contract and prompt version in independent calls. They do not use artificial personas to manufacture diversity.
- Q261: Summary grounding is a hard gate with one targeted summary-only rewrite and one re-review before the run fails.
- Q262: Summary critic returns fixed verdicts and reason codes only: `unsupported_claim`, `misstates_evidence`, `not_role_explanation`, `label_restatement`, or `too_broad`.

Prompt wording was explicitly paused for a separate design session. Stage contracts in this ADR do not authorize implementation-time invention of final prompts; expression, information order, examples, counterexamples, tone, and provider-specific prompt behavior require their own review and prompt-version decision.

### Q263-Q274: Attribute Hierarchy And Mechanical Rebalance

- Q263: Attribute definition/count/basis gates run before the three revisions; 5%-45% Concept coverage is necessarily a per-run post-formation gate.
- Q264: Attribute was clarified as the upper grouping layer: Concepts distinguish/group source sentences, while Attributes distinguish/group Concepts.
- Q265: Every Concept belongs to exactly one Attribute. This supersedes Q076's earlier 1-3 Attribute assignment. A Source Unit may still mount under one to three Concepts.
- Q266: Final Attribute fields are `id`, `label`, and `scope`.
- Q267: Attribute label may be a normalized higher category not literally present in the filtered Concept Term Pool, but it must be grounded by valid basis terms.
- Q268: Each Attribute proposal cites 3-12 basis terms spanning at least two heading/position distributions.
- Q269: Attribute target count is `clamp(round(sqrt(targetConceptCount)), 4, 12)`.
- Q270: Shared Attributes use one proposal, one critic, and at most one targeted repair rather than three proposals and another selection tree.
- Q271: Attribute critic emits only set/per-Attribute verdicts and fixed issue codes: `insufficient_basis`, `overlap`, `too_broad`, `too_narrow`, `off_source`, `unclear_scope`, and `coverage_gap`.
- Q272: Post-run coverage imbalance is repaired by deterministic Concept reassignment using basis affinity rather than a full model rewrite.
- Q273: Attribute affinity starts with label/basis match `0.45`, alias/basis match `0.15`, and basis-term coverage across all mounted Sources `0.40`.
- Q274: Reassignment requires target affinity at least `0.20` and no more than `0.10` loss from current affinity; otherwise the run fails rather than forcing an unrelated category.

### Q275-Q285: Related Graph Precision And Bounded Local Tolerance

- Q275: With exactly one Attribute per Concept, same-Attribute contributes only the existing `0.20` attribute signal. The earlier extra `+0.05` bonus in Q066-Q067 is removed.
- Q276: Source-distribution similarity is representative Source-ID overlap `0.50`, heading distribution `0.30`, and normalized position proximity `0.20`; the resulting component still has total related weight `0.45`.
- Q277: Aliases do not increase related label similarity. Alias equality/near-equality is duplicate/merge evidence.
- Q278: Heading similarity uses normalized longest-common-prefix similarity and symmetric best-match averaging across representative sets.
- Q279: Position similarity uses normalized source midpoints and symmetric nearest-neighbor distance rather than mean positions or a single closest pair.
- Q280: Threshold-passing edges use global score-descending greedy selection with canonical ID tie-breaks and strict degree capacity at both endpoints.
- Q281: Related scores use integer ten-thousandths for thresholding/sorting, threshold `5500`, and four-decimal protocol output.
- Q282: An atomic Cluster output that still fails after primary and fallback may be quarantined while its Sources enter unmounted repair only when failed clusters are at most 2% and affect at most 20 linked Sources. The Sources are never silently excluded.
- Q283: Shared Source Disposition review covers every mechanical anomaly plus a deterministic stratified 5% sample, with at least 20 samples when possible and a cap of 100.
- Q284: An excluded Source with a reader marker is always reviewed, but the marker never automatically changes disposition.
- Q285: Initial/review disposition disagreement receives one narrow third adjudication; the three outcomes decide by majority and leave an audit trail.

### Q286-Q291: Selection Stability And Drift Stop

- Q286: Cross-run structural agreement weights Concept term identity `40%`, Evidence Mount assignment `35%`, Attribute assignment `15%`, and canonical Related Edge sets `10%`. Summary text is excluded.
- Q287: Fallback-provider identity does not directly reduce quality score after the same hard gates pass. Provenance remains visible.
- Q288: Audit Stability allocates seven points to cross-run agreement and three to repair burden.
- Q289: Repair burden deduplicates affected Concepts and Sources, averages their affected ratios, and does not repeatedly penalize multiple edits to the same entity.
- Q290: Evidence quality's 35 points are mount grounding `15`, representative distribution `8`, mount specificity `5`, unresolved overload `4`, and low-evidence prevalence `3`.
- Q291: The session tentatively selected a mount-grounding scale of label `1.0`, alias `0.8`, other cluster term `0.6`, and heading binding `0.5`. Status: deliberately not accepted for implementation after the user stopped the grill for terminology-drift review. The `cluster` category leaks a Runner intermediate into final quality reasoning; this formula must be revisited using only the canonical entity/relationship model before scoring is decision-complete.
