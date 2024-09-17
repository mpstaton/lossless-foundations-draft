// @ts-check
import { defineConfig } from 'astro/config';
import content from '@astrojs/content';

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
          preserveSymlinks: true
        }
      },
      integrations: [content()],
});
