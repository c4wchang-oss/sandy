# X Thread — Once UI 2.0：Agent-First 設計系統（繁體中文）
**主題：** Once UI 2.0 在 npm 套件裡內建 agent harness（2026年9月25日）
**角度：** 設計系統安裝自己的 brief。這是不一樣的設計系統。

---

**Tweet 1 / Hook**
Once UI 2.0 把 agent harness 直接打包進了 npm 套件。
`npx once-ui-init-agent` 自動寫入你的 AGENTS.md 和 Cursor rules。

設計系統在幫自己安裝 AI 使用說明。

這是不一樣的設計系統。

---

**Tweet 2**
Harness 裡包含什麼：
→ Compact rules（~2KB）——用什麼、永遠不要寫什麼
→ Component catalog——按目的索引，不按字母
→ Task bundles——依意圖配對的食譜（pricing、hero、dashboard）
→ Gold examples——可以模仿的生產級結構
→ Validation CLI——合併前自動確認生成的程式碼

不是文件。是打包進套件的 codegen pipeline。

---

**Tweet 3**
作者說的這句話讓我一直在想：

「Once UI 2.0 不是讓 agent 設計這個系統做出來的。它是因為讓量測便宜到我不需要猜測才做出來的。」

當你可以自動驗證生成的輸出，就可以根據實際結果收緊限制。
這是 DesignOps 的思維。

---

**Tweet 4**
Compact rules 裡有一條規則，完整說出了這個哲學：

「如果設計意圖不清楚——問。」

不是「生成看看再調整」。是問。

預設：克制、置中 maxWidth="m"、單一品牌強調色、一個微妙漸層、不用佔位圖片。

有預設美感的設計系統。不是「生成再看看」。

---

**Tweet 5**
70% 更精簡輸出的說法（對比 Tailwind+shadcn）來自他們自己的文件。
我無法獨立驗證。

但機制說得通：當 model 知道 `fill` 等於 `fillWidth fillHeight`，
`center` 等於 `horizontal="center" vertical="center"`，它是在讀規格。

設計意圖 → compact rule → 更少 token 雜訊 → 更高還原度。

---

**Tweet 6**
收斂脈絡：
OUI-1（9月10日）：第一個被訓練來生成 UI 的模型
GeekLego、Astryx、BRDNA：以 agent API 形式出貨的設計系統
Once UI 2.0：自帶 agent brief 的設計系統

差別在哪：Once UI 從套件內部告訴 agent 如何使用它。
不需要另一個 DesignOps 團隊分開維護。

---

**Tweet 7**
說實話：2.0 alpha，236 個 GitHub stars，MIT 授權。

Harness 架構是對的。能否在生產規模下穩定運作是另一個問題。

但 floor 移動了：獨立創作者現在取得了以前需要整個團隊才能建立的 agent-native 設計系統基礎設施。

---

**Tweet 8 / CTA**
Once UI 2.0 不需要你向 AI 描述你的設計系統。
它自己描述自己。

作者沒有讓 agent 設計這個系統。
他讓限制精確到 agent 沒辦法誤讀。

當程式碼變得更容易生產，限制才更重要。
這就是那件事看起來的樣子。
