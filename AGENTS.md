# AGENTS.md

# ADHIVIRAJ PAL — PORTFOLIO
## Design, UX, Frontend Engineering & Product Quality Constitution

You are responsible for designing and implementing a professional personal
portfolio for Adhiviraj Pal.

The goal is NOT to generate a generic AI-made portfolio.

The goal is to create a portfolio that feels intentionally designed by a
professional product designer and implemented by a strong frontend engineer.

The portfolio must communicate:

- engineering ability
- AI/ML interest
- frontend ability
- product thinking
- problem solving
- projects
- technical depth
- personality
- professional credibility

The website must be:

- visually polished
- responsive
- accessible
- performant
- interactive
- maintainable
- technically sound
- human-designed in appearance

---

# 1. TECHNOLOGY STACK

The initial application uses:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- Motion / Framer Motion where appropriate
- Git
- GitHub
- Vercel

Use the existing package versions in package.json.

Do not unnecessarily replace the project's framework or tooling.

---

# 2. BACKEND STRATEGY

Version 1 does NOT require a separate backend.

Use Next.js capabilities for simple backend functionality:

- Server Components
- Server Actions
- Route Handlers
- API endpoints
- server-side logic

Possible V1 backend features:

- contact form
- email submission
- project data
- simple form processing
- analytics integration

Do NOT introduce FastAPI unless there is a genuine requirement.

Examples of genuine FastAPI requirements:

- AI/ML inference
- Python-specific processing
- computer vision
- NLP pipelines
- long-running Python workloads
- complex backend services
- ML recommendation systems
- specialized Python libraries
- a backend API that must be independently deployed

If such a requirement appears, propose the architecture before introducing FastAPI.

Never add FastAPI simply because it appears more advanced.

---

# 3. DESIGN TOOL WORKFLOW

The available design tools have different responsibilities.

Do not use them interchangeably.

## Mobbin

Mobbin is the UX research/reference tool.

Use Mobbin to research:

- navigation patterns
- hero sections
- project showcases
- portfolio layouts
- case studies
- responsive patterns
- mobile navigation
- cards
- interactions
- contact sections
- editorial layouts

Mobbin research should answer:

- How does this pattern work?
- Why does it work?
- What information hierarchy does it create?
- How does the user interact with it?
- How does it behave on mobile?
- What can be learned from it?

DO NOT copy a Mobbin screen.

DO NOT reproduce another company's exact design.

Use:

Research → Analyze → Abstract → Create an original design.

---

# 4. FIGMA WORKFLOW

Use Figma as the visual design and design-reference layer.

Figma can be used for:

- layout exploration
- visual hierarchy
- responsive frames
- component design
- design tokens
- typography
- spacing
- interaction states
- visual QA

When implementing a Figma design:

1. Inspect the relevant design.
2. Understand its structure.
3. Identify reusable components.
4. Identify typography and spacing.
5. Identify responsive behavior.
6. Implement using the existing Next.js architecture.
7. Preserve the visual hierarchy.
8. Adapt the design rather than blindly translating pixels.

If a Figma design conflicts with accessibility or responsive usability,
prioritize usability and accessibility.

---

# 5. PRODUCT DESIGN WORKFLOW

Use Product Design reasoning before major UI decisions.

Every major section should answer:

1. Who is the user?
2. What does the user need to understand?
3. What is the primary action?
4. What is the visual hierarchy?
5. Why does this section exist?

Do not add sections merely because portfolio templates commonly contain them.

Every section must earn its place.

---

# 6. DESIGN PROCESS

For major UI work follow this sequence:

DISCOVER
↓
RESEARCH
↓
DESIGN
↓
IMPLEMENT
↓
INTERACT
↓
RESPONSIVE
↓
TEST
↓
POLISH

Do not immediately generate large amounts of UI code before understanding
the existing application and design requirements.

---

# 7. PROJECT INSPECTION

Before modifying an existing project:

Inspect:

- package.json
- app structure
- routing
- components
- styling system
- Tailwind configuration
- shadcn configuration
- existing CSS
- fonts
- assets
- existing design tokens
- existing dependencies

Reuse working infrastructure whenever possible.

Do not rewrite the application unnecessarily.

---

# 8. INFORMATION ARCHITECTURE

The portfolio should prioritize:

1. Home
2. Projects
3. About
4. Experience / Journey
5. Skills
6. Contact

The exact structure may change based on content.

Do not create unnecessary pages.

Possible routes:

/
 /projects
 /projects/[slug]
 /about
 /contact

A project should have its own case-study page when there is enough
meaningful information to justify one.

---

# 9. HERO SECTION

The hero must communicate quickly:

- who I am
- what I build
- what I am interested in
- why the visitor should continue

Avoid generic copy such as:

"Welcome to my portfolio."

Avoid meaningless buzzwords.

The hero should have:

- strong typography
- clear positioning
- primary CTA
- secondary CTA where appropriate
- restrained visual interaction

Do not overload the hero with animation.

---

# 10. PROJECTS

Projects are the primary proof of technical ability.

Each project should communicate:

- project name
- problem
- solution
- technology
- role
- important technical details
- outcome when real data exists
- links when available

Never invent:

- users
- revenue
- statistics
- performance numbers
- testimonials
- clients
- achievements
- employment
- results

If information is missing, use a clearly marked placeholder.

---

# 11. PROJECT CARD DESIGN

Project cards should feel interactive but not gimmicky.

Possible interactions:

- image movement
- subtle scale
- metadata reveal
- directional hover
- image transformation
- cursor interaction
- transition between states

Hover cannot be the only way to access information.

Touch devices must receive an equivalent experience.

---

# 12. CASE STUDY DESIGN

When a project deserves a case study, structure it around storytelling.

Recommended structure:

1. Overview
2. Problem
3. Context
4. Role
5. Approach
6. Architecture
7. Design decisions
8. Implementation
9. Challenges
10. Results
11. Learnings
12. Links

Use visual storytelling instead of walls of text.

---

# 13. DESIGN SYSTEM

Maintain a consistent design system.

Define and reuse:

- colors
- typography
- spacing
- radius
- shadows
- container widths
- breakpoints
- animation timing
- easing

Prefer design tokens and CSS variables.

Do not repeatedly introduce arbitrary values.

Use a consistent spacing system.

---

# 14. TYPOGRAPHY

Typography should be treated as a primary design element.

Define hierarchy for:

- display
- H1
- H2
- H3
- body
- small text
- metadata
- labels

Use a limited number of font families.

Do not use oversized typography simply to make the website appear impressive.

Typography must remain readable on mobile.

---

# 15. COLOR

Create a restrained color system.

Use:

- background
- foreground
- muted foreground
- surface
- border
- accent
- destructive/error where required

Do not automatically use:

- purple AI gradients
- neon blue
- glowing borders
- excessive gradients

Color should support hierarchy rather than become decoration.

---

# 16. AVOID GENERIC AI DESIGN

Do NOT automatically create:

- excessive glassmorphism
- floating gradient blobs
- glowing cards
- excessive rounded cards
- giant gradient text
- random 3D objects
- animated backgrounds everywhere
- excessive particle effects
- fake dashboards
- meaningless statistics
- unnecessary charts
- excessive shadows

These techniques may be used only when there is a clear design reason.

The result should look human-designed.

---

# 17. RESPONSIVE DESIGN

The website must be intentionally designed for:

- 320px
- 375px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Do not simply shrink the desktop design.

Desktop and mobile should both be deliberately composed.

Check:

- navigation
- typography
- spacing
- cards
- images
- buttons
- forms
- overflow
- section ordering
- touch targets

---

# 18. MOBILE DESIGN

Mobile is a first-class experience.

For every desktop component ask:

- What happens on mobile?
- Does it stack?
- Does it collapse?
- Does it become a drawer?
- Does it become horizontally scrollable?
- Does it require a different interaction?

Never depend exclusively on hover.

Touch interactions must be comfortable.

Avoid tiny interactive elements.

---

# 19. NAVIGATION

Desktop navigation should be:

- simple
- clear
- accessible
- consistent

Possible features:

- sticky navigation
- active section indication
- subtle background transition
- hover state

Mobile navigation should include:

- accessible menu button
- animated open/close
- clear close action
- keyboard support
- focus handling
- body scroll handling where appropriate

---

# 20. ANIMATION PHILOSOPHY

Animation should communicate:

- hierarchy
- continuity
- interaction
- feedback
- state changes

Animation must never exist only because "AI portfolios should be animated."

Use animation for:

- page entrance
- section reveal
- hover states
- navigation
- project transitions
- modal/drawer transitions
- micro-interactions

Avoid:

- constant movement
- excessive parallax
- animation on every element
- long loading animations
- distracting backgrounds
- excessive cursor effects

---

# 21. MOTION TIMING

Use restrained motion.

Typical guidance:

Micro interaction:
150–250ms

Component transition:
250–400ms

Large transition:
400–700ms

Use appropriate easing.

Do not make the interface feel slow.

Prefer transform and opacity for performant animation.

---

# 22. REDUCED MOTION

Always support:

prefers-reduced-motion

Users who prefer reduced motion must still receive the complete experience.

Never hide essential information behind animation.

---

# 23. INTERACTION STATES

Interactive elements should have appropriate:

- default
- hover
- focus
- active
- disabled
- loading
- error

states where relevant.

If something looks clickable, it should behave like a clickable element.

Do not create fake interactions.

---

# 24. ACCESSIBILITY

Use semantic HTML.

Ensure:

- keyboard navigation
- visible focus states
- accessible labels
- meaningful alt text
- correct heading hierarchy
- sufficient contrast
- accessible buttons
- accessible links
- form labels
- reduced motion support

Do not sacrifice accessibility for visual design.

---

# 25. PERFORMANCE

Performance is part of the design.

Avoid unnecessary:

- JavaScript
- dependencies
- animation loops
- large images
- expensive scroll handlers
- duplicated components

Prefer:

- optimized images
- lazy loading
- server components where appropriate
- CSS animations where appropriate
- transform/opacity animation
- code splitting when useful

Do not install a package for a feature that can reasonably be implemented
with existing project capabilities.

---

# 26. COMPONENT ARCHITECTURE

Use reusable components.

Potential structure:

components/
├── layout/
├── navigation/
├── hero/
├── projects/
├── about/
├── experience/
├── skills/
├── contact/
├── motion/
└── ui/

Do not create one giant page component.

Do not over-abstract simple components.

Reuse components when they represent a meaningful repeated UI pattern.

---

# 27. SHADCN/UI

If shadcn/ui is installed:

Prefer its primitives when appropriate.

Reuse:

- Button
- Dialog
- Sheet
- Tooltip
- Tabs
- Input
- Form
- Card

when they fit the design.

Do not force shadcn components into places where custom UI is more appropriate.

The final design should not look like an unmodified shadcn template.

---

# 28. ICONS

Use Lucide React or the project's existing icon system.

Do not use random emoji as UI icons.

Icons should have consistent:

- size
- stroke weight
- alignment

Use icons to improve comprehension, not as decoration.

---

# 29. CONTENT

Content must be authentic.

Never fabricate:

- experience
- internships
- jobs
- achievements
- clients
- statistics
- testimonials
- project outcomes
- technical results

If information is unknown, ask or use a clearly marked placeholder.

---

# 30. SEO

The portfolio should have:

- meaningful page titles
- metadata
- description
- Open Graph metadata
- sensible URLs
- semantic HTML

Project pages should have meaningful metadata.

Do not keyword-stuff the website.

---

# 31. DOMAIN

The intended production domain is:

adhiviraj.in

The website should be configured so the production environment can use this
domain when deployed.

Do not hardcode development URLs into production UI.

---

# 32. DEPLOYMENT

The target deployment platform is Vercel.

The intended workflow is:

Local development
↓
Git
↓
GitHub
↓
Vercel
↓
Production
↓
adhiviraj.in

Before deployment:

- run production build
- fix TypeScript errors
- fix lint errors
- check console errors
- check responsive behavior
- check images
- check metadata
- check links
- check forms

Never claim deployment succeeded unless the deployment was actually verified.

---

# 33. GIT

Make focused commits.

Prefer commit messages such as:

feat: add project showcase
feat: add responsive navigation
style: refine typography system
fix: mobile project card overflow
fix: navigation focus state
perf: optimize project images

Do not make giant unrelated commits when smaller commits are practical.

---

# 34. VISUAL QA

After implementing a major UI change:

1. Run the application.
2. Inspect desktop.
3. Inspect mobile.
4. Inspect tablet.
5. Check typography.
6. Check spacing.
7. Check alignment.
8. Check image cropping.
9. Check interactions.
10. Check animation.
11. Check keyboard navigation.
12. Check console.
13. Check build.
14. Fix the highest-impact problems.

Never assume that because the code compiles, the UI is finished.

---

# 35. DESIGN CRITIQUE

When asked to improve an existing design, do not immediately rewrite everything.

First evaluate:

- hierarchy
- typography
- spacing
- composition
- navigation
- project presentation
- responsive behavior
- interaction
- motion
- accessibility
- consistency

Identify the highest-impact problems first.

Fix those before minor details.

---

# 36. PRIORITY ORDER

When making a design decision:

1. Correctness
2. Usability
3. Accessibility
4. Responsive behavior
5. Information hierarchy
6. Visual consistency
7. Performance
8. Animation
9. Decoration

Never sacrifice usability for decoration.

---

# 37. TOOL SELECTION

Use the appropriate tool for the appropriate problem.

Mobbin:
UX research and pattern discovery.

Figma:
Visual design, layout, components and design reference.

Product Design:
UX reasoning, hierarchy, flows and design decisions.

Codex:
Implementation, debugging, refactoring and testing.

GitHub:
Version control and collaboration.

Vercel:
Deployment.

Do not call or use a tool merely because it is available.

---

# 38. TOOL RESEARCH RULE

When using external design references:

Research multiple references.

Do not base the entire portfolio on one reference.

Extract patterns instead of copying screens.

Create a unified original visual system.

---

# 39. LARGE TASK EXECUTION

For a large redesign, work in phases.

PHASE 1:
Inspect repository.

PHASE 2:
Research UX patterns.

PHASE 3:
Define information architecture.

PHASE 4:
Define design direction.

PHASE 5:
Define design tokens.

PHASE 6:
Build layout and navigation.

PHASE 7:
Build hero.

PHASE 8:
Build projects.

PHASE 9:
Build supporting sections.

PHASE 10:
Build responsive behavior.

PHASE 11:
Add motion.

PHASE 12:
Accessibility and performance.

PHASE 13:
Visual QA.

PHASE 14:
Final polish.

Do not attempt to redesign every part simultaneously without structure.

---

# 40. WHEN TO ASK THE USER

Do not ask unnecessary questions.

Make reasonable professional decisions yourself.

Ask only when required information is genuinely missing.

Examples:

- missing project information
- missing personal information
- unclear branding
- destructive architectural change
- unclear functionality
- unavailable asset

Otherwise proceed.

---

# 41. IMPORTANT ARCHITECTURAL RULE

Do not introduce FastAPI, a separate database, Redis, Docker, Kubernetes,
or other infrastructure unless the project has a real requirement for it.

The initial portfolio should remain a clean Next.js application.

Architecture should evolve because requirements evolve.

Never add complexity simply to make the technology stack appear impressive.

---

# 42. DEFINITION OF DONE

A portfolio feature is NOT complete when the code compiles.

It is complete when:

- it works
- it looks intentional
- it works on mobile
- it works on desktop
- it is accessible
- it has appropriate interaction states
- animations are purposeful
- it does not introduce console errors
- it does not break existing functionality
- it follows the design system
- it performs reasonably
- the implementation is maintainable

---

# FINAL PRINCIPLE

Build a portfolio that feels like a real digital product.

Research before copying.
Design before decorating.
Build before over-engineering.
Animate with purpose.
Test on mobile.
Respect accessibility.
Keep the architecture simple.
Add complexity only when the product requires it.

The goal is:

PROFESSIONAL DESIGN
+
STRONG UX
+
EXCELLENT FRONTEND ENGINEERING
+
AUTHENTIC PERSONAL BRAND

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
