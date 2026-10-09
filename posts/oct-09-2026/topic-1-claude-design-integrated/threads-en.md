# Threads Post — English
## Topic: Claude Design integration — design.md as portable brand constraint layer
## Date: October 9, 2026
## Format: Long-form personal reflection

---

I've been watching the design.md pattern since Vercel introduced it in September. This week it completed the last leg.

Claude Design isn't a separate tool anymore. Anthropic integrated it into every Claude conversation — including Claude Code. The standalone site at claude.ai/design closes December 14. By then, you'll access the same canvas, the same brand constraints, and the same component-aware output from any Claude chat.

The file at the center of this is design.md. One portable Markdown file. It holds your brand's actual colors, typography, components, spacing rules — whatever Claude extracts from the logos, decks, PDFs, and codebases you give it. Drop in your brand kit, Claude generates the document, and that document travels: to Claude Code via /design-sync, to Gamma on export, to Canva, to Google Slides, to Adobe.

Here's what that means in practice: /design-sync in Claude Code puts your design system automatically in scope for every developer prompt in that project. Claude builds from real components, checks its own output against your system before showing you, corrects silently, and hands off something that actually matches your brand.

For teams, an admin locks the approved system. The quality floor is set at org level, not per-designer.

The honest caveat is the same one I always say about constraint systems: quality ceiling is whatever you put in. Claude extracts rules from what you give it. A brand that hasn't formalized its design system gets an AI that guesses what the formalization would have said. GIGO still applies.

What I'm watching: design.md is quietly becoming the file format for brand portability in AI-native design. Vercel writes it. Onefold generates it. Graphical exports GUI.md (same idea for code agents). Claude reads it natively.

The next 6 months will reveal who generates the most accurate one from real brand assets — and that's the actual design problem worth solving.

---

*Image: 16:9 — see images/ folder*
