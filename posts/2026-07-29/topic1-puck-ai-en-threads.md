# Topic 1: Puck AI — Threads (English)
**Platform:** Threads
**Format:** Long-form personal reflection
**Date:** July 29, 2026
**Topic:** Puck AI — embeddable AI generation layer for products

---

There's been a lot of talk about giving AI "context" — DESIGN.md, tokens, MCP connectors. The assumption was always that you're configuring AI to help you design better.

Puck AI flips that.

It's a React component that embeds AI generation directly inside your product. Your users are the ones generating interfaces. You're just the person who decided what they're allowed to build.

Two modes. Assembly: AI uses your existing components to build pages. Design: AI creates new components, but only within constraints you define. That division is doing a lot of conceptual work.

In assembly mode, there's no prompt engineering trick that gets the AI to build something outside your component library. The scope of generation is the scope of what you've built. The design system isn't guidance anymore — it's a hard wall.

In design mode, you're writing the guardrails. You decide what "new" looks like. The AI operates inside the language you defined.

What strikes me about this: the product designer who writes the component architecture is now setting the generative vocabulary for every user in the product. Design decisions used to stop at "what do we ship." Now they extend to "what can users ask AI to create."

The craft question has changed. It's not just "is this component well-designed?" It's "should this component exist as an AI-generatable thing at all?"

Constraint architecture used to be about design systems holding their shape under engineer interpretation. Now it's about design systems defining the possibility space of user-facing AI generation.

Puck AI's real contribution isn't the embedded editor. It's making the question visible: who controls what AI can build in your product?

The answer should be the designer.
