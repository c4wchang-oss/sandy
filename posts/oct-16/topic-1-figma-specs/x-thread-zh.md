# X Thread — Figma Specs + Code Layers（中文）
# Config India 2026 — Oct 15

---

**Tweet 1（開場鉤）**
Figma 昨天推出 Code Layers 和 Specs 開放測試。所有報導都在說「canvas 上的 prototype」。

這裡有一個沒人在說的框架：這是 handoff 作為概念的終結。

---

**Tweet 2**
Code Layers：在 Figma canvas 上直接跑的 code-backed prototype。不是 export 出去，不是丟到 Storybook，就在設計稿旁邊。

建立方式：
→ 從 design frame 轉換
→ GitHub repo
→ 本機資料夾
→ Chrome extension 抓取網頁
→ 直接從 prompt 開始

---

**Tweet 3**
反方向才是更有趣的。

「Extract designs」把正在跑的 code layer 轉回可編輯的 Figma frames。標注設計意圖，標記 ready for dev，讓 code 和設計在同一個檔案裡對齊。

Canvas 和 codebase 終於是同一個 artifact。

---

**Tweet 4**
Specs 讓這件事有了意義。

一個住在 Figma canvas 上的多人 Markdown 編輯器。行內嵌入：frames、FigJam diagrams、code layers，不再有截圖連結，不再有過期的參考。

Context 和 artifact 在同一個地方。

---

**Tweet 5**
Agent 整合是我希望設計師特別注意的。

把 Spec 連結貼給 coding agent → agent 收到：
→ Markdown
→ frame 參考
→ diagrams
→ code layers
→ Code Connect snippets

全部一起。Spec 現在就是 agent 的 brief。

---

**Tweet 6**
十年來我們的工作是「讓 handoff 更清楚」。

Specs 改變的是：brief 不再是一份獨立文件，它直接內嵌在設計 artifact 裡。Agent 直接讀設計稿。

你的 Specs 品質現在是你跟任何 coding agent 合作的品質天花板。

---

**Tweet 7**
同步推出 20 個新 MCP partner 整合：

→ Dia：AI 瀏覽器 → 網頁 UI 轉為可編輯 Figma 圖層
→ OpenCode：coding agent + Figma DS 脈絡 → prototype → 回 Figma
→ Junie by JetBrains：coded prototype → Figma code layers
→ Meta Muse：Figma 品牌 → Muse 視覺 + Weave 工作流程

Figma MCP 正在變成基礎設施，不再只是功能。

---

**Tweet 8（CTA）**
這週可以做的事：如果你在付費方案，為一個進行中的專案建一個 Spec。

不是 PRD 模板，是真實的決策過程。把相關 frames 內嵌進去，把連結貼到 Claude Code 或 Cursor。

你描述的和 agent 產出之間的落差？那就是 brief 品質的落差。Specs 從檔案內部把它關閉了。
