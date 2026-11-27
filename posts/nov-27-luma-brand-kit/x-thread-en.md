# Topic 2: Luma Brand Kit + Character Library
# Platform: X (Twitter) Thread
# Language: English
# Date: Nov 27, 2026
# Source: lumalabs.ai/news/brand-kit-character-library, Nov 25, 2026

---

## X THREAD

**[Tweet 1 — Hook]**
Luma launched Brand Kit + Character Library on Nov 25.

The pitch is simple: AI improvises. The logo shifts. The character's face looks like their cousin by scene three.

The fix isn't a better prompt. It's a better constraint architecture.

🧵

---

**[Tweet 2]**
Brand Kit: AI source of truth for your logos, fonts, colors, products, references, and brand rules.

You can upload your brand guideline doc directly, or drop in a website URL — Luma's agent drafts a kit for you to review.

Tie the kit to a board with a hashtag. Every generation on that board reads the kit automatically. No re-prompting. No drift correction session at the end of a 100-asset campaign.

---

**[Tweet 3]**
Character Library: faces, body, wardrobe, expressions, environments — all saved as reusable assets.

Call a character into any board with an `@reference`. The model uses that library as its source of truth for every scene.

This is new as a named resource type. Stitch, Higgsfield, and Automo solved the logo-and-color brand problem. Character Library solves a different layer: the face is a brand asset with the same consistency requirements as a wordmark.

---

**[Tweet 4]**
The interaction model worth noting: `#brandkit` + `@character` on a board.

This is spatial constraint composition. You're not writing a paragraph describing your brand — you're pointing at a named library resource that the agent reads for you.

The pattern: reference beats description. Concrete constraint beats text re-explanation, every time. This is the same principle as DESIGN.md, visual annotation, Skisso diff-as-brief. Same answer, different layer.

---

**[Tweet 5]**
The claim that matters: "built into Luma's agentic creation system and can evaluate the alignment to the brand and character rules you've set."

Evaluate is not enforce. This is automated floor monitoring — the agent checks whether output matches your brand rules — not architectural prevention of violations.

The difference: a parse error (A2UI) means the agent cannot place an unregistered component. Brand evaluation means the agent notices the logo shifted and flags it. One is constraint; one is feedback.

---

**[Tweet 6]**
The URL-to-brand-kit path inherits the same forensics problem as every tool that reads the deployed product to infer the brand:

Deployed product → Luma drafts brand kit → agent uses it as source of truth.

If your brand has drifted from standards (and after six months of shipping, most have), the kit inherits that drift. You're encoding the current state, not the documented intent.

This matters most at scale: 100 assets later, all correct against a brand kit that itself needs an audit.

---

**[Tweet 7]**
Honest caveats:

→ Brand Kit is in research preview (beta)
→ "Evaluates alignment" = monitoring, not architectural enforcement
→ URL-based brand kit drafting reads deployed state, not design intent — treat the draft as a starting point
→ Character consistency for brand characters ≠ realistic human likeness — verify for your use case
→ No pricing or credit cost details in the announcement

---

**[Tweet 8]**
The reframe:

Luma Brand Kit is not "AI image generation with brand colors."

It's the first time character consistency is treated as a reusable brand asset type at the same level as a logo — formally named, formally referenced, formally part of the generation context.

`#brandkit` + `@character` = spatial constraint composition for campaign production. The brief is now a resource graph, not a paragraph.

[Luma Brand Kit + Character Library · lumalabs.ai · Nov 25, 2026]

---
