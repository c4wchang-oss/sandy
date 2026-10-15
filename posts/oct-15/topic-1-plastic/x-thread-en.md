# X Thread — Plastic (English)

---

**Tweet 1 (Hook)**
Design files are pictures of interfaces.

Plastic is a design tool where the canvas is actual HTML and CSS.

What you draw is what ships. No export. No rebuild. No translation layer. 🧵

---

**Tweet 2**
The core idea: instead of designing a mockup that an engineer rebuilds in code, you design the real interface directly on a canvas.

The file you save is a production-ready web interface.

Figma → Plastic import converts pages, frames, auto layout, text, images, and variables to editable HTML/CSS.

---

**Tweet 3**
Agents (Claude Code, Codex, Cursor, Grok) connect via MCP.

They read the actual design — not a screenshot, not a spec document — and change it live on the canvas. Every turn can be undone. The layers an agent is reading or editing are visible in real time.

Agent input: real design structure. Agent output: real design change.

---

**Tweet 4**
The constraint architecture here is significant.

Agents can read code to copy a look, but they can't edit files or run system commands. They work through Plastic's own tools only.

Same principle as ProtoPie Code MCP (read-only preserves the pipeline's trustworthiness): the constraint is what makes the tool production-safe.

---

**Tweet 5**
This sits alongside two other tools that made the same underlying bet this year:

Elyx (Sep 29): design tool with a human-readable, AI-friendly file format. Design file IS the constraint document.
Timeful (Oct 5): visual IDE where canvas edits write directly to .vue files.
Plastic: visual design tool where canvas IS HTML/CSS. No conversion at any step.

---

**Tweet 6**
What changes for senior designers:

Handoff becomes "share the frame link." Engineers and coding agents start from the real source — semantic HTML/CSS with tokens — not a screenshot that has to be interpreted.

The design-to-code gap isn't bridged. It doesn't exist.

---

**Tweet 7**
Honest caveats:

Invite-only preview, Apple silicon Mac app (Windows coming), no public pricing yet.

This is a design tool for real web interfaces — not Figma-scale design systems, motion libraries, or mobile-native UI. Scope matters.

The "no rebuild" promise is only as good as the component and token fidelity you build in.

---

**Tweet 8**
The pattern:

Elyx (file format) + Timeful (Vue/Tailwind canvas-as-code) + Plastic (HTML/CSS canvas-as-design) = three tools, three angles, same underlying question.

The binary file format assumption in design tools is being challenged from multiple directions simultaneously.

The bridge era may be shorter than we thought.

useplastic.app

---
