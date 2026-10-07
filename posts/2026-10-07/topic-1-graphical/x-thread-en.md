# Topic 1: Graphical — X Thread (English)
**Date:** 2026-10-07
**Platform:** X (Twitter)
**Format:** 8-tweet thread
**Image:** graphical-x-threads-en.jpg (16:9)

---

**Tweet 1 — Hook**
The reason AI-generated interfaces look generic isn't the model.
It's that the design language goes in as text.

Graphical is a new tool that puts it in as constraints instead.

---

**Tweet 2**
Josh Puckett and Adam Michela just shipped Graphical:
a visual theme builder that outputs `GUI.md`, tokens, Base UI components, and three coding-agent skills.

You design the visual language, then hand the whole package to your coding agent.

---

**Tweet 3**
The workflow is the interesting part:

1. Open Graphical, build your theme (colors, typography, spacing, shape, motion, component states)
2. Export: you get `GUI.md` + token files + Base UI React source + 3 agent skills
3. Drop that package into your coding agent's context
4. Now every screen it generates knows your design language

---

**Tweet 4**
`GUI.md` is the key file.

It's a detailed theme reference the agent reads before generating any interface.
Not a style guide for humans — a constraint document for agents.

Same principle as `design.md` (Vercel) and `DESIGN.md` (Onefold), but for the visual language layer specifically.

---

**Tweet 5**
The three included skills:

→ Build new screens in the theme
→ Apply the theme to existing UI
→ Find and fix inconsistent styles

The agent can audit its own output for drift.
That's a different category of tool than "here's a prompt to copy."

---

**Tweet 6**
This connects to a pattern I've been tracking:

Thanor (Oct 5): constraint spec library — 30 design values eliminate AI slop upstream of the prompt.
Graphical: visual language editor — exports constraints in the format your agent actually reads.

Both are saying the same thing: prompting harder doesn't work. Constraint architecture works.

---

**Tweet 7**
Honest framing:
- This is a one-time purchase, not a free tool
- It works with Base UI components — framework-agnostic tokens, but React in practice
- Quality ceiling is still your taste in the theme editor
- It doesn't write prompts for you — it replaces the need to write visual style prompts at all

---

**Tweet 8 — CTA**
The insight from Graphical isn't "AI can style your UI."

It's that you should define your visual language once, in the format agents read, and stop re-describing it in every prompt.

Prompt engineering for visual style is the wrong unit of work.
Constraint architecture is the right one.

→ graphicalui.com

