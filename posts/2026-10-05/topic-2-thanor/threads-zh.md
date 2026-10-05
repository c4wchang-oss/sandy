# Topic 2: Thanor AI — Threads Post (Traditional Chinese)
**Date:** 2026-10-05
**Platform:** Threads
**Format:** Long-form personal reflection
**Image:** thanor-x-threads-zh.jpg (16:9)

---

Thanor 這週上線了，帶著一個直接也真實的主張：「努力多提示沒有用。」

這是一個 AI 工具的設計方向庫。不是 template，不是元件套件。是純粹的約束規格：每個設計方向大約 30 個具體數值——有角色名稱的 hex 色值、有實際 px 尺寸的字型比例、一個間距基礎單位和它唯一允許的倍數、一條帶毫秒時長的緩動曲線，還有一個頁面 section 順序。你在第一個 prompt 之前把這個貼進去。模型就不再回頭找它的預設值了。

我已經寫了幾個月「Brief 品質才是 AI 設計真正的上限」這件事。同樣的洞察出現在 DESIGN.md（在 prompt 之前把設計規則寫下來）、BRDNA Sequencer（品牌 DNA 轉為機器可讀 context）、Once UI 2.0（把約束文件打包進 npm package 一起發布的設計系統）裡。它們都是同一個洞察的變體：模型能力夠了。缺的是一個精確到足以防止預設行為的規格書。

Thanor 是把這個洞察做成了一個產品。

Thanor 有一個值得注意的細節：你選設計方向的方式是看實際輸出的螢幕錄影，不是讀設計名稱。這是誠實的產品設計——你是在看結果選，不是在想像一個名字代表什麼。

他們也有 MCP server（唯讀、OAuth、沒有 repo 存取），可以直接在 Claude Code 或 Cursor 裡拉入設計方向，不需要切換視窗。

誠實評價：這是一個訂閱別人設計決策的服務。3 個月 $89，終身 $299。這本身是合理的服務。值得知道的是，上限仍然是你的——Thanor 解決了地板問題（AI slop、Inter、紫色漸層），但判斷的天花板——什麼樣的設計適合這個產品、這個受眾、這個時刻——完全沒有被觸及。那個部分不在任何庫裡。

但對現在正在做網站的 builder 來說？就算你最後決定自己寫，這個 30 值規格格式本身值得了解。
