# Topic 1: Graphical — Threads Post (English)
**Date:** 2026-10-07
**Platform:** Threads
**Format:** Long-form personal reflection
**Image:** graphical-x-threads-en.jpg (16:9)

---

There's a mistake I see constantly in how designers try to work with coding agents: they spend time writing better style prompts. More specific. More evocative. "Modern, clean, not generic." "Inspired by Linear." "Sophisticated, premium feel."

And then the agent produces something that looks like every other AI interface because it's interpreting your description, not reading your design language.

Josh Puckett (formerly of Uber, now at Iteration Design) shipped Graphical this week with Adam Michela, and it's the clearest answer I've seen to that problem.

The tool has two parts that work together. First: a visual theme editor where you make actual design decisions — your specific color palette, type scale, spacing system, corner radii, elevation, motion easing, component interactive states. All the things that actually make an interface feel like yours and not like a template. Second: an export that produces `GUI.md` (a detailed theme reference for agents), tokens, Base UI React components, and three agent skills — one for building new screens in the theme, one for applying the theme to existing UI, and one for finding and fixing stylistic drift.

You drop that package into your coding agent's context. Now it has constraints, not descriptions. When it generates a new screen, it's applying your design language directly, not approximating something it read.

This is the constraint architecture pattern applied to the coding-agent workflow. I've been watching it take shape across different tools — Vercel's `design.md` for product design context, Onefold's `DESIGN.md` for site structure, Thanor's 30-value constraint spec for AI-generated web pages, Once UI 2.0 shipping its own agent harness inside the npm package. Each one is arguing the same thing: the bottleneck is never the model, it's the quality of the constraint you give it. Graphical makes that argument for visual language specifically and gives you the tooling to act on it.

What I find most interesting is what the agent skills enable. The third skill — "find and fix inconsistent styles" — is the agent auditing its own output for drift. That's not a prompt tip. That's a quality loop built into the workflow. The agent can check whether what it just built follows your design language, before you see it.

Honest caveat: this is a one-time purchase, not a free tool. It's built around Base UI (from MUI), so your components are React in practice even if the tokens are technically framework-agnostic. And the quality ceiling in the editor is still your design judgment — Graphical gives you the tools, but the theme is only as good as the decisions you make building it.

But the principle is correct: define your visual language once, in the format your agent reads natively, and stop re-describing it in every prompt. Prompt engineering for visual style is the wrong unit of work. This is.

