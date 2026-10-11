# Xiaohongshu Post — 繁體中文
## 主題：Impeccable — AI Coding Agent 的 Design 品質底線
## 日期：2026 年 10 月 11 日
## 格式：教學 / 實用觀點

---

**標題：Senior UX 觀點 | AI coding agent 終於有 design 品質底線了**

---

Paul Bakaus（jQuery UI 的作者）推出了 Impeccable：給 AI coding agent 的 design skill。

`npx impeccable install` — 安裝就這樣。

支援 Claude Code、Cursor、GitHub Copilot、Gemini、Codex。
Apache-2.0，免費。

---

**你的 agent 會得到：**

① PRODUCT.md — 持久保存的產品真相：受眾、目的、限制、語氣（不是風格指南，是不同的東西）
② 24 個共用指令 — audit、polish、critique、bolder、quieter、animate、shape、distill...
③ 61 條 deterministic 規則 — Rust binary，在本機執行，不需要 LLM，不需要 API key
④ 即時瀏覽器迭代 — 直接在瀏覽器裡對任何元素迭代

---

**61 條規則會抓到什麼：**

AI slop 的 tell：
- 側邊 tab 強調色邊框
- 紫色 / 紫羅蘭漸層
- 標題漸層文字
- 彈跳 / 彈性動畫
- 暗色模式 + 發光特效
- 英雄區塊 eyebrow 模式
- 巢狀卡片、放射狀光暈

一般品質問題：
- 低對比度
- 跳過標題層級
- 文字溢出 / 選單被裁切
- 觸控目標太小
- 間距太緊、行寬過長

---

**這完成的 constraint architecture 迴圈：**

生成前：
→ Thanor：第一個 prompt 前的 30 個設計值
→ Graphical：coding agent 的 GUI.md
→ Figma Library Guidelines：文件即 constraint

生成後：
→ Impeccable：agent 輸出程式碼後的 deterministic audit

品質底線現在是兩階段架構。不是 prompt，不是提醒。

---

**誠實的限制（Paul 自己說的）：**

「沒有 slop ≠ 有 taste。」

Impeccable 移除 AI 的 tell，捕捉品質問題。
它不修正錯誤的 IA，不改善糟糕的產品決策。

兩件事，Impeccable 做的是其中一件。

---

**另外：** 現在已內建在 GitHub Copilot app 中。
每個打開 Copilot 的開發者，預設就有了這個品質層。
這個討論已經離開設計工具了。

---

#UX設計 #AI工具 #設計品質 #AIDesign #ConstraintArchitecture #SeniorUX #程式設計

---

*圖片：3:4 — 見 images/xiaohongshu-3x4-zh.jpg*
