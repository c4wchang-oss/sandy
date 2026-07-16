# 小紅書貼文 — Relume Library MCP（中文）
**格式：** 干貨測評/觀點，emoji 分區，hashtag 放最後
**封面：** 3:4 比例圖

---

**標題：** 為什麼 AI 生成的 UI 永遠都很拼湊？一個 MCP 解法

---

每個用 AI 建過 UI 的設計師都碰過這個問題：

你叫它建一個頁面，它建了——但每個 section 都像是來自不同專案。不同的按鈕、不同的間距、不同的視覺邏輯。

這不是品質問題，是 **context** 問題 👇

---

🔍 **根本原因**

AI 程式工具很擅長寫程式碼，很不擅長記住你的設計系統長什麼樣子。

它沒有 source of truth。所以它在猜、在近似、在發明幾乎對但又不太對的 component。

結果：拼湊出來的 UI，不是一個有一致性的產品。

---

🔧 **Relume Library MCP 做了什麼**

把 Relume MCP 連到 Cursor、Claude 或 Windsurf——你的 AI assistant 現在可以存取 1000+ 個真實的、可用於生產的 component。

它不再發明 UI，而是根據描述**檢索**正確的 component。

進到你專案裡的程式碼是可編輯的、在系統內的，跟其他所有 component 共用同一套 primitives、Tailwind token 和 spacing system。

---

📋 **工作流程**

1. 規劃頁面結構
2. 用白話文描述每個 section（「三個方案的 pricing section」）
3. AI 找到對應的 Relume component
4. 帶著設計系統拉進專案
5. 改成你的品牌樣式

從一開始，每個 section 就說同一種視覺語言。

---

💡 **更大的原則：constraint architecture**

AI 的輸出品質不只是模型能力的問題，而是你給它什麼樣的限制。

精選的 component 庫 = 限制
MCP = 把這個限制傳遞給 AI 的機制

你不是給 AI 一塊空白畫布，而是給它一個有共同語言的精選調色盤。

---

🔮 **值得注意的趨勢**

Figma MCP、Relume MCP、design token MCP。

MCP 正在成為把設計系統 context 注入 AI agent 的主要介面。

Senior designer 要問自己：**你的設計系統支援 MCP 存取嗎？** 如果不行，AI 就不知道你們建了什麼——然後它會繼續猜。

---

#Relume #MCP #AI設計 #UX設計 #設計系統 #CursorAI #ComponentLibrary #ProductDesign #AI設計工具
