# Topic 2: Figma Agent Library Guidelines — 小紅書 Post (English)
**Date:** 2026-10-07
**Platform:** 小紅書 (Xiaohongshu / RED)
**Format:** Practical review / tutorial
**Image:** figma-guidelines-xhs-en.jpg (3:4)

---

**Title:** Figma Agent GA: the one new feature design systems teams need to set up now

**Body:**

Figma agent went GA yesterday (Oct 6). Paid plans, credits start counting. But buried in the release notes is a feature that changes what design system documentation is for.

**What's new: Library Guidelines**

Upload markdown files to any published Figma design library. The agent reads them automatically whenever someone prompts using that library — no need to paste in the docs, no need to remember to add context.

How to set up:

1. Open the Figma file containing your published library
2. File menu → Library → Manage guidelines
3. Upload `.md`, `.txt`, or `.json` files
4. Click Apply changes

Done. Every agent session with that library now has your documentation as context.

**What to write in your guidelines files:**

Figma recommends 3–8 focused files, combined size under 100 KB. Suggested structure:
- `overview.md` — library intro, what's in it, what the agent should know first
- `components.md` — when to use which component, not what the component is
- `anti-patterns.md` — what NOT to do and why (this is the most valuable file)
- `best-practices.md` — conventions, do/don't examples with context
- `examples.md` — real examples of how patterns come together

Write each rule as a scenario: situation → what to do → what to avoid → why. This is decision logic, not reference content.

**Why DesignOps teams need to do this now:**

- Repeated information = higher processing time + more credits used. Redundant guidelines cost money at team scale.
- The agent working from bad or missing guidelines will make decisions your team will keep having to correct manually — that's the expensive outcome.
- Guidelines quality = agent output quality ceiling for your design system.

**The frame that matters:**

Design system documentation and agent constraints used to be two separate jobs. Now they're the same job. The best `anti-patterns.md` is one that a new designer joining your team would also find genuinely useful.

One write. Two audiences: humans and the agent working alongside them.

**Also in the GA:** teammates' agents are visible on canvas — you can see or follow what a colleague's agent is doing in real time. Agent observability, natively in Figma.

Worth setting up this week before your team's agent usage grows and the governance debt accumulates.

#FigmaAgent #DesignSystem #DesignOps #AIDesign #FigmaUpdate #ConstraintArchitecture #UXDesign #ProductDesign #DesignTools #AgentCollaboration

