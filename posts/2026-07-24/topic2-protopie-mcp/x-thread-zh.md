# X Thread — ProtoPie MCP（繁體中文）
**主題：** ProtoPie MCP — AI agent 現在可以讀取 prototype 背後的真實互動模型
**角度：** 「Prototype 從來就應該是 spec。現在它終於是了。」
**日期：** 2026 年 7 月 24 日

---

**Tweet 1（Hook）**
ProtoPie 剛上線 MCP 支援。

標題說的是：「AI 現在可以用自然語言做 prototype 互動設計了。」

這是 Studio MCP 的部分。

更重要的是 Code MCP。

🧵

---

**Tweet 2**
Code MCP 讓 AI coding agent 拿到 prototype 背後真正的互動模型：

- Trigger 和 Response
- 變數和公式
- State 和切換邏輯
- Layer 和 component 結構

不是截圖，不是匯出的影片。是互動邏輯本身。

---

**Tweet 3**
做個比較：AI 之前是怎麼「理解」prototype 的？

截圖、匯出影片、工程師用文字描述。

也就是說：所有的 implementation 都是基於視覺近似，不是互動規格。

「點擊按鈕要有動畫」跟 ProtoPie 裡的 trigger → response chain 是不一樣的東西。

---

**Tweet 4**
Code MCP 把輸入從近似改成了規格。

你用真實 trigger 邏輯和 state management 做的 prototype，變成 AI agent 可以查詢的結構化資料來源。

它不是在「解讀」它看到的東西，是在「讀取」你規格化的東西。

---

**Tweet 5**
Dev View 再推進一步。

你可以選擇分享的粒度：
- 整個 prototype
- 單一 scene
- 單一 component
- 單一 layer

更小的 context → 更乾淨的 code output。Agent 不用讀整個設計系統才能實作一個 modal。

---

**Tweet 6**
Studio MCP 是建立端。

自然語言 → ProtoPie 裡的互動被連接起來。Trigger、response、公式——描述你要的東西，AI 幫你接線。

每個生成的互動都完全可以手動編輯。AI 做設定，你調精準度。

---

**Tweet 7**
這符合我一直在追蹤的一個 pattern：

Figma Code Layers、Flowstep AI、UserTesting MCP——工具都在把設計 artifact 轉換成 AI agent 可以消費的機器可讀 context。

Prototype 不只是給人看懂的了。是給 agent 消費、然後 implement 的。

---

**Tweet 8**
資深觀點：

Prototype 從來就應該是 spec。

實際上它是一個人類 artifact，被工程師從影片裡「猜」出來實作。

Code MCP 消除了那個猜測步驟。猜測變成查詢。

設計意圖和 implementation 之間的落差，剛剛變小了一個量級。
