# Threads — Melius Brand Kits — English
# Oct 18, 2026 | 16:9 image → x-threads-16x9-en (shared with X)

---

Melius launched Brand Kits yesterday. The mechanism is worth understanding.

You paste a website URL (or upload brand guidelines), an agent parses the brand, and generates a "brand anchor" — a Markdown text block with palette hex codes, typography names, photography rules, shape language, explicit do's and don'ts. Everything compressed into a single read.

Then you drop that text block onto the canvas as a node and drag edges to your image and video generation nodes. Every downstream generation reads the anchor as context. Visual constraint routing — you can see exactly which nodes are brand-constrained.

The MCP integration closes the loop: connect Claude with the Melius MCP, point it at a brand.md file in your project, and Claude automatically injects brand context into every canvas it builds. No copy-paste between sessions.

The honest limitation is that brand anchors live at the canvas level. They don't travel between canvases automatically. Every new canvas is a fresh context. MCP is the best current answer, but it requires setup.

The pattern I keep tracking: Automo (Oct 13) lets brand constraints travel to Claude via MCP. Linearity AI (Oct 17) makes brand kit quality the ceiling for AI design output, not the model. Melius Brand Kits automates the anchor generation from your live website. Three different tools. Same underlying insight: brand kit quality is the binding variable in AI creative production — not model capability, not prompt cleverness.

Brand governance used to be a cultural practice enforced via review cycles. The encoding model is different now: rules live in a text block, connected via canvas edges, injected via MCP server. Process-layer governance is becoming tool-layer governance. Worth understanding before your brand team is the last group without it.
