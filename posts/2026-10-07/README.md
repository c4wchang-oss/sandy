# 2026-10-07 Daily AI UX Content Batch

### Topics Covered

**Topic 1 — Graphical (Josh Puckett + Adam Michela)**
A visual theme builder that outputs `GUI.md`, design tokens, Base UI React components, and three coding-agent skills (build new screens, apply theme to existing UI, find and fix style drift). The tool's core argument: define your visual language once, in the format your coding agent reads natively, and stop re-describing it in every prompt. Constraint architecture > prompt engineering for visual quality. Extends the style-as-constraint pattern (first named Sep 26, Google Flow SwissFlow Studio) to the coding-agent visual language layer. Connects to: reference-beats-description convergence, Thanor (Oct 5) constraint spec library.

**Topic 2 — Figma Agent GA: Library Guidelines**
New feature in the Figma agent GA (Oct 6): upload Markdown files to a published design library. Agent reads them automatically every time someone prompts with that library enabled. Recommended: 3–8 focused files, under 100 KB (overview.md, components.md, anti-patterns.md, best-practices.md). Write each rule as a scenario: situation → what to do → what to avoid → why. Repeated information = higher credit use. Also in GA: teammates' agents now visible on canvas. New frame: design system documentation and agent constraints are now the same job.

### Deliverables
- X thread × 2 (EN + ZH) per topic = 4 threads
- Threads post × 2 (EN + ZH) per topic = 4 posts
- 小紅書 post × 2 (EN + ZH) per topic = 4 posts
- Images × 4 per topic (16:9 for X/Threads EN+ZH, 3:4 for 小紅書 EN+ZH) = 8 images

### New Frames Added to Memory
- Visual language as agent constraint: design the visual system before the first prompt; GUI.md = constraint document for coding agents (Graphical)
- GUI.md extends constraint document stack to coding-agent visual layer (alongside design.md, DESIGN.md, AGENTS.md)
- Design system documentation = agent constraint: same document, two audiences — humans and agents (Figma guidelines)
- Guideline quality as credit efficiency: redundant guidelines cost money at team scale; DesignOps scope expands
- Agent observability on canvas: teammates' agents visible in same Figma file natively (no log, no dashboard)
- style-as-constraint pattern convergence extended: Graphical (visual language for coding agents) + Figma guidelines (design system rules for design agents) = both sides of constraint architecture confirmed

