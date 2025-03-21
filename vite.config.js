import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Ensure assets are loaded correctly in production
  plugins: [react()],
  server: {
    hmr: {
      overlay: false
    }
  },
  esbuild: {
    logLevel: 'info',
  },
  build: {
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        defaultHandler(warning);
      }
    }
  }
});