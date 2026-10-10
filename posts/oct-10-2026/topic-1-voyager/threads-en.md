# Threads Post — English
## Topic: Voyager — Agent harness for your existing creative apps
## Date: October 10, 2026
## Format: Long-form personal reflection

---

I've been tracking skills infrastructure convergence for months.

Code editors got agent harnesses first. Then design tools. Then web CMSs. Then AI-native creative tools. Last week, Voyager closed the final layer: professional creative desktop apps.

Voyager, from the Moda team (YC F26), is a desktop agent harness that drives Blender, DaVinci Resolve, After Effects, Ableton, Photoshop, Illustrator, Final Cut Pro, and Unity — through their own native scripting APIs. Not a replacement. Not an AI-native alternative. Your existing apps, with an agent that can drive them from a description.

The scripting API choice is the most important technical decision in the product. Voyager controls Photoshop through Photoshop scripting. DaVinci through its scripting API. After Effects through AE scripts. Window control is a fallback for the rare controls a given app doesn't expose via API — and only within macOS permissions you explicitly grant.

What this means in practice: your Blender project stays a .blend file. Your Resolve project stays a Resolve project. The agent isn't approximating your tool — it's working inside it the way an experienced plugin would.

The codebase also reuses skills from Claude Code, Codex, and Cursor. Same format, different domain. Which means the cross-tool skills governance question — whose skills are authoritative when they span multiple tools? — now extends into creative production.

The honest caveats: macOS 15 + Apple Silicon required for now (Windows/Linux in alpha). You need your own Claude or Codex subscription. Generation — images, video, audio — is billed at provider cost. Paid plans start at $19/month.

But the architecture I appreciate most: Voyager ships free built-in Design, Video, and DAW engines alongside the creative app harness. No DaVinci Resolve? Use the Voyager Video engine. Have DaVinci? The agent uses that instead. Meeting users where they are, without forcing either a new app or a new subscription, is harder than it sounds.

One thing this doesn't solve: the motion brief gap. Having an agent that drives DaVinci Resolve faster doesn't make your edit better. Brief quality is still the constraint. The creative desktop layer is now fully agent-callable — what you tell it to make is still entirely on you.

---

*Image: 16:9 — see images/x-threads-16x9-en.jpg*
