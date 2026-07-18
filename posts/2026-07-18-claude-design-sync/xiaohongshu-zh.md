# 小紅書貼文 — Claude Design + /design-sync（繁體中文）
**格式：** 教學/觀點混合，emoji 分區，hashtag 放最後
**封面：** 3:4 比例圖

---

**標題：** Anthropic 的設計工具根本不是在跟 Figma 競爭——它是在消滅交付文件這件事本身

---

Claude Design 這週推出了。Anthropic 的視覺 canvas，用來做 prototype、簡報和 one-pager。

大多數報導：「又一個 AI 設計工具！Figma 有對手了！」

我真正在意的：一個叫 `/design-sync` 的命令，在終端機執行，改變了設計和程式碼的關係方式。

---

🔍 **/design-sync 實際上做什麼**

這是你在 Claude Code（Anthropic 的 coding agent）裡執行的命令：

**Pull 方向：**
- Claude 讀取你的 codebase
- 匯入你真實的元件、顏色 token、字型、間距規則
- 把它們拉進 Claude Design 作為你的設計系統
- 現在每個生成的畫面都使用你真實的系統，不是 template

**Push 方向：**
- 在 Claude Code 裡完成一個東西
- 跑 /design-sync 把它推回 canvas
- 它進來時是可編輯的，準備好做視覺修飾

一個命令。設計 → 程式碼 → 設計。雙向。

---

🛠️ **實際的 workflow**

1. 透過 `/design-sync` 把 Claude Design 連到你的 repo
2. 用你真實的元件在 Claude Design 裡做 prototype
3. 用一個指令把它交付給 Claude Code
4. 在程式碼裡迭代
5. 需要做視覺調整？推回 canvas
6. 重複，設計意圖不會流失

不需要截圖。不需要重新標注。不需要過期的 spec 文件。

---

💡 **為什麼這對 Senior 設計師很重要**

傳統的交付流程每次都用同樣的方式失敗：

設計師做檔案 → 匯出 spec → 工程師用程式碼重建 → 失去設計意圖 → 那個畫面之後沒人再打開 Figma

每個團隊都有一個「只存在於 dev 的畫面的墓地」。

/design-sync 用一個命令取代了交付文件。你的設計系統（token、元件、constraint）才是會帶走的東西——不是 spec PDF。

---

⚙️ **安全模型（這個部分很重要）**

Claude 不會靜默地覆寫你的檔案。

它生成一個計劃：它要寫什麼、要刪什麼、執行順序是什麼。你審查並批准。然後它才執行。

這就是工程師為什麼會真的信任這個 workflow，而不只是容忍它。

---

✅ **現在真正有用的對象**

→ 已經在用 Claude Code 的團隊——sync 是原生的，沒有設定摩擦
→ 靠近程式碼工作的設計師——不用換工具就有視覺層
→ 設計系統負責人——你的 token 架構現在是餵給 sync 的東西

---

⚠️ **誠實的補充**

- 需要 Claude Pro/Max/Team/Enterprise 訂閱
- Canvas 的 WYSIWYG 編輯還不錯，但精度還沒到 Figma 的水準
- 最適合早期 prototype 和交付，不是最終 pixel-perfect 的生產檔案
- 設計系統匯入在結構清晰的 repo 上效果最好

---

真正的標題：交付流程現在是一個 merge 操作，不是一份文件。

`/design-sync` 是設計意圖的 git pull request。

#ClaudeDesign #Anthropic #設計交付 #AI設計 #UX設計 #設計系統 #ClaudeCode #產品設計 #設計工作流程 #設計師必看

