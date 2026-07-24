# 小紅書貼文 — ProtoPie MCP（繁體中文）
**平台：** 小紅書
**格式：** 工具解析 / 教學
**日期：** 2026 年 7 月 24 日

---

**標題：** ProtoPie MCP：Prototype 終於變成真正的規格了

---

🤯【一個從設計交付開始就存在的落差】

AI agent 一直以來是怎麼從 prototype 實作設計的？

截圖。匯出影片。工程師的文字描述。

所有這些都需要「詮釋」——從視覺 artifact 去猜互動邏輯。

ProtoPie 剛上線 MCP 支援，這件事改變了。

---

🔑【兩個模式】

**Studio MCP** — 在 ProtoPie 裡用自然語言建立互動：
- 「在這個按鈕加一個 Tap trigger」
- 「點擊時翻轉卡片」
- 「變數改變時讓這個 layer 有動畫」

AI 幫你接線，你調細節。每個生成的互動都完全可以手動編輯。

**Code MCP** — AI coding agent 讀取你 prototype 背後的真實互動模型：
✅ Trigger + Response
✅ 變數 + 公式
✅ State + 切換邏輯
✅ Layer 和 component 結構

不是截圖，是互動規格本身。

---

📐【Dev View：精準 context 控制】

可以選擇分享的粒度：
- 整個 prototype → 整體理解
- 單一 scene → 功能層級實作
- 單一 component → 精確互動
- 單一 layer → 微互動細節

Context 越小 → code output 越乾淨。Agent 不需要讀整個設計系統才能實作一個 modal。

---

💡【實際的前後對比】

以前（截圖/影片）：
工程師或 agent 看到：按鈕 → 點擊 → 動畫
實作：「我猜是 200ms 的淡出？大概吧？」

以後（Code MCP）：
Agent 讀取：Trigger: Tap / Response: Rotate Y 0→180deg / Duration: 250ms / Easing: ease-out

詮釋步驟 → 查詢步驟。設計意圖完整保留了。

---

🔄【更大的 pattern】

Figma Code Layers — canvas 吸收了 code
UserTesting MCP — 研究變成 context window
ProtoPie Code MCP — prototype 變成可被讀取的規格

這些工具都在做一件事：幫設計 artifact 長出機器可讀的那層。

設計物件不再只是給人看的了。是給 agent 消費的。

---

🎯【適合用 Code MCP 的情況】

✅ 複雜互動邏輯（自訂公式、多 state 流程）
✅ 互動保真度很重要的設計交付
✅ 任何你不希望被「猜測」的互動規格

❌ 截圖真的夠用的簡單 CRUD 畫面

---

📝【資深設計師的解讀】

Prototype 從來就應該是規格。

實際上，它是個人對人的溝通工件。工程師從影片裡推斷意圖，盡力做到最好。

Code MCP 消除了那個落差。設計意圖在交付過程中完整保留了。

---

🔗 protopie.io/features/protopie-mcp

---

#ProtoPieMCP #AI設計 #設計交付 #UX設計師 #Prototyping #MCP #設計工具 #資深設計師 #AI工作流程 #產品設計
