---
name: product-design
description: Guidance for UX hierarchy, recruiter-first portfolio thinking, information architecture, mobile-first design, and the Editorial Systems Notebook aesthetic for Adhiviraj Pal's portfolio.
---

# Product Design Skill — Adhiviraj Pal Portfolio

This skill guides all UX, product design, and architectural decisions for Adhiviraj Pal's personal portfolio. Every section and UI element must earn its place based on user needs, technical credibility, and product reasoning.

---

## 1. Core Positioning & User Personas

- **Positioning:** *"Full-Stack Developer building practical products with AI/ML"* — a 3rd-year B.Tech ECE student at Galgotias College exploring real-world applications through prototypes and iteration.
- **Primary Persona (Recruiter / Hiring Manager):**
  - Needs: Rapidly understand who Adhiviraj is, what he builds, his technical range, and how to reach him.
  - Time Budget: 10–30 second initial scan.
  - Desired Action: Review selected projects, then reach out via email or explore GitHub.
- **Secondary Persona (Technical Reviewer / Peer Collaborator):**
  - Needs: Proof of genuine problem-solving, architectural rationale, code links, and honest acknowledgment of prototype limitations.
  - Desired Action: Dive into project details, inspect architecture and code.

---

## 2. Information Architecture (IA)

Follow the validated hybrid model from `docs/design-discovery.md`:

| Route | Purpose | Content & Priority |
| --- | --- | --- |
| `/` (Home) | Fast recruiter scan & primary evidence | 1. Direct positioning Hero (no fluff)<br>2. Selected Projects (Top 3)<br>3. Smart Library hardware feature<br>4. How I Build / Current Journey<br>5. Technical Range (categorized inventory)<br>6. Education & Credibility signals<br>7. Persistent low-friction Contact CTA |
| `/projects` | Calm, comprehensive project archive | All 4 projects ordered by priority (1 to 4) with status, summary, and stack |
| `/projects/[slug]` | Deep-dive case study / technical note | Narrative breakdown: Problem, Approach, Architecture, Technical Highlights, Prototype Limitations, and Links |

> **Note:** Standalone `/about` and `/contact` pages are omitted for V1. The personal story and contact actions are integrated directly into the home page flow to reduce navigation friction.

---

## 3. Project Prioritization & Anti-Fabrication Rules

Never invent metrics, users, revenue, clients, testimonials, or commercial claims. Represent prototype status honestly:

1. **Voice AI Government Scheme Assistant (Priority 1 — Lead Project):**
   - Value: Conversational discovery of welfare schemes across voice, text, and web.
   - Status: `Working prototype / actively improving`.
   - Mandatory Disclaimer: Uses simulated/dummy scheme data; not an official government system.
2. **AI Habit Tracker (Priority 2):**
   - Value: Habit tracking that translates weekly completion patterns into next-week recommendations.
   - Status: `Working prototype / actively improving`.
   - Technical Reality: Uses Gemini API within free-tier rate limits.
3. **ML-Based Laptop Recommendation Platform (Priority 3):**
   - Value: Translates budget and workload into laptop recommendations.
   - Status: `Prototype / actively improving`.
   - Context: Microsoft Imagine Cup 2026 project (no competition results claimed).
4. **Smart Library System (Priority 4 — Supporting Hardware Proof):**
   - Value: ESP32 + RFID + QR scanner + OLED multi-peripheral state machine.
   - Status: `Academic/project prototype`.
   - Role: Demonstrates ECE hardware/embedded range alongside software skills.

*Links:* If repository or demo links are pending, mark them clearly with `status: "pending"` notes; do not render fake buttons or dead links.

---

## 4. Visual Direction: "Editorial Systems Notebook"

Adopt **Option A** from `docs/design-discovery.md`:

- **Personality:** Calm, precise, curious, disciplined, and quietly ambitious — like a meticulously kept engineering notebook.
- **Visual Structure:**
  - High-contrast typography: Strong, readable sans-serif for display/body paired with restrained monospace for metadata, status tags, and dates.
  - Color: Warm off-white or neutral stone canvas, deep charcoal/ink text, subtle graphite divider rules, and a single disciplined functional accent.
  - Layout: Strong editorial grid, generous whitespace, section divider lines instead of heavy floating cards.
  - Imagery: Authentic project media and typographic data cards. No decorative stock mockups.
- **Patterns to Strictly Avoid (Generic AI Tropes):**
  - No purple/blue AI gradient blobs or glowing card borders.
  - No floating glassmorphism everywhere.
  - No giant gradient text or meaningless percentage meters.
  - No fake dashboards, particle systems, or random 3D shapes.
  - No hover-only information disclosure.

---

## 5. Mobile-First UX Principles

- Every desktop block must gracefully collapse into a deliberate single-column reading flow.
- All metadata (status, technologies, links) must remain fully visible at rest without requiring hover.
- Interactive touch targets must meet the minimum 44×44px guideline.
- Navigation utilizes an accessible mobile drawer/sheet with clear close control and keyboard focus trapping.
- Primary contact CTA (email) is reinforced both after selected projects and in the footer.
