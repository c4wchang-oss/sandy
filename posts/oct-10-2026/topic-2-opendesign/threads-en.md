# Threads Post — English
## Topic: OpenDesign — BYOK design workspace, open-source answer to vendor lock-in
## Date: October 10, 2026
## Format: Long-form personal reflection

---

After Anthropic integrated Claude Design into every conversation last week, the obvious question became: what does this look like if you're not an Anthropic shop?

OpenDesign launched a collaborative workspace this week that answers it.

OpenDesign is open source, Apache-2.0, local-first, and designed around BYOK: bring your own agent. Claude Code, Codex, Cursor, Gemini CLI, Grok, DeepSeek, Kiro, Kilo, Qwen, OpenCode, Mistral, GitHub Copilot CLI — 17 adapters. Switching between them is a config change, not a product change.

The workflow is functionally similar to Claude Design: choose a design system, describe what you want to build, the agent writes a working HTML prototype, you preview it live, share with the team, gather comments, send comments back to the agent for revisions, export or ship. The team workspace this week adds: shared projects, shared design systems, shared skills — all accessible to everyone on the same OpenDesign Cloud account.

Design systems: 150+ open-source systems out of the box, or generate one from a website URL, a GitHub repo, or a Figma file. DESIGN.md is the portable format — the same one Vercel introduced, Onefold auto-generates, and Claude reads natively. OpenDesign reads it too.

Here's where I want to be honest about the trade-offs. Claude Design has zero setup friction — it's built into every Claude conversation. OpenDesign requires you to have a coding agent already configured. That's not a small difference for teams unfamiliar with local agent setup.

But the value proposition is different. Claude Design is seamless and Anthropic-native. OpenDesign is portable and agent-agnostic. For a team that has invested in Cursor or Codex workflows — and doesn't want their design workflow locked to a different provider — portability is the real argument.

The deeper question this raises: we've been building multi-agent workflows for months. But nobody has seriously worked out what happens when you want to switch your primary AI provider. BYOK design means your workflow is portable. That's the actual value — not the current savings, but the future flexibility.

---

*Image: 16:9 — see images/x-threads-16x9-en.jpg*
