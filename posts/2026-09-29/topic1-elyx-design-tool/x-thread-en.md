# X Thread — Elyx: The Design File Format Is the AI Integration Design Decision (English)
**Topic:** Sketch co-founders launch Elyx — a new design tool where .elyx files live in Git alongside code (Sep 24, 2026)
**Angle:** Every AI design integration has been trying to bridge the gap between a binary canvas file and machine-readable constraints. Elyx is asking whether the file format itself is the wrong starting point.

---

**Tweet 1 / Hook**
Sketch co-founders just launched a new design tool.

Not because Figma is too expensive.

Because they believe the design file format is the reason AI integrations keep needing a bridge.

---

**Tweet 2**
The .elyx file is the entire bet.

Human-readable. AI-friendly. Versionable. Lives in your Git repo, alongside your source code.

"Integrated Design Environment" — the name is deliberate. It's saying: design files should work the way code files work.

---

**Tweet 3**
Think about what every AI design integration actually is.

Figma MCP → reads a binary .fig file and translates it into structured context
DESIGN.md → manually documents what the file already contains
BRDNA Sequencer → converts design system artifacts into machine-readable training context

Every one of them is a bridge.

Elyx's question: why not design the file to not need a bridge?

---

**Tweet 4**
The CLI and agent skills are the real test.

AI coding agents (Claude Code, Cursor, Codex) can inspect .elyx files, check them, format them, render design output — directly, without an intermediate server.

If it works, the design file becomes a first-class artifact in the development workflow. Not a handoff deliverable. A live source.

---

**Tweet 5**
The wiki-like connection model is the underrated part.

.elyx files are designed to be broken up, imported into each other, linked together — not just components but screens, flows, and use cases.

Design decisions stored as relationships, not layers in a flat file.

This is what "living source of truth" has always needed to actually mean.

---

**Tweet 6**
The honest caveats:

Sketch bet on native Mac apps and lost to Figma's cloud-first strategy. Local-first is the opposite direction again.

File format adoption is historically the hardest problem in tooling. You need both sides (design + dev) to commit.

Private beta. No production track record yet. No team collaboration model announced.

---

**Tweet 7**
What this signals, regardless of whether Elyx wins:

The MCP-and-bridges era is probably transitional. The longer-term resolution is design formats that were built for machine readability from the start.

Figma knows this too — Code Layers and Code to Canvas are steps in that direction. Elyx is betting the whole file format can be that.

---

**Tweet 8 / CTA**
The design file was always a black box to agents.

MCP servers, DESIGN.md, AGENTS.md, constraint stacks — all of them were workarounds for a binary format that was never designed to be read by machines.

Elyx is not another workaround. It's a different answer to the same question.

Worth watching.

→ elyx.design (private beta signups open)
