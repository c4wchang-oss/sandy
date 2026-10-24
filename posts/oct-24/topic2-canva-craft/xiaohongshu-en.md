# Xiaohongshu Post — Canva Craft (English)
# Date: Oct 24, 2026 | Tool: Canva Craft | Platform: Xiaohongshu
# Image: images/topic2-xiaohongshu-3x4-en.svg

---

**Title:**
Canva Craft: the first image model trained on design, not photography

---

**Body:**

"Which AI image model looks best?" is the wrong question.

Canva just shipped Craft — their first in-house model built from scratch by the team that came from Leonardo.ai — and the interesting thing isn't where it ranks on benchmarks.

The interesting thing is how it was trained.

---

**What makes Craft different:**

① **Two-stage generation: plan first, render second**
Stage 1: a planning model reads your prompt and writes a composition plan (elements, spatial layout, visual hierarchy, scale, text placement).
Stage 2: a rendering model translates that plan into a high-fidelity image up to 2K.

The model reasons about layout structure before generating a single pixel. This is IA before rendering.

② **Trained on design templates, not photographs**
Canva trained Craft on their template library — decades of human-designed posters, infographics, social posts, presentations, menus. Design literacy is baked into model weights. The model already knows where the headline should go.

③ **Outputs connect to Magic Layers**
Generated images become editable design elements. Not a flat export. A working starting point inside Canva.

④ **30+ aspect ratios, 55 languages for text in images**
Available now in Canva Dream Lab (all users). API available: `POST /v1/image-generations` with `"model": "craft_v1_2k"`.

---

**Honest limits:**

- Generation time 50–60 seconds — real friction for iterative work
- No brand kit constraint input yet (MCP integration "coming soon")
- A wrong brief produces a polished, structured, wrong composition — planning stage doesn't fix bad briefs
- $180/year (Pro) or $250/year/person (Business) — uses existing AI credit allowances

---

**Senior UX take — the design model category is forming:**

Three tools in 8 days all making the same bet:

• **Linearity Vector 1.0** (Oct 17) — generates editable brand design structure (not pixels)
• **Vyb / Coco Labs** (Oct 21) — composes layouts using your actual brand assets
• **Canva Craft** (Oct 22) — generates layout-aware images trained on design templates

Three instances make a category. The question for senior designers is no longer "which model renders better textures."

It's: **"which model understands design well enough to know where the hierarchy goes before rendering anything?"**

---

#AIDesign #CanvaCraft #DesignModel #ImageGeneration #UXDesigner #BrandDesign #CanvaAI #DesignTools #AIWorkflow

---
