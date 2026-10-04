# 小紅書 Post — Cubicle: The Agent Office That's Read-Only by Design (English)
**Topic:** Cubicle — live pixel-art office for AI coding agents (Claude Code + Paperclip). MIT, zero dependencies, read-only by design. Oct 3, 2026.

---

**Title:**
This AI agent office tool just dropped — and the best design decision is what it refuses to do

---

**Body:**

Cubicle launched on Product Hunt this week (#6 on October 3, 2026). It's a live pixel-art office for your AI coding agents.

Your Claude Code and Paperclip agents appear as pixel characters at their desks. They type when working. They raise their hand when they need you. They go to the lounge when they're done.

And it's read-only by design.

**What it actually does:**

① Watches your Claude Code hooks and Paperclip issue data in real time
② Renders a live 352×208 pixel-art office — agent state expressed through posture, location, and speech bubbles
③ When an agent is waiting on you: their bubble flashes the issue ID so you see it immediately
④ Kiosk mode (?kiosk) for full-screen TV or second monitor
⑤ Server-side redaction (--redact) strips sensitive info before displaying on a shared screen

**The technical choices are the design:**

Single Node file. Under 200 lines. Standard library only. Zero npm dependencies. Zero network requests — and the build step verifies this by scanning for fetch/XHR/WebSocket/beacon.

You can read the entire codebase in ten minutes. That's what makes it trustworthy.

**Why "read-only by design" is the interesting part:**

When a visualization tool can modify things, it becomes a source of uncertainty. You stop trusting what you're watching. The transparency you were trying to get disappears.

This is constraint architecture applied to the observer itself. The read-only constraint isn't a missing feature. It's the product philosophy.

**The real problem it solves:**

Running 1 AI agent? Logs work fine.

Running 5 concurrent agents? "Where is everyone and who's waiting on me?" becomes a spatial visibility problem. Logs fail at that question because they're linear, not spatial.

The pixel-art office gives you peripheral vision for AI work. You glance at the corner of your screen — you don't open a terminal.

**Honest caveats:**

- Currently Claude Code + Paperclip only (Codex and Gemini CLI adapters are open issues)
- No per-agent spend tracking yet
- The pixel-art encoding is charming — validate it against your mental model before relying on it as team infrastructure
- MIT, 200 lines, fully readable

**The senior UX frame:**

As teams scale to 5, 10, 20 concurrent AI agents, agent observability becomes a UX design problem. The question shifts from "is the agent working?" to "can the whole team see agent status at a glance?"

That's a spatial design problem. And Cubicle is the first tool that treats it like one.

The most honest product decision of the week: a tool that refuses to touch the thing it's watching.

---

#AIAgents #UXDesign #DesignTools #ClaudeCode #AIWorkflow #ProductDesign #SeniorUXDesigner #AIProductivity #AgentObservability #ConstraintDesign #OpenSource
