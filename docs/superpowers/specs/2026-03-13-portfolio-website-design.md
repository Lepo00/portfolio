# Portfolio Website — Design Spec

## Overview

A single-page portfolio website for Luca Leporati, backend engineer. Primary goal: landing job interviews by showcasing experience, skills, and selected projects. Secondary goal: project showcase with technical depth.

**Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS
**Output:** Static export deployed to GitHub Pages via GitHub Actions
**Repo name:** `portfolio` (configurable — `basePath` and deploy URL derive from this)
**URL:** `https://lepo00.github.io/portfolio`

## Architecture

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # root layout, fonts, metadata
│   │   ├── page.tsx          # single page composing all sections
│   │   └── globals.css       # Tailwind imports + custom vars
│   ├── components/
│   │   ├── Header.tsx        # sticky nav + dark mode toggle
│   │   ├── Hero.tsx          # name, title, tagline
│   │   ├── About.tsx         # profile summary
│   │   ├── Experience.tsx    # work experience timeline
│   │   ├── Skills.tsx        # tech stack grid
│   │   ├── Projects.tsx      # selected projects
│   │   ├── Education.tsx     # education timeline
│   │   └── Contact.tsx       # email, LinkedIn, GitHub links
│   └── data/
│       └── content.ts        # all CV content in one typed data file
├── public/
│   └── images/               # profile photo, project screenshots
├── next.config.js            # static export + basePath for GH Pages
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions: build → deploy
├── tailwind.config.ts
└── package.json
```

### Key Decisions

- **Content in `data/content.ts`**: All CV data (experience, education, skills, projects) lives in a single typed file. Components read from this data. Easy to update without touching UI code.
- **Static export**: `output: 'export'` in Next.js config. No server required.
- **`basePath`**: Set to `/portfolio` for correct asset loading on GitHub Pages.
- **`images.unoptimized: true`**: Next.js image optimization is not available in static export mode.

## Sections

### Header
- Sticky top navigation
- Left: name/logo
- Right: section links (About, Experience, Skills, Projects, Education, Contact) + dark/light toggle icon
- Collapses to hamburger menu on mobile (below `md` breakpoint). Tapping the hamburger opens a full-width overlay menu. Tapping a link or clicking outside closes it.

### Hero
- Full viewport height
- Name: "Luca Leporati"
- Title: "Backend Developer"
- Tagline: e.g. "Building data-intensive systems at scale"
- Subtle scroll-down indicator (animated chevron)

### About
- Profile summary (expanded from CV profile text)
- Desktop: two-column layout — text left, profile photo right
- Mobile: single column, photo above text

### Experience
- Vertical timeline, most recent first
- Each entry: company name, role, dates, location (badge), bullet points
- Cards with subtle left border accent color
- Order (most recent first): Soda → European Parliament → Capgemini → Anoki

### Skills
- Grouped grid with category labels
- Categories: Languages (Java, JavaScript, SQL), Frameworks (Spring Boot, Node.js, Hibernate), Databases (Oracle, Postgres, MySQL, ClickHouse, DynamoDB), Cloud/Infra (AWS, Terraform, Docker), Tools (Git, Jira, Linear), API (REST, GraphQL)
- Tag/pill style for each skill

### Projects
- Card layout for selected projects
- Each card: title, description, technologies used, GitHub link
- Content curated manually in `data/content.ts`
- 3 placeholder entries initially, displayed in a responsive grid (1 col mobile, 2-3 col desktop). To be filled with real projects.

### Education
- Compact timeline (same style as experience, but shorter entries)
- Entries: MSc Data Science at VUB (2025–ongoing), BSc Computer Engineering at UNINETTUNO (2021–2023, grade 94), Software Development at ITS FondazioneJAC (2019–2021, grade 97), IT Expert at Marzoli High School (2014–2019)

### Contact
- Footer section
- Icons + links: email (luca.leporati@outlook.com), LinkedIn, GitHub
- Simple "Get in touch" heading

## Styling

### Color Palette
- **Light mode:** white background (`#ffffff`), dark gray text (`#1a1a1a`), muted blue accent (`#3b82f6`)
- **Dark mode:** near-black background (`#0a0a0a`), light gray text (`#e5e5e5`), lighter blue accent (`#60a5fa`)
- Accent used for: links, timeline markers, hover states, active nav items

### Dark/Light Mode
- `next-themes` library for theme management
- Detects system preference on first visit, persists user choice
- Tailwind `darkMode: 'class'` strategy
- Toggle: sun/moon icon button in header

### Typography
- Font: Inter (Google Fonts, loaded via `next/font`)
- Hierarchy: hero name large (4xl–6xl), section headings (2xl–3xl), body (base)

### Layout
- Max width container: `max-w-4xl` (~1024px), centered
- Responsive: mobile-first, single column below `md`, two-column above where appropriate
- Smooth scroll: CSS `scroll-behavior: smooth` on html element. Sections use `scroll-margin-top` to offset for the sticky header height.
- Comfortable padding: `px-6` on mobile, `px-8` on desktop

### Animations
- Subtle fade-in on scroll for sections (CSS `@keyframes` + Intersection Observer, no heavy libraries)
- Hover effects on cards (slight elevation/shadow change) and links (color transition)
- No flashy transitions — professional and clean

## Deployment

### GitHub Pages Setup
- Public GitHub repository
- `main` branch as source

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Trigger: push to `main`
- Node.js 20 LTS
- Steps: checkout → install dependencies → `next build` (static export) → deploy `out/` to GitHub Pages
- Uses `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`

### Next.js Configuration
- `output: 'export'`
- `basePath: '/portfolio'`
- `trailingSlash: true`
- `images: { unoptimized: true }`

### Result
Push to `main` → GitHub Actions builds → live at `https://lepo00.github.io/portfolio`

## Out of Scope
- Blog / articles
- CMS integration
- Contact form with backend
- Analytics (can be added later)
- Custom domain (can be configured later)
