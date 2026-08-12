# ADR: Semantic Pipeline Prompt Contracts

Status: accepted and decision-complete through Q493 for protocol-v3 Prompt-contract implementation planning. No implementation has started.

## Purpose

Define the exact Prompt contracts for the accepted protocol-v3 pre-render semantic pipeline after the structural design was completed through Q383. This ADR governs Prompt expression, not semantic architecture.

The structural authority remains `2026-07-19-pre-render-semantic-network.md`. Nothing here may silently reopen, compress, or overwrite Q001-Q383.

## Inherited Constraints

- MiniMax-M3 is the preferred primary text model.
- Fallback is bounded failed-atomic-batch recovery, not a second vote or a stage-routing system.
- SenseNova is image-only and receives zero calls in the pre-render semantic phase.
- Runtime schemas and validators, not Prompt prose, are the final structural authority.
- Critics use independent fresh MiniMax-M3 calls and the bounded recovery rules already accepted in the structural ADR.
- Prompt versions are stage-local and contribute to the aggregate Prompt-set fingerprint.
- A Prompt-version change invalidates only checkpoints whose accepted input identity includes that stage version.
- Prompt text, provider responses, credentials, endpoints, and book excerpts never enter public documentation, JSONL progress, or Git.

These are inherited decisions, not new entries in this ledger.

## Grill Order

Resolve the Prompt design linearly:

1. Shared Prompt constitution
2. Term Extraction
3. Generic Filter
4. Source Disposition
5. Attribute Proposal
6. Attribute Critic
7. Concept Formation
8. Concept Critic
9. Summary
10. Summary Critic
11. Structured repair Prompts
12. MiniMax-M3 expression adaptation
13. Prompt versions, checkpoint invalidation, and acceptance fixtures

Do not create parallel architectural branches during this review. Questions answerable from code, schemas, or the structural ADR must be resolved mechanically instead of asked again.

## Required Decision Dimensions

For every stage, settle:

- task boundary and explicitly forbidden authority;
- input selection, ordering, delimiters, and available context;
- system/user message responsibilities;
- exact schema reference and output-only discipline;
- evidence citation and source-ID rules;
- examples and counterexamples;
- ambiguity behavior and prohibited inference;
- deterministic validator interaction;
- Critic independence where applicable;
- locally discardable error boundary;
- repair diagnostic shape and terminal failure;
- stage-local Prompt version and checkpoint effect;
- fake-provider and golden-fixture acceptance cases.

## Recording Rules

- Ask one material question at a time and record it immediately after resolution.
- Preserve each accepted question and answer. A later change marks the old entry `superseded` and adds a new entry; it never deletes or rewrites history silently.
- Keep implementation terms out of `CONTEXT.md` unless a genuinely new reading-domain term is discovered.
- Do not paste production Prompt text containing book material, private endpoints, credentials, raw provider responses, or runtime artifacts into this ADR.
- Expected review size is 85-115 high-value questions, with a default ceiling of 120. Decision completeness, not quota, is the exit condition.

## Exit Criteria

Prompt design is complete only when an implementer can construct every stage Prompt and its fixtures without inventing behavior, and every allowed output, rejected output, repair path, version effect, and failure boundary maps to an accepted structural rule.

Implementation, real provider calls, image work, and 2.5D rendering remain outside this ADR session.

## Decision Ledger

### Q384-Q390: Shared Prompt Constitution

- Q384: All protocol-v3 text stages use a two-message contract. The System message contains only the stable shared Prompt constitution. The User message contains, in fixed contract order, the stage-local task contract, runtime Schema identity, allowed context, and current batch payload. Book-derived or prior-stage data never appears in the System message. This replaces the protocol-v2 single-User-message implementation shape without changing Q001-Q383.
- Q385: Every dynamic field in a protocol-v3 text request is inert data, including book-derived text and structure, Term/Attribute/Concept strings, prior-stage model output, Critic review material, and mechanical repair diagnostics. Dynamic content cannot alter the task, authority, Schema, or output discipline even when it resembles an instruction, Prompt, JSON contract, or repair command. Only Runner-authored System and stage-contract content has instruction authority.
- Q386: Each stage User contract includes the complete canonical stage-local output Schema slice, mechanically rendered from the same runtime authority used by validation, together with its Schema identity and version. Prompt-specific handwritten Schema copies are forbidden. Examples may illustrate the Schema but cannot redefine it.
- Q387: Every model response must be exactly one raw JSON value after trimming surrounding whitespace. Markdown fences, leading or trailing prose, multiple candidate values, comments, and extracted JSON substrings are structural failures. The v3 parser does not retain protocol-v2 first-JSON salvage behavior; recovery proceeds only through the accepted structured-repair path.
- Q388: Every stage User task package uses this outer order: call metadata; task goal and authority boundary; allowed context, prohibited behavior, evidence and ambiguity rules; canonical stage Schema; stage examples and counterexamples; explicitly delimited dynamic input; and a Runner-generated terminal checklist. The terminal checklist may only restate exact coverage, opaque-ID copying, and single-JSON output; it cannot introduce new stage rules.
- Q389: Every stage Prompt contains at least one minimal schema-valid synthetic positive example. Counterexamples demonstrate a tempting wrong decision and the required correct handling, but never present malformed or otherwise copyable invalid output JSON. Examples use a reserved synthetic-ID namespace mechanically disjoint from live IDs, contain no book material, and are illustrative only; canonical Schema and stage rules remain authoritative.
- Q390: The model may use pretrained linguistic and general semantic competence to interpret supplied text and perform the stage's bounded classification, synonymy, and grouping tasks, but it may not supplement the input with external entities, facts, causality, examples, or book-external meanings. General knowledge is interpretive capacity, never Source or Evidence.

### Q391-Q399: Term Extraction

- Q391: Term Extraction uses controlled high recall. It retains plausible literal terminology-like spans for later deterministic filtering, Generic Filter, and ranking instead of prematurely deleting them, while still excluding obvious sentences, purely functional words, page-like noise, and non-literal rewrites.
- Q392: The stage only extracts Term spans from each current Source Unit's own text. It has no authority to assign Source Disposition, form Concepts or Attributes, merge or rank Terms, or rename source language.
- Q393: Batches and records preserve Source order. Each input item presents `sourceId`, `type`, and `text`, followed by `headingPath`, bounded `parentContext`, and marker positions/types for disambiguation. Reader-comment text and other text not contained in the Source Unit are not candidate sources.
- Q394: Output contains exactly one item for every input Source Unit in the same order. Each item contains zero to eight unique strings. The model emits no offsets, Term IDs, scores, reasons, or rankings.
- Q395: Every returned string must be one contiguous exact substring of its stated Source Unit `text`, preserving original case, spelling, whitespace, and meaningful symbols. Translation, morphological rewriting, concatenation of disjoint spans, and copying a heading/context-only string are forbidden.
- Q396: The model may interpret whether a literal span is terminology-like, but `headingPath`, `parentContext`, and markers only disambiguate the Source text. They cannot substitute for a literal occurrence in that Source Unit.
- Q397: Synthetic examples cover Chinese and English terminology and meaningful technical symbols. Counterexamples cover heading-only terms, complete judgments or sentences, page references, generic functional text, and normalized or translated strings absent from the Source.
- Q398: Missing, duplicate, unknown, or reordered Source records and more than eight returned strings are structural failures. An individual non-literal string is locally dropped and audited as already authorized by the structural ADR; an empty resulting `terms` array is legal. Normalized duplicates are removed deterministically by the Runner.
- Q399: Structural failure uses the shared repair Prompt and deterministic bisection. If an atomic Source Unit still fails after the primary and fallback recovery gradient, Term Extraction fails; process failure is never converted into a semantically valid empty result.

### Q400-Q408: Generic Filter

- Q400: Generic Filter uses conservative deletion. It drops only candidates that are clearly generic, purely functional, or too broad to name a Concept; uncertain candidates remain available to later ranking and Concept Formation.
- Q401: The stage may only return `keep` or `drop` for existing `termId` values. It cannot rename, merge, add, reorder, rank, score, or explain Terms.
- Q402: Input preserves deterministic Term order. Each item contains opaque `termId`, the original Term string, and at most three distribution-first representative Source usages with `headingPath`; this context is solely for judging the Term's use in this book.
- Q403: A Term is kept when at least one supplied use could legally name or alias a Concept. It is dropped only when its supplied uses make it clearly generic, discourse/functional, page-like noise, or unusably broad. Low frequency, unfamiliarity, or ambiguity is not a drop reason.
- Q404: Output is item-preserving and order-preserving and contains only `{termId, decision}`. There are no reason codes, confidence values, prose, or additional fields.
- Q405: Synthetic cases cover generic verbs, discourse connectors, technical numeric Terms, proper nouns, and a normally broad word that is terminology-like in the supplied book context. Counterexamples state that rarity or unfamiliarity alone cannot justify `drop`.
- Q406: Missing, duplicate, unknown, or reordered IDs and illegal decision values are structural failures. A schema-valid `keep` or `drop` decision is not second-guessed by a validator.
- Q407: Structural failure uses repair and bisection. Only an atomic Term that still fails the primary/fallback gradient may be process-discarded, and only within the accepted combined limit of at most 2% of the pool and at most 20 Terms, with audit provenance.
- Q408: Process discard never changes Source Disposition. If discard leaves a Linked Source without a usable Term, the existing `filterDiscard` repair chain applies; exceeding the discard budget fails the stage.

### Q409-Q418: Source Disposition

- Q409: Source Disposition is evidence-preserving. Substantive prose, list items, and table rows default to `linked` when no allowed exclusion reason can be positively established; exclusion is not a low-information guess.
- Q410: MiniMax-M3 only handles `sentence`, `list_item`, and `table_row` units left undecided by deterministic rules. It cannot emit Terms, Concepts, Summaries, confidence, scores, or explanations.
- Q411: Input is contiguous in Source order. Each item contains `sourceId`, `type`, `text`, `headingPath`, and bounded `parentContext`. Reader markers are withheld as decision evidence; the Runner uses them only to force independent review.
- Q412: The Prompt defines the six closed exclusion reasons precisely. A Source may be excluded only when its own content satisfies `toc`, `copyright`, `acknowledgement`, `boilerplate`, `fragment`, or `duplicate`. Low frequency, difficulty, weak local connection, or lack of an obvious Term is not an exclusion reason.
- Q413: Ambiguous substantive prose/list/table content is `linked`. Structural context may help identify navigation, template text, or a fragment, but a heading alone cannot justify excluding body content.
- Q414: Output contains exactly one record per input Source in the same order and only `sourceId`, `status`, and the conditionally required exclusion `reason`. A `linked` record must not contain `reason`.
- Q415: Lightweight review is a fresh independent request over the same narrow Source input. It does not receive the initial outcome, confidence, explanation, or marker status.
- Q416: When initial classification and review disagree, a third adjudication request sees the Source and the two candidate outcomes under anonymous roles, without learning which is initial or review. The Runner uses the three outcomes' majority and records any change.
- Q417: Synthetic examples cover TOC, publication rights text, acknowledgement, repeated/template boilerplate, fragment, duplicate, and short but substantive linked text. Marker examples show only that a marker forces review, never that it forces `linked`.
- Q418: Missing, duplicate, unknown, or reordered IDs, illegal reasons, and conditional-field errors are structural failures. Repair and bisection continue to one Source Unit; an unrecoverable atomic primary/fallback failure fails the shared Disposition stage. There is no local discard or guessed outcome.

### Q419-Q427: Attribute Proposal

- Q419: Attribute Proposal uses book-native semantic categories. Labels may be normalized higher-level expressions, but the category system is grounded in this book's basis Terms rather than a reusable cross-book template.
- Q420: One proposal produces exactly `targetAttributeCount` categories. The stage-local output is `{label, scope, basisTermIds}`; the Runner deterministically materializes final safe-ASCII `attributeId` values from normalized labels.
- Q421: Input presents target count and source primary language, then the complete filtered Term Pool in deterministic rank order. Each Term contains opaque `termId`, original spelling, compact occurrence/distribution signals, and bounded heading/position distribution; the complete Source corpus is not included.
- Q422: The set must cover the book's major semantic domains, remain mutually distinguishable, and cross chapter/position boundaries. It must not mirror the table of contents, use a fixed theory/practice/other template, or turn metadata, audience, difficulty, or relations into Attributes.
- Q423: Attribute labels follow the book's primary language, remain short, noun-like, and normalized-unique, and may be source-grounded higher categories not literally present as Terms. Sentences, decorative worldbuilding names, and generic catch-all labels are forbidden.
- Q424: `scope` is one concise operational boundary stating which Concepts belong and how the category differs from neighboring Attributes. It cannot add book-external facts or use `other`/`miscellaneous` as coverage.
- Q425: Every Attribute cites 3-12 unique legal `basisTermIds` spanning at least two heading/position distributions. Basis Terms must materially support both label and scope and cannot be padded merely to satisfy count.
- Q426: Synthetic examples cover book-native categories, generic reusable templates, chapter mirroring, overlapping scopes, unsupported normalized labels, and a valid source-grounded higher category.
- Q427: The Runner mechanically validates count, normalized-label uniqueness, non-empty scope, basis IDs/count/distribution, and generated IDs. Structural failure uses repair and the primary/fallback gradient; persistent failure ends the stage. Semantic defects are exclusively the independent Attribute Critic's responsibility.

### Q428-Q435: Attribute Critic

- Q428: Attribute Critic uses high-precision rejection. Clearly demonstrable defects are hard failures, but stylistic preference, possible alternative wording, or vague suspicion cannot trigger `fail`.
- Q429: The Critic is a fresh request over the mechanically legal complete proposal, target count, and the same compact Term Pool/distribution evidence. It does not receive the proposer Prompt, raw response, retry history, or subjective explanation.
- Q430: Output contains one set verdict and exactly one verdict per `attributeId` in Attribute order. It may contain only `pass|fail` and closed issue codes; it cannot rewrite labels, scopes, or basis Terms.
- Q431: `ungrounded` requires evidence that basis Terms do not support the label/scope; `non_distinct` requires materially overlapping category boundaries; `coverage_invalid` requires a clear major-domain omission or catch-all category; `scope_unclear` requires a scope that cannot support stable Concept assignment.
- Q432: Set-level issues are limited to `non_distinct` and `coverage_invalid`; per-Attribute issues are limited to `ungrounded`, `non_distinct`, and `scope_unclear`. `pass` has zero issues, `fail` has at least one unique issue, and set/item verdict consistency is mechanically enforced.
- Q433: Counterexamples distinguish wording that could be polished from an unusable scope and related categories from categories that are actually non-distinct, preventing aesthetic vetoes.
- Q434: Missing, duplicate, unknown, or reordered IDs, illegal codes, and inconsistent verdict/issues are structural failures. A Critic response cannot be partially discarded.
- Q435: The first semantic failure sends only fixed issue codes and affected IDs into one targeted Attribute repair. The repaired complete proposal receives a new full Critic request without the old verdict. A second semantic failure or unrecoverable structure failure ends the Attribute stage.

### Q436-Q445: Concept Formation

- Q436: Concept Formation prioritizes evidence cohesion. Among structurally legal alternatives, it first forms Concepts whose labels, aliases, and mounts have a clear shared evidence boundary, and only then considers Term salience and target-count fit.
- Q437: Each Evidence Cluster produces one Concept by default and at most two. Stage output contains only `labelTermId`, `aliasTermIds`, `sourceIds`, and `attributeId`; the model never emits final IDs, strings, Summaries, scores, or reasons.
- Q438: Dynamic input lists confirmed Attributes first and Evidence Clusters by earliest Source position. Each cluster provides opaque cluster ID, candidate Terms with complete cluster-local bindings, admitted Sources, system-proposed mounts, and mechanically legal split pairs.
- Q439: Each admitted Source includes exact text, `headingPath`, and bounded `parentContext`. Only Source and Term IDs admitted to that cluster may be referenced. Context may disambiguate but cannot provide mount support.
- Q440: The label selects a legal Term directly anchored in at least one chosen Source. At most five aliases may be selected; each must be near-synonymous with the Concept and bind at least one chosen Source. Free rewriting and heading-only names are forbidden.
- Q441: The model retains all admitted Sources that genuinely support the Concept, may drop unsupported proposed mounts, and may add only another admitted Source. It cannot drop valid evidence merely for low importance or force unrelated Sources merely for coverage.
- Q442: Each Concept selects exactly one confirmed `attributeId` according to Attribute scope, basis Terms, and the mounted evidence as a whole. It cannot create a new Attribute or choose a merely nearest but unrelated category.
- Q443: The Runner supplies only split pairs that already satisfy the dual-Term/Jaccard mechanical gate. The model may split only when two evidence groups form clearly distinct Concepts; mechanical eligibility never makes splitting mandatory.
- Q444: Examples cover one-cluster/one-Concept, a valid dual split, an eligible but semantically unjustified split, cluster-external IDs, missing direct anchor, unbound alias, and incorrect Attribute assignment.
- Q445: The Runner validates all references, split eligibility, direct anchor, alias binding, mount uniqueness/caps, and Attribute assignment. Structural failure bisects to an atomic cluster before fallback. An unrecoverable atomic cluster may be quarantined only within the accepted 2% cluster and 20-Source limits and then enters unmounted repair; exceeding either limit fails the Run.

### Q446-Q452: Concept Critic

- Q446: Concept Critic is a fresh request that receives Concept label/aliases, every proposed mount, and bounded context in Concept-contiguous order. It does not receive the Formation Prompt, raw response, retries, scores, or earlier critique.
- Q447: An alias is dropped with `alias_mismatch` only when it clearly does not denote the canonical Concept in the supplied evidence. Different wording, an abbreviation, or a close upper/lower term is not by itself a mismatch.
- Q448: A mount is dropped with `mount_unsupported` only when the Source Unit itself cannot support the Concept. Heading or parent context may resolve a reference but cannot supply the missing support.
- Q449: Critic drops use the same high-precision posture: an item with a reasonable evidence-supported interpretation remains `keep`; only a clear mismatch or unsupported mount is dropped.
- Q450: Output is item-preserving and order-preserving and contains only opaque item ID, `keep|drop`, and the conditionally required single drop reason. Scores, explanations, rewrites, and new items are forbidden.
- Q451: Synthetic cases distinguish literal mention without semantic support, semantic support without literal label, context-only support, a legal abbreviation alias, and an invalid near-synonym merge.
- Q452: Missing, duplicate, unknown, or reordered IDs, illegal codes, and conditional-field errors are structural failures. An atomic Critic process failure may conservatively discard the item only within the accepted combined 2%/20-item budget and is separately audited, never mislabeled as semantic drop. Post-Critic anchor/coverage failure enters the one bounded remount repair and cannot change shared Disposition.

### Q453-Q460: Summary

- Q453: Concept Summary uses concise evidence synthesis. It explains, in neutral language, the Concept's role in this book as jointly supported by representative Sources; it is neither extractive collage nor a textbook-style external definition.
- Q454: Summary generation begins only after Concepts, aliases, complete mounts, and representative Sources are frozen. It cannot change or propose changes to any upstream field.
- Q455: Input follows stable Concept order and contains only `conceptId`, label, aliases, and representative Sources with exact text, `headingPath`, and bounded `parentContext`. It excludes Attribute, Related Edges, the complete mount corpus, and scoring.
- Q456: Summary follows the Source Snapshot primary language and states the Concept's role supported by representatives. It cannot become a second label, dictionary definition, evidence list, free relation inference, or external-knowledge expansion.
- Q457: Every substantive clause must be supported by at least one representative Source. Multiple Sources may be synthesized, but absent causality, purpose, value judgment, or examples cannot be added. When evidence differs, the Summary states only the narrowest supported intersection.
- Q458: Output contains exactly one `{conceptId, summary}` record per Concept in order. Summary is a single trimmed line. For a CJK-primary source it is at most 80 Unicode grapheme clusters; otherwise it is at most 50 words and 320 Unicode code points.
- Q459: Examples cover valid evidence synthesis, label restatement, external definition, overbroad generalization, unsupported causality, and source-fragment collage.
- Q460: Missing, duplicate, unknown, or reordered Concept IDs, empty or multiline text, length violations, and additional fields are structural failures. Repair and bisection continue to one Concept; an unrecoverable atomic primary/fallback failure fails the Run. Empty or locally discarded Summaries are forbidden.

### Q461-Q466: Summary Critic

- Q461: Summary Critic is a fresh request that receives only Concept label, candidate Summary, and representative Source text. It does not receive aliases, Attribute, generation Prompt, retries, earlier verdicts, or scores.
- Q462: The Critic verifies every substantive Summary claim. Any claim absent from, contrary to, or broader than representative Sources is `fail` with `unsupported`.
- Q463: Mere label restatement, generic definition, evidence listing, overbroad description, or failure to explain the Concept's book-specific role is `fail` with `not_role_explanation`. When both reasons apply, `unsupported` takes precedence.
- Q464: Output is item-preserving and order-preserving and contains only `conceptId`, `pass|fail`, and exactly one conditional fail reason. Explanations, rewrites, scores, and new fields are forbidden.
- Q465: Critic structure failure uses repair, bisection, and atomic fallback without local discard. Unrecoverable failure fails the Run.
- Q466: After the first semantic failure, Summary rewrite receives only the label, representatives, and fixed reason code, not the failed Summary or free-form critique. A new fresh Critic reviews the rewrite; a second failure ends the Run.

### Q467-Q475: Structured And Targeted Repair Prompts

- Q467: Structured repair rebuilds a complete response from authoritative input and mechanical diagnostics. It does not edit or reuse the invalid model response.
- Q468: Structured repair is limited to JSON syntax, Schema, coverage, reference, ordering, and conditional-field failures. Critic semantic failures use their dedicated targeted repair contracts; the two paths never share authority.
- Q469: A repair request uses the same System constitution, original stage contract, canonical Schema, identical original input, and sanitized mechanical diagnostics. It contains no invalid response, free provider error, other provider output, or additional book material.
- Q470: Diagnostics use a closed record containing error code, optional JSON Pointer or opaque item ID, and bounded expected/actual counts or scalar categories. Records are deterministically sorted and deduplicated, capped at 50, and when truncated include total count and per-code counts without raw content.
- Q471: Repair output is the complete replacement response for the same batch, in the same order and with full coverage. JSON Patch, partial output, and Runner merging with invalid output are forbidden.
- Q472: Each request node receives at most one structured-repair attempt. If it remains invalid, a splittable node writes its split marker before deterministic bisection. At an atomic node the fallback starts fresh from original input after primary recovery and may receive at most one repair attempt. Repair loops are forbidden.
- Q473: Transport retries, structural repair, and semantic targeted repair are separate bounded gradients with separate audit counts; success or failure in one does not reset another's budget.
- Q474: Attribute repair returns one complete replacement proposal; Summary rewrite follows Q466; unmounted-source repair reuses a restricted Concept Formation contract over affected clusters and may not edit unaffected Concepts. There is no monolithic `repair the Revision` Prompt.
- Q475: Exceeding any repair/discard budget, a second semantic failure, or an unrecoverable atomic failure reaches the accepted stage/Run terminal state. Valid checkpoints remain. Audit records only sanitized codes, counts, and the actual recovery path, never Prompt or response text.

### Q476-Q483: MiniMax-M3 Expression Adaptation

- Q476: Version-one instructions are concise Simplified Chinese for MiniMax-M3. Canonical Schema keys, enums, IDs, and protocol terms remain English; Source data remains unchanged; label and Summary language follows the established primary-language rules.
- Q477: Rules use short, direct, numbered `must`, `must not`, and `may only` statements. Personas, creative-role framing, rhetoric, motivational text, long background narrative, and nested negation are forbidden.
- Q478: User messages use fixed ASCII section sentinels. Canonical Schema, examples, and dynamic payload are canonical JSON within those sections, in the exact order accepted by Q388.
- Q479: Each stage includes only a small canonical glossary for terms used by that stage. The Prompt never embeds the complete ADR or creates alternate terminology.
- Q480: Every stage uses deterministic synthetic example packs. The Runner selects `zh` or `en/mixed` mechanically from Source primary language; example-pack ID and content hash are part of Prompt identity.
- Q481: Prompts never request chain-of-thought, hidden analysis disclosure, self-critique prose, or a reasoning field. The model performs its internal judgment and emits only the final JSON contract.
- Q482: Version one does not depend on provider-native JSON or JSON-Schema response modes. The Prompt/parser contract is sufficient by itself. Future native mode requires separate verification, versioning, and provider-fingerprint inclusion.
- Q483: An eligible fallback must support the same System/User contract and receives byte-identical rendered messages. No provider-specific semantic rewrite is allowed, and fallback never sees a primary invalid response.

### Q484-Q493: Prompt Versions, Checkpoint Invalidation, And Acceptance Fixtures

- Q484: Initial safe-ASCII Prompt contract identities are `constitution@1` plus independent `@1` contracts for Term Extraction, Generic Filter, Source Disposition classify/review/adjudicate, Attribute proposal/critic/repair, Concept Formation/Critic/remount repair, Summary/Critic/rewrite, and shared structured repair.
- Q485: A checkpoint records the actual Prompt trace: contract IDs, integer versions, content hashes, constitution identity, Schema and validator identities, example-pack identity, sanitized provider fingerprint, and whether repair or fallback actually produced the output. Prompt and response text are never stored in this trace.
- Q486: Any model-visible byte or behavior change increments the affected contract version and changes its content hash. Documentation layout or comments invisible to the model do not invalidate checkpoints.
- Q487: Constitution changes invalidate every text-stage checkpoint. A stage change invalidates only that stage and dependency descendants: Term changes flow through Filter/Attributes/Runs; Disposition changes flow through all Runs; Attribute changes flow through all Runs; Formation changes flow through that Run's downstream stages; Critic changes flow through representatives/Summary/Edges/scoring for that Run; Summary changes flow through that Run's hard gate, Revision, and selection.
- Q488: A repair-contract change invalidates only checkpoints whose actual Prompt trace shows that repair produced their output. A successful checkpoint that did not use the changed repair remains reusable if its current validator and other identities still match.
- Q489: Any Schema or validator identity mismatch invalidates the affected checkpoint regardless of Prompt version. A model-visible Schema change also increments the corresponding Prompt contract version.
- Q490: Every base, Critic, and repair contract has an exact-render golden fixture with fixed two-message content, synthetic input, legal output, ordering, and hashes. Fixtures contain no real book, runtime, provider, or task material.
- Q491: Negative fixtures cover instruction-like dynamic data, heading/context-only evidence, external-knowledge supplementation, missing/duplicate/unknown/reordered IDs, additional fields, fenced/prose/multiple JSON, illegal enums, length violations, and conditional-field errors.
- Q492: Recovery/checkpoint fixtures cover one repair attempt, split-marker-before-child, byte-identical atomic fallback, local discard budgets, over-budget termination, stage-local invalidation, repair-only checkpoint reuse, and an explicit zero-call assertion for SenseNova/image routes.
- Q493: Golden fixtures are never automatically rewritten. Any expected-output change first requires a retained supersession decision, contract-version increment, and explicit checkpoint-invalidation assertion. Prompt-Grill acceptance uses only fake-provider, Schema, exact-render, recovery, and checkpoint fixtures; no real model task runs. The Prompt ADR must be reviewed and accepted before any implementation plan or code change begins.

### Q494: Summary Critic Representative Firewall Correction

- Q494: Q461 controls the Summary Critic input boundary and is narrower than Q455. Summary generation and Summary rewrite retain representative records with `sourceId`, exact `text`, `headingPath`, and bounded `parentContext`; Summary Critic receives representative records containing only `sourceId` and exact `text`. The previously shared representative-record renderer for Summary and Summary Critic is superseded only for the Summary Critic branch; Q455, Q461, and their original text remain retained. `summary-critic` advances to contract version 2, its exact-render/example identities advance, and only Summary Critic checkpoints plus that Run's Summary hard gate, Revision, scoring, and selection descendants invalidate. No upstream Formation, Concept Critic, representative selection, or Summary-generation checkpoint invalidates. Fixtures must reject `headingPath`, `parentContext`, aliases, Attribute, generation history, retries, earlier verdicts, and scores in Summary Critic dynamic input.

The next decision identifier is **Q495**. Protocol-v3 Prompt design is decision-complete through Q494; implementation, real-provider verification, image work, and 2.5D remain separate later phases.

### Q495-Q498: Implementation-Proven Source Snapshot Corrections

The preceding next-identifier statement is retained and superseded by the following implementation-proven decisions. Structural ADR Q495, Q497, and Q498 are authoritative for table-row wire representation, split-parent coordinates, Snapshot hashing, and the protocol-v3 bundle/validator `@2` identity. They do not authorize additional model context or inference.

- Prompt consequence of Q496: Term Extraction advances from `term-extraction@1` to `term-extraction@2` solely because structural ADR Q496 makes callout type/title explicit Prompt-visible context. Its marker input is a closed union: non-callout markers contain exactly `type` and `position`; callout markers contain exactly `type:'callout'`, `calloutType`, `title`, and `position`. Marker order is retained. Callout type/title may disambiguate a literal span already present in the current Source Unit `text`, but cannot itself be copied, normalized, translated, or emitted as a Term unless that exact contiguous string occurs in `text`. The System rules, canonical dynamic-input validator, exact-render golden, positive/counterexample pack, contract hash, rendering hash, and aggregate Prompt-set fingerprint all advance explicitly. Q392-Q399 and their original text remain retained; the `@1` marker shape is superseded only by this closed callout variant. Per Q487, this change invalidates Term Extraction and every semantic descendant: Generic Filter, Source Disposition reconciliation that depends on the regenerated Snapshot/Term input, Attributes, all three Runs, revisions, scoring, publication, and selection. No other Prompt contract version increments merely because the protocol bundle and Snapshot hash advance.

- Checkpoint consequence of Q498: A protocol-v3 bundle/validator identity mismatch invalidates every checkpoint that binds that identity, even if its stage Prompt bytes are otherwise unchanged. Exact same-source input under the corrected parser receives a new Snapshot hash and therefore cannot reuse `@1` semantic checkpoints. Fixtures must prove `term-extraction@2` accepts only the closed marker variants, rejects callout fields on non-callout markers and missing/extra callout fields, and preserves the zero-SenseNova/image assertion.

The next decision identifier is **Q499**. Prompt behavior is decision-complete through Q498; real-provider verification, image work, and 2.5D remain separate later phases.

Structural ADR Q499 consumes the identifier for the deterministic Evidence Cluster builder. It does not change any model-visible Concept Formation contract, Schema, example, or Prompt byte: it freezes only the deterministic dynamic-input producer, exact input order already required by Q438, local binding completeness, split-pair authorization, and the 40,000-token pre-provider terminal. Its checkpoint/input-hash change invalidates Evidence Clusters and all three Runs downstream without incrementing `concept-formation@1`.

The next decision identifier is **Q500**.

### Q500: Term Extraction v2 Message Placement Correction

- Q500: Q384 controls message placement and Q496 does not change the shared System constitution. The Q496 callout-metadata rule is written into `term-extraction@2`'s stage-local task contract inside the User message `TASK_GOAL_AUTHORITY` section, with its closed marker shape enforced by the User message dynamic-input validator. The earlier Q496 phrase “The System rules” is retained and superseded only as a placement error; it means the authoritative Term Extraction stage rules, not the wire System message. Constitution identity and bytes remain unchanged. Therefore only Term Extraction's contract/example/render identities and the aggregate Prompt-set fingerprint advance; no other stage contract increments because of this correction. Exact-render fixtures must prove the System content remains byte-identical to the pre-Q496 constitution while the User stage contract contains the new rule.

The next decision identifier is **Q501**.

Structural ADR Q501 consumes the identifier and supersedes only Q438's cross-cluster earliest-Source ordering with Q499 seed-selection order. One atomic Concept Formation request still contains one cluster with the same closed fields and cluster-internal Source order, so System/User bytes, canonical Schema, examples, and `concept-formation@1` remain unchanged. The changed deterministic call/input order invalidates Evidence Cluster and Run descendants through their input hashes.

The next decision identifier is **Q502**.

Structural ADR Q502 consumes the identifier for deterministic post-Generic-Filter Term Pool finalization. It changes no Prompt contract or model-visible byte. Attribute Proposal continues to receive the complete finalized pool in its deterministic order; Evidence Cluster Formation consumes its authoritative `percentileRank` and complete bindings. The finalizer identity/input hash invalidates Attributes and all downstream stages without incrementing `generic-filter@1`, `attribute-proposal@1`, or any Run Prompt.

The next decision identifier is **Q503**.

### Q503: Canonical Attribute Distribution Evidence

- Q503: Q421 and Q425 require Prompt-visible bounded heading/position distribution and a mechanical two-distribution basis gate; aggregate counts alone cannot satisfy that retained contract. Each finalized Term therefore exposes one closed `distribution` array of at most twelve structured records `{headingBucket,positionDecile}` derived only from its complete Linked Source binding set under the already frozen Q499/Q502 rules. `headingBucket` is the exact top-level heading string, with the empty string denoting the explicit root bucket; `positionDecile` is the integer `0..9` Source-midpoint decile. The producer forms the unique occupied pairs, records each pair's earliest Snapshot Source position, sorts by that position, then Unicode code-unit `headingBucket`, then increasing `positionDecile`, and retains the first twelve. There is no count-only substitute, free-form bucket string, caller-selected sample, or model-authored distribution. Attribute Proposal, Critic, and repair receive the same records. The mechanical Q425 gate requires the union of exact `(headingBucket,positionDecile)` pairs cited by an Attribute's `basisTermIds` to contain at least two members. This supersedes only the previously under-specified string encoding of Q421/Q425; their original text and semantic intent remain retained. Because the canonical dynamic-input bytes and validator advance, Attribute Proposal/Critic/repair each advance to `@2`; their schemas and output shapes do not change. The aggregate Prompt-set fingerprint changes, invalidating Attributes and all downstream Evidence Cluster, Run, Revision, scoring, publication, and selection checkpoints, while Term Extraction, Generic Filter, Source Disposition, and deterministic Term Pool checkpoints remain reusable when their own identities match. Exact-render and negative fixtures must reject free strings, duplicate/reordered records, more than twelve records, invalid deciles, noncanonical heading buckets, or caller-supplied records that differ from Snapshot recomputation.

The next decision identifier is **Q504**.

Implementation acceptance for Q503 is recorded at Runner commit `91e4658`. `attribute-proposal@2`, `attribute-critic@2`, and `attribute-repair@2` now consume the same Snapshot-derived structured distribution records and retain `percentileRank`; the active Prompt-set fingerprint is `18c5a88e6292b996346a940b55e143c9858a407a568314e5842e4d68853eb1c4`. Proposal contract hash is `62ad4153533910b5d071ac60e10532afcdd7e2cfe382d1ad8c3e61106e640c9e`, Critic contract hash is `5b423d88cfe6d56d54a1640a8b0b576ca0bd6e1b42ec7e94f29e9987651395f2`, and repair contract hash is `3b19e086aff37153b4a79d0582337d1dc24a585f10fafe9994f6ef1715b7488b`. The prior `@1` render hashes remain retained in the Runner golden as superseded audit values. This acceptance adds no Q-number and does not modify Q001-Q503.
