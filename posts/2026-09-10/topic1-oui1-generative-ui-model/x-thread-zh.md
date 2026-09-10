# Topic 1: OUI-1 — 全球首個開源生成式 UI 模型
# Platform: X (Twitter) | Language: Traditional Chinese
# Date: Sep 10, 2026 | Format: Thread (8 tweets)
# Source: https://www.openui.com/blog/oui-1 (Sep 8, 2026)

---

**Tweet 1 (Hook)**
本週出現了第一個專門為 UI 生成訓練的開源模型。

它的品質天花板是你的 component library。

不是這個模型，是你的 library。

🧵

---

**Tweet 2**
Thesys 在 9 月 8 日發布了 OUI-1。

DiffusionGemma fine-tune — 4B active parameters，26B 總參數 — 訓練它用 OpenUI Lang（一種緊湊的 UI 宣告語言）撰寫介面。

Generative UI Benchmark 71.7%。
基礎模型是 13%。

光靠專業化就提升了 5.5 倍。

---

**Tweet 3**
運作方式：

你把 component library 的 TypeScript 型別簽章放進 system prompt。
OUI-1 根據自然語言 brief 用這些元件生成介面。

不是需要替換的佔位 UI。
你真實的元件，你真實的 token。

System prompt 就是你的設計系統。

---

**Tweet 4**
這帶來的後果：

如果你的 component library 有：
→ 模糊的 prop 命名 → AI 生成出模糊的結果
→ 記錄不清楚的 variants → AI 選了錯誤的
→ 缺少 edge case 處理 → AI 生成 edge case 出錯的介面

設計系統的技術債在 demo 裡一直是隱形的。
OUI-1 讓它在推論時變得可見。

---

**Tweet 5**
誠實的 caveat：

71.7% 是結構有效性的分數。
評分標準是 parser 能不能接受輸出 — 元件圖能不能解析，必要的 props 是否存在。

沒有分數衡量：「使用者能完成想做的事嗎？」

那個空隙，正是設計判斷力居住的地方。

---

**Tweet 6**
另一個值得注意的：本地推論。

OUI-1 可以在 RTX 5090 以 FP8 precision 執行。

對企業工作的意義：你的 component library、你的 brief、你的生成輸出 — 全在自己的機器上。沒有 API，沒有資料外傳。

這不是效能功能，這是架構層面的企業治理決策。

---

**Tweet 7**
OpenUI Lang 比 JSON 省了最多 67% 的 token。

DiffusionGemma 的擴散式生成（一次從雜訊生成 256 個 token）目標是毫秒級的串流輸出。

設計目標：UI 生成速度像傳統軟體渲染一樣快。

我們還沒到那裡，但這個架構是指向那個方向的。

---

**Tweet 8 (CTA)**
專門為 UI 生成訓練的模型，不會取代設計判斷力。

它讓你的 component 架構品質，在推論時變得可見。

撰寫 component 型別簽章的設計師，就是在寫 OUI-1 遵循的規則。

你現在的 component library TypeScript props 是什麼狀態？↓
