# Phase 1D — Application shell

The public landing page remains at `/`. The early app preview lives under `/app` and has a dedicated nested layout.

- `src/components/shell/app-shell.tsx`: shared sidebar, top bar, responsive bottom navigation and active route state.
- `src/components/shell/navigation.ts`: one source of truth for primary routes.
- `src/components/shell/page-intro.tsx`: shared heading and intro presentation.
- `src/app/app/layout.tsx`: Next.js App Router nested layout.
- `/app`, `/app/explore`, `/app/worlds`, `/app/notifications`, `/app/profile`: placeholder pages.

Navigation links work. Search is a navigation shortcut to Explore, not a working search input. Profile is explicitly a guest preview; no authentication, real data, posting or notification delivery is implied.

Keyboard users can skip to main content; current navigation has `aria-current`; mobile uses a safe-area-aware bottom bar. The visual and automated verification of this phase is deferred at the user's request.
