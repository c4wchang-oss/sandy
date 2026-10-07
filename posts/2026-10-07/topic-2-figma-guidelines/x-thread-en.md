# Topic 2: Figma Agent Library Guidelines — X Thread (English)
**Date:** 2026-10-07
**Platform:** X (Twitter)
**Format:** 8-tweet thread
**Image:** figma-guidelines-x-threads-en.jpg (16:9)

---

**Tweet 1 — Hook**
The Figma agent GA'd yesterday with a feature most people scrolled past:

You can now upload Markdown files to a design library, and the agent reads them automatically — every single time someone prompts with that library enabled.

---

**Tweet 2**
What this actually is:

Go to Library → Manage guidelines → Upload `.md`, `.txt`, or `.json` files.
Recommended structure: `overview.md`, `components.md`, `anti-patterns.md`, `best-practices.md`

3 to 8 focused files. Under 100 KB total. The agent reads the whole set before responding.

---

**Tweet 3**
Why this matters more than it sounds:

Your design system already has documentation somewhere — Confluence, Notion, Zeroheight, a forgotten Figma file.
Now that documentation can also be the constraint the agent operates within.

One document. Two audiences: humans and agents.

---

**Tweet 4**
The format advice from Figma is worth reading carefully:

→ Describe the situation where guidance applies
→ What to do
→ What to avoid and why

That's not style guide writing. That's decision logic.
The agent reads these files the same way a good contractor reads a brief — to figure out what to decide when the situation is ambiguous.

---

**Tweet 5**
The governance implication nobody is talking about:

Repeated information across guideline files increases processing time and AI credit use.
Redundant guidelines cost money at team scale.

Guidelines quality is now an economic efficiency question, not just a content quality question.

---

**Tweet 6**
This extends the constraint document stack arc I've been tracking:

AGENTS.md (code agents) → CLAUDE.md (agent behavior) → design.md (Vercel) → DESIGN.md (Onefold) → Library guidelines.md (Figma native)

The difference here: it's attached to the library itself. Not a separate file to maintain. Not a prompt to remember to include.

---

**Tweet 7**
Also in the Figma agent GA: teammates' agents are now visible on canvas.

Click the chat pile → see or follow what your colleagues' agents are doing in the same file.

Agent observability built into the design tool. Not a log. Not a dashboard. The same canvas.

---

**Tweet 8 — CTA**
The reframe:

Design system documentation and agent constraints used to be two different jobs.
Figma just made them the same job.

If your team is starting to use the Figma agent seriously, the most valuable thing a design systems team can do right now is write `anti-patterns.md`.

Not for humans. For the agent that's going to be working alongside them.

