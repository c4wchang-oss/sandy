# Topic 1: Amazon Connect Agentic CX Designer GA
# Platform: X (Twitter) | Language: Traditional Chinese
# Date: Sep 7, 2026 | Format: Thread (8 tweets)
# Source: https://aws.amazon.com/about-aws/whats-new/2026/09/agentic-cx-designer/ (Sep 2, 2026)

---

**Tweet 1（開場）**
Amazon 剛把 Agentic CX Designer 正式上線了。

視覺畫布，拖曳節點，直接部署到正式環境。

有趣的不是工具本身，是它強迫你做的那個設計決定。

🧵

---

**Tweet 2**
做對話設計的人一直活在兩個不舒服的世界裡：

1. 全腳本 — 確定性強，但一碰到沒預期到的話就壞掉
2. 全 AI — 自然，但在合規場景裡不可預測

Amazon 的 Agentic CX Designer 第一次把這條線畫出來了。

---

**Tweet 3**
核心設計模式：

你建一個流程圖。
LLM 在流程圖的範圍內處理對話。

確定性邏輯的地方（資格審核、合規、路由）→ 你定義精確規則。
對話性的地方 → 模型自行發揮。

這兩者之間的那條邊界，就是你的設計工作。

---

**Tweet 4**
這是 constraint architecture 應用在對話式 AI 上的例子。

問的不是「機器人要說什麼？」
而是「哪裡可以讓機器人自己決定說什麼？」

這才是更誠實的對話設計問題。

---

**Tweet 5**
Amazon 做了什麼：
→ 視覺畫布（流程圖建結構）
→ Generative Journey 節點（LLM 處理自然對話）
→ Guardrails（合規、品牌、政策約束輸出）
→ 同一個環境裡 build → test → deploy，不需要交接給工程

設計的團隊也能自己部署，不再需要等工程師。

---

**Tweet 6**
誠實的限制：

→ 企業方案，需要 Amazon Connect
→ 不是獨立的對話設計工具
→ 整條鏈依賴 AWS 基礎架構
→ 真正的複雜度在 escalation path（AI 失敗或需要轉人工的時候怎麼辦）

最後那個，還是一個人類設計問題。

---

**Tweet 7**
資深 UX 的觀察：

我們畫對話流程圖已經很多年了。

從來沒有一個畫布把「我控制這段」和「模型控制這段」做成明確的、可視的設計成品。

限制本身就是設計。
不是腳本。

---

**Tweet 8（結尾）**
角色的轉換：

舊的對話設計 → 寫腳本，處理 edge case
新的對話設計 → 定義 guardrail，讓模型負責措辭

畫布讓這條邊界變得可見。
資深角色：guardrail 架構師，不是腳本作者。

這是企業 CX 一直會走到的地方嗎？↓
