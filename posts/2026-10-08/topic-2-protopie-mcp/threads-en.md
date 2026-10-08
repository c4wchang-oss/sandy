# Topic 2: ProtoPie MCP Official — Threads Post (English)
**Date:** 2026-10-08
**Platform:** Threads
**Format:** Long-form personal reflection
**Image:** protopie-mcp-x-threads-en.jpg (16:9)

---

ProtoPie MCP went GA yesterday, and I want to explain why I think it matters more than the launch coverage is suggesting.

The usual framing is "now you can build prototypes with AI" — and Studio MCP does that. Connect your AI assistant to ProtoPie Studio, and it edits the prototype you have open: adds triggers, adjusts responses, reads the interaction structure, browses your design library, targets specific elements by ID. Natural language to prototype refinement. That's genuinely useful, and that's what the Pro plan covers.

But Code MCP is the part I find more consequential for the handoff problem.

Code MCP is a local read-only server you run via npx. You open Dev View in ProtoPie Cloud, select any element — the whole prototype, a specific scene, a single component, or one layer — and copy its link. Paste that link into your coding agent (Claude Code, Cursor, Codex, VS Code, any MCP-capable environment). The agent reads the actual prototype: scene tree, layer structure, variables, trigger-response pairs, conditions, and formulas. It reads the interaction logic, not a screenshot.

Then it writes the code.

This closes a handoff gap that has been genuinely difficult to solve. The interaction specification has always been the weak link. Figma specs tell developers what static states look like. What happens when a user taps that element, what condition triggers that state change, what that micro-animation does — that lives in the designer's head, in Slack threads, in ProtoPie files developers don't have licenses to open, and in prototype screen recordings they try to reverse-engineer. Code MCP makes that information machine-readable. The trigger-response logic you built in ProtoPie is the spec the coding agent works from.

The read-only constraint is worth pausing on. Code MCP can read the prototype but can never write back to it. That's not a limitation — it's the right decision. If AI could modify the prototype from the code generation side, you'd have two sources of truth. The prototype and the codebase would begin to diverge. Read-only is what makes the prototype authoritative. The constraint is what makes the pipeline trustworthy. This is the same principle as Cubicle last week ("read-only by design" for the AI agent observer), applied to the handoff pipeline.

New frameworks in this release: React Native joins React, Flutter, SwiftUI, Compose, Qt/QML, and ArkTS.

Honest caveats: Code MCP is Enterprise plan only. Code quality still depends on your prompts and your chosen agent — excellent context doesn't guarantee correct output. It's one-directional; code can't round-trip back to prototype. Local stdio server for now, no remote deployment.

The frame I keep coming back to: Figma has MCP access for the visual design layer. ProtoPie now has MCP access for the interaction and behavior layer. Put them together and you have a machine-readable complete design specification — visual fidelity and interaction logic — in a format AI coding agents can read directly without anyone manually translating it.

That changes what the handoff problem actually is. The question is no longer "how do we explain the design clearly enough." It's "have we built the prototype with the fidelity and structure that makes it a useful spec."
