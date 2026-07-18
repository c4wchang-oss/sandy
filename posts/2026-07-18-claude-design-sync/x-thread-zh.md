# X Thread — Claude Design + /design-sync（繁體中文）
**主題：** Claude Design（Anthropic）——透過 /design-sync 在設計 canvas 和程式碼之間雙向同步
**角度：** Anthropic 建了一個設計工具。但 canvas 不是重點。一個命令改變了交付流程。
**格式：** 8 則推文串

---

**Tweet 1（Hook）**
Anthropic 推出了設計工具。

但我不想聊那個 canvas。

我想聊一個命令：

`/design-sync`

因為它不只是把設計和程式碼連起來。它消滅了我們所知道的交付流程。 🧵

---

**Tweet 2**
Claude Design 是 Anthropic 的視覺 canvas。Prototype、簡報、one-pager。所有付費 Claude 方案都能用。

你可以從 GitHub repo 匯入你的設計系統。Claude 讀取你的元件、token 和樣式規則——然後針對你真實的系統生成，不是通用的 template。

這個部分很好。但這不是有趣的部分。

---

**Tweet 3**
有趣的部分是：雙向。

`/design-sync` 從你的 Claude Code 終端機執行。

Pull → 它讀取你的 codebase，把你的設計系統匯入 Claude Design。現在你是在針對真實元件設計。

Push → 在 Claude Code 裡完成了東西？把它推回 canvas。它進來時是可編輯的，準備好做視覺修飾。

一個命令。兩個方向。

---

**Tweet 4**
把經典的交付問題說清楚：

設計師做 Figma 檔 → 匯出 spec → 工程師用程式碼重建 → 過程中失去設計意圖 → 那個畫面之後再也沒人打開 Figma。

我合作過的每個團隊都有一個「只存在於 dev 的畫面的墓地」，因為讓兩邊保持同步的成本太高了。

---

**Tweet 5**
/design-sync 改變了這個模式：

Codebase 是唯一的 source of truth。Canvas 是你在任何時間點都可以重新進入的渲染層。

在 Claude Design 建東西 → 用一個指令交付給 Claude Code → 在程式碼裡迭代 → 需要看到它時推回 canvas。

循環不會斷裂。設計意圖不會消失。

---

**Tweet 6**
還有一個細節很重要：安全模型。

Claude 不會靜默地覆寫任何東西。它生成一個計劃——我要寫什麼、我要刪什麼、執行順序是什麼——然後等你批准再執行。

這是 AI agent 應有的工作方式。這也是工程師為什麼會真的信任它的原因。

---

**Tweet 7**
從 Senior UX 的角度：

20 年來，設計師的籌碼是交付文件——Figma spec、Zeplin 連結、標注好的匯出檔。

/design-sync 改變了那個籌碼。設計師的工作現在活在餵給 sync 命令的設計系統裡——token、元件、constraint。

交付文件變成了一個命令。Constraint 架構變成了工作本身。

---

**Tweet 8**
真正的標題不是「Anthropic 與 Figma 競爭」。

而是：交付流程現在是一個 merge 操作，不是一份文件。

`/design-sync` 是設計意圖的 git pull request。

這重新定義了 Senior 設計師應該建立什麼——以及他們的籌碼真正在哪裡。

