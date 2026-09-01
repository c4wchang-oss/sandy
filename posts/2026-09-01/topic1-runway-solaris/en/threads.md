# Threads Post — Runway Solaris: Interface World Model
# Platform: Threads | Language: English | Date: 2026-09-01
# Source: https://runway.com/news/research/introducing-solaris

---

"Every behavior has to be explicitly defined and implemented ahead of time, so software ships as a lossy compression of the space of possible interactions, frozen before any user arrives."

Runway wrote that sentence about Solaris — their new Interface World Model that generates UIs frame by frame in real time, no code required. But it's also the most honest sentence I've read about every product I've ever shipped.

Solaris eliminates the intermediate representation. Instead of design → language → code → rendered UI, it generates the interface directly. Visual, alive, open-ended. The frame IS the application.

They ran a user study: 250 participants, 7,500 pairwise judgments. Solaris vs. coded interfaces receiving the same interaction request. Solaris was preferred 61% on instruction following, 71% on natural behavior.

They also measured something I've always felt but couldn't quantify: the information loss during design-to-code translation. SSIM drops as visual complexity increases. Every multimodal LLM tested — including Claude Fable 5 — loses significant information when reconstructing an interface from a screenshot. The richer the design intent, the more gets lost.

Here's what Solaris still can't do: stable legible text, accessibility APIs, long-session coherence, backend integration. These aren't footnotes. They're exactly where UX precision matters most.

The question Solaris actually raises isn't "will this replace Figma?" It's: if the code layer disappears, what's the designer's artifact?

Not the mockup. The mockup was always downstream of intent.

The artifact becomes: documented intent. Constraint architecture. The rules that describe what interactions mean in natural language — because that's now what the model trains on.

Solaris is early access only. Not a product. But it's the clearest signal yet that the translation problem — the one we've been patching with handoff docs and component specs — was always the design problem.

Where the loss happens changed. Your job didn't.
