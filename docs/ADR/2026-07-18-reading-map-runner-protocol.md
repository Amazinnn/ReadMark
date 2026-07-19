# ADR: External Runner And Protocol v2 Boundary

Status: superseded for semantic artifacts by `2026-07-19-pre-render-semantic-network.md`; retained for historical provider/process boundary context.

Protocol-v2 Source Units, Semantic Revisions, directed relation types, and import compatibility in this ADR are not current v3 requirements. The v3 ADR is authoritative whenever the two documents disagree.

## Decision

ReadMark and the Companion Runner communicate through versioned JSON artifacts. The plugin produces a deterministic Source Snapshot from local Markdown. The Runner produces confirmations, checkpoints, three Semantic Revisions, quality reports, a Selection Report, and one selected revision. Neither repository imports the other's source code or runtime state.

The Runner supports user-configured OpenAI Compatible and Anthropic Compatible text endpoints. Text and image providers are independent. The current local operating preference is MiniMax-M3 for text and SenseNova u1-fast for images, but new users receive no mandatory vendor preset.

## Boundary

- The plugin owns Markdown parsing, source IDs, exact source coordinates, hashes, task export, child-process orchestration, import validation, Book World storage, scoring, and the central Obsidian view.
- The Runner owns provider configuration, model calls, bounded batching, checkpoint recovery, attribute integration, three semantic runs, audits, selection, and optional art generation.
- Every protocol v2 Source Unit must receive exactly one Source Disposition. Semantic evidence may reference exported source IDs only.
- The plugin re-reads the Current Book and rebuilds the Source Snapshot before import. Runner-supplied text is never trusted as current source truth.
- Code and formula evidence must retain explanatory prose context.
- ReadMark may receive a credential transiently and pass it through Runner stdin. It never persists or echoes the credential.
- The Runner alone stores plaintext credentials in ignored local `config.json` and must keep them out of arguments, stdout, stderr, checkpoints, reports, task artifacts, and exceptions.
- The plugin stores only the Runner installation directory and optional Node override. The Runner owns its private Task Workspace.
- The image HTTP template permits a fixed set of placeholders and cannot execute code, read files, or interpolate arbitrary environment variables.

## Checkpoint Provenance

Checkpoints are keyed by deterministic stage inputs and prompt versions. Provider changes should eventually add a sanitized Provider Profile fingerprint containing protocol, endpoint host/path identity, model, and non-secret generation settings.

The frozen run 1 predates this fingerprint and contains both MiniMax-M3 and SenseNova Flash-Lite source checkpoints. This is a known provenance limitation, not a pure-provider result. It must be disclosed during acceptance and must not be hidden by rewriting reports.

## Operational Supervisor

A local PowerShell Supervisor may resume one task, auto-confirm an integrated attribute proposal, wait through bounded transient failures, and detect final completion. It is a private development aid under the ignored Runner workspace, not a public service and not part of the protocol contract. Product orchestration remains inside the Obsidian plugin.

## Consequences

The boundary keeps credentials and expensive long-text work outside Obsidian, supports provider replacement, permits deterministic fake-provider tests, and makes stale or malformed output rejectable before it reaches reading records. It also creates two explicit operational costs: Node.js must be installed, and private task artifacts require lifecycle and recovery handling.

Provider-independent checkpoints reduce repeated cost, but without a Provider Profile fingerprint they can obscure mixed provenance. Beta.3 acceptance therefore requires human disclosure now and a future schema-compatible fingerprint improvement.
