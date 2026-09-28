# X Thread — Elementor MCP：WordPress 終於有了 Agent 原生設計接口（繁體中文）
**主題：** Elementor MCP 讓 Claude、Codex、Cursor 直接連到 WordPress 網站（2026年9月23日）
**角度：** 43% 的網站剛拿到 MCP 那層。WordPress 的設計系統品質 floor，現在直接反映在 AI 輸出裡。

---

**Tweet 1 / Hook**
43% 的網站跑在 WordPress 上。

Elementor MCP 出了。Claude、Codex、Cursor 現在可以直接在 WordPress 站裡建立原生 Elementor 頁面——不是生成程式碼讓你貼上去，是真實可編輯的結構，以草稿形式落地。

最後一個主要 web 平台終於有了它的 agent 層。

---

**Tweet 2**
Webgate agency 在 live production site 上測試的工作流程：

Brief → 現有網站 context → Figma 截圖 → 提示詞 → Elementor MCP → 視覺 QA → 手動微調

Agent 處理實作。
人還是要處理 IA、視覺層級、accessibility、responsive 行為、設計系統一致性、最終發布。

---

**Tweet 3**
設計系統的問題，現在對每個 WordPress 團隊都變得緊迫。

Elementor V4 Atomic = classes、variables、responsive breakpoints。

你的 Elementor 設計系統就是 agent 運作的邊界。沒有設計系統 = agent 輸出 generic 結果。品質上限原則每次都一樣。

---

**Tweet 4**
「發布前草稿」的模式是正確的信任設計。

Elementor MCP 生成的任何東西都不會自動上線。每個輸出都以草稿形式落在 Editor 裡。你審核、調整、決定何時準備好。

跟 Figma Make、Framer canvas review、Webflow Conf Actions 一樣的原則。生產系統需要人在發布那道關卡。

---

**Tweet 5**
誠實的說明：V3 和 V4 共存問題。

Elementor MCP 目前只支援 V4 Atomic Elements。大多數現有網站跑的是 V3 widgets。如果你在一個舊站，你會是混用狀態——新的 Atomic 區塊和舊的 V3 結構，在同一個 live 頁面上。

Webgate 測試了。可以運作。但把 8 年的 V3 全部遷移是另一個專案。

---

**Tweet 6**
這個收斂模式：
→ Webflow：Agent Instructions + MCP（9月6日）
→ Framer：Skills（9月22日）
→ Elementor：MCP（9月23日）

17 天內，每個主要 web 平台都有了 agent 原生接口。

問題不再是「哪個平台有了」。而是「你為 agent 定義了多少限制可以運作」。

---

**Tweet 7**
WordPress 設計一直是一致性的荒野。12 種字體大小。7 種按鈕樣式。一個 8 年演化、無人負責的調色板。

Elementor MCP 沒有修復這個問題。它讓這個問題的代價立即可見——在每一個生成的輸出裡。

Brief 品質 = 輸出上限。Agent 不會憑空發明你沒有建立的設計系統紀律。

---

**Tweet 8 / CTA**
43% 的網路的 floor 剛移動了。

WordPress 網站的設計系統形式感——Elementor classes、variables、有意圖的文件——現在直接關聯到生產規模的 AI 輸出品質。

如果你一直在迴避它：agent 的輸出會告訴你那個迴避代價了多少。

cc @elementor
