# Threads Post — English
## Topic: Impeccable — Design quality layer for AI coding agents
## Date: October 11, 2026
## Format: Long-form personal reflection

---

I've built constraint architecture systems in production. The problem with AI coding tools has never been capability. It's been that nobody told the agent what good design looks like for your specific product.

Impeccable is Paul Bakaus's answer to that. He built jQuery UI and spent years at Google Developer Relations. He knows what it means to ship UI at scale.

`npx impeccable install` sets up a design skill inside your AI coding harness — Claude Code, Cursor, GitHub Copilot, Gemini, Codex. Same 24 commands. Same 61 deterministic rules. The same shared design vocabulary across every agent you might switch to.

The architecture has two parts worth separating.

First: PRODUCT.md. Not a style guide. Not a component library. A document that captures product truth — audience, purpose, operating context, constraints, voice, evidence. This is the information a junior developer used to get wrong because nobody wrote it down. Now it's machine-readable, and the agent reads it before every design-related command. It's a different category from DESIGN.md or GUI.md. Those are visual direction. PRODUCT.md is product truth. Conflating them is where most AI design briefs break down.

Second: the 61 rules. A Rust binary that runs locally, no LLM, no API key. It scans HTML, CSS, JSX, TSX, Vue, Svelte files and flags AI slop tells (side-tab accent borders, purple gradients, bounce easing, gradient text on headings, dark mode glowing accents) alongside general quality failures (low contrast, skipped heading levels, small touch targets, text overflow, cramped padding). The mental checklist any senior designer runs before a design review — now automated and applied before every ship.

What this completes for me: a constraint architecture loop I've been tracking all year.

Pre-generation: Thanor (30 design values before the first prompt), Graphical (GUI.md for coding agents), Figma Library Guidelines (documentation = constraint that travels with the library). Post-generation: Impeccable (deterministic audit after the agent ships code).

Quality floor is now a two-phase architecture. Not a reminder in your prompt. Not something you remember to add when you're not in a hurry.

The honest limit, from Paul himself: "The absence of slop doesn't result in taste." Impeccable removes AI tells and catches quality failures. It doesn't improve your information architecture. It doesn't fix wrong product decisions. Two different jobs. Impeccable does one.

And it's now bundled with the GitHub Copilot app. Every developer who opens Copilot gets this design quality layer by default. The constraint architecture conversation has left design tools. It's in the default coding harness used by developers who don't identify as designers — which is where most of the interface quality problem actually lives.

---

*Image: 16:9 — see images/x-threads-16x9-en.jpg*
