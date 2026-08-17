# Threads Post — Usertour MCP + AI Onboarding (ZH)
# Topic: Usertour v0.9.1 推出有 67 個工具的 MCP server，讓 AI 直接 build onboarding (Aug 15, 2026)
# Platform: Threads
# Format: 長篇個人反思

---

Onboarding flow 一直是產品上線最重要的文件。我們只是把大部分時間花在線框上，而不是線框背後的思考。

Usertour 的 v0.9.1 改變了一件事：它帶著 67 個工具的 MCP server 上線，讓 AI agent 可以直接 build、publish、debug in-app onboarding flow。Claude Code、Cursor——現在它們可以寫 flow、執行、找到斷掉的步驟、然後 ship，完全不需要設計師手動碰 UI。

他們文件裡一句話讓我印象深刻：「先讓 AI 看頁面和 design system，再要求一個聚焦的、production-ready 的體驗，而不是所有按鈕的通用導覽。」

「所有按鈕的通用導覽。」這就是 AI 沒有指引時的預設值。你在產品裡見過這種東西——每個功能按順序 highlight，沒有優先順序，不理解新使用者最需要先學什麼。它上線很快。它什麼都沒教。

這個文件裡的警告在告訴你：AI 建出來的 onboarding 品質上限，是 brief 品質的上限。一直都是。現在，模糊的 brief 和 shipped 的產品之間的距離更短了。

對我來說，這讓事情更清楚，而不是更令人不安。我一直覺得 onboarding 設計最有價值的部分——找出使用者需要學什麼、以什麼順序學、決定上線時要隱藏什麼和 highlight 什麼、確定「三分鐘內成功」實際上是什麼意思——這些都不在那 67 個工具裡。那仍然是人做的決定。

轉變是：那個決定現在是主要的 deliverable。不是有標註的線框。不是 Figma prototype。是寫得夠清楚、讓 AI 不需要猜就能 build 的規格。

如果你是一個長期覺得「brief」從來沒有被認真對待的資深設計師，現在是你的時刻。Brief 剛成為唯一的介面。
