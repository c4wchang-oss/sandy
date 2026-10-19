# Threads — Layoza — English
# Oct 19, 2026 | 16:9 image → x-threads-16x9-en (shared with X)

---

The motion brief quality gap has been a recurring problem in this space since Jitter AI shipped Opus 5.5 last month. Model capability now exceeds most users' brief quality. You can get sophisticated animation from the tool — but only if you can describe what you want with the precision of a motion director.

Layoza, an open-source MCP server with 19 agent skills, just shipped a library-scale answer to that problem: 71 niche-aware motion mechanics. Law firm brief → calm, legible motion. Agency brief → kinetic hero. The library does the brief-to-mechanics translation based on your niche and intensity setting. That's a different solution from Figma Motion custom styles (Oct 6), which require you to define your own named tokens. Layoza proposes the mechanics for you.

But the motion library is one part of a larger pipeline. The sequence:

**Extract first.** For any existing site, `layoza inspect . --write` pulls the design DNA — tokens, type scale, spacing, components, motion — and writes it to DESIGN.md, BRAND.md, MOTION.md, and SITE-DNA.json. Reference before generation. The site extends itself rather than being overwritten.

**Brief into directions.** A new project gets design dials (0–10 settings across layout, type, color, content treatment, motion) and three art directions that differ meaningfully from each other. Not one confident AI proposal — three directions, each distinct, for you to choose from. The art direction layer is where designer judgment re-enters.

**Audit after.** Headless Chromium at three widths (1440/768/375px) catches per-element contrast failures, clipping, overlap, focus-obscured issues, mobile menu behavior (opens, focus-traps, Escape closes), LCP/CLS, and 45 craft critiques.

The two-phase architecture Impeccable (Oct 11) named — pre-generation constraint + post-generation deterministic audit — is now available as a web-design-specific open-source pipeline.

Honest limitations: v0.1.3 with limited production usage data, so take the confidence with some skepticism. Art direction proposals are starting points — three directions don't mean three right answers, and the niche-aware motion library is still opinionated defaults (which "calm" for which law firm exactly?). Also: the DEV Community comparative article is self-published with a disclosed affiliation. And the foundational caveat: `inspect_site` reads your deployed URL, so it inherits any production drift from your actual design intent — same forensics caveat as Open Inspector and Onefold.

The frame: constraint → execute → audit is now a complete open-source pipeline. Brief quality + site DNA extraction + post-generation Chromium QA. The whole loop.

`npx layoza init`
