# X 串文 — Notion 3.7 Agent Skills（繁中）
## Sep 17, 2026 | 圖片：topic1-x-threads-zh.png（16:9）

---

**第 1 則（hook — 附圖片）**
每個團隊都有那個最會用 AI 的人。

Notion 3.7 把那個人的 know-how 變成整個團隊的資產，不再只是他的秘密武器。

---

**第 2 則**
Skills 是可重複使用的指令，以 Notion 頁面方式維護。

一個人建立 skill：「把這份草稿改成主管簡報的格式」。
整個團隊透過 Notion Agent 都能跑。

再也不用問「你那個 prompt 可以分享給我嗎」。

---

**第 3 則**
Skills Library 是統一的入口。

瀏覽隊友建的 skills、Notion 官方 skills、你自己的 skills。
管理員可以設定最多 50 個 workspace 預設 skills。
每個人都在用最新版本。

提示詞的知識從對話歷史 → 變成共享基礎設施。

---

**第 4 則**
SKILL.md 可攜性才是真正的架構意義。

在 Notion 建立 skills → 下載到 Claude Code、Cursor、Gemini、Grok。
同一套指令。多 agent。單一 source of truth。

你寫了一次的 skill，在團隊所有 agent 環境裡都在執行。

---

**第 5 則**
Notion Agent 在判斷相關時自動套用 skills。

它讀的是你寫的 description 來決定要不要觸發。

描述品質 = 自動觸發準確率。
描述寫得模糊 → 錯誤的 skill 自動啟動。

Brief 還是那個 interface，只是現在寫一次就好。

---

**第 6 則**
這個模式現在到處都是：

SKILL.md（Figma，8/13）
CLAUDE.md
design.md（Vercel，9/2）
Field Guide（Cursor Projects，9/15）
Skills（Notion 3.7，9/15）

AI 指令檔就是團隊文件。同一份文件，兩種受眾。

---

**第 7 則**
要誠實說一件事：

下載的 SKILL.md 不會自動同步。
Notion 裡的 skill 更新後，你只會看到一個 badge，還是要手動重新下載。

這個刷新流程會在分散式團隊裡靜默地壞掉。一定有人一直在跑舊版本。

---

**第 8 則**
還沒有人在講的新型組織技術債：

編碼了過時工作流程的 skills，幾個月後還在自動觸發。

跟文件技術債一樣的問題。
但更難被發現，因為 agent 不會抱怨——它只是很有自信地執行錯誤的版本。

角色轉移：停止囤積好的 prompt，開始維護 skills 庫。
