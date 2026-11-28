# Topic 2: AI Canvas — Design System for AI Agents with Done-Gate
# Platform: X (Twitter) Thread
# Language: English
# Date: Nov 28, 2026
# Source: aicanvas.me, Product Hunt Nov 18, 2026

---

## X THREAD

**[Tweet 1 — Hook]**
The first screen Claude generates looks great.
By screen ten, everything has drifted.

Different shade of gray on every page. Spacing picked by feel. Three different buttons for the same action. That loading spinner? Same gray as the background. Nobody caught it.

This isn't a prompt problem. It's a system problem.
AI Canvas ships the done-gate.

🧵

---

**[Tweet 2]**
AI Canvas launched on Product Hunt Nov 18.

The core piece is Andromeda Pro: a token-driven design system where every component follows the same color, spacing, and type tokens. The AI Brain is 93 files the agent reads before it builds. Component rules, building skill, review skill, and tools to check finished work.

The agent doesn't improvise. It reads the system first.

---

**[Tweet 3]**
The done-gate is the structural enforcement mechanism.

After the agent finishes building, it checks:
→ Raw color instead of a token: **FAIL**
→ Off-scale spacing value: **FAIL**
→ Component used in an unsupported way: **FAIL**

The agent fixes the failure inside the system before the work counts as done.

You don't police the details. The gate does.

---

**[Tweet 4]**
The deliberate exception matters.

You sometimes genuinely need to break the system for one screen. AI Canvas's answer: mark that line with an `allow` comment. The exception is explicit. Local. The rule doesn't change everywhere else.

Compare this to "turn off the linter": here, your intent is recorded in the code. The exception is documented, not silently introduced.

---

**[Tweet 5]**
The MCP server connects AI Canvas to Claude, ChatGPT, Codex, VS Code, Cursor.

Your agent can search the catalog, read source, and install components without leaving the chat. Everything lands in your project as real, editable source (shadcn command under the hood). MCP access is always free — no meter on catalog browsing.

Design system = agent-queryable catalog. Same arc as Once UI 2.0, GitHub Replica.

---

**[Tweet 6]**
Where AI Canvas sits in the constraint enforcement hierarchy:

→ **Convention** (DESIGN.md, Library Guidelines): guidelines agents *should* follow
→ **Done-gate** (AI Canvas): checks finished work, fails drift, requires correction
→ **Protocol enforcement** (A2UI 1.0): agents architecturally *cannot* place unregistered components

Three levels. AI Canvas is the middle layer: post-generation check with mandatory correction. Not architectural prevention, but harder to bypass than a document.

---

**[Tweet 7]**
Honest caveats:

→ React only — no Vue, no Svelte, no plain HTML
→ Andromeda Pro is their design language; you retune the tokens, but you start from their system (not yours)
→ Done-gate checks token usage; it cannot judge whether you chose the right component for the user's context (judgment ceiling)
→ AI Brain = 93 files = real context window consumption; know your token budget
→ Pricing: MIT free (Andromeda Legacy + select components), Andromeda Pro is premium

---

**[Tweet 8]**
The reframe:

The first screen was never the problem. Screen ten was. Screen fifty was. The design review where everything needs a consistency pass was.

AI Canvas's done-gate is automated floor enforcement at the design output layer. It doesn't raise the ceiling — it enforces the floor. Catch accidental drift before it compounds.

Your design system + a gate that fails drift = consistent baseline. The craft judgment is still yours.

[AI Canvas · aicanvas.me · Product Hunt · Nov 18, 2026]

---
