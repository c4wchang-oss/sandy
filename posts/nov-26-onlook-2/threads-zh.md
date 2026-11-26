# 主題一：Onlook 2.0
# 平台：Threads
# 語言：繁體中文
# 日期：2026 年 11 月 26 日

---

## THREADS 貼文 — 長篇個人反思

Onlook 在 11 月 19 日發布了 2.0 版。免費。開源（Apache 2.0）。Mac。桌面 app，把一個 live canvas 疊在你實際運行的 production codebase 上——不是 mockup，是真實產品。

我追蹤「canvas 即 production codebase」這個模式一段時間了。Dessn（11 月 22 日）從雲端/MCP 側讓你的運行產品成為 canvas。Onlook 從本地優先/桌面側做了同樣的動作。相同的終態：當你在 canvas 上選擇一個元素，你指向的是真實 repo 中的真實檔案，作為真實運行的產品。不同的所有權模型：Dessn 在雲端，Onlook 在你的機器上。

架構很清晰。匯入任何 Git repo 或本地資料夾。Onlook 建立一個 git worktree——獨立分支上的安全副本。用你專案自己的 dev 指令啟動 dev server。在 canvas 的 frame 中顯示運行中的 app，每個 frame 是一個真實的瀏覽器 webview。你的實際產品，真實資料。每個更改都停留在 worktree 中。只通過一般的 PR 到達你的 repo。你的主要 checkout 永遠不會被觸碰。

BYOA（帶上你自己的 Agent）模型是決定性的選擇。Onlook 不附帶自己的模型。用你已經擁有的 Claude Code 或 ChatGPT 訂閱連接。Agent 在你的機器上運行，不在 Onlook 的伺服器上。原始碼編譯：不需要 Onlook 帳號、雲端金鑰或 .env 檔案。這是 BYOA canvas 模式的第一個開源、免費、本地優先的實作。Wonder（10 月 27 日）把 BYOA 引入設計 canvas 作為商業產品。Onlook 是同樣的模式應用於 production codebase，免費。

視覺指向機制：Onlook 在每個 frame 中注入一個小腳本。當你點擊一個元素並請 agent 更改它，agent 收到的是精確的檔案路徑、component 參考和行級 context——而不是截圖描述。點擊 → 參考。這是視覺指向作為 agent context 的第四個實例（MagicPath canvas 10 月 1 日、Skisso live CSS 10 月 19 日、Ilse dev app 10 月 30 日、Onlook production repo 11 月 19 日）。這個模式已確立：在需要發生更改的層次，指向消除了描述歧義。

探索模型特別值得說。請 Onlook 探索某個畫面的 10 個版本。所有 10 個都作為獨立的 live frame 出現在 canvas 上，每個運行你的實際 app。切換到 Preview 模式，與任何一個互動。每個版本一個 git worktree。保留一個，丟棄其餘，或作為 PR 送出。這是在 production code 層面的創意導演——不是「生成一個設計的 mockup」，而是「生成實際 component 的 10 個 live 版本並並排展示」。

誠實的前提：目前僅支援 Mac，Windows 即將推出。AI 功能需要 Claude 或 ChatGPT 訂閱，所以「免費」指的是 canvas 層，不是零成本。v2.0.2 仍然早期。前一版 v1 專門用於 React+Tailwind；v2 覆蓋更廣，但請先驗證你的技術堆疊。Git worktree 隔離是正確的架構——你的主要 checkout 永遠不被觸碰——但熟悉原始碼有助於在 agent 錯誤需要解決時處理。

根本的約束和每個 BYOA 或 coding agent 工具的約束是一樣的：skills 文件品質設定輸出上限。如果你把 Onlook 連接到 Claude Code，但沒有為你的 codebase 撰寫好的 DESIGN.md 或 agent skills，你會得到技術上正確但沒有設計系統 context 的更改。Canvas 是免費的。約束智識仍然是你需要建立的東西。

---

## THREADS 短評

Onlook 2.0（免費、開源、Mac）。Canvas 在你實際運行的 codebase 上面。BYOA——你已經擁有的 Claude Code 或 ChatGPT 訂閱。

關鍵機制：注入腳本讀取頁面 → 點擊元素 → agent 取得精確的檔案 + component context。不是截圖描述。是實際的參考。

這是 Wonder 作為商業產品引入的 BYOA 模式，現在免費且本地優先，應用於 production codebase 而不是設計 canvas。

誠實的約束：skills 文件品質在這裡同樣設定上限。Canvas 是免費的。Brief 智識是你需要建立的。

---
