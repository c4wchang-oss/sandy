# Topic 1: GPT-6 Astra — Rethinking Skills and Prompts
# Platform: 小紅書 (Xiaohongshu) | Language: English
# Date: Sep 12, 2026 | Format: Tutorial / Opinion
# Source: https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra (Sep 11, 2026)

---

**Title:** Your AI Workflow Instructions Are Probably Outdated — How to Recalibrate for GPT-6 Astra

---

🎯 **What happened:**
OpenAI published a developer guide on Sep 11, 2026: "Rethinking skills and prompts for GPT-6 Astra."

The premise: instructions written to steer less capable models now actively hinder more capable ones. Three specific failure modes affect anyone who's built AGENTS.md files, skill libraries, or DESIGN.md — not just engineers.

---

📌 **Failure Mode 1: Skill Bloat**

Problem: Too many skills with descriptions that are too long. When descriptions get too long, the model truncates them. It ends up loading wrong skills for wrong tasks. Contradictory descriptions make this worse.

Fix:
1. **Skill descriptions should be as short as possible** while staying specific about *when* to use them — not what they do in exhaustive detail
2. **Use progressive disclosure**: one root file that routes to details, not one file with everything inside
3. **Instructions written for older models often overconstrain Astra** — guidance that steered Sol or Luna may now block Astra from using its own judgment

---

📌 **Failure Mode 2: Blanket AGENTS.md Instructions**

Problem: "Before every edit, read architecture.md, database.md, and deployment.md." This wastes context on every minor task. GPT-6 Astra can figure out what to read without being told.

Fix:
1. **Make references contextual**: "use architecture.md for service boundaries, database.md for schema changes" — not required before everything
2. **Only require reading when task-specific**, not as a reflexive setup step
3. **Remove instructions the model doesn't need** — they cost context even when skipped

---

📌 **Failure Mode 3: Expired Trust Boundaries**

Problem: Confirmation gates you added because an older model went too far now stop Astra from completing tasks you're actually fine with. The model improved. The guardrails didn't update.

Fix:
1. **Review each confirmation requirement** — GPT-6 Astra won't proceed unless it knows the action is safe; you don't need to ask it to ask you
2. **Replace "ask me first" with "define completion clearly"** — tell the model what done looks like at the start
3. **Find expired defensive language** and remove it — it signals distrust the model doesn't need

---

📌 **What this means for UX designers:**

1. **Your DESIGN.md is a skill file — audit it.** Are each of the rules still needed, or do they constrain judgment that's now in the model?
2. **Component skill libraries accumulate the same bloat.** When did you last check if each skill description is the shortest version that still tells the model when to use it?
3. **Brief templates written for older agents may over-specify** things the model can now infer from context.
4. **Quality ceiling = your instruction quality.** Model capability has outpaced most people's instruction files. The gap is probably larger than you think.

---

✅ **Three immediate actions:**

1. Ask GPT-6 Astra to audit your AGENTS.md or DESIGN.md against these principles — it can do this itself and flag the specific issues
2. Go through your skill library and count how many skills have descriptions longer than two sentences — those are candidates to shorten
3. Find one confirmation gate or defensive rule written for a weaker model and remove it — see what happens

---

⚠️ **Honest caveat:**
This guide is written for Codex and engineering contexts. The principles translate to DESIGN.md and component skill files, but the exact failure modes look different. Apply the principle — lean, contextual, not defensive — not the literal engineering instructions. And one context GPT-6 Astra still benefits from: defining what "done" looks like at the start. It can be more tentative about stopping than earlier models. That's a briefing problem, not a model failure.

---

💡 **The reframe:**
You're not writing rules to protect the model from itself.
You're writing briefs that define what done looks like.
The model does the judgment.
You do the architecture.

---

#AIworkflow #GPT6Astra #DesignSystemAI #UXtips #SeniorUX #AItools #DESIGNMD #ConstraintArchitecture #AgentWorkflow #AIdesign
