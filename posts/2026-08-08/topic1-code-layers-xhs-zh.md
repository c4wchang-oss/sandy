# Topic 1: Figma Code Layers — Xiaohongshu (Traditional Chinese)
# Aug 8, 2026 | Platform: 小紅書 (Xiaohongshu) | Language: Traditional Chinese
# Format: 觀點/教學 | Image: 3:4 ratio
# Source: Figma Config 2026, Code Layers closed beta rollout (figma.com/blog/code-on-the-figma-canvas/)

---

**標題：** Figma Code Layers 改變了我對 Design-Dev Handoff 的理解

**封面文字（圖片疊加）：** 「Handoff 沒有壞。壞的是 source of truth。」

---

**正文：**

Figma Code Layers 剛進入 closed beta，我認為這是 Figma 自 Auto Layout 以來在結構上最有意思的功能。

先說它實際上做了什麼（不是宣傳版本）：

① 任何 Figma canvas layer → 可執行的程式碼（React + TypeScript + Tailwind CSS）
② 可以直接把 GitHub repo clone 進 canvas
③ Designer 和 engineer 在同一個 layer、同一個檔案裡工作
④ 變更雙向流動：design ↔ code

大家說的：「不再需要 handoff」
真正的重點：handoff 的問題從來不是摩擦，而是分歧。兩個從來沒有保持同步的 source of truth。

Code Layers 讓 canvas 成為決策發生的唯一地方。這是真正新的東西。

---

**對 senior UX designer 來說，這意味著什麼：**

① Design system 的可讀性現在是 code 品質問題
如果你的 component 結構在 Figma 裡是混亂的 → Code Layers 出來的 code 也會是混亂的。Quality ceiling 就是你的 design system 結構。

② 你的 component 需要對機器可讀
不只是對 browse 檔案的人可讀。底層結構需要對跑在上面的 code layer 也說得通。

③ 這還是 exploratory 階段，不是 production
你不會從 Figma 直接 deploy。Code Layers 是快速迭代用的。CI/CD 和 code review 還是要跑。

---

**我的觀點：**
這個功能創造的角色不是「handoff 消滅者」。
是「系統可讀性架構師」。

想要 early access → figma.com/config-betas

---

#FigmaCodeLayers #UX設計 #DesignSystem #AI設計 #ProductDesign #Figma更新 #設計開發 #DesignHandoff
