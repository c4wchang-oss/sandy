# Threads Post — Open Inspector: Hover Any Website, Get Its Design System (English)
**Topic:** Open Inspector — free, MIT browser extension to inspect any page and export design tokens in 6 formats, including Markdown for Cursor/Claude. Zero network requests. No site access. Oct 2, 2026.

---

## Long-form reflection

Open Inspector launched on Product Hunt this week. The tagline is "Hover any website, get its design system." The reality is a bit more interesting than that.

The tool is a browser extension built on a single principle: it should request zero permissions beyond what you explicitly hand it. No "read and change all your data on all websites" — the prompt that every CSS inspector I've installed has led with. Open Inspector requests only activeTab, granted by your click for one tab, and revoked the moment you navigate away. Chrome's install dialog shows no site access at all. The build step scans source and shipped bundles for any fetch, XHR, WebSocket, or beacon call, and fails if it finds one.

This matters because the trust architecture of a tool is part of its design. A tool that can silently observe your staging environments and internal dashboards while you're using it to inspect a competitor's site is not a tool you should use for competitive work. Open Inspector eliminated that surface. That's a design decision, not just a feature.

What it actually does: hover to inspect any element, see font family, spacing, colors, computed layout in real time. Click to lock. Arrow keys to walk the DOM tree. Full-page scan extracts the spacing scale a page actually follows, the type hierarchy behind the headings, the color palette sorted by usage frequency, and the breakpoints affecting the current viewport.

Six export formats: CSS custom properties, Tailwind config, SCSS, JSON, W3C design tokens — and Markdown handoff for Cursor or Claude.

That last format is the one that shifts this from "better DevTools" to something more structurally significant.

In September, we confirmed a universal pattern across every AI design tool worth watching: reference beats description. Concrete, structured reference produces better AI output than abstract description at every layer. That's why Stitch's brand kit drag-in outperforms DESIGN.md written from scratch. Why Nate Parrott (the creator of Claude Design) drops real GitHub repos and brand files into every session rather than describing what he wants. Why Once UI ships its own agent harness inside the npm package — so the constraint reference travels with the tool, not separately.

Open Inspector is the "extract the reference" tool for any production website.

Instead of writing DESIGN.md by describing what you want your design to feel like, you can extract what a well-designed production site actually built — its spacing scale, its type decisions, its color system — and use that as constraint context for your AI agent. The reference was always there, in the production site. Now you can get it in the format your agent reads.

The honest caveat that applies here: this reads production state, not design intent. The same problem as Webflow Agent Instructions auto-generation (September 6) and Onefold's site scan (September 21). What deployed doesn't always match what was designed. The spacing scale you extract may include drift, inconsistencies, and overrides that accumulated over years of production work. Use it as a starting point for constraint context, not as ground truth.

The reframe: design systems have always been hiding inside every production site. They've been visible to any developer patient enough to read through DevTools. Open Inspector makes them extractable. The Markdown export makes them directly usable as AI context. The trust architecture makes the tool safe for competitive intelligence work.

Reference beats description. Now you can extract the reference from anywhere.

---

## Short punchy take (post separately)

Open Inspector: hover any website, get its design system in 6 export formats.

Including Markdown for Cursor and Claude.

Zero network requests. No site access. MIT. The build step verifies both.

Reference beats description. This is the "extract the reference" tool for any production site.

The design intelligence was always in the site. Now you can get it in the format your agent reads.

Honest caveat: reads deployed state, not design intent. Use as starting point, not ground truth.
