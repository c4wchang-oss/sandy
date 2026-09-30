# Threads Post — OpenAI DevDay 2026: ChatGPT Just Became a Design Collaboration Workspace (English)
**Topic:** OpenAI DevDay 2026 — Plugin Extensions with Figma inside ChatGPT, ChatGPT Dots always-on agents, Pages, MCP Events (Sep 29, 2026)

---

## Long-form reflection

OpenAI's DevDay 2026 had 20+ announcements. Most of the coverage is about the new models and the pricing changes. I want to talk about something quieter: what it means that Figma designs and comments can now live inside a ChatGPT conversation window.

Plugin Extensions let developers build full app-like experiences inside ChatGPT — sidebars, interactive panels, custom file viewers. The keynote demoed Figma content sitting next to the conversation, not in another tab. That's a different interaction model than "paste a screenshot and ask for feedback." The design file becomes part of the conversation context. Comments, assets, annotations — all in one panel.

For most of my career, the "AI in my design workflow" problem has been a context assembly problem. You finish a review. You switch to ChatGPT to think through a framing decision. You re-explain the project. You paste a screenshot. You get feedback that's missing half the relevant context. Then you switch back. That loop has a cost that compounds across a whole day.

Plugin Extensions doesn't eliminate that loop, but it collapses one major step: the context isn't lost between the design tool and the AI conversation. Whether that actually changes the quality of AI feedback depends entirely on how well the Figma plugin is built and what context it actually passes through.

ChatGPT Dots is the structural shift I'm thinking about more carefully. Always-on agents connected to 4,000+ apps with their own cloud computers. The implication for design teams isn't just "faster AI" — it's that the AI assistant now has persistent memory across your toolchain. It knows what changed in Figma this sprint. It saw the Slack thread about the rebrand decision. It has access to the Jira ticket that scoped the feature. You don't start every session from zero.

MCP Events extends this: connected apps can trigger automations based on actions. Design tool events flow downstream without someone manually relaying them. This is the connective tissue that's been missing.

Pages — collaborative docs where AI and humans co-author in real time — is worth watching for research synthesis and brief writing. The pattern here is the same as Notion and Notion AI, but integrated with the agents and connections that are now part of the ChatGPT ecosystem.

The honest assessment: 20 announcements in one day means rough edges on every surface. Plugin quality varies by developer. ChatGPT Dots requires the apps to have built the connectors. MCP Events needs implementation on both ends. None of this is plug-and-play on day one.

But the direction is clear. OpenAI has decided that the "AI needs more context" problem is solved by building context organization infrastructure, not by making the model smarter. That's the right diagnosis. Whether ChatGPT becomes the coordination layer for design workflows, or whether Figma's own ecosystem (MCP server, Code Layers, the agent panel) wins that position — that's the question worth tracking.

---

## Short punchy take (post separately)

For two years I've been manually building context bridges for AI design conversations.

Paste Figma screenshots. Re-explain the project. Import research findings. Summarize what changed since last session.

DevDay 2026 is OpenAI betting that context organization — not model capability — is the actual bottleneck.

Plugin Extensions, ChatGPT Dots, MCP Events. The pieces are infrastructure, not features.

Worth watching: does this actually collapse the loop, or just make the context assembly happen inside ChatGPT instead of before it?

