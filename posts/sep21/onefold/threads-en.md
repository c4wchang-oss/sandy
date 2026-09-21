# Threads Post — Onefold / DESIGN.md (English)
# Sep 21, 2026 | Long-form reflection | 16:9 image

---

**[Image attached]**

---

The gap between what you shipped and what you intended is now AI-legible. That's the uncomfortable part of the Onefold pitch.

Onefold scans a public website and generates DESIGN.md: a plain markdown file sitting beside your code that tells coding agents about your colors, typography, dark mode logic, corner radius, shadows, component library choices, voice guidelines, and patterns to avoid. Same role as AGENTS.md for engineering conventions. The design side finally has its equivalent.

The constraint architecture stack has been building for years without anyone coordinating it: AGENTS.md for code, then CLAUDE.md for agent behavior, then Vercel's design.md format (Sep 2), then R/GA's BRDNA Sequencer converting brand DNA into agent context (Sep 19). Onefold is the self-serve version — it reads what's deployed and generates the document automatically.

Here's the honest read I keep returning to: Onefold extracts what was deployed, not what was intended. Every undocumented override. Every one-off color that wasn't in the system. Every corner radius that drifted over three redesigns. AI agents will inherit all of that as "brand standard." This is exactly what happened with Webflow's auto-generated Agent Instructions back in September — best accidental design debt forensics tool in the ecosystem. Onefold is the same thing, one layer upstream.

The workflow I'd actually recommend: run it, read what it found, treat the output as a design debt audit rather than a finished document, decide what's intentional versus accumulated drift, fix the drift in the actual design system first, then point agents at the cleaned-up file. Their step 7 — "review the next generated screen against both the file and the actual product" — is the only step most people will skip. Don't skip it.

One honest note: the quality ceiling doesn't move with Onefold. It removes the activation energy problem. The activation energy was real — most teams hadn't written DESIGN.md because articulating design intent explicitly is uncomfortable work that kept getting deprioritized. Onefold solves that. The judgment of what your brand actually means is still yours.

The brief that writes itself is useful. You still have to audit it.
