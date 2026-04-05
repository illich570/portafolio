# illich570-portfolio

Next.js 15 (App Router), React 19, MUI 6, `next-intl`, `pnpm`.

## Requisitos

- Node **>= 20.9** (ver [.nvmrc](.nvmrc))
- Corepack activado para respetar `packageManager` en `package.json`

## Setup

```bash
corepack enable
pnpm install
cp .env.example .env.local
# URL_GRAPHCMS + TOKEN_GRAPHCMS para datos de GraphCMS
```

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm format
```

## i18n

Traducciones en [`messages/`](messages/) (`es.json`, `en.json`). Rutas bajo `app/[locale]`; middleware en [`src/middleware.js`](src/middleware.js).

**Nota:** Los JSON en `public/locales/` son legado de `next-i18next`; la fuente actual es `messages/`.

## Deploy

Compatible con Vercel / cualquier host Node. Definir variables de entorno de producción según `.env.example`.
