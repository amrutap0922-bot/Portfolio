import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite minifies JS (esbuild) and CSS and code-splits lazy chunks by default.
// For GitHub Pages project sites set base to '/<repo-name>/'.
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  build: { target: 'es2019', cssMinify: true, sourcemap: false },
});
