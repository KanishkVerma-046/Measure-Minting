# MeasureMinting

A fast, SEO-optimised unit converter and calculator site built with Astro and deployed on Cloudflare Pages.

Live site: [unitconverterszone.com](https://unitconverterszone.com)

## Features

- **6 unit converter categories** — Length, Weight & Mass, Temperature, Volume, Area, Speed
- **38 calculators** — Financial, Health & Fitness, Math, and Other
- **Scientific calculator** at `/calculator/`
- Static site generation with 211 pages built at compile time
- XML sitemap with per-page priorities and change frequencies
- Robots.txt with explicit allow rules for all major AI crawlers
- Dark mode toggle (persisted via localStorage)
- Fully responsive — mobile menu + desktop nav

## Tech Stack

| Tool | Role |
|---|---|
| [Astro](https://astro.build) | Static site framework |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling (via Vite plugin) |
| [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | Cloudflare Pages deployment |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | XML sitemap generation |

## Project Structure

```
/
├── public/
│   ├── fonts/              # Geist Variable & GeistMono Variable (woff2)
│   ├── favicon.ico / .svg / -96x96.png
│   ├── apple-touch-icon.png
│   ├── site.webmanifest
│   ├── robots.txt
│   └── _headers            # Cloudflare cache headers
├── src/
│   ├── components/         # NavBar, Footer, Hero, Card, UnitConverter, etc.
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   ├── units/          # Category definitions, conversion logic, formatting
│   │   ├── paths.ts        # URL helpers (categoryPath, pairPath, etc.)
│   │   └── seo.ts          # JSON-LD helpers (breadcrumb, FAQ)
│   └── pages/
│       ├── index.astro
│       ├── [category]/
│       │   ├── index.astro         # Hub page per converter category
│       │   └── [pair]/index.astro  # Individual conversion pair pages
│       ├── calculators/    # One page per calculator
│       ├── calculator/     # Scientific calculator
│       ├── all-converters/
│       ├── sitemap/        # HTML sitemap
│       ├── about/
│       ├── contact/
│       ├── privacy/
│       └── terms/
└── astro.config.mjs        # Sitemap config with per-page priority rules
```

## Commands

Run from the project root:

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and deploy to Cloudflare Pages |

## Adding a New Converter Category

1. Create `src/lib/units/<category>.ts` exporting a `CategoryDef` object with `id`, `label`, `description`, `units`, and `popularPairs`.
2. Import and add it to the `CATEGORIES` array in `src/lib/units/index.ts`.

That's it — category hub page, all pair pages, sitemap entries, and nav links are generated automatically.

## Adding a New Calculator

1. Create `src/pages/calculators/<slug>/index.astro`.
2. Add a link to it in `src/pages/calculators/index.astro` and `src/pages/sitemap/index.astro`.

## Deployment

The site deploys to Cloudflare Pages via Wrangler:

```sh
npm run deploy
```

This runs `astro build` then `wrangler pages deploy`, uploading only changed files.
