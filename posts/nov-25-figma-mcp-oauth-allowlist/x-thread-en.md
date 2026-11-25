# Topic 2: Figma MCP OAuth Allowlist — Enterprise Governance for Agent Access
# Platform: X (Twitter) Thread
# Language: English
# Date: Nov 25, 2026
# Source: Figma Release Notes, Nov 17, 2026

---

## X THREAD

**[Tweet 1 — Hook]**
Figma shipped an MCP client allowlist for enterprise orgs on Nov 17.

For 18 months, any team member with Cursor or Claude Code could connect it to your organization's Figma files.

That just changed.

The question you didn't know you needed to answer is now answerable. 🧵

---

**[Tweet 2]**
What actually shipped:

Admin > Extensions > Apps: choose "Only admin-approved apps."

No MCP client — Cursor, Claude Code, or anything else in Figma's client catalog — can touch your org's Figma resources without admin approval at the scope level.

Approval is granular: not just "can Cursor connect" but "what can Cursor do" (read file content, create comments, write to canvas, etc.).

Rolling out to Organization and Enterprise plans.

---

**[Tweet 3]**
The governance question this resolves:

Who authorized Cursor to read your design system?

Before Nov 17: "whoever had a Cursor subscription and connected it, individually."

After Nov 17: "our admin, with approved scopes, reviewed by the team."

For a 10-person studio this is irrelevant. For a 100-person design organization with a production design system, this matters significantly.

---

**[Tweet 4]**
The operational warning hidden in the docs:

"Requiring approval affects existing connections as well as new ones."

If you flip this switch to "Only admin-approved apps," every existing Cursor and Claude Code connection in your org loses access to Figma resources immediately — including connections people have already authorized.

If you do this without reviewing which connections your team actually uses first, you will break active workflows. Audit → pre-approve → then change policy. Easy to miss.

---

**[Tweet 5]**
There's a second layer: enterprise-managed authorization.

The first layer is the allowlist (which apps can connect).

The second layer is Okta Cross App Access or Claude auto-connect: members with matching Figma + Claude emails get auto-connected to Figma MCP without individual sign-in prompts.

SAML SSO required. Figma org with verified email domain required.

The admin is making the trust decision once for the entire organization. That's convenient. Know that's what you're configuring.

---

**[Tweet 6]**
The constraint enforcement hierarchy frame again:

Convention layer: "Please use approved MCP clients with appropriate permissions." (Before Nov 17 — everyone could do whatever they wanted.)

Architectural layer: "Only admin-approved apps can touch org resources." (After Nov 17 — parse error at the protocol level, not bad behavior.)

Same pattern as A2UI 1.0's catalog enforcement (Nov 11). The enforcement mechanism is the design. Guidelines don't scale; architecture does.

---

**[Tweet 7]**
One limitation worth flagging:

This is Org/Enterprise plans only. Professional and Starter stay "allow all apps" by default.

The teams most likely to have informal, ungoverned Cursor-to-Figma connections at scale are probably on Professional plans — the plan that still has no governance control for this.

The governance tool is locked to the plans that already have more governance infrastructure. Classic.

---

**[Tweet 8]**
The reframe:

Agent access to design files is now a formally governed permission object at enterprise scale. Not a personal UX decision. Not a team convention. A formal, scoped, admin-reviewed authorization.

The question isn't "can our agents access Figma?" They can, and they will.

The question is: who decided which agents can access which parts of your design system? What scopes did they approve? Do you know the answer right now?

[Figma MCP OAuth Allowlist · Figma Release Notes · Nov 17, 2026 · Organization and Enterprise plans]

---
