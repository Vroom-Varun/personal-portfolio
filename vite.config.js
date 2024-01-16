import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://vroom-varun.github.io/personal-portfolio/",
  plugins: [react()],
})
