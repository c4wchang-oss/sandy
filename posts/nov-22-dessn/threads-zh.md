# 主題一：Dessn — Threads 貼文
# 平台：Threads
# 語言：繁體中文
# 日期：2026 年 11 月 22 日

---

## THREADS 長文

從九月開始，我一直在追蹤一個 pattern。我把它叫做 canvas-as-context。

核心概念是：AI agent 需要看到的，是設計師正在看的同一個表面——不是那個表面的描述，不是它的匯出檔案。Agent 和設計師同時在看同一件事，從它出發工作。

三個月內出現了六個實例：Doop、MagicPath inside ChatGPT、Shopify Canvas、MagicOS、Spline for ChatGPT、Wonder。

Dessn 是第七個。而且是改變 ceiling 的那個。

前面六個實例用的都是你「在上面設計的」canvas。Dessn 用的 canvas 就是你「正在運行的 app」。連接你的 repo（GitHub、GitLab、Bitbucket），你的 codebase 在 5 到 15 分鐘內建成一個 live Dessn canvas。每個 route 是一個 frame，每個 frame 運行你真實的 code，你可以像真實使用者一樣點擊它。

為什麼這在結構上很重要：當 coding agent 在一般工具裡工作，它會「近似」你的 design system。它做出「看起來像你的」component——但它是從視覺 reference 重新建立的，代表會有變體、不一致、看起來對但其實不是的東西。在 Dessn 裡，agent 找到你的真實 component，取得它的 file:line reference，然後直接重用它。不是因為你寫了一份文件告訴它要這樣做，而是因為那是唯一的 source。

這是在 codebase 層級的 constraint architecture。Design system 的一致性不是靠文件執行，而是靠 context 本身的本質來執行。

改動以 git patch、commit 或 bundle 帶回來，canvas 和你的 local code 保持 1:1 同步。整個架構是 MCP-native（mcp.dessn.ai/mcp，OAuth，支援 Claude Code、Codex、Cursor、ChatGPT、claude.ai）。

誠實的 caveat：免費方案每 team 每月 50 個 MCP call——讀取也算，不只是寫入。Cloud agent（ChatGPT、claude.ai）的 frame code 寫入需要轉給 Dessn 自己的 design agent 處理，不是直接寫。在把複雜的多頁工作路由到免費方案之前，先確認這個限制。

底層的原則：「reference 比描述更有效」是今年 AI 設計工具最主導的 pattern——品牌 kit 拖入作為 context、視覺 diff 取代文字描述、直接指向 component 取代 component 命名。Dessn 是這個原則到達邏輯終點的地方。你不需要向 agent 描述你的 component，agent 在 `Button.tsx:47` 直接讀它。

---

## THREADS 短版

所有設計工具都在對著你 app 的圖片工作。

Dessn 對著你真實運行的 code 工作。Agent 在 file:line 層級讀你的真實 component，重用它，不是做一個近似版本。

九月以來 canvas-as-context pattern 的第七個實例。第一個讓 canvas 等於 production source 的工具。

Caveat：免費 = 每 team 每月 50 個 MCP call（讀取算）。Cloud agent 無法直接寫 frame code，需要 Dessn 自己的 design agent。
