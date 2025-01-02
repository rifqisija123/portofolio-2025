import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  base: '/',  // Ganti dengan nama repositori Anda
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
});
