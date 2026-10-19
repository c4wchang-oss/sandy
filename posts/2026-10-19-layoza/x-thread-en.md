# X Thread — Layoza — English
# Oct 19, 2026 | 16:9 image → x-threads-16x9-en

---

**Tweet 1 (Hook)**
Motion brief quality for AI design tools is still a taste problem.

Layoza just shipped 71 niche-aware motion mechanics.

A law firm gets calm, legible animation. An agency gets a kinetic hero. The brief picks the mechanics. Not you.

---

**Tweet 2**
Layoza is an open-source MCP server + 19 agent skills for AI-driven web design.

The full workflow:
→ Extract existing site's DESIGN.md + BRAND.md + MOTION.md
→ Brief → three art directions
→ Niche-aware motion mechanics
→ Headless Chromium QA

MIT. Works with Claude Code, Cursor, Codex, Windsurf.

---

**Tweet 3**
The site DNA extraction is the right starting move.

For any existing project: `layoza inspect . --write` → tokens, type scale, spacing, component inventory, motion — written to DESIGN.md, BRAND.md, MOTION.md, SITE-DNA.json.

Reference before generation. Extend instead of override.

---

**Tweet 4**
The art direction layer is what I hadn't seen done this way.

Brief → 0–10 design dials + three art directions differing in layout, type, color, content treatment, and motion.

Three directions: one direction is never enough. One direction with a confident AI voice is the failure mode.

---

**Tweet 5**
Motion mechanics: 71 niche-aware animations for hero, section, and micro interactions.

Pick your niche and intensity. Law firm → calm, legible. Agency → kinetic. The library does the brief-to-mechanics translation.

This is a systematic answer to the motion brief quality gap.

---

**Tweet 6**
Chromium QA: headless browser at 1440/768/375px.

Per-element contrast, clipping, overlap, focus-not-obscured, mobile menu (opens, traps focus, Escape closes), LCP/CLS, plus 45 craft critiques.

This is the functional floor, not the IA ceiling. Know the difference.

---

**Tweet 7**
Honest limits:
– v0.1.3: very early, limited production track record
– Art direction proposals need your taste to evaluate — 3 directions ≠ 3 right answers
– Chromium QA catches technical failures, not wrong IA or wrong audience fit
– Self-published competitive comparison on DEV Community (affiliated disclosure)

---

**Tweet 8 (CTA)**
The frame:

Impeccable (Oct 11) was post-generation Rust audit. Layoza adds pre-generation design direction + motion mechanics to the same pipeline.

Brief → site DNA → art direction → motion → Chromium QA. Open source. MIT.

`npx layoza init`
