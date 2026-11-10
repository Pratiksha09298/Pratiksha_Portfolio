import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  base: (() => {
    const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
    const isUserSite = repositoryName?.endsWith('.github.io')
    return process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isUserSite
      ? `/${repositoryName}/`
      : '/'
  })(),
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@react-pdf')) return 'pdf'
            if (id.includes('docx')) return 'docs'
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('react-router-dom')) return 'router'
            if (id.includes('react') || id.includes('scheduler')) return 'vendor'
          }
          return undefined
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    restoreMocks: true,
  },
})
