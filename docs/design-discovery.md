# Design Discovery — Adhiviraj Pal Portfolio

## 1. Discovery brief

**Goal:** help internship recruiters and technical collaborators quickly understand who Adhiviraj is, what he builds, and where to find evidence of that work.

**Positioning:** a third-year ECE student building practical full-stack and AI/ML prototypes, learning through experimentation and iteration. The site should signal momentum and sound judgment—not seniority, commercial scale, or claims that the prototypes cannot support.

**Design principle:** projects are the proof; the personal story explains the motivation behind them; skills and credibility provide context rather than competing for attention.

## 2. Research findings

### Mobbin research note

Mobbin’s public discovery experience confirms a useful research model: study real products through **screens**, reusable **UI elements**, and complete **flows**, rather than copying a single visual style. Its browse categories include Home, Profile, Settings, Search, Carousel, Sidebar, Tabs, and Buttons; it also distinguishes screen-by-screen prototypes from video flow playback. The full screen library requires an account, so no individual Mobbin screen has been copied or treated as a visual target.

### Patterns worth adapting

| Pattern | Problem it solves | Adaptation for this portfolio |
| --- | --- | --- |
| Direct, two-line positioning | A recruiter needs relevance before browsing a long page. | Lead with name, student/full-stack positioning, and the internship goal—not a generic greeting. |
| Curated work before biography | Visitors need evidence before background detail. | Put three selected projects immediately after the hero; keep the Smart Library project as a compact fourth proof point. |
| Project preview → detail route | A project grid alone cannot explain technical judgment. | Give each project a concise preview and a detail page with problem, approach, role, prototype status, and links. |
| Always-visible status and metadata | A prototype can be misunderstood as a commercial product. | Make `Working prototype / actively improving` visible in the card and detail header. |
| Persistent, low-friction contact | A visitor should not need to hunt for a way to respond. | Keep GitHub and email reachable from navigation/footer; repeat a contextual contact CTA after the evidence sections. |
| Progressive disclosure | Dense technical information overwhelms a quick scan. | Show one outcome, status, and a small technology set on cards; reserve architecture and highlights for details. |
| Mobile-first navigation drawer | Desktop links become crowded and difficult to tap on a phone. | Use a menu button with clear close control, focus management, and the same routes/actions as desktop. |

### Patterns to avoid

- An introductory screen that delays projects behind a long personal statement.
- A wall of technology badges, animated skill meters, or unverified proficiency levels.
- Large “achievement” counters or commercial-looking claims for prototype work.
- Screenshots, dashboards, or device mockups that do not come from the actual projects.
- A contact form that adds friction when a clear email link is sufficient initially.
- Hover-only project information or navigation that disappears on touch devices.
- Motion that substitutes for project substance: continuous scrolling marquees, particles, cursor trails, or decorative 3D.

### Research references

- [Mobbin: UI and UX inspiration library](https://mobbin.com/)
- [Igor Mihajlovski — portfolio case study](https://www.igormihajlovski.com/projects/personal-portfolio-website/)
- [Bernard Uhden Jr. — portfolio case study](https://bernarduhden.com/case-studies/bernard-uhden-portfolio)
- [Syed Muhammad Huzaifa — developer portfolio project](https://huzaiffadev.com/projects/personal-developer-portfolio)

The reference set is used for information architecture and interaction patterns only. It does not prescribe a visual identity.

## 3. Primary users and desired actions

| User | What they need first | What matters most | Desired action |
| --- | --- | --- | --- |
| Recruiter / hiring manager | Who Adhiviraj is, role direction, internship interest | Strongest projects, honest status, technologies, contact | Open a selected project, then email or visit GitHub. |
| Technical reviewer | Evidence that the work is thought through | Problem/approach, technical highlights, actual links, explicit limitations | Inspect a project detail or GitHub when available. |
| Student / builder | A credible peer story and learning path | Practical motivation, experimentation, breadth across software and embedded systems | Explore projects or connect through GitHub/X. |
| Potential collaborator | Whether interests and working style align | Current prototypes, AI/full-stack direction, openness to building | Reach out by email or GitHub. |

## 4. Recommended user journey

```text
Land
  → understand student-developer positioning and internship goal
  → scan the three strongest practical projects
  → open the most relevant project for problem, approach, and status
  → see breadth across full-stack, AI/ML, and embedded systems
  → validate momentum through the learning journey and credibility signals
  → contact via email or continue to GitHub
```

This path deliberately puts proof before biography. It keeps the first screen useful to a recruiter while giving technical visitors a clear route to depth.

## 5. Information architecture

### Recommendation: hybrid portfolio

Use a focused home page plus a project archive and project detail routes.

| Route | Purpose | Decision |
| --- | --- | --- |
| `/` | Fast recruiter scan: positioning, selected work, supporting context, contact. | Required. |
| `/projects` | A calm archive of all four projects, ordered by priority. | Required; it prevents the home page from becoming a full catalogue. |
| `/projects/[slug]` | Project narrative: problem, approach, role, technical highlights, status, and links. | Required; richer for the first three, concise technical note for Smart Library. |
| `/about` | Separate page for a long biography. | Do not create initially; the story is short and belongs on the home page. |
| `/contact` | Standalone contact page/form. | Do not create initially; direct email and social links are enough. |

This structure earns each route: the home page supports scanning, the archive supports comparison, and details support technical evaluation.

## 6. Homepage hierarchy

1. **Navigation** — name/wordmark, Projects, Story/Journey, GitHub, and a clear email action. It orients repeat visitors without competing with the page.
2. **Hero** — identity, practical full-stack + AI/ML positioning, current student context, internship intent, and two actions: view projects and email. It answers “who, what, and why continue?” immediately.
3. **Selected projects** — the Voice AI Assistant, AI Habit Tracker, and Laptop Recommendation Platform. This is the main evidence section and must receive the strongest space and hierarchy.
4. **Broader engineering proof** — Smart Library as a smaller, deliberate feature. It shows the ECE/embedded dimension without diluting the software-product narrative.
5. **How I build / current journey** — a compact bridge between story and evidence: learns by building, testing, and improving; beginning open-source work. It gives the portfolio a human point of view without becoming an autobiography.
6. **Technical range** — four grouped skill categories, presented as a structured inventory rather than a badge wall. It helps a recruiter map project evidence to tools.
7. **Education and credibility** — concise coursework, Imagine Cup project leadership, Smart India Hackathon participation, and 200+ DSA problems. This supports, rather than leads, the case for capability.
8. **Contact CTA and footer** — a plain invitation to discuss internship/collaboration opportunities, followed by GitHub, LeetCode, X, and email.

## 7. Project strategy

### Shared card anatomy

Each project preview should contain, in order:

1. Priority/context label (for example, `Selected project` or `ECE + embedded`)
2. Title and one-line value proposition
3. Explicit prototype status
4. One concise problem/approach statement
5. A small set of confirmed technologies
6. `View project` entry point; GitHub and live demo only when their URLs exist

Links in a pending state should not be rendered as fake buttons. A detail page may say “Repository link coming soon” in plain supporting text until it is available.

### Differentiated storytelling

| Project | Narrative emphasis | Card weight | Detail-page emphasis |
| --- | --- | --- | --- |
| Voice AI Government Scheme Assistant | Practical access problem, multi-channel conversation, and responsible prototype limits. | Lead project; largest visual area. | Inputs, MCP/eligibility approach, simulated-data disclaimer, next improvements. |
| AI Habit Tracker | Product loop from observed behavior to next-week recommendations. | Second; compact but prominent. | User flow, recommendation logic, Gemini free-tier constraints, UX rationale. |
| ML-Based Laptop Recommendation Platform | User-centered translation of needs into recommendations; Imagine Cup context. | Third; equal structural treatment but slightly quieter. | Requirement inputs, recommendation approach, project-lead role, no claimed competition outcome. |
| Smart Library System | Hardware + software coordination. | Supporting feature; a distinct, smaller format. | Peripheral workflow, state-machine logic, dual-credential flow, academic-prototype status. |

### Desktop and mobile behavior

- **Desktop:** selected projects can use an asymmetric editorial sequence—one lead project followed by two equal supporting projects—not a uniform dashboard grid. Metadata stays visible; a hover can add a subtle affordance, never essential information.
- **Mobile:** every preview becomes a full-width, naturally ordered block. The status, value proposition, and `View project` action stay visible without hover; technology labels wrap rather than becoming horizontal clutter.
- **Detail pages:** use a readable single-column narrative with a compact facts rail on desktop that flows into the document on mobile. Do not assume project screenshots exist.

## 8. Brand and content hierarchy

### Personal brand direction

**Practical builder with technical range.** The voice should be clear, observant, and specific: “here is the problem I explored, how the prototype works today, and what I am improving.” It should feel ambitious because the work spans product, ML, and embedded systems—not because the copy overstates experience.

### Hierarchy

| Level | Content |
| --- | --- |
| Primary | Identity, positioning, internship intent, strongest projects, email/GitHub actions. |
| Secondary | Skill groups, learning journey, education, factual credibility signals. |
| Supporting | Smart Library details, open-source status, additional project implementation details. |

### Profile photo

Do not use a profile photo initially. The portfolio’s evidence is the work, and the current content does not need a portrait to create trust. Reserve an optional small photo slot for the About/Journey area later if Adhiviraj provides a professional, intentional image; it should not become the hero’s focal point.

## 9. Visual direction options

### Option A — Editorial Systems Notebook **(recommended)**

- **Personality:** curious, precise, and quietly ambitious—closer to a well-kept engineering notebook than a startup landing page.
- **Typography:** a confident humanist sans for reading and headlines, with restrained mono labels for status, dates, technologies, and project facts.
- **Color:** warm off-white or pale stone base, ink-like text, soft graphite dividers, and one disciplined functional accent. No gradients or glow.
- **Layout:** strong editorial grid, generous whitespace, numbered project sequence, and section rules instead of many floating cards.
- **Imagery:** project screenshots/photography only when authentic assets are supplied; until then, typographic project panels and factual metadata—not invented illustrations.
- **Navigation:** lightweight sticky bar on desktop; clear full-screen or sheet-style mobile menu.
- **Projects:** a lead project spread followed by smaller project records. Status is a visible label, not a footnote.
- **Motion:** short opacity/transform transitions for navigation and project affordances; respect reduced-motion preferences.
- **Mobile:** a single reading column with clear section boundaries and bottom-of-card actions.
- **Advantages:** supports prototype honesty, works with minimal imagery, distinguishes AI and hardware work without visual clichés, and is easy to maintain as content grows.
- **Disadvantages:** needs excellent type scale and spacing to avoid feeling too plain; it cannot rely on decorative spectacle.

### Option B — Quiet Product Studio

- **Personality:** polished, approachable, and product-minded.
- **Typography:** clean neo-grotesk hierarchy with modest display moments; labels remain practical.
- **Color:** cool neutral canvas with a restrained deep blue or forest accent used only for navigation and calls to action.
- **Layout:** modular project cards, well-defined sections, and an accessible navigation rhythm.
- **Imagery:** project media framed as documentation, never as marketing mockups.
- **Navigation:** conventional sticky navigation with a compact primary action.
- **Projects:** a clear three-card selected-work row with supporting content underneath.
- **Motion:** feedback-oriented hover, menu, and route transitions only.
- **Mobile:** stacked cards and a bottom contact action after selected work.
- **Advantages:** highly recruiter-friendly and straightforward to scan; easy to extend with real project assets.
- **Disadvantages:** risks resembling a polished template unless the project storytelling and type treatment are distinctive.

### Option C — Technical Field Journal

- **Personality:** experimental, maker-oriented, and visibly connected to ECE and software.
- **Typography:** utilitarian sans with a readable mono layer for notes and system labels.
- **Color:** high-contrast neutral palette with muted signal-color accents used for categorization, not decoration.
- **Layout:** project records, annotated process snippets, and a disciplined column system.
- **Imagery:** real hardware/process photography and authentic product captures when available.
- **Navigation:** section index on desktop and an explicit menu on mobile.
- **Projects:** each card foregrounds the problem, system type, and current status before technologies.
- **Motion:** nearly still; use transitions only to clarify navigation and disclosure.
- **Mobile:** one project record at a time with generous touch targets and no dense side notes.
- **Advantages:** naturally connects full-stack, AI/ML, and embedded work; gives Smart Library a meaningful role.
- **Disadvantages:** can feel overly academic or tool-like if the visual system is too literal.

## 10. Recommended direction: Editorial Systems Notebook

Option A is the best fit because it gives Adhiviraj’s actual work room to make the case. The portfolio has a mix of software prototypes, AI integration, recommendation work, and embedded hardware, but not yet a large library of polished product imagery or commercial outcomes. An editorial, evidence-led system works well without inventing visual assets or overstating maturity.

It also serves recruiters: the hierarchy is fast to scan, project status is easy to understand, and the contact path stays close. It serves technical visitors by making project records and future case studies feel credible rather than promotional. Finally, it is responsive and maintainable: one content model can drive concise cards, richer case-study sections, and a calm mobile reading experience.

## 11. Mobile UX strategy

- Use a menu button with an accessible name, clear close action, focus trapping, Escape handling, and restored focus on close.
- Keep the hero as a compact vertical stack: identity, positioning, internship intent, then actions. Avoid oversized type that pushes projects below the first useful viewport.
- Make selected project cards full width with status, value proposition, and `View project` visible at rest.
- Stack section content in narrative order; do not create horizontal carousels for core projects or skills.
- Maintain comfortable 44px-or-greater touch targets and visible keyboard focus states.
- Put an email action after selected projects and again at the close; do not hide the primary conversion behind a form.
- Use project detail navigation that preserves a clear route back to the archive and remembers no hover-only state.

## 12. Accessibility considerations

- Use semantic landmarks, one clear H1, sequential headings, real buttons for menu controls, and descriptive link labels.
- Make status text readable without color alone; distinguish project categories with text labels as well as any accent color.
- Ensure focus visibility, keyboard-operable navigation, dialog focus management, and skip-to-content access.
- Keep body text, metadata, and project-status contrast high enough on both light and dark surfaces if a dark mode is later considered.
- Give authentic project images useful alt text; decorative images should have empty alt text.
- Respect `prefers-reduced-motion` without removing meaning or access to content.

## 13. Motion philosophy

Motion should indicate a change of state, not supply personality by itself.

- Micro-interactions: 150–220ms for links, buttons, and project affordances.
- Component transitions: 250–350ms for the mobile menu and route/section reveals.
- Use opacity and transform; avoid continuous background movement, scroll-jacking, cursor effects, and animated skill charts.
- Project cards may lift or reveal a small directional cue on hover, but all information and actions remain available without hover.

## 14. Figma design plan

The next phase should design—not implement—the recommended direction in Figma:

1. Define the editorial token system: type scale, spacing, grid, neutral colors, one accent, borders, and interaction states.
2. Compose desktop and mobile home-page frames around the actual content hierarchy.
3. Create component states for navigation, CTA/link, project preview, project status, technology metadata, and mobile menu.
4. Design one rich case-study page for the Voice AI Assistant and one compact system-project page for Smart Library to prove the hierarchy scales.
5. Review at 1440px, 1024px, 768px, 430px, 375px, and 320px before coding.

No UI implementation should begin until that design direction has been selected and translated into Figma frames.
