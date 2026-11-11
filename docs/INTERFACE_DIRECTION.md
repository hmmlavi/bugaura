# Interface direction

## Approved visual decisions

- Product personality: modern and expressive, with a polished developer-tool feel.
- Theme: dark and light, manually switchable; dark is the initial default.
- Accent: monochrome. Use neutral contrast, borders, typography and surface elevation instead of a chromatic brand accent.
- Layout: hybrid workspace. A persistent navigation rail and case list are combined with contextual panels, overlays and keyboard-first actions.

## Navigation

- Overview
- All Cases
- My Cases
- Assigned to Me
- Reproduced
- Needs Investigation
- GitHub
- Settings

The initial prototype groups these into workspace, investigation and integration areas. The Settings route is represented in navigation; its full settings experience is not implemented yet.

## Interface principles

1. Make the case and its current evidence the primary object.
2. Keep the navigation compact and persistent.
3. Use command search for fast navigation and creation.
4. Make status legible without relying on colour alone.
5. Keep dense data readable through spacing, hierarchy and restrained typography.
6. Support keyboard and pointer interactions.
7. Preserve a usable layout on narrow screens.
8. Respect reduced motion and accessibility preferences as the prototype matures.

## Prototype scope

The first UI slice includes an overview dashboard, sample case queue, activity feed, theme toggle, command palette and create-case dialog. It is a frontend-only interaction prototype.

It deliberately does not imply that sample metrics or activity are real. The create-case action is session-local and is not persisted to a server.

## Next implementation milestones

1. Replace sample data with typed domain models and persistent storage.
2. Build case detail and investigation timeline.
3. Add structured reproduction steps, attempts and environment snapshots.
4. Add evidence upload with explicit privacy controls.
5. Implement authentication and workspace membership.
6. Add GitHub App authorization, issue linking and webhook synchronization.
7. Add automated tests, accessibility checks and deployment configuration.

## Brand treatment

Use a small geometric mark and a lowercase wordmark. Keep the core palette neutral across both themes. Avoid decorative gradients, saturated status colours and excessive glass effects; use depth sparingly so the interface remains calm and technical.
