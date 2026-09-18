# Threads Post — Figma Generative Plugins: The Brief Is the Product (EN)
## Sep 18, 2026 | Image: topic2-x-threads-en.png (16:9)

---

The most interesting thing about Figma's Generative Plugins isn't that the AI writes the code.

It's that the designer writes the brief — and the brief is the product.

Context: Figma's agent can now generate fully functional plugins from plain-language descriptions. Describe the tool, the agent builds it with a working UI, and you publish it to the Figma Community. No JavaScript required.

There's a line in the Figma docs that stuck with me:

> "A plugin works best when the workflow is deterministic: the same input should produce the same result every time. A skill is a good choice when you want an agent to interpret context, make judgment calls, or adapt its approach."

That distinction — deterministic plugin vs adaptive skill — is a product design decision, not a technical one. The same decision you make in design systems: hardcode this pattern, or leave room for judgment?

The example in the docs is an icon styler plugin. The prompt includes:
→ What gets selected (input)
→ Color fields with defaults
→ Size options: 16, 24, 32
→ Transformation rules: one frame per size, exact dimensions, stroke weights proportional, no extra wrapping frames

Every line of that prompt is a design decision. Inputs, transformation rules, edge cases, what should never happen. That's a component spec.

What I keep thinking about: the highest-value plugin authors won't be developers who happen to use Figma. They'll be the designers who've run into the same workflow gap 200 times — who can articulate the transformation rules precisely because they've debugged the manual version enough times to know all the edge cases.

If you've written a rigorous component specification, you already have the skill.
The surface changed. The thinking didn't.
