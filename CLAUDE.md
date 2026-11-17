# CLAUDE.md — baanmalet (บ้านเมล็ด)

Portfolio piece #2 for the user's Fastwork profile: landing page for a FICTIONAL Chiang Mai café/roastery (TH + EN).
Astro static site, deployed to GitHub Pages at https://shswsy.github.io/baanmalet/ (`base: '/baanmalet'`).

- `npm run dev` · `npm run build`. Deploy = push to `main` (`.github/workflows/deploy.yml`).
- All copy/prices/hours in `src/data/site.ts`; page markup + small inline script in `src/components/Landing.astro`; styles in `src/styles/global.css`.
- No stock photos (fetching Unsplash was blocked); illustrations are hand-written SVG components.
- LINE buttons open a demo dialog showing the prefilled message (no real LINE OA). Keep the "fictional business" footer note.
- Test mobile at 390px for horizontal overflow (grid items need `minmax(0,1fr)`).
