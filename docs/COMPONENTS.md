# ORBIT UI Component Library

Phase 1C introduces reusable, typed, accessible primitives. Import from individual files in `src/components/ui`.

- **Button:** `variant` primary/secondary/outline/ghost, `size` sm/md/lg, disabled and loading state.
- **Card:** semantic article/section/div wrapper with optional padding.
- **Avatar:** name initials fallback and optional image URL; remote image validation is a later media-layer concern.
- **Badge:** neutral/coral/lavender/success status labels.
- **Input:** visible label, optional hint, validation error and accessible descriptions.

These are server-compatible components; interactive consumers can render them from client components. The Input component uses React `useId` for stable accessible IDs.

Do not assume a demo button performs an action without an explicit handler. Component unit tests and full browser verification are deferred at the user's request; they remain necessary before production release.
