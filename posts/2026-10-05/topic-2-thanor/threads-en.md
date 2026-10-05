# Topic 2: Thanor AI — Threads Post (English)
**Date:** 2026-10-05
**Platform:** Threads
**Format:** Long-form personal reflection
**Image:** thanor-x-threads-en.jpg (16:9)

---

Thanor launched this week with a claim that's brutal and true: "Prompting harder does not work."

It's a library of design directions for AI tools. Not templates, not component kits. Pure constraint specifications: about 30 concrete values per design direction — hex colors with named roles, a type scale with actual pixel sizes, a spacing unit and its allowed multiples only, one easing curve with a duration in milliseconds, and a section order for the page. You paste this before your first prompt. The model stops reaching for its defaults.

I've been writing about brief quality being the real AI design ceiling for months. The same idea shows up in DESIGN.md (write design rules down before prompting), in BRDNA Sequencer (brand DNA as machine-readable context), in Once UI 2.0 (a design system that ships its own constraint document inside the npm package). They're all variations on the same insight: model capability is fine. What it's missing is a specification precise enough to prevent default behavior.

Thanor is that insight turned into a product.

The thing worth noticing about how Thanor works: you pick directions by watching screen recordings of actual output, not by reading design names. Which is honest product design — you're selecting by result, not by imagining what a name promises.

They also have an MCP server (read-only, OAuth, no repo access) so you can pull directions directly into Claude Code or Cursor without switching windows.

Honest take: this is a subscription to someone else's design decisions. $89 for 3 months, $299 lifetime. Which is a legitimate service for what it is. The thing worth knowing is the ceiling is still yours — Thanor closes the floor problem (the slop, the Inter, the purple gradient), but the judgment ceiling — what kind of design fits this product, this audience, this specific moment — is untouched. That part doesn't come in a library.

But for builders shipping sites right now? The 30-value spec format is worth understanding even if you write your own.
