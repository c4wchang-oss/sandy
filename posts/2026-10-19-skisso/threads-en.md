# Threads — Skisso — English
# Oct 19, 2026 | 16:9 image → x-threads-16x9-en (shared with X)

---

The hardest part of working with AI coding agents on UI changes was never the agent's capability. It was the translation step.

You know exactly which element you mean. You know what property you want to change. You know the value you're looking for. Then you spend three minutes writing a paragraph describing it — and the agent spends its context interpreting your paragraph, guessing at what you meant, pasting in the full page HTML just to find the right div.

Skisso is a free Chrome extension by Alex Zakabluk (a product designer in Sweden) that removes that step. You point at the element on your live running product, change it using your actual design tokens — spacing, color, type, layout — and hand the agent only the diff. The agent receives a selector, the property, the value before, the value after. That's it.

The number that makes the case: a full-page context dump runs around 25,700 tokens. A Skisso diff is around 380. That's not a productivity gain — it's a completely different model of how design intent moves between you and the agent.

What I find correctly designed about it: it reads your existing CSS variables. Edits come out as `var(--brand-primary)` not random hex codes. 55 shadcn/ui components are included that inherit your site's existing fonts, colors, and border radii. If you've already built a real token-based design system, this amplifies it. If you haven't, it can't compensate for that gap — which is an honest constraint, not a limitation.

The trust architecture is the part I want more tools to copy. Entirely local. No account required. No data leaves your machine. Works on localhost, staging, and production. Same verifiable-constraint principle as Cubicle and Open Inspector — the architecture is the promise.

MCP closes the loop: `npx -y skisso` and your coding agent can read what you've selected and fetch your changes directly. No copy-paste. No explanation. The agent queries your live session.

Honest limits: Chrome only so far, designed for editing existing UI not net-new design, no breakpoint-specific edits yet (on the creator's own list), best with an established CSS token infrastructure already in place. Also: live product is deployed state, which may not perfectly reflect design intent — same caveat applies to any tool that reads from production.

The frame I keep thinking about: this is the logical endpoint of reference-beats-description. You're not describing what you want anymore. You're showing the exact change. The interpretation step is gone. The brief is the diff.

Free. Local. No account. skisso.app
