# TypeScript estricto — plan técnico

## Baseline (2026-04-05)

| Métrica                          | Valor                                  |
| -------------------------------- | -------------------------------------- |
| Archivos `src/**/*.js`           | 8                                      |
| Archivos `src/**/*.jsx`          | 17                                     |
| `pnpm typecheck` (pre-migración) | OK (JS sin `checkJs`, `strict: false`) |
| Build Next ignoraba errores TS   | `typescript.ignoreBuildErrors: true`   |

## Principios

1. **Migración total a `.ts` / `.tsx` en `src`** — sin `allowJs` al cierre.
2. **Gate de build al final** — mantener `ignoreBuildErrors` solo hasta que `tsc` y rutas estén limpias; luego quitar.
3. **Orden de migración (de menor a mayor acoplamiento)**:
   - Tipos compartidos → `lib`, `utils`, `i18n`, `theme`, `proxy` (edge i18n)
   - Hooks → componentes presentacionales → secciones → app routes

## Fases ejecutables

### Fase 0 — Baseline

- Contar fuentes JS/JSX, ejecutar `pnpm typecheck` / `pnpm build`, anotar en `tracking-plan.md`.

### Fase 1 — Tooling y tsconfig progresivo (documentado)

Flags útiles **antes** de `strict` (opcional en repos grandes; aquí se consolidó al activar `strict` tras migrar):

- `noImplicitReturns`
- `noFallthroughCasesInSwitch`
- `forceConsistentCasingInFileNames`

### Fase 2 — Infra + datos

- Tipos CMS en `src/types/portfolio.ts` (tech / project cards, `Locale`).
- `graphcms.ts` con `graphql-request` genérico en `.request<Data>()`.
- `handleIntersection.ts` con retorno explícito `boolean | undefined`.

### Fase 3 — i18n y proxy

- `routing.ts`, `navigation.ts`, `request.ts` (tipos de `locale` alineados con `routing.locales`).
- **Proxy**: archivo `src/proxy.ts` con `createMiddleware` de `next-intl` (convención Next 16+); matcher igual al legado.

### Fase 4 — Componentes y hooks

- Hook `useIntersection.ts` (convención kebab/camel para hooks).
- Componentes MUI: props tipadas; `ButtonIcon` extiende `ButtonProps`.
- `react-scroll`: declaración mínima en `src/types/react-scroll.d.ts` (el paquete no publica tipos).

### Fase 5 — App Router

- `layout.tsx` / `page.tsx`: `params: Promise<{ locale: string }>` (Next 15+).
- Metadata y `fetchPortfolioData(locale)` tipados.

### Fase 6 — Strict + gate

- `tsconfig.json`: `strict: true`, `allowJs: false` (o eliminado).
- `next.config.js`: quitar `typescript.ignoreBuildErrors`; plugin apuntando a `./src/i18n/request.ts`.
- CI: workflow que ejecute `pnpm typecheck` (y opcionalmente `pnpm build`).

## Criterios de salida

- `src` sin `.js` / `.jsx`.
- `pnpm typecheck` en verde con `strict`.
- `pnpm build` falla si hay errores de tipo (sin `ignoreBuildErrors`).
- CI obligatorio para `typecheck` en PRs.

## Referencias de archivos clave

- [`tsconfig.json`](tsconfig.json)
- [`next.config.js`](next.config.js)
- [`package.json`](package.json)
