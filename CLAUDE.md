# Portfolio Project

## Project Overview
Single-page portfolio website for Luca Leporati, backend engineer. Built to land job interviews and showcase technical projects.

**Live URL:** https://lepo00.github.io/portfolio/
**Repo:** https://github.com/Lepo00/portfolio

## Tech Stack
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- `next-themes` for dark/light mode
- Static export (`output: 'export'`) deployed to GitHub Pages via GitHub Actions
- `basePath: '/portfolio'` and `trailingSlash: true` for GitHub Pages compatibility

## Architecture
- **Single page**: `src/app/page.tsx` composes all section components
- **Content layer**: All CV data lives in `src/data/content.ts` with typed interfaces. Edit content here, not in components.
- **Components**: `src/components/` — Header, Hero, About, Experience, Skills, Projects, Education, Contact, FadeIn
- **Styling**: Tailwind utility classes, glassmorphism cards, animated gradient blobs in background, gradient section dividers
- **Deploy**: Push to `main` triggers `.github/workflows/deploy.yml` → builds → deploys to GitHub Pages

## Conventions
- No Co-Authored-By lines in commits
- Do not commit `docs/superpowers/` (gitignored)
- Content changes go in `src/data/content.ts`, not in component files
- Profile photo placeholder in About component — replace when photo is available
