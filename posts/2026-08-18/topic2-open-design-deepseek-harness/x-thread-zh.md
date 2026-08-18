# X Thread — 繁體中文
# 主題：Open Design 0.19.1 + DeepSeek Harness 本地 AI agent

---

**推文 1（鉤子）**
DeepSeek 剛推出開源 agent harness。
幾天內 149,000 顆 GitHub 星。

現在它在你的設計工具裡面跑了。

這不是又一個 AI 整合。
架構是反過來的。

---

**推文 2**
Open Design 0.19.1 把 DeepSeek Harness（dsh）帶進來作為本地 agent。

關鍵架構細節：「everything is a plugin」。

大多數 AI 設計工具整合：設計工具呼叫模型。
這裡：agent harness 呼叫設計工具。
這個反轉才是重點。

---

**推文 3**
為什麼反轉很重要：

雲端 AI 工作流程：
→ 你把檔案送到模型
→ 模型在遠端處理
→ 資料離開你的環境

本地 harness 工作流程：
→ 模型在你的機器上跑
→ Agent 透過插件進入設計工具
→ 資料留在本地

對客戶工作的隱私影響完全不同。

---

**推文 4**
對做敏感客戶工作的設計公司——這是第一個真實的答案。

設計工具功能裡的模型主權。
專有設計系統不離開你的機器。
機密版面不經過雲端處理。

dsh + Open Design = 不需要和廠商談 DPA 就能滿足大多數企業資料政策的 AI 設計工作流程。

---

**推文 5**
「everything is a plugin」架構在隱私之外也很有意思。

如果 harness 是 orchestration 層，
設計工具只是眾多插件之一…

設計工具剛剛失去了作為主要環境的地位。
它變成了情境——agent 的一個輸入來源。

這是哪個工具「擁有」工作流程的重要轉變。

---

**推文 6**
Senior Designer 的影響：

如果 agent harness 是你操作的環境，
你的工作是配置這個環境——不只是寫 prompt。

Brief 品質。系統結構。插件排序。
constraint architecture 往上移了一層。

---

**推文 7**
這是 Figma Agent 和 Claude Design 的開源回答。

完全本地。完全可控。不被廠商鎖定。

但也：沒有內建的 Figma 品質上限。
你帶來你自己的設計系統。那個系統就是品質上限。

這恰好是它應該在的地方。

---

**推文 8**
DeepSeek 推出 149k 星本地 agent harness 的這週，「企業 AI 就是雲端 AI」就停止是真的了。

本地 agent 跑設計工具不再是研究計畫。
它是符合隱私合規的實際工作流程。

有人在真實客戶專案測試 dsh + Open Design 嗎？很好奇跟雲端相比實際的 prompt overhead 如何。

---
