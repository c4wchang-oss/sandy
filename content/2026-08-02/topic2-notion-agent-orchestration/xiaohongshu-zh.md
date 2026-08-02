# 小紅書 Post — Notion 3.5/3.6：工作區變成了 AI Agent 的 Context Window
**主題：** Notion Developer Platform — External Agents API、Workers、AI Meeting Notes → Custom Agents（Notion 3.5/3.6，2026 年 7 月）
**平台：** 小紅書
**語言：** 繁體中文
**格式：** 干貨觀點風

---

**標題：** Notion 不再是專案工具了——它是你所有 AI agent 現在住的地方

**封面文字：** Brief 就是 prompt。不需要複製貼上。

---

**正文：**

🤖 **Notion 3.5/3.6 改變了什麼：**

Notion 剛剛把自己從「共用文件工具」重新定位成「agent orchestration 層」。

三個功能，一個方向：工作區現在是你團隊每個 AI 工具的 context window。

---

🔗 **功能 1：External Agents API（alpha）**

你現在可以在 Notion 裡聊天、指派工作給、追蹤 **Claude Code、Cursor、Codex 和 Decagon**——就像對一個人類隊友或 Custom Agent 一樣。

→ 直接在 Notion 裡給它們指派任務
→ 在同一個工作區（你的設計 brief 所在的地方）追蹤它們的進度
→ 看到輸出，不需要切換工具

Brief 和執行者在同一個地方。你以前手動做的翻譯步驟消失了。

---

📋 **功能 2：AI 會議記錄 → Custom Agent 觸發**

這個功能對日常工作的改變最直接。

→ AI 會議記錄完成
→ Custom Agent 自動執行
→ tracker 更新，Slack recap 發送，工程 ticket 建立

會議本身就是觸發條件。不是某人的提醒要做後續。

**決策**和**執行**之間的缺口，剛被補上了。

---

⚙️ **功能 3：Notion Workers**

自訂程式碼的 hosted runtime。你寫邏輯，部署到安全沙箱，不需要管伺服器。

這個模式：
- **Custom Agent** = AI 推理負責判斷（「接下來應該發生什麼？」）
- **Worker** = 確定性程式碼負責執行（「可靠地做那件具體的事」）

正確的分工。AI 決策，程式碼行動。

Workers **8 月 11 日前免費**，之後需要 Notion credits。

---

🧠 **這對設計團隊來說意味著什麼：**

你的設計 brief 已經在 Notion 裡了。
你的研究筆記已經在 Notion 裡了。
你的會議決定已經在 Notion 裡了。

現在你指派任務的 AI 工具可以**預設讀取所有這些**——不是你要複製貼上到每個新聊天視窗的東西。

工作區本身就是 prompt。

---

⚠️ **誠實的注意事項：**

- External Agents API 是 alpha，有粗糙的地方
- Orchestration 品質 = 你的 Notion 結構品質（垃圾進垃圾出）
- Workers 免費期到 8 月 11 日結束

如果你的 Notion 工作區是一堆過時的頁面，再多的 agent 整合也修不好這個問題。

---

✅ **Senior UX 的觀察：**

基礎設施的問題改變了。

以前：「我應該用哪個 AI 工具來做這件事？」
現在：「我的工作區結構有多完善，讓 agent 真的能讀得到？」

Agent 已經準備好了。你的工作區呢？

#NotionAI #AI工具 #UX設計 #設計工作流 #AIAgent #生產力工具 #工具推薦 #設計師日常 #Senior設計師 #Notion更新

---
