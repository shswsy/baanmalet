// @ts-check
import { defineConfig } from 'astro/config'

// Deployed to GitHub Pages at https://shswsy.github.io/baanmalet/
export default defineConfig({
  site: 'https://shswsy.github.io',
  base: '/baanmalet',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
})
