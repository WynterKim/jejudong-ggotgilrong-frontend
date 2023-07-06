import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      tsconfigPaths(),
  ],
  server: {
    port: 3000,
  },
  build: {
    chunkFileNames: 'assets/k92ebc3e719eda/[name]-[hash].js',
    entryFileNames: 'assets/k92ebc3e719eda/[name]-[hash].js',
  },
});
