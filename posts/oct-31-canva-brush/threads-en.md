# Threads Post — Canva Brush (EN)
# Oct 31, 2026 | Senior UX Designer POV

---

## Long-form reflection

Canva Brush is a vision-language model that edits designs, not generates them. And that framing matters.

Most AI design tools are still optimized for generation — you prompt, it makes something new. Brush is optimized for editing — it reads your existing design, understands its structure, and changes what you asked without touching what you didn't.

The mechanism is an agentic loop: it writes code to adjust design elements, inspects the result, and decides the next step. Which means the self-review loop isn't a layer on top of the model — it's part of how the model works.

What I find genuinely interesting here is the reinforcement learning setup. The reward system was defined by professional designers at Canva. That's the right call. "Good design" is not a metric you can compute from pixels. It requires someone with taste in the loop. Whether Canva's RL approach actually captured that taste at scale — we'll see.

Craft generates. Brush edits. Two in-house models, clearly scoped. That's product thinking, not feature thinking. Most companies ship one model and call it both.

The honest part: Pro-only at launch, no API yet. The real test isn't "can it make a deck look better?" — it's "can it edit a brand-constrained, multi-section product page without introducing visual drift across 40 slides?" That question isn't in the announcement.

Every output is fully editable. Text, layout, colors — all yours to keep refining by hand. That matters. Editable AI output is now the baseline expectation, but the editing layer has been the hardest part to get right.

---

## Short punchy take

Canva didn't give you a better prompt box. They trained a model that understands design structure, then had professional designers teach it what "good" means. Two models, two jobs, both built in-house. That's a different bet.
