import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: { port: 2508, strictPort: true },
  preview: { port: 2508, strictPort: true },
})
