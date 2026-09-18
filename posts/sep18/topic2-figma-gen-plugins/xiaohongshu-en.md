# Xiaohongshu Post — Figma Generative Plugins: The Brief Is the Product (EN)
## Sep 18, 2026 | Image: topic2-xiaohongshu-en.png (3:4)

---

**Title:** Figma's agent builds plugins from your words. No JavaScript. No API docs.

---

Figma Generative Plugins just opened community publishing.

Here's what that actually means:
→ Describe the tool you need in plain language
→ Agent builds a working plugin with a UI
→ Publish it to 5 million designers on Figma Community

No coding required. But you still need to think like an engineer — just at the constraint level, not the code level.

---

**The key distinction from Figma's own docs:**

**Plugin = deterministic**
Same input → same output, every time.
Use when you want a consistent, repeatable transformation.

**Skill = adaptive**
Agent interprets context each time, result may vary.
Use when you want judgment, not repetition.

Choosing between them is a design decision.

---

**What makes a good plugin prompt:**

1️⃣ Define the input clearly — what gets selected or triggered
2️⃣ Write transformation rules — what changes, in what order, at what scale
3️⃣ Set output constraints — exact size, naming convention, structure
4️⃣ Name the edge cases — what should explicitly NOT happen
5️⃣ Set defaults — what values apply when input is ambiguous

This is a component spec. The same skill you've been building for years.

---

**Senior designer take:**

The best plugin authors won't be developers.
They'll be designers who've run the same manual workflow 200 times.

→ Done that bulk-rename step manually for 3 years? Write the plugin.
→ Always rebuild type ramps the same way? Encode it.
→ Debugging the same overflow issue for the 100th time? Build an auto-flagging plugin.

Honest caveat: deterministic means gaps surface at scale. Test at the edges of your input variety — not just the clean center case.

---

#Figma #GenerativePlugins #UXDesign #DesignSystems #SeniorUX #AIDesign #FigmaAI #ConstraintArchitecture
