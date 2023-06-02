import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',

  build: {
    target: 'esnext',
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        // cart: resolve(__dirname, 'src/cart/index.html'),
        // product: resolve(__dirname, 'src/product_pages/index.html'),
        // product_listing: resolve(__dirname, 'src/product_listing/index.html'),
      },
    minify: 'esbuild'
    },
  },
});
