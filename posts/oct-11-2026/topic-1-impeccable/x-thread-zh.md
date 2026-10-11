# X (Twitter) Thread — 繁體中文
## 主題：Impeccable — AI Coding Agent 的 Design 品質底線
## 日期：2026 年 10 月 11 日
## 格式：8 則推文 thread

---

**Tweet 1（開場鉤）：**
Vibe coding 讓你有可以跑的程式碼。
但不代表你有好的設計。

jQuery UI 的作者 Paul Bakaus（前 Google）做了一個工具來解決這件事。

↓

---

**Tweet 2：**
Impeccable 是給 AI coding agent 的 design skill。

`npx impeccable install` — 安裝就這樣。

你會得到：
- PRODUCT.md：持久保存的產品真相（受眾、目的、限制、語氣）
- 24 個共用指令（audit、polish、critique、bolder、quieter、animate...）
- 61 條 deterministic 規則，偵測 AI 設計 slop 與品質問題
- 即時瀏覽器迭代迴圈

Apache-2.0。Claude Code、Cursor、GitHub Copilot、Gemini、Codex 全都支援。

---

**Tweet 3：**
61 條規則有趣的地方在於：它們不需要 LLM。

Rust binary，在本機執行，不需要 API key，不需要等待。

它會抓到：
→ 側邊 tab 強調色邊框、標題漸層文字、紫色漸層、彈跳動畫、暗色發光特效
→ 低對比度、跳過標題層級、觸控目標太小、文字溢出、間距太緊

「AI 生成的」tell，以及「沒人 QA 過」的 tell。

---

**Tweet 4：**
我今年一直在追蹤 constraint architecture：

Thanor → 第一個 prompt 前的 30 個設計值
Graphical → coding agent 的 GUI.md（style-as-constraint）
Figma Library Guidelines → 文件即 agent constraint

Impeccable 補上了不同的環節：生成後的 deterministic audit。

生成前約束 + 生成後執行 = 品質底線現在是架構，不是 prompt。

---

**Tweet 5：**
對我來說最重要的：PRODUCT.md。

Impeccable 區分了產品真相和視覺方向。PRODUCT.md 記錄的是受眾、目的、操作情境、限制、語氣、依據。

這跟 DESIGN.md、GUI.md、Library Guidelines 不一樣——那些是關於視覺風格。

把產品真相和視覺方向混在一起，是大多數 AI design brief 真正崩壞的地方。

---

**Tweet 6：**
值得特別說的：Impeccable 現在已內建在 GitHub Copilot app 中。

每個打開 Copilot 的開發者，預設就有了一個 design 品質層。

這個討論已經離開設計工具了。它在數百萬個不自稱是設計師的開發者預設使用的 coding harness 裡。

---

**Tweet 7：**
誠實的限制——來自 Paul 本人：

「沒有 slop 並不等於有 taste。」

Impeccable 移除 AI 的固定模式，捕捉品質問題。它不修正錯誤的資訊架構，不改善糟糕的產品決策。

自動化底線 + 人工判斷天花板 = 兩件不同的事。Impeccable 做的是其中一件。

---

**Tweet 8（CTA）：**
我這週會依序使用兩個工具：

UI Discovery → 給 agent 真實生產環境的參考作為 brief
Impeccable → 用 61 條 deterministic 規則 audit 輸出

Brief 品質 → 執行品質 → 底線執行。
模型能力已不再是差距所在。

→ impeccable.style

---

*圖片：16:9 — 見 images/x-threads-16x9-zh.jpg*
