# Threads Post — OpenAI DevDay 2026：ChatGPT 剛變成設計協作工作台（繁體中文）
**主題：** OpenAI DevDay 2026 — Plugin Extensions 讓 Figma 進入 ChatGPT、ChatGPT Dots 常駐 agents、Pages、MCP Events（2026年9月29日）

---

## 長文反思

OpenAI 的 DevDay 2026 公布了 20 多個功能。大部分的報導都在討論新模型和定價調整。我想聊聊那個更安靜的事：Figma 設計稿和批注現在可以活在 ChatGPT 對話窗口裡，這意味著什麼。

Plugin Extensions 讓開發者可以在 ChatGPT 裡建立完整的 app 介面——sidebar、互動 panel、客製化檔案檢視器。DevDay keynote 示範了 Figma 內容坐在對話旁邊，不在另一個分頁。這是跟「貼截圖然後問反饋」完全不同的互動模式。設計檔案變成對話脈絡的一部分。批注、素材、標注——全在一個 panel。

我職業生涯的大部分時間，「AI 在我設計工作流裡」這個問題本質上是脈絡組裝問題。你完成一個 review，切換到 ChatGPT 思考框架決策，重新解釋專案，貼截圖，拿到缺少一半相關脈絡的反饋，然後切回去。這個循環有複利的成本，一整天累積下來很重。

Plugin Extensions 沒有消除那個循環，但折疊了一個主要步驟：設計工具和 AI 對話之間不再丟失脈絡。這是否真的提升 AI 反饋的品質，完全取決於 Figma plugin 建得多好、實際傳遞了什麼脈絡。

我更仔細思考的是 ChatGPT Dots。常駐 agents 連接 4,000 多個 apps，有自己的雲端電腦。對設計團隊的含義不只是「AI 更快」——而是 AI 助手現在在你整個工具鏈裡有持久的記憶。它知道這個 sprint Figma 改了什麼。它看到了討論 rebrand 決策的 Slack thread。它有拿到界定功能範圍的 Jira ticket。你不用每次 session 從零開始。

MCP Events 延伸了這件事：連接的 apps 可以根據操作觸發自動化。設計工具的事件不需要人工轉達就自動流向下游。這是一直缺少的結締組織。

Pages——AI 和人類在同一個 canvas 即時共同編輯的文件——值得盯緊，特別是研究整合和 brief 撰寫。這個模式跟 Notion 和 Notion AI 一樣，但整合了現在 ChatGPT 生態系的 agents 和連接。

誠實的評估：一天公布 20 個功能意味著每個表面都有毛邊。Plugin 品質取決於開發者。ChatGPT Dots 需要 apps 先建立連接器。MCP Events 兩端都需要實作。第一天沒有任何東西是即插即用的。

但方向很清楚。OpenAI 決定「AI 需要更多脈絡」這個問題要用建立脈絡組織基礎設施來解決，而不是讓模型更聰明。這個診斷是對的。ChatGPT 最終成為設計工作流的協調層，還是 Figma 自己的生態系（MCP server、Code Layers、agent panel）贏得那個位置——這才是值得持續追蹤的問題。

---

## 短句有力觀點（單獨發布）

兩年來我一直在為 AI 設計對話手動建脈絡橋樑。

貼 Figma 截圖。重新解釋專案。匯入研究發現。總結上次 session 後改了什麼。

DevDay 2026 是 OpenAI 押注：脈絡組織——不是模型能力——才是真正的瓶頸。

Plugin Extensions、ChatGPT Dots、MCP Events。這些是基礎建設，不是功能。

值得觀察的問題：這真的折疊了那個循環，還是只是讓脈絡組裝在 ChatGPT 裡發生，而不是在它之前？

