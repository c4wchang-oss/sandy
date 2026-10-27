# Threads Post — Figma Weave via Figma MCP（繁體中文）
# Date: Oct 27, 2026 | Tool: Figma Weave MCP | Platform: Threads
# Image: ../images/topic2-x-threads-16x9-zh.svg

---

Figma 在 10 月 26 日發了一個小小的 release note，但它其實是一個重要的基礎建設變化。所有 Weave 的 video 和 image models，現在都可以透過 Figma MCP 存取了。

實際上的意思：你在 Claude Code 或 Cursor 裡。不用切換到 Weave UI，不用先建 Weave workflow，你告訴 agent 用 Kling 生成一段產品影片，或用 Nano Banana 建立品牌活動圖像。Agent 透過三個 MCP tools 處理所有 model 呼叫——找到 model、執行 model、拿回輸出。每次執行前你確認費用。就這樣。

設計 stack 的背景：Figma MCP 讓視覺設計對 agent 可讀已經一年多了。Specs、Code Layers、design tokens——你的 agent 可以讀寫設計層。新的是製作媒體層。Weave via MCP 表示同一個 agent session，既能讀你的設計文件，也能生成影片內容、產品照、活動視覺。從設計到製作媒體，在同一個對話視窗裡。

信任架構做對了。每次付費執行前，agent 顯示費用，等你確認。你不會被 credit 費用突然嚇到。這特別重要，因為兩個計費表是分開的——Weave credits 不是 Figma AI credits。一個 Figma Make session 和一次 Weave model 執行，是在兩個不同帳戶的兩條不同行項。如果你的團隊有設計師在用 Figma AI 功能，也有人透過 coding agent 執行 Weave 生成，那些費用流向的地方不同。那個治理缺口需要一個 owner。

目前缺少的：透過 agent 建立和編輯 Weave workflow 還不支援。你可以呼叫 model，不能撰寫 workflow。Workflow 的製作仍然需要 Weave UI。對於已經有能用的 Weave workflow 的設計師，這是純粹的價值——從你 agent 所在的任何地方執行它。對於還沒有 workflow 的設計師，撰寫 workflow 還是需要 Weave UI。

需要說清楚的前提：需要有 Figma MCP 存取的 Figma 帳戶，加上獨立的付費 Weave 帳戶。在 Weave 設定裡連結你的 Figma 帳戶，外部 agent 就會透過同一個 Figma MCP server 自動找到 Weave tools。

這帶出的設計問題：當你的 agent 能在設計工作旁邊生成製作媒體，你怎麼寫設計 brief 這件事會改變嗎？Brief 一直都在塑造設計。現在它也在塑造影片內容了。如果 brief 品質以前不是一個嚴肅的紀律，現在肯定要是了。
