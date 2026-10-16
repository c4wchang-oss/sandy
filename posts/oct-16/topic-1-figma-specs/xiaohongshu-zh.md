# Xiaohongshu Post — Figma Specs + Code Layers（中文）

---

**設計 handoff 已死。**
**Figma Specs + Code Layers 對 senior 設計師真正改變了什麼**

Figma 在 10 月 15 日的 Config India 2026 推出兩個開放測試功能。多數報導都在說「canvas 上的 prototype」。Senior design 的角度不一樣。

---

**Code Layers 實際上是什麼：**

在 Figma canvas 上直接跑的 code-backed prototype — 不是 export，不是丟到 Storybook，就在設計稿旁邊。

建立方式：設計 frame 轉換 / GitHub repo / 本機資料夾 / Chrome extension 抓取網頁 / 直接 prompt

沒人在說的關鍵反向操作：「Extract designs」把正在跑的 code layer 轉回可編輯的 Figma frames。標注意圖，標記 ready for dev。Code 和設計在同一個檔案裡對齊。

付費方案在 11 月 4 日前建立和編輯都是免費的。

---

**Specs 實際上是什麼：**

住在 Figma canvas 上的多人 Markdown 編輯器。行內嵌入：frames、FigJam diagrams、code layers，不再有截圖連結，不再有過期參考。

Agent 交接：把 spec 連結貼給 coding agent → agent 收到你的 Markdown + frame 參考 + diagrams + Code Connect snippets。全部一起。

---

**大家沒在說的核心：**

你的 Specs 品質現在是你跟任何 coding agent 合作的品質天花板。

這不是一個文件工具，它是 AI 輔助開發的 brief 格式。把它當 PRD 模板用是錯誤的思維模型。

---

**可以怎麼用：**

1. 不要試圖一次遷移所有東西，從一個進行中的決策開始
2. 直接內嵌設計 frames，不要用文字描述它們
3. 把 Spec 連結貼到 Claude Code 或 Cursor，觀察 agent 拿到真實脈絡和你平常的文字 prompt 有什麼差異
4. 這兩個輸出之間的落差，就是你說服團隊大規模採用的論點

---

**誠實的注意事項：**

Code Layers 在 11 月 4 日後開始使用 AI credits。3 週免費視窗是你的評估時間。不要只是試玩 — 在真實專案上用，然後量化差異。

Specs 只在付費方案開放。值得問自己：你的團隊現在的 annotation 和 brief 品質怎麼樣？因為這就是你的 agents 要工作的基礎。

同一天推出 20 個新 MCP partner 整合。Figma MCP 正在成為基礎設施。設計工具不再是設計結束的地方 — 它是建造 pipeline 開始的地方。

---

#Figma #UX設計 #AI設計 #設計系統 #產品設計 #DesignOps #CodeLayers #FigmaSpecs #Agent原生
