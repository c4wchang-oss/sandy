# Topic 1: Figma Code Layers — Threads (Traditional Chinese)
# Aug 8, 2026 | Platform: Threads | Language: Traditional Chinese
# Source: Figma Config 2026, Code Layers closed beta rollout (figma.com/blog/code-on-the-figma-canvas/)

---

## 長版貼文

Design-dev handoff「壞了」這件事，從我入行就存在。

每隔幾年就有什麼東西說要修好它。Zeplin。Abstract。Storybook 整合。Design tokens。每一次都多加了一層文件，然後看著那層文件過期。

Figma Code Layers 不一樣。不是因為它消滅了 handoff — 它其實沒有，至少不是完全意義上的 — 而是因為它改變了 handoff 在傳遞什麼。

Code Layers 之前：你交出的是一份規格。一組標注過的截圖，描述應該 build 什麼。

有了 Code Layers：你在跟 code 共用同一個 artifact。Canvas 上的 layer 不再是規格書，它就是會跑的東西本身。

Figma 的 CPO Yuhki Yamashita 說了一句很準的話：他們希望 Code Layers 改變的行為「不只是 designer，還包括 engineer 和 PM」。這才是真正的訊號。當多人協作的 canvas 變成 engineer 和 designer 同時在同一個物件上做決定的地方，對話的性質就變了。

我沒看到有人寫到的是：Code Layers 不會修好一個爛掉的 design system。如果你的 component 結構混亂、沒文件、充滿 one-offs — 從 Code Layers 出來的 code 也會同樣混亂。Quality ceiling 沒有移動，還是在你的 design system。

這給 senior designer 創造的角色不是「handoff 消滅者」，而是「系統可讀性架構師」。讓系統有足夠的結構，讓從它出來的任何東西 — 設計、code、或兩者 — 都不需要 30 分鐘的 walkthrough 才能理解。

Closed beta 中，等待名單在 figma.com/config-betas。我會繼續追這個。

---

## 短版（可單獨發文）

Handoff 從來沒壞。壞的是我們沒有一個共同的 source of truth。

Code Layers 是第一個真正試圖修這個問題的東西。
