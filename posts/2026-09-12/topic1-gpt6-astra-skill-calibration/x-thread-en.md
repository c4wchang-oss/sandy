# Topic 1: GPT-6 Astra — Rethinking Skills and Prompts
# Platform: X (Twitter) | Language: English
# Date: Sep 12, 2026 | Format: Thread (8 tweets)
# Source: https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra (Sep 11, 2026)

---

**Tweet 1 (Hook)**
Every instruction you added to tame an older model might be the thing holding back a smarter one.

OpenAI's Sep 11 developer post is required reading — even if you're not an engineer.

🧵

---

**Tweet 2**
OpenAI published "Rethinking skills and prompts for GPT-6 Astra."

Addressed to developers using Codex. But the logic applies to anyone maintaining AGENTS.md files, skill libraries, or AI workflow instructions.

That includes designers who've built DESIGN.md files and component skill libraries.

---

**Tweet 3**
Problem 1: Skill bloat.

Too many skills → descriptions get truncated → model loads the wrong instructions.
Contradictory descriptions → model picks skills that don't apply.

More is not better. Shorter, more precise descriptions perform better.
Same as design tokens. Semantic and lean beats comprehensive.

---

**Tweet 4**
Problem 2: Blanket AGENTS.md rules.

"Before every edit, read architecture.md, database.md, and deployment.md."

This burns context on every typo fix. GPT-6 Astra can figure out what it needs to read. You don't need to force it.

Good guidance is contextual. Bad guidance is blanket.

---

**Tweet 5**
Problem 3: Defensive guardrails written for weaker models.

"Ask me before continuing" — gates you added because an older model went too far. Those same gates now stop Astra from completing work you're actually fine with.

The model's judgment improved. The instructions didn't update.

That's UX debt in your agent workflow.

---

**Tweet 6**
The design implication:

Your DESIGN.md, component skill files, brief templates — these are the constraint architecture AI operates within.

Same principle as design tokens:
→ Semantic and lean beats comprehensive and defensive
→ Quality ceiling = your instruction quality, not the model's capability

---

**Tweet 7**
The new calibration:

→ Skill descriptions: short, clear on when to use, progressive disclosure for details
→ AGENTS.md: contextual references ("use X for Y"), not blanket reads
→ Decision boundaries: loosen the defensive ones — Astra already has the judgment
→ Define completion before you start

---

**Tweet 8 (CTA)**
GPT-6 Astra can audit your AGENTS.md against these principles for you.

But more important: when did you last audit your DESIGN.md and component skill files?

The instructions you wrote for a less capable model are probably getting in the way now. ↓
