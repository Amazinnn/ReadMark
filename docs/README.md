# ReadMark Development Documentation

This index defines the authority and reading order for ReadMark development documents. A document's historical detail does not make it current executable guidance.

## Authority Order

When two documents disagree, use this order:

1. `../AGENTS.md` - agent entry point, safety rules, and repository boundary.
2. `CURRENT.md` - volatile implementation status and the next authorized objective.
3. `../CONTEXT.md` - the sole canonical reading-domain glossary.
4. `ADR/2026-07-19-pre-render-semantic-network.md` - accepted protocol-v3 structural design and the complete Q001-Q383 decision ledger.
5. `ADR/2026-07-22-semantic-prompt-contracts.md` - accepted Prompt contracts Q384-Q493.
6. `ARCHITECTURE.md`, `DATA_MODEL.md`, and `DEVELOPMENT.md` - current summaries and operating instructions subordinate to the ADRs.
7. `VERSIONING.md` and `CHANGELOG.md` - release state and chronological record; neither overrides design ADRs.
8. `history/` and superseded ADRs - provenance only, never current execution instructions.

## Current And Historical Meaning

The protocol-v3 structural and Prompt designs are accepted, and the active Plugin/Runner semantic paths implement v3 through the synthetic fake-provider acceptance boundary. Real MiniMax-M3 execution and manual Obsidian acceptance remain explicitly separate from this implemented/fake-verified state.

The exact 2026-07-19 beta.3 handoff and the Runner's former protocol-v2 README are preserved in history with their original SHA-256 hashes. The old handoff path remains as a redirect so earlier conversation prompts fail safely instead of executing obsolete recovery instructions.

## Document Responsibilities

- `CONTEXT.md`: domain language only; no Runner stages, scoring internals, provider routing, or prompt engineering.
- Structural ADR: semantic entities, relationships, protocol, scheduling, failure recovery, scoring, import, report UI, tests, and supersession history.
- Prompt ADR: exact Prompt contracts, wording decisions, examples, counterexamples, repair prompts, and Prompt-version effects.
- `ARCHITECTURE.md`: concise system shape, ownership, and runtime flows.
- `DATA_MODEL.md`: durable storage and protocol artifact summaries.
- `DEVELOPMENT.md`: commands, local workflow, privacy, and acceptance procedure.
- `CURRENT.md`: what is true now, what comes next, and what must not be started.
- `history/`: immutable source material retained to prevent information loss.

## Change Discipline

- Preserve Q001-Q383 verbatim. New Prompt decisions start at Q384 in the Prompt ADR.
- Never silently delete a superseded decision. Mark it superseded and retain its original text or move an exact source document into `history/`.
- Replace duplicate current rules with links only when one complete authoritative source remains.
- Do not place credentials, endpoints, private task paths, checkpoints, book content, model output, or plugin runtime data in documentation.
