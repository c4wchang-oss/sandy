# Topic 2: Skillux — Threads Post
# Platform: Threads
# Language: English
# Date: Nov 23, 2026

---

## THREADS POST — Long-form

Since July I've been tracking what I think of as the skills convergence arc — the progression where every major layer of the creative software ecosystem got some form of agent-readable constraint file. Code editors got CLAUDE.md. Design tools got SKILL.md. Web CMSs got Agent Instructions. AI image tools got ComfyUI Skills. Professional creative desktop apps got Voyager skills. Tool authorship itself got Toolcraft.

I declared that arc complete in October. And then Skillux launched.

Skillux is a marketplace of designer-authored SKILL.md packs for Claude Code, Cursor, and Codex. Each pack is a zip: a SKILL.md that locks flows, interaction states, type scale, and spacing rules; templates the agent can reference; a runnable sample interface you can inspect before you commit; tokens; and an INSTALL.md. Install via `npx skillux add <slug>`. One command drops it into whichever skill folders your tools are watching.

The interesting question is not whether this works. It almost certainly works — constraint documents improve AI agent output, that's been proven repeatedly this year. The interesting question is what it reveals about where the value is.

Marketplace skills encode generic UX best practices. Appropriate hover states. Correct empty states. Loading patterns that aren't confusing. Defensible spacing. That's the floor — the layer every AI-generated interface should clear but most don't without guidance.

The ceiling is different. The ceiling is your product's specific visual language, your brand's design decisions, your component library's actual structure, your IA choices. None of that exists as a generic purchasable asset because none of it is generic. That's precisely what makes it valuable.

Miro's VibeLab (Oct 26) and GitHub Replica (Oct 28) showed the same principle from a different direction: designers authoring constraints in-house produce better output than any default. The skill format is the same. The authorship is different.

Skillux shortens the floor gap. It doesn't close the ceiling gap. The designer's job becomes clearer: stop spending time fixing the structural UX problems a Skillux pack would have prevented, and spend that time on the brand-specific ceiling work that requires your judgment.

Governance question that remains open: when your team runs Skillux packs alongside your internally-authored skills, who owns the authority hierarchy? Nobody has answered this cleanly yet.

---

## THREADS SHORT TAKE

AI agents can now buy UX judgment for $1.99.

Skillux is a marketplace of SKILL.md packs — locked flows, interaction states, spacing rules — for Claude Code, Cursor, Codex. Install via `npx skillux add <slug>`. Agent reads it. Agent designs better.

Important distinction: marketplace skills encode generic UX best practices = the floor. Your brand's specific design language and component decisions = the ceiling. No pack gives you that because it's not generic.

This is valuable. It means less time fixing hover states, more time on the work that actually requires senior judgment. But the ceiling gap is still yours to close.

---
