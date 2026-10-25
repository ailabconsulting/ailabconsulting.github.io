# ailabconsulting.com

Marketing site for AI Lab Consulting, built with [Astro](https://astro.build) as a fully static site and deployed to GitHub Pages.

## Develop

Requires Node 24 (see `.nvmrc`).

```sh
nvm use
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build to dist/
npm run preview  # serve dist/
```

## Where things live

| What | Where |
| --- | --- |
| Company facts (address, phone, form endpoint, GA4 ID, social links) | `src/data/site.ts` |
| Services, one Markdown file each | `src/content/services/` |
| Home page FAQ and the "How we work" steps | `src/data/` |
| Design tokens (colors, type scale) | `src/styles/global.css` |
| Structured data (schema.org JSON-LD) | `src/lib/schema.ts` |
| `robots.txt`, `llms.txt`, `llms-full.txt` | `src/pages/*.txt.ts`, built from the content above |

Adding a service is just a new Markdown file: its page, the services list, footer, sitemap, structured data and `llms.txt` pick it up automatically. Keep copy short: one paragraph and four deliverables per service.

Redirects for pages removed in the October 2026 simplification are in `astro.config.mjs`.

## Brand assets

`public/og.png`, `logo.png`, `apple-touch-icon.png` and `favicon.ico` are generated:

```sh
node scripts/generate-assets.mjs
```

## Deploy

Pushing to `main` runs `.github/workflows/gh-pages.yml`, which builds the site and publishes `dist/` to the `gh-pages` branch.
