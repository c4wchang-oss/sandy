# 小紅書貼文 — Notion 3.7 Agent Skills（繁中）
## Sep 17, 2026 | 圖片：topic1-xiaohongshu-zh.png（3:4）

---

**標題：** Notion 3.7 Skills：把那個最會用 AI 的人的知識，變成整個團隊的基礎設施

---

你們團隊的 AI 工作流，不應該依靠某一個人的對話歷史。

Notion 3.7 推出 Skills，想解決這個問題：可重複使用的指令，以 Notion 頁面方式維護，整個團隊共享，Notion Agent 自動使用。

以下是發生了什麼、為什麼對設計師重要：

**1/ Skills 實際上是什麼**
Skills 就是你標記為 skill 的 Notion 頁面。為可重複執行的任務寫指令，給它一個清楚的描述。團隊用 `/` 指令在 Notion Agent 裡跑它。
例如：「把開會記錄轉成 PRD」「用我們主設計師的方式批評這份文件」「把研究摘要格式化成我們的團隊 template」

**2/ Skills Library — 整個 workspace 的共享入口**
瀏覽隊友建的 skills、Notion 官方 skills、你自己的 skills。
管理員可以設定最多 50 個 workspace 預設 skills。每個人在用最新版本。再也不用問「你那個 prompt 可以分享給我嗎」。

**3/ SKILL.md 可攜性 — 這是架構層面的移動**
在 Notion 建立 skill → 下載 → 同一套指令在 Claude Code、Cursor、Gemini、Grok 裡跑。
單一 source of truth，多 agent 環境。你在 Notion 維護的 skill，在你團隊使用的每一個工具裡都在運作。

**4/ 自動觸發**
Notion Agent 讀你寫的描述，自動判斷什麼時候該用哪個 skill。
描述品質 = 自動觸發準確率。描述寫得模糊 → 錯誤的 skill 自動觸發，而且很有自信。

**要誠實說的幾件事：**
→ 下載後不會自動同步，skill 更新要手動重新下載
→ Workspace 管理員功能在 Business/Enterprise 方案
→ 每個成員最多 200 個 skills（自動觸發最多 50 個）

**對資深設計師來說代表什麼：**
「最會 prompt 的人」的優勢，正在從個人移動到組織層面。新的資深技能不是寫更好的 prompt，而是建立並維護一個整個團隊都在跑的 skills 庫。

要開始追蹤的新型組織技術債：編碼了過時工作流程的 skills，幾個月後還在自動執行，沒有人發現。跟文件技術債一樣的問題，但更難被察覺。

---

#NotionAI #Notion37 #AI設計 #設計流程 #DesignOps #AgentSkills #AI工具 #設計師必看 #生產力工具
