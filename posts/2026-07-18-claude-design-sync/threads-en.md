# Threads Post — Claude Design + /design-sync (English)
**Format:** Long-form personal reflection + punchy take
**Tone:** Thoughtful, no hashtags, more reflective than X thread

---

Anthropic shipped Claude Design. Another AI canvas. But I've been thinking about it from the wrong angle — and I think most commentary is too.

The interesting thing isn't the canvas. It's a command called `/design-sync` that runs from Claude Code's terminal. You run it and it reads your codebase — your actual components, color tokens, typography, spacing — and imports that into Claude Design. Now you're generating against your real design system, not a generic template. When you're done, you push it back: the same command, reverse direction, and your code arrives as an editable canvas again.

This is the first time I've seen the handoff problem approached from the codebase side, not the design side.

The traditional handoff — designer makes a file, exports specs, dev rebuilds, loses intent, nobody opens Figma again — exists because keeping design and code in sync had too high a maintenance cost. The sync was always manual, always asymmetric, always degrading. You'd annotate carefully, pass the file, and watch the intent dissolve by the time the PR was merged.

/design-sync makes sync a command, not a maintenance job. And the safety model is thoughtful: Claude generates a plan (what it will write, what it will delete, in what order) and waits for your approval. Nothing happens silently.

What this means for senior designers: the leverage point shifts. Not from Figma to Claude Design — that's a surface change. From the handoff document to the design system that feeds the sync. The tokens, the component constraints, the naming conventions — that's what /design-sync reads. That's what travels. That's what matters.

The handoff document was always a translation layer that introduced loss. If the design system is machine-readable and the sync is bidirectional, the translation layer disappears.

That's the real headline. Not the canvas.

