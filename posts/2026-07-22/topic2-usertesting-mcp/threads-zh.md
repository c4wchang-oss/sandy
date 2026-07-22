# Threads Post — UserTesting MCP（中文）
**平台：** Threads
**主題：** UserTesting MCP Server — research 從驗證步驟變成 context window
**日期：** 2026 年 7 月 22 日
**格式：** 個人觀點長文

---

我一直在想 UserTesting MCP 這個發布，它真正改變的是什麼。

不是功能清單。是時間點。

Research 在設計流程裡一直有個時間點的問題。我們談「research-informed design」，但實際上，research 通常在方向已經確定之後才到。你驗證 prototype、拿到 insights、更新設計，但根本性的決策 — 架構、導航邏輯、心智模型假設 — 不會改變。Insights 是真實的，但它們來得太晚，無法重塑真正重要的東西。

在 AI 輔助設計的脈絡下，這個問題更大。Figma Make、Claude、ChatGPT 生成得很快。你輸入 prompt，幾分鐘內就有 prototype。那個速度確實有用。但模型生成的基礎是 pattern，不是你的特定用戶。它知道電商 pattern 長什麼樣子，但它不知道你的用戶會在結帳流程第三步流失，因為他們不信任地址欄的標籤文字。

UserTesting MCP 把 research 插入這個循環的開頭，不是結尾。你在 AI client 裡招募受測者、拉取過去的研究結果、在 prompt 生成之前載入行為數據。模型的 context window 包含你產品的真實用戶行為，不只是設計 pattern 推斷。

Figma 整合值得單獨記一下：在 plugin 裡可以做多 task、多 prototype 的研究。複雜流程在設計所在的 canvas 上驗證。不需要匯出、不需要交給研究團隊、不需要等下一個 sprint 才能開始。

改變最多的是研究節奏。Research 的瓶頸一直是時間 — 招募、執行、分析、整合。如果招募在 workflow 裡發生，結果在生成下一輪迭代的工具裡呈現，延遲就會壓縮。

AI 生成得快。Research 一直是更慢的那個。MCP 讓 research 快到能跟上。

關鍵的框架不是「research 有了 MCP 整合」。而是：research 不再是 gate，而是 context window。在第一個 prompt 之前載入，不是在第一個 prototype 之後才取得。

這改變了 AI 輔助設計真正能產出什麼。
