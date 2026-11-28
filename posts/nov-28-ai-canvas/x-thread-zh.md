# 主題二：AI Canvas — 給 AI Agent 的設計系統 + Done-Gate
# 平台：X（Twitter）Thread
# 語言：繁體中文
# 日期：2026 年 11 月 28 日
# 來源：aicanvas.me，Product Hunt 2026 年 11 月 18 日

---

## X THREAD

**[Tweet 1 — Hook]**
Claude 生成的第一個螢幕看起來很棒。
到了第十個螢幕，一切都漂移了。

每個頁面不同灰色。間距靠感覺。同一個動作三種不同按鈕。那個載入 spinner？跟背景一樣灰。沒有人發現。

這不是 prompt 問題。這是系統問題。
AI Canvas 推出了 done-gate。

🧵

---

**[Tweet 2]**
AI Canvas 在 11 月 18 日登上 Product Hunt。

核心是 Andromeda Pro：一個 token 驅動的設計系統，每個元件都遵循同樣的顏色、間距和字型 token。AI Brain 是 agent 在建構前讀取的 93 個文件。元件規則、建構技能、審查技能，以及檢查完成工作的工具。

Agent 不即興發揮。它先讀系統。

---

**[Tweet 3]**
Done-gate 是結構性的執行機制。

Agent 完成建構後，它會檢查：
→ 原始顏色值而非 token：**失敗**
→ 不在比例尺上的間距值：**失敗**
→ 以不支援的方式使用元件：**失敗**

Agent 在系統內修正失敗，才算工作完成。

你不用自己巡邏細節。Gate 替你做。

---

**[Tweet 4]**
刻意的例外情況很重要。

有時你真的需要為一個螢幕打破設計系統。AI Canvas 的答案：在那行用 `allow` 註解標記。例外是明確的。局部的。規則在其他地方不改變。

與「關掉 linter」比較：在這裡，你的意圖記錄在程式碼中。例外是有文件記載的，不是悄悄引入的。

---

**[Tweet 5]**
MCP server 把 AI Canvas 連接到 Claude、ChatGPT、Codex、VS Code、Cursor。

你的 agent 可以搜尋目錄、讀取原始碼、安裝元件，不用離開 chat。所有東西作為真實的可編輯原始碼落地（底層是 shadcn 指令）。MCP 存取永遠免費——目錄瀏覽沒有計量。

設計系統 = agent 可查詢的目錄。和 Once UI 2.0、GitHub Replica 同一條弧線。

---

**[Tweet 6]**
AI Canvas 在約束執行層級中的位置：

→ **約定**（DESIGN.md、Library Guidelines）：agent *應該* 遵循的指南
→ **Done-gate**（AI Canvas）：檢查完成的工作，失敗漂移，要求修正
→ **協議執行**（A2UI 1.0）：agent 在架構上*無法*放置未登錄的元件

三個層級。AI Canvas 在中間：比文件更難繞過，但不是架構性的預防。

---

**[Tweet 7]**
誠實的前提：

→ 僅限 React——不支援 Vue、Svelte、純 HTML
→ Andromeda Pro 是他們的設計語言；你調整 token，但從他們的系統開始（不是你的）
→ Done-gate 檢查 token 使用；它無法判斷你是否為使用者的情境選擇了正確的元件（判斷天花板還是你的）
→ AI Brain = 93 個文件 = 真實的 context window 消耗；了解你的 token 預算
→ 定價：MIT 免費（Andromeda Legacy + 部分元件），Andromeda Pro 是高級方案

---

**[Tweet 8]**
重新框架：

第一個螢幕從來不是問題。第十個螢幕才是。第五十個螢幕才是。每次都需要一遍一致性檢查的設計審查才是。

AI Canvas 的 done-gate 是設計輸出層的自動化底線執行。它不提高天花板——它執行地板。在漂移複合之前抓住它。

你的設計系統 + 一個失敗漂移的 gate = 一致的基準。工藝判斷還是你的。

[AI Canvas · aicanvas.me · Product Hunt · 2026 年 11 月 18 日]

---
