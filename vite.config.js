import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  base: '/portofolio-2025/',  // Ganti dengan nama repositori Anda
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
});
