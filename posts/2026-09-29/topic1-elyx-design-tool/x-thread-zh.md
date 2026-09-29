# X Thread — Elyx：設計檔案格式就是 AI 整合的設計決策（繁體中文）
**主題：** Sketch 共同創辦人推出 Elyx — .elyx 檔案和程式碼並排住在 Git repo 裡（2026年9月24日）
**角度：** 所有的 AI 設計整合都在試圖架橋，讓 binary canvas 檔案變成機器可讀的限制。Elyx 問的是：檔案格式本身是不是那個根本問題？

---

**Tweet 1 / Hook**
Sketch 共同創辦人剛推出了一個新設計工具。

不是因為 Figma 太貴。

而是因為他們認為：設計檔案格式，才是 AI 整合一直需要中間層的原因。

---

**Tweet 2**
整個賭注就在 .elyx 格式上。

人類可讀。AI 友善。可版本控制。住在你的 Git repo 裡，和原始碼並排。

「Integrated Design Environment」——這個命名是刻意的。它說的是：設計檔案應該像程式碼檔案一樣運作。

---

**Tweet 3**
想想每一個 AI 設計整合到底是什麼。

Figma MCP → 讀取 binary .fig 檔，再翻譯成結構化 context
DESIGN.md → 手動把檔案裡已有的東西再記錄一次
BRDNA Sequencer → 把設計系統的 artifacts 轉換成機器可讀的 training context

每一個都是橋。

Elyx 的問題是：為什麼不直接設計一個不需要橋的檔案格式？

---

**Tweet 4**
CLI 和 agent skills 才是真正的考驗。

AI coding agents（Claude Code、Cursor、Codex）可以直接 inspect .elyx 檔、檢查它、格式化它、渲染設計輸出——不需要中間伺服器。

如果這行得通，設計檔案就變成開發流程裡的一等公民 artifact。不是交付物，是 live source。

---

**Tweet 5**
wiki 式的連結模型是被低估的部分。

.elyx 檔案設計成可以拆分、互相 import、wiki 式地連結——不只是 components，還有 screens、flows、use cases。

設計決策以關係的方式存儲，不是平面檔案裡的 layers。

這才是「living source of truth」一直以來真正需要的意思。

---

**Tweet 6**
誠實的說明：

Sketch 曾賭在 Mac 原生應用，然後輸給了 Figma 的 cloud-first 策略。Local-first 是再一次往反方向走。

檔案格式的採用，歷史上是 tooling 裡最難的問題。你需要設計和開發兩側都 commit。

目前私人 beta，沒有生產環境的 track record，沒有公開的協作模式。

---

**Tweet 7**
不管 Elyx 最終是否勝出，這件事的訊號是：

MCP 和 bridge 的時代可能只是過渡期。更長期的解法是設計格式從一開始就為機器可讀性設計。

Figma 也知道這件事——Code Layers 和 Code to Canvas 都是朝那個方向的步驟。Elyx 是賭整個檔案格式都能是那個答案。

---

**Tweet 8 / CTA**
設計檔案一直對 agent 來說是黑箱。

MCP servers、DESIGN.md、AGENTS.md、constraint stacks——全部都是 binary 格式的 workaround，那個格式從來不是為機器閱讀設計的。

Elyx 不是另一個 workaround，是對同一個問題的不同答案。

值得觀察。

→ elyx.design（私人 beta 報名開放中）
