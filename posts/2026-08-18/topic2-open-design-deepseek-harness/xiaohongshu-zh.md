# 小紅書貼文 — 繁體中文
# 主題：Open Design 0.19.1 + DeepSeek Harness 本地 AI agent（2026年8月）

---

**標題**
設計工具第一次有了「本地 AI Agent」——這個架構反轉讓我重新思考了很多東西

---

**正文**

DeepSeek 上週剛推出開源 agent harness（`dsh`），幾天內在 GitHub 上衝到 149,000 顆星。

然後 Open Design 0.19.1 就把它接進來了，讓它跑在設計工具裡面。

**但最值得注意的不是星數，是架構方向的反轉。**

---

📌 **一般 AI 設計工具的運作方式（大多數工具）**

設計工具 → 呼叫 API → 模型在雲端處理 → 返回結果

你的設計檔案、品牌資產、設計系統，都被傳送到外部伺服器。

---

📌 **DeepSeek Harness 的架構**

Agent harness（本地跑） → 設計工具是它的「插件」之一
→ 模型在你的機器上運行
→ 資料完全不離開你的環境

這不只是「在自己電腦跑模型」——而是**整個 orchestration 環境都在本地**。

---

📌 **對設計師的實際影響**

1. **NDA 客戶工作終於有了 AI 選項**
   未發布的品牌識別、產品設計、機密 UI——用本地 harness，資料不出去，不需要和廠商談 DPA（資料處理協議）。

2. **設計工具的「主角地位」開始動搖**
   以前 Figma、Claude Design 都把自己定位成「AI 設計發生的環境」。
   Harness 架構裡，設計工具只是 agent 使用的眾多工具之一。
   設計工具變成了「情境來源」，不再是指揮中心。

3. **品質上限 = 你的 design system**
   Figma Agent 有 Figma 優化的模型。本地 harness 什麼都沒有。
   你的設計系統品質，就是 AI 輸出的品質上限。
   意思是：design system 越亂，問題越快浮現。

4. **Senior Designer 的新工作：配置 agent 環境**
   如果 harness 是操作環境，你的工作是配置這個環境——不只是寫 prompt。
   Brief 品質、系統結構、plugin 的順序——constraint architecture 往上移了一層。

---

💬 **我的看法**

本地 AI agent 跑設計工具這件事，我看人們討論了兩年。
這是第一次我看到架構層面真的有工具實現它。

對大多數團隊來說，prompt 工程的額外負擔可能還不值得。
但對「資料不能離開我們網路」是硬性要求的企業設計團隊——這件事現在值得認真測試了。

---

有人已經在用 dsh + Open Design 跑實際客戶專案的嗎？很好奇真實的 prompt overhead 怎麼樣。

---

#UXDesign #AItools #DeepSeek #OpenDesign #LocalAI #設計工具 #ProductDesign #設計師日常 #AIagent #SeniorDesigner
