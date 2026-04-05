# Upgrade Plan By Phases

## Goal

Upgrade the portfolio without mixing three major migrations in one shot:

- Next.js `15 -> 16`
- `next-intl` `3 -> 4`
- MUI `6 -> 7`

The plan is intentionally split so the app stays runnable after each phase.

## Current State

Refresh with `pnpm outdated` before each phase; approximate targets below.

## Target Strategy

Use this final target, but do not jump to it in one PR:

- `next` -> `16.x` (align `eslint-config-next`)
- `react` / `react-dom` -> versions required by that Next release
- `next-intl` -> `4.x`
- `@mui/material`, `@mui/icons-material`, `@mui/material-nextjs` -> `7.x`
- `graphql-request` -> `7.x` (done before Phase 2 in this repo)
- safe minors / non-major bumps first where listed in Phase 1

## Full major-version matrix (dependency ↔ latest major)

Everything in the project that still has a **newer major** on npm (or that was upgraded explicitly), and what to watch when you get there.

| Package                | Role         | Target major           | Phase             | Breaking / migration notes                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------------ | ---------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                 | framework    | 16.x                   | 2                 | Turbopack defaults, config deprecations, caching/middleware semantics; verify [`next.config.js`](next.config.js), [`middleware.js`](middleware.js).                                                                                                                                                                                                                              |
| `eslint-config-next`   | lint         | 16.x                   | 2                 | Must match Next major; may surface new rules — fix or extend [`eslint.config.mjs`](eslint.config.mjs).                                                                                                                                                                                                                                                                           |
| `react`, `react-dom`   | runtime      | whatever Next 16 peers | 2                 | Do not float independently; use versions `pnpm` resolves with `next@16`.                                                                                                                                                                                                                                                                                                         |
| `next-intl`            | i18n         | 4.x                    | 3                 | Replace deprecated navigation helpers; `createSharedPathnamesNavigation` → `createNavigation` where required; [`src/i18n/navigation.js`](src/i18n/navigation.js), [`middleware.js`](middleware.js), [`src/components/Providers.jsx`](src/components/Providers.jsx), [`ChangeLanguage`](src/components/ChangeLanguage.jsx); re-test default locale + `localePrefix: 'as-needed'`. |
| `@mui/material`        | UI           | 7.x                    | 4                 | `AppRouterCacheProvider` in `src/app/[locale]/layout.jsx`: import path must match Next + MUI docs (e.g. v15-appRouter → v16 after Next 16); theme/component deprecations; validate [tss-react](https://github.com/garronej/tss-react) with MUI 7.                                                                                                                                |
| `@mui/icons-material`  | UI           | 7.x                    | 4                 | Keep version-aligned with `@mui/material`.                                                                                                                                                                                                                                                                                                                                       |
| `@mui/material-nextjs` | SSR cache    | 7.x                    | 4                 | Same as MUI core; Next integration entry must match installed Next + MUI docs.                                                                                                                                                                                                                                                                                                   |
| `graphql-request`      | GraphQL HTTP | 7.x                    | **1 (extension)** | Package is **ESM-first** (`"type": "module"`) but publishes **dual CJS** for `require`. [`GraphQLClient`](src/lib/graphcms.js) + `.request(doc, vars)` remains supported (legacy API). Optional style: top-level `request({ url, document, variables, requestHeaders })`. Peer **`graphql` 14–16** only — stay on `graphql@16` until upstream widens peers.                      |
| `eslint`               | lint         | 10.x                   | 5                 | ESLint 10 config/CLI changes — re-read release notes; [`eslint.config.mjs`](eslint.config.mjs), hooks.                                                                                                                                                                                                                                                                           |
| `lint-staged`          | git hooks    | 16.x                   | 5                 | Check release notes for CLI/config differences; [`package.json`](package.json) `lint-staged` block.                                                                                                                                                                                                                                                                              |

**Already on latest major (no extra major jump planned here):** `@emotion/react`, `@emotion/styled`, `graphql` (npm `latest` is 16.x), `husky`, `next-sitemap`, `prettier`, `react-scroll`, `sharp`, `tss-react`, `@eslint/eslintrc`, `eslint-config-prettier` — still run `pnpm outdated` occasionally for minors.

**Intentionally not in matrix:** anything listed under [Non-Goals](#non-goals).

## Non-Goals

Do not mix these into the migration unless they become necessary:

- TypeScript migration
- design refactor
- styling architecture rewrite
- Pigment CSS adoption
- app structure rewrite

## Rules For Execution

1. Only one major migration per phase.
2. The app must run after every phase.
3. Run verification after each package bump, not only at the end.
4. Do not update `next`, `next-intl`, and `@mui/*` in the same phase.
5. Keep commits small and phase-scoped.

## Baseline Commands

Run these before starting any upgrade work:

```bash
pnpm lint
pnpm build
pnpm dev
```

Manual checks:

- open `/`
- open `/en`
- open `/es`
- verify language switch
- verify home content loads from GraphCMS
- verify images render

## Phase 0: Baseline Cleanup

### Goal

Freeze a clean and reproducible starting point before upgrades.

### Work

1. Confirm the app runs in the current state.
2. Remove migration leftovers and ambiguous files.
3. Make sure routing/middleware behavior is clear and singular.

### Files to Review

- `middleware.js` (project root only)
- `next.config.js`
- `src/app/[locale]/layout.jsx`
- `src/app/[locale]/page.jsx`
- `src/components/Providers.jsx`
- `src/i18n/navigation.js`
- `src/i18n/request.js`

### Actions

1. Keep only one active middleware implementation.
2. Remove or archive obsolete Pages Router artifacts if they still interfere with dev/build.
3. Confirm `next.config.js` contains the required image hosts.
4. Ensure there are no stale files causing mixed `pages` + `app` runtime issues.

### Verification

```bash
pnpm lint
pnpm build
pnpm dev
```

### Exit Criteria

- `/` renders correctly
- `/en` renders correctly
- `/es` renders correctly
- no unexpected runtime errors from i18n or images
- no duplicate middleware path left active

## Phase 1: Safe Upgrades

### Goal

Upgrade low-risk packages first to reduce noise later, then **`graphql-request` v7** before touching Next (Phase 2).

### Packages (minors / safe bumps)

- `sharp`
- `graphql`
- `prettier`
- `eslint-config-prettier`
- `@eslint/eslintrc`
- `tss-react`
- optionally `husky`, `next-sitemap`, `react-scroll`

### Commands (safe bumps)

```bash
pnpm up sharp graphql prettier eslint-config-prettier @eslint/eslintrc tss-react
pnpm up husky next-sitemap react-scroll
```

To force latest in range: append `@latest` per package as needed.

### Phase 1 extension: `graphql-request` v6 → v7 (before Phase 2)

**Command:**

```bash
pnpm add graphql-request@latest
```

**Code in this repo:** [`src/lib/graphcms.js`](src/lib/graphcms.js) uses `GraphQLClient` and `.request(QUERY, { locale })` — **still valid in v7** (legacy class API unchanged for this usage).

**Upstream breaking themes (if something breaks in another project):**

- ESM-first package; TypeScript projects need `moduleResolution` `bundler` or `node16`/`nodenext`.
- Peer dependency **`graphql` versions 14–16** only (do not upgrade to a hypothetical `graphql@17` until `graphql-request` widens peers).
- Prefer `request({ url, document, variables, requestHeaders })` for tree-shaking if you drop the class.

**Verification:** same as Phase 1 — `pnpm lint`, `pnpm build` (SSG must still hydrate Hygraph data).

### Risks

- formatter diffs
- minor config drift in lint tooling
- `graphql-request` v7: rare bundler edge cases with pure ESM (Next 15 resolves this repo fine via dual `exports`)

### Verification

```bash
pnpm lint
pnpm build
pnpm dev
```

Manual checks:

- homepage content loads
- images still render
- sitemap generation still works on build

### Exit Criteria

- no runtime regressions
- no config breakage from updated tooling

## Phase 2: Next.js Runtime Upgrade

### Goal

Move the platform to Next 16 while keeping `next-intl` and MUI on their current major versions for now.

### Packages

- `next`
- `eslint-config-next`
- `react`
- `react-dom`

### Commands

```bash
pnpm up next@latest eslint-config-next@latest react@latest react-dom@latest
```

Optional codemod path:

```bash
npx @next/codemod@canary upgrade latest
```

### Files to Review

- `next.config.js`
- `middleware.js`
- `src/app/[locale]/layout.jsx`
- `src/components/Providers.jsx`
- `src/components/ScrollRestoration.jsx`
- `src/lib/graphcms.js`

### Known Risk Areas

- `@mui/material-nextjs/v15-appRouter` usage in `src/app/[locale]/layout.jsx`
- App Router behavior changes in Next 16
- config changes in `next.config.js`
- build output behavior around middleware and cache

### What To Check

1. MUI App Router integration path still matches the installed package.
2. Middleware still compiles and rewrites `/` correctly.
3. GraphCMS fetches still work during SSR and revalidation.
4. React 19 pairing remains valid after the upgrade.

### Verification

```bash
pnpm lint
pnpm build
pnpm dev
```

Manual checks:

- `/`
- `/en`
- `/es`
- language switch
- project cards and tech cards images
- metadata and layout rendering

### Exit Criteria

- `pnpm build` passes on Next 16
- routing and middleware still work
- MUI provider chain is stable

## Phase 3: next-intl v4 Migration

### Goal

Upgrade `next-intl` after the framework runtime is stable.

### Package

- `next-intl`

### Command

```bash
pnpm up next-intl@latest
```

### Files to Update

- `src/i18n/navigation.js`
- `src/i18n/routing.js`
- `src/i18n/request.js`
- `middleware.js`
- `src/components/Providers.jsx`
- `src/app/[locale]/layout.jsx`
- `src/components/ChangeLanguage.jsx`

### Required Migration Topics

1. Replace deprecated navigation helpers if needed.
2. Review `createSharedPathnamesNavigation` usage and move to `createNavigation` if required by the installed version.
3. Review `NextIntlClientProvider` props and remove obsolete props only after runtime verification.
4. Re-test locale switching and pathname replacement logic.
5. Verify request config and locale resolution still work with middleware.

### Most Likely Breakpoints

- `src/i18n/navigation.js`
- `src/components/ChangeLanguage.jsx`
- `src/components/Providers.jsx`
- locale rewrite behavior from `/` to default locale

### Verification

```bash
pnpm lint
pnpm build
pnpm dev
```

Manual checks:

- locale switch from `es -> en`
- locale switch from `en -> es`
- direct hit to `/`
- direct hit to `/en`
- direct hit to `/es`
- translated metadata renders correctly

### Exit Criteria

- no provider/runtime errors from `next-intl`
- language switch remains functional
- route generation and locale rewrite remain correct

## Phase 4: MUI 7 Upgrade

### Goal

Upgrade MUI after framework and i18n are already stable.

### Packages

- `@mui/material`
- `@mui/icons-material`
- `@mui/material-nextjs`

### Command

```bash
pnpm up @mui/material@latest @mui/icons-material@latest @mui/material-nextjs@latest
```

### Files to Review

- `src/app/[locale]/layout.jsx`
- `src/components/Providers.jsx`
- `src/theme.js`
- all components using MUI primitives

### Areas To Audit

1. `AppRouterCacheProvider` import path/version compatibility.
2. Theme compatibility.
3. Deprecated prop usage in MUI components.
4. Styling compatibility with `tss-react`.
5. Any deep import patterns that MUI 7 may reject.

### Explicit Non-Goal For This Phase

Do not adopt Pigment CSS in the same phase.

### Verification

```bash
pnpm lint
pnpm build
pnpm dev
```

Manual checks:

- navbar
- drawer
- cards
- responsive layout
- theme colors
- layout spacing

### Exit Criteria

- app looks the same or intentionally close
- no broken styles
- no MUI provider/import runtime errors

## Phase 5: Tooling Majors

### Goal

Upgrade dev tooling only after runtime work is complete.

### Packages

- `eslint`
- `lint-staged`

### Command

```bash
pnpm up eslint@latest lint-staged@latest
```

### Files to Review

- `eslint.config.mjs`
- `package.json`
- `.husky/*`

### Risks

- config schema changes
- changed CLI behavior
- hook failures

### Verification

```bash
pnpm lint
pnpm build
```

Then test a staged commit locally to confirm hooks still execute correctly.

### Exit Criteria

- lint config is stable
- pre-commit workflow still works

## Suggested PR Split

1. `baseline-cleanup-and-safe-minors` (include `graphql-request@7` here or a tiny follow-up PR before Phase 2)
2. `upgrade-next-16-runtime`
3. `migrate-next-intl-v4`
4. `upgrade-mui-v7`
5. `tooling-majors-eslint-lint-staged`

## Dependency Order Summary

This is the exact order to follow:

1. stabilize current app
2. remove ambiguous migration leftovers
3. upgrade safe minors (Phase 1)
4. upgrade `graphql-request` to v7 (Phase 1 extension — before Next)
5. upgrade `next` + `react` runtime (Phase 2)
6. migrate `next-intl` (Phase 3)
7. upgrade MUI (Phase 4)
8. upgrade tooling majors (Phase 5)

## Rollback Policy

If a phase fails:

1. stop in that phase
2. do not continue to the next one
3. document the exact blocker
4. isolate whether it is config, runtime, routing, or UI related
5. fix or revert only that phase before proceeding

## Minimum Test Matrix Per Phase

Run this after every phase:

```bash
pnpm lint
pnpm build
pnpm dev
```

Manual matrix:

- `/`
- `/en`
- `/es`
- locale switch
- GraphCMS content
- image rendering
- responsive navbar
- production build
