import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/token-negotiator-examples/vue-vite-boilerplate' : '/',
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      process: "process/browser",
    }
  },
  optimizeDeps: {
	  esbuildOptions: {
		  target: ['es2020']
	  }
  },
  build: {
    target: "es2020"
  },
})
