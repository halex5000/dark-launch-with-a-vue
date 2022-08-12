import { fileURLToPath, URL } from 'node:url'
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
