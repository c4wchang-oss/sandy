# Threads Post — Elyx：設計檔案格式就是 AI 整合的設計決策（繁體中文）
**主題：** Sketch 共同創辦人推出 Elyx — .elyx 檔案和程式碼並排在 Git 裡（2026年9月24日）

---

## 長篇個人觀察

過去兩年所有的 AI 設計整合，本質上都是翻譯層。

你在 Figma 裡建立設計。MCP server 讀取 binary 檔案，把它翻譯成 coding agent 可以消化的結構化 context。或者你寫一個 DESIGN.md，手動記錄你的設計系統包含什麼。或者 BRDNA Sequencer 把你的設計 artifacts 轉換成機器可讀的 training context。這些全部都是橋——橋接一個從來不是為機器設計的檔案格式，和需要讀取限制的 agents 之間的鴻溝。

Elyx 是 Sketch 共同創辦人在問：設計檔案格式本身，是不是根本問題？

.elyx 格式設計成人類可讀、AI 友善、可版本控制——可以住在 Git repo 裡、和原始碼並排的那種檔案。不是作為 export。是作為真正的設計 artifact。當你 commit 一個程式碼修改時，驅動那個修改的設計決策，在同一個 repo、同一個 history、同一個 diff 裡。

CLI 和 agent skills 是這個賭注最直接的表現。Claude Code、Cursor 和 Codex 可以直接 inspect .elyx 檔案、檢查格式、渲染設計輸出，不需要中間伺服器幫它們翻譯。設計檔案是 agent 的直接 input，不是翻譯過後的 context dump。

我覺得最有趣的是 wiki 式的連結模型。設計檔案設計成可以互相連結——不只是 components 連到 tokens，而是 screens 連到 flows 連到 use cases 連到有記錄的決策。設計作為知識圖譜，不是一個有 layers 的平面檔案。這改變了「living source of truth」在實務中的真正意義。它意味著設計檔案不只記錄東西看起來是什麼，還記錄為什麼。

誠實的說明很重要。Sketch 曾賭在 Mac 原生應用，然後輸給了 Figma 的瀏覽器協作。Local-first 是真實的 trade-off，不只是架構選擇——它優先考慮接近開發者的工作流程，而不是即時多人協作，而這恰恰是摧毀 Sketch 第一幕的原因。檔案格式的採用，歷史上是 tooling 裡最難的問題。你需要設計師和開發者都 commit 到同一個格式。私人 beta、沒有生產環境的 track record，意味著這些都還沒有被證明。

但不管 Elyx 這一輪是否勝出，訊號很重要。MCP 和 bridge 的時代可能只是過渡。我們建立的所有 constraint stacks——AGENTS.md、CLAUDE.md、design.md、DESIGN.md——都是試圖用文字手動重建設計檔案從一開始就應該編碼好的東西。更長期的解法不是更好的橋，是從第一天就為機器可讀性設計的設計格式。

Figma 也在往這個方向走。Code Layers、Code to Canvas、MCP server write tools——這些都在縮小「設計 artifact」和「機器可讀限制」之間的差距。Elyx 在做同樣的賭注，但是在檔案格式層，而不是工具 API 層。

值得密切觀察。

---

## 短版金句（單獨發）

我們花了兩年在設計檔案和 AI agents 之間建橋。

DESIGN.md。AGENTS.md。MCP servers。Constraint stacks。

這些全部都假設設計檔案格式不能改變。

Elyx 在賭的是：那個假設本身就是問題。

私人 beta，沒有生產環境的證明。但如果格式這個賭注成立，我們建的所有橋，一夜之間就變成 legacy 了。
