# CLAUDE.md

## Project

LVTOR — Elevator Simulator.
The web app lives in `Web/` (Vue 3 + TypeScript + Vite + Pixi.js v8, tests with Vitest).

- Package manager: **pnpm** (never npm or yarn).
- Commands (run inside `Web/`): `pnpm dev`, `pnpm build`, `pnpm test`, `pnpm vitest run`.
- TypeScript is pinned to 6.x: TypeScript 7 (native/Go) drops the JS API that `vue-tsc` needs. Upgrade only once `vue-tsc` supports it.
- Deploy: `Dockerfile.web` (repo root, build context = repo root) builds `Web/` and serves `dist/` with nginx on `$PORT` (Railway).
- Domain classes go in `Web/src/domain/`; automated tests go in `Web/tests/`.

## Rules

- **Everything in the project must be in English**: code, identifiers, comments, test descriptions, commit messages, docs and UI text.
- Follow TypeScript naming conventions: `camelCase` for variables, properties, functions and methods; `PascalCase` for classes, types and interfaces; `UPPER_SNAKE_CASE` for module-level constants.
