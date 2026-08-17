# X Thread — Usertour MCP + AI Onboarding (ZH)
# Topic: Usertour v0.9.1 推出有 67 個工具的 MCP server，讓 AI 直接 build onboarding (Aug 15, 2026)
# Platform: X (Twitter)
# Format: 8-tweet thread

---

**Tweet 1 — Hook**
Usertour 推出了一個有 67 個工具的 MCP server。

AI agent 現在可以直接 build、publish、debug in-app onboarding flow。

我身邊的設計師都跳過了這個標題。不應該。🧵

---

**Tweet 2**
這次真正發布的東西：
- v2 REST API，完整覆蓋 steps、conditions、triggers、themes
- MCP server，向 Claude、Cursor 開放 67 個工具
- 寫入時驗證：結構有問題，在 ship 前就被擋掉

---

**Tweet 3**
Usertour 自己的文件裡，對用 AI build onboarding 的建議：

「先讓 AI 看頁面和 design system，再要求一個聚焦的、production-ready 的體驗，而不是所有按鈕的通用導覽。」

這句話是一份壓縮成警告的 design brief。

---

**Tweet 4**
「所有按鈕的通用導覽」是 AI 沒有指引時的預設值。

你在產品裡見過這種東西。每個功能都 highlight。沒有優先順序。沒有使用者到底要先學什麼的概念。

這不是模型的問題。是 brief 的問題。

---

**Tweet 5**
Onboarding flow 從來都是偽裝成設計稿的 brief。

「帶新使用者了解核心流程」不是 brief。

「幫第一次使用的人，在 3 分鐘內完成他們的第一個 X，只用他們每天會用的功能」，才接近了。

---

**Tweet 6**
資深設計師的工作沒有改變——只是變得更透明了。

以前：翻譯 brief → 線框 → review → handoff。

現在：brief → AI build → validate → ship。

Brief 成了主要 deliverable。它一直是最重要的部分。現在它是唯一的介面。

---

**Tweet 7**
AI 還做不到的：知道使用者需要理解什麼。

它可以排版。可以格式化。可以跑那 67 個工具。

但它沒辦法告訴你，你的 onboarding 裡最重要的 3 件事是什麼。那還是你的工作。

---

**Tweet 8**
工具箱裡有 67 個工具。

問題不是用哪個工具。是你想教什麼，以及為什麼要用那個順序。

就照這樣寫 brief。其他的跟上來。
