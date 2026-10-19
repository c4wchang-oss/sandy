# X Thread — Skisso — English
# Oct 19, 2026 | 16:9 image → x-threads-16x9-en

---

**Tweet 1 (Hook)**
You're not bad at prompting AI for UI changes.

You're describing pixels in prose. That's the wrong medium.

A free Chrome extension just eliminated the translation step entirely.

---

**Tweet 2**
Skisso: point at any element on your live product, change it using your actual design tokens, hand the agent only the diff.

Not a screenshot to interpret. Not a paragraph to parse.

A selector, a property, the old value, the new value. That's the brief.

---

**Tweet 3**
The token math makes the argument better than any pitch:

Full-page context dump: ~25,700 tokens.
Skisso diff: ~380 tokens.

98% reduction. That's not an optimization. That's a different model of how design intent moves between designer and agent.

---

**Tweet 4**
It reads your existing CSS variables.

Edits stay `var(--brand-primary)` not a hardcoded hex. If you've built a design system with real tokens, Skisso amplifies it. If you haven't, it can't compensate for that.

Constraint infrastructure you already have × tool that surfaces it.

---

**Tweet 5**
The MCP integration closes the loop.

`npx -y skisso` → your agent queries what you've selected in the browser, fetches the diff, applies the change. No copy-paste step. Agent reads context directly from your live product.

---

**Tweet 6**
Trust architecture: entirely local, no account required, no external data transmission.

Same principle as Cubicle and Open Inspector: verifiable constraints beat claimed constraints. The architecture is the promise, not the privacy policy.

Works on localhost, staging, and production.

---

**Tweet 7**
Honest limits:
– Chrome only (Firefox/Safari not yet)
– Editing existing UI, not net-new design
– No breakpoint-specific edits yet
– Best with established CSS token infrastructure
– Live product = deployed state, which may not match design intent

---

**Tweet 8 (CTA)**
The frame:

Diff-as-brief is the logical endpoint of reference-beats-description.

You're not describing what you want. You're showing the exact change. No interpretation required. 380 tokens.

Free. Local. No account. skisso.app
