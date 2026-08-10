# X Thread — Figma Generative Plugins + Shaders (English)
**Date:** 2026-08-10
**Topic:** Figma Generative Plugins & Shaders open beta
**Angle:** Plugin vs. agent — knowing when to encode automation vs. when to keep judgment in the conversation

---

**Tweet 1 (hook)**
Figma just added two things that look similar but aren't: generative plugins and shaders.
Most designers will use both the same way.
That's the mistake.

---

**Tweet 2**
A generative plugin = you describe a tool once, and the agent builds it.
It runs deterministically. Same input → same output. Every time.
This isn't the agent doing design work — it's the agent building an automation for you.

---

**Tweet 3**
A shader = you describe a visual effect in natural language, the agent writes WebGPU code, and it becomes a native Figma property.
Parameterized. Stackable with fills and effects. Exportable via MCP.

---

**Tweet 4**
The difference that matters:
→ Task is repeatable and output should be identical every time → build a plugin
→ Task requires judgment → use the agent directly

Confuse these two and you'll get non-deterministic results where you needed precision.

---

**Tweet 5**
Workflows that should be plugins (not re-prompted agent conversations):
— Auto-naming layers by component type
— Applying brand spacing rules to a selection
— Stripping overrides on all components in a frame

These don't need the agent to "think." Encode them once.

---

**Tweet 6**
Workflows that should stay in the agent:
— Exploring a new layout direction
— Rewriting a flow for a new user context
— Adapting a component hierarchy for a new product area

These need judgment. Keep them in the agent conversation.

---

**Tweet 7**
For shaders: your prompt specificity is your quality ceiling.
"A glowing mesh gradient" → something generic.
"Low-frequency noise texture, warm amber tones, 40% opacity, no sharp edges" → something usable.
Visual physics → language → GPU.

---

**Tweet 8**
The meta-lesson:
Figma is becoming an environment where you design the tools you use.
The senior designer skill isn't knowing what tools exist — it's knowing what tools to build.
When did you last write a plugin brief for your team?
