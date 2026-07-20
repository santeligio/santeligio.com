// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { SITE } from './src/consts';

// https://astro.build
export default defineConfig({
  site: SITE.url,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  // Redirects for the previous Gatsby site's URLs are handled by Netlify via
  // public/_redirects (real HTTP 301s, rather than Astro's static meta-refresh
  // pages) since the site stays hosted on Netlify.
});
