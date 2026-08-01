# Threads Post — Figma Make: Properties Panel + Annotations
**Topic:** Figma Make Properties Panel and Annotations launch (July 30, 2026)
**Platform:** Threads
**Language:** English
**Format:** Long-form personal reflection

---

**Post**

Figma Make shipped a properties panel and annotations yesterday, and I think it's worth pausing on what actually changed.

The obvious read: you can now edit spacing, typography, z-index, and opacity directly in the Make editor using familiar Figma controls. You can also annotate elements on the canvas — mark a focus area, write what you want to change, and the agent reads the location and the instruction together.

The less obvious read: AI design editing just became spatial.

Until now, the only interface for editing AI-generated UI was text. If you wanted to fix the padding on a card, you wrote a sentence about it. If you wanted a hover state on a thumbnail, you described the element, the trigger, and the behavior in one prompt — and hoped the model mapped your words to the right DOM node.

That's a lossy interaction. Language is imprecise. DOM paths are invisible. The model guesses.

Annotations fix the location problem. You draw the area. You write the behavior. The model stops guessing which element you mean.

The properties panel fixes the iteration problem. Edits stage in the prompt box before consuming any credits. Try five padding values. Test three font weights. Drag elements around. Zero tokens. Commit when it looks right.

That credit mechanic is actually a design statement: AI should be involved in execution, not in exploration. You should be able to look at something, try things, and only call in the model once you know what you want.

The properties panel uses your existing codebase tokens — color, spacing, typography. You stay inside your constraint architecture. You're not escaping your design system while editing; you're editing within it.

Code Connect is coming soon, which will link Make to your Figma Design components. When that lands, a designer editing a button in Make will be editing the same component definition that exists on the canvas. The handoff gap closes.

Real headline: the edit loop got tighter, and the model's job description narrowed. It's not interpreting everything from scratch. It's filling gaps in a defined context.

That's the right direction for AI design tools — not more generation, but more precision about when generation is the right tool.

---
