# Topic 1: Tokens by UI Colors — Threads Post
# Platform: Threads
# Language: English
# Date: Nov 23, 2026

---

## THREADS POST — Long-form

DESIGN.md is the year's dominant design constraint format. Almost every major AI design tool — Claude Design, Vercel, Gamma, Adobe, OpenDesign — either generates it, reads it, or both.

The question I hadn't fully resolved: where does the DESIGN.md itself come from?

There are essentially two schools. Scan-based tools (Onefold, DesignMD MCP, Higgsfield, Open Inspector) extract DESIGN.md from your deployed product — fast, grounded in what you shipped. The problem is they inherit your production state, including drift, including overrides, including the spacings and colors that were never quite right.

Tokens by UI Colors takes the other approach. You build from scratch, visually, from intent.

It's a token playground: primitive palette → semantic color roles, type scale, spacing system, border radius, shadow. The controls are fast — presets for quick direction-setting, then fine-grained adjustment. You work through two layers explicitly: primitive tokens (the raw values) first, then semantic roles (the named purposes). That separation matters because an AI agent handed `#10B981` has no idea what to do with it. An agent handed `color.action.primary: #10B981` knows it's for primary interactive elements, not for text, not for destructive actions.

The step I keep coming back to: before you export, you preview in real UI examples. Components, page sections, interface patterns. You see whether your type scale reads at the small sizes. You see whether your spacing system behaves in a card rather than in a spec grid. That preview step is the quality gate — the moment where you catch the token values that look right in isolation but fail in context.

Then you export: CSS variables for the codebase, DESIGN.md for the agents. The DESIGN.md output follows the Google Labs spec, which means immediate compatibility with Claude Design, Vercel, Gamma, Adobe, all of OpenDesign's 17 adapters.

Honest caveat worth noting: this is a creation tool, not a sync layer. The file is static. It doesn't stay connected to Figma variables or your deployed tokens. For a new project, that's exactly what you need — a clean, intent-based starting point with no inherited drift. For maintaining an existing design system at scale, you need a live sync layer. Know which problem you have before you reach for which tool.

The underlying principle: brief quality is the quality ceiling. If your DESIGN.md was built from production drift, your AI output inherits that drift at scale. If it was built from deliberate decisions, previewed in real UI, authored as semantic constraints — you're giving the agent something it can actually use.

---

## THREADS SHORT TAKE

DESIGN.md is now the year's dominant AI design constraint format.

The question most people skip: where does yours come from?

Scan-based tools (Onefold, DesignMD) extract from your deployed product. Fast, grounded — but they inherit your production drift, including accidents.

Tokens by UI Colors builds from intent: primitive tokens → semantic roles → real UI preview → export. You confirm design decisions before they go into the agent's context.

Caveat: static export, no live sync with Figma or code. Right answer for new projects, wrong answer for maintaining existing systems at scale.

Brief quality is the quality ceiling. Make sure your DESIGN.md reflects your decisions, not your production drift.

---
