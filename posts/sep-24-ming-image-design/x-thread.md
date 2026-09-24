# X Thread — Ant Group Ming-Image-0.1-Design
**Date:** Sep 24, 2026
**Topic:** Ming-Image-0.1-Design + Layer — the flat PNG problem, solved in open source
**Format:** 8-tweet thread
**Language:** English

---

**Tweet 1 (hook)**
Ant Group just open-sourced two 6B models that solve the most frustrating problem in AI-generated design work.

Every other image AI gives you a flat PNG you can't edit.

These give you back editable layers.

MIT license. Free on OpenRouter. Here's why this matters. 🧵

---

**Tweet 2**
Two models shipped together:

**Ming-Image-0.1-Design** — generates full-page UIs, dashboards, infographics, and posters. Trained specifically for text-heavy design work. The text in the output is actually readable. That's still rare.

**Ming-Image-0.1-Design-Layer** — the more interesting one. More on this next.

---

**Tweet 3**
The Layer model inverts the usual workflow.

You give it a generated design + a layer plan (e.g.: text, cards, main elements, background). It splits the flat image into 2–9 transparent PNG layers that correspond to each element.

The output is something closer to a working design file than a flat image. First time I've seen this in the open-source space.

---

**Tweet 4**
Two skills shipped alongside — and they're more practical than the models:

**Design Skill** — generation + layer decomposition + frontend code output in a single pipeline. Text prompt → design → layers → code.

**PPT Skill** — converts a flat design image into an editable PPTX (text, images, layout all modifiable).

The PPT Skill is underrated. Research teams will use this.

---

**Tweet 5**
Why the MIT license matters here.

This is Ant Group — the Alipay parent, one of the largest fintech companies in the world. 6B parameter models. No usage restrictions, commercial use free.

The floor for teams doing volume social cards, ad variants, and internal decks just moved. Again.

---

**Tweet 6**
The benchmark claim: #1 on the Artificial Analysis UI/UX Design open-weight leaderboard, Elo score 1082.

Here's my honest caveat: the model card presents the benchmark results as chart images without actual numbers. I can't independently verify the claim.

Test it on your actual use case before committing to a workflow.

---

**Tweet 7**
Who this is actually for:

A 3-person marketing team turning out social cards, infographics, and ad variants at volume. Not a Figma replacement. Not a design process tool.

A production layer where the brief is a text prompt, the output is editable layers, and the gap between prompt and polished asset collapsed.

---

**Tweet 8 (CTA)**
Start with the Layer model. It's the genuinely novel capability here.

Generate something with the Design model. Pass the output to Layer with your layer plan. See what you get back.

The layer decomposition is where the floor shifted.
https://datanorth.ai/news/ant-group-releases-ming-image-0-1-design
