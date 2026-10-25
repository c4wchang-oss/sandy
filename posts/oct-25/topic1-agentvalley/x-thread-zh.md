# X Thread — AgentValley（繁體中文）
# 日期：2026/10/25 | 工具：AgentValley | 平台：X / Twitter
# 圖片：images/topic1-x-threads-16x9-zh.svg

---

**Tweet 1（Hook）**
5 個 Claude Code agent 同時在跑。
其中一個在等你。
你不知道是哪一個，直到切換過 5 個 terminal tab。

這是一個通知設計問題。有人剛解決了它。

---

**Tweet 2**
AgentValley 是免費開源的 macOS app，把每個 Claude Code session 放進你 MacBook 的 notch。

每個 session：一張卡片。
每個 sub-agent：一列。
每個 agent：一個 pixel programmer 頭像。

任何一個需要你的注意時，紅色計數就會出現。

---

**Tweet 3**
從 UX 的角度來說，這件事很重要。

當你有 5 個 agent 在跑，permission dialog 變成了你最重要的通知。

「我可以 git push to main 嗎？」

這出現在 terminal tab 裡。你在另一個視窗。你 20 分鐘後才會看到。

Notch 是你眼睛本來就會去的地方。訊號應該在那裡。

---

**Tweet 4**
這個互動設計值得研究：

→ 紅色 badge = 一個或多個 agent 在等你
→ 點擊 notch → 看是哪一個 + 它在問什麼
→ 一鍵跳到準確的 terminal tab
→ 可選 plugin：直接從 notch 批准或拒絕

寫入存取的部分需要你自己安裝 plugin。唯讀監控是預設的、可驗證的行為。這是正確的分離。

---

**Tweet 5**
這延伸了我三週前寫的一個模式：AI agent 可見性是空間型 UX 設計問題。

Cubicle（10月4日）：像素風格辦公室，每個 AI agent 坐在一張桌子。一眼可見的空間可見性。

AgentValley（10月24日）：notch 儀表板。每個 agent，一張卡片。同樣的設計賭注，更小的介面，更靠近注意力本來的所在。

Log 檔案是「哪個 agent 在等我」的錯誤答案。

---

**Tweet 6**
兩個我認為正確的信任架構決定：

1. 核心監控只讀取本地 Claude Code 檔案和系統行程。沒有外部請求。開源，所以可以驗證。

2. 寫入存取——從 notch 批准指令——透過你自己安裝的 plugin 來 opt-in。監控層和執行層刻意分開。

唯讀作為預設是一個設計決定，不是一個限制。

---

**Tweet 7**
有個被低估的 DesignOps 角度。

AgentValley 按 API 定價追蹤每個專案、每個 session 的 AI 成本。可匯出為 PDF statement of work。

第一個讓 AI agent 成本成為每個專案明細項目的工具——不再是一張無法向客戶解釋的月費帳單。

Brief 品質 = 信用效率。現在可以在專案層級看到它了。

---

**Tweet 8（CTA）**
Pixel programmer 頭像是個小東西。它也是正確的資訊設計。

當 5 個 agent 在跑時，你需要知道「是哪一個」，而不需要讀任務描述。視覺身份讓你一眼就知道。跟 Figma 裡使用者在線指示器是同樣的挑戰。

AgentValley 為 AI agent 解決了這個問題。

免費、開源、macOS、Claude Code 專屬。它解決的設計問題有 10 年歷史。有人終於注意到了。

---
