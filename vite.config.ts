import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import envPlugin from 'vite-plugin-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      tsconfigPaths(),
      envPlugin(),
  ],
  preview: {
    port: 3000,
  },
  build: {
    assetsDir: 'k92ebc3e719eda/assets',
  },
});
