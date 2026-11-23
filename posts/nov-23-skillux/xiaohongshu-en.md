# Topic 2: Skillux — Xiaohongshu Post
# Platform: 小紅書 (Xiaohongshu)
# Language: English
# Date: Nov 23, 2026

---

## POST TITLE
AI agents can now buy UX judgment for $1.99. Here's what that means for senior designers.

---

## POST BODY

Skillux launched this month: a marketplace of designer-authored SKILL.md packs for Claude Code, Cursor, and Codex. Each pack gives an AI coding agent locked UX rules — flows, interaction states, spacing, type scale — and a runnable sample interface to reference.

This is the skills convergence arc I've tracked all year (every major AI tool layer getting agent-readable constraint files) reaching its marketplace moment.

**What a Skillux pack actually gives an agent:**

- Locked flow paths and IA — the agent can't invent navigation patterns from scratch
- All interaction states written as rules — hover, focus, empty, error, loading; no more "I forgot to add an empty state"
- Type scale and spacing rhythm — consistent sizing without manual correction every time
- Runnable example site — inspect the output before you install the constraints

**How to install:**

```
npx skillux add <skill-slug>
```

Drops into `.cursor/skills/` for Cursor, `~/.claude/skills/` for Claude Code, `.agents/skills/` for Codex. One install, three destinations.

**5 things worth knowing:**

1. **Floor, not ceiling** — marketplace skills encode generic UX best practices; they give you better-than-default output, not brand-specific output

2. **Pricing** — free starter packs available; individual packs $1.99–$7.99; full library access $169.99/year

3. **What it doesn't do** — it can't encode your product's specific visual brand, your component library choices, or your product's particular IA decisions; for that, you author your own SKILL.md (Skillux gives you the format for that too)

4. **Authority hierarchy question** — if you run both a Skillux pack and your own internal SKILL.md, who wins? Not resolved cleanly yet; check for conflicting rules before you install both

5. **The governance comparison** — Miro VibeLab (Oct 26) = designer authors skill in-house, encodes your design system components and rules. Skillux = designer purchases generic UX skill, installs it. Same principle, different authority sources.

**The honest frame for senior designers:**

The floor is real work. Fixing hover states, correcting empty states, adding loading patterns — that's real time. If a Skillux pack prevents that class of error, it frees you for the work only you can do.

The ceiling is what you're actually paid for: your brand's visual language, your product's specific IA, your component architecture decisions. That doesn't get commoditized by a marketplace. It requires your judgment, your authorship, your deliberate constraint design.

Skillux makes the floor cheaper to clear. The ceiling is still yours to build.

---

#UXdesign #AItools #claudecode #cursor #designsystem #AIworkflow #SKILL_md #productdesign #designops #seniorUX #agenttoolsfordesigners

---
