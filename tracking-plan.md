# Tracking — TypeScript estricto

**Última actualización:** 2026-04-05

## Estado global

| Fase                  | Estado | Notas                                              |
| --------------------- | ------ | -------------------------------------------------- |
| 0 Baseline            | Hecho  | Ver métricas abajo                                 |
| 1 tsconfig progresivo | Hecho  | Documentado; `strict` aplicado post-migración      |
| 2 Infra / lib / utils | Hecho  | `graphcms`, `handleIntersection`, tipos CMS        |
| 3 i18n + proxy        | Hecho  | `src/proxy.ts`                                     |
| 4 Hooks + componentes | Hecho  | `useIntersection` + todos los `.tsx`               |
| 5 App routes          | Hecho  | `layout.tsx`, `page.tsx`                           |
| 6 Strict + CI         | Hecho  | `strict`, sin `ignoreBuildErrors`, workflow GitHub |

## KPIs / baseline

| Métrica             | Antes | Después (objetivo) |
| ------------------- | ----- | ------------------ |
| `src/**/*.js`       | 8     | 0                  |
| `src/**/*.jsx`      | 17    | 0                  |
| `strict`            | false | true               |
| `allowJs`           | true  | false              |
| `ignoreBuildErrors` | true  | eliminado          |
| CI `typecheck`      | no    | sí                 |

## Checklist por PR (mantenimiento)

- [ ] `pnpm typecheck` local en verde
- [ ] `pnpm build` en verde antes de merge
- [ ] Sin `@ts-expect-error` salvo justificación en comentario
- [ ] Nuevos módulos en `src` en `.ts` / `.tsx`

## Log (manual)

_Añade entradas aquí cuando cambies fases o encuentres deuda._

- 2026-04-05: Migración inicial completa, CI añadido, strict activo.
- 2026-04-05: `pnpm typecheck` y `pnpm build` OK en local post-migración. Convención alineada a `src/proxy.ts` (Next 16+).
