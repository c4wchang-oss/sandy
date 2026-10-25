# Xiaohongshu Post — AgentValley（繁體中文）
# 日期：2026/10/25 | 工具：AgentValley | 平台：小紅書
# 圖片：images/topic1-xiaohongshu-3x4-zh.svg

---

**標題：**
5 個 AI agent 同時跑是一個 UX 設計問題——AgentValley 怎麼解決它的

---

**正文：**

大多數 AI 編程工具的報導都集中在生成品質。
這個是關於通知設計的。

---

**問題是什麼：**

當你同時跑 5 個 Claude Code session，permission dialog 變成了你最關鍵的通知：

「我可以 run npm install 嗎？」
「我可以 git push origin main 嗎？」

這些出現在 terminal tab 裡。你可能在另一個視窗。20 分鐘後才會看到。一個 session 在堵塞，什麼都不做，在等你。

---

**AgentValley 做什麼：**

① 每個 session = MacBook notch 裡的一張卡片
② 每個 sub-agent = 一列，帶有 pixel programmer 頭像
③ 任何 agent 需要你注意 → 紅色計數出現
④ 一鍵跳到準確的 terminal tab
⑤（可選 plugin）直接從 notch 批准或拒絕

---

**為什麼 Notch 是正確的設計決定：**

是環境型的。周邊的。你眼睛本來就會去的地方。
不是 modal。不是推播通知。不是另一個要管理的視窗。

跟 glanceable 介面的原則一樣：在正確的地方放正確的訊號，在不增加注意力成本的情況下降低錯誤率。

---

**信任架構（值得了解）：**

- 核心監控只讀取本地 Claude Code 檔案——沒有外部請求
- 寫入存取（notch 批准）需要你另外安裝 plugin
- 開源——你可以審核所有東西
- 只相容 Claude Code（不是 Copilot 或其他 AI 編程工具）

監控層和執行層刻意分開。這不是空缺，是設計決定。

---

**DesignOps 額外優勢：**

按 API 定價追蹤每個專案的 AI 成本。
可匯出為 PDF statement of work。

第一個讓 AI agent 成本成為專案明細項目的工具——不再是月費帳單上的謎。

---

**Senior UX 觀點：**

Pixel programmer 頭像是個小東西。
它也是正確的資訊設計。

5 個同時進行的 agent = 協作工具中的 5 個使用者 = 你需要視覺身份，不用讀任何東西就能分辨它們。

跟我們在 Figma 裡解決使用者在線指示器的設計挑戰是一樣的。
AgentValley 為 AI agent 解決了這個問題。

---

免費、開源、僅限 macOS：agentvalley.app

#AI設計 #UX設計師 #ClaudeCode #MacOS #通知設計 #AI工具 #設計思維 #UX工作流程 #AI代理人

---
