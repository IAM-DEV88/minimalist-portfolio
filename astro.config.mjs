import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
  },
  integrations: [tailwind()],
});