import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages : /nom-du-repo/  |  louaydhyeb.github.io : /
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserSite = Boolean(repoName?.endsWith('.github.io'))
const base =
  process.env.VITE_BASE_PATH ??
  (isUserSite || !repoName ? '/' : `/${repoName}/`)

export default defineConfig({
  base,
  plugins: [react()],
})
