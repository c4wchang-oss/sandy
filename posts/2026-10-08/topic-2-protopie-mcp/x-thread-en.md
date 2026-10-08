# Topic 2: ProtoPie MCP Official — X Thread (English)
**Date:** 2026-10-08
**Platform:** X (Twitter)
**Format:** 8-tweet thread
**Image:** protopie-mcp-x-threads-en.jpg (16:9)

---

**Tweet 1 — Hook**
ProtoPie MCP is officially GA.

The prototype is no longer a communication artifact. It's a machine-readable specification.

Studio MCP controls the prototype. Code MCP converts it to production code for any AI coding agent. Thread on what this pipeline actually does.

---

**Tweet 2**
Two servers. Two completely different jobs:

Studio MCP: AI co-pilot inside ProtoPie Studio. Edits the prototype you have open — adds triggers, reads interactions, browses your design library. Pro plan.

Code MCP: read-only converter. Your finished prototype → structured context for AI coding agents. Enterprise only.

---

**Tweet 3**
The Code MCP handoff workflow:
1. Open Dev View in ProtoPie Cloud
2. Select: whole Pie, a scene, a component, or one layer
3. Copy the link
4. Paste into Claude Code / Cursor / Codex / VS Code
5. Agent reads: scene tree, variables, trigger-response pairs, conditions, formulas
6. Agent writes the code

Not a screenshot. The actual interaction logic.

---

**Tweet 4**
This is what closes the prototype → code gap.

Old handoff: Zeplin specs + designer trying to explain microinteractions in Slack + developer approximating it.

New handoff: the trigger-response logic from your ProtoPie prototype is the spec the coding agent reads. Directly.

Interaction fidelity in the prototype is no longer just for validation. It is the handoff artifact.

---

**Tweet 5**
The read-only constraint on Code MCP is the correct design decision.

Write access would mean the AI could modify the prototype from the code side. Two sources of truth. They'd diverge.

Read-only is what makes the prototype authoritative. The constraint is what makes the pipeline trustworthy.

---

**Tweet 6**
Frameworks Code MCP supports:
React, React Native (new this release), Flutter, SwiftUI, Compose, Qt/QML, ArkTS.

Also new: library browsing in Studio MCP (adds library components while keeping your design system in the workflow), ID targeting (copy any layer, scene, variable, or trigger ID to use directly in your prompt).

---

**Tweet 7**
Honest framing:
- Code MCP is Enterprise plan only — Studio MCP is Pro
- Code quality depends on your agent and prompts; Code MCP provides excellent context, not guaranteed output
- Read-only only — no code → prototype round-trip
- Local stdio server only; no remote MCP yet
- React Native is new; other frameworks were already supported

---

**Tweet 8 — CTA**
The frame I keep coming back to:

Figma has MCP access for the visual design layer. ProtoPie now has MCP access for the interaction and behavior layer.

That's the full design specification — visual fidelity and interaction logic — in a format AI coding agents can read directly.

The handoff problem is a different kind of problem now.
