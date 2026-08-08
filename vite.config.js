import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (www.data-brains.net) is served from the site root.
// Keep /databrains/ only if you explicitly need the github.io project path.
const base = process.env.VITE_BASE || '/'

/**
 * FCP-focused HTML transforms:
 * 1) Make main CSS non-render-blocking
 * 2) Delay the React entry until after the first paint of #app-boot
 * 3) Drop modulepreload so ~200KB JS does not saturate Slow-4G before paint
 */
function fcpHtmlPlugin() {
  return {
    name: 'fcp-html',
    enforce: 'post',
    transformIndexHtml(html) {
      let next = html.replace(
        /<link rel="stylesheet"([^>]*?)href="([^"]+\.css)"([^>]*)>/g,
        (_match, before, href, after) => {
          const attrs = `${before || ''}${after || ''}`.replace(/\s+/g, ' ').trim()
          const attrStr = attrs ? ` ${attrs}` : ''
          return (
            `<link rel="preload" as="style" href="${href}"${attrStr} onload="this.onload=null;this.rel='stylesheet'">` +
            `<noscript><link rel="stylesheet" href="${href}"></noscript>`
          )
        },
      )

      const entryMatch = next.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/)
      if (!entryMatch) return next

      const entrySrc = entryMatch[1]
      next = next
        .replace(/<script type="module" crossorigin src="[^"]+"><\/script>\s*/g, '')
        .replace(/<link rel="modulepreload"[^>]*>\s*/g, '')

      const loader = `
    <script type="module">
      const entry = ${JSON.stringify(entrySrc)};
      const start = () => import(/* @vite-ignore */ entry);
      const afterFirstPaint = (cb) => requestAnimationFrame(() => requestAnimationFrame(cb));
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => afterFirstPaint(start), { once: true });
      } else {
        afterFirstPaint(start);
      }
    </script>`

      return next.replace('</body>', `${loader}\n  </body>`)
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), fcpHtmlPlugin()],
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
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('react-dom') || id.includes('/react/') || id.includes('react-router')) {
            return 'vendor-react'
          }
          if (id.includes('@fortawesome')) {
            return 'vendor-icons'
          }
          if (id.includes('@formspree')) {
            return 'vendor-forms'
          }
        },
      },
    },
  },
})
