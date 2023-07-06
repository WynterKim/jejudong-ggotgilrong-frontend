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
    assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/k92ebc3e719eda/[name]-[hash][extname]`;
        },
    chunkFileNames: 'assets/k92ebc3e719eda/[name]-[hash].js',
    entryFileNames: 'assets/k92ebc3e719eda/[name]-[hash].js',
  },
});
