# Graphics Brief — Ant Group Ming-Image-0.1-Design
**Date:** Sep 24, 2026
**Topic:** Ming-Image-0.1-Design + Layer — editable layers from AI-generated design

---

## Platform Specifications

| Platform | Ratio | Dimensions |
|----------|-------|------------|
| X / Threads | 16:9 | 1600 × 900 px |
| Xiaohongshu | 3:4 | 1080 × 1440 px |

---

## Graphic 1 — X / Threads Cover (16:9)
**File name:** `ming-image-x-threads.png`
**Language version:** English

**Visual concept:**
Dark background (#0D0D0D). The core concept visualized: one flat design → decomposed into stacked transparent layers.

**Layout:**
- Left 45%: A simple UI card illustration (dark, abstract — NOT real product UI)
  - Represents a generated flat design: a simple dashboard card with a heading, a metric number, a small chart, and a CTA button
  - Labeled below: "flat output" in small gray text
  - Arrow pointing right (→) in lime green
- Right 45%: The same card decomposed into 4 stacked, offset transparent layers
  - Layer 4 (bottom): background layer — gray rectangle
  - Layer 3: chart element layer — lifted slightly, offset 8px up/left
  - Layer 2: cards / content layer — lifted another 8px
  - Layer 1 (top): text / headline layer — fully offset, floating
  - Each layer has a thin colored edge (white, semi-transparent) to emphasize separation
  - Labeled below: "editable layers" in small lime green text
- Top left: Small badge "Ming-Image-0.1-Design Layer" in white on dark
- Center top: Headline
  - Line 1 (white, large bold): "AI-generated design."
  - Line 2 (lime green, large bold): "Now editable."
- Bottom right: "MIT License · Free on OpenRouter" in small gray

**Color palette:**
- Background: #0D0D0D
- Primary text: #FFFFFF
- Accent: #A3E635 (lime green)
- Secondary text: #888888
- Layer illustration edges: rgba(255,255,255,0.2)
- Card fills: #1A1A1A, #222222, #2A2A2A (subtle distinction between layers)

---

## Graphic 2 — Xiaohongshu Cover (3:4)
**File name:** `ming-image-xiaohongshu-zh.png`
**Language version:** Traditional Chinese

**Visual concept:**
Three-section vertical layout. Clear hierarchy for mobile reading.

**Layout:**
- Top 35%: Dark (#0D0D0D) — visual of layer decomposition (simplified version of Graphic 1's right side)
  - Four offset stacked layers, minimal, clean
  - Small lime green label top-right: "MIT 開源免費"
- Divider: thin #333333 line
- Middle 30%: Key headline block (#111111 background)
  - Large Chinese headline (white, bold):
    「AI 生成設計終於可以拆層編輯了」
  - Subhead (gray):
    螞蟻集團 Ming-Image MIT 開源 · OpenRouter 免費用
- Divider: thin #333333 line
- Bottom 35%: Key info grid (#1A1A1A background)
  - Four short items in 2×2 grid, each with a lime green dot:
    设计模型 / Design model — 生成可讀文字的完整 UI
    圖層模型 / Layer model — 拆成 2–9 個透明圖層 ★
    Design Skill — 生成 → 拆層 → 前端程式碼
    PPT Skill — 設計圖 → 可編輯 PPTX
  - Bottom: small cautionary note in small gray: "⚠ Benchmark 數字未獨立驗證，先測試再導入"

**Color palette:**
- Same as Graphic 1
- The ★ on Layer model should be lime green to draw attention to the key differentiator

---

## Graphic 3 — Xiaohongshu Cover (3:4) — English version
**File name:** `ming-image-xiaohongshu-en.png`
**Language version:** English

**Visual concept:**
Same 3-section layout as Graphic 2 but English copy.

**Layout:**
- Same visual decomposition in top section
- Middle headline: "AI-generated design. Editable layers. MIT license."
- Subhead: "Ant Group's Ming-Image models — free on OpenRouter"
- Bottom 2×2 grid in English:
  - Design model — generates full UI with readable text
  - Layer model — splits into 2–9 transparent layers ★
  - Design Skill — prompt → design → layers → code
  - PPT Skill — flat design → editable PPTX
- Caveat: "⚠ Benchmarks unverified — test before adopting"

---

## Design Notes

- Layer decomposition illustration should be abstract, NOT depicting real app UI
- Use only muted neutral fills for the "layers" — subtle distinction between layers, not colorful
- The star/★ on the Layer model item is the only callout — do not add more emphasis elements
- Caveat text must be included and visible (design integrity principle: honest caveats in all posts)
- No gradients. Flat. Minimal. Dark mode always.
- Font recommendation: Inter or Syne for headlines; keep consistent with Framer Skills graphics
- MIT license badge should be prominent — it's the key hook for the audience
