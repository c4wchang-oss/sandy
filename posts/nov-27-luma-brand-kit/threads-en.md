# Topic 2: Luma Brand Kit + Character Library
# Platform: Threads
# Language: English
# Date: Nov 27, 2026

---

## THREADS POST — Long-form

Luma launched Brand Kit and Character Library on Nov 25. The problem they're solving is stated bluntly in the announcement: "Ask anyone who guards a brand why they haven't gone 100% in on AI, and you'll hear the same thing. AI improvises. The logo goes slightly off. The product grows a detail it never had. The face of your brand character looks like their cousin by the third scene."

The mechanic: Brand Kit stores your logos, fonts, colors, products, references, and brand rules. Tie it to a board with a hashtag and every generation on that board reads it without you re-prompting. Character Library stores characters with their face, body, wardrobe, expressions, and environments. Call one into a board with an `@reference`. Both are built into the generation system, not stored in a sidebar you have to remember to open.

The piece I keep coming back to is the Character Library. We've had brand kit patterns since Stitch (Sep 2026), Higgsfield, and Automo all introduced variations. What's different here is treating the face as a reusable brand asset type with the same formal status as a logo. That's not a small step. Brand characters — a mascot, a spokesperson, a CGI talent for campaign work — have always been a consistency problem in AI image and video production. Each generation slightly drifts. Character Library frames the face itself as a named resource that the model references, not an image you re-upload each time and hope the model interprets consistently.

The honest framing: Luma says the system "can evaluate the alignment to the brand and character rules you've set." Evaluate is not enforce. The difference matters. A2UI 1.0 (Nov 11) introduced protocol-level enforcement where the agent architecturally cannot place an unregistered component — a parse error. Brand evaluation is different: the agent produces output, then checks it against the rules, then flags or corrects drift. That's monitoring, not prevention. At campaign scale (100 assets), monitoring catches drift after the fact; prevention would stop it at generation time. Neither Luma nor any current image/video generation platform is at the enforcement level. Know what level you're buying.

The URL-to-brand-kit drafting feature inherits the same problem as every tool that reads the deployed product to infer brand intent. What you get is a draft based on the deployed state of your site, which may or may not match your documented brand standards. After months of shipping under pressure, they usually don't fully match. The draft is a starting point, not ground truth.

---

## THREADS SHORT TAKE

Luma Brand Kit + Character Library (Nov 25). The face is now a brand asset at the same level as the logo.

`#brandkit` + `@character` on a board = brand constraint composition without re-prompting. Spatial, not textual.

Honest caveats: Brand Kit is in research preview (beta). "Evaluates alignment" is monitoring, not enforcement. URL-based brand drafting reads deployed state, not design intent. Use the draft as a starting point, audit it before you run 100 assets from it.

---
