# ReadMark v3 Evaluation Ledger

Last updated: 2026-08-12.

This ledger records only public synthetic fixtures and mechanical gates. It must never contain book content, private task or workspace paths, checkpoints, raw model output, endpoints, credentials, or plugin runtime data. Real-provider and manual Obsidian acceptance remain separate, explicitly authorized operations.

## Gate Policy

Every behavior change follows a witnessed RED to GREEN cycle. A phase may be committed only after focused tests, type checking, builds, privacy scans, and independent review appropriate to that phase. Exact Prompt golden fixtures are retained literals and have no automatic rewrite entry point.

Speculative fallbacks, guessed semantic outcomes, silent error swallowing, and compatibility branches without an accepted v3 consumer are eval failures. ADR-mandated closed validation, deterministic evidence checks, bounded recovery, and explicit failure terminals remain required.

## Accepted Gates

| Phase | Synthetic evidence | Status |
| --- | --- | --- |
| Protocol and scoring | Closed protocol roots; Ajv 2020-12 conformance; byte-identical Schema authority; literal matcher; deterministic IDs, representatives, Related edges, scoring, selection, and cross-repository vectors | Accepted after independent review |
| Prompt runtime | Fifteen literal exact-render contracts; strict single JSON; inert dynamic data; stage-local Schema and validator identity; repair/split/fallback/discard boundaries; actual provider provenance; selective checkpoint reuse; zero image/SenseNova route | Accepted after independent review |
| Shared semantic preparation | Term literal materialization and audited nonliteral drop; explicit deterministic anomaly input; outcome/source-distribution stratified review; marker-forced fresh review and anonymous adjudication; strict 100-unit/40,000-token request caps; Generic Filter process-discard boundary; Attribute proposal, Critic, one repair, and second-failure terminal | Accepted after independent review |
| Three semantic Runs and publication | Cluster-input Run executor: three independent Concept Formation/Critic/Summary Runs, fair Critic batches, deterministic representatives, one remount/re-review and Summary rewrite; atomic validated candidates and `complete.json` last | Accepted components; cluster builder/revision assembly integration pending |
| Plugin import and report | Source Snapshot v3, double freshness, independent validation/scoring, immutable import, history retention, Semantic Report | Pending |
| Cross-repository fake E2E | Fake-provider Runner publication through plugin import; full tests/builds; privacy and deprecated-route scans | Pending |

## Current Frozen Identities

- Prompt set: `0a0018eae0f4bc822f77106dcc08806ab82a7a6565b4bd70e3efcc210e3c3528`
- Superseded Prompt set retained for audit: `5c27688d23648e26fe5c8102da81e87ae36d57002ad2cf17650e93c7950b81b1` was the pre-Q494 identity and must not be reused by current checkpoints.
- Stage Schema manifest: `fe1f1a94582b92dee656a7c4cdb06db269859b7a5456eedb4c9f1571768bd231`
- Render template: `fc8e3f49bd558fdd7ab2caae7be012b018381020b565d6769191e39e07b1d87a`
- Literal Prompt fixture: `e78a06415ccff8a6c0006c640704470b7521ff3e8623730fbe48d0cc0940af28`

Identity changes require the corresponding retained ADR supersession, contract/version change, invalidation assertion, and explicit fixture review.

Q494 advances Summary Critic to `summary-critic@2`: contract hash `4a6ffcc2091d14dd002848df4a9fe00d8faadcfbadf17e6380914319cac2f6e1`, example pack `summary-critic-zh@2`, rendering hash `941fafe527ab1367e4b5d5c8af734ab4fe4330a16e9d198136ec9224a0d151f3`. Runner commit `005c8ed` passed 16/16 focused Prompt/checkpoint gates, combined Prompt/Run gates 26/26, typecheck, and independent review `Ready`. Its push remains blocked by the missing Runner remote.

## Development Checkpoints

- Protocol/scoring Runner suite reached 103 passing tests before Prompt integration.
- Prompt/runtime final review reached 153 passing Runner tests with no Critical or Important findings.
- Plugin protocol/Ajv focused gates remained green after shared PromptTrace changes.
- Shared semantic-preparation focused gates reached 12/12; the fresh Runner suite reached 165/165 with typecheck, build, and scoped diff checks passing.
- No real text model, SenseNova, image, art, or 2.5D call has been made during these gates.

## 2026-08-12 Versioned Implementation Record

- Plugin documentation authority commit: `688f02b` on `feat/beta3-long-text`; pushed to the verified plugin remote.
- Runner protocol and scoring commit: `2be3c2a` on `feat/protocol-v3-semantic-pipeline`.
- Runner Prompt runtime commit: `801901e`; followed by hermetic-eval correction `59904af`.
- Runner has no configured remote. Its commits are local durable checkpoints; push remains blocked until a repository remote is mechanically identified.
- A full Runner run exposed one environment-dependent config test: it inherited a host provider variable instead of using the fixture value. The corrected test passes an explicit empty environment. Fresh evidence after correction: config focused 8/8, Runner full 157/157, typecheck and build passed.
- Runner shared semantic-preparation commit: `bd850c6`. Independent acceptance review returned `Ready` with no remaining Critical or Important contract deviation in the reviewed boundary.
- Shared preparation rejects any Source Unit estimated above 40,000 input tokens before provider invocation, requires explicit unique snapshot-known mechanical-anomaly IDs, and samples across linked/excluded outcomes and source distribution. Successful strict Term restoration does not fabricate a disposition-repair record; actual linked-to-excluded repairs require a closed exclusion reason.
- Push of `bd850c6` remains mechanically blocked because the Runner repository still has no configured push destination. No remote was guessed or added.
- Pre-code review for the three-Run phase found that Q001-Q493 define weighted-coverage clustering signals but not their numeric weights, exact tie order, or termination formula. Evals must reject invented clustering defaults. Work may proceed on a cluster-input Run executor while the deterministic cluster-builder formula remains an explicit ADR gate.
- Independent Run-executor review proved a Prompt-rendering contradiction: Q461 restricts Summary Critic representatives to Source text, while the version-one shared renderer inherited Q455's heading/context fields. Q494 retains the old decisions, advances only Summary Critic to version 2, requires exact-render/negative fixture changes, and asserts stage-local downstream checkpoint invalidation before implementation resumes.
- Runner cluster-input three-Run executor commit: `b67d65e`. Four independent review rounds ended `Ready`; focused gates reached 18/18 and the fresh Runner suite reached 194/194 with build, typecheck, and scoped diff checks passing.
- The accepted Run boundary validates complete linked Dispositions, exact authoritative cluster context/bindings, structural exclusions, global Concept gates, deterministic remount IDs, alias loss after mount drops, bounded Concept-contiguous Critic batches, and delayed-provider fair canonical rotation. Summary Critic uses Q494 v2's text-only representative firewall. No real provider or image route was called.
- Push of `b67d65e` is blocked by the absent Runner push destination. Evidence Cluster weighting/tie/termination remains an explicit ADR gate; no default formula has been implemented.
- Runner atomic candidate-publication commit: `974664e`. Focused publication gates reached 12/12, typecheck passed, and two independent review rounds ended `Ready`. The existing task/checkpoint directory is preserved; interrupted non-completion artifacts are retryable; `complete.json` is written last, byte-checked, and retracted if its in-flight final validation fails.
- Push of `974664e` is blocked by the Runner repository's absent push destination; no remote was invented.
- Source Snapshot focused TDD reached a provisional 6/6 but is explicitly not accepted: those tests mechanically exposed four closed-wire contradictions in Q205/Q207/Q082/Snapshot identity. The provisional implementation and its exact-slice table behavior are not authority.
- Structural ADR Q495-Q498 and Prompt ADR Q496/Q498 resolve the contradictions before code resumes. Required RED fixtures must reject the old `TextAudit` table row, missing/extra callout metadata, invalid split-parent containment/presence, unequal exact-source hashes, an incorrect excluding-self Snapshot hash, every `readmark-protocol-v3@1` artifact, and Term Extraction `@1` callout input.
- The protocol bundle, Schema ID, and validator will advance to `@2`; the new manifest hash must be computed from the byte-identical bundle and recorded only after both repository fixtures agree. The old manifest remains retained as superseded and must never be silently rewritten in this record.
- Term Extraction alone advances to `term-extraction@2`; its exact-render golden and Prompt-set identity must be reviewed explicitly. All semantic descendants invalidate from the corrected Snapshot/Term boundary. No real provider, SenseNova, image, art, or 2.5D route is authorized by this correction.
- Structural ADR Q499 closes the Evidence Cluster implementation blocker with `evidence-cluster-builder@1`. Required fixtures cover the exact `40/35/15/-10` integer score, deterministic rational tie-breaks, root-heading/position-decile boundaries, all-Linked coverage, proposal cap three, target and 120% ceiling terminals, cluster-local Term ordering/bindings, exact-render token packing, atomic oversize failure, legal split pairs, split budget, and repeatability.
- Q499 changes no Prompt bytes and therefore does not increment `concept-formation@1`. Its builder/input identity invalidates only Evidence Clusters and the three Run descendants. Any test that calls a provider, embedding, fallback, SenseNova, image, art, or 2.5D route while building clusters must fail.
- Prompt ADR Q500 corrects Q496's message-placement wording: the callout-metadata rule is in `term-extraction@2` User `TASK_GOAL_AUTHORITY`, while the shared System constitution remains byte-identical. Exact-render evals must assert unchanged constitution identity and unchanged non-Term stage contract versions.
