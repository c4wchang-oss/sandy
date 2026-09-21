# Xiaohongshu — Onefold / DESIGN.md (English)
# Sep 21, 2026 | Tutorial / Opinion | 3:4 image

---

**Title: I ran Onefold on my site. The AI found things I didn't want to see.**

---

Don't let the simplicity fool you. Onefold isn't a "save your colors" tool.

---

## What it does

Onefold scans your public site and generates DESIGN.md — a constraint document for AI coding agents.

It extracts:
- Brand colors + dark mode logic
- Typography scale and choices
- Shape decisions (corner radius, shadow)
- Component + icon library preferences
- Voice and tone guidelines
- Patterns to avoid

The result sits beside your code. Coding agents read it before generating anything.

---

## Why DESIGN.md matters now

AI coding agents (Claude Code, Cursor, Codex, Gemini CLI, GitHub Copilot) build interfaces fast. But they don't automatically know *why* you chose that specific color, that corner radius, that icon set.

DESIGN.md is the design equivalent of AGENTS.md. Explicitly written context that agents read before starting work.

---

## The constraint architecture stack

| File | Purpose | Audience |
|------|---------|----------|
| AGENTS.md | Code conventions | Dev agents |
| CLAUDE.md | Agent behavior | AI assistants |
| DESIGN.md | Design standards | Coding agents |

Onefold bootstraps the third row automatically.

---

## The honest part

Onefold reads what you deployed, not what you intended.

Every inconsistency in your shipped product becomes "brand standard" to the AI. Every undocumented override. Every color that drifted from the system.

Running Onefold is a design debt audit whether you wanted one or not.

---

## How to use it (the right way)

1. Import your public URL
2. Review extracted palette, type, shapes, voice
3. **Ask yourself: is this intentional, or accumulated drift?**
4. **Fix the drift in your actual design system first**
5. Select component + icon library
6. Download → add to repository
7. Point coding agent's project instructions to DESIGN.md
8. Review next generated screen against file + actual product

Steps 3 and 4 are not in their guide. Do them anyway.

---

## Honest assessment

✅ Works with Claude Code / Cursor / Codex / Copilot / Windsurf / Gemini CLI
✅ For Lovable, v0, Bolt — paste into project knowledge
✅ Removes the activation energy barrier for DESIGN.md
⚠️ Extracts deployed state, not design intent
⚠️ Inconsistencies in your site become AI's brand reference
⚠️ Still need to audit the output before trusting it

---

## The takeaway

The activation energy for DESIGN.md is gone.

The judgment of what your brand actually means is still yours.

The brief that writes itself is useful. You still have to audit it.

---

#AIDesign #DesignSystem #ConstraintArchitecture #DESIGN_md #AICodeAgents #UXWorkflow #DesignDebt #AITools #SeniorUX
