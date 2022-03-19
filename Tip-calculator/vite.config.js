import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use './src/assets/stylesheets/variables';
          @import './src/assets/stylesheets/main';
        `
      }
    }
  },
  plugins: [vue()]
})
