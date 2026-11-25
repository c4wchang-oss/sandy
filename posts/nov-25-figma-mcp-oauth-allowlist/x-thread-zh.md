# 主題二：Figma MCP OAuth Allowlist — 企業 Agent 存取治理
# 平台：X（Twitter）Thread
# 語言：繁體中文
# 日期：2026 年 11 月 25 日
# 來源：Figma Release Notes，2026 年 11 月 17 日

---

## X THREAD

**[Tweet 1 — Hook]**
Figma 在 11 月 17 日為企業組織發布了 MCP client allowlist。

過去 18 個月，任何有 Cursor 或 Claude Code 的團隊成員都可以連接到你組織的 Figma 檔案。

這剛剛改變了。

你不知道你需要回答的問題，現在可以被回答了。🧵

---

**[Tweet 2]**
實際發布了什麼：

Admin > Extensions > Apps：選擇「Only admin-approved apps」。

沒有任何 MCP client——Cursor、Claude Code 或 Figma client 目錄中的任何其他東西——能在未獲得 admin 在 scope 層面批准的情況下觸碰你組織的 Figma 資源。

批准是細粒度的：不只是「Cursor 能連接嗎」而是「Cursor 能做什麼」（讀取檔案內容、建立留言、寫入 canvas 等）。

正在向 Organization 和 Enterprise 方案推出。

---

**[Tweet 3]**
這個功能解決的治理問題：

誰授權了 Cursor 讀取你的 design system？

11 月 17 日之前：「任何有 Cursor 訂閱並個別連接的人。」

11 月 17 日之後：「我們的 admin，附帶已批准的 scope，由團隊審查過。」

對於 10 人工作室這無關緊要。對於一個有生產設計系統的 100 人設計組織，這很重要。

---

**[Tweet 4]**
文件中隱藏的操作警告：

「要求批准會影響現有連接以及新連接。」

如果你把這個開關撥到「Only admin-approved apps」，你組織中所有現有的 Cursor 和 Claude Code 連接都會立即失去對 Figma 資源的存取——包括人們已經授權的連接。

如果你在沒有先審查你的團隊實際上使用哪些連接的情況下這樣做，你將破壞現有工作流。稽核 → 預先批准 → 然後更改政策。很容易錯過。

---

**[Tweet 5]**
還有第二層：企業管理授權。

第一層是 allowlist（哪些 app 可以連接）。

第二層是 Okta Cross App Access 或 Claude auto-connect：擁有匹配的 Figma + Claude 電子郵件的成員不需要個別登入就能自動連接到 Figma MCP。

需要 SAML SSO。需要有已驗證電子郵件域名的 Figma 組織。

Admin 一次為整個組織做信任決策。這很方便。知道你在配置的是這個。

---

**[Tweet 6]**
再次出現約束執行層級框架：

慣例層：「請使用附帶適當權限的已批准 MCP client。」（11 月 17 日之前——每個人都可以做任何想做的事。）

架構層：「只有 admin 批准的 app 才能觸碰組織資源。」（11 月 17 日之後——協定層面的 parse error，不是不良行為。）

和 A2UI 1.0 的 catalog 執行（11 月 11 日）相同的模式。執行機制就是設計。指導方針無法擴展；架構可以。

---

**[Tweet 7]**
一個值得標記的限制：

這只適用於 Org/Enterprise 方案。Professional 和 Starter 預設仍然是「allow all apps」。

最有可能在規模上存在非正式、未受治理的 Cursor 到 Figma 連接的團隊，可能在 Professional 方案上——這個方案仍然沒有這方面的治理控制。

治理工具被鎖定在已經有更多治理基礎設施的方案上。典型。

---

**[Tweet 8]**
重新框架：

Agent 存取設計檔案現在在企業規模上是一個正式治理的權限物件。不是個人 UX 決策。不是團隊慣例。而是正式的、有範圍的、admin 審查的授權。

問題不是「我們的 agent 能存取 Figma 嗎？」它們可以，而且它們會。

問題是：誰決定了哪些 agent 可以存取你的 design system 的哪些部分？他們批准了哪些 scope？你現在知道答案嗎？

〔Figma MCP OAuth Allowlist · Figma Release Notes · 2026 年 11 月 17 日 · Organization 和 Enterprise 方案〕

---
