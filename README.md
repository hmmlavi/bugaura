# Bugaura

**From bug report to verified reproduction.**

Bugaura helps developers and maintainers turn vague bug reports into structured, evidence-backed reproduction cases.

Instead of stopping at collecting a description, Bugaura tracks the conditions under which a bug occurs, the attempts made to reproduce it, differences between environments, and whether a fix has actually been verified.

> A bug report says what went wrong. Bugaura helps establish how to make it happen again.

## Product direction

Bugaura is planned as a hybrid product:

- A standalone web workspace for reporters and maintainers.
- A GitHub integration that connects reproduction cases with repository issues.
- A later, optional browser capture experience for collecting consent-based diagnostic evidence.

The initial product is focused on **reproduction management**, not automated root-cause claims or a replacement for GitHub Issues.

## Core workflow

1. Create a reproduction case with expected and actual results.
2. Record exact steps, environment details and optional evidence.
3. Link the case to a GitHub issue.
4. Let a developer record one or more reproduction attempts.
5. Compare relevant environment differences.
6. Track the outcome: reproduced, not reproduced, partially reproduced, fixed, or still occurring.
7. Preserve an evidence timeline so conclusions are traceable.

## Product principles

- **Evidence over guesses:** AI suggestions must never be presented as verified findings.
- **Consent and privacy:** diagnostic collection is explicit, minimal and reviewable.
- **GitHub-first:** integrate with repositories and issues without rebuilding issue tracking.
- **Useful for individuals and teams:** support personal projects as well as maintainer workflows.
- **Honest status:** a bug is not marked reproduced or fixed without a recorded verification attempt.

## Project status

Early product foundation. Product specification, UX direction, technical architecture and MVP boundaries are being defined before implementation.

## Planned capabilities

- Structured reproduction cases
- Environment fingerprints
- Reproduction attempt tracking
- Reporter-versus-maintainer environment comparison
- Evidence attachments and redaction
- Case timeline and verification status
- GitHub App integration, issue linking and webhook synchronization

## Development

Implementation has not started. Decisions about visual identity, interface layout and interaction patterns will be made before the UI is built.

## License

To be decided before the first public release.
