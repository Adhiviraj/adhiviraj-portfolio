---
name: figma-design
description: Design principles, token architecture, and layout guidelines for working within the 3-page Figma file for Adhiviraj Pal's portfolio, maintaining strict consistency with the Next.js/Tailwind/shadcn implementation.
---

# Figma Design Skill — Adhiviraj Pal Portfolio

This skill governs the visual design workflow in Figma for Adhiviraj Pal's personal portfolio. It ensures visual discipline, token consistency, and seamless translation into Next.js, Tailwind CSS v4, and shadcn/ui.

---

## 1. Strict Page Architecture (Exactly 3 Pages)

The Figma file is strictly structured into **exactly 3 pages**. Do NOT create additional Figma pages:

1. **`DESIGN SYSTEM`**: Houses the single source of truth for design tokens (color variables, typography styles, spacing scales, border radii, elevation) and reusable UI component master sets.
2. **`DESKTOP`**: Complete responsive layout frames for desktop viewports (`1440px` primary, checked at `1024px` and `1920px`).
3. **`MOBILE`**: Dedicated, intentionally composed frames for mobile viewports (`375px` primary, checked at `320px` and `430px`), including the mobile navigation drawer states.

---

## 2. Tokens First: Foundation Before Layouts

Never place arbitrary frames or unlinked shapes into desktop or mobile pages. Establish design tokens on the `DESIGN SYSTEM` page first:

- **Color Tokens (OKLCH mapped):**
  - Canvas / Background (`bg-background`): Warm off-white / light stone in light mode; deep ink / soft charcoal in dark mode.
  - Ink / Foreground (`text-foreground`): High-contrast slate/charcoal for display and body text.
  - Muted Foreground (`text-muted-foreground`): Crisp secondary gray for metadata and helper text (must pass WCAG AA contrast).
  - Borders / Hairlines (`border-border`): Subtle graphite borders (1px hairline) to create section divider rules without heavy card containers.
  - Accent: Single, disciplined functional accent for active states and focus rings (no neon gradients).
- **Typography Tokens:**
  - Headings & Display: Confident, readable grotesque/humanist sans (`--font-sans`).
  - Body: Balanced, highly legible proportions (16px base, 1.6 line height).
  - Metadata / Tags: Monospace font (`--font-mono`) used in uppercase/smallcaps for status badges, dates, and technical tags.
- **Spacing & Grid:**
  - 8pt/4pt layout grid system.
  - Layout containers: Max-width constraint (e.g., `1120px` or `1200px`) with consistent horizontal gutters.
  - Section spacing: Rhythmic vertical rhythm (`py-16` / `py-24`).
- **Border Radii:**
  - Subtle, restrained radii (`rounded-md` / `rounded-lg`, 6–8px). Avoid excessively round "pill" cards for complex content.

---

## 3. Component Sets & Interaction States

Before assembling full page frames, define reusable components with all interactive states in `DESIGN SYSTEM`:

- **Primary & Secondary Buttons:** `default`, `hover`, `focus-visible`, `active`, `disabled`.
- **Navigation Bar:** Desktop sticky bar (clean border bottom) and Mobile compact header with menu toggle.
- **Mobile Menu Drawer:** Closed state, opening transition, open sheet state with focus trap and close button.
- **Project Card (Editorial Spread & Standard):**
  - Lead Project variant (asymmetric hero spread for Voice AI Assistant).
  - Standard Project variant (supporting cards for AI Habit Tracker & Laptop Recommender).
  - Compact Hardware variant (Smart Library System peripheral spotlight).
  - Status Pills: Distinct badges for `Working prototype`, `Prototype`, and `Academic prototype`.
  - Link Indicators: Active link state vs. pending repository badge.
- **Skill Inventory Group:** Structured category lists (Languages, Full Stack, AI/Data, Tools).

---

## 4. Visual Direction: "Editorial Systems Notebook"

Adhere strictly to the **Editorial Systems Notebook** aesthetic established in `docs/design-discovery.md`:

- **Atmosphere:** Calm, structured, precise, and intellectually honest — akin to a senior engineer's well-kept notebook or a research laboratory log.
- **Anti-AI-Cliche Checklist:**
  - NO purple/blue neon gradient fills or glowing borders.
  - NO floating glassmorphic frosted cards with blurry backdrops.
  - NO giant colorful gradient text or fake dashboards.
  - NO arbitrary 3D illustrations or ungrounded geometric shapes.
  - NO decorative particle backgrounds or fake user/revenue counters.

---

## 5. Authentic Content & Prototype Reality

Every frame must use real data from `src/content/`:
- **Real Project Copy:** Use the exact titles, value propositions, and summaries from `src/content/projects.ts`.
- **Zero Fabricated Metrics:** Do not create mockup badges like "100k+ Users", "$10k MRR", or "99.9% Accuracy".
- **Transparent Prototype Badging:** Prominently display:
  - *"Simulated/dummy welfare data — not an official government system"* on Voice AI.
  - *"Gemini API free-tier prototype"* on AI Habit Tracker.
  - *"Microsoft Imagine Cup 2026 project"* on Laptop Recommender.
- **Pending Link Labels:** For pending links, show muted pills: `"Repo link coming soon"`. Never draw fake interactive buttons for non-existent URLs.

---

## 6. Implementation Consistency (Figma ↔ Code)

Every design decision in Figma must directly map to the engineering stack:
- **Tailwind CSS v4:** Colors, radii, and spacing in Figma must have 1-to-1 parity with CSS variables in `src/app/globals.css`.
- **shadcn/ui Primitives:** Align buttons, sheets/drawers, and tooltips with the shadcn `base-nova` component architecture.
- **Responsive Parity:** Layout frames in `DESKTOP` and `MOBILE` must reflect flexbox/grid mechanics that can be cleanly implemented without magic pixel positioning.
