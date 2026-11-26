# 主題一：Onlook 2.0
# 平台：X（Twitter）Thread
# 語言：繁體中文
# 日期：2026 年 11 月 26 日
# 來源：Onlook Substack（onlook.substack.com）、GitHub（github.com/onlook-dev/onlook），2026 年 11 月 19 日

---

## X THREAD

**[Tweet 1 — Hook]**
Onlook 上週發布了 2.0 版。免費。開源。Mac。

Canvas 坐在你實際運行的 codebase 上面。

BYOA——帶上你自己的 Claude Code 或 ChatGPT。你的訂閱。你的機器。你的程式碼。

這是不同類型的 canvas。🧵

---

**[Tweet 2]**
它實際上是什麼：

→ 匯入任何 Git repo 或本地資料夾
→ Onlook 建立一個 git worktree（安全副本、獨立分支——你的主要 checkout 永遠不被觸碰）
→ 用你專案自己的 dev 指令啟動 dev server
→ 在 canvas 的 frame 中顯示運行中的 app

每個 frame 是一個真實瀏覽器 webview。不是 mockup。不是截圖。你的實際產品，帶著真實資料運行著。更改只通過一般 PR 到達 repo。

---

**[Tweet 3]**
BYOA 架構：

Onlook 不附帶自己的模型。用你已經擁有的 Claude Code 或 ChatGPT 訂閱連接。Agent 在你的機器上運行，不在 Onlook 的伺服器上。

原始碼編譯（Apache 2.0）：不需要 Onlook 帳號、雲端金鑰或 .env 檔案。

這是 BYOA canvas 模式的第一個開源、免費、本地優先的實作。Wonder（10 月 27 日）把 BYOA 引入設計 canvas 作為商業產品。Onlook：同樣的模式，production codebase，免費。

---

**[Tweet 4]**
視覺指向機制：

Onlook 注入一個小腳本，繪製選取框並讀取頁面。

當你點擊一個元素說「把這個做成 card 佈局」，agent 收到的不是截圖描述——而是精確的檔案路徑、component 參考和行級 context。

這是視覺指向作為 agent context 的模式，第四次確認：
MagicPath（canvas，10 月 1 日）→ Skisso（live CSS，10 月 19 日）→ Ilse（dev app，10 月 30 日）→ Onlook（production repo，11 月 19 日）

---

**[Tweet 5]**
探索模型：

請 Onlook 探索某個畫面的 10 個版本。每個版本都作為獨立的 live frame 出現在 canvas 上，每個運行你的實際 app。

切換到 Preview 模式：像真實使用者一樣與任何版本互動。每個版本一個 git worktree。保留一個，丟棄其餘，或作為 PR 送出。

這是在 production code 層面的創意導演——不是「生成一個設計的 mockup」，而是「生成實際 component 的 10 個 live 版本並並排展示」。

---

**[Tweet 6]**
與 Dessn（11 月 22 日）的比較：

兩者都把 production codebase 置於 canvas 的中心。

Dessn = 雲端優先。MCP 原生遠端 OAuth。類 Figma 的 canvas 作為前端。雲端 agent + Dessn 的 design agent。

Onlook = 本地優先。桌面 app。Git worktree。程式碼在你的機器上。Agent 在你的機器上。Canvas 在你的機器上。

相同的終態：canvas = production code。不同的所有權和信任模型。不同的價格：Onlook 是免費的。

---

**[Tweet 7]**
誠實的前提：

→ 目前僅支援 Mac。Windows 即將推出。
→ AI 功能需要 Claude 或 ChatGPT 訂閱（「免費」指的是 canvas 層）
→ v2.0.2——仍然早期。前一版 v1 專門用於 React+Tailwind；v2 覆蓋更廣，但請先驗證你的技術堆疊
→ Git worktree 隔離是正確架構，但熟悉原始碼有助於解決 agent 錯誤
→ Artifacts（與 repo 分離的 HTML 草稿）是個好主意；不是 Figma component 函式庫

---

**[Tweet 8]**
重新定框：

Onlook 2.0 不是「AI 設計工具」。

它是 production codebase 的設計師 canvas 層——免費、本地優先、開源。

BYOA 意味著你現有的訂閱和你現有的 agent skills 隨著你進入 canvas，不受 Onlook 的模型選擇鎖定。

前提：skills 文件品質在這裡同樣設定上限，就像在 Cursor 或 Claude Code 中一樣。

[Onlook 2.0 · onlook.com/install · 2026 年 11 月 19 日]

---
