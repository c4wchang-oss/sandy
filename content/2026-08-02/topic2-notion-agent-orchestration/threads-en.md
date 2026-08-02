# Threads Post — Notion 3.5/3.6: The Workspace Became the Agent's Context Window
**Topic:** Notion Developer Platform — External Agents API, Workers, AI Meeting Notes → Custom Agents (Notion 3.5/3.6, July 2026)
**Platform:** Threads
**Language:** English
**Format:** Long-form personal reflection

---

**Post**

Notion shipped something this month that I think most designers are sleeping on. It wasn't the AI Meeting Notes → Custom Agent trigger (though that's real), or the Workers hosted runtime (though that matters). It was the External Agents API.

You can now assign tasks to Claude Code, Cursor, Codex, and Decagon directly inside Notion — the same way you'd assign work to a Custom Agent or a human teammate. They show up in your workspace. You track their progress in the same place you keep your design brief, your research documents, your meeting decisions.

Here's why that's different: until now, every agent lived in its own interface. If you wanted Claude Code to work on something, you were in a terminal or a chat window. You copied context in. You brought results out. You were the translation layer between your workspace and your tools.

Notion 3.5 removes that translation step. The brief and the executor are in the same place. The context doesn't have to be moved — it's already where the agent can read it.

The AI Meeting Notes trigger is the most concrete expression of this. Every meeting produces decisions. Those decisions used to take two or three manual steps to propagate — someone updating a tracker, someone drafting a recap, someone filing tickets. Now the meeting itself is the trigger: AI Meeting Note finishes → assigned Custom Agent runs → tracker updated, Slack recap sent, tickets filed. Automatically.

The gap between decision and execution closed. Not because the AI is smarter. Because the architecture removed the manual steps.

Notion Workers is the plumbing. It's a hosted runtime for custom code — write logic, deploy to a secure sandbox. The pattern it enables: Custom Agent for judgment (AI reasoning for "what should happen next"), Worker for execution (deterministic code for "reliably do the specific thing"). That's the correct split between AI and code. AI for decisions. Code for action.

The honest caveats: Workers are free through August 11, then Notion credits. The External Agents API is alpha — rough edges exist. Orchestration is only as good as your Notion structure. If your workspace is a mess of outdated pages and half-finished docs, no amount of agent integration changes that. Garbage in, garbage out applies here too.

But the direction is clear: the workspace is becoming the context window.

Your design brief, your component specs, your research notes, your project decisions — they were already in Notion. They're now the inputs your AI tools read by default, not something you have to copy-paste into every new chat window.

The infrastructure question for design teams isn't "which AI tool do I use?" It's "how well is my workspace structured?"

---
