# Topic 1: Google Stitch Rapid + Stitch Loop
# Platform: Xiaohongshu (Little Red Book)
# Language: English
# Date: Nov 28, 2026

---

## XIAOHONGSHU POST

**Google shipped two Stitch experiments that cover the full product lifecycle — here's the breakdown**

Stitch Rapid (Nov 11) for the front. Stitch Loop (Nov 18) for the back. Together they sketch something interesting about where Google is taking this.

---

**STITCH RAPID — The exploration scratchpad**

What it does:
- Rough prompt or screenshot → medium-fidelity multi-screen clickable flow in ~5 seconds
- Right-click any element to edit, voice-edit with Space key (<2 seconds)
- Auto-links buttons between screens; taps a missing destination? generates that screen on the spot
- 7 design systems to choose from (Wireframe, Material Design 3, Breeze, etc.)

The technical detail that matters:
Stitch Rapid runs on the **Gemini Decisions API** — not a generative model. It evaluates which components and layouts best fit your context from a constrained option space. Speed comes from bounded constraint, not raw generation.

What it's NOT:
- Not a production tool — sessions aren't saved
- Not a replacement for Figma or Stitch full flow
- Download or send to Stitch before closing the tab

---

**STITCH LOOP — The post-launch product agent**

What it does:
Connects to your GitHub + live product metrics via 180+ integrations (Datadog, Sentry, Figma, Linear, Jira, Slack, Snowflake, custom MCPs) and runs continuous improvement loops.

The 4-step cycle:
1. **Suggest** — surfaces opportunities from live product evidence
2. **Solution** — tradeoffs, scoping, visual design options
3. **Build** — writes code in isolated sandbox, opens GitHub PR (with screenshots/video)
4. **Reflect** — monitors live metrics post-merge, watches for regression

**Default loops out of the box:**
- Harden Application Security (Gemini 4 Carbon + CodeMender)
- Latency optimization
- Accessibility enforcement ← this one is worth noting specifically

**You always approve the PR. Nothing merges without your review.**

---

**Why the accessibility loop matters**

The accessibility loop isn't "AI can audit accessibility when you ask." It's a continuous background process that always runs — finds violations, writes fixes, opens PRs for your review.

For teams where accessibility gets deprioritized under sprint pressure, a scheduled enforcement agent is structurally different from a tool you have to remember to run.

---

**The bigger picture**

Stitch Rapid (5s exploration) + Stitch (design/build) + Stitch Loop (post-launch improvement) = Google's claim on the full product lifecycle.

Most design tools live in ideation-to-build. Stitch Loop claims the window after ship. The brief isn't what the designer wrote — it's what your product's live performance data says it needs.

---

**Honest caveats before you get excited:**

- Stitch Rapid: sessions not saved, early MVP, may change before full Stitch integration
- Stitch Loop: **waitlist only** (AI Ultra subscribers get priority access)
- No pricing, no usage limits, no GA date published
- 180+ integrations not fully listed; non-security loop models undisclosed
- No independent benchmark data yet
- Know your data exposure before connecting live product metrics to a third-party agent

---

**Who this is relevant for right now:**
Stitch Rapid: anyone doing early-stage product flow exploration; great for 5-minute "does this IA make sense?" sanity checks with clients or stakeholders.

Stitch Loop: worth getting on the waitlist if you're a lean team doing post-launch maintenance work (security patching, performance, a11y) where the bottleneck is bandwidth, not judgment.

#GoogleStitch #StitchRapid #StitchLoop #AIProductAgent #UXDesign #AITools #DesignWorkflow #Prototyping #ProductDesign #AIWorkflow

---
