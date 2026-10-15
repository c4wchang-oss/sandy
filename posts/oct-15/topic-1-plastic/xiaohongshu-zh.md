# Xiaohongshu 貼文 — Plastic（繁體中文）

---

**標題：** 這個設計工具沒有 export 步驟。畫布就是程式碼。

**內文：**

我用過的每個設計工具都有同樣的假設：設計是一張介面圖片，讓別人重建成程式碼。

Plastic 在根本層面拒絕了這件事。

**Plastic 實際上是什麼：**

畫布是真實的 HTML 和 CSS。你在畫布上畫圖、排版、設定樣式——你儲存的檔案就是介面本身。沒有 export。不需要工程師重建。沒有翻譯步驟。

**AI agent 如何在其中運作：**

1️⃣ **MCP 原生連接** — Claude Code、Codex、Cursor 和 Grok 都直接連接。它們讀取真實的設計結構（不是截圖），在你觀看時即時在畫布上做出改變。

2️⃣ **每一步都可以 undo** — Agent 的編輯是可逆的。你可以用一步還原任何東西。

3️⃣ **受設計約束** — Agent 可以讀取程式碼來複製外觀，但無法編輯檔案或執行系統指令。它們只能透過 Plastic 自己的工具運作。這是保護生產檔案的 constraint 架構。

4️⃣ **Comments → agent 解決** — 在任何 frame 或 layer 上留下備註。把討論串發送給 agent。它做出每個改變，完成後解決留言。

5️⃣ **Figma 匯入** — 把 .fig 檔案拖入 Plastic。Pages、frames、auto layout、文字、圖片、variables → 可編輯的 HTML/CSS。保留你現有的工作。

**為什麼這對資深設計師很重要：**

交接變成分享 frame 連結。工程師和編碼 agent 從有 token 的真實語義 HTML/CSS 出發——不是需要被解讀的截圖。

設計到程式碼的落差沒有被填補。在這個模型中它根本不存在。

**需要誠實的地方：**

- 僅限邀請的預覽版（瀏覽器 + Apple Silicon Mac 應用程式；Windows 即將推出）
- 針對 web 介面優化——不適用於行動原生、複雜設計系統，或 Figma 規模的動態效果庫
- 目前沒有公開定價
- 「無需重建」的承諾完全取決於你的元件和 token 保真度

**這符合的更大模式：**

這是今年第三個押注二進制設計檔案格式是真正問題（不只是要解決的約束）的工具。

Elyx（9/29）— 新的人類可讀、AI 友善檔案格式
Timeful（10/5）— Vue/Tailwind 畫布，編輯直接寫入真實程式碼
Plastic — HTML/CSS 畫布，設計本身就是介面

Constraint stack 時代（AGENTS.md、CLAUDE.md、design.md）在二進制格式上架橋。這些工具押注格式本身需要消失。

這是一個更根本的主張。

useplastic.app

#UX設計 #AI工具 #設計工作流程 #產品設計 #資深設計師 #Plastic #無需Export #設計轉程式碼 #HTML設計 #編碼Agent

---
