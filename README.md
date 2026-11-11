# Bugaura

**A reproduction workspace for software teams.** Bugaura connects the original report, environment, independent reproduction attempts, evidence, and fix verification.

## Application

The `build/nextjs-foundation` branch replaces the standalone HTML prototype with a Next.js App Router application using TypeScript and Tailwind CSS.

### Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run typecheck
npm run build
```

Copy `.env.example` to `.env.local` when backend integrations are configured. Never commit real credentials.

## Current implementation boundary

The workspace interface and interactions are implemented, but case rows and metrics are sample data. Creating a case currently changes browser memory only. Authentication, persistent storage, evidence uploads, team permissions, and GitHub integration are not wired yet. These require a configured Supabase project and GitHub App credentials; no fake connected state is shown.

See [Product specification](docs/PRODUCT_SPEC.md) and [Interface direction](docs/INTERFACE_DIRECTION.md).
