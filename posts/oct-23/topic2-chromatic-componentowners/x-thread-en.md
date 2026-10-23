# X Thread — Chromatic COMPONENTOWNERS (English)
# Date: Oct 23, 2026 | Tool: Chromatic October 2026 changelog | Platform: X / Twitter
# Image: images/topic2-x-threads-16x9-en.svg

---

**Tweet 1 (Hook)**
Chromatic just shipped component ownership for UI Review. It's a governance design problem disguised as a changelog entry.

---

**Tweet 2**
COMPONENTOWNERS is a plain-text file in your repo root. Each line maps a Storybook path pattern to the people responsible for it.

When a build runs, Chromatic finds every changed story, matches it to the file, and auto-assigns those owners to the UI Review.

Every assigned reviewer must approve before the Review passes.

---

**Tweet 3**
Why this matters right now:

AI agents — Claude Code, Cursor, Codex, Kombai — are writing UI code. They modify components. Those changes land in PRs.

Who reviews them?

Previously: whoever you happened to tag, or your default reviewer. Now: the person or team who actually owns that component.

---

**Tweet 4**
The distinction that's easy to miss:

COMPONENTOWNERS matches Storybook paths, not file paths.

Your Button lives at `src/components/button/index.tsx`. In Storybook it's `Forms/Input/Button`.

The ownership maps to your design system's taxonomy — not your directory tree. That's the right abstraction layer.

---

**Tweet 5**
One rule you must get right:

The last matching rule wins.

Put the catch-all `*` at the top of the file. If it's the last line, it overrides everything above it.

Also: Chromatic silently ignores malformed rules. No validation output. Test it before you trust it.

---

**Tweet 6**
Same changelog: SteadySnap stabilizes flaky interaction tests.

Flaky tests = false positives in UI Review = review fatigue = approve without reading.

COMPONENTOWNERS improves who reviews. SteadySnap improves the quality of what's worth reviewing.

The pairing is deliberate. Both halves matter.

---

**Tweet 7**
Honest caveat:

This only works if your team has Storybook discipline.

No Storybook coverage = no COMPONENTOWNERS surface = your components are changing without any visual snapshot in the loop.

For teams already in visual testing: this fills a real governance gap. For teams that aren't — this is the argument to start.

---

**Tweet 8 (CTA)**
The deeper shift: when AI agents modify your design system components, "tag someone who looks relevant" doesn't scale.

Structural assignment scales. One file. One-time setup. Runs with every build.

The question: does your design system have a COMPONENTOWNERS file?

If you can't name who owns `Button/Primary` in 30 seconds, you already have an answer.
