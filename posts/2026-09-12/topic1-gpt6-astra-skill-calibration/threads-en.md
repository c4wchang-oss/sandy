# Topic 1: GPT-6 Astra — Rethinking Skills and Prompts
# Platform: Threads | Language: English
# Date: Sep 12, 2026 | Format: Long-form personal reflection + short punchy take
# Source: https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra (Sep 11, 2026)

---

The rules you wrote to constrain weaker models are now constraining better ones.

OpenAI published a developer guide yesterday — "Rethinking skills and prompts for GPT-6 Astra" — and while it's addressed to engineers with Codex, the logic applies to anyone who's built an AI workflow instruction file. That includes UX designers who've created DESIGN.md files, component skill libraries, or agent brief templates.

Three specific failure modes they identified:

**Skill bloat.** Most people have accumulated too many skills with descriptions that are too long. When there are too many, the model starts truncating descriptions to fit. It ends up loading wrong skills for wrong tasks. Contradictory descriptions make it worse — the model picks something that sounds related but doesn't actually help. The fix is shorter, more precise descriptions with progressive disclosure. One root file that routes to details beats one file that contains everything.

**Blanket AGENTS.md instructions.** "Before every edit, read architecture.md, database.md, and deployment.md." This was necessary when older models needed to be pushed to build context. GPT-6 Astra figures out what it needs to read on its own. Blanket read requirements burn context on every minor task. Good guidance is contextual: use this doc for this type of work, not before everything.

**Defensive guardrails that expired.** If an older model acted without asking, you added confirmation gates. That made sense then. Those same gates now stop Astra from completing tasks you'd be completely fine with. The model's judgment improved. The trust boundary in your AGENTS.md didn't update. That's a hidden debt in your agent workflow.

The design implication: your DESIGN.md, skill files, and brief templates are constraint architecture. Same principle as design tokens — semantic and lean beats comprehensive and defensive. The quality ceiling isn't the model anymore. It's the quality of the instructions you've accumulated.

The calibration shift: stop writing rules to protect the model from itself. Start writing briefs that define what done looks like. Model capability has outpaced most people's instruction files.

---

**Short take:**
The rules you added to tame older models are now getting in the way.
Constraint architecture in AI workflows needs a maintenance cadence.
Instruction quality is the new quality ceiling.
