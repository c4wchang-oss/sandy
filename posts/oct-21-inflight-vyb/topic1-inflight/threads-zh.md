# Inflight — Threads Post (Traditional Chinese)
# Platform: Threads
# Format: Long-form personal reflection
# Date: Oct 21, 2026

---

設計流程裡的 feedback loop 一直在同一個地方斷掉。

你分享了 prototype，大家在 Slack、Loom、Notion 留下零散的留言，然後有人——通常是設計師——把所有東西讀過、整理、重新寫成 prompt，再交給工程師，或者現在是 coding agent。

那個「整理」的步驟從來都是有損耗的。你會失去脈絡、失去「這是哪個元素」的定位、失去「看起來對但感覺不對」那種細節——而那個細節通常才是最重要的部分。

Inflight 把這個迴路直接封閉了。分享連結，reviewers 把留言 pin 在 app 實際的 UI 元素上，錄影，全部透過 MCP 以結構化的 next steps 送進 Claude Code、Cursor 或 Codex。不用重打，沒有整理的中間層。

我一直在想的是：模糊的 feedback 一直都是問題，但過去是個還能管理的問題。人類工程師讀到模糊留言，會用判斷力追問。coding agent 執行模糊留言，會套用假設然後生出一個錯誤的畫面——然後下一個 agent 操作繼續堆疊在那個錯誤的畫面上。

執行者是 AI 的時候，壞 feedback 的成本以不同的方式放大。

Structured questions 這個功能比 pin 留言的 UI 更重要。真正的功夫不是用 Inflight——而是在 review 開始前就決定，哪些決策需要 feedback？怎麼把它們框成問題？這是把 brief writing 的紀律帶進設計 review 流程。大多數設計團隊現在不這樣做，而一個工具不會自動讓他們開始。

誠實評估：需要在 HTML 加 script tag，支援 deployed apps，內建 Slack 同步。如果你的團隊已經在做 prototype review，而且你在把 feedback 傳給 coding agent，這工具封閉了一個真實的缺口。

真正的考驗是團隊會不會寫更好的問題，還是把一樣模糊的留言丟進比較漂亮的介面。
