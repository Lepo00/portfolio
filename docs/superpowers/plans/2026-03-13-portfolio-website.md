# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page portfolio website for Luca Leporati, deployed to GitHub Pages.

**Architecture:** Next.js 14 App Router with static export. All CV content in a typed data file (`src/data/content.ts`), rendered by section components. Dark/light theme via `next-themes`. GitHub Actions deploys to GitHub Pages on push to main.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, next-themes

**Spec:** `docs/superpowers/specs/2026-03-13-portfolio-website-design.md`

---

## File Structure

| File | Responsibility |
|------|---------------|
| `src/data/content.ts` | All CV data: experience, education, skills, projects, profile text. Typed interfaces. |
| `src/app/layout.tsx` | Root layout: Inter font, metadata, ThemeProvider wrapper |
| `src/app/page.tsx` | Single page composing all section components |
| `src/app/globals.css` | Tailwind directives, smooth scroll, scroll-margin-top, fade-in animation |
| `src/components/Header.tsx` | Sticky nav, section links, mobile hamburger menu, dark/light toggle |
| `src/components/Hero.tsx` | Full-height hero: name, title, tagline, scroll indicator |
| `src/components/About.tsx` | Profile summary, two-column layout with photo |
| `src/components/Experience.tsx` | Vertical timeline of work experience |
| `src/components/Skills.tsx` | Grouped skill tags/pills |
| `src/components/Projects.tsx` | Project cards in responsive grid |
| `src/components/Education.tsx` | Compact education timeline |
| `src/components/Contact.tsx` | Footer with email, LinkedIn, GitHub links |
| `next.config.js` | Static export, basePath, trailingSlash, unoptimized images |
| `tailwind.config.ts` | darkMode: 'class', extend theme if needed |
| `.github/workflows/deploy.yml` | GitHub Actions: build and deploy to GitHub Pages |

---

## Chunk 1: Project Scaffolding & Data Layer

### Task 1: Initialize Next.js project

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.ts`, `postcss.config.js`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

- [ ] **Step 1: Scaffold Next.js with TypeScript and Tailwind**

```bash
cd /Users/luca/Documents/workspace/portfolio
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --no-import-alias
```

Accept defaults. This creates the full Next.js scaffold.

- [ ] **Step 2: Install next-themes**

```bash
npm install next-themes
```

- [ ] **Step 3: Configure next.config.js for GitHub Pages static export**

Replace `next.config.js` (or `next.config.mjs` if that's what was generated) with:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

- [ ] **Step 4: Configure Tailwind for dark mode**

In `tailwind.config.ts`, set:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 5: Set up globals.css**

Replace `src/app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

section {
  scroll-margin-top: 5rem;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}
```

- [ ] **Step 6: Set up root layout with Inter font and ThemeProvider**

Replace `src/app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luca Leporati — Backend Developer",
  description:
    "Backend engineer with experience in building data-intensive systems, high-throughput pipelines, and OLAP migrations at scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-200`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 7: Replace page.tsx with placeholder**

Replace `src/app/page.tsx` with:

```tsx
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-8">
      <h1 className="text-4xl font-bold py-20">Portfolio — Coming Soon</h1>
    </main>
  );
}
```

- [ ] **Step 8: Verify dev server runs**

```bash
npm run dev
```

Visit `http://localhost:3000`. Should show "Portfolio — Coming Soon" with Inter font. Dark mode should follow system preference.

- [ ] **Step 9: Verify static build**

```bash
npm run build
```

Should produce an `out/` directory with static HTML.

- [ ] **Step 10: Initialize git repo and commit**

```bash
git init
git add .
git commit -m "chore: scaffold Next.js project with Tailwind and next-themes"
```

---

### Task 2: Create data layer with typed content

**Files:**
- Create: `src/data/content.ts`

- [ ] **Step 1: Create the typed content file**

Create `src/data/content.ts` with all CV data:

```ts
export interface Experience {
  company: string;
  role: string;
  location: string;
  locationType: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  note?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const profile = {
  name: "Luca Leporati",
  title: "Backend Developer",
  tagline: "Building data-intensive systems at scale",
  email: "luca.leporati@outlook.com",
  linkedin: "https://www.linkedin.com/in/luca-leporati",
  github: "https://github.com/Lepo00",
  location: "Brussels, Belgium",
  about: `Backend engineer with experience in building and operating data-intensive backend systems, including high-throughput ingestion pipelines and OLAP migrations at scale. Focused on production reliability, performance optimization, scalability, and hands-on architectural decisions across both OLTP and OLAP systems. Background mainly in Java, databases, and cloud infrastructure, with a track record of delivering impactful backend improvements. Currently expanding into data science with an MSc at VUB.`,
};

export const experiences: Experience[] = [
  {
    company: "Soda",
    role: "Backend Engineer",
    location: "Brussels",
    locationType: "Onsite",
    period: "Sep 2024 — Present",
    description:
      "Backend development of a data-quality testing platform using Java 21, JUnit 5 and MySQL, with a focus on performance and scalability.",
    bullets: [
      "Developed and maintained backend features, handling bug fixing and production issues.",
      "Optimized the dataset ingestion pipeline, achieving a ~102× performance improvement.",
      "Worked on the migration of analytical workloads from MySQL (OLTP) to ClickHouse (OLAP) to improve performance and scalability.",
      "Managed infrastructure scalability using Terraform, adapting the system to variable workloads.",
      "Contributed to product delivery using the Shape Up framework.",
      "Leveraged AI-assisted development with Claude Code to accelerate feature delivery, debugging, and code review.",
    ],
  },
  {
    company: "European Parliament",
    role: "Software Engineer",
    location: "Brussels",
    locationType: "Onsite",
    period: "Mar 2024 — Aug 2024",
    description:
      "5-month traineeship selected from 200 applicants. Developed new features for the Newsroom website.",
    bullets: [
      "Java 15, Spring Boot, Hibernate, Flyway, JSP",
      "SQL Oracle",
    ],
  },
  {
    company: "Capgemini",
    role: "Software Engineer",
    location: "Milan",
    locationType: "Hybrid",
    period: "Jan 2023 — Mar 2024",
    description:
      "Consultant for Simest, a state-owned company in the CDP group involved in corporate financing. Worked on the loan recovery module — from brainstorming with product managers to implementation.",
    bullets: [
      "Feature development with Java, JSP",
      "SQL Oracle, PL/SQL",
    ],
  },
  {
    company: "Anoki",
    role: "Backend Developer",
    location: "Milan",
    locationType: "Full remote",
    period: "Sep 2021 — Jan 2023",
    description:
      "Consultant on several backend projects: an electronic payments app and a journalistic REST API platform.",
    bullets: [
      "REST API development with Java 11 Spring Boot, tested with JUnit 5",
      "GraphQL API with NodeJS and AWS Lambda",
      "Containerized applications with Docker, SQL database management with PostgreSQL",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "VUB",
    degree: "MSc — Data Science",
    period: "2025 — Ongoing",
  },
  {
    institution: "University UNINETTUNO",
    degree: "BSc — Computer Engineering",
    period: "2021 — 2023",
    grade: "94",
    note: "University thesis on machine learning with TensorflowJS",
  },
  {
    institution: "ITS FondazioneJAC",
    degree: "Software Development",
    period: "2019 — 2021",
    grade: "97",
  },
  {
    institution: "Marzoli High School",
    degree: "IT Expert",
    period: "2014 — 2019",
  },
];

export const skillGroups: SkillGroup[] = [
  { category: "Languages", skills: ["Java", "JavaScript", "SQL"] },
  { category: "Frameworks", skills: ["Spring Boot", "Node.js", "Hibernate"] },
  {
    category: "Databases",
    skills: ["Oracle", "PostgreSQL", "MySQL", "ClickHouse", "DynamoDB"],
  },
  { category: "Cloud & Infra", skills: ["AWS", "Terraform", "Docker"] },
  { category: "Tools", skills: ["Git", "Jira", "Linear"] },
  { category: "API", skills: ["REST", "GraphQL"] },
];

export const projects: Project[] = [
  {
    title: "Data Ingestion Pipeline Optimization",
    description:
      "Optimized a dataset ingestion pipeline at Soda, achieving a ~102× performance improvement through batching, query optimization, and architectural changes.",
    technologies: ["Java 21", "MySQL", "ClickHouse"],
  },
  {
    title: "OLTP to OLAP Migration",
    description:
      "Led the migration of analytical workloads from MySQL to ClickHouse, improving query performance for large-scale data analysis.",
    technologies: ["MySQL", "ClickHouse", "Terraform"],
  },
  {
    title: "ML with TensorflowJS",
    description:
      "University thesis project implementing machine learning models in the browser using TensorflowJS.",
    technologies: ["TensorflowJS", "JavaScript"],
    link: "https://github.com/Lepo00",
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/data/content.ts
git commit -m "feat: add typed content data layer with CV information"
```

---

## Chunk 2: Section Components

### Task 3: Header component

**Files:**
- Create: `src/components/Header.tsx`

- [ ] **Step 1: Create the Header component**

```tsx
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-4xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg">
          Luca Leporati
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              )}
            </button>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 bg-black/20 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 md:hidden">
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: add Header component with nav, mobile menu, and dark mode toggle"
```

---

### Task 4: Hero component

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Create the Hero component**

```tsx
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">{profile.name}</h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
        {profile.title}
      </p>
      <p className="text-lg text-gray-500 dark:text-gray-500 mb-12">
        {profile.tagline}
      </p>
      <a
        href="#about"
        className="animate-bounce text-gray-400 dark:text-gray-600"
        aria-label="Scroll down"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add Hero component with name, title, tagline, and scroll indicator"
```

---

### Task 5: About component

**Files:**
- Create: `src/components/About.tsx`

- [ ] **Step 1: Create the About component**

```tsx
import { profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">About</h2>
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="flex-1">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {profile.about}
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
            {/* Replace with <Image> when profile photo is available */}
            <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm">
              Photo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/About.tsx
git commit -m "feat: add About component with profile summary and photo placeholder"
```

---

### Task 6: Experience component

**Files:**
- Create: `src/components/Experience.tsx`

- [ ] **Step 1: Create the Experience component**

```tsx
import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.period}`}
            className="border-l-2 border-blue-500 dark:border-blue-400 pl-6 relative"
          >
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
              <h3 className="font-semibold text-lg">{exp.role}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                {exp.period}
              </span>
            </div>
            <p className="text-blue-500 dark:text-blue-400 text-sm mb-2">
              {exp.company} · {exp.location} · {exp.locationType}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              {exp.description}
            </p>
            <ul className="list-disc list-inside space-y-1">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-gray-600 dark:text-gray-400 text-sm"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Experience.tsx
git commit -m "feat: add Experience component with vertical timeline"
```

---

### Task 7: Skills component

**Files:**
- Create: `src/components/Skills.tsx`

- [ ] **Step 1: Create the Skills component**

```tsx
import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-semibold text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Skills.tsx
git commit -m "feat: add Skills component with grouped tag pills"
```

---

### Task 8: Projects component

**Files:**
- Create: `src/components/Projects.tsx`

- [ ] **Step 1: Create the Projects component**

```tsx
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-md dark:hover:shadow-gray-900/50 transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 dark:text-blue-400 hover:underline"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Projects.tsx
git commit -m "feat: add Projects component with responsive card grid"
```

---

### Task 9: Education component

**Files:**
- Create: `src/components/Education.tsx`

- [ ] **Step 1: Create the Education component**

```tsx
import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={`${edu.institution}-${edu.period}`}
            className="border-l-2 border-blue-500 dark:border-blue-400 pl-6 relative"
          >
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
              <h3 className="font-semibold">{edu.degree}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                {edu.period}
              </span>
            </div>
            <p className="text-blue-500 dark:text-blue-400 text-sm">
              {edu.institution}
              {edu.grade && ` · Grade: ${edu.grade}`}
            </p>
            {edu.note && (
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                {edu.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Education.tsx
git commit -m "feat: add Education component with compact timeline"
```

---

### Task 10: Contact component

**Files:**
- Create: `src/components/Contact.tsx`

- [ ] **Step 1: Create the Contact component**

```tsx
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Get in touch</h2>
      <div className="flex flex-wrap gap-6">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          {profile.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "feat: add Contact component with email, LinkedIn, and GitHub links"
```

---

## Chunk 3: Assembly, Animations & Deployment

### Task 11: Assemble page and add fade-in animation

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/components/FadeIn.tsx`

- [ ] **Step 1: Create FadeIn wrapper component**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={isVisible ? "animate-fade-in" : "opacity-0"}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Assemble all sections in page.tsx**

Replace `src/app/page.tsx`:

```tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 md:px-8">
        <Hero />
        <FadeIn><About /></FadeIn>
        <FadeIn><Experience /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Education /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify dev server**

```bash
npm run dev
```

Visit `http://localhost:3000`. All sections should render. Dark/light toggle should work. Smooth scroll between sections. Fade-in on scroll.

- [ ] **Step 4: Verify static build**

```bash
npm run build
```

Should succeed and produce `out/` directory.

- [ ] **Step 5: Commit**

```bash
git add src/components/FadeIn.tsx src/app/page.tsx
git commit -m "feat: assemble all sections in page with fade-in animation"
```

---

### Task 12: GitHub Actions deployment workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create the workflow file**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Add .nojekyll file**

Create an empty `public/.nojekyll` file to prevent GitHub Pages from processing with Jekyll:

```bash
touch public/.nojekyll
```

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/deploy.yml public/.nojekyll
git commit -m "ci: add GitHub Actions workflow for GitHub Pages deployment"
```

---

### Task 13: Final cleanup and verify

- [ ] **Step 1: Remove unused default Next.js assets**

Delete any default Next.js SVGs/images that came with the scaffold (e.g., `public/next.svg`, `public/vercel.svg`, `src/app/favicon.ico` placeholder if not needed).

- [ ] **Step 2: Add a .gitignore entry for docs/superpowers/**

Append to `.gitignore`:

```
docs/superpowers/
```

- [ ] **Step 3: Final build check**

```bash
npm run build
```

Should complete without errors.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: clean up scaffold defaults and ignore superpowers docs"
```

- [ ] **Step 5: Push to GitHub**

Create the `portfolio` repo on GitHub, then:

```bash
git remote add origin git@github.com:Lepo00/portfolio.git
git branch -M main
git push -u origin main
```

Enable GitHub Pages in repo settings: Settings → Pages → Source: GitHub Actions.

The site will be live at `https://lepo00.github.io/portfolio` after the first successful workflow run.
