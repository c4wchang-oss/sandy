# Topic 1: Amazon Connect Agentic CX Designer GA
# Platform: 小紅書 (Xiaohongshu) | Language: Traditional Chinese
# Date: Sep 7, 2026 | Format: 心得觀察
# Source: https://aws.amazon.com/about-aws/whats-new/2026/09/agentic-cx-designer/ (Sep 2, 2026)

---

**標題：** Amazon 把對話設計最難的問題，做成了一個視覺畫布

---

🎯 **發生了什麼：**
Amazon Connect 的 Agentic CX Designer 在 9/2 正式 GA。
視覺畫布，拖曳節點，設計 agentic 客戶體驗，不需要工程師就能部署。

📌 **它真正回答的設計問題：**
AI 可以在哪裡自行發揮？哪裡不能？

這一直都是對話設計真正的工作。現在這條線是一個視覺成品了。

**怎麼運作：**
1. 在畫布上建立流程（流程圖的形式）
2. 確定性節點 → 你定義精確邏輯（資格審核、路由、合規）
3. Generative Journey 節點 → LLM 在你設定的範圍內處理自然對話
4. Guardrails → 合規、品牌、政策在輸出層套用
5. 在同一個環境裡 test + deploy

設計體驗的團隊可以自己部署，不需要交接給工程。

✅ **實際不錯的地方：**
- 畫布強迫你明確說出哪裡是 AI 在控制
- Guardrail 內建在設計層，不是事後的安全補丁
- No-code，同一個地方 build + test + deploy
- 支援 9 個 AWS 區域（包含亞太）

⚠️ **誠實的限制：**
- 企業方案，需要 Amazon Connect
- 重度依賴 AWS 基礎架構
- 最難的部分還是你的：escalation path（AI 失敗或需要轉人工時怎麼辦）工具沒有幫你解決
- 不是獨立的對話設計工具

💡 **資深 UX 設計師的觀察：**

我們畫對話流程圖已經好多年了。從來沒有一個畫布，把「我控制這段」和「模型控制這段」做成明確可視的設計成品。

確定性流程和生成式對話之間的那條界線，就是設計決策。

你的新角色不是腳本作者。
是 guardrail 架構師。

**值得想清楚的事：**
→ 每個你設為生成式的節點，都是你放鬆的一個限制
→ 每一條 guardrail 都是設計決定，不只是技術設定
→ Escalation path（模型失敗、轉人工）需要和 happy path 一樣多的設計關注

---

#AI設計 #對話設計 #UX設計 #AmazonConnect #設計工具 #agenticAI #企業UX #設計心得
