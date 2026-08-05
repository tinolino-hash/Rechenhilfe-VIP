import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  // GitHub Pages benötigt einen festen Basis-Pfad
  base: '/Rechenhilfe-VIP/',

  plugins: [
    vue(),
    vueDevTools(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // Nur für lokale Entwicklung:
  server: {
    host: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },

  // Build-Einstellungen für GitHub Pages
  build: {
    outDir: 'docs',        // <— WICHTIG: statt dist
    emptyOutDir: true
  },

  // Preview soll denselben Ordner nutzen
  preview: {
    outDir: 'docs'         // <— verhindert den dist-Fehler
  },

  publicDir: 'public'
})
