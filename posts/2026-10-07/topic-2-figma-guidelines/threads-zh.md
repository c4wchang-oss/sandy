# Topic 2: Figma Agent Library Guidelines — Threads Post (Traditional Chinese)
**Date:** 2026-10-07
**Platform:** Threads
**Format:** Long-form personal reflection
**Image:** figma-guidelines-x-threads-zh.jpg (16:9)

---

昨天 Figma agent GA 裡有個東西值得比它得到的更多關注。

你現在可以上傳 Markdown 文件到已發佈的 Figma 設計函式庫。這些文件成為 agent 自動讀取的 guideline——每次有人用那個函式庫啟用 agent 下提示詞，這些文件都會在 agent 回應之前在背景提供給它。Library → Manage guidelines → 上傳。支援格式：`.md`、`.txt`、`.json`。建議：3 到 8 個專注的文件，總大小低於 100 KB。

Figma 自己的文件建議：`overview.md`、`components.md`、`anti-patterns.md`、`best-practices.md`、`examples.md`。他們建議每條規則的格式不是 style guide 條目——是決策情境：這是情況，這是應該做什麼，這是應該避免什麼，這是原因。那是一份 brief 的結構，不是參考文件。

這在實際中意味著什麼：你的團隊已經在維護——或者應該維護——的設計系統文件，現在同時也是 agent 在其中運作的 constraint。你不是在寫兩件事。同一份向新設計師解釋為什麼你有兩個不同 card 元件以及何時使用哪個的文件，就是告訴 agent 在生成儀表板時不要再發明第三個 card 元件的文件。

我追蹤 constraint 文件堆疊模式已經幾個月了：程式碼 agent 的 AGENTS.md、agent 行為的 CLAUDE.md、`design.md`（Vercel）、`DESIGN.md`（Onefold 的自助工具），現在是 Library guidelines.md——原生在 Figma 本身，附加在函式庫上，自動提供，不需要任何人記得要加入它。這裡發生的漸進式變化是：constraint 文件越來越靠近它們所約束的 artifact。Graphical（也是本週）對 coding agent 做了這件事，方式是在 token 旁邊一起出貨 `GUI.md`。Figma 對設計 agent 做了這件事，方式是把 guideline 附加到驅動它的函式庫上。

一個來自 Figma 文件的治理細節很容易被忽略：guideline 文件之間重複的資訊會增加處理時間和 AI 點數消耗。如果你的 `components.md` 和 `best-practices.md` 都解釋了同樣的 card 元件行為，你為同一條指令付了兩次——在團隊規模下，這會累積。Guideline 品質現在是一個經濟效率問題。DesignOps 剛獲得了一個新範疇。

GA 裡我想提的另一個功能：隊友的 agent 現在在同一個 canvas 上可見了。你可以即時看到或跟隨同事的 agent 在共享文件裡正在做什麼。Agent 可視性——不是在 log 裡，不是在儀表板裡——在實際的設計 canvas 上。這改變了在 agent 是常規協作者的團隊裡「一起在一個文件上工作」是什麼意思。

我一直在回想的重新框架：設計系統文件和 agent constraint 以前是兩個不同的工作。一個為試圖理解意圖的人類寫的。一個為需要決策規則的機器寫的。Figma 剛讓它們變成同一個工作。最好的 `anti-patterns.md` 文件是一個新設計師也會覺得真正有用的文件。

為兩種受眾寫作。這是現在的技能。

