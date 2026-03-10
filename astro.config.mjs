import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Replace with your actual deployed URL
  site: 'https://vishwakarmaaircon.com',
  integrations: [tailwind(), sitemap()],
});
