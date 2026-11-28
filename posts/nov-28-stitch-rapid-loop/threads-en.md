# Topic 1: Google Stitch Rapid + Stitch Loop
# Platform: Threads
# Language: English
# Date: Nov 28, 2026

---

## THREADS POST — Long-form

Google shipped two Stitch experiments within a week: Stitch Rapid on Nov 11 and Stitch Loop on Nov 18. They address opposite ends of the product lifecycle, and together they sketch a category claim worth paying attention to.

Stitch Rapid is an exploration scratchpad inside Stitch. Rough prompt or screenshot → medium-fidelity multi-screen clickable flow in roughly 5 seconds. The interaction model is good: right-click any element to edit, hold Space to voice-edit, auto-links between screens. If you tap a navigation element that has no destination, it generates that screen on the spot. Session isn't saved — download or send to Stitch before you close the tab.

The detail most coverage missed: Stitch Rapid runs on the Gemini Decisions API — not a generative model. Gemini Decision 1 evaluates up to 1,000 yes/no, choice, or rubric questions in a single forward pass at 150-250ms. It doesn't generate designs from scratch. It evaluates which components, layouts, and states best fit your context, from a constrained option space. You pick one of 7 design systems before you generate — that's the architecture parameter, not an aesthetic preference setting. Speed comes from constraint: bounded option space → fast evaluation.

This is structurally different from "prompt → AI invents anything." The brief constrains the domain; the model selects within it. It's closer to a component-aware layout evaluator than a generative designer.

Stitch Loop is a longer bet. It's a long-running product agent (internal name: Jitro) that connects to your GitHub and product context via 180+ integrations — Datadog, Sentry, Figma, Linear, Jira, Slack, Snowflake, Intercom, custom MCPs — and runs goal-oriented loops continuously.

The 4-step cycle: Suggest (opportunities grounded in live product evidence) → Solution (tradeoffs, scoping, visual design options) → Build (code in isolated sandbox → GitHub PR, with screenshots/video of its work) → Reflect (monitors live metrics post-merge, learns from each result). Once a goal is met, it keeps watching in case the metric slips.

Default loops: security, latency, accessibility. Add custom loops around your own business metrics (checkout conversion, signup rates, etc.).

The accessibility loop specifically: it's a continuously running accessibility enforcement agent at the product layer. Not "AI can run an accessibility audit when you ask" — a named background process that always runs, finds violations, writes fixes, opens PRs for your review. That's a different operational model for accessibility work.

The honest framing: Stitch Loop is waitlist-only with no pricing, no limits, no general availability date. The 180+ integration list isn't fully disclosed. No benchmark data for Loop's actual output quality. The security loop is the only one where Google named the underlying models (Gemini 4 Carbon + CodeMender). And you should think carefully about what continuous production metric access means for your team's data before connecting.

The pattern worth tracking: Loop's brief is live performance data, not a designer's written specification. The agent proposes changes grounded in real usage. That's a meaningful shift in what constitutes "the brief."

Stitch Rapid + Stitch + Stitch Loop = front of pipeline (5s exploration) + middle (design/build) + back (post-launch continuous improvement). Most design tools live in the middle. Stitch is making a claim on the full lifecycle.

Whether they can hold that claim at quality depends on how good the Loop's proposals actually are — and that's not provable from an announcement. But the architecture of the bet is worth noting.

---

## THREADS SHORT TAKE

Google's two new Stitch experiments (Nov 11 + Nov 18) cover opposite ends of the product lifecycle.

Stitch Rapid: 5-second multi-screen prototype powered by Gemini Decisions API (a discriminative model, not generative). You pick a design system upfront; speed comes from constraint, not raw generation. Sessions aren't saved.

Stitch Loop: post-launch product agent. Connects to GitHub + live metrics via 180+ integrations, runs evergreen loops (security, latency, accessibility, custom). Every PR needs your approval — nothing merges on its own.

The reframe: Loop's brief is your product's live performance data. That's not what I expected from a "design tool." But it's a coherent bet on where the brief actually lives after something ships.

Honest caveats: Loop is waitlist-only, no pricing, no benchmarks, no GA date. Know what you're connecting to production before you sign up.

---
