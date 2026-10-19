# X Thread — Skisso — 中文
# Oct 19, 2026 | 16:9 圖片 → x-threads-16x9-zh

---

**Tweet 1（開頭）**
你不是不會跟 AI 溝通 UI 改動。

你是在用散文描述像素。那是錯誤的媒介。

一個免費的 Chrome extension 剛剛把中間那層翻譯直接消掉了。

---

**Tweet 2**
Skisso：在你的真實產品上點選任何元素，用你的 design token 改它，只把 diff 交給 agent。

不是讓 agent 解讀截圖，不是要 agent 解析一段文字。

選擇器、屬性名稱、舊值、新值。這就是 brief。

---

**Tweet 3**
Token 的數字比任何 pitch 都有說服力：

整頁 context dump：~25,700 tokens。
Skisso diff：~380 tokens。

減少 98%。這不是優化，這是一種截然不同的設計意圖傳遞方式。

---

**Tweet 4**
它讀你既有的 CSS 變數。

改動輸出是 `var(--brand-primary)`，不是硬寫的 hex 色碼。如果你已經建了有 token 的 design system，Skisso 放大它的作用。如果還沒有，它補不了那個缺口。

你已有的 constraint infrastructure × 把它呈現出來的工具。

---

**Tweet 5**
MCP 整合讓迴路閉合。

`npx -y skisso` → 你的 agent 直接查詢你在瀏覽器裡選了什麼、取得 diff、套用改動。不需要複製貼上，agent 直接從你的真實產品讀 context。

---

**Tweet 6**
信任架構：完全在本機運行，不需要帳號，不對外傳資料。

跟 Cubicle 和 Open Inspector 一樣的原則：可驗證的限制比聲稱的限制更有說服力。架構本身就是承諾，不是靠隱私政策。

在 localhost、staging、正式環境都能用。

---

**Tweet 7**
誠實的限制：
– 只支援 Chrome（Firefox/Safari 尚未）
– 用於改現有 UI，不適合設計全新介面
– 尚不支援特定 breakpoint 獨立編輯
– 需要有既成的 CSS token 架構才能發揮最大效果
– 真實產品 = 已部署的狀態，不一定等於設計意圖

---

**Tweet 8（CTA）**
框架是這樣：

Diff-as-brief 是 reference-beats-description 的邏輯終點。

你不是在描述你想要什麼，你是在呈現確切的改動。不需要解讀。380 tokens。

免費。本機。不需帳號。skisso.app
