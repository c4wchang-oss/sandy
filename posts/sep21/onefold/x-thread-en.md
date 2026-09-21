# X Thread — Onefold / DESIGN.md (English)
# Sep 21, 2026 | 8 tweets | 16:9 image attached to tweet 1

---

**Tweet 1 (hook + image)**
Figma's design agent doesn't know why your brand uses that particular purple.

Neither does Cursor. Neither does v0.

Onefold launched yesterday to fix that.

---

**Tweet 2**
Onefold scans your existing site and generates DESIGN.md — a plain markdown file that sits beside your code.

It tells coding agents: your colors, typography, dark mode logic, corner radius, shadows, component library, icon set, voice guidelines, patterns to avoid.

Same role as AGENTS.md for code. Now the design side has its equivalent.

---

**Tweet 3**
The constraint architecture stack has been building for years:

AGENTS.md (code conventions)
→ CLAUDE.md (agent behavior)
→ design.md (Vercel, Sep 2)
→ BRDNA Sequencer (R/GA, Sep 19)
→ Onefold (self-serve, Sep 20)

Onefold removes the activation energy to write step 4.

---

**Tweet 4**
The honest read: Onefold extracts what you deployed, not what you intended.

Every undocumented override. Every inconsistent corner radius. Every color that drifted from the system.

AI agents will inherit all of that as "your brand standard." That's the uncomfortable finding.

---

**Tweet 5**
The workflow I'd actually recommend:

1. Run Onefold on your public site
2. Read what it extracted
3. Decide: intentional vs accumulated drift
4. Fix the drift in your actual design system
5. Then point agents at the cleaned-up DESIGN.md

The critical work happens before step 6 in their guide.

---

**Tweet 6**
Works with Claude Code, Cursor, Codex, GitHub Copilot, Windsurf, Gemini CLI — point project instructions at DESIGN.md.

For Lovable, v0, Bolt — paste into project knowledge or custom instructions.

Same file. Different entry points.

---

**Tweet 7**
The quality ceiling doesn't move with Onefold.

Onefold removes activation energy. It can't decide which purple was intentional and which was an accident.

That judgment is still yours.

---

**Tweet 8 (CTA)**
What Onefold actually proves: the gap between what you shipped and what you intended is now AI-legible.

That's uncomfortable to look at. That's also exactly why you should.

The brief that writes itself is useful. You still have to audit it.
