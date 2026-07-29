# Topic 2: Hallmark — 小紅書 (English)
**Platform:** 小紅書 (Xiaohongshu)
**Format:** 干貨 review/tutorial style
**Date:** July 29, 2026
**Topic:** Hallmark by Together AI — anti-AI-slop design skill

---

**Title:** Hallmark: 57 rules that encode what good design refuses to do

The #1 trending GitHub repo this week is a design skill. Not a UI framework. A constraint file for your AI coding agent.

🚫 **The problem it's solving**

Every AI-generated interface defaults to:
• Inter font (always)
• Purple gradient on hero section
• 6 identical feature cards
• Bounce on every hover
• Hero → 3 features → CTA → footer

This isn't the AI being lazy. It's the AI generating toward the statistical mean of its training data. The average of "every website ever built" looks like that.

⚙️ **How it actually works**

1. Before emitting any code, runs 57 "slop-test gates"
2. Any hard floor violation? Regenerate — not output
3. Pre-emit self-critique on 6 axes: Philosophy, Hierarchy, Execution, Specificity, Restraint, Variety
4. Scores stamped as CSS comments in every output
5. 20 named themes + Custom mode for briefs with unique creative intent

🔤 **The 4 verbs (this is the actual workflow)**
• Build — generate new UI with full 57-gate validation
• Audit — score existing code against anti-patterns (punch list, no edits)
• Redesign — new structure, keeps copy + IA + brand intact
• Study — extract design DNA from a URL or screenshot → emits design.md

🎯 **Why senior designers should care**

Audit = automated design critique
Study = competitive analysis as a structured protocol
Redesign = the iteration trigger when output feels too safe

These are things you've been doing in your head for years. Now they're CLI commands.

💡 **The deeper take**

The fact that this works — that you can fight AI slop with 57 explicit rules — tells us something important: AI aesthetic quality is a distribution problem, not a capability problem.

AI taste is just a well-defined refusal list.
Design craft now has a machine-readable format.

Install: `npx skills add nutlope/hallmark`
Works with Claude Code, Cursor, Codex — MIT license, open-source

#AIDesign #UXDesign #DesignTools #AITools #FrontendDevelopment #DesignSystems #Hallmark #ClaudeCode #Cursor #AntiSlop
