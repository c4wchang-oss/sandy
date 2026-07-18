# X Thread — Google Stitch + DESIGN.md (English)
**Topic:** Google Stitch's major 2026 update — infinite canvas, voice input, Agent Manager, and DESIGN.md
**Angle:** Everyone's debating "vibe design." The real story is a markdown file nobody's talking about.
**Format:** 8-tweet thread

---

**Tweet 1 (Hook)**
Everyone is arguing about "vibe design."

I want to talk about the part nobody's mentioning.

It's a markdown file. Called DESIGN.md.

And it might be more important than the infinite canvas, the voice input, or any of the other features Google shipped in Stitch this week. 🧵

---

**Tweet 2**
Google Stitch got a complete overhaul.

Infinite AI canvas. Voice input with spatial selection. Agent Manager for parallel explorations. Extract a design system from any URL. Connect to Cursor, Claude Code, Gemini CLI via MCP.

Genuinely impressive demo stack. But I keep coming back to one small thing.

---

**Tweet 3**
DESIGN.md is a plain-text markdown file that encodes your design system.

Colors. Type scale. Spacing rules. Component names. Tone and voice guidelines.

Human-readable. Version-controllable. And — this is the part — AI-readable.

You write it once. Every AI tool in your workflow can reference it.

---

**Tweet 4**
Here's the problem every AI design tool has:

You brief it. It generates something that looks right. You brief it again. It drifts.

No tool remembers your constraints between sessions. Every generation starts from scratch against your system.

DESIGN.md is a persistent contract the AI checks against — not a prompt you have to repeat every time.

---

**Tweet 5**
The workflow in Stitch:

Export your design system as DESIGN.md (or write it yourself — it's just markdown). Every new Stitch project reads it. Every screen generation is constrained to your existing color tokens, type scale, and component rules.

You can also import it from other tools. Apply your Stitch system to a different project without starting over.

---

**Tweet 6**
The real unlock: DESIGN.md travels.

Via the Stitch MCP server, you can connect to Cursor, Claude Code, or Gemini CLI.

Design system rules flow from your design tool to your coding agent. One file. No screenshots. No manual re-briefing of every tool in your stack.

Your constraints become portable infrastructure.

---

**Tweet 7**
Senior UX lens:

This isn't a feature. It's a file format proposal.

package.json is to Node what DESIGN.md could become to the entire design ↔ code ecosystem — a machine-readable contract that any AI agent can read, check against, and generate from.

The constraint architecture you've spent years building finally has a portable format.

---

**Tweet 8**
Real headline isn't "Google adds voice and infinite canvas to Stitch."

It's: Google proposed a design system format that AI can read without being prompted.

Vibe design is just vibes. DESIGN.md is infrastructure.

One of those things gets replaced in 12 months. The other compounds.

