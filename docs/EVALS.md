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
| Shared semantic preparation | Term literal materialization and audited nonliteral drop; independent Disposition review and anonymous adjudication; Generic Filter process-discard boundary; Attribute proposal, Critic, one repair, and second-failure terminal | In progress |
| Three semantic Runs and publication | Three independent Concept/Summary Runs, Critics, deterministic revisions, scoring/selection, atomic artifacts, `complete.json` last | Pending |
| Plugin import and report | Source Snapshot v3, double freshness, independent validation/scoring, immutable import, history retention, Semantic Report | Pending |
| Cross-repository fake E2E | Fake-provider Runner publication through plugin import; full tests/builds; privacy and deprecated-route scans | Pending |

## Current Frozen Identities

- Prompt set: `5c27688d23648e26fe5c8102da81e87ae36d57002ad2cf17650e93c7950b81b1`
- Stage Schema manifest: `fe1f1a94582b92dee656a7c4cdb06db269859b7a5456eedb4c9f1571768bd231`
- Render template: `fc8e3f49bd558fdd7ab2caae7be012b018381020b565d6769191e39e07b1d87a`
- Literal Prompt fixture: `e78a06415ccff8a6c0006c640704470b7521ff3e8623730fbe48d0cc0940af28`

Identity changes require the corresponding retained ADR supersession, contract/version change, invalidation assertion, and explicit fixture review.

## Development Checkpoints

- Protocol/scoring Runner suite reached 103 passing tests before Prompt integration.
- Prompt/runtime final review reached 153 passing Runner tests with no Critical or Important findings.
- Plugin protocol/Ajv focused gates remained green after shared PromptTrace changes.
- No real text model, SenseNova, image, art, or 2.5D call has been made during these gates.

## 2026-08-12 Versioned Implementation Record

- Plugin documentation authority commit: `688f02b` on `feat/beta3-long-text`; pushed to the verified plugin remote.
- Runner protocol and scoring commit: `2be3c2a` on `feat/protocol-v3-semantic-pipeline`.
- Runner Prompt runtime commit: `801901e`; followed by hermetic-eval correction `59904af`.
- Runner has no configured remote. Its commits are local durable checkpoints; push remains blocked until a repository remote is mechanically identified.
- A full Runner run exposed one environment-dependent config test: it inherited a host provider variable instead of using the fixture value. The corrected test passes an explicit empty environment. Fresh evidence after correction: config focused 8/8, Runner full 157/157, typecheck and build passed.
- Shared semantic-preparation focused tests currently pass 4/4 and are awaiting independent review before commit.
