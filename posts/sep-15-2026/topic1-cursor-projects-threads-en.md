# Topic 1: Cursor Projects — Threads Post (English)
**Image:** `images/topic1-coordinator-en-16x9.png` (16:9)

---

I've been thinking about what "senior" means in a world where Cursor just shipped Projects.

The announcement was framed mostly for developers. A coordinator agent that never writes code itself — it only plans, delegates work to subagents, and brings the results back to you. Projects keep a shared "Field Guide" that agents curate and that grows smarter with every run. Projects can watch Slack channels, fire on PR events, run on schedule.

The buried example is the one that matters: one Cursor engineer now runs a design-system Project. It scans every PR, extracts components that belong in the system, and adds a lint rule whenever it sees the same mistake twice. 20 to 100 PRs a day. The engineer checks in where attention is needed.

I've spent years writing design system documentation that nobody read. I've run quarterly audits that found the same drift we fixed the quarter before. I've added comments to Figma files hoping they'd outlive the context of whoever wrote them.

All of that work was me trying to build the Field Guide manually.

The pattern that's emerging is clear: the senior role isn't executing faster. It's architecting the system that executes on your behalf. Not describing the output — designing the threshold. What quality level should the coordinator act on without asking you? That question is harder than any component decision I've made recently.

Projects is in beta. Coordinator quality scales with the intent you give it upfront. But the role shift isn't theoretical anymore. It's running in the background, watching PRs, while you're asleep.
