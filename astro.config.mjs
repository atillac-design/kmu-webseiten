import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kmu-webseiten.de',
  integrations: [
    sitemap({
      // Onboarding ist nur für Kunden mit persönlichem Link — nicht für Google
      filter: (page) => !page.includes('/onboarding'),
    }),
  ],
  trailingSlash: 'ignore',
});
