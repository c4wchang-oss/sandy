# Topic 1: Tokens by UI Colors — DESIGN.md Authored from Intent
# Platform: X (Twitter) Thread
# Language: English
# Date: Nov 23, 2026
# Source: Tokens by UI Colors (uicolors.app/tokens), launched Nov 10, 2026

---

## X THREAD

**[Tweet 1 — Hook]**
There are now five ways to generate a DESIGN.md file.

Four of them read your deployed product and extract what's already there.

One of them lets you author from intent.

That distinction matters more than the feature set. 🧵

---

**[Tweet 2]**
The DESIGN.md generation arc, in order:

→ Manual writing (always existed)
→ Vercel design.md spec (Sep 2) — format without tooling
→ Onefold scanner (Sep 20) — scan deployed site, extract tokens
→ DesignMD MCP (Nov 1) — generate from documented design systems via agent
→ Tokens by UI Colors (Nov 10) — build from scratch, visually, preview in real UI, export

Each approach makes different assumptions about where design intent lives.

---

**[Tweet 3]**
Tokens by UI Colors is a visual token playground.

You set colors (primitive palette → semantic roles), type scale, spacing, border radius, shadow layers. Controls are fast — presets for quick direction, fine-grained overrides for precision.

It uses the two-tier token model the industry actually converged on: primitive tokens (the raw values) → semantic tokens (the named roles that use those values).

---

**[Tweet 4]**
Why primitive → semantic order matters for AI agents:

An agent handed a hex code doesn't know what it means. `#10B981` is just a color.

An agent handed `color.action.primary: #10B981` — with a semantic role attached — knows what to do with it. It knows not to put that color on destructive actions, text labels, or disabled states.

The semantic layer is what turns token values into agent-readable constraints.

---

**[Tweet 5]**
The step that makes this more than a token builder:

Before you export, you preview your decisions in real UI examples — components, landing page sections, interface patterns. You see the contrast in context. You see whether the type scale actually reads at the small sizes. You see whether the spacing feels right in a card, not in a spec grid.

You're confirming your design decisions before they go into the agent's context.

---

**[Tweet 6]**
Two export paths:

→ CSS variables — for devs, for existing codebases, for Tailwind config
→ DESIGN.md — for AI agents, for Claude Code, for Cursor, for any tool that reads constraint files

DESIGN.md output follows the Google Labs spec (prose rationale + YAML token groups). That means it works immediately with every tool that's already adopted the format: Claude Design, Vercel, Gamma, Adobe, OpenDesign's 17 adapters.

---

**[Tweet 7]**
Honest caveats:

This is a creation tool, not a sync layer. The exported DESIGN.md is a static file — it doesn't stay connected to your Figma variables, your code tokens, or your deployed site. If your tokens drift, you update the file manually.

No two-way integration. If you need a live sync layer, that's Figma variables + Code Layers, or a custom setup. This is the right answer for starting a new project. It's the wrong answer for maintaining an existing design system.

---

**[Tweet 8]**
The reframe:

Every scan-based DESIGN.md tool (Onefold, DesignMD, Higgsfield, Open Inspector) inherits deployed state. Including drift. Including accidents. Including the spacing that was 12px when it should have been 16px and nobody fixed it.

Tokens by UI Colors gives you a DESIGN.md that starts from your decisions, not your production drift.

That's not a small distinction. The brief quality ceiling is whatever went into the file. Make sure it was your intent.

[Tokens by UI Colors · uicolors.app/tokens · launched Nov 10, 2026 · export: CSS variables + DESIGN.md]

---
