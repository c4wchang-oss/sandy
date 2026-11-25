# Topic 2: Figma MCP OAuth Allowlist — Enterprise Governance for Agent Access
# Platform: 小紅書 (Xiaohongshu)
# Language: English
# Date: Nov 25, 2026

---

## POST TITLE
Figma added enterprise MCP governance. If your org uses Cursor or Claude Code with Figma, read this first.

---

## POST BODY

Figma released an MCP client allowlist for Organization and Enterprise plans on Nov 17 (rolling out now).

This is about who gets to give AI coding agents access to your organization's Figma design files.

Before this: any team member with a Cursor or Claude Code subscription could personally connect it to your Figma org and read your design system. No admin layer. No scope approval. No visibility into who had what connected.

After this: admins can require approval before any MCP client touches org resources.

**What actually changed:**

**→ Admin > Extensions > Apps** — New tab in the admin console. You can require all MCP clients (Cursor, Claude Code) to be pre-approved before they can access your org's Figma files.

**→ Scope-level approval** — Not just "can they connect" but "what can they do" — read file content, create comments, write to canvas. Each scope approved separately.

**→ Enterprise-managed auth (deeper layer)** — Okta Cross App Access or Claude auto-connect = members with matching Figma + Claude emails get auto-connected without individual sign-in. SAML SSO required.

**6 things worth knowing:**

1. **The buried warning: existing connections are affected immediately** — If you flip to "Only admin-approved apps," every existing Cursor and Claude Code connection in your org loses access immediately. Not on next login. Right now. Audit your team's active MCP connections before you change the policy. This is the step most teams will skip.

2. **The right sequence** — Audit → pre-approve the apps your team actively uses → then change policy. Doing it in reverse creates broken workflows across your org at the moment you flip the switch.

3. **Org/Enterprise only** — Professional and Starter plans stay at "allow all apps." The governance control is locked to the plans with existing admin infrastructure. Teams growing toward this problem don't have the tool yet.

4. **Claude auto-connect is a one-time trust decision for everyone** — The admin approves once, all members with matching emails are auto-connected. Convenient. Also means the admin is making the credential trust decision on behalf of the entire organization. Know what you're enabling before you turn it on.

5. **Members can request apps (if admin allows it)** — You don't have to pre-approve every possible MCP client. Members submit requests, admins review. Designed for gradual adoption, not lockdown.

6. **This is the constraint enforcement hierarchy pattern again** — Convention ("please use approved clients") → architectural enforcement ("unauthorized clients get a parse error"). A2UI 1.0 (Nov 11) did the same for UI generation. Same pattern, different layer: design file access is now architecture, not etiquette.

**The honest frame:**

If you're on a 5-person team: this doesn't apply to your plan yet.

If you're running design systems at an Org or Enterprise plan organization: someone should answer "which MCP clients can currently read our design system, and what can they do?" before turning this on.

The answer to that question is itself valuable, regardless of whether you change the policy.

---

#Figma #MCP #designops #UXdesign #AItools #designsystems #enterprisedesign #figmaadmin #productdesign #seniorUX #agenttoolsfordesigners #AIgovernance

---
