# Bugaura

**From bug report to verified reproduction.**

Bugaura helps developers and maintainers turn vague bug reports into structured, evidence-backed reproduction cases.

Instead of stopping at collecting a description, Bugaura tracks the conditions under which a bug occurs, the attempts made to reproduce it, differences between environments, and whether a fix has actually been verified.

> A bug report says what went wrong. Bugaura helps establish how to make it happen again.

## Product direction

Bugaura is a hybrid product:

- A standalone web workspace for reporters and maintainers.
- A GitHub integration that connects reproduction cases with repository issues.
- A later, optional browser capture experience for collecting consent-based diagnostic evidence.

The initial product focuses on **reproduction management**, not automated root-cause claims or replacing GitHub Issues.

## Current preview

The repository now includes the first interactive workspace prototype:

- Monochrome interface with dark and light themes.
- Hybrid navigation: persistent workspace sidebar, central case queue and contextual panels.
- Overview metrics, recent cases and activity timeline.
- Command palette with `Ctrl/Cmd + K`.
- New-case modal and responsive layouts.

Run it locally by opening `index.html` in a browser, or use VS Code Live Server.

**Prototype note:** dashboard entries are sample data. Creating a case currently changes the page in the current browser session only. Authentication, persistence, real GitHub connectivity, uploads and multi-user collaboration are not implemented yet.

## Core product workflow

1. Create a reproduction case with expected and actual results.
2. Record exact steps, environment details and optional evidence.
3. Link the case to a GitHub issue.
4. Record one or more independent reproduction attempts.
5. Compare relevant environment differences.
6. Track the outcome: reproduced, not reproduced, partially reproduced, fixed, or still occurring.
7. Preserve an evidence timeline so conclusions are traceable.

## Product principles

- **Evidence over guesses:** AI suggestions must never be presented as verified findings.
- **Consent and privacy:** diagnostic collection is explicit, minimal and reviewable.
- **GitHub-first:** integrate with repositories and issues without rebuilding issue tracking.
- **Useful for individuals and teams:** support personal projects as well as maintainer workflows.
- **Honest status:** a bug is not marked reproduced or fixed without a recorded verification attempt.

## Project documentation

- [Product specification](docs/PRODUCT_SPEC.md)
- [Interface direction](docs/INTERFACE_DIRECTION.md)

## Planned capabilities

- Structured reproduction cases
- Environment fingerprints
- Reproduction attempt tracking
- Reporter-versus-maintainer environment comparison
- Evidence attachments and redaction
- Case timeline and verification status
- GitHub App integration, issue linking and webhook synchronization

## License

To be decided before the first public release.
