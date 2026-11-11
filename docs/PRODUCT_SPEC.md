# Bugaura — Product Specification

**Status:** Draft 0.1  
**Product promise:** From bug report to verified reproduction.

## 1. Problem

Bug reports often arrive as short descriptions such as "login is broken" or "the settings page turns white". The maintainer then has to ask for steps, environment details, expected behaviour, screenshots and logs. Even after receiving those details, the bug may not occur on the maintainer's machine.

The missing piece is a shared workflow for recording the original conditions, documenting reproduction attempts, comparing environments and verifying outcomes.

## 2. Product

Bugaura is a reproduction-management workspace connected to GitHub. It manages a bug's path from initial report through investigation and verification.

It complements GitHub Issues; it does not replace issue tracking, error monitoring, session replay or a full QA test-management suite.

## 3. Users

### Reporter
A developer, tester or user who experiences a problem and needs to provide useful, safe evidence.

### Investigator
A developer or maintainer who attempts to reproduce the reported behaviour and records what happened.

### Repository maintainer
A person responsible for triaging reports, coordinating investigation and confirming a fix.

One person may occupy all three roles in an individual project.

## 4. Core domain concepts

### Reproduction Case
The central record. Contains title, description, expected result, actual result, ordered steps, affected version, environment snapshot, attachments, visibility and linked GitHub issue.

### Environment Snapshot
A timestamped record of relevant environment properties, such as operating system, browser, runtime, application version and user-supplied configuration. Collection must be explicit and limited to fields that are useful.

### Reproduction Attempt
A distinct investigation run by a person. Records the environment used, steps followed, outcome, notes and evidence. Attempts are immutable history entries; corrections should be appended rather than silently rewriting history.

### Evidence
A user-provided or explicitly captured attachment such as a screenshot or selected log excerpt. Evidence must have ownership, visibility and retention rules. Sensitive values should be redacted before sharing.

### Verification Event
A recorded outcome such as reproduced, not reproduced, partially reproduced, fixed and retested, or still occurring. The event records who performed it, when, against which case/version, and the supporting attempt.

## 5. Primary workflow

1. Reporter creates a case.
2. Bugaura validates required fields and highlights missing reproduction details.
3. Reporter reviews the environment information and attached evidence before sharing.
4. Case is optionally linked to a GitHub issue.
5. Investigator reviews the case and records a reproduction attempt.
6. Bugaura compares the reporter's and investigator's available environment fields.
7. Investigator records an outcome with notes and supporting evidence.
8. After a proposed fix, a new attempt records whether the original steps still trigger the problem.
9. The case timeline preserves the investigation history.

## 6. MVP scope

### P0 — Required for first usable release

- Authentication and user identity
- Create, view, edit and archive reproduction cases
- Structured report fields: summary, description, expected result, actual result and ordered reproduction steps
- Explicitly reviewed environment snapshot
- Evidence attachments with access controls
- Record multiple reproduction attempts
- Attempt outcomes and notes
- Side-by-side environment comparison for available fields
- Case timeline and status history
- Responsive web experience
- GitHub sign-in and a GitHub App integration plan with least-privilege permissions

### P1 — GitHub integration release

- Install GitHub App on selected repositories
- Link a case to an existing issue
- Create an issue from a case
- Publish a concise case summary to an issue comment
- Receive webhooks for linked issue changes
- Keep GitHub issue state and Bugaura case state distinct, with explicit synchronization rules

### Later, not MVP

- Browser extension for consent-based screenshots and selected diagnostic capture
- Optional console-error and network-metadata capture
- AI-assisted missing-information prompts and investigation suggestions
- Browser automation or managed reproduction environments
- Desktop and mobile application capture
- Additional issue trackers

## 7. Explicit non-goals

- Replacing GitHub Issues
- Building a session replay engine
- Claiming automatic root-cause detection
- Automatically executing arbitrary code from a report
- Collecting cookies, passwords, tokens, private files or full network payloads
- Marking a bug as reproduced or fixed based only on an AI-generated guess
- Building a general-purpose QA test-management platform

## 8. Status model

Suggested case statuses:

- New
- Needs information
- Ready to investigate
- Investigating
- Reproduced
- Not reproduced
- Partially reproduced
- Fix submitted
- Fixed and verified
- Closed

A case status is a summary. Individual attempts and verification events remain separately recorded so that status changes do not erase evidence.

## 9. Privacy and security requirements

- Collect only necessary diagnostic fields.
- Explain what is collected before collection.
- Let reporters inspect and remove evidence before submission.
- Keep private cases and attachments private by default.
- Enforce repository and case access on the server, not only in the UI.
- Redact likely secrets from logs and previews; never promise perfect automatic redaction.
- Use least-privilege GitHub App permissions.
- Verify webhook signatures and make webhook processing idempotent.
- Keep credentials and tokens out of logs, issue comments and client bundles.
- Define attachment size limits, retention and deletion behaviour before public launch.

## 10. Differentiation hypothesis

Bugaura should differentiate through a traceable reproduction lifecycle:

1. The original reported conditions are preserved.
2. Each investigator attempt is recorded independently.
3. Environment differences are made visible.
4. Outcomes are tied to evidence.
5. Fix verification reuses the original reproduction steps.

This is a hypothesis to validate with real developers and maintainers, not a claim that no competing product offers related capabilities.

## 11. Success measures

- Time from report creation to first reproduction attempt
- Percentage of cases with complete reproduction steps
- Number of clarification exchanges per case
- Time to a confirmed reproduction
- Percentage of fixes with a recorded retest
- Reporter and maintainer completion rates

## 12. Open product decisions

These require product-owner input before implementation:

- Visual direction, colour system, typography and logo
- Navigation and dashboard layout
- Case creation and investigation interaction patterns
- Public, unlisted-link and private sharing rules
- Initial supported application scope
- Support contact address for public release and GitHub Developer Program requirements
- Final license and contribution policy

## 13. Delivery principle

Build in small, verifiable stages. Do not begin the visual interface until its direction is agreed. Do not add a feature merely because it is technically possible; each feature must support the reproduction lifecycle.
