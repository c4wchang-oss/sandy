# X Thread — Figma Generative Plugins: The Brief Is the Product (EN)
## Sep 18, 2026 | Image: topic2-x-threads-en.png (16:9)

---

**Tweet 1 (hook — attach image)**
Figma's agent can now build plugins from plain text.

Describe the tool you need.
Agent writes the code.
Publish it to 5 million designers.

The role shift isn't "AI does your work."
It's "you design the tools AI uses to do everyone's work."

---

**Tweet 2**
Generative Plugins now support community publishing.

Describe a plugin — bulk-restyle icons, generate type ramps, flag broken flows.
Agent builds it with a working UI.
You publish it to the Figma Community.

No JavaScript required.
Just constraint architecture.

---

**Tweet 3**
The Figma docs make a distinction worth naming:

Plugin = deterministic
Same input → same output, every time.

Skill = adaptive
Agent interprets context, result varies.

That's a design decision — the same one you make in design systems: hardcode this pattern, or leave room for judgment?

---

**Tweet 4**
The example prompt in the docs is instructive.

An icon styler plugin:
→ Input: currently selected icon
→ Colors: primary + accent with defaults
→ Sizes: 16, 24, 32
→ Rule: one output frame per size, exact dimensions
→ Rule: scale stroke weights proportionally
→ Rule: no extra wrapping frames

That's not a code prompt. That's a component spec.

---

**Tweet 5**
Every rule in that prompt is a design decision:

What are the valid inputs?
What transformation should always happen?
What should never happen?
What edge cases need explicit handling?

If you've written a rigorous component specification before, you already have this skill.

The delivery format changed. The thinking didn't.

---

**Tweet 6**
The community publishing angle is underrated.

Most Figma plugins were built by developers who wanted to solve their own problem.

The best plugin authors now will be designers who've run into every edge case — who can articulate transformation rules precisely because they've debugged the manual version 200 times.

---

**Tweet 7**
Honest caveat:

Plugin = deterministic.
Gaps surface at scale.

"Same input → same output" breaks when your input has more variety than your prompt anticipated.

Write your constraint architecture defensively.
Test at the edge of your input range, not just the clean center case.

---

**Tweet 8**
Build one plugin this week.

Not for productivity — to understand the new authorship loop.

Describe a workflow you've executed manually more times than you want to admit. Watch the agent translate your mental model into running code.

What workflow would you encode first?
