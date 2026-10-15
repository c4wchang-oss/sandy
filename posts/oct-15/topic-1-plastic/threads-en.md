# Threads Post — Plastic (English)

---

**Long-form version:**

Design files are pictures of interfaces.

That's the assumption every tool in our industry is built on. You draw in Figma. You hand off the drawing. An engineer rebuilds it in HTML, CSS, React — whatever the actual medium is. The design is a specification, not the thing itself.

Plastic is a design tool that rejects this assumption at the foundation level. The canvas is HTML and CSS. When you draw a frame, add auto layout, apply tokens — what you're creating is the real interface. The file you save is a production-ready web page.

The handoff model collapses. Engineers and coding agents don't start from a screenshot they have to interpret. They start from the actual source.

For AI agents: Claude Code, Codex, Cursor, and Grok connect via MCP. They read the real design structure and change it live on the canvas while you watch. Every turn can be undone. Layers an agent is touching are highlighted in real time. The key constraint: agents can read code to copy a look, but they can't edit files or run system commands. They work through Plastic's own tools only. This is constraint architecture applied correctly — the restriction is what makes agent participation production-safe.

This is a pattern I've been watching build across the year. Elyx in September: a new design file format that's human-readable, AI-friendly, versionable in Git — design file as constraint document. Timeful in October: a visual IDE where canvas edits write directly to .vue files and code edits update the canvas in real time. Now Plastic: HTML and CSS as the design medium, no conversion step anywhere.

Three tools. Three angles on the same underlying question: is the binary design file format the right foundation for a workflow where AI agents need to read and edit designs?

The constraint stack era — AGENTS.md, CLAUDE.md, design.md — assumes the binary format is fixed and builds bridges over it. These tools are betting the format itself is the problem. If any of them gains traction, the bridge era looks like a transitional workaround rather than a permanent solution.

**Short punchy take:**

The binary design file format assumption is being challenged from three directions simultaneously.

Elyx bets on a new format. Timeful bets on canvas-as-code for Vue. Plastic bets on canvas-as-HTML.

The design-to-code gap isn't something Plastic bridges. It just doesn't exist in the model.

useplastic.app — invite-only preview, Apple silicon Mac app + browser.

---
