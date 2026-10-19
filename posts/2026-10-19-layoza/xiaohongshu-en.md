# 小紅書 — Layoza — English
# Oct 19, 2026 | 3:4 image → xiaohongshu-3x4-en

---

**Title:** This open-source tool gives AI agents a structured web design workflow (brief → motion → Chromium QA)

---

**Body:**

The motion brief gap for AI design tools is real: the model can execute complex animation — but only if your brief is precise enough. Layoza is an open-source MCP server + 19 agent skills that solves this with a library of 71 niche-aware mechanics.

**What Layoza actually does:**

① Site DNA extraction — `layoza inspect . --write` → DESIGN.md + BRAND.md + MOTION.md + SITE-DNA.json from any existing project. Reference before generation.

② Art direction — brief → three meaningfully different directions (layout, type, color, content treatment, motion) — not one confident proposal

③ Motion mechanics — 71 niche-aware animations: law firm → calm + legible, agency → kinetic hero. Library picks based on your niche and intensity setting.

④ Chromium QA — headless browser at 1440/768/375px: contrast failures, clipping, overlap, focus issues, mobile menu behavior, LCP/CLS, 45 craft critiques

**Works with:** Claude Code, Cursor, Codex, Windsurf, OpenCode, Antigravity

**Stack support:** React, Next.js, Astro, Vue, Nuxt, SvelteKit, plain HTML/CSS/JS, WordPress (theme.json v3), Elementor, Shopify Liquid

**4 modes:** New site / Extend (add a page) / Improve (fix without changing brand) / Redesign (new direction, with baseline + rollback)

**Honest limits:**

– v0.1.3: very early, limited production track record
– Art direction proposals = starting points, not right answers
– Chromium QA = functional floor, not IA/UX ceiling
– Reads deployed state — production drift caveat applies

**Install:** `npx layoza init`

**The bigger frame:** Brief → site DNA → art direction → motion → QA. The constraint-execute-audit loop is now a complete open-source pipeline.

#AIDesign #DesignTools #UXDesign #MCP #OpenSource #MotionDesign #SeniorDesigner #WebDesign #DesignSystem
