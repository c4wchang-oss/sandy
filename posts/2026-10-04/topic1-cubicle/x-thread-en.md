# X Thread — Cubicle: The Agent Office That's Read-Only by Design (English)
**Topic:** Cubicle — a live pixel-art office for AI coding agents (Claude Code + Paperclip). MIT, zero dependencies, read-only by design. Launched Oct 3, 2026.
**Angle:** "Read-only by design" isn't a feature limitation. It's the product design. When you run multiple AI agents concurrently, the "where is everyone?" question is a spatial visibility problem that logs can't answer. Cubicle solves it — and the constraint is what makes the answer trustworthy.

---

**Tweet 1 / Hook**
Cubicle just launched: a live pixel-art office for your AI agents.

Claude Code agents appear as pixel characters at their desks. They type when working. They raise their hand when they need you. They go to the lounge when done.

Read-only by design.

That last part is worth unpacking.

---

**Tweet 2**
What Cubicle actually does:

A single Node server (under 200 lines, standard library only, zero dependencies) watches your Claude Code hooks and Paperclip issue data.

Serves one HTML page. Draws everything with fillRect on a 352×208 canvas. No images. No framework. No build step.

The creator's note: the first time he turned on the Paperclip integration, he found two questions waiting that he didn't know existed.

---

**Tweet 3**
Why read-only?

Not because the tool can't write. Because write access would corrupt what you're trying to see.

The moment a visualization tool can modify anything, it becomes a source of uncertainty. You stop trusting what you're watching. The transparency disappears.

Read-only isn't a constraint on the product. It IS the product.

---

**Tweet 4**
Here's the UX problem Cubicle is actually solving:

When you run 1 agent, logs are fine. Linear. Scannable.

When you run 5 concurrent agents, "where is everyone and who's waiting on me?" becomes a spatial problem that logs fail completely.

Cubicle gives you peripheral vision for AI work. You glance at the corner of your screen. You don't open a terminal.

---

**Tweet 5**
The "no dependencies, zero network requests" design isn't just minimalism.

A visualization tool that makes network requests is one you can't fully trust. Cubicle's build step scans its own source and shipped bundles for fetch/XHR/WebSocket/beacon — and fails the build if it finds one.

This is constraint architecture applied to the observer tool itself. The verification process is part of the product's honesty claim.

---

**Tweet 6**
The pixel-art metaphor is doing more work than it looks like.

Spatial encoding — posture + location + speech bubble — communicates agent state at significantly lower cognitive load than a log line.

Same principle as the research showing ambient monitoring (color + thumbnail) cut AI agent errors 48% at zero attention cost versus reading chat transcripts.

The office metaphor makes agent status glanceable. That's a real design decision.

---

**Tweet 7**
Honest caveats:

Currently Claude Code + Paperclip only. Codex and Gemini CLI adapters are labelled "good first issue" on the repo.

No per-agent spend tracking yet for Paperclip (open issue).

The pixel-art cognitive encoding is charming. Verify the state mapping matches your mental model before you rely on it at the edge of a screen.

It's MIT, under 200 lines of Node, and you can read the whole thing in 10 minutes.

---

**Tweet 8**
The reframe:

As teams run more AI agents concurrently, the design question shifts from "how good is the agent?" to "how visible is agent status to the rest of the team?"

Cubicle answers with spatial metaphor. The read-only constraint makes the answer trustworthy.

The most honest product decision of the week is a pixel-art office that refuses to touch your codebase.
