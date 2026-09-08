---
name: visual-qa
description: Systematic checklist and verification protocol for visual quality assurance, responsive layout testing across mobile and desktop, accessibility validation, and interaction states.
---

# Visual QA Skill — Adhiviraj Pal Portfolio

This skill defines the rigorous quality assurance checklist for Adhiviraj Pal's personal portfolio. 

> **Core Principle:** A portfolio feature is **NOT complete** when the code compiles. It is complete only when verified across desktop, tablet, and mobile viewports with full accessibility, error-free console logs, and visual intentionality. Never judge a page solely from desktop.

---

## 1. Multi-Viewport Inspection Checklist

Test every page and component across standard target viewports:

| Device Category | Target Viewports | Key Inspection Focus |
| --- | --- | --- |
| Small Mobile | `320px`, `375px` (iPhone SE) | Text wrap, padding overflow, tap target sizing (≥44px), no horizontal scrolling |
| Standard Mobile | `390px`, `430px` (iPhone Pro Max) | Header layout, mobile drawer opening/closing, card stacking |
| Tablet | `768px`, `820px` (iPad) | Grid transition from 1 to 2 columns, navigation breakpoint switch |
| Desktop | `1024px`, `1280px`, `1440px` | Asymmetric project grid, generous whitespace, max-width containment |
| Wide Desktop | `1920px` | Centering, background containment, line-length readability (no runaway text) |

---

## 2. Layout, Spacing & Overflow Checks

- [ ] **Zero Horizontal Overflow:** Confirm `document.documentElement.scrollWidth === window.innerWidth` across all viewports.
- [ ] **Vertical Rhythm:** Consistent spacing between sections (e.g., `py-16 sm:py-24`).
- [ ] **Section Dividers:** Clean, understated hairline border rules matching the Editorial Systems Notebook aesthetic.
- [ ] **Text Wrapping:** Long titles, URLs, and technology badges wrap cleanly without truncating or colliding on narrow viewports (`320px`).
- [ ] **Container Max-Widths:** Content remains comfortably readable (max line width 65–75ch for body text) rather than stretching edge-to-edge.

---

## 3. Typography & Information Hierarchy

- [ ] **Hierarchy Clarity:** Clear visual progression: Display → H1 → H2 → H3 → Body → Metadata / Mono labels.
- [ ] **Monospace Balance:** Restrained use of monospace font for metadata, dates, and status tags without feeling like an unstyled terminal.
- [ ] **Contrast Verification:** Text meets WCAG AA (4.5:1) against both light and dark backgrounds; metadata text remains crisp and readable.
- [ ] **Heading Levels:** Strict semantic sequence (no skipped heading ranks like `h1` directly to `h4`).

---

## 4. Interactive States & Touch Affordances

For every clickable element (links, buttons, cards, menu toggles):
- [ ] **Default State:** Obvious interactive affordance; clear distinction between active links and disabled/pending badges.
- [ ] **Hover State (Desktop):** Subtle, refined feedback (color shift, subtle underline, or micro-translate within 150–200ms).
- [ ] **Focus-Visible State:** Crisp, visible keyboard focus ring (`ring-2 ring-ring ring-offset-2`).
- [ ] **Active / Press State:** Noticeable tap feedback without layout jitter.
- [ ] **No Hover-Only Crucial Information:** All project titles, statuses, summaries, and links are fully accessible on touch devices without hovering.

---

## 5. Mobile Navigation & Drawer Mechanics

- [ ] **Toggle Action:** Hamburger menu opens drawer smoothly; changes icon to close/X.
- [ ] **Focus Trapping:** When drawer is open, keyboard Tab cycles only through menu links.
- [ ] **Dismissal:** Pressing `Escape` or clicking the backdrop closes drawer and returns focus to the toggle button.
- [ ] **Scroll Lock:** Background body scrolling is prevented while drawer is open.

---

## 6. Accessibility & Reduced Motion

- [ ] **Keyboard Navigability:** Entire page can be navigated and operated using only `Tab`, `Shift+Tab`, `Enter`, and `Space`.
- [ ] **Skip-to-Content Link:** Accessible skip link at top of document for keyboard users.
- [ ] **ARIA & Labels:** All icon-only buttons (`lucide-react`) have descriptive `aria-label` or visually hidden screen reader text.
- [ ] **Prefers-Reduced-Motion:** When reduced motion is simulated or enabled in OS/browser, all motion transitions degrade to instantaneous state changes or subtle opacity fades without broken layouts.

---

## 7. Console & Build Verification

- [ ] **Zero Console Errors:** No React hydration warnings, duplicate key warnings, or invalid DOM nesting errors.
- [ ] **Production Build:** `npm run build` succeeds cleanly with zero TypeScript errors.
- [ ] **No Dead Links:** All navigation anchors jump smoothly to existing sections, and external links open safely with `rel="noopener noreferrer"`.
