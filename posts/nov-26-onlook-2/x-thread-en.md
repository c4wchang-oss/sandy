# Topic 1: Onlook 2.0
# Platform: X (Twitter) Thread
# Language: English
# Date: Nov 26, 2026
# Source: Onlook Substack (onlook.substack.com), GitHub (github.com/onlook-dev/onlook), Nov 19, 2026

---

## X THREAD

**[Tweet 1 — Hook]**
Onlook shipped 2.0 last week. Free. Open source. Mac.

Canvas that sits on top of your actual running codebase.

BYOA — bring your own Claude Code or ChatGPT. Your subscription. Your machine. Your code.

That's a different kind of canvas. 🧵

---

**[Tweet 2]**
What it actually is:

→ Import any Git repo or local folder
→ Onlook creates a git worktree (safe copy, separate branch — your main checkout is never touched)
→ Starts your dev server with your project's own dev command
→ Shows the running app in frames on a canvas

Each frame is a live browser webview. Not a mockup. Not a screenshot. Your actual product running with real data. Changes only reach your repo as a normal PR.

---

**[Tweet 3]**
The BYOA architecture:

Onlook doesn't ship a model. Connect Claude Code or ChatGPT using the subscription you already own. The agent runs on your machine, not Onlook's servers.

Source build (Apache 2.0): no Onlook account, no cloud keys, no .env file.

This is the first open-source, free, local-first implementation of the BYOA canvas pattern. Wonder (Oct 27) introduced BYOA for a design canvas as a commercial product. Onlook: same pattern, production codebase, free.

---

**[Tweet 4]**
The visual pointing mechanism:

Onlook injects a small script that draws selection outlines and reads the page.

When you click an element and say "make this a card layout," the agent doesn't get a screenshot description. It gets the exact file path, component reference, and line-level context.

This is the visual-pointing-as-agent-context pattern confirmed for the fourth time:
MagicPath (canvas Oct 1) → Skisso (live CSS Oct 19) → Ilse (dev app Oct 30) → Onlook (production repo Nov 19)

---

**[Tweet 5]**
The exploration model:

Ask Onlook to explore 10 versions of one screen. Every version shows up as a separate live frame on the canvas, each running your actual app.

Jump to Preview mode: interact with any version like a real user. Git worktree per version. Keep one, discard the rest, or send it as a PR.

This is creative direction at the production code layer — not "generate a mockup of a design," but "generate 10 live versions of the actual component and show them side by side."

---

**[Tweet 6]**
How this compares to Dessn (Nov 22):

Both put the production codebase at the center of the canvas.

Dessn = cloud-first. MCP-native remote OAuth. Figma-like canvas as front-end. Cloud agents + Dessn's design agent.

Onlook = local-first. Desktop app. Git worktree. Code on your machine. Agent on your machine. Canvas on your machine.

Same end state: canvas = production code. Different ownership and trust model. Different price: Onlook is free.

---

**[Tweet 7]**
Honest caveats:

→ Mac only right now. Windows coming.
→ Requires Claude or ChatGPT subscription for AI features ("free" refers to the canvas layer)
→ v2.0.2 — still early. Previous v1 was React+Tailwind specific; v2 is broader but verify your stack
→ Git worktree isolation is correct architecture, but source-code familiarity helps resolve agent errors
→ Artifacts (HTML sketches detached from repo) are a nice idea; not a Figma component library

---

**[Tweet 8]**
The reframe:

Onlook 2.0 is not an "AI design tool."

It's a designer's canvas layer for the production codebase — free, local-first, open-source.

BYOA means your existing subscription and your existing agent skills travel with you. You're not locked into Onlook's model choices.

The constraint: skills document quality sets the ceiling here, the same way it does in Cursor or Claude Code.

[Onlook 2.0 · onlook.com/install · Nov 19, 2026]

---
