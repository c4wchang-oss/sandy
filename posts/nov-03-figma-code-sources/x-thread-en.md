<!-- X / Twitter Thread — Figma Code Sources + Guidelines — EN -->
<!-- Platform: X  |  Format: 8-tweet thread  |  Date: Nov 3, 2026 -->

**Tweet 1 (hook)**
Figma's Code Sources is in closed beta.

Everyone's calling it "better component generation."

The real frame: your npm package IS now the brief.

---

**Tweet 2**
Until now: you described your design system to the agent.
The agent interpreted it. Generated something approximately right.

Code Sources changes this.
Connect your GitHub repo or npm package → agent builds from your actual components.
Not a lookalike. The real thing.

---

**Tweet 3**
The failure mode this fixes is brutal and silent:

Agent generates a "card component." Colors match. Spacing is close. You ship it.

Three iterations later: the card has drifted. It was never connected to your real DS. Design debt started at generation time — not at divergence.

---

**Tweet 4**
The constraint hierarchy inside Figma is now complete:

Library Guidelines → agent knows the rules
Code Sources → agent has the actual components

Rules AND parts. Not OR.

That's a different category of fix than anything else in the release notes.

---

**Tweet 5**
The governance implication is direct:

Your DS code quality is now quantifiably the agent's output ceiling.

Poorly named components → ambiguous agent choices.
Missing tokens → agent invents defaults.
Undocumented variants → agent picks the wrong one.

DS maintenance was always important. Now it's economic.

---

**Tweet 6**
The honest caveat:

Code Sources is closed beta. Not everyone gets this yet.

And it only works if your DS is properly packaged — clean npm exports, typed components, documented props.

The benefit is proportional to the rigor of your existing DS work.

---

**Tweet 7**
The question to ask before your team joins the closed beta:

"If an agent had access to our actual DS components — how many would it find that are genuinely production-ready vs technically-published-but-informally-understood?"

That number is your real DS quality audit.

---

**Tweet 8 (CTA)**
The principle: reference beats description. Always.

Code Sources extends this to the component layer inside Figma.

Your design system doesn't need to be described to the agent.
It needs to be given to it.

→ Figma Config India 2026: figma.com/release-notes
