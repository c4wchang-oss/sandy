# Topic 2: Claude "Install as App" — Artifacts → Desktop Apps
# Platform: 小紅書 (Xiaohongshu)
# Language: English
# Date: Nov 26, 2026

---

## POST TITLE
Claude just let you install artifacts as desktop apps. The permission model is what actually matters.

---

## POST BODY

Claude rolled out "Install as App" in beta on Nov 24. You describe what you want → Claude builds as an artifact → click "Install as app" in the Share menu → it lives in your Dock with its own icon and window, like any other native app.

No packaging. No code signing. No API key. Uses your Claude account. Updates automatically when the artifact changes.

Here's the full picture:

**→ What it is**
Artifacts that people use daily as tools (meeting prep pages, trackers, dashboards) can now run as actual Mac or Windows desktop applications — without any traditional app development process.

**→ Three permission tiers**
Default: same as browser tab (no new access)
App permissions: notifications, global shortcuts, always-on-top windows, menu bar items (macOS), system tray (Windows)
Full access: run programs, read/write/delete files — without asking each time (requires explicit grant)

**6 things worth knowing:**

1. **Permission is per version — this is the key design decision** — Every update (including your own edits) resets the permission grant and asks again. This is correct. If the tool you consented to silently changes capabilities after the fact, that "consent" is meaningless. Per-version re-ask = right trust architecture for tools that evolve.

2. **The artifact role is upgrading** — Artifacts were "work outputs you share." Now they're installed tools you rely on. Brief → artifact → installed tool is now a closed sequence inside one product.

3. **Share link governance gap** — Anyone with the share link can install the artifact. For solo: low risk. For team: who governs which artifacts your team can install with which permission tier? Not in the product yet.

4. **Full access limits apply** — Full computer access (run programs, read/delete files) is only available for artifacts YOU wrote or org-authored on Team/Enterprise. External artifacts show a warning.

5. **Team/Enterprise defaults** — Team: app feature on by default, full access off until admin enables it. Enterprise: entire feature off until owner enables it in Organization settings. Check your plan before assuming availability.

6. **Honest caveats** — Requires internet + Claude account to stay open (not local-first). Claude Docs, Slides, Sheets cannot be installed. HIPAA organizations and hybrid deployments excluded. Code loaded from external sites can change without re-asking permissions.

**The reframe:**

This is not "build desktop apps faster."

It's the first time the tool you built by describing it in a conversation is the same tool you run from your Dock. No intermediary. No separate engineering ask.

The permission design is where the actual work is — per-version re-ask is the right foundation. What governance layer sits above it at team scale is still the open question.

---

#Claude #AItools #artifactApp #UXdesign #designtools #productdesign #AIworkflow #seniorUX #appDesign #designops #permissionDesign #Anthropic

---
