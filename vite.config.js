import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (www.data-brains.net) is served from the site root.
// Keep /databrains/ only if you explicitly need the github.io project path.
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
  },
})
