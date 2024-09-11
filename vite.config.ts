/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import { coverageConfigDefaults } from 'vitest/config';
import { vitePlugin as remix } from '@remix-run/dev';
import reactVitest from '@vitejs/plugin-react';

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
    process.env.VITEST
      ? reactVitest()
      : remix({
          ignoredRouteFiles: ['**/*.css'],
        }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./app/tests/setupTests.ts'],
    coverage: {
      exclude: ['build/**', ...coverageConfigDefaults.exclude],
    },
  },
});
