# Threads Post — Ilse（繁體中文）
# 2026年10月31日 | Senior UX Designer 視角

---

## 長文分享

「agent 看不見我看見的東西」這個問題，從第一個 coding agent 上線就存在了。

你盯著一個跑起來的 app，看到一個按鈕不對——間距不對、字重不對、顏色不對。你用文字告訴 Claude Code。Agent 改了某個東西，不一定是對的檔案，不一定是對的 component。因為它是從你的文字出發，不是從你眼睛看著的東西出發。

Ilse 是一個工具列，疊在你跑起來的 React app 上面。點擊一個元素，寫下要改什麼，Ilse 把精確的檔案路徑、行號、JSX 片段、design token 傳給你的 agent——不是你描述的內容。Agent 改程式碼，你馬上看到結果。

我想特別強調的部分：對應到 CSS class 的簡單修改，直接在頁面生效，不用 AI，不花一個 token。只有需要修改程式碼的部分，才會把任務送給 agent。這是正確的分工方式。

自動生成 DESIGN.md 是值得追蹤的細節。Ilse 讀取你的 component 和 token，寫進 agent 可以讀的結構化文件。不用手動寫文件，你的 component 就是 brief。這跟 GitHub Replica 的 `/setup-skills` 是同一個原則——先定義 constraint 再生成——但應用在跑起來的 app 層，不是 prototype 層。

Pro 版是 test mode。你描述一個使用者流程，Ilse 自動在你的真實 app 上走完，回報哪裡壞了。這是自動化的設計 QA，由一個做夠多 QA、知道所有失敗模式的人做的。

誠實的部分：只支援 React，Pro 在預購階段（11 月出貨），你需要自己有 coding agent 訂閱。是一個 solo founder 做的，他花了 9 年做設計才轉向程式碼。這份問題陳述是今年我讀過最精確的之一。

---

## 短版重點

「agent 改了錯的 component」這個問題的解法不是更好的 prompt，是指點。點擊元素，Ilse 把 agent 需要知道的東西傳過去。2026 年有三個工具確認了這個模式。Ilse 在你跑起來的 dev app 裡做到這件事。
