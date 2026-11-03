<!-- Threads — Figma Code Sources + Guidelines — EN -->
<!-- Platform: Threads  |  Format: Long-form reflection + punchy short take  |  Date: Nov 3, 2026 -->

---

**[Long-form post]**

The failure mode nobody talks about when praising AI component generation:

The agent generates a card component. Colors match your brand. Spacing is close. Typography looks right. You ship it.

Three iterations later: the card has drifted. It was never connected to your real design system. It was a plausible interpretation of your DS — a lookalike built from description, not a component built from source. Design debt started at generation, not at divergence.

Figma's Code Sources (closed beta) closes this loop at the source. Connect your GitHub repo or npm package to the Figma agent. The agent builds from your actual components — not a reasonable approximation. The real thing.

This is a different category of fix than Guidelines (which tells the agent the rules). Code Sources gives the agent the parts. Rules AND parts. Both running simultaneously inside Figma, for the first time.

The implication for senior designers is direct: your design system code quality is now quantifiably the agent's output ceiling. Poorly named components → ambiguous agent choices. Missing tokens → invented defaults. Undocumented variants → wrong picks.

DS maintenance was always important. Now it's economic. Every underdocumented component is a lower quality ceiling on every generation that touches it.

The honest caveat: closed beta. Requires clean npm packaging. The benefit is exactly proportional to your existing DS rigor.

The question to ask before your team joins: how many of your published components are genuinely production-ready — versus technically published but informally understood by the people who built them?

That number is your actual DS audit. And Code Sources just made it consequential.

---

**[Short punchy take]**

The agent can't make better decisions than the information you give it.

You've been describing your design system to it.

Now you can give it the actual thing.

That's not an upgrade. That's a category change.
