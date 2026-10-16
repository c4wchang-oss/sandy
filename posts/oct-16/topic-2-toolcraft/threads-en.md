# Threads Post — Toolcraft Open-Source Starter Kit (EN)

---

Something launched today with basically zero design coverage. Toolcraft is an open-source framework — not a design tool, but a starter kit for AI agents to BUILD design tools. Functional canvas, toolbar, layer system, timeline with keyframe workflows. An entire application architecture as scaffolding.

It ships with embedded AI skills for Claude, Cursor, and Codex, plus visual testing rules for the generated output. That detail matters: visual consistency checking is baked into the framework itself, so the agent's creative output has a quality gate at the tool-authorship level — before you ever interact with what it built.

I keep coming back to this recurring pattern: constraint architecture as the signal for trustworthy AI tools. Voyager (Oct 10) scoped agents to scripting APIs so existing files stay editable. ProtoPie Code MCP made the handoff pipeline read-only so there's one source of truth. Toolcraft scopes agent tool-building to visual testing rules so quality isn't just assumed.

The open question I don't have an answer to yet: who does the taste audit for a tool that nobody designed? The architecture Toolcraft provides is sound. But defaults, affordances, which interactions feel discoverable — those are product design decisions that no framework can encode.

The interesting use case isn't "agent builds a generic design app." It's: domain expert with a very specific creative workflow + coding agent + Toolcraft = specialized tool built for one exact job. That's a production mode that didn't exist before.

Zero coverage today = early signal. Apache-2.0. Worth watching.
