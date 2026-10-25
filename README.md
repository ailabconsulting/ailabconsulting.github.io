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

The site is a single page.

| What | Where |
| --- | --- |
| Page copy and layout | `src/pages/index.astro` |
| Services (name and one sentence each) | `src/data/services.ts` |
| Company facts (contact details, form endpoint, GA4 ID) | `src/data/site.ts` |
| Colors and type | `src/styles/global.css` |
| Structured data (schema.org JSON-LD) | `src/lib/schema.ts` |
| `robots.txt`, `llms.txt` | `src/pages/*.txt.ts` |
| Redirects from older URLs | `astro.config.mjs` |

Keep copy short and plain: no slogans, one sentence per service.

## Brand assets

`public/og.png`, `logo.png`, `apple-touch-icon.png` and `favicon.ico` are generated:

```sh
node scripts/generate-assets.mjs
```

## Deploy

Pushing to `main` runs `.github/workflows/gh-pages.yml`, which builds the site and publishes `dist/` to the `gh-pages` branch.
