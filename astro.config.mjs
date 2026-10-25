// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ailabconsulting.com',
  trailingSlash: 'always',
  // The whole stylesheet is ~10 KB; inlining removes the only render-blocking request.
  build: { inlineStylesheets: 'always' },
  // Straight quotes everywhere: Markdown and .astro copy should match.
  markdown: { smartypants: false },
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Newsreader',
      cssVariable: '--font-display',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/newsreader/files/newsreader-latin-wght-normal.woff2'],
            weight: '200 800',
            style: 'normal',
          },
          {
            src: ['@fontsource-variable/newsreader/files/newsreader-latin-wght-italic.woff2'],
            weight: '200 800',
            style: 'italic',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-body',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
