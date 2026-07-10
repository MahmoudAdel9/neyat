# نوايا | Nwaya

Islamic intentions for sleep, work, and training — with evidence from the Quran, Sunnah, and the early generations.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- next-intl (`ar` default, `en`)

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/ar`.

## Scripts

| Command            | Description                  |
| ------------------ | ---------------------------- |
| `pnpm dev`         | Start the development server |
| `pnpm build`       | Create a production build    |
| `pnpm start`       | Run the production server    |
| `pnpm lint`        | Run ESLint                   |
| `pnpm format`      | Format files with Prettier   |
| `pnpm format:check`| Check Prettier formatting    |

## Content

Intention content lives in typed modules under `src/content/intentions/`. UI chrome (nav, SEO titles, labels) lives in `messages/ar.json` and `messages/en.json`.

To add a category: create a content file, register it in `src/content/intentions/index.ts`, and add nav/home copy in both message files.

## Environment

Optional:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Used for canonical URLs, sitemap, and Open Graph metadata.
