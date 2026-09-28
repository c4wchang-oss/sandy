# Threads Post — Elementor MCP：WordPress 終於有了 Agent 原生設計接口（繁體中文）
**主題：** Elementor MCP 讓 Claude、Codex、Cursor 直接連到 WordPress 網站（2026年9月23日）

---

## 長篇個人觀察

WordPress 設計一直是一致性的荒野。一個 2018 年上線、現在還在跑的網站，可能有 12 種不同的字體大小、一個變體數量翻了三倍的按鈕樣式庫、一個三個不同 agency 都動過的調色板。沒有人計劃成這樣，它只是慢慢積累了。

Elementor MCP 意味著 agent 現在繼承了所有這些。

MCP 把 Claude、Codex 和 Cursor 直接接進你的 Elementor 網站——不是生成程式碼讓你貼上去，而是建立實際的原生 Elementor 結構。V4 Atomic 頁面。Classes。Variables。Responsive breakpoints。輸出在任何東西上線前，以草稿形式落在 Editor 裡。

Webgate agency 在真實的生產網站上實地測試了這個，誠實地記錄了他們的流程：Brief → 現有網站 context → Figma 截圖 → 提示詞 → Elementor MCP → 視覺 QA → 手動微調。他們的結論：agent 處理實作。人還是要處理 IA、視覺層級、accessibility、responsive 行為、設計系統一致性、最終發布。

留在人這邊的清單不是限制，是正確的任務分配。

我覺得更有趣的是這件事強迫面對的設計系統問題。Elementor V4 Atomic 給了你一個真實的限制詞彙——classes、variables、states、responsive breakpoints。Agent 在你定義好的東西裡面運作。沒有設計系統就意味著 agent 用它自己知道的東西去近似，結果是一個看起來像每一個其他 AI 生成的 WordPress 網站的 generic Elementor 頁面。

模式跟其他所有 MCP 部署一樣：Brief 品質是上限。Agent 無法憑空發明你沒有系統化的設計紀律。

一個值得說清楚的誠實警告：目前只支援 V4 Atomic。大多數現有的 Elementor 網站跑的是 V3 widgets——舊系統。如果你在一個舊站，你會是混用狀態。新的 atomic 區塊和舊的 V3 結構，在同一個 live 頁面上。Webgate 測試了這種共存，可以運作。但把所有 V3 內容遷移到 V4 Atomic 是一個不同的、更大的專案。

收斂發生得很快。Webflow 的 Agent Instructions 在 9月6日出了。Framer 的 Skills 在 9月22日出了。Elementor 的 MCP 在 9月23日出了。17 天內，每個主要 web 平台都有了 agent 原生層。

問題現在不是哪個平台有了，而是你為 agent 定義了多少限制可以運作。

---

## 短版金句（單獨發）

WordPress 設計積累了好幾年，因為沒有人在看。

Elementor MCP 沒有修復那個。
它只是讓每一個積累的決策——以及你設計系統裡的每一個缺口——在 agent 的輸出裡立即可見。

不是作為警告。是作為輸出。
