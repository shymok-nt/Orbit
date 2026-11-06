# Architecture

## Guiding principles

- Start with a modular monolith; introduce complexity only when justified.
- Keep routes in `src/app`, reusable UI in `src/components`, feature code in `src/features`, shared utilities in `src/lib` and domain types in `src/types` as those modules become necessary.
- Keep presentation components independent of data transport.
- Use strict TypeScript, accessible markup and mobile-first responsive styling.
- Treat all early social interactions as demo-only until persistent storage and authentication exist.
- Never commit credentials, tokens or production secrets.

## Current implementation

Next.js App Router, React, TypeScript and Tailwind CSS. The landing page is intentionally static. No backend, API, database or real-time messaging has been implemented.
