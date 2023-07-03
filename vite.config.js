import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue()
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, "src"),
        }
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
})
