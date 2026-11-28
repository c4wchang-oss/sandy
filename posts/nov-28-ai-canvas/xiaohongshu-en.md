# Topic 2: AI Canvas — Design System for AI Agents with Done-Gate
# Platform: Xiaohongshu (Little Red Book)
# Language: English
# Date: Nov 28, 2026

---

## XIAOHONGSHU POST

**AI Canvas ships a done-gate — here's why the screen-ten problem matters**

Launched on Product Hunt Nov 18. The core problem they're solving: AI agents drift. The first screen looks great. By screen three or ten, everything has fallen apart — different gray, different spacing, different button for the same action. A loading spinner invisible against its background because two color systems fought over the same element.

This isn't a prompt problem. It's a constraint enforcement problem.

---

**What AI Canvas is:**

A design system for AI agents, with structural enforcement built in.

Three components:
1. **Andromeda Pro** — token-driven design system (colors, spacing, type)
2. **AI Brain** — 93 files the agent reads *before* it builds (component rules, building skill, review skill)
3. **Done-gate** — checks finished work, fails anything that drifts from the system

**The MCP server:**
- Free, connects to Claude, ChatGPT, Codex, VS Code, Cursor
- Agent searches catalog, reads source, installs components without leaving chat
- Everything lands as real editable source (shadcn command)
- MCP access always free, unlimited

---

**How the done-gate works:**

After the agent builds a screen, the gate runs:
- Raw color instead of a token → FAIL
- Off-scale spacing value → FAIL
- Component used in an unsupported way → FAIL

Agent fixes the failure *inside the system* before work counts as done. You don't manually catch drift — the gate does.

**What about intentional exceptions?**
Mark the line with an `allow` comment. Exception is explicit, local, documented in code.

---

**The constraint enforcement hierarchy (where this fits):**

| Level | Example | What happens if agent ignores it |
|-------|---------|----------------------------------|
| Convention | DESIGN.md, Library Guidelines | Nothing — agent can bypass silently |
| Done-gate | AI Canvas | Build fails, must fix before done |
| Protocol enforcement | A2UI 1.0 | Parse error — architecturally impossible |

AI Canvas is the middle level: harder to bypass than a document, but not impossible to break deliberately.

---

**Practical workflow:**

1. Install Andromeda Pro AI Brain in your project
2. Connect the AI Canvas MCP to Claude Code or Cursor
3. Build with your agent as normal
4. Done-gate auto-runs after each screen build
5. Drift gets caught before it compounds across screens

---

**Honest caveats:**

- React only — no Vue, no Svelte, no plain HTML
- Andromeda Pro is *their* design system; you customize tokens but start from their architecture
- Done-gate checks token consistency, NOT whether you made the right UX judgment (the ceiling is still yours)
- AI Brain = 93 files = real context window cost per session; watch your token budget
- Pricing: MIT free (Andromeda Legacy + select components), Andromeda Pro = premium tier

---

**The reframe:**

The screen-ten consistency problem is an expensive manual review in every AI-assisted project. A gate that catches drift before it compounds is a workflow efficiency tool.

The craft judgment — right component for the user's context, correct IA, right hierarchy — that's still on you. AI Canvas raises the floor. The ceiling remains where your taste puts it.

#AICanvas #DesignSystem #AIAgents #ClaudeCode #Cursor #UXDesign #AITools #DesignWorkflow #ComponentLibrary #FrontendDev

---
