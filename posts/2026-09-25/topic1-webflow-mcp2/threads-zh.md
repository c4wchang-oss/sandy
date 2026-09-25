# Topic 1: Webflow MCP 2.0 — 互動效果交給 AI Agent
# Platform: Threads
# Language: Traditional Chinese
# Date: 2026年9月25日
# Image: images/topic1-threads-zh.png (16:9)

---

上週 Webflow 偷偷推了一個很重要的更新。

不是新模板，不是重新設計界面。是一個 MCP 更新，讓 AI agent 終於拿到了它一直缺少的東西：動態效果。

在這之前，透過 Webflow MCP 工作的 agent 可以排版、管內容、處理 CMS。唯一不能做的，就是讓頁面動起來。動態效果得靠人工建——有人要打開 Interactions 面板，一個一個設定 trigger 和 easing。

現在不用了。你告訴 agent 想要什麼互動效果，它就建出來：scroll trigger、hover state、載入動畫、多步驟 timeline，全部跑在 GSAP 上，全部出現在 Interactions 面板裡，跟手動建的一模一樣。你還是可以進去微調時間和曲線。沒有任何東西是黑盒子。

我一直在想的一件事：agent 只能建 Interactions 面板本身就能建的東西。這是一個對的限制。和我們在其他所有設計決策上用的原則一樣——有邊界的系統，比沒有邊界的系統更容易建立信任。

同一個更新還包括更快的 CMS 查詢、Webflow Cloud 部署、以及分支生命週期管理（Enterprise 方案）。現在這個 agent 有了你的排版、你的品牌規則、你的動態效果、還有部署能力。從頭到尾。

還剩下的缺口？Motion brief 的品質。「讓這個 section scroll 進來時 fade in」是任何人都能寫的 prompt。「感覺要很 premium」不是。困難的動態決策是品味問題，不是指令問題。

這才是 senior designer 現在的工作——不是在 Interactions 面板裡，而是在動態意圖的 brief 裡。
