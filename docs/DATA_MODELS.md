# Phase 1E — Typed mock social data

The `src/features/social` feature module holds UI-facing TypeScript models and deterministic fixture data.

- `types.ts`: `UserProfile`, `World`, `Post`, `Notification` and typed IDs/date strings.
- `fixtures.ts`: clearly fictional, read-only-intent sample records with stable identifiers and ISO timestamps.
- `repository.ts`: read-only in-memory adapter with a `SocialRepository` interface.
- `selectors.ts`: joins posts with authors and worlds using IDs, and exposes featured Worlds.

No database, authentication, persistence, networking, real notifications, or live interaction exists in Phase 1E. Fixture timestamps are static, not relative to current time. Consumers must not mutate records returned by the demo repository. Future API adapters should implement the same contracts or introduce an explicit versioned migration.

Automated checks and browser review are deferred at the user's request and remain necessary before production.
