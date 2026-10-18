# Threads — Melius Brand Kits — 中文
# Oct 18, 2026 | 16:9 圖片 → x-threads-16x9-zh（與 X 共用）

---

Melius 昨天推出 Brand Kits，這個機制值得理解一下。

你貼上官網 URL（或上傳品牌規範），agent 解析品牌風格，生成一個「brand anchor」——一個 Markdown 文字區塊，包含色票 hex 代碼、字型名稱、攝影風格規則、造型語言、明確的 do's and don'ts。壓縮進一個文字區塊，一次就能讀完。

然後你把這個文字區塊放到畫布上當作節點，拉 edge 連到你的圖片和影片生成節點。後續所有生成都自動把 anchor 讀進 context。視覺化的 constraint 路由——你可以直接看到哪些節點有品牌約束。

MCP 整合完成閉環：連接 Claude + Melius MCP，指向你 project 裡的 brand.md 檔案，Claude 就會自動把品牌 context 注入它建的每個畫布。不用在 session 之間複製貼上。

誠實的限制：brand anchor 活在 canvas 層面，不同畫布之間不會自動攜帶。每個新畫布是全新的 context。MCP 是目前最好的答案，但需要設定。

我一直在追蹤的 pattern：Automo（10/13）讓品牌 constraint 透過 MCP 攜帶到 Claude。Linearity AI（10/17）讓 brand kit 品質成為 AI 設計輸出的天花板，而不是模型本身。Melius Brand Kits 從你的真實官網自動化生成 anchor。三個不同工具，同一個底層洞見：brand kit 品質是 AI 創意生產的關鍵變數——不是模型能力，不是 prompt 技巧。

品牌治理以前是靠 review cycle 執行的文化實踐。現在的編碼模型不一樣了：規則住在文字區塊裡，用 canvas edge 連接，由 MCP server 注入。流程層治理正在變成工具層治理。你的品牌團隊如果是最後一組還不了解這件事的，值得注意。
