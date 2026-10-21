# Inflight — Xiaohongshu Post (English)
# Platform: 小紅書 (Xiaohongshu)
# Format: Practical review/tutorial style
# Date: Oct 21, 2026

---

**Title:** The design review is the messiest handoff in product. This tool just fixed it.

---

If your design review process looks like this:

📍 Loom recording shared in Slack
📍 Written notes scattered across Notion
📍 Designer retypes everything into a prompt
📍 Agent produces the wrong screen
📍 Repeat

You're not alone. This is almost every team right now.

**Inflight** is a feedback layer that lives directly inside your prototype.

---

**What it does (step by step):**

1. Share a preview link or HTML prototype
2. Reviewers pin comments to actual UI elements on the running app — not screenshots, the real thing
3. Record video replies right on the prototype, no separate Loom link
4. Your coding agent (Cursor, Claude Code, Codex) pulls that feedback via MCP as structured next steps

No translation layer. No retyping. Feedback goes from reviewer → element → agent.

---

**Why this matters if you're working with AI coding agents:**

→ When a human reads vague feedback, they ask a follow-up question
→ When an AI agent executes vague feedback, it applies assumptions and generates a wrong screen

The cost of imprecise feedback is much higher when your executor is an AI.

---

**The feature most people will overlook:**

Structured questions. Before the review, you define what decisions actually need feedback — framed as specific questions. The agent gets structured answers, not stream-of-consciousness comments.

This is brief writing discipline applied to the review cycle. Small change, big difference.

---

**Honest assessment:**

✅ Works with deployed apps + HTML prototypes
✅ MCP connects to Claude Code, Cursor, Codex
✅ Built-in Slack sync — comments appear in thread automatically
✅ Video replies live inside the prototype
⚠️ Needs a script tag added to your HTML
⚠️ Real test: will your team write better structured questions, or just dump the same vague feedback into a prettier interface?

---

**The bigger picture:**

ProtoPie MCP made the prototype machine-readable for coding agents.
Inflight makes the *review of* the prototype machine-readable.

Both sides of the design handoff are now closed.

The design review has always been where handoffs break. This is the first tool that makes feedback machine-readable for agents — not just readable for humans.

---

#uxdesign #designtools #aitools #prototyping #designworkflow #productdesign #designreview #codingagent #mcp #figma
