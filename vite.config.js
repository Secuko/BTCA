import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
//additionalData: `@use "./src/main.scss" as *;`
//additionalData: `@import "./src/main.scss";`
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss"; @import "./src/styles/mixins.scss";`
      }
    }
  }
})
