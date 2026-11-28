# 主題二：AI Canvas — 給 AI Agent 的設計系統 + Done-Gate
# 平台：小紅書
# 語言：繁體中文
# 日期：2026 年 11 月 28 日

---

## 小紅書貼文

**AI Canvas 推出了 done-gate——為什麼第十個螢幕問題很重要**

在 11 月 18 日登上 Product Hunt。他們解決的核心問題：AI agents 會漂移。第一個螢幕看起來很棒。到了第三或第十個螢幕，一切都崩了——不同灰色、不同間距、同一個動作三個不同按鈕。某個載入 spinner 跟背景同色，沒有人發現。

這不是 prompt 問題。是約束執行問題。

---

**AI Canvas 是什麼：**

給 AI agents 的設計系統，內建結構性執行機制。

三個組件：
1. **Andromeda Pro** — token 驅動的設計系統（顏色、間距、字型）
2. **AI Brain** — agent 在建構*前*讀取的 93 個文件（元件規則、建構技能、審查技能）
3. **Done-gate** — 檢查完成的工作，系統性漂移的都會失敗

**MCP server：**
- 免費，連接到 Claude、ChatGPT、Codex、VS Code、Cursor
- Agent 搜尋目錄、讀取原始碼、安裝元件，不離開 chat
- 所有東西作為真實可編輯原始碼落地（shadcn 指令）
- MCP 存取永遠免費，不計量

---

**Done-gate 如何運作：**

Agent 建完一個螢幕後，gate 執行：
- 原始顏色值而非 token → 失敗
- 不在比例尺上的間距值 → 失敗
- 以不支援的方式使用元件 → 失敗

Agent 在*系統內*修正失敗，工作才算完成。你不用手動抓漂移——gate 做這件事。

**刻意的例外怎麼辦？**
用 `allow` 註解標記那行。例外是明確的、局部的、在程式碼中有記錄的。

---

**約束執行層級（這在哪裡）：**

| 層級 | 例子 | Agent 無視的後果 |
|------|------|----------------|
| 約定 | DESIGN.md、Library Guidelines | 沒有——agent 可以悄悄繞過 |
| Done-gate | AI Canvas | 建構失敗，必須修正才能完成 |
| 協議執行 | A2UI 1.0 | 解析錯誤——架構上不可能 |

AI Canvas 是中間層級：比文件更難繞過，但不是不可能刻意打破的。

---

**實際工作流程：**

1. 在專案中安裝 Andromeda Pro AI Brain
2. 把 AI Canvas MCP 連接到 Claude Code 或 Cursor
3. 像平常一樣用 agent 建構
4. Done-gate 在每次螢幕建構後自動執行
5. 漂移在跨螢幕複合之前被抓住

---

**誠實的前提：**

- 僅限 React——不支援 Vue、Svelte、純 HTML
- Andromeda Pro 是*他們的*設計系統；你自訂 token，但從他們的架構開始
- Done-gate 檢查 token 一致性，不是你是否做了正確的 UX 判斷（天花板還是你的）
- AI Brain = 93 個文件 = 每次 session 真實的 context window 成本；注意你的 token 預算
- 定價：MIT 免費（Andromeda Legacy + 部分元件），Andromeda Pro = 高級方案

---

**重新框架：**

AI 輔助多螢幕 UI 後的一致性審查遍次在每個專案都很昂貴。在漂移複合之前抓住它的 gate 是工作流效率工具。

工藝判斷——為使用者情境選擇正確的元件、IA 正不正確、層級對不對——那還是你的事。AI Canvas 提高地板。天花板在你的品味放它的地方。

#AICanvas #設計系統 #AIAgent #ClaudeCode #Cursor #UX設計 #AI工具 #設計工作流程 #元件庫 #前端開發

---
