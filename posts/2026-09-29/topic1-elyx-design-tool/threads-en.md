# Threads Post — Elyx: The Design File Format Is the AI Integration Design Decision (English)
**Topic:** Sketch co-founders launch Elyx — a design tool where .elyx files live in Git (Sep 24, 2026)

---

## Long-form reflection

Every AI design integration of the past two years has been a translation layer.

You build your design in Figma. An MCP server reads the binary file and translates it into structured context that a coding agent can consume. Or you write a DESIGN.md that manually documents what your design system contains. Or a service like BRDNA Sequencer converts your design artifacts into machine-readable training context for agents. All of them are bridges between a file format that was never built for machines and agents that need to read constraints.

Elyx is the Sketch co-founders asking whether the file format itself is the wrong starting point.

The .elyx format is designed to be human-readable, AI-friendly, and versionable — the kind of file that can live in a Git repository alongside source code. Not as an export. As the actual design artifact. When you commit a code change, the design decision that drove it is in the same repo, the same history, the same diff.

The CLI and agent skills are the direct expression of this bet. Claude Code, Cursor, and Codex can inspect .elyx files, check formatting, and render design output without an intermediate server translating for them. The design file is a direct input to the agent, not a translated context dump.

The part I find most interesting is the wiki-like connection model. Design files are designed to link to each other — not just components to tokens, but screens to flows to use cases to documented decisions. Design as a knowledge graph, not a flat file with layers. That changes what "living source of truth" actually means in practice. It means the design file captures not just what something looks like, but why.

The honest caveats are important here. Sketch bet on native Mac apps and lost to Figma's browser-based collaboration. Local-first is a real trade-off, not just an architectural choice — it prioritizes developer-adjacent workflows over real-time multi-user collaboration, which is exactly what killed Sketch's first act. File format adoption is historically the hardest problem in tooling. You need designers and developers to both commit to the same format. And private beta with no production track record means none of this is proven yet.

But the signal matters regardless of whether Elyx wins this particular round. The MCP-and-bridges era is probably transitional. Every constraint stack we've built — AGENTS.md, CLAUDE.md, design.md, DESIGN.md — is an attempt to manually reconstruct in text what the design file should have encoded from the start. The longer-term resolution isn't a better bridge. It's a design format that was built for machine readability from day one.

Figma is moving in this direction too. Code Layers, Code to Canvas, the MCP server write tools — all of them are closing the gap between "design artifact" and "machine-readable constraint." Elyx is making the same bet, but at the file format level instead of the tool API level.

Worth watching closely.

---

## Short punchy take (post separately)

We spent two years building bridges between design files and AI agents.

DESIGN.md. AGENTS.md. MCP servers. Constraint stacks.

All of them assume the design file format can't change.

Elyx is betting that assumption is the problem.

Private beta. No production proof yet. But if the file format bet pays off, every bridge we built becomes legacy overnight.

