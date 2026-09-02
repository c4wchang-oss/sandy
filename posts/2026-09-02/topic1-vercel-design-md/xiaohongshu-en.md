# Xiaohongshu Post — Vercel design.md: Teaching Agents Product Design
**Platform:** 小紅書 (Xiaohongshu / RED)
**Date:** 2026-09-02
**Format:** Tutorial / Case Study
**Topic:** Vercel built a system to teach AI agents product design — here's how it works
**Source:** https://vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md

---

**Title: Vercel taught AI agents product design — here's what it actually took**

Vercel published their full system for getting AI agents to build on-brand pages. I unpacked it.

**The three-part system:**

1. **design.md** — prose guidance that tells agents what "good" looks like: how to frame the reader's job, how to structure evidence, which composition patterns to use and why
2. **A bounded CSS stylesheet** — reusable tokens and component classes for headers, tables, stat strips, chart styles; agents use the class names, not invent new ones
3. **A deterministic evaluation loop** — fixed test scenarios, blind A/B comparisons, human review, feedback categorized and routed to the right layer

**The honest result:**
↑ 57% fewer known design failures
↓ Every one of the 6 tested pages still blocked from shipping

Both numbers matter. The system can only prevent failures you've already identified and encoded.

**The feedback routing is the clever part:**
— Subjective judgment → update design.md
— Mechanical error → fix the stylesheet
— Verifiable failure → write a code check

Once it's encoded, that failure is prevented permanently. This is DesignOps work — just systematized.

**What this means for senior UX designers:**
→ Your design system was already a brief for developers. It's now also a brief for agents.
→ The quality of your written reasoning is the ceiling on what agents can learn.
→ Tacit judgment — what you know without being able to say — stays with you. That's where senior value concentrates.

**The question worth asking your team:**
What percentage of your design decisions have a written "why" — not the token name, but the reasoning behind it?

That gap between your documentation and your judgment is exactly what agents can't cross on their own.

Source: vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md

#UXDesign #AIDesign #DesignSystems #DesignOps #ProductDesign #AITools #SeniorDesigner #ConstraintArchitecture
