# Topic 2: ProtoPie MCP Official — 小紅書 Post (English)
**Date:** 2026-10-08
**Platform:** 小紅書 (Xiaohongshu / RED)
**Format:** Practical tutorial / review
**Image:** protopie-mcp-xhs-en.jpg (3:4)

---

**Title:** ProtoPie MCP is GA — your prototype is now the spec your coding agent reads

**Body:**

ProtoPie MCP officially launched yesterday. Two MCP servers. Two completely different jobs in the design-to-code workflow.

**Studio MCP (Pro plan) — AI co-pilot while you work:**
- Connect Claude / Cursor / Codex to ProtoPie Studio
- AI adds triggers and responses via natural language
- Browses and inserts library components (keeps your design system in the workflow)
- Target specific elements by copying their ID into your prompt
- AI reads and edits the prototype alongside you in real time

**Code MCP (Enterprise) — converts finished prototype to production code:**
1. Open Dev View in ProtoPie Cloud
2. Select any element: whole Pie, a scene, a component, or one layer
3. Copy the Dev View link
4. Paste into Claude Code / Cursor / Codex / VS Code
5. Agent reads: scene tree, layer structure, variables, triggers, responses, formulas
6. Agent generates code matching your prototype's actual interaction logic

**Supported frameworks:**
React · React Native (new!) · Flutter · SwiftUI · Compose · Qt/QML · ArkTS

**Why this closes the handoff gap:**
The weak link was always interaction specification — not the visual spec.

- Figma tells developers what static states look like
- ProtoPie Code MCP tells the coding agent what happens when users interact

Your trigger-response logic is no longer explained in Slack. It's structured data the agent reads directly. High-fidelity interaction work in ProtoPie now has direct economic value at handoff.

**The key design decision to understand:**
Code MCP is read-only. It cannot write back to your prototype.

This is correct. Write access = two sources of truth = divergence. Read-only keeps the prototype authoritative. The constraint is what makes the pipeline trustworthy.

**Honest caveats:**
- Studio MCP → Pro plan | Code MCP → Enterprise only
- Code quality depends on your prompts and agent
- One direction only — no code → prototype round-trip
- Local stdio server (no remote deployment yet)

Together with Figma MCP: visual design + interaction logic = full machine-readable design specification.

#ProtoPie #MCP #DesignHandoff #UXDesign #CodingAgent #DesignToCode #Prototyping #AIDesign #ProductDesign #DesignTools
