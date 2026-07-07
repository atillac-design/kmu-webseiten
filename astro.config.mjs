import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kmu-webseiten.de',
  integrations: [sitemap()],
  trailingSlash: 'ignore',
});
