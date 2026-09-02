# X Thread — Vercel design.md: Teaching Agents Product Design
**Platform:** X (Twitter)
**Date:** 2026-09-02
**Topic:** Vercel design.md — what it actually takes to teach an AI agent what "good design" means
**Source:** https://vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md

---

**Tweet 1 (hook)**
You can only teach an agent what you've already written down.

This is the real finding from Vercel's design.md system — and it's more uncomfortable than the headline number.

**Tweet 2**
Vercel published their full workflow for getting AI agents to build on-brand pages.

Three parts: a design.md prose file, a bounded CSS stylesheet, and a deterministic evaluation loop.

**Tweet 3**
The headline result: 57% fewer known design failures.

The honest qualifier: every one of the six tested pages still had a problem serious enough to block shipping.

Both numbers are true at the same time.

**Tweet 4**
Why? The system only prevents failures you've already identified.

Run a test. Human reviewer sees a problem. They categorize it:
— Subjective judgment → design.md
— Mechanical error → stylesheet
— Verifiable failure → code check

That failure is now prevented forever. Unknown failures are still yours.

**Tweet 5**
The evaluation loop is actually a solid design review pattern.

Blind A/B comparisons on agent output. Human reviewers. Feedback routed to the right layer.

Most design teams run reviews. Very few encode the outcomes into durable rules.

**Tweet 6**
The stylesheet is the less-discussed piece that matters most:

Agents kept inventing their own typography, spacing, and layout. So Vercel took those decisions away entirely — packaged as CSS classes any agent can reference.

Constraint architecture. The model decides less.

**Tweet 7**
The underlying question: what percentage of your design judgment has actually been written down?

Not a Figma file. Not a component library. A document that explains *why* the decisions exist — specific enough that an agent can distinguish a good call from a mistake.

**Tweet 8**
The real constraint: you can give agents your documented knowledge.

The tacit judgment — 10+ years of knowing without being able to say — stays with you.

That gap is not a limitation of the model. It's where senior design value concentrates.

↳ vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md
