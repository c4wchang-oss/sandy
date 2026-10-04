# 小紅書 Post — Open Inspector: Hover Any Website, Get Its Design System (English)
**Topic:** Open Inspector — free, MIT browser extension to inspect any page and export design tokens in 6 formats including Markdown for Cursor/Claude. Zero network requests. No site access. Oct 2, 2026.

---

**Title:**
This free browser extension turns any production website into AI design context — and it can't see your private data

---

**Body:**

Open Inspector launched on Product Hunt last week (October 2, 2026). The tagline: hover any website, get its design system.

Here's what that means in practice for AI-powered design workflows.

**What it exports:**

① CSS custom properties — drop into your stylesheet
② Tailwind config — your extracted spacing and type scales as Tailwind tokens
③ SCSS variables
④ JSON design tokens
⑤ W3C design tokens spec format
⑥ **Markdown handoff for Cursor or Claude** — the one that changes the workflow

**What the full-page scan gives you:**

The spacing scale a page actually follows (not just one element's padding — the system behind it)

The type hierarchy behind the headings — font families, size scale, weight decisions

The color palette sorted by usage frequency across the entire page

Breakpoints that affect what you're currently looking at

**Why the Markdown export matters:**

Since September, the universal pattern across AI design tools has been confirmed: reference beats description.

Concrete, structured reference produces better AI output than abstract description — at every layer, in every tool. That's why Claude Design creators drop actual GitHub repos and brand files into sessions. That's why design systems ship AGENTS.md inside npm packages now. Reference is the constraint.

Open Inspector is the "extract the reference from any production site" tool.

Instead of writing DESIGN.md from scratch by describing what you want — extract what a well-designed site actually built. Their spacing decisions. Their type hierarchy. Their color logic. Use it as the constraint context your AI agent works within.

**The trust architecture (why this matters more than most extensions):**

Most CSS inspector extensions request permissions for ALL websites. That means your staging environments, internal dashboards, and anything you're logged into — handed to a closed-source extension.

Open Inspector:
- Requests only activeTab (one tab, granted by your click, revoked on navigation)
- Zero network requests — verified by build step that fails if it finds fetch/XHR/WebSocket/beacon
- MIT licensed — you can read every line

**Honest caveats:**

- Chrome/Chromium only
- Reads deployed state, not design intent — what's in production may include years of drift, overrides, and accidents
- Live edits revert when closed (inspection only, not production workflow)
- No screenshots, no multi-device preview at 33 sizes (Hoverify wins there)

**The senior UX frame:**

Every production site contains a design system. It's always been there — in the spacing decisions that survived shipping, the type hierarchy that made it through design reviews, the color palette that production code actually uses.

Until now, extracting it was manual detective work. Open Inspector makes it one click and six formats.

The Markdown export makes it directly usable as AI constraint context.

Design intelligence lives in production references. Now you can get it in the format your agent reads.

---

#UIDesign #DesignTools #OpenInspector #AIDesign #DesignSystem #Figma #AIWorkflow #UXDesign #DesignTokens #SeniorUXDesigner #DesignResearch #AIContext #OpenSource #ChromeExtension
