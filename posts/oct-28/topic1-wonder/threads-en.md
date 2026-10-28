# Threads Post — Wonder (English)
# Date: Oct 28, 2026 | Tool: Wonder | Platform: Threads
# Image: ../images/topic1-x-threads-16x9-en.svg

---

Wonder shipped something structurally different this week.

I've been watching AI design tools compete on the same axis all year: more models, better AI generation, more credits. Wonder's October 27 release changes the competitive variable entirely. Bring the Claude Code or Codex plan you already pay for. Agents run locally on your machine through your existing subscription. Wonder charges nothing extra on the AI side.

That's the BYOA (Bring Your Own Agent) model, and it's the cleanest separation I've seen this year between a design tool's job and an agent vendor's job. Wonder handles the canvas. You handle the agent relationship. Your existing skills, tools, and plugins travel with the agent into Wonder. Switching from Claude to Codex is a config decision, not a platform migration. That architecture gives you future flexibility that every other tool bundles away.

The canvas itself is the real story. You run your actual app right next to your designs. Capture any screen as editable layers, explore directions on top, and when you're ready, the agent applies those edits back to your code. The design file IS the live preview IS the code review surface. The session boundary problem for AI design work — losing context between PRD, design explorations, and code — gets solved from the canvas side.

Parallel agents in separate worktrees is genuinely new. Each chat runs in its own copy of your project, so agents never conflict. You can explore five directions simultaneously, pick one, archive the rest. The "one agent at a time" constraint that every other AI design tool has been working around just disappeared.

The detail I think is underrated: agents that remember — and you can audit it. Your project context. Your design preferences. You can see and edit what the agent remembers. Every other AI tool black-boxes this. Wonder surfaces the agent's working memory as something you own, can inspect, and can correct. That's the trust architecture a tool you rely on across a full project actually needs.

"Second opinion" is first-class: before shipping, ask a different model to review the work. Agent self-review loop at the handoff step, not just during generation. That's a design QA layer built into the workflow — not added on after the fact.

Honest caveats: desktop only, Mac and Windows. Claude Code and Codex now, Cursor and OpenCode coming. Free tier is 3,000 AI-generated layers per week. Pro is $20/mo for unlimited layers and team sharing.

The thing I keep thinking about: when design and code share the same canvas in real time, at what point does the concept of "handoff" stop making sense? Wonder's answer is that the canvas holds both — the design and the live running codebase — simultaneously. You're not handing off a mockup. You're exploring directions on top of your actual product, and having the agent close the loop directly in code.

That's a different kind of trust. Worth understanding before you build a workflow on top of it.
