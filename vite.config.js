import {
    defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ToninoJoya_SWAPIBlog/'  // Reemplaza con el nombre de tu repositorio
})