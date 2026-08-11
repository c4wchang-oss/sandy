# 小紅書 — ProtoPie AI 正式上線 + MCP 發布
**日期**：2026 年 8 月 11 日  
**主題**：ProtoPie AI 正式版（Component AI authoring）+ ProtoPie MCP  
**格式**：教學 / 觀點分享  
**語言**：繁體中文

---

**標題**：ProtoPie AI + MCP：為什麼「圖層命名」現在是資深設計技能

---

ProtoPie AI 剛從 beta 正式上線。官方主打的是 Component AI authoring，但更有意思的是他們同時發布的 MCP 連接器——以及它對我們往後如何做 prototype 的影響。

**什麼改變了：**
ProtoPie MCP 讓 AI coding agent（Cursor、Claude Code、Codex）可以直接讀取你 prototype 的互動模型，不是截圖，不是文字描述。

Scenes、layers、components、variables、formulas、states、triggers，全部直接存取。

**為什麼這不一樣：**
以前：AI agent 看截圖 → 猜測意圖 → 寫代碼
現在：AI agent 讀互動模型 → 理解結構 → 寫代碼

減少推斷。減少實作落差。

**Component AI authoring——它實際上能做什麼：**
🔹 用自然語言把圖層轉換成 component
🔹 建立 component instances 並覆寫 variables
🔹 @ 提及讓你精準引用圖層（「讓 @submitButton 點擊時變灰」）
🔹 AI 理解 scene 結構，復用現有 variables 而不重複創建
🔹 在同一 session 內記住上下文

**沒人放在標題裡的部分：**
ProtoPie AI 的品質直接跟你怎麼命名圖層有關。

| 圖層名稱 | AI 結果 |
|----------|---------|
| "submitButton" | 效果很好 |
| "Rectangle 3" | AI 搞不清楚 |

檔案整潔度曾經是一種職業習慣。現在它是 AI 系統的品質輸入。

**5 個讓結果更好的技巧：**
1. 在提示 AI 前先用意圖命名所有圖層（不要叫「Shape 1」）
2. 每個提示詞都用 @ 提及來引用特定圖層
3. 把複雜互動拆分成分步驟提示，一次一個
4. 先準備好圖層結構，再讓 AI 開始動——不要在空畫布上提示
5. 如果你同時用 Cursor 或 Claude Code 做實作，連上 MCP

**老實說：**
設計工具的 MCP 還很早期，設定流程還不夠順暢。Figma 的 prototyping agent 也還在 open beta。生態系統還沒有收斂。

但方向是對的。

高保真 prototype → 機器可讀的 brief → 更好的代碼輸出。

設計到交付就是往這個方向走。你蓋 prototype 的方式正在改變——從「讓用戶驗證」，到「也確保 agent 讀得懂」。

---

#ProtoPie #AI原型設計 #UX設計 #MCP #設計工具 #產品設計 #AI工作流 #互動設計 #prototype #設計交付 #設計師筆記
