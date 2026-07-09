import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kmu-webseiten.de',
  integrations: [
    sitemap({
      // Onboarding & Kunden-Entwürfe sind nur über persönliche Links erreichbar — nicht für Google
      filter: (page) => !page.includes('/onboarding') && !page.includes('/entwurf'),
    }),
  ],
  trailingSlash: 'ignore',
});
