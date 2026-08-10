# 小紅書 Post — Figma Generative Plugins + Shaders (English)
**Date:** 2026-08-10
**Format:** Tutorial/Opinion, practical numbered lists, hashtags at end

---

**Title:** Figma just let you build your own tools — plugin vs. agent, most designers are getting this wrong

---

The biggest thing I keep seeing designers miss in Figma's generative plugins launch 👇

Figma now has two kinds of AI tools. Most people treat them the same. They're not.

**Generative Plugin** = You describe a tool. Agent builds it. It runs the same way every time. No judgment involved.

**The Agent** = It reads context, makes decisions, adapts. Every run can be different.

**Rule of thumb:**
If you can write "always do X to Y," make it a plugin.
If the task changes based on context, keep it in the agent.

---

**3 workflows that should be plugins (not agent prompts):**

① Auto-name layers by component type → same rule every time, why re-prompt?

② Apply brand spacing to selection → you already know the numbers, encode them once

③ Strip all component overrides in a frame → totally deterministic, build it once

---

**3 workflows that should stay as agent conversations:**

① Exploring layout directions for a new feature → needs judgment

② Rewriting IA for a new user context → needs adaptation

③ Composing a new component pattern → needs creative decision-making

---

**On Shaders:** Figma's WebGPU shader system is genuinely impressive. Prompt the agent to build a visual effect, and it comes back as a native Figma property — parameterized, stackable, MCP-exportable.

Practical tip: the more specific your prompt, the better the output.

❌ "a glowing gradient fill"
✅ "a low-frequency animated noise fill, warm amber tones, soft edges, no sharp contrast breaks"

---

**Bonus:** Both are free to build and iterate in open beta. Plugins never consume credits to run.

🔑 Big picture: Figma is becoming a place where you design the tools you use. The senior designer value-add is shifting from craft output to tool architecture.

What's the first plugin you'd build for your workflow?

---

#FigmaAI #UXDesign #ProductDesign #AIWorkflow #DesignTools #GenerativeDesign #FigmaPlugins #DesignSystem
