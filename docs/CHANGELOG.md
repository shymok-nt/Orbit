# Unreleased — Split Landing and Auth UI

- Replaced public landing page with a two-column layout: ORBIT branding on the left and Sign Up / Sign In tabs on the right.
- Added responsive auth preview form with labeled fields and a clear nonfunctional notice; submissions are prevented and no credentials are sent.
- Preserved /app demo and its existing routes. Real authentication remains planned for Phase 2.
- Automated and browser verification deferred at the user's request.

# Unreleased — Phase 1E Typed Mock Data

- Added typed user, world, post and notification domain contracts.
- Added deterministic fixtures, read-only demo repository and feed selectors.
- Migrated dashboard sample posts and featured Worlds to the shared data module.
- Added data model documentation; automated checks remain deferred.

## Phase 1D.1 UI Refinement

- Fixed global anchor styling overriding Tailwind text colors, including the landing CTA.
- Refined application shell spacing and desktop navigation styling.
- Replaced sparse dashboard placeholder with a structured sample feed, discovery rail and clearly labeled nonfunctional demo content.
- Visual and automated verification remain pending.

## Phase 1D

- Added responsive application shell, desktop sidebar, top bar and mobile bottom navigation.
- Added five routed app preview pages with clear placeholder messaging.
- Preserved public landing page and linked it to the app preview.
- Added accessibility-aware navigation and application shell documentation.
- Full testing deferred at user's request.

# Changelog

## Unreleased — Phase 1B

- Centralized Creative Social color, spacing, radius and shadow tokens.
- Migrated landing page from hard-coded palette to semantic Tailwind utilities.
- Added reduced-motion-aware decorative animation.
- Explicitly configured Turbopack root and aligned TypeScript options with Next.js 16.
- Added design-system usage notes.

## Phase 1A

- Initialized Next.js application foundation.
- Added responsive ORBIT landing screen and initial visual palette.
- Added project documentation and local validation commands.
- Developer reported clean audit, lint, typecheck and production build; browser visual review remains a separate check.
