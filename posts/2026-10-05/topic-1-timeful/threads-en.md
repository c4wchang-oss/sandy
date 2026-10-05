# Topic 1: Timeful — Threads Post (English)
**Date:** 2026-10-05
**Platform:** Threads
**Format:** Long-form personal reflection
**Image:** timeful-x-threads-en.jpg (16:9)

---

Timeful launched quietly last week. No AI. Local-first. Vue + Tailwind. True two-way canvas-code sync: edit the canvas and the Vue file updates; edit the code and the canvas follows. No export step. No tokens. No generation.

I've been watching the AI design tool space closely for months and I think this is one of the most interesting things to launch in a while — specifically because it has nothing to do with AI.

Here's the honest version of the design handoff problem: we've been running the Figma-plus-handoff workflow for a decade, and the gap between "what the designer made" and "what the developer builds" has never fully closed. The 2026 AI tools mostly try to generate a bridge across that gap. Timeful bets the gap shouldn't exist at all.

The design file is the code. Not a representation of the code, not a reference for the code. The same file, two views of the same object.

This connects to what I wrote about when Elyx launched — the Sketch co-founders' new tool that uses a human-readable, git-native .elyx format instead of a binary design file. Both Timeful and Elyx are making the same underlying bet: the real problem in AI design integration isn't "how do you describe designs to language models?" It's "why is the source of truth a format nothing can read?"

Timeful answers it from the production code side. Elyx answers it from the design file format side. Same question, different entry points.

The honest caveats: Vue + Tailwind only (no React yet), macOS only, solo developer building it. Those are real limitations and not everyone can use it today. $19/month, launched at #23 on Product Hunt.

But the architectural principle is worth noticing regardless of whether this particular tool reaches the scale to matter. A lot of AI design workflow is AI bridging a gap that shouldn't be there. What would it look like if we reduced the gap directly — without needing the bridge?

That question is going to stay relevant whether or not Timeful is the tool that answers it.
