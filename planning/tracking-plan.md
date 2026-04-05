# Upgrade Tracking Plan

Use this file while executing `UPGRADE-PLAN.md`.

## Legend

- `[ ]` not started
- `[-]` in progress
- `[x]` done
- `[!]` blocked

## Overall Status

- Current phase: `Phase 0 - Baseline Cleanup`
- Owner: `illich`
- Started at: `2026-04-05`
- Last updated at: `2026-04-05`
- Current branch: `feature/upgrade`

## Phase 0: Baseline Cleanup

### Status

- Phase status: `[-]`
- Notes:
  - Dev server is currently running on Next.js `15.5.14`.
  - Root locale routing is working through root-level `middleware.js`.
  - There is still a duplicate middleware file at `src/middleware.js` that should be removed or explicitly retired.
  - `next.config.js` already includes both `media.graphassets.com` and `us-east-1.graphassets.com`.
  - Remote SVG assets from Hygraph are still throwing `next/image` errors because SVG optimization is blocked by default.

### Checklist

- [ ] Run `pnpm lint`
- [ ] Run `pnpm build`
- [x] Run `pnpm dev`
- [x] Verify `/`
- [x] Verify `/en`
- [x] Verify `/es`
- [ ] Verify language switch
- [x] Review `middleware.js`
- [x] Review `src/middleware.js`
- [ ] Remove duplicate or ambiguous middleware implementation
- [x] Confirm image host config in `next.config.js`
- [ ] Confirm no stale Pages Router leftovers are interfering

### Issues / Findings

- Root-level `middleware.js` is the one currently compiled and handling rewrites.
- `src/middleware.js` still exists and creates ambiguity for future work.
- `GET /` returns `200` with `x-middleware-rewrite: /es`.
- `GET /en` returns `200` with `x-middleware-rewrite: /en`.
- `GET /es` returns `307` to `/` because `localePrefix: 'as-needed'` is active.
- `next.config.js` already includes the required Hygraph host `us-east-1.graphassets.com`.
- Remote SVG assets from Hygraph still trigger `next/image` runtime errors:
  - "type image/svg+xml but dangerouslyAllowSVG is disabled"
- The baseline is improved from the original broken state, but it is not fully clean yet.

### Decision Log

- Keep Phase 0 open until middleware duplication is removed.
- Treat remote SVG handling as a Phase 0 baseline issue because it affects runtime cleanliness.
- Do not begin upgrade phases until runtime is stable without known asset/middleware ambiguity.

### Exit Check

- [ ] Runtime stable
- [ ] Middleware behavior clear
- [ ] No duplicate middleware path active

## Phase 1: Safe Upgrades

### Status

- Phase status: `[ ]`
- Notes:

### Planned Commands

```bash
pnpm up sharp graphql prettier eslint-config-prettier @eslint/eslintrc tss-react
pnpm up husky next-sitemap react-scroll
```

### Checklist

- [ ] Upgrade safe packages
- [ ] Review lockfile changes
- [ ] Run `pnpm lint`
- [ ] Run `pnpm build`
- [ ] Run `pnpm dev`
- [ ] Verify GraphCMS content loads
- [ ] Verify images render
- [ ] Verify sitemap still generates on build

### Issues / Findings

- `None yet`

### Exit Check

- [ ] No runtime regressions
- [ ] No unexpected tooling regressions

## Phase 2: Next.js Runtime Upgrade

### Status

- Phase status: `[ ]`
- Notes:

### Planned Commands

```bash
pnpm up next@latest eslint-config-next@latest react@latest react-dom@latest
```

Optional:

```bash
npx @next/codemod@canary upgrade latest
```

### Files To Inspect

- `next.config.js`
- `middleware.js`
- `src/app/[locale]/layout.jsx`
- `src/components/Providers.jsx`
- `src/components/ScrollRestoration.jsx`
- `src/lib/graphcms.js`

### Checklist

- [ ] Upgrade Next runtime packages
- [ ] Review changes in `next.config.js`
- [ ] Review MUI App Router integration path
- [ ] Confirm middleware still compiles
- [ ] Run `pnpm lint`
- [ ] Run `pnpm build`
- [ ] Run `pnpm dev`
- [ ] Verify `/`
- [ ] Verify `/en`
- [ ] Verify `/es`
- [ ] Verify image rendering
- [ ] Verify GraphCMS SSR/revalidation behavior

### Issues / Findings

- `None yet`

### Exit Check

- [ ] Build passes on Next 16
- [ ] Middleware and routing still work
- [ ] No provider/runtime crashes

## Phase 3: next-intl v4 Migration

### Status

- Phase status: `[ ]`
- Notes:

### Planned Command

```bash
pnpm up next-intl@latest
```

### Files To Inspect

- `src/i18n/navigation.js`
- `src/i18n/routing.js`
- `src/i18n/request.js`
- `middleware.js`
- `src/components/Providers.jsx`
- `src/app/[locale]/layout.jsx`
- `src/components/ChangeLanguage.jsx`

### Checklist

- [ ] Upgrade `next-intl`
- [ ] Review navigation helper API
- [ ] Migrate `createSharedPathnamesNavigation` if required
- [ ] Review `NextIntlClientProvider` props
- [ ] Verify request config still works
- [ ] Verify middleware locale rewrite still works
- [ ] Run `pnpm lint`
- [ ] Run `pnpm build`
- [ ] Run `pnpm dev`
- [ ] Verify locale switch `es -> en`
- [ ] Verify locale switch `en -> es`
- [ ] Verify translated metadata

### Issues / Findings

- `None yet`

### Exit Check

- [ ] Locale routing stable
- [ ] Translation hooks stable
- [ ] Provider chain stable

## Phase 4: MUI 7 Upgrade

### Status

- Phase status: `[ ]`
- Notes:

### Planned Command

```bash
pnpm up @mui/material@latest @mui/icons-material@latest @mui/material-nextjs@latest
```

### Files To Inspect

- `src/app/[locale]/layout.jsx`
- `src/components/Providers.jsx`
- `src/theme.js`
- `src/components/**/*`

### Checklist

- [ ] Upgrade MUI packages
- [ ] Review `AppRouterCacheProvider` import path
- [ ] Review theme compatibility
- [ ] Review component props for deprecated usage
- [ ] Review import paths for unsupported deep imports
- [ ] Run `pnpm lint`
- [ ] Run `pnpm build`
- [ ] Run `pnpm dev`
- [ ] Verify navbar
- [ ] Verify drawer
- [ ] Verify cards
- [ ] Verify responsive layout
- [ ] Verify theme/colors/spacing

### Issues / Findings

- `None yet`

### Exit Check

- [ ] UI stable
- [ ] No MUI runtime/import errors
- [ ] Visual parity acceptable

## Phase 5: Tooling Majors

### Status

- Phase status: `[ ]`
- Notes:

### Planned Command

```bash
pnpm up eslint@latest lint-staged@latest
```

### Files To Inspect

- `eslint.config.mjs`
- `package.json`
- `.husky/*`

### Checklist

- [ ] Upgrade tooling majors
- [ ] Review eslint config compatibility
- [ ] Review lint-staged config compatibility
- [ ] Run `pnpm lint`
- [ ] Run `pnpm build`
- [ ] Test pre-commit hook flow

### Issues / Findings

- `None yet`

### Exit Check

- [ ] Lint workflow stable
- [ ] Hook workflow stable

## Blocker Log

| Date       | Phase   | Blocker                                                             | Impact                                             | Resolution                      |
| ---------- | ------- | ------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------- |
| 2026-04-05 | Phase 0 | Duplicate middleware files: `middleware.js` and `src/middleware.js` | Leaves routing ownership ambiguous before upgrades | Pending cleanup                 |
| 2026-04-05 | Phase 0 | Remote Hygraph SVG assets fail in `next/image`                      | Runtime is not clean enough for baseline freeze    | Pending image handling decision |

## Change Log

| Date       | Phase   | Change                                                | Result                                              |
| ---------- | ------- | ----------------------------------------------------- | --------------------------------------------------- |
| 2026-04-05 | Phase 0 | Added root-level `middleware.js`                      | `/` now rewrites correctly to default locale        |
| 2026-04-05 | Phase 0 | Added `us-east-1.graphassets.com` to `next.config.js` | Remote image host error resolved for non-SVG assets |

## Final Completion

- [ ] Phase 0 complete
- [ ] Phase 1 complete
- [ ] Phase 2 complete
- [ ] Phase 3 complete
- [ ] Phase 4 complete
- [ ] Phase 5 complete
- [ ] Final regression pass complete
- [ ] Ready for merge
