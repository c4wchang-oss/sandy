# Topic 1: Tokens by UI Colors — Xiaohongshu Post
# Platform: 小紅書 (Xiaohongshu)
# Language: English
# Date: Nov 23, 2026

---

## POST TITLE
Your DESIGN.md should come from your decisions, not your production drift. Here's the tool that makes that possible.

---

## POST BODY

The design constraint format that every major AI tool is now reading is DESIGN.md. And the question most designers skip is: where does yours actually come from?

**Two approaches to generating a DESIGN.md:**

**Scan-based** (Onefold, DesignMD MCP, Open Inspector): reads your deployed product and extracts what's already there. Fast. But you inherit whatever state production is in — including spacing inconsistencies nobody fixed, colors that drifted from the original spec, the 12px gap that should have been 16px.

**Intent-based** (Tokens by UI Colors): you build the token system visually from scratch, preview in real UI before exporting. What goes in is what you decided, not what shipped.

**What Tokens by UI Colors actually does:**

It's a visual playground for primitive + semantic token design. You define your raw values (colors, type scale, spacing, radius, shadow) then assign them semantic roles (action.primary, text.muted, surface.elevated). That two-layer structure is what makes the DESIGN.md output useful for AI agents — the agent gets context, not just values.

**5 things worth knowing:**

1. **Preview before export** — test your token decisions in real UI components (cards, buttons, page sections) before the file is generated; this is where you catch the type sizes that don't scale and the colors that fail in context

2. **Two export paths** — CSS variables (for devs and existing codebases) OR DESIGN.md (for Claude Code, Cursor, Gamma, Adobe — any tool reading the Google Labs format)

3. **Primitive → semantic order is enforced** — you can't skip to semantic tokens without defining the primitives they reference; this matters because semantic tokens are the AI-readable constraint layer

4. **Static file** — no live sync with Figma variables or code; not a maintenance tool, it's a creation tool for new projects or green-field briefs

5. **Free to use** — no paywall, no account required; exports are plain text files you own

**The brief quality principle:**

Your DESIGN.md is a quality ceiling, not a quality floor. The agent produces output within the constraints you give it. If the constraints were built from deliberate intent and previewed in real UI, that ceiling is high. If they were scraped from your deployed product without review, that ceiling inherits your production debt.

**Who this is for:**

Designers starting a new product who want an AI agent to work from their actual visual system from day one. Teams building a DESIGN.md from scratch. Anyone who's already been using AI agents for UI work and suspects the brief quality is the bottleneck.

---

#UXdesign #AItools #designsystem #designtokens #DESIGN_md #productdesign #AIworkflow #claudecode #cursor #seniorUX #designops

---
