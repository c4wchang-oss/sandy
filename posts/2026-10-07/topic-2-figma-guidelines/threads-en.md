# Topic 2: Figma Agent Library Guidelines — Threads Post (English)
**Date:** 2026-10-07
**Platform:** Threads
**Format:** Long-form personal reflection
**Image:** figma-guidelines-x-threads-en.jpg (16:9)

---

Something in the Figma agent GA yesterday that deserves more attention than it got.

You can now upload Markdown files to a published Figma design library. These files become guidelines the agent reads automatically — every time someone prompts the agent with that library enabled, those files are provided in the background before the agent responds. Library → Manage guidelines → upload. Supported formats: `.md`, `.txt`, `.json`. Recommended: 3 to 8 focused files, under 100 KB total.

Figma's own documentation suggests: `overview.md`, `components.md`, `anti-patterns.md`, `best-practices.md`, `examples.md`. The format they recommend for each rule isn't a style guide entry — it's a decision scenario: here's the situation, here's what to do, here's what to avoid, here's why. That's the structure of a brief, not a reference document.

What this means in practice: the design system documentation your team already maintains — or should be maintaining — is now simultaneously the constraint the agent works within. You're not writing two things. The same document that explains to a new designer why you have two different card components and when to use each one is the same document that tells the agent not to invent a third card component when it's generating a dashboard.

I've been tracking the constraint document stack pattern for months: AGENTS.md for code agents, CLAUDE.md for agent behavior, `design.md` (Vercel), `DESIGN.md` (Onefold's self-serve tool), and now Library guidelines.md — native to Figma itself, attached to the library, automatically provided without anyone having to remember to include it. The progressive thing happening here is that constraint documents are getting closer and closer to the artifacts they constrain. Graphical (also this week) does this for coding agents by shipping `GUI.md` alongside tokens. Figma does it for the design agent by attaching guidelines to the library that powers it.

One governance detail from Figma's documentation that's easy to miss: repeated information across guideline files increases processing time and AI credit use. If your `components.md` and your `best-practices.md` both explain the same card component behavior, you're paying twice for the same instruction — and at team scale, that adds up. Guidelines quality is now an economic efficiency question. DesignOps just got a new scope.

The other feature in the GA I want to flag: teammates' agents are now visible on the same canvas. You can see or follow what a colleague's agent is doing in a shared file in real time. Agent observability — not in a log, not in a dashboard — on the actual design canvas. That changes what it means to "work on a file together" at teams where agents are regular collaborators.

The reframe I keep coming back to: design system documentation and agent constraints used to be two different jobs. One written for humans trying to understand intent. One written for machines that need decision rules. Figma just made them the same job. The best `anti-patterns.md` file is one that a new designer would also find genuinely useful.

Write for both audiences. That's the skill now.

