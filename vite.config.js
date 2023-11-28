import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import { createHtmlPlugin } from 'vite-plugin-html';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import preload from 'vite-plugin-preload';

export default defineConfig(({ mode }) => {
  // PROD
  if (mode === 'production') {
    return {
      // base: '/vite/',
      appType: 'spa',
      css: {
        devSourcemap: true,
      },
      build: {
        sourcemap: true,
        manifest: true,
        minify: 'terser',
      },
      preview: {
        open: true,
        port: 8080,
      },

      plugins: [
        react(),
        chunkSplitPlugin(),
        preload(),
        viteImagemin({
          optipng: {
            optimizationLevel: 7,
          },
          mozjpeg: {
            quality: 20,
          },
          pngquant: {
            quality: [0.8, 0.9],
            speed: 4,
          },
          svgo: {
            plugins: [
              {
                name: 'removeViewBox',
              },
              {
                name: 'removeEmptyAttrs',
                active: false,
              },
            ],
          },
        }),
        createHtmlPlugin({
          minify: true,
          entry: 'src/main.jsx',
          inject: {
            data: {
              title: 'index',
              injectScript: `<script src="./inject.js"></script>`,
            },
            tags: [
              {
                injectTo: 'body-prepend',
                tag: 'div',
                attrs: {
                  id: 'tag',
                },
              },
            ],
          },
        }),
        viteCompression({
          brotli: true,
          threshold: 10240,
          deleteOriginFile: false,
        }),
      ],
    };
  }

  // DEV
  return {
    clearScreen: false,
    server: {
      open: true,
      port: 3000,
    },
    css: {
      devSourcemap: true,
    },
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        entry: 'src/main.jsx',
        inject: {
          data: {
            title: 'index',
            injectScript: `<script src="./inject.js"></script>`,
          },
          tags: [
            {
              injectTo: 'body-prepend',
              tag: 'div',
              attrs: {
                id: 'tag',
              },
            },
          ],
        },
      }),
    ],
  };
});
