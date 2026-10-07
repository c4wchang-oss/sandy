# Topic 1: Graphical — 小紅書 Post (English)
**Date:** 2026-10-07
**Platform:** 小紅書 (Xiaohongshu / RED)
**Format:** Practical review / tutorial
**Image:** graphical-xhs-en.jpg (3:4)

---

**Title:** Why your AI-built UI looks generic — and the tool that fixes it upstream

**Body:**

Your AI interface looks like every other AI interface because you're describing your design language in text. The model approximates it. Graphical gives your coding agent the actual constraints instead.

New this week from Josh Puckett (Iteration Design) + Adam Michela. Here's how it works:

**What Graphical does:**
1. Visual theme editor — design your full visual language: palette, type scale, spacing, shape (radii, shadows), motion (easing, timing), component interactive states
2. Export package — `GUI.md` (agent theme reference), design tokens, Base UI React components, 3 agent skills
3. Drop the package into Claude / Cursor / Codex / ChatGPT context → every screen your agent builds follows your design language

**The 3 agent skills included:**
- Build new screens in your theme
- Apply your theme to existing UI
- Find and fix inconsistent styles (agent audits its own output)

**Why this matters as a designer:**
- Constraint architecture > prompt engineering for visual quality
- `GUI.md` = the constraint document your coding agent reads; not a style guide for humans
- The "find and fix drift" skill = a quality loop built into the workflow, not a manual step
- Same pattern as design.md (Vercel), DESIGN.md (Onefold), GUI.md (Graphical) — constraint document stack now covers coding-agent visual layer
- One-time definition of visual language; stops re-describing style in every single prompt

**Honest caveats:**
- Paid (one-time purchase, not subscription)
- Built around Base UI/MUI — React in practice
- Theme quality = your design judgment in the editor
- Not a prompt-to-UI generator — it's a constraint layer upstream of generation

**Who it's for:**
Designers and developers shipping products with coding agents who are tired of everything looking like the same shadcn starter kit.

The frame: stop prompt engineering your visual style. Define it once in the format your agent reads.

→ graphicalui.com

#AIDesign #CodingAgent #DesignSystem #UIDesign #ConstraintArchitecture #GraphicalUI #DesignTools #AITools #FrontendDesign #UXDesign

