import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

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
    logOverride: {
      'this-is-undefined-in-esm': 'silent'
    },
    tsconfigRaw: {
      compilerOptions: {
        jsx: 'react-jsx',
        target: 'ES2020',
        useDefineForClassFields: true,
        lib: ['ES2020', 'DOM', 'DOM.Iterable'],
        skipLibCheck: true
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
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