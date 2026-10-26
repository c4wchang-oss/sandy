# X Thread — NNG AI 調查 + Zombie UI（繁體中文）
# Date: Oct 26, 2026 | Research: NNG survey + Stripe/Miro case studies | Platform: X / Twitter
# Image: images/topic2-x-threads-16x9-zh.svg

---

**Tweet 1（Hook）**
NNG 本週調查了 UX 從業者。

AI 省時間嗎？有，一致確認。
從業者的感受呢？「Lukewarm」——不冷不熱。

不是懷疑。不是熱情。就是曖昧。

這是這個行業今年產出的最誠實的信號。Thread ↓

---

**Tweet 2**
拆開來看，「不冷不熱」其實說得通：

「AI 省時間」= 真的。在生成步驟。

「AI 端到端省時間」= 不清楚。

驗證——確認輸出是否符合品牌、無障礙、結構健全、沒有發明自己的 component system——並沒有更快。很多時候更慢。

---

**Tweet 3**
一個團隊的兩天黑客松，用了 ChatGPT、Claude、Copilot：

產品「在早期看起來幾乎完成了」。
但在任何東西真正能用之前需要大量審查。

這個驗證成本不會出現在任何人的省時估算裡。只用生成速度來規劃會誤導你的團隊。

---

**Tweet 4**
Stripe 設計主管本週幫失敗模式命了名：「Zombie UI」。

未經檢查的 AI 生成所產生的過度打磨、通用介面。功能正常，視覺完整，品牌靈魂為零。

設計決策屬於訓練模型的人，不是你的團隊。

---

**Tweet 5**
Zombie UI 不是因為 AI 很糟。

而是因為 AI 在表面品質上夠好，好到沒有人停下來問這些預設值是不是你的。

版面可用，間距可接受，配色不讓人討厭。但實際上沒有一樣是你會設計出來的東西。

---

**Tweet 6**
Stripe 的解法：一個 command-line 工具，在人工 review 前把品牌限制直接烘焙進生成程式碼。

不是 style guide，不是 prompt。是在生成之前執行的程式碼層限制，不是之後。

生成前的 constraint architecture 才是 Zombie UI 的正確解法。

---

**Tweet 7**
Miro 的 Staff Designer 在 prototyping 層發現了相同問題：agent 發明自己的按鈕，完全無視 design system。

修法：一個 skill，在生成開始前就把系統的元件、規則和範例放進 context。

每次都先放 constraint。這是正確順序。

---

**Tweet 8**
如果你的團隊回報對 AI 感覺「不冷不熱」，問一個診斷問題：

AI 在端到端上省了時間嗎——生成 + 驗證 + 修正——還是只有在生成步驟？

按任務類型記錄這個數字。那才是真正能改變領導層對 AI 投資思考方式的數據。
