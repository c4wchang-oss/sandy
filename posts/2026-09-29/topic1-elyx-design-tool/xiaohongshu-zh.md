# 小紅書 Post — Elyx：設計檔案格式就是 AI 整合的設計決策（繁體中文）
**主題：** Sketch 共同創辦人推出 Elyx — .elyx 設計檔案和程式碼並排在 Git 裡（2026年9月24日）

---

**標題：**
Sketch 創辦人重新定義了「設計檔案」到底是什麼——而且這打破了現有所有 AI 整合的前提

---

**內文：**

Sketch 共同創辦人推出了一個叫做 Elyx 的新設計工具。不是 Sketch 的接班人。而是對一個問題的不同答案——那個每一個 AI 設計工具目前都回答錯了的問題。

那個問題是：我們要怎麼把設計檔案給 AI agents？

現在所有的答案都是橋。Figma MCP 讀取 binary 檔再翻譯它。DESIGN.md 手動記錄檔案包含什麼。BRDNA Sequencer 把設計 artifacts 轉成 training context。全部都是橋。

Elyx 的答案：把設計格式本身設計成不需要橋的樣子。

**Elyx 到底是什麼：**
一個「Integrated Design Environment」（整合設計環境）——名字是刻意的。.elyx 檔案是人類可讀、AI 友善、可版本控制的，住在你的 Git repo 裡和原始碼並排。Claude Code 或 Cursor 的 agent 可以直接讀你的設計檔案——不需要 MCP 翻譯層，不需要文件中間人。

**① .elyx 檔案格式是整個賭注**
設計決策以結構化、可讀的資料儲存。不是平面 canvas 圖層檔案，不是 binary blob。而是開發者可以在 code review 裡 inspect、AI agent 不需要翻譯就能讀的東西。

**② CLI + agent skills 直接存取**
AI coding agents 可以直接 inspect .elyx 檔案、檢查格式、渲染設計輸出。設計檔案變成一等公民的 input——不是下游參考的 artifact，而是可以直接工作的 live source。

**③ Wiki 式連結——被低估的功能**
.elyx 檔案設計成可以互相連結：components → screens → flows → use cases → 有記錄的決策。不是有 layers 的平面檔案，而是設計意圖的知識圖譜。這才是「living source of truth」真正需要的意思。

**④ 誠實的說明**
Local-first 是真實的 trade-off：Sketch 輸給 Figma 正是因為雲端協作贏了。目前沒有公開的協作模式。檔案格式的採用歷史上是 tooling 裡最難的問題——設計和開發兩側都要 commit。目前只有私人 beta，沒有生產環境的 track record。

**這件事的脈絡：**
DESIGN.md → AGENTS.md → BRDNA → Once UI agent harness → .elyx

這個弧線的每一步都在試圖讓設計對機器可讀。Elyx 提出的是：那個可讀性應該住在檔案格式本身——不是你在上面再建的橋。

---

**說實話：**
只有私人 beta。沒有公開的協作模式。Local-first 對分散式團隊有真實的 trade-off。檔案格式的採用需要設計和開發對齊——歷史上非常困難。

**重新框架：**
我們今年建立的所有 constraint stacks——DESIGN.md、AGENTS.md、CLAUDE.md——都是 binary 檔案格式的 workaround，那個格式從來不是為機器閱讀設計的。Elyx 不是在建另一個 workaround。它在問的是：我們從一開始就把設計格式搞錯了嗎？

---

#Elyx #AI設計 #設計工具 #設計系統 #資深UX設計師 #設計開發 #AgentNative #AI設計工具 #UX設計2026 #Sketch創辦人
