# Upgrade Plan By Phases

## Goal

Upgrade the portfolio without mixing three major migrations in one shot:

- Next.js `15 -> 16`
- `next-intl` `3 -> 4`
- MUI `6 -> 7`

The plan is intentionally split so the app stays runnable after each phase.

## Current State

Current important versions detected in the repo:

- `next`: `15.5.14` installed, `16.2.2` latest
- `eslint-config-next`: `15.5.14` installed, `16.2.2` latest
- `next-intl`: `3.26.5` installed, `4.9.0` latest
- `@mui/material`: `6.5.0` installed, `7.3.9` latest
- `@mui/icons-material`: `6.5.0` installed, `7.3.9` latest
- `@mui/material-nextjs`: `6.5.0` installed, `7.3.9` latest
- `graphql-request`: `6.1.0` installed, `7.4.0` latest
- `sharp`: `0.33.5` installed, `0.34.5` latest

## Target Strategy

Use this final target, but do not jump to it in one PR:

- `next` -> `16.2.2`
- `eslint-config-next` -> `16.2.2`
- `react` / `react-dom` -> versions resolved by Next 16
- `next-intl` -> `4.x`
- `@mui/material`, `@mui/icons-material`, `@mui/material-nextjs` -> `7.x`
- safe minor dependencies upgraded first

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

- `middleware.js`
- `src/middleware.js`
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

Upgrade low-risk packages first to reduce noise later.

### Packages

- `sharp`
- `graphql`
- `prettier`
- `eslint-config-prettier`
- `@eslint/eslintrc`
- `tss-react`
- optionally `husky`, `next-sitemap`, `react-scroll`

### Commands

```bash
pnpm up sharp graphql prettier eslint-config-prettier @eslint/eslintrc tss-react
pnpm up husky next-sitemap react-scroll
```

### Risks

- formatter diffs
- minor config drift in lint tooling
- GraphQL typing/runtime changes if helper APIs shifted

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

1. `baseline-cleanup-and-safe-minors`
2. `upgrade-next-16-runtime`
3. `migrate-next-intl-v4`
4. `upgrade-mui-v7`
5. `tooling-majors-eslint-lint-staged`

## Dependency Order Summary

This is the exact order to follow:

1. stabilize current app
2. remove ambiguous migration leftovers
3. upgrade safe minors
4. upgrade `next` + `react` runtime
5. migrate `next-intl`
6. upgrade MUI
7. upgrade tooling majors

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
