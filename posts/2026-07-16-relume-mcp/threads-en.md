# Threads Post — Relume Library MCP (English)
**Format:** Long-form personal reflection, no hashtags

---

I've been thinking about why AI-generated UIs are almost always bad — and I think the answer is simpler than people make it.

It's not the model. It's the context.

Ask any AI coding tool to build a multi-page site and you'll get the same result: each section styled in isolation. Different button variants, different spacing, different color decisions. The page is a patchwork, not a product. It looks like what you get when five contractors build different rooms of a house without ever talking to each other.

The root cause: AI is very good at writing code and very bad at remembering what your components actually look like. It has no design system. So it guesses. It approximates. It invents.

Relume's new Library MCP fixes this at the structural level. Connect it to Cursor, Claude, or Windsurf, and your AI assistant now searches a library of 1,000+ production-ready components — and pulls the actual code, not a guess. Every component comes with shared primitives, Tailwind tokens, and the same spacing system. Everything speaks the same language from the start.

The workflow I've landed on: plan the page, describe each section in plain language, let the AI find the matching Relume component, pull it in with the design system attached, then restyle into your brand. The coherence you get from this — even before any brand work — is dramatically better than blank-canvas generation.

This is what I've been calling "constraint architecture." The output quality of AI isn't just a model capability question. It's about what constraints and context you give the model to work within. A curated component library is a constraint. MCP is the delivery mechanism for that constraint.

The deeper pattern here: MCP is becoming the primary interface for injecting design system context into AI agents. Figma MCP. Relume MCP. Design token MCPs. We're moving from AI that generates to AI that *retrieves and adapts*.

The question for any senior designer building in this era: what is your team's source of truth, and is it MCP-accessible? Because if it isn't, the AI doesn't know what you've built — and it'll keep guessing.
