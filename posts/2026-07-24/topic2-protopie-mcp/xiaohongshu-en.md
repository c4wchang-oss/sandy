# Xiaohongshu Post — ProtoPie MCP (English)
**Platform:** Xiaohongshu (小紅書)
**Format:** Tool Breakdown / Tutorial
**Date:** July 24, 2026

---

**Title:** ProtoPie MCP: The Prototype Finally Becomes the Actual Spec

---

🤯 A gap that's existed since the beginning of design handoff:

AI agents have been implementing prototypes from screenshots and exported videos.

Which means every implementation involves interpretation — guessing the interaction logic from a visual artifact.

ProtoPie just shipped MCP support. This changes that.

---

🔑 Two modes:

**Studio MCP** — Create interactions via natural language inside ProtoPie:
- "Add a Tap trigger to this button"
- "Flip the card when tapped"
- "Animate this layer when the variable changes"

AI wires it up. You refine the details. Every interaction stays fully editable.

**Code MCP** — AI coding agents read your prototype's actual interaction model:
✅ Triggers + responses
✅ Variables + formulas
✅ States + transitions
✅ Layer and component structure

Not a screenshot. The interaction spec itself.

---

📐 Dev View: targeted context control

Share context at any level of granularity:
- Full prototype → broad understanding
- One scene → feature-level implementation
- One component → precise interaction
- One layer → micro-interaction detail

Smaller context → cleaner code output. Agent doesn't need to read your whole design system to implement one modal.

---

💡 The practical before/after:

Before (screenshot/video):
Developer or agent sees: button → tap → animation
Implementation: "I think it's a 200ms fade? Maybe?"

After (Code MCP):
Agent reads: Trigger: Tap / Response: Rotate Y 0→180deg / Duration: 250ms / Easing: ease-out

Interpretation step → query step. Intent survives intact.

---

🔄 A bigger pattern:

Figma Code Layers — canvas absorbs code
UserTesting MCP — research becomes context window
ProtoPie Code MCP — prototype becomes readable spec

All of these are adding a machine-readable layer to design artifacts.

The design object isn't just for humans anymore. It's for agents.

---

🎯 When to use Code MCP:

✅ Complex interaction logic (custom formulas, multi-state flows)
✅ Handoffs where interaction fidelity really matters
✅ Any prototype with specs you don't want inferred from a video

❌ Simple CRUD screens where a screenshot is genuinely enough

---

📝 Senior take:

The prototype was always supposed to be the spec.

In practice it was a human-to-human communication artifact. Developers inferred intent from a video and did their best.

Code MCP closes that gap. The intention survives the handoff intact.

---

🔗 protopie.io/features/protopie-mcp

---

#ProtoPieMCP #AIDesign #DesignHandoff #Prototyping #UXDesign #MCP #DesignTools #SeniorDesigner #AIWorkflow #ProductDesign
