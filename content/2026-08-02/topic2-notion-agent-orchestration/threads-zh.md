# Threads Post — Notion 3.5/3.6：工作區變成了 AI Agent 的 Context Window
**主題：** Notion Developer Platform — External Agents API、Workers、AI Meeting Notes → Custom Agents（Notion 3.5/3.6，2026 年 7 月）
**平台：** Threads
**語言：** 繁體中文
**格式：** 長篇個人反思

---

**貼文**

Notion 這個月上線了一些東西，我覺得大多數設計師都沒有注意到。不是 AI 會議記錄 → Custom Agent 的觸發（雖然那是真的），也不是 Workers 的 hosted runtime（雖然那很重要）。是 External Agents API。

你現在可以在 Notion 裡直接指派任務給 Claude Code、Cursor、Codex 和 Decagon——就像你指派工作給 Custom Agent 或人類隊友一樣。它們出現在你的工作區，你在同一個地方追蹤它們的進度——就是你放設計 brief、研究文件、會議決定的那個地方。

為什麼這不一樣：在這之前，每個 agent 都住在自己的介面裡。如果你要 Claude Code 做某件事，你在終端機或聊天視窗裡。你把 context 複製進去，把結果帶出來，你是工作區和工具之間的翻譯層。

Notion 3.5 移除了這個翻譯步驟。Brief 和執行者在同一個地方，context 不需要被搬移——它本來就在 agent 可以讀到的地方。

AI 會議記錄的觸發是這件事最具體的表現。每次會議都會產生決策，那些決策以前要兩三個手動步驟才能傳播出去——有人更新 tracker，有人起草 recap，有人建 ticket。現在會議本身就是觸發條件：AI 會議記錄結束 → Custom Agent 執行 → tracker 更新，Slack recap 發送，ticket 建立。自動的。

決策和執行之間的缺口補上了。不是因為 AI 更聰明，而是因為架構移除了手動步驟。

Notion Workers 是讓這一切成立的管道。它是自訂程式碼的 hosted runtime——你寫邏輯，部署到安全沙箱。它啟用的模式：Custom Agent 負責判斷（AI 推理「接下來應該發生什麼」），Worker 負責執行（確定性的程式碼「可靠地做那件具體的事」）。這是 AI 和程式碼之間正確的分工。AI 負責決策，程式碼負責行動。

老實說的注意事項：Workers 到 8 月 11 日前免費，之後需要 Notion credits。External Agents API 是 alpha，粗糙的地方存在。整個 orchestration 的品質取決於你的 Notion 結構。如果你的工作區是一堆過時的頁面和做了一半的文件，再多的 agent 整合也改變不了這個事實。垃圾進垃圾出，這裡也一樣。

但方向是清楚的：工作區正在變成 context window。

你的設計 brief、你的 component spec、你的研究筆記、你的專案決定——它們本來就在 Notion 裡了。現在它們是你的 AI 工具預設讀取的輸入，不是你要複製貼上到每個新聊天視窗的東西。

對設計團隊來說，基礎設施的問題不再是「我要用哪個 AI 工具？」而是「我的工作區結構有多完善？」

---
