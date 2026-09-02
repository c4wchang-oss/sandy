# Threads Post — Vercel design.md: Teaching Agents Product Design
**Platform:** Threads
**Date:** 2026-09-02
**Topic:** Vercel's system for building AI-generated on-brand pages — and what 57% fewer failures actually tells you
**Source:** https://vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md

---

Vercel published their full workflow for getting AI agents to build on-brand pages. I've been sitting with the numbers for a bit.

The headline: design.md reduced known design failures by 57%. The qualifier: every one of the six tested pages still had a problem serious enough to block shipping.

Both numbers are true at the same time, and that's not a contradiction. It's the point.

The system has three parts: a design.md file that explains what "good" looks like in prose, a public CSS stylesheet that packages their design system's primitives into referenceable classes, and a deterministic evaluation loop where human reviewers categorize every failure into one of three buckets — subjective judgment goes into design.md, mechanical errors go into the stylesheet, verifiable failures become code checks. Once categorized, that failure is prevented permanently.

The constraint is structural: you can only encode what you've already seen fail. Novel failures, new page types, aesthetic calls you've never had to make explicit — those still require human judgment. Every improvement to the system is a record of what the team learned from watching an agent get it wrong.

The evaluation loop is actually a solid design review pattern. Blind A/B comparisons. Human reviewers. Outcomes routed to the right layer of the system. Most design teams have some version of a review process. Very few convert those reviews into encoded, durable rules.

The deeper question: what percentage of your design judgment has actually been documented? Not a Figma file. Not a token library. A document that explains *why* the decisions exist — specific enough that an agent can distinguish a good call from a mistake.

That document is what an agent can learn from. The tacit judgment — the stuff you know from 10+ years of seeing what breaks — stays with you.

That gap is not a limitation of the model. It's the job.
