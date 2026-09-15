# Topic 2: Cursor Auto-review — Threads Post (English)
**Image:** `images/topic2-autonomy-dial-en-16x9.png` (16:9)

---

Cursor shipped Auto-review this week, and the framing they used is the clearest thing I've read about agentic UX design all year: "autonomy as a dial, not a switch."

Here's how it works: a classifier agent reviews each action before the parent agent runs it — not against an abstract risk score, but against the original intent of what the user asked for. If the action is blocked, the classifier returns an explanation to the parent agent. The parent agent tries to find a safer alternative. The user only gets interrupted if there's genuinely no other path.

That's the right interaction model. The user is the last resort, not the first stop.

Almost every agentic product I've reviewed in the past year has this wrong. Either every meaningful action requires a confirmation tap — which trains users to approve without reading — or the agent has blanket autonomy and eventually does something irreversible and unexpected. Both are governance failures. They're just failures at opposite ends of the dial.

The design question this raises for every product team building agentic flows: where does your agent sit on the autonomy dial? What's your domain-specific definition of "justified by what the user originally asked for"? What actions are low enough stakes to proceed freely, and what crosses a meaningful boundary?

Most teams haven't articulated this. They've either borrowed the full-trust default from the tool they're built on, or added ad-hoc confirmation prompts wherever something felt scary. Neither is a design decision. Both are defaults.

Auto-review is still early — focused on local desktop agents, with the same principles expected to extend further. But the mental model is right, and it's portable. The governance UX problem isn't about adding more confirmation dialogs. It's about designing an agent that can tell another agent when to slow down.

That's a product design problem. Nobody else will solve it for you.
