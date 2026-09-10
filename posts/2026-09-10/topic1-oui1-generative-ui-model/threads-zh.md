# Topic 1: OUI-1 — 全球首個開源生成式 UI 模型
# Platform: Threads | Language: Traditional Chinese
# Date: Sep 10, 2026 | Format: 長篇個人反思
# Source: https://www.openui.com/blog/oui-1 (Sep 8, 2026)

---

本週出現了第一個專為 UI 生成訓練的開源模型。Thesys 在 9 月 8 日發布了 OUI-1。

最關鍵的一點：這個模型從 system prompt 讀取你的 component library TypeScript 型別簽章。你的設計系統就是 system prompt 的內容。

我講了好幾個月「設計系統品質是 AI 輸出品質的天花板」。OUI-1 讓這句話變得字面上為真，而且是以一種我沒有預期到的方式。這個模型對「好 UI 應該長什麼樣」沒有自己的意見 — 它的限制完全由你的 component library 定義。Props 命名模糊，生成的 UI 就模糊。Variants 沒有文件，模型就自己猜。Edge cases 沒處理，生成的介面就在 edge cases 出錯。你一直在推遲的設計系統技術債，找到了一種新的展示格式。

Benchmark 說 71.7% 結構有效性。工程上令人印象深刻，但結構有效性不是我在乎的測試。這個 benchmark 評分的是 parser 能不能接受輸出 — 元件圖能不能解析、必要的 props 是否存在、是否有有效的根元件。它不評分「使用者能用這個介面完成任務嗎」。那個空隙，是設計判斷力居住的地方，而且它不在 benchmark 分數裡。

本地推論也值得說：OUI-1 可以在 RTX 5090 以 FP8 執行。你的 component library 不需要上傳到 API。對敏感的客戶工作，這不是效能考量 — 這是架構層面內建的資料治理決策。

誠實地說：我們現在在「結構有效性」，距離「可用的產品」還有距離。從有效的元件圖到幫助使用者完成真實目標的介面，還需要層級決策、流程邏輯、錯誤處理設計、無障礙標籤。這些都不在 parser 分數裡。讓我做了這麼多年的工作，不在 benchmark 裡。

但方向是對的。撰寫 component 型別簽章的設計師，就是在寫 OUI-1 遵循的規則。

---

**短版：**
設計系統品質一直是 AI 輸出的天花板。
OUI-1 讓這句話在模型層變得字面上為真。
你的 TypeScript props 現在是模型的 brief。
