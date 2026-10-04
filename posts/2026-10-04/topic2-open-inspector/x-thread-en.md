# X Thread — Open Inspector: Hover Any Website, Get Its Design System (English)
**Topic:** Open Inspector — free, MIT-licensed browser extension to inspect any page and export its design system as tokens in 6 formats, including Markdown for Cursor/Claude. Zero network requests. No site access. Launched Oct 2, 2026 on Product Hunt.
**Angle:** The "Markdown handoff for Cursor/Claude" export format is the pivot. Open Inspector doesn't just let you copy a color — it lets you extract an entire production site's constraint framework and feed it directly into your AI context. Reference beats description, and now the reference already arrives in the format your agent reads.

---

**Tweet 1 / Hook**
Open Inspector just launched: hover any website, get its design system.

Not just colors and fonts. The spacing scale it actually follows. The type hierarchy behind the headings. The breakpoints that affect what you're looking at.

And then — export it as Markdown for Cursor or Claude.

That last part is the one worth stopping on.

---

**Tweet 2**
What it actually does:

Hover to inspect. Click to lock. Arrow keys to walk the DOM tree.

Every value is live-editable in the panel (changes revert when closed — this is by design).

Full-page scan: spacing scale, type scale, palette, breakpoints, layout anatomy.

Export formats: CSS variables, Tailwind config, SCSS, JSON, W3C design tokens — and Markdown handoff for your coding assistant.

---

**Tweet 3**
Why this matters beyond "it's a better DevTools."

DevTools tells you what one element computes to.

Open Inspector tells you how the page is built — the design system hiding behind the production code. The spacing scale a team actually committed to. The type hierarchy that survived their design reviews.

This is competitive design intelligence, extractable in one click.

---

**Tweet 4**
The Markdown export for Cursor/Claude is the part that shifts this from inspection tool to AI context tool.

The "reference beats description" pattern confirmed across tools in September: concrete reference produces better AI output than abstract description at every layer.

Open Inspector is the "extract the reference" tool for any production site.

Instead of writing your DESIGN.md by describing what you want — extract what a well-designed site actually built. Then use that as constraint context.

---

**Tweet 5**
The "no site access" design is worth calling out explicitly.

Every alternative extension (CSS Peeper, Hoverify) requests permissions for all sites. That means your staging environments, internal dashboards, anything you're logged into — handed to a closed-source extension.

Open Inspector requests only activeTab, granted by your click for one tab, revoked on navigation. Chrome's install dialog shows no site access at all.

The trust architecture is part of the product design.

---

**Tweet 6**
Zero network requests, verified by build step.

Not just claimed — the build fails if the source or shipped bundle contains fetch, XHR, WebSocket, or beacon calls.

Same logic as Cubicle's read-only constraint: the constraint is verifiable, which is what makes it trustworthy. A constraint you can't verify isn't a constraint — it's a marketing claim.

---

**Tweet 7**
Honest caveats:

Chrome/Chromium only.

Live edits revert when closed — this is an inspection tool, not a production workflow tool.

No screenshots or multi-device preview (Hoverify wins there).

The "reads production state, not design intent" caveat applies here too — same problem as Webflow Agent Instructions auto-generation and Onefold site scan. What deployed ≠ what was designed.

---

**Tweet 8**
The reframe:

Design systems are hidden inside every production site. They've always been there — in spacing scales, type hierarchies, color palettes, breakpoint decisions.

Open Inspector extracts them. The Markdown export makes them directly usable as AI context.

The design intelligence was always in the reference. Now you can get it in the format your agent reads.
