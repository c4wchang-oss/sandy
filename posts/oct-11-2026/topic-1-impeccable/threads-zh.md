# Threads Post — 繁體中文
## 主題：Impeccable — AI Coding Agent 的 Design 品質層
## 日期：2026 年 10 月 11 日
## 格式：長篇個人反思

---

我在生產環境中建立過 constraint architecture 系統。AI coding 工具的問題從來不是能力，而是沒有人告訴 agent，對你的特定產品而言，好設計長什麼樣子。

Impeccable 是 Paul Bakaus 對這個問題的回答。他建立了 jQuery UI，在 Google Developer Relations 工作多年，他很清楚在規模上 ship UI 是什麼意思。

`npx impeccable install` 在你的 AI coding harness 裡設置一個 design skill——Claude Code、Cursor、GitHub Copilot、Gemini、Codex 全都支援。同樣的 24 個指令，同樣的 61 條 deterministic 規則，在你可能切換的每個 agent 上都有同樣的共用設計詞彙。

這個架構有兩個值得分開說的部分。

第一：PRODUCT.md。不是風格指南，不是 component library。而是一份記錄產品真相的文件——受眾、目的、操作情境、限制、語氣、依據。這是過去因為沒人寫下來而讓初級開發者搞錯的資訊。現在它是 machine-readable 的，agent 在每個與設計相關的指令前都會讀它。這和 DESIGN.md 或 GUI.md 是不同的類別——那些是視覺方向，PRODUCT.md 是產品真相。把它們混在一起，是大多數 AI design brief 真正崩壞的地方。

第二：61 條規則。一個在本機執行的 Rust binary，不需要 LLM，不需要 API key。它掃描 HTML、CSS、JSX、TSX、Vue、Svelte 檔案，標出 AI slop 的 tell（側邊 tab 強調色邊框、紫色漸層、彈跳動畫、標題漸層文字、暗色發光特效）以及一般品質問題（低對比度、跳過標題層級、觸控目標太小、文字溢出、間距太緊）。就是每個 senior designer 在 design review 前腦中跑過的那份清單——現在自動化，在每次 ship 前執行。

對我來說，這完成了我今年一直在追蹤的 constraint architecture 迴圈。

生成前：Thanor（第一個 prompt 前的 30 個設計值）、Graphical（coding agent 的 GUI.md）、Figma Library Guidelines（文件即 constraint，跟著 library 走）。生成後：Impeccable（agent 輸出程式碼後的 deterministic audit）。

品質底線現在是兩階段架構。不是你 prompt 裡的提醒，不是你不趕時間時才記得加的東西。

誠實的限制，來自 Paul 本人：「沒有 slop 並不等於有 taste。」Impeccable 移除 AI 的固定模式，捕捉品質問題。它不改善你的資訊架構，不修正錯誤的產品決策。兩件不同的事，Impeccable 做的是其中一件。

而且它現在已內建在 GitHub Copilot app 裡了。每個打開 Copilot 的開發者，預設就有了這個 design 品質層。Constraint architecture 的討論已經離開設計工具了——它在那些不認為自己是設計師的開發者預設使用的 coding harness 裡，而介面品質問題實際上大多就住在那裡。

---

*圖片：16:9 — 見 images/x-threads-16x9-zh.jpg*
