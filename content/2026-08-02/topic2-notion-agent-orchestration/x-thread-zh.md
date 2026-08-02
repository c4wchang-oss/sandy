# X Thread — Notion 3.5/3.6：工作區變成了 AI Agent 的 Context Window
**主題：** Notion Developer Platform — External Agents API、Workers、AI Meeting Notes → Custom Agents（Notion 3.5/3.6，2026 年 7 月）
**平台：** X（Twitter）
**語言：** 繁體中文
**格式：** Thread（8 則）

---

**Tweet 1 — 開場**
Notion 悄悄不再是一個專案管理工具了。

它現在是你的 AI agent 的中性基礎設施層——Claude Code、Cursor、Codex、自訂 agent——全部在這裡作為原生隊友運作。

這是不同的產品類別了。

🧵

---

**Tweet 2**
Notion 3.5 和 3.6 上線了什麼：

→ External Agents API（alpha）：在 Notion 裡聊天、指派工作給、追蹤 Claude Code、Cursor、Codex、Decagon——跟 Custom Agent 一樣
→ Notion Workers：自訂程式碼的 hosted runtime，部署到安全沙箱，不需要管自己的伺服器
→ AI 會議記錄 → Custom Agent 觸發：會後自動化流程自動執行

把這一切串起來的那條線：工作區就是 context。

---

**Tweet 3**
External Agents API 是策略性的移動。

以前：你的 agent 住在自己的介面裡。Cursor 在 IDE，Claude Code 在終端機，Codex 在網頁。

現在：它們可以在 Notion 裡被指派工作，你追蹤它們的進度，在同一個地方看到輸出——那個地方就是你放設計 brief、research 筆記、會議決定的地方。

Brief 和執行者住在同一個工作區。

---

**Tweet 4**
Meeting Notes → Custom Agent 的觸發是我一直在想的那個。

每次會議都會產生決策。那些決策以前住在某人的筆記裡——也許更新進 tracker，也許做成 ticket，也許送出 recap，也許就忘了。

現在會議本身就是觸發條件。AI 會議記錄結束 → agent 執行 → tracker 更新，Slack recap 發送，ticket 建立。自動的。

決策和執行之間的缺口，剛被補上了。

---

**Tweet 5**
Notion Workers 是讓這一切可靠的管道。

Workers 是自訂程式碼的 hosted runtime。你寫邏輯，部署到安全沙箱，它就跑。資料庫同步、webhook 處理、agent 工具呼叫——全部不需要管伺服器。

使用模式：Custom Agent 決定要做什麼，Worker 可靠地執行具體步驟。

AI 推理負責判斷，確定性的程式碼負責執行。正確的分工。

---

**Tweet 6**
這對設計團隊來說意味著什麼：

你的設計 brief 現在預設就是機器可讀的。

研究文件、會議 recap、component spec、專案狀態更新——全部已經在 Notion 裡了。現在你指派任務的任何 agent，都能取用那些 context。

你不再需要把 context 複製貼上到 prompt 視窗裡。你的工作區就是 prompt。

---

**Tweet 7**
老實說的框架：

Workers 到 8 月 11 日前免費，之後需要 Notion credits。External Agents API 是 alpha，預期有粗糙的地方。整個 orchestration 的品質取決於你的 Notion 結構（對 agent 來說，垃圾進垃圾出也是一樣的）。

這不是「Notion 取代了你的 AI 工具」，而是「Notion 成為你治理所有 AI 工具的介面」。

治理和稽核已經內建了。對有規模的團隊來說，這很重要。

---

**Tweet 8 — 結尾**
這次的真正標題不是「Notion 加了 agent 整合功能」。

而是：工作區變成了你團隊每個 agent 的 context window。

你的設計 brief、你的 research、你的會議決定——不是你要複製貼上到模型裡的輸入。它們本來就在那裡。

AI agent 基礎設施的問題不再是「我要用哪個工具？」而是「我的工作區結構有多完善？」

你的團隊現在有多少工作知識是真正可以被查詢到的？

---

*資料來源：https://www.notion.com/blog/introducing-developer-platform / https://www.notion.com/releases*
