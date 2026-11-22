# 主題一：Dessn — 在你真實 code 上運行的設計 canvas
# 平台：X（Twitter）Thread + Threads
# 語言：繁體中文
# 日期：2026 年 11 月 22 日
# 來源：Dessn（dessn.com），2026 年 11 月 4–5 日上線

---

## X THREAD

**[Tweet 1 — Hook]**
所有設計 canvas 都是用你產品的「圖片」在工作。

Dessn 是用你的「實際 app」在工作。

每一個 frame 都是你真實運行的 code。Agent 讀到的是你的真實 component、真實 design token、真實的 file + line reference。

這不只是個 workflow 技巧，是我從九月以來追蹤的 pattern 的第七個實例。🧵

---

**[Tweet 2]**
Canvas-as-context 的收斂趨勢：

Doop → MagicPath → Shopify Canvas → MagicOS → Spline for ChatGPT → Wonder → Dessn

七個工具，同一個底層賭注：AI agent 需要看到的，是跟設計師一樣的表面，而不是對它的「描述」。

Dessn 是第一個讓那個表面等於你的 production codebase 的工具。

---

**[Tweet 3]**
Dessn 真正在解決的 design system 問題：

當 coding agent 在一般工具裡建一個新畫面，它會做出「看起來像你的」component——但不是你的。

在 Dessn 裡，agent 找到你的 app 真正在用的 component，拿到每個 component 存在哪個檔案的第幾行，然後直接重用它。不是視覺上相似的版本，是原始的 source。

---

**[Tweet 4]**
這把「reference 比描述更有效」這個原則推到了邏輯終點。

你不需要「描述」你的 button component 給 agent 聽。Agent 在 `src/components/Button.tsx:47` 直接讀它，然後重用它，不是重新做一個。

Design system 不是透過文件執行，而是透過「這就是唯一的 source」來執行的。

---

**[Tweet 5]**
實際 workflow：

你的 codebase 連接 GitHub/GitLab/Bitbucket，5 到 15 分鐘建好 live canvas。每個畫面都是可以點擊的 frame，可以 map flow，也可以交給 agent 延伸。

改動以 git patch、commit 或 bundle 的形式帶回來。Local code 和 canvas 保持 1:1 同步。

---

**[Tweet 6]**
MCP-native、remote、OAuth。支援 Claude Code、Codex、Cursor、VS Code、claude.ai、ChatGPT。

Dessn 也有 design skills，教 agent 如何在這個 canvas 上設計——跟 Webflow、Framer、Elementor 跑過的 constraint document → skills 路線完全一樣。

---

**[Tweet 7]**
誠實的 caveat：

免費方案每個 team 每月 50 個 MCP call，讀取也算。超過就等到下月重置或升 Pro。Pro 無上限，一個 Pro 座位覆蓋整個 team。

Cloud agent（ChatGPT、claude.ai）無法直接寫 frame code，需要轉給 Dessn 自己的 design agent 處理。Local agent（Claude Code、Cursor）可以自己直接寫。

---

**[Tweet 8]**
重新框架：

Dessn 之前，所有設計 canvas 都在對著你產品的「產出物」工作。Dessn 是對著產品本身在工作。

設計的 context 不再是「你 app 長什麼樣子的截圖」，而是「你的 app，正在運行，每個 component、token 和 route 都能讓 agent 在 file:line 層級存取」。

這是不同的 quality ceiling。

〔Dessn · dessn.com · 2026 年 11 月上線 · MCP: mcp.dessn.ai/mcp〕

---

## THREADS POST

**[長文反思]**

我從九月開始追蹤一個 pattern：canvas-as-context。核心概念是 AI agent 需要看到的，是跟設計師一樣的表面，不是對它的文字描述。

Dessn 是第七個實例，也是最關鍵的一個。

Dessn 之前的每一個設計 canvas——Figma 也好，各種 AI 設計工具也好——都是在對著你產品的「產出物」工作：截圖、mockup、匯出檔案。Dessn 直接用你真實運行的 codebase。連接 GitHub 或 GitLab，你的 app 在 5 到 15 分鐘內建成一個 live canvas。每個畫面都是一個可以點擊的 frame，每個 component 都是你的 app 真正在用的，每個 token 都是 code 裡真實存在的。

這對 AI agent 造成的差異是結構性的。在一般工具裡，coding agent 建新畫面時會從視覺上「近似」你的 design system——做出長得像你的 component，但不是你的。在 Dessn 裡，agent 找到你真實的 component，取得 file 和 line reference，然後直接重用它。不是因為你告訴它要這樣做，而是因為那是唯一的 source。

這是在 codebase 層級的 constraint architecture。Design system 不是透過文件或告訴 agent 要遵守什麼來執行——而是透過「這個 frame 就是運行中的 code」這個事實來執行。

值得記下的 caveat：免費方案每 team 每月 50 個 MCP call，讀取也算在內。Cloud agent（ChatGPT、claude.ai）無法直接寫 frame code，需要轉給 Dessn 自己的 design agent。Local agent（Claude Code、Cursor）可以直接寫。在你把最複雜的工作路由過去之前，先搞清楚這個差異。

更大的框架：「reference 比描述更有效」是今年最主導的 pattern。Dessn 是邏輯終點——你不需要描述你的 component，agent 在 `Button.tsx:47` 直接讀它。

---

**[短版 punch — Threads 變體]**

所有設計 canvas 都在對著你 app 的圖片工作。

Dessn 對著你真實運行的 code 工作。Agent 讀到 file:line 層級的真實 component，重用它——不是視覺近似版本。

九月以來 canvas-as-context pattern 的第七個實例。第一個讓 canvas 等於 production source 的工具。

Caveat：免費 = 每 team 每月 50 個 MCP call（讀取算）。Cloud agent 無法直接寫 frame code，local agent（Claude Code、Cursor）可以。
