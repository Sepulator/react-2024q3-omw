/// <reference types="vitest" />
import { defineConfig } from 'vite';
import path from 'path';
import { vitePlugin as remix } from '@remix-run/dev';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
      '@assets': path.resolve(__dirname, './app/assets'),
      '@components': path.resolve(__dirname, './app/components'),
    },
  },
  plugins: [
    remix({
      ignoredRouteFiles: ['**/*.css'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTests.ts'],
  },
});
