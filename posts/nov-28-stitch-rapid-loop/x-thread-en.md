# Topic 1: Google Stitch Rapid + Stitch Loop
# Platform: X (Twitter) Thread
# Language: English
# Date: Nov 28, 2026
# Sources:
#   Stitch Rapid — stitch.google.com, Nov 11, 2026
#   Stitch Loop — blog.google/innovation-and-ai/models-and-research/google-labs/stitch-loop/, Nov 18, 2026

---

## X THREAD

**[Tweet 1 — Hook]**
Google shipped two Stitch experiments within a week this month.

Front of the pipeline: 5-second multi-screen prototype.
Back of the pipeline: post-launch product agent that writes your PRs from live metrics.

The brief is no longer what the designer writes. It's what the product's data says it needs.

🧵

---

**[Tweet 2]**
Stitch Rapid (Nov 11) is a scratchpad inside Stitch. Rough prompt or screenshot → medium-fidelity multi-screen clickable flow in ~5 seconds.

Right-click any element to edit. Hold Space to voice-edit in <2 seconds. Auto-links buttons between screens — if you tap a link with no destination, it generates that screen on the spot.

Important: sessions aren't saved. Download or send to Stitch before closing the tab.

This is an exploration scratchpad, not a production tool.

---

**[Tweet 3]**
The technically interesting part: Stitch Rapid runs on the Gemini Decisions API — not a generative model.

Gemini Decision 1 evaluates up to 1,000 questions in a single forward pass at 150-250ms. It doesn't invent designs from scratch. It evaluates which components, layouts, and states best fit your context — from a constrained option space.

You pick one of 7 design systems before you start. That's the generation parameter.

Speed comes from constraint, not from raw generation capability.

---

**[Tweet 4]**
Stitch Loop (Nov 18) is a different beast.

A long-running product agent that connects to your GitHub + live metrics via 180+ integrations: Jira, Linear, Datadog, Figma, Sentry, Slack, Snowflake, Intercom, custom MCPs.

It runs evergreen loops toward goals you define. Three default loops out of the box: security, latency, and accessibility. Add custom loops (checkout conversion, etc.) anytime.

---

**[Tweet 5]**
The 4-step cycle for every loop:

1. **Suggest** — surfaces opportunities grounded in live product evidence
2. **Solution** — tradeoffs, scoping, visual design options where applicable
3. **Build** — writes code in an isolated cloud sandbox, opens a GitHub PR (with screenshots/video when relevant)
4. **Reflect** — monitors live metrics post-merge, learns from positive and negative results

Once a goal is met, it keeps watching in case the metric slips.

---

**[Tweet 6]**
The accessibility loop deserves a specific callout.

Loop comes with a default accessibility loop. It runs continuously on your live product — finds violations, writes fixes, opens PRs. This extends "accessibility = agent floor" from a cost argument (GPT-6.1 Terra Oct 28) to a *scheduled enforcement agent* at the product layer.

Not "AI can audit accessibility." A named background process that's always running it.

---

**[Tweet 7]**
Honest caveats:

**Stitch Rapid:**
→ Sessions not saved — download before closing the tab
→ Early MVP; Google says favorite parts will fold into full Stitch later
→ 7 design systems is a constrained palette; none may exactly match your DS

**Stitch Loop:**
→ Waitlist only (AI Ultra subscribers get priority); no pricing or limits published
→ 180+ integrations not fully listed; model names for non-security loops undisclosed
→ No benchmark data for Loop output quality — claims unverified by independent testers
→ Understand what continuous production metric access means for your data before connecting

---

**[Tweet 8]**
The reframe:

Stitch Rapid + Loop is a full lifecycle bet:
- Rapid = ideation scratchpad (5s, constrained option space)
- Stitch = design + build
- Loop = post-launch continuous improvement (brief = live performance data)

Most tools live in the ideation-to-build window. Stitch Loop claims the window after ship.

The brief used to be what the designer wrote. Now Google is building a system where the brief is what the product's data says it needs.

[Stitch Rapid · stitch.google.com · Nov 11, 2026 | Stitch Loop · blog.google · Nov 18, 2026]

---
