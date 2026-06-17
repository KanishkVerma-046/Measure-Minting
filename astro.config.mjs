// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

const SITE = 'https://unitconverterz.com';
const lastmod = new Date().toISOString().split('T')[0];

export default defineConfig({
  site: SITE,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/500'),

      serialize(item) {
        const path = item.url.replace(SITE, '');

        // Homepage
        if (path === '/') {
          return { ...item, priority: 1.0, changefreq: 'daily', lastmod };
        }

        // Top-level hub pages
        if (['/all-converters/', '/calculators/', '/calculator/'].includes(path)) {
          return { ...item, priority: 0.9, changefreq: 'weekly', lastmod };
        }

        // Legal pages — checked before category regex so they aren't misclassified
        if (['/privacy/', '/terms/'].includes(path)) {
          return { ...item, priority: 0.3, changefreq: 'yearly', lastmod };
        }

        // About & contact — checked before category regex
        if (['/about/', '/contact/'].includes(path)) {
          return { ...item, priority: 0.5, changefreq: 'monthly', lastmod };
        }

        // Individual calculator pages  e.g. /calculators/bmi/
        if (path.startsWith('/calculators/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly', lastmod };
        }

        // Converter category index pages  e.g. /length/, /weight-and-mass/
        if (/^\/[^/]+\/$/.test(path)) {
          return { ...item, priority: 0.85, changefreq: 'weekly', lastmod };
        }

        // Converter pair pages  e.g. /length/meters-to-feet/
        if (/^\/[^/]+\/[^/]+\/$/.test(path)) {
          return { ...item, priority: 0.7, changefreq: 'monthly', lastmod };
        }

        return { ...item, priority: 0.5, changefreq: 'monthly', lastmod };
      },
    }),
  ],
});
