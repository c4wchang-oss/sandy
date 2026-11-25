# Topic 2: Figma MCP OAuth Allowlist — Enterprise Governance for Agent Access
# Platform: Threads
# Language: English
# Date: Nov 25, 2026

---

## THREADS POST — Long-form

Figma released an MCP client allowlist for Organization and Enterprise plans on Nov 17 (rolling out now). This is one of those features that looks like an admin setting and is actually an infrastructure shift.

For the past 18 months, any team member with a Cursor or Claude Code subscription could personally connect it to your organization's Figma files and read your design system. There was no admin layer, no scope approval, no way to know who had what connected. The assumption was that individual authorization was sufficient governance.

What changed: admins on Org/Enterprise can now switch to "Only admin-approved apps" mode. No MCP client — Cursor, Claude Code, or anything in Figma's client catalog — can access your organization's Figma resources without admin approval at the scope level. When you approve an app, you approve specific scopes: read file content, create comments, write to canvas, etc. Members can still request apps if the admin allows it, but the admin reviews and approves.

There's a buried operational warning in the docs that most teams will miss: "Requiring approval affects existing connections as well as new ones." If you flip this switch without auditing which connections your team actively uses, you will immediately break active workflows. Everyone's existing Cursor-Figma and Claude-Figma connections lose access the moment you change the policy. The right sequence is audit → pre-approve → then change policy. Any other order creates broken workflows across your team.

The deeper layer is enterprise-managed authorization via Okta Cross App Access or Claude auto-connect. With these, members with matching Figma and Claude emails get auto-connected without individual sign-in prompts. No per-member OAuth flow. SAML SSO required. The admin is making one trust decision on behalf of the entire organization. Convenient. And worth knowing that's what it is.

The limitation worth noting: Org/Enterprise only. Professional and Starter plans stay at "allow all apps." The teams most likely to have ungoverned Cursor-to-Figma connections at scale — growing product studios on Professional plans — don't get the governance control. It's locked to the plans with existing governance infrastructure.

The frame I keep coming back to: agent access to design files just became a formally governed permission object at enterprise scale. This is the same constraint enforcement hierarchy pattern. Convention ("we trust people to use approved clients") doesn't scale. Architecture ("unauthorized clients get a parse error, not a policy violation") does. Figma moved this from the convention layer to the architecture layer for large organizations.

---

## THREADS SHORT TAKE

Figma shipped an MCP client allowlist for enterprise orgs on Nov 17.

Before: any team member with Cursor or Claude Code could connect it to your org's Figma files. No governance layer.

After: admin-approved apps only, at the scope level.

The buried warning: flipping the switch breaks all existing connections immediately. The right sequence: audit which MCP connections your team actively uses → pre-approve them → then change the policy.

Agent access to design files is now a formally governed permission object at enterprise scale. Convention doesn't scale. Architecture does.

---
