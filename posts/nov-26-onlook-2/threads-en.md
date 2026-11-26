# Topic 1: Onlook 2.0
# Platform: Threads
# Language: English
# Date: Nov 26, 2026

---

## THREADS POST — Long-form

Onlook shipped 2.0 on Nov 19. Free. Open source (Apache 2.0). Mac. Desktop app that puts a live canvas on top of your actual, running production codebase — not a mockup, the real thing.

I've been tracking the canvas-as-production-codebase pattern. Dessn (Nov 22) made your running product the canvas from the cloud/MCP side. Onlook makes the same move from the local-first/desktop side. Same end state: when you select an element on the canvas, you're pointing at the actual file, in the actual repo, as the actual running product. Different ownership model: Dessn lives in the cloud, Onlook lives on your machine.

The architecture is clean. Import any Git repo or local folder. Onlook creates a git worktree — a safe copy on a separate branch. Starts your dev server with your project's own dev command. Shows the running app in frames on a canvas, each frame a live browser webview. Your actual product, real data. Every change stays in the worktree. Only reaches your repo as a normal PR. Your main checkout is never touched.

The BYOA (Bring Your Own Agent) model is the defining choice. Onlook doesn't ship a model. Connect Claude Code or ChatGPT with the subscription you already own. The agent runs on your machine, not Onlook's servers. Source build: no Onlook account, no cloud keys, no .env file needed. This is the first open-source, free, local-first implementation of the BYOA canvas pattern. Wonder (Oct 27) introduced BYOA for a design canvas as a commercial product. Onlook is the same pattern applied to the production codebase, free.

The visual pointing mechanism: Onlook injects a small script into each frame. When you click an element and ask the agent to change it, the agent gets the exact file path, component reference, and line-level context — not a screenshot description. Click → reference. This is the fourth instance of visual-pointing-as-agent-context (MagicPath canvas Oct 1, Skisso live CSS Oct 19, Ilse dev app Oct 30, Onlook production repo Nov 19). The pattern is settled: pointing eliminates description ambiguity at the layer where the change needs to happen.

The exploration model is worth calling out specifically. Ask Onlook to explore 10 versions of a screen. All 10 appear as separate live frames on the canvas, each running your actual app. Jump to Preview mode and interact with any of them. Git worktree per version. Keep one, discard the rest, or send it as a PR. This is creative direction at the production code layer — not "generate a mockup of a design," but "generate 10 live versions of the actual component and show them side by side."

Honest caveats: Mac only right now, Windows coming. Requires Claude or ChatGPT subscription for AI features, so "free" refers to the canvas layer, not zero-cost overall. v2.0.2 is still early. Previous v1 was React+Tailwind specific; v2 works broader but verify your stack. The git worktree isolation is correct architecture — your main checkout is never touched — but source-code familiarity helps when agent errors need resolving.

The underlying constraint is the same as every BYOA or coding agent tool: skills document quality sets the output ceiling. If you're connecting Onlook to Claude Code and you haven't authored a good DESIGN.md or agent skills for your codebase, you'll get technically correct changes with no design system context. The canvas is free. The constraint intelligence is still yours to build.

---

## THREADS SHORT TAKE

Onlook 2.0 (free, open-source, Mac). Canvas on top of your actual running codebase. BYOA — Claude Code or ChatGPT subscription you already own.

The key mechanism: inject script reads the page → click element → agent gets exact file + component context. Not a screenshot description. The actual reference.

This is the BYOA pattern Wonder introduced as a commercial product, now free and local-first, applied to the production codebase instead of a design canvas.

Honest constraint: skills document quality sets the ceiling here too. The canvas is free. The brief intelligence is yours to build.

---
