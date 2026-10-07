# Topic 2: Figma Agent Library Guidelines — 小紅書 Post (Traditional Chinese)
**Date:** 2026-10-07
**Platform:** 小紅書 (Xiaohongshu / RED)
**Format:** Practical review / tutorial
**Image:** figma-guidelines-xhs-zh.jpg (3:4)

---

**Title:** Figma Agent 正式 GA！設計系統團隊現在必須設定的一個新功能

**Body:**

Figma agent 昨天（10/6）正式 GA 了。付費方案，點數開始計費。但在 release notes 裡埋著一個改變設計系統文件是什麼的功能。

**新功能：Library Guidelines（函式庫 Guideline）**

上傳 Markdown 文件到任何已發佈的 Figma 設計函式庫。每次有人用那個函式庫下提示詞，agent 會自動讀取——不需要貼文件，不需要記得加 context。

設定方式：

1. 開啟包含已發佈函式庫的 Figma 文件
2. 文件選單 → Library → Manage guidelines
3. 上傳 `.md`、`.txt` 或 `.json` 文件
4. 點擊 Apply changes

完成。每個使用那個函式庫的 agent 工作階段現在都有你的文件作為 context。

**Guideline 文件要寫什麼：**

Figma 建議 3–8 個專注的文件，總大小低於 100 KB。建議結構：
- `overview.md` — 函式庫介紹，裡面有什麼，agent 應該先知道什麼
- `components.md` — 何時用哪個元件，不是元件是什麼
- `anti-patterns.md` — 不應該做什麼以及為什麼（這是最有價值的文件）
- `best-practices.md` — 慣例，有 context 的 do/don't 範例
- `examples.md` — 模式如何組合在一起的真實範例

每條規則寫成情境形式：情況 → 應該做什麼 → 應該避免什麼 → 為什麼。這是決策邏輯，不是參考內容。

**為什麼 DesignOps 團隊現在需要做這件事：**

- 重複的資訊 = 更高的處理時間 + 消耗更多點數。在團隊規模下，冗餘的 guideline 是要花錢的。
- 從不好或缺少 guideline 工作的 agent 會做出你的團隊一直要手動糾正的決定——那才是昂貴的結果。
- Guideline 品質 = 你的設計系統的 agent 輸出品質天花板。

**重要框架：**

設計系統文件和 agent constraint 以前是兩個獨立的工作。現在它們是同一個工作。最好的 `anti-patterns.md` 是一個加入你團隊的新設計師也會覺得真正有用的文件。

寫一次。兩種受眾：人類和跟他們一起工作的 agent。

**GA 還有的功能：** 隊友的 agent 在 canvas 上可見——你可以即時看到或跟隨同事的 agent 正在做什麼。Agent 可視性，原生在 Figma 裡。

趁你的團隊 agent 使用量還沒增長、治理債務還沒累積之前，這週就設定好。

#FigmaAgent #設計系統 #DesignOps #AI設計 #Figma更新 #ConstraintArchitecture #UX設計 #產品設計 #設計工具 #Agent協作

