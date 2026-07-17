import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kmu-webseiten.de',
  integrations: [
    sitemap({
      // Onboarding, Kunden-Entwürfe & Werbe-Landingpage sind nicht für Google bestimmt
      filter: (page) =>
        !page.includes('/onboarding') &&
        !page.includes('/entwurf') &&
        !page.includes('/kostenloser-entwurf'),
    }),
  ],
  trailingSlash: 'ignore',
});
