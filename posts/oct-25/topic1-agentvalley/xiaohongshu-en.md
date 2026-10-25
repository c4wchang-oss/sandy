# Xiaohongshu Post — AgentValley (English)
# Date: Oct 25, 2026 | Tool: AgentValley | Platform: Xiaohongshu
# Image: images/topic1-xiaohongshu-3x4-en.svg

---

**Title:**
Why 5 concurrent AI agents is a UX design problem — and how AgentValley fixed it

---

**Body:**

Most AI coding tool coverage focuses on generation quality.
This one is about notification design.

---

**The Problem:**

When you have 5 Claude Code sessions running in parallel, the permission dialog becomes your most critical notification:

"May I run npm install?"
"May I git push origin main?"

These appear in terminal tabs. You might be in a different window. You won't see them for 20 minutes. One session is blocking, doing nothing, waiting for you.

---

**What AgentValley Does:**

① Every session = one card in your MacBook's notch
② Every sub-agent = one row with a pixel programmer avatar
③ Red count appears when ANY agent needs your attention
④ One-click jump to the exact terminal tab
⑤ (Optional plugin) Approve or deny directly from the notch

---

**Why the Notch Is the Right Design Call:**

It's ambient. Peripheral. Where your eye already goes.
Not a modal. Not a push notification. Not another window to manage.

Same principle as glanceable interfaces: the right signal in the right place cuts errors without adding attention cost.

---

**The Trust Architecture (Worth Knowing):**

- Core monitoring reads local Claude Code files only — no external requests
- Write access (notch approvals) requires a separate plugin you install yourself
- Open-source — you can audit everything
- Compatible with Claude Code only (not Copilot or other AI coding tools)

Monitoring layer and execution layer are intentionally separate. That's not a gap. That's a design decision.

---

**The DesignOps Bonus:**

Per-project AI cost tracking at API prices.
Exportable as a PDF statement of work.

First tool to make AI agent cost a project line item — not just a mystery on your monthly invoice.

---

**Senior UX Take:**

The pixel programmer avatars are a small thing.
They're also correct information design.

5 concurrent agents = 5 users in a collaborative tool = you need visual identity to tell them apart without reading.

Same challenge we solved for user presence indicators in Figma.
AgentValley solved it for AI agents.

---

Free, open-source, macOS only: agentvalley.app

#AIdesign #UXdesign #ClaudeCode #MacOS #NotificationDesign #AItools #DesignOps #UXworkflow #AIagent

---
