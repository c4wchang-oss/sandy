# 小紅書文章 — Figma Weave via Figma MCP（繁體中文）
# Date: Oct 27, 2026 | Tool: Figma Weave MCP | Platform: Xiaohongshu / 小紅書
# Image: ../images/topic2-xiaohongshu-3x4-zh.svg

---

**標題：**
Figma Weave via MCP：你的 coding agent 現在能用你的媒體做什麼

---

**內文：**

Figma 在 10/26 發布了一個小更新，改變了創意製作 stack。所有 Weave 的 video 和 image models 現在都可以透過 Figma MCP 存取。你的 Claude Code 或 Cursor session 現在可以在設計工作旁邊生成製作媒體了——不用開 Weave UI。

---

**現在可以做什麼：**

① 在 Claude Code 或 Cursor 裡，要求 agent 用 Nano Banana、Kling、Seedance 生成圖像
② 生成產品影片、活動視覺、品牌圖像——不用切換到 Weave
③ 每次執行前確認費用——agent 先顯示帳單，再詢問是否繼續
④ 輸出是可直接用在你設計工作流程的 Weave 資產

---

**它的運作方式（3 個 MCP Tools）：**

① weave_find_model — 依名稱找到 model
② weave_run_model — 執行 model，確認費用，開始生成
③ weave_get_model_run_output — 確認進度，拿回輸出

你的 agent 處理全部三個。你只需要在每次執行前確認費用關口。

---

**設計 Stack 現在的狀態：**

- Figma MCP：設計層（視覺規格、元件、code layers）→ agent 可讀 ✓
- Weave via Figma MCP：製作媒體（video、image models）→ agent 可呼叫 ✓ 新功能

一個 Claude Code session：讀取設計 → 生成資產。不需要額外頁籤。

---

**關於 Credits 要知道的：**

⚠️ Weave 執行使用 WEAVE credits——不是 Figma AI credits
⚠️ 兩個獨立的計費表——讓兩個都可見
⚠️ 需要 Figma 帳號（含 MCP）+ 獨立的付費 Weave 帳號

---

**目前還沒有的：**

透過 agent 建立或編輯 Weave workflow 還不支援。你的 agent 可以執行 model——還不能撰寫 workflow。Workflow 的製作仍需要 Weave UI。

---

**Senior Designer 觀點：**

你的 coding agent 可以讀你的設計文件了。
現在它也能生成搭配的製作影片了。

這就是整個 brief——設計加媒體——在同一個對話裡。

唯一剩下的問題：你的 brief，對這兩個都夠好嗎？

#Figma #FigmaWeave #AI設計 #UX設計師 #設計工具 #AIAgent #MCP #DesignOps #工作流程 #設計師日常
