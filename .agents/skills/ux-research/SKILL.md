---
name: ux-research
description: Methodology for researching UX patterns, analyzing recruiter journeys, evaluating multi-device interactions, and extracting structural principles without copying designs.
---

# UX Research Skill — Adhiviraj Pal Portfolio

This skill establishes the user experience research methodology for Adhiviraj Pal's personal portfolio. UX research must precede visual design and implementation to ensure that every layout, flow, and component serves real user needs.

---

## 1. Research Baseline & Core Document

- **Baseline:** Always ground UX research in [`docs/design-discovery.md`](file:///c:/Users/palad/OneDrive/Desktop/Portfolio/docs/design-discovery.md). It serves as the established project discovery brief, persona definition, and information architecture specification.
- **Goal:** Help technical recruiters, engineering managers, and collaborators evaluate Adhiviraj's capability within a 15–30 second scanning window, while offering clear pathways for deep-dive technical reviews.

---

## 2. Pattern Discovery Methodology: Research → Analyze → Abstract → Create

Never copy a screen, wireframe, or visual style from Mobbin or external references. Follow a disciplined four-stage abstraction model:

1. **Research Multiples:**
   - Always compare multiple references (3+ products or portfolios) rather than anchoring on a single screen.
   - Look across developer portfolios, editorial engineering logs, technical documentation sites, and clean developer tooling products.
2. **Analyze Intent & Hierarchy:**
   - *Why does this pattern exist?*
   - *What information hierarchy does it establish?*
   - *What cognitive load does it place on the visitor?*
   - *How does it behave when content or screen size changes?*
3. **Abstract Principles:**
   - Extract structural mechanics: progressive disclosure, metadata placement, scanning rhythm, sticky navigation triggers, drawer interactions, and status indicators.
4. **Create Original Solutions:**
   - Synthesize the extracted principles into an authentic design tailored to Adhiviraj's specific story, projects, and prototype reality.

---

## 3. Recruiter & User Journey Analysis

Map all design decisions against the target audiences:

| Persona | Immediate Need | Scanning Priority | Friction to Eliminate |
| --- | --- | --- | --- |
| **Recruiter / Hiring Manager** | Who is he, what role is he seeking, what does he build? | 1. 2-line positioning<br>2. Selected project cards with visible status<br>3. Stack inventory<br>4. Quick contact (email/GitHub) | Vague greetings, unlabelled prototypes, missing links, buried contact info |
| **Technical Reviewer** | Did he actually build this? How does it work? | 1. Problem & approach<br>2. Technical highlights<br>3. Code repository / architecture notes<br>4. Prototype reality & constraints | Overstated claims, buzzwords, missing repo links, fabricated stats |
| **Peer / Collaborator** | Engineering interests and mindset | 1. Hardware + software breadth<br>2. Journey / learning mindset<br>3. Social channels (X, LeetCode, GitHub) | Pretentious bio, non-functional demos |

---

## 4. Mobile UX Research & Touch Behavior

Mobile is a first-class reading experience, not a desktop afterthought:

- **Desktop vs. Mobile Behavior Mapping:** For every component, explicitly research and define its mobile translation:
  - *Asymmetric project showcase* → stacks into a clean, full-width single-column stream.
  - *Facts rail on detail pages* → flows inline ahead of or directly below the narrative.
  - *Horizontal link bars* → wrap naturally or move into an accessible drawer.
- **Touch Ergonomics:** Research thumb zones; ensure critical controls (menu button, email action, repo links) are at least 44×44px with comfortable tap padding.
- **Zero Hover Dependence:** Test that no information (status, tags, value props) is locked behind desktop hover states.

---

## 5. Accessibility & Inclusivity Research

- **Semantic Landmark Research:** Plan standard semantic sections (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- **Heading Hierarchy:** One logical `<h1>` per page, sequential `<h2>` sections, and non-confusing subheading levels.
- **Contrast & Legibility:** Minimum 4.5:1 text contrast on both light and dark themes. Ensure metadata text (dates, tags) remains readable.
- **Reduced Motion Considerations:** Ensure animations communicate state changes (opacity/transform) and gracefully degrade under `prefers-reduced-motion`.

---

## 6. Alignment with "Editorial Systems Notebook"

All UX research insights must filter through the **Editorial Systems Notebook** philosophy:
- **Calm, Disciplined, Type-Led:** Prioritize clean reading rhythm, structured sections, and visible metadata.
- **Reject Generic AI Clichés:** Actively filter out references with floating 3D spheres, glowing cards, neon purple/blue gradients, glassmorphism overuse, fake metric counters, and continuous marquee spam.
- **Authenticity First:** Embrace the honesty of working student prototypes (e.g., simulated scheme data, free-tier API limits) as a sign of maturity and technical transparency.
