---
name: frontend-ui
description: Best practices and engineering guidelines for building responsive, accessible, and type-safe UI components using Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Lucide React, and Motion.
---

# Frontend UI Skill — Adhiviraj Pal Portfolio

This skill establishes frontend implementation standards for Adhiviraj Pal's personal portfolio, ensuring code quality, accessibility, responsive rigor, and strict alignment with `AGENTS.md`.

---

## 1. Technology Stack & Conventions

- **Framework:** Next.js (App Router). Default to React Server Components (RSC); add `"use client"` only for components requiring interactivity, browser APIs, or framer-motion/motion state.
- **Language:** TypeScript in strict mode. All component props and data models must strictly consume definitions from `src/content/types.ts`.
- **Styling:** Tailwind CSS v4 using semantic design tokens and OKLCH CSS variables (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-card`, etc.). Avoid arbitrary magic color values or ad-hoc Tailwind color classes.
- **UI Primitives:** shadcn/ui (`base-nova` style with `@base-ui/react` primitives and `cva`). Reuse existing primitives (such as `Button`) before building from scratch.
- **Icons:** `lucide-react`. Maintain consistent sizing (`size-4` for inline metadata/buttons, `size-5` for primary actions) and stroke widths.
- **Animation:** `motion` (Motion library). Kept purposeful and restrained (150–250ms micro-interactions, 250–350ms component reveals).

---

## 2. Component Architecture

Organize components into modular, single-responsibility files under `src/components/`:

```text
src/components/
├── layout/         # Header, Footer, Container, MobileNav drawer
├── hero/           # Hero positioning, introductory badges, action buttons
├── projects/       # ProjectCard, ProjectGrid, ProjectStatusBadge, ProjectLinks
├── journey/        # CurrentJourney, LearningPath bridge
├── skills/         # SkillInventory, SkillCategoryCard
├── credibility/    # CredibilitySignals, EducationCard
├── contact/        # ContactCallout, SocialLinkList
└── ui/             # Shadcn primitives (Button, Dialog/Sheet, Badge, etc.)
```

- **Rule:** Do NOT build giant monolithic page components. Keep `page.tsx` as a clean compositional orchestrator.
- **Semantic HTML:** Always use semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby="...">`, `<article>`, and `<footer>`. Ensure a single `<h1>` per page and strictly sequential heading levels (`<h2>`, `<h3>`).

---

## 3. Content Integrity & Anti-Fabrication

- **Single Source of Truth:** All content must be imported from `src/content/` (`profile`, `projects`, `skills`, `education`, `experience`, `achievements`, `social`).
- **Never Hardcode Copy:** Do not invent metrics, fake user stats, or unverified achievements in JSX.
- **Pending Link Handling:** Respect the `ProjectLink` union type:
  - `status === "available"`: Render active accessible link with `href`, `rel="noopener noreferrer"`, and external indicator icon.
  - `status === "pending"`: Render honest pending badge or muted note (`"Repository link coming soon"`). Never render dead `#` links or fake buttons.
- **Disclaimer Badges:** Ensure Voice AI simulated data and Habit Tracker free-tier limits are clearly rendered in UI using accessible metadata badges.

---

## 4. Responsive Design Rigor

- Test and compose deliberately across viewports: `320px`, `375px`, `768px`, `1024px`, `1440px`.
- Desktop asymmetric layouts (e.g., 1 lead project + 2 supporting) must collapse cleanly into a single-column stacked layout on mobile.
- Use responsive padding scales (`px-4 sm:px-6 lg:px-8`) and container max-widths (`max-w-5xl` or `max-w-6xl`).
- Prevent horizontal scroll overflow: ensure long technology tags wrap naturally (`flex flex-wrap gap-2`).
- Touch targets on mobile must be at least `44×44px` with sufficient tap spacing.

---

## 5. Accessibility & Motion Guidelines

- **Focus Visibility:** Interactive elements must have clear, visible focus rings (`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`).
- **Interactive States:** Provide distinct `default`, `hover`, `focus-visible`, `active`, and `disabled` states.
- **Reduced Motion:** Always wrap animated components with reduced-motion checks or use CSS transitions that respect `@media (prefers-reduced-motion: reduce)`. Never hide critical information behind motion.
- **Contrast:** Maintain WCAG AA minimum contrast (4.5:1 for normal text, 3:1 for large text and UI boundaries) across both light and dark modes.
