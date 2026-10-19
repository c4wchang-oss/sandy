# 小紅書 — Skisso — 中文
# Oct 19, 2026 | 3:4 圖片 → xiaohongshu-3x4-zh

---

**標題：** 這個免費 Chrome 插件把 AI agent 的 context 從 25,700 tokens 砍到 380

---

**正文：**

用 AI coding agent 改 UI？慢的地方不是 agent 的能力，是你要描述你在說什麼。

Skisso 把中間那層翻譯去掉了。

**實際做什麼：**

① 在你的真實產品上點選任何元素（localhost、staging、正式環境都可以）
② 用你的 design token 改它——間距、顏色、字型、版面、文字內容
③ 只把 diff 交給 agent：選擇器 + 屬性名稱 + 改之前 / 改之後的值
④ 或透過 MCP 連接（`npx -y skisso`）——agent 直接讀你選了什麼

**為什麼 380 tokens 很重要：**

整頁 context dump：~25,700 tokens
Skisso diff：~380 tokens（減少 98%）

Context 越少 = 成本越低 + agent 輸出更準確 + 改得更快

**做對的地方：**

① 讀你既有的 CSS 變數，輸出維持 `var(--brand-primary)` 不是硬寫 hex 碼
② 55 個 shadcn/ui 元件，自動繼承你網站的字型、顏色和圓角
③ 完全本機，不需帳號，不對外傳資料——可驗證的隱私，不靠聲稱
④ 複製貼上或 MCP 二選一，你決定

**誠實的限制：**

– 目前只支援 Chrome（Firefox/Safari 尚未）
– 只能改現有 UI，無法設計全新介面
– 還不支援針對特定 breakpoint 的獨立編輯
– 需要有 CSS token 架構才能發揮效果
– 讀取的是已部署狀態，不一定等於設計意圖

**更大的觀點：** Diff-as-brief 是 reference-beats-description 的邏輯終點。當 brief 就是確切的改動，沒有東西需要解讀。翻譯層消失了。

免費。本機。skisso.app

#AI設計 #設計工具 #UX設計 #CodingAgent #MCP #設計系統 #資深設計師 #前端設計 #DesignToken
