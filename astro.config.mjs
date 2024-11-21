import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mctn6.github.io',
  base: 'astro-petcare',
  integrations: [tailwind()]
});