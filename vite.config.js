import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        contact:resolve(__dirname,'./projects.html'),
        skills:resolve(__dirname,'./skills.html'),
        myscript:resolve(__dirname, './scripts/scripts.js')
      },
    },
  }, // El paréntesis cerraba antes de tiempo aquí
})