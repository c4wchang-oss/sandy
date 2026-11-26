# Topic 1: Onlook 2.0
# Platform: 小紅書 (Xiaohongshu)
# Language: English
# Date: Nov 26, 2026

---

## POST TITLE
Onlook 2.0 is free and open source. Canvas on your real running codebase. Everything you need to know.

---

## POST BODY

Onlook shipped version 2.0 on Nov 19. Free. Open source (Apache 2.0). Mac desktop app. It puts a live canvas on top of your actual, running production codebase — not a mockup, the real thing.

Here's the full picture:

**→ What it is**
Import any Git repo or local folder. Onlook creates a git worktree (a safe copy on a new branch — your main checkout is never touched), starts your dev server with your project's own command, and shows the running app in frames on a canvas. Each frame is a real browser webview showing your actual product with real data.

**→ BYOA: Bring Your Own Agent**
Onlook doesn't ship its own model. Connect Claude Code or ChatGPT using the subscription you already own. The agent runs on your machine. Source build: no Onlook account, no cloud keys, no .env file needed. Apache 2.0 open source.

**7 things worth knowing:**

1. **Git worktree = safe, non-destructive exploration** — Onlook creates a worktree on a separate branch. Your main checkout is never touched. Changes only reach your repo as a normal PR. Explore freely, review before merging.

2. **Visual pointing solves the "which element?" problem** — Onlook injects a script into each frame. Click an element → agent gets the exact file path, component name, and code context. Not a screenshot description. The actual file reference. Same principle as Skisso (live CSS) and Ilse (dev app).

3. **Multi-version exploration** — Ask for 10 versions of a screen. All 10 appear as separate live frames on the canvas, each one your actual running product. Preview mode: interact with any version like a real user. Git worktree per version.

4. **This is the 4th visual-pointing instance** — MagicPath (canvas, Oct 1) → Skisso (live CSS, Oct 19) → Ilse (dev app, Oct 30) → Onlook (production repo, Nov 19). Pattern confirmed: pointing beats description at every layer where changes happen.

5. **Compare with Dessn (Nov 22)** — Both are canvas = production code. Dessn is cloud-first, MCP remote OAuth, Figma-like UI. Onlook is local-first, desktop app, free, open source. Same end state, different trust model and price. Dessn: 50 MCP calls/month free (reads count). Onlook: free, your machine, your data.

6. **The skills ceiling still applies** — BYOA means your skills documents (DESIGN.md, agent skills for your design system) determine output quality. Canvas is free. Brief intelligence is yours to build — same constraint as Cursor or Claude Code.

7. **Current limits** — Mac only (Windows coming). Requires Claude or ChatGPT subscription for AI features. v2.0.2, still early. Previous v1 was React+Tailwind-specific; v2 is broader but verify your tech stack first.

**The honest reframe:**

This is not an "AI design tool." It's a designer's canvas layer for the production codebase. BYOA means your agent subscription and your skills travel with you — you're not locked into Onlook's model choices.

Download free at onlook.com/install.

---

#Onlook #AItools #openSource #UXdesign #designtools #productdesign #BYOA #codingAgent #designworkflow #designsystem #seniorUX #AIworkflow #canvas #localFirst

---
