# 主題二：Figma MCP OAuth Allowlist — 企業 Agent 存取治理
# 平台：小紅書
# 語言：繁體中文
# 日期：2026 年 11 月 25 日

---

## 標題
Figma 新增了企業 MCP 治理——如果你的組織用 Cursor 或 Claude Code 配合 Figma，先讀這個

---

## 正文

Figma 在 11 月 17 日為 Organization 和 Enterprise 方案發布了 MCP client allowlist（現在正在推出）。

這是關於誰有權讓 AI coding agent 存取你組織的 Figma 設計檔案。

此前：任何有 Cursor 或 Claude Code 訂閱的團隊成員都可以個人連接到你的 Figma 組織並讀取你的 design system。沒有 admin 層。沒有 scope 批准。沒有能見度知道誰連接了什麼。

此後：admin 可以在任何 MCP client 觸碰組織資源之前要求批准。

**實際改變了什麼：**

**→ Admin > Extensions > Apps** — Admin console 中的新標籤。你可以要求所有 MCP client（Cursor、Claude Code）在存取你組織的 Figma 檔案之前獲得預先批准。

**→ Scope 層面的批准** — 不只是「他們能連接嗎」而是「他們能做什麼」——讀取檔案內容、建立留言、寫入 canvas。每個 scope 分別批准。

**→ 企業管理授權（更深的層）** — Okta Cross App Access 或 Claude auto-connect = 擁有匹配的 Figma + Claude 電子郵件的成員不需要個別登入就能自動連接。需要 SAML SSO。

**6 件值得知道的事：**

1. **隱藏的警告：現有連接立即受影響** — 如果你切換到「Only admin-approved apps」，你組織中所有現有的 Cursor 和 Claude Code 連接都會立即失去存取權限。不是下次登入時——是現在。在更改政策之前，稽核你團隊現有的 MCP 連接。這是大多數團隊會跳過的步驟。

2. **正確的順序** — 稽核 → 預先批准你的團隊積極使用的 app → 然後更改政策。反過來做的話，在你撥動開關的那一刻就在整個組織中創建破損的工作流。

3. **只適用於 Org/Enterprise** — Professional 和 Starter 方案保持「allow all apps」。治理控制被鎖定在已有 admin 基礎設施的方案上。正在成長到需要這個功能的團隊還沒有這個工具。

4. **Claude auto-connect 是對所有人的一次性信任決策** — Admin 批准一次，所有擁有匹配電子郵件的成員都自動連接。方便。也意味著 admin 代表整個組織做憑證信任決策。在開啟之前知道你在啟用什麼。

5. **成員可以請求 app（如果 admin 允許的話）** — 你不必預先批准所有可能的 MCP client。成員提交請求，admin 審查。是為漸進式採用設計的，不是封鎖。

6. **這再次是約束執行層級模式** — 慣例（「請使用已批准的 client」）→ 架構執行（「未授權的 client 得到 parse error」）。A2UI 1.0（11 月 11 日）為 UI 生成做了同樣的事。同樣的模式，不同的層：設計檔案存取現在是架構，不是禮儀。

**誠實的框架：**

如果你在 5 人團隊：這還不適用於你的方案。

如果你在 Org 或 Enterprise 組織運行 design system：在開啟這個功能之前，有人應該回答「哪些 MCP client 目前可以讀取我們的 design system，它們可以做什麼？」

無論你是否更改政策，這個問題的答案本身就很有價值。

---

#UX設計 #Figma #MCP #designops #AI工具 #設計系統 #企業設計 #產品設計 #AIworkflow #senior設計師 #AI治理 #designsystems

---
