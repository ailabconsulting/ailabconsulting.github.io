// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ailabconsulting.com',
  trailingSlash: 'always',
  // The whole stylesheet is a few KB; inlining removes the only render-blocking request.
  build: { inlineStylesheets: 'always' },
  // The site is a single page. Older URLs point at its sections.
  redirects: {
    '/about/': '/#about',
    '/contact/': '/#contact',
    '/process/': '/#how',
    '/services/': '/#services',
    '/services/governance-assessment/': '/#services',
    '/services/agent-authorization/': '/#services',
    '/services/ai-assisted-sdlc/': '/#services',
    '/services/fractional-ai-leadership/': '/#services',
    '/services/context-engineering/': '/#services',
    '/services/adversarial-review/': '/#services',
    '/services/ai-engineering/': '/#services',
    '/industries/': '/',
    '/industries/financial-services/': '/',
    '/industries/manufacturing/': '/',
    '/industries/retail/': '/',
  },
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-sans',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          { src: ['@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2'], weight: 400, style: 'normal' },
          { src: ['@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff2'], weight: 500, style: 'normal' },
          { src: ['@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-600-normal.woff2'], weight: 600, style: 'normal' },
        ],
      },
    },
  ],
});
