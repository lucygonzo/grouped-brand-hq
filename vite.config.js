import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'grouped-brand-hq' to your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/grouped-brand-hq/',
})
