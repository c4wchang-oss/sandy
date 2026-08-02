# X Thread — Notion 3.5/3.6: The Workspace Became the Agent's Context Window
**Topic:** Notion Developer Platform — External Agents API, Workers, AI Meeting Notes → Custom Agents (Notion 3.5/3.6, July 2026)
**Platform:** X (Twitter)
**Language:** English
**Format:** Thread (8 tweets)

---

**Tweet 1 — Hook**
Notion quietly stopped being a project management tool.

It's now the neutral infrastructure layer where every AI agent your team uses — Claude Code, Cursor, Codex, custom agents — operates as a native teammate.

That's a different product category.

🧵

---

**Tweet 2**
What shipped in Notion 3.5 and 3.6:

→ External Agents API (alpha): chat with, assign work to, and track Claude Code, Cursor, Codex, and Decagon inside Notion — same as you would a Custom Agent
→ Notion Workers: hosted runtime for custom code, deployed to a secure sandbox, no servers required
→ AI Meeting Notes → Custom Agent triggers: post-meeting automation runs automatically

The thread that connects all of it: the workspace is the context.

---

**Tweet 3**
The External Agents API is the strategic move.

Before: your agents lived in their own interfaces. Cursor in the IDE. Claude Code in the terminal. Codex on the web.

Now: they're assignable inside Notion. You give them a task. You track their progress. You see their output in the same place you keep your design brief, your research notes, your meeting decisions.

The brief and the executor live in the same workspace.

---

**Tweet 4**
The Meeting Notes → Custom Agent trigger is the one I keep thinking about.

Every meeting produces decisions. Those decisions used to live in someone's notes — maybe updated into a tracker, maybe turned into tickets, maybe sent as a recap, maybe forgotten.

Now the meeting itself is the trigger. AI Meeting Note finishes → agent runs → tracker updated, Slack recap sent, tickets filed. Automatically.

The gap between decision and execution just closed.

---

**Tweet 5**
Notion Workers is the plumbing that makes it reliable.

Workers are a hosted runtime for custom code. You write logic, deploy to a secure sandbox, and it runs. Database sync, webhook handling, agent tool calls — all without managing servers.

The use case pattern: Custom Agent decides what to do. Worker reliably executes the specific steps.

AI reasoning for judgment. Deterministic code for execution. Correct split.

---

**Tweet 6**
What this means for design teams specifically:

Your design brief is now machine-readable by default.

The research document, the meeting recap, the component spec, the project status update — all of it is already in Notion. Now any agent you assign a task to has access to that context.

You stopped writing context into prompt windows. Your workspace is the prompt.

---

**Tweet 7**
Honest framing:

Workers are free through August 11, then on Notion credits. External Agents API is alpha — expect rough edges. The orchestration is only as good as your Notion structure (garbage in, garbage out for agents too).

This isn't "Notion replaced your AI tools." It's "Notion became the surface where you govern all of them."

Governance and audit are built in. That matters for teams at scale.

---

**Tweet 8 — CTA**
Real headline isn't "Notion added agent integrations."

It's: the workspace became the context window for every agent on your team.

Your design brief, your research, your meeting decisions — they're not inputs you have to copy-paste into a model. They're already there.

The agent infrastructure question isn't "which tool do I use?" It's "how well is my workspace structured?"

How much of your team's working knowledge is actually queryable right now?

---

*Sources: https://www.notion.com/blog/introducing-developer-platform / https://www.notion.com/releases*
