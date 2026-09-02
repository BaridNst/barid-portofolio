import path from 'node:path'
import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
  build: {
    // Target modern browsers for smaller output
    target: 'es2020',
    // CSS code splitting
    cssCodeSplit: true,
    // Chunk size warning threshold
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunking — function form required by Rolldown (Vite 8)
        manualChunks(id) {
          if (id.includes('node_modules/vue') || id.includes('node_modules/vue-router')) {
            return 'vue-vendor'
          }
          if (id.includes('node_modules/@lucide')) {
            return 'lucide-vendor'
          }
          if (id.includes('node_modules/@vueuse')) {
            return 'vueuse-vendor'
          }
        },
        // Hash filenames for better cache busting
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@lucide/vue', '@vueuse/core'],
  },
})