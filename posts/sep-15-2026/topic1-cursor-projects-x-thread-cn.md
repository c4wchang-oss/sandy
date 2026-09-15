# Topic 1: Cursor Projects — X Thread (Traditional Chinese)
**Image:** `images/topic1-coordinator-en-16x9.png` (16:9)

---

**Tweet 1 (Hook)**
Cursor 有個工程師現在用一個 Project 自動掃描每個 PR、提取設計系統元件、然後自動寫 lint rule。

沒人今天 prompt 它。

這就是 2026 年 senior designer 工作的樣子。

---

**Tweet 2**
Cursor 剛推出 Projects。

一個 coordinator agent，不寫 code，只負責規劃、分配任務給 subagent 執行，然後把完成的工作交回給你確認。

---

**Tweet 3**
公告裡最重要的部分是設計系統的使用案例。

一個工程師 + 一個 Project：
• 自動監看所有 PR
• 提取應該進 DS 的元件
• 每次看到同樣的錯誤，自動新增 lint rule

---

**Tweet 4**
一天 20 到 100 個 PR。

一個人負責需要注意的地方。

工作沒消失。工作變了。

---

**Tweet 5**
Coordinator 維護一個「Field Guide」— 一個由 agent 管理的資料夾，自動注入到每個新 agent 的 context 裡。

Agent 策展內容，Project 越做越強。

這就是組織知識被編碼的樣子。

---

**Tweet 6**
設計的對應很直白。

每次你在 Figma 加 annotation、寫元件說明、補 DS 文件，都是在嘗試手動建立 Field Guide。

---

**Tweet 7**
現在 senior designer 的核心問題不再是「今天要 audit 什麼？」

而是「coordinator 在什麼品質門檻下可以自己決定？不需要問我？」

這個問題，比我最近做的任何元件決策都難。

---

**Tweet 8**
Projects 還在 beta，品質取決於你最初給的 intent。

但架構是對的：

execution → orchestration → governance → delegation

Projects 是第一個讓「委派」變成持續後台流程（不是一次性任務）的工具。
