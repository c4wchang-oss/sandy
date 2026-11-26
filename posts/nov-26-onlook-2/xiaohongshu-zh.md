# 主題一：Onlook 2.0
# 平台：小紅書
# 語言：繁體中文
# 日期：2026 年 11 月 26 日

---

## 標題
Onlook 2.0 免費開源，Canvas 直接蓋在真實 codebase 上，資深設計師的完整解析

---

## 正文

Onlook 在 11 月 19 日發布了 2.0 版。免費。開源（Apache 2.0）。Mac 桌面 app。把一個 live canvas 疊在你實際運行的 production codebase 上——不是 mockup，是真實產品。

完整情況：

**→ 它是什麼**
匯入任何 Git repo 或本地資料夾。Onlook 建立一個 git worktree（新分支上的安全副本——你的主要 checkout 永遠不被觸碰），用你專案自己的指令啟動 dev server，在 canvas 的 frame 中顯示運行中的 app。每個 frame 是一個真實瀏覽器 webview，顯示帶著真實資料的你的實際產品。

**→ BYOA：帶上你自己的 Agent**
Onlook 不附帶自己的模型。用你已經擁有的 Claude Code 或 ChatGPT 訂閱連接。Agent 在你的機器上運行。原始碼編譯：不需要 Onlook 帳號、雲端金鑰或 .env 檔案。Apache 2.0 開源授權。

**7 件值得知道的事：**

1. **Git worktree = 安全、非破壞性的探索** — Onlook 在獨立分支上建立 worktree。你的主要 checkout 永遠不被觸碰。更改只通過一般 PR 到達 repo。自由探索，在合併前審查。

2. **視覺指向解決「哪個元素？」的問題** — Onlook 在每個 frame 注入一個腳本。點擊元素 → agent 取得精確的檔案路徑、component 名稱和程式碼 context。不是截圖描述——是實際的檔案參考。和 Skisso（live CSS）及 Ilse（dev app）是同樣的原則。

3. **多版本探索** — 要求某個畫面的 10 個版本。所有 10 個都作為獨立的 live frame 出現在 canvas 上，每個都是你實際運行的產品。Preview 模式：像真實使用者一樣與任何版本互動。每個版本一個 git worktree。

4. **這是視覺指向的第四個確認實例** — MagicPath（canvas，10 月 1 日）→ Skisso（live CSS，10 月 19 日）→ Ilse（dev app，10 月 30 日）→ Onlook（production repo，11 月 19 日）。模式確立：在每個需要發生更改的層次，指向都勝過描述。

5. **與 Dessn（11 月 22 日）比較** — 兩者都是 canvas = production code。Dessn 是雲端優先、MCP 遠端 OAuth、Figma 式 UI。Onlook 是本地優先、桌面 app、免費、開源。相同的終態，不同的信任模型和價格。Dessn：每月 50 次 MCP 呼叫免費（讀取也算）。Onlook：免費，你的機器，你的資料。

6. **Skills 上限依然適用** — BYOA 意味著你的 skills 文件（DESIGN.md、設計系統的 agent skills）決定輸出品質。Canvas 免費。Brief 智識是你需要建立的——和 Cursor 或 Claude Code 中相同的約束。

7. **目前的限制** — 僅支援 Mac（Windows 即將推出）。AI 功能需要 Claude 或 ChatGPT 訂閱。v2.0.2，仍然早期。前一版 v1 專門用於 React+Tailwind；v2 覆蓋更廣，但請先驗證你的技術堆疊。

**誠實的重新定框：**

這不是「AI 設計工具」。是 production codebase 的設計師 canvas 層。BYOA 意味著你的 agent 訂閱和你的 skills 隨著你進入 canvas，不受 Onlook 的模型選擇鎖定。

免費下載：onlook.com/install

---

#Onlook #AI設計工具 #開源工具 #UX設計 #設計工具 #產品設計 #BYOA #設計工作流 #設計系統 #資深設計師 #AI工作流 #canvas #本地優先 #codingAgent

---
