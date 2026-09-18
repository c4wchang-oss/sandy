# Threads Post — Meta Muse: Accessibility Tree as Agent Interface (EN)
## Sep 18, 2026 | Image: topic1-x-threads-en.png (16:9)

---

Something that's been sitting with me since Meta launched Muse this week:

Muse is a personal agent. Books travel, fills forms, makes payments. It runs a real Chromium browser — but the sub-agent doing the navigation reads accessibility-tree snapshots. No JavaScript execution. No raw DOM. No visual rendering.

It reads exactly what a screen reader reads.

I've been in UX for over a decade. Accessibility audits have always existed in the shadow of "legal compliance" and "inclusive design" — both genuinely right reasons, and somehow never urgent enough for most product teams.

Here's what changed this week: the forcing function is now commercial scale.

When Muse navigates your checkout, it doesn't see your visual hierarchy. It sees semantic roles, named states, and label associations. If your interactive elements are `div onClick` with no ARIA role — Muse can't find them. If form labels are positioned visually but not linked in the tree — Muse reads a blank field name. If your layout shifts between product categories, the agent loses its position anchor.

The web.dev team just published a guide on agent-friendly site design. Key signals:
→ Semantic HTML over styled divs
→ `for` attributes on every label
→ Stable layouts — agents calibrate by position, not pixels
→ No ghost overlays blocking interaction targets

This is the same structural work accessibility advocates have been asking for for two decades. The difference now: the users who can't navigate your undocumented semantic structure browse at agent speed.

The accessibility audit you deferred? It's not optional anymore.
