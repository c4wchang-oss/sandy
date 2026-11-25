# 主題二：Figma MCP OAuth Allowlist — 企業 Agent 存取治理
# 平台：Threads
# 語言：繁體中文
# 日期：2026 年 11 月 25 日

---

## THREADS 貼文 — 長篇個人反思

Figma 在 11 月 17 日為 Organization 和 Enterprise 方案發布了 MCP client allowlist（現在正在推出）。這是那種看起來像是 admin 設定、實際上是基礎設施轉變的功能之一。

在過去 18 個月裡，任何有 Cursor 或 Claude Code 訂閱的團隊成員都可以個人連接到你組織的 Figma 檔案，並讓它讀取你的 design system。沒有 admin 層、沒有 scope 批准、沒有辦法知道誰連接了什麼。假設是個人授權是足夠的治理。

改變了什麼：Org/Enterprise 上的 admin 現在可以切換到「Only admin-approved apps」模式。沒有任何 MCP client——Cursor、Claude Code 或 Figma client 目錄中的任何其他東西——能在未獲得 admin 在 scope 層面批准的情況下存取你組織的 Figma 資源。當你批准一個 app 時，你批准特定的 scope：讀取檔案內容、建立留言、寫入 canvas 等。成員仍然可以請求 app（如果 admin 允許），但 admin 審查和批准。

文件中有一個大多數團隊會錯過的隱藏操作警告：「要求批准會影響現有連接以及新連接。」如果你在沒有先稽核你的團隊正在積極使用哪些連接的情況下撥動這個開關，你將立即破壞現有工作流。每個人現有的 Cursor-Figma 和 Claude-Figma 連接在你更改政策的那一刻都失去了存取權限。正確的順序是稽核 → 預先批准 → 然後更改政策。以任何其他順序做都會在你的團隊中創建破損的工作流。

更深的層是通過 Okta Cross App Access 或 Claude auto-connect 的企業管理授權。擁有匹配的 Figma 和 Claude 電子郵件的成員不需要個別登入就能自動連接。沒有每個成員的 OAuth 流程。需要 SAML SSO。Admin 代表整個組織做一個信任決策。方便。而且值得知道這就是你在做的事。

值得注意的限制：只適用於 Org/Enterprise。Professional 和 Starter 方案保持「allow all apps」。最有可能在規模上存在未受治理的 Cursor 到 Figma 連接的團隊——Professional 方案上的成長中產品工作室——沒有獲得治理控制。它被鎖定在已有治理基礎設施的方案上。

我一直回到的框架：Agent 存取設計檔案剛剛在企業規模上成為一個正式治理的權限物件。這是同樣的約束執行層級模式。慣例（「我們信任人們使用已批准的 client」）無法擴展。架構（「未授權的 client 得到 parse error，不是政策違規」）可以。Figma 為大型組織把這個問題從慣例層移到了架構層。

---

## THREADS 短評

Figma 在 11 月 17 日為企業組織發布了 MCP client allowlist。

之前：任何有 Cursor 或 Claude Code 的團隊成員都可以連接到你組織的 Figma 檔案。沒有治理層。

之後：只有 admin 批准的 app，在 scope 層面。

隱藏的警告：撥動開關會立即中斷所有現有連接。正確的順序：稽核你的團隊積極使用哪些 MCP 連接 → 預先批准它們 → 然後更改政策。

Agent 存取設計檔案現在在企業規模上是一個正式治理的權限物件。慣例無法擴展。架構可以。

---
