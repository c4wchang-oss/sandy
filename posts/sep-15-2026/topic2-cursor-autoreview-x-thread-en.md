# Topic 2: Cursor Auto-review — X Thread (English)
**Image:** `images/topic2-autonomy-dial-en-16x9.png` (16:9)

---

**Tweet 1 (Hook)**
"Agent autonomy as a dial, not a switch."

Cursor just shipped Auto-review.

That sentence alone should be in every agentic product brief you write this year.

---

**Tweet 2**
Auto-review is a classifier agent that reviews an agent's next action in context before it runs.

When it blocks, it doesn't create an approval prompt for the user. It gives feedback to the parent agent. The parent agent finds a safer path.

The user never sees it.

---

**Tweet 3**
From the Cursor team:

"The question is not whether an action looks risky in isolation. The question is whether the action is justified by what the user asked the agent to do."

That's the threshold design. That IS the UX decision.

---

**Tweet 4**
This is a hard design problem that almost every agentic product gets wrong.

Too much friction: stream of confirmation prompts — feels like AI that doesn't trust itself.

Too little: agent takes an irreversible action you didn't want.

Auto-review threads the needle.

---

**Tweet 5**
The architecture:

1. Classifier reviews the next action in context
2. If blocked → returns explanation to parent agent
3. Parent agent recalibrates, finds safer alternative
4. Only surfaces to user if it can't find a safer path

The user is the last resort, not the first stop.

---

**Tweet 6**
The implication for every product you ship:

Where does YOUR agent land on the autonomy dial?

What's the classifier logic for your domain? What actions are low-stakes (proceed freely) vs. what crosses a meaningful boundary?

Most teams haven't answered this.

---

**Tweet 7**
The unsolved part: Auto-review today is focused on local desktop agents.

The same principle needs to apply at every agentic product layer — onboarding, forms, e-commerce, customer service.

Most haven't designed their governance UX at all.

---

**Tweet 8**
Still early. But the mental model is right:

The governance UX problem isn't about showing more confirmation dialogs.

It's about designing an agent that can tell another agent when to slow down.

That's a different problem. And it's yours to design now.
