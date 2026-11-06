# ORBIT Creative Social Design System

## Identity

Light-first, friendly, creative, rounded, spacious and accessible. Avoid hard-coded colors in feature components.

## Color tokens

| Token | Value | Intended use |
| --- | --- | --- |
| `--orbit-cream` | `#FFF9F3` | App background |
| `--orbit-coral` | `#FF6B57` | Accent and decoration |
| `--orbit-lavender` | `#A78BFA` | Secondary accent |
| `--orbit-ink` | `#25212B` | Main text and dark surfaces |
| `--orbit-sand` | `#F2E9E2` | Subtle panels |
| `--orbit-surface` | `#FFFFFF` | Cards |
| `--orbit-muted` | `#635C68` | Secondary text |
| `--orbit-focus` | `#7853D5` | Keyboard focus ring |

Tailwind 4 utilities are exposed via `@theme inline` in `src/app/globals.css`. Examples: `bg-cream`, `text-ink`, `text-coral`, `bg-surface`, `text-muted`.

Do not assume accent colors meet contrast requirements for small text on white. Use ink for primary copy, and verify interactive controls against WCAG contrast targets.

## Typography

Start with the system sans stack to avoid external font loading. Use bold, tight-tracked display headings and readable body copy. Preserve readable line heights and responsive type scaling.

## Layout

Prefer mobile-first Tailwind responsive utilities. Content max width on the landing page is `max-w-6xl`. Keep comfortable touch targets and keyboard-visible focus.

## Motion

Animations are decorative only, never essential to understanding. Respect `prefers-reduced-motion`.

## Future work

Phase 1C will formalize Button, Card, Avatar, Badge and Input components and test their states. This phase establishes tokens, not a complete component library.
