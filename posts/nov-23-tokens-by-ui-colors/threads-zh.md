# 主題一：Tokens by UI Colors — Threads 貼文
# 平台：Threads
# 語言：繁體中文
# 日期：2026 年 11 月 23 日

---

## THREADS 長文

DESIGN.md 是今年最主要的 AI 設計 constraint 格式。幾乎所有主要的 AI 設計工具——Claude Design、Vercel、Gamma、Adobe、OpenDesign——都在生成它、讀取它，或者兩者兼具。

我一直沒有完全釐清的問題是：DESIGN.md 本身從哪裡來？

大致上有兩種流派。基於掃描的工具（Onefold、DesignMD MCP、Higgsfield、Open Inspector）從你已部署的產品中萃取 DESIGN.md——速度快，根植於你出貨的東西。問題是它們繼承了你的 production 狀態，包括漂移、包括覆蓋值、包括那些從來就不太對的間距和顏色。

Tokens by UI Colors 採取另一條路。你從零開始，視覺化地，從設計意圖出發建構。

這是一個 token 建構平台：原始色板 → 語意顏色角色、文字尺度、間距系統、圓角、陰影。操作很流暢——有 preset 讓你快速定方向，然後細粒度調整。你明確地處理兩層：先是 primitive token（原始數值），然後是 semantic role（命名的用途）。這個區分很重要，因為給 AI agent 一個 `#10B981` 它不知道要拿來做什麼。但給它 `color.action.primary: #10B981`，它就知道這是給主要互動元素用的——不是文字，不是 destructive 操作。

我一直記住的那個步驟：在你匯出之前，你在真實的 UI 範例中預覽——component、頁面段落、介面 pattern。你看文字尺度在小字號時是否可讀，你看間距在卡片裡的行為而不只是在規格表格裡。這個預覽步驟就是 quality gate——讓你抓到那些單獨看起來沒問題但在情境中不對的 token 值。

然後你匯出：給 codebase 的 CSS variables，給 agent 的 DESIGN.md。DESIGN.md 輸出遵循 Google Labs 規格，這表示和 Claude Design、Vercel、Gamma、Adobe、OpenDesign 全部 17 個 adapter 立即相容。

值得記下的 honest caveat：這是建立工具，不是同步層。這個檔案是靜態的，它不會跟 Figma variable 或你已部署的 token 保持連結。對新專案來說，這正是你需要的——一個乾淨的、基於意圖的起點，沒有任何繼承的漂移。對需要維護大規模既有設計系統的情況，你需要一個 live sync layer。搞清楚你有的是哪個問題，再決定要用哪個工具。

底層原則：brief 品質就是 quality ceiling。如果你的 DESIGN.md 是從 production drift 建出來的，你的 AI 輸出會在規模化時繼承那些漂移。如果是從深思熟慮的決策建出來的，在真實 UI 預覽過，以語意 constraint 的形式寫出——你給的是 agent 真的能使用的東西。

---

## THREADS 短版

DESIGN.md 現在是今年 AI 設計 constraint 格式的主流。

大多數人跳過的問題：你的 DESIGN.md 從哪裡來？

基於掃描的工具（Onefold、DesignMD）從你已部署的產品萃取——速度快，有根據，但繼承了你的 production drift，包括意外發生的事。

Tokens by UI Colors 從意圖建構：primitive token → semantic role → 真實 UI 預覽 → 匯出。你在把設計決策放進 agent 的 context 之前先確認它們。

Caveat：靜態匯出，不跟 Figma 或 code 保持 live sync。新專案的正確答案，大規模維護既有系統的錯誤答案。

Brief 品質就是 quality ceiling。確保你的 DESIGN.md 反映的是你的決策，而不是你的 production drift。

---
