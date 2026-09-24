# Threads Post — Framer Skills
**Date:** Sep 24, 2026
**Topic:** The skills infrastructure convergence — and the question nobody's asking
**Format:** Long-form personal reflection
**Language:** English
**Note:** No hashtags. Personal/reflective tone.

---

Last week happened faster than I expected.

Monday: Figma shipped Custom Skills. Tuesday: Framer shipped Skills. Four days before that, Notion had shipped Skills.

CapCut did it in August. Divi in early September. And if you go back further, Cursor had a Field Guide. Claude Code had CLAUDE.md. Webflow had Agent Instructions.

The same concept — "a reusable set of instructions that teaches the AI how you work, specific to this tool" — has now landed in every major tool in a senior designer's stack. Inside six weeks.

The Framer implementation is clean. Skills live in a project. They reference your actual components, styles, and pages. The agent invokes them automatically when it judges a task matches — no slash command needed. Template authors can embed their design judgment so it travels with every remix. Someone inherits your template, they inherit how it thinks about new pages.

That's a real upgrade. I want to be honest about that.

But I also want to be honest about what this creates.

Right now, if I were to fully use the tools available to me, I would have:
- Figma Custom Skills for how I design components
- Framer Skills for how I structure and extend sites
- Notion Skills for how I write briefs and specs
- Cursor Field Guide for how I handle reviews

These are not the same document. They're not even the same format. And they were each written in different sessions, capturing different things I happened to do well that day.

When a task crosses tools — which is increasingly the default — they will conflict. Not dramatically. Subtly. The agent will read the one it has access to in that moment, and it will be wrong about something.

The `/skills` command is worth examining carefully here. You type it, describe what you want, and the agent writes a skill from the conversation you just had. It's a genuinely useful shortcut. But it captures the output of a session, not the reasoning behind it. The tradeoff you considered and discarded doesn't make it in. The client context that made that particular call right doesn't make it in.

What you get is a skill that reproduces what worked this time. Whether it works next time depends on how similar the situation is — which the agent has no way to know.

The tacit judgment — the part that actually differentiates a senior designer's decision from a midlevel one — doesn't transfer this way. It only transfers if you had already written it down.

Which brings me to the uncomfortable thing that all five of these skills launches are pointing at.

The skills infrastructure is ready. The tools are waiting to be taught. The question is not "can I encode my judgment?" The question is: how much of my judgment have I ever articulated?

Most of us haven't. We make good calls intuitively. We've never had a reason to write down why. Now we do.

That's the actual work the next few months are calling for. Not writing more skills. Writing the reasoning that makes the skills worth writing.
