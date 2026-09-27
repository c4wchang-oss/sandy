# 小紅書 Post — Once UI 2.0: Agent-First Design System (English)
**Topic:** Once UI 2.0 ships an agent harness inside the npm package (Sep 25, 2026)

---

**Title:**
Your design system should describe itself to AI — Once UI 2.0 does exactly that

---

**Body:**

Once UI 2.0 launched this week as an open-source React/Next.js design system built specifically for agent-first workflows. The headline feature isn't the 100+ components. It's that the npm package ships with a built-in agent harness — and one command (`npx once-ui-init-agent`) automatically writes your AGENTS.md and Cursor rules.

The design system installs its own brief. Here's why that matters for how you work:

**① What the agent harness actually contains:**
- Compact rules (~2KB): what components to use and what to never write
- Component catalog: indexed by purpose, not alphabetically
- Task bundles: intent-matched recipes (pricing pages, hero sections, dashboards)
- Gold examples: production-grade structures for the agent to imitate
- Validation CLI: automatically checks generated code before you merge it

**② The creator's insight is the real story:**
"When code gets easier to produce, constraints and evidence matter more, not less." Not more prompting. More precise constraints. One rule from the compact file: if design intent is unclear — ask, don't generate. Default: restrained, centered, single brand accent, no placeholder images. A design system with a declared default aesthetic.

**③ What changes for your workflow:**
You don't write the agent brief separately. `npm install` writes it. The design system tells the agent its own rules. Your role shifts: not "explain the design system to AI" but "make the constraints precise enough that it explains itself."

**④ Where this fits the bigger pattern:**
OUI-1 (Sep 10) was the first model trained to generate UI. GeekLego, Astryx, and BRDNA made design systems machine-readable. Once UI 2.0 ships its own readability layer from inside the package. The floor moved: indie creators now have agent-native DesignOps infrastructure that used to require an entire team.

**⑤ The 70% compactness claim:**
Once UI says its output is 70% more compact than Tailwind+shadcn because the model reads precise rules instead of guessing. I can't independently verify this. The mechanism makes sense — test it on your own codebase before committing.

---

**Honest caveat:**
2.0 alpha. 236 GitHub stars. MIT licensed. Architecture is right; production-scale stability is unproven. Validate on your own codebase before using in production.

**Reframe:**
The design system was always encoding designer judgment. Once UI 2.0 makes sure the agent reads that encoding before it starts generating. That's not a new idea — it's the first implementation that ships itself.

---

#OnceUI #AIDesignSystem #UXDesign #DesignOps #AgentFirst #AIDesignTools #SeniorUXDesigner #DesignSystem2026 #ReactNextJS #AIWorkflow
