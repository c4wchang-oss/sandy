# Topic 2: Figma Agent Library Guidelines — X Thread (Traditional Chinese)
**Date:** 2026-10-07
**Platform:** X (Twitter)
**Format:** 8-tweet thread
**Image:** figma-guidelines-x-threads-zh.jpg (16:9)

---

**Tweet 1 — Hook**
Figma agent 昨天 GA 了，有個功能大多數人滑過去了：

你現在可以上傳 Markdown 文件到設計函式庫，agent 會自動讀——每一次有人用那個函式庫下提示詞都會讀。

---

**Tweet 2**
這實際上是什麼：

前往 Library → Manage guidelines → 上傳 `.md`、`.txt` 或 `.json` 文件。
建議結構：`overview.md`、`components.md`、`anti-patterns.md`、`best-practices.md`

3 到 8 個專注的文件。總大小低於 100 KB。Agent 在回應之前讀完整個文件集。

---

**Tweet 3**
為什麼這比聽起來重要得多：

你的設計系統已經在某個地方有文件——Confluence、Notion、Zeroheight、一個被遺忘的 Figma 文件。
現在那份文件也可以成為 agent 在其中運作的 constraint。

一份文件。兩種受眾：人類和 agent。

---

**Tweet 4**
Figma 的格式建議值得仔細閱讀：

→ 描述指引適用的情境
→ 應該做什麼
→ 應該避免什麼，以及為什麼

這不是 style guide 的寫法。這是決策邏輯。
Agent 讀這些文件的方式跟一個好的承包商讀簡報一樣——是為了在情境模糊時知道要怎麼決定。

---

**Tweet 5**
沒有人在討論的治理意涵：

guideline 文件之間重複的資訊會增加處理時間和 AI 點數消耗。
冗餘的 guideline 在團隊規模下是要花錢的。

Guideline 品質現在是一個經濟效率問題，不只是內容品質問題。

---

**Tweet 6**
這延伸了我一直在追蹤的 constraint 文件堆疊：

AGENTS.md（程式碼 agent）→ CLAUDE.md（agent 行為）→ design.md（Vercel）→ DESIGN.md（Onefold）→ Library guidelines.md（Figma 原生）

這裡的差別：它附加在函式庫本身。不是要另外維護的文件。不是要記得加入的提示詞。

---

**Tweet 7**
Figma agent GA 還有的功能：隊友的 agent 現在可以在 canvas 上看到了。

點開 chat pile → 看或跟隨同事的 agent 在同一個文件裡正在做什麼。

Agent 可視性內建在設計工具裡。不是 log。不是儀表板。同一個 canvas。

---

**Tweet 8 — CTA**
重新框架：

設計系統文件和 agent constraint 以前是兩個不同的工作。
Figma 剛讓它們變成同一個工作。

如果你的團隊開始認真使用 Figma agent，設計系統團隊現在最有價值的事情就是寫 `anti-patterns.md`。

不是給人類的。是給會跟他們一起工作的 agent 的。

