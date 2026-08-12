# Current ReadMark v3 Status

Last updated: 2026-08-12.

## Current State

- ReadMark `0.6.0-beta.3` is unfinished and unreleased.
- The protocol-v3 pre-render semantic architecture is accepted through Q383 in `ADR/2026-07-19-pre-render-semantic-network.md`.
- Protocol-v3 implementation is in progress on feature branches. The accepted protocol and Prompt contracts remain frozen through Q493.
- The plugin and Runner now contain byte-identical closed protocol-v3 Schema/type authorities, independent validators, deterministic scoring implementations, and public synthetic cross-repository vectors.
- The Runner now contains the strict two-message Prompt manifest/runtime, exact-render fixtures, bounded recovery primitives, sanitized PromptTrace, provider identity binding, and selective checkpoint reuse/invalidation.
- Runner shared semantic preparation is partially implemented: Term materialization and nonliteral audit, independent Source Disposition review/adjudication, Generic Filter discard boundaries, and Attribute proposal/critic/repair are under focused synthetic evaluation.
- Three independent semantic Runs, atomic Runner publication, plugin Source Snapshot/import, and Semantic Report activation are not complete.
- Versioned checkpoints now exist for documentation, protocol/scoring, and Prompt runtime. The plugin documentation branch is pushed; the Runner feature branch has local commits but no configured remote.
- No fresh private MiniMax-M3 v3 end-to-end task has been run.
- No v3 candidate Revisions have been automatically imported and accepted in Obsidian.
- Existing local implementation changes in both repositories predate this documentation normalization and must not be reverted.

## Next Authorized Objective

Finish the Runner protocol-v3 semantic pipeline in the accepted phase order: complete shared preparation, implement three independent Runs and Critics, validate and score all candidates, and publish `complete.json` last. Then implement plugin Source Snapshot/import and the Semantic Report before any 2.5D work.

Maintain `EVALS.md` and this status after every reviewed phase. Questions that code or existing documents can answer must be resolved mechanically. Q001-Q493 remain frozen unless a mechanically provable contradiction is found.

## Hard Stops

- Do not inspect, resume, migrate, or import the obsolete protocol-v2 task as v3 truth.
- Do not run a real provider task during the Prompt Grill.
- Do not call SenseNova, generate images, restore art routes, or begin 2.5D rendering.
- Do not invent Prompt or semantic behavior outside Q001-Q493.
- Frequent scoped commits and pushes are authorized as recorded in `DEVELOPMENT.md`; tag, release, clean, reset, restore, and historical-data deletion remain prohibited.
- Do not expose credentials, endpoints, private task paths, checkpoints, source snapshots, book content, model output, or plugin runtime data.

## Completion Path After Prompt Design

After the Prompt ADR is decision-complete: implement protocol v3 in the Runner and plugin, run fake-provider/schema/golden-vector verification, run one fresh private MiniMax-M3 v3 task with zero image calls, independently recompute selection in the plugin, import atomically with double freshness validation, accept the Semantic Report in Obsidian, then run both repositories' full tests and builds. Stop before 2.5D.

No code tests or builds were run for the documentation-only normalization that created this status file.
