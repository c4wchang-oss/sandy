# Topic 1: Adobe Firefly Design (beta) + Creative Agent across all CC apps
# Platform: Threads
# Language: English
# Date: Nov 27, 2026

---

## THREADS POST — Long-form

Adobe announced Firefly Design in beta on Nov 25. It's a single workspace that combines raster, vector, motion, 3D, and print design — work that previously lived across six separate CC apps. The Creative Agent is rolling out as "AI Assistants" across Premiere, Illustrator, InDesign, After Effects, and Frame.io. In Photoshop it's a separate beta app.

There are two things in this announcement I find worth sitting with. The first is plan mode. Before the agent executes, it shows you its plan. You review, edit, approve, or switch to full autonomous mode. This is the same two-phase architecture I keep coming back to — constraint definition before generation, human in the loop at the approval step. What matters isn't the feature itself; it's what it signals about where Adobe thinks the trust problem lies. They've decided the problem is "agents that do things before you've said yes," not "agents that do things wrong after you've said yes." That's the right read.

The second is local MCP integrations. This is in private beta targeting early 2027, so it's not available yet. But the intent: external agents (Claude, Cursor, any MCP client) connect directly to Photoshop, Illustrator, Premiere, After Effects on your own machine. Project files stay on your computer. Layers, vectors, sequences stay editable. The agent treats the production source as its context, not a screenshot of it.

If you've been following the web platform MCP convergence — Webflow, Elementor, Framer, all within 46 days — this is the same arc now extending to desktop creative production apps. Those web platforms took about six weeks from announcement to completion. I'd expect desktop to take longer given the complexity of local file access and the number of host apps, but the direction is clear.

The honest caveats: Firefly Design is in beta, shipping timeline unclear. The Creative Agent is in beta in most apps, with varying capability levels. Brand preference saving is reference input to the agent, not structural constraint enforcement — the agent reads your guidelines doc, it doesn't architecturally prevent guideline violations. And "AI Assistants" is a rebrand of Firefly; not all of them use the Creative Agent yet.

The piece I'm watching: local MCP is the moment this becomes consequential for professional production workflows. When an external coding agent can open an Illustrator file, read the actual layer structure, modify specific paths, and hand it back — that's when the production file gap closes at the desktop creative layer. Everything before that is still a "generate and hope" interaction.

---

## THREADS SHORT TAKE

Adobe Firefly Design is in beta (Nov 25). One workspace: raster + vector + motion + 3D + print. Creative Agent across all major CC apps.

Plan mode is the right design decision: agent proposes, you approve, then it executes. Two-phase trust architecture at the platform layer.

The part I'm actually watching: local MCP integrations (private beta, targeting early 2027). When external agents can read and edit actual Photoshop/Illustrator/Premiere project files, the production pipeline becomes agent-readable end to end. That's the arc worth following.

---
