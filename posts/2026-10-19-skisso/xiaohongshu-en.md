# 小紅書 — Skisso — English
# Oct 19, 2026 | 3:4 image → xiaohongshu-3x4-en

---

**Title:** This free Chrome extension cuts AI agent context from 25,700 tokens to 380

---

**Body:**

Working with AI coding agents on UI changes? The slow part isn't the agent's capability. It's describing what you mean.

Skisso removes that translation step.

**What it does:**

① Point at any element on your live product (localhost, staging, or production)
② Change it using your actual design tokens — spacing, color, type, layout, copy
③ Hand the agent only the diff: selector + property + before/after values
④ Or connect via MCP (`npx -y skisso`) — agent reads your selection directly

**Why 380 tokens matters:**

Full-page context dump: ~25,700 tokens
Skisso diff: ~380 tokens (-98%)

Less context overhead = lower cost + more accurate agent output + faster iteration.

**What it does well:**

① Reads your existing CSS variables → output stays `var(--brand-primary)` not hardcoded hex
② 55 shadcn/ui components that inherit your site's existing fonts, colors, border radii
③ Local-only, no account, no external data → verifiable privacy, not claimed privacy
④ Works as copy-paste diff or over MCP — your choice

**Honest limits:**

– Chrome only (Firefox/Safari not yet)
– Editing existing UI only, not net-new design
– No breakpoint-specific editing yet
– Requires CSS token infrastructure to work well
– Reads deployed state, not necessarily design intent

**The bigger frame:** Diff-as-brief is the logical endpoint of reference-beats-description. When the brief is the exact change, there's nothing to interpret. The translation step disappears.

Free. Local. skisso.app

#AIDesign #DesignTools #UXDesign #CodingAgent #MCP #DesignSystem #SeniorDesigner #FrontendDesign #DesignTokens
