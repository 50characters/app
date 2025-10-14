// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Para repo público (50characters/app) con dominio custom
  // El workflow sync-to-public.yml lo cambiará automáticamente
  site: 'https://50characters.app',
  base: '/', // Nombre del repositorio (se cambia en el workflow público)
  vite: {
    plugins: [tailwindcss()]
  }
});