# Threads Post — Toolcraft 開源 Starter Kit（中文）

---

今天有一個東西上線，設計圈幾乎完全沒報導。Toolcraft 是一個開源 framework — 不是設計工具，而是讓 AI agent「建造」設計工具的 starter kit。可運作的 canvas、toolbar、layer 系統、帶 keyframe 工作流程的 timeline。整個應用程式架構作為腳手架。

它附帶了 Claude、Cursor 和 Codex 的內建 AI skills，加上針對輸出的視覺測試規則。這個細節很重要：視覺一致性檢查內建在 framework 裡，代表 agent 的創意輸出在你接觸它之前就已經有了工具創作層級的品質關卡。

我一直在追蹤這個重複出現的模式：約束架構是可信任 AI 工具的訊號。Voyager（10/10）把 agent 限定在 scripting API，讓現有檔案保持可編輯。ProtoPie Code MCP 讓交接流程只讀，確保有唯一的真相來源。Toolcraft 把 agent 工具建造的範圍限制在視覺測試規則內，讓品質不只是一個假設。

我還沒有答案的開放問題：誰來做品味審查，當沒有人設計那個工具？Toolcraft 提供的架構是健全的。但預設值、操作可見性、哪些互動感覺起來可被發現 — 這些是沒有任何 framework 能夠編碼的產品設計決策。

有趣的使用場景不是「agent 建一個通用的設計應用程式」，而是：對特定創意工作流程有深入了解的領域專家 + coding agent + Toolcraft = 為一個精確任務建造的專門工具。這是以前不存在的生產模式。

今天零報導 = 早期訊號。Apache-2.0，值得關注。
