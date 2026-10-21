# Inflight — Threads Post (English)
# Platform: Threads
# Format: Long-form personal reflection
# Date: Oct 21, 2026

---

The feedback loop in design has always been broken in the same way.

You share a prototype. Reviewers leave scattered comments across Slack, Loom, and Notion. Someone — usually the designer — reads all of it, synthesizes it, rewrites it as a prompt, and hands it to the developer. Or now, the coding agent.

That synthesis step was always lossy. You'd lose context, you'd lose the specific element being referenced, you'd lose the "this looked right but felt wrong" nuance that actually mattered most.

Inflight just closed that loop directly. Share a link, reviewers pin comments to actual UI elements on the running app, record video replies, and all of it flows via MCP into Claude Code, Cursor, or Codex as structured next steps. No retyping. No synthesis layer.

The thing I keep coming back to: fuzzy feedback was always a problem, but a manageable one. When a human developer reads a vague comment, they apply judgment and ask a follow-up question. When a coding agent executes a vague comment, it applies assumptions and generates a wrong screen — then the next agent action builds on top of that wrong screen.

The cost of bad feedback scales differently when the executor is an AI.

The structured questions feature matters more than the pinned comment UI. The real discipline isn't using Inflight — it's deciding, before the review, what specific decisions need feedback and framing them as questions. That's brief writing discipline applied to the review cycle. Most design teams don't do this now, and a tool doesn't automatically make them start.

Honest assessment: needs a script tag in your HTML; works with deployed apps; Slack sync is built in. If your team already reviews prototypes and you're passing feedback to a coding agent, this closes a real gap.

The real test is whether teams write better questions — or just dump the same vague comments into a prettier interface.
