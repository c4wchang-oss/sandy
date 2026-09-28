# 小紅書 Post — Claude Design 作者本人的工作流程，和你用的完全不同（繁體中文）
**主題：** Nate Parrott（Claude Design 作者）分享他真實的日常工作流程——2026年9月27日

---

**標題：**
Claude Design 的作者這樣用——和大多數人的用法完全不同，差在哪裡

---

**內文：**

Nate Parrott，建立 Claude Design 的 product designer，分享了他真實的日常工作流程。和大多數人預設的「描述你想要的 → 調整 → 重複」循環非常不同。

四個核心差距：

**① 先做 wireframe，再做 mockup**
他先用低保真度規劃版面——在顏色、字體、圖片之前。模型可以專注在構成上，不用同時解決美感。先做結構，再做視覺。

大多數人跳過這步，這就是為什麼第一版輸出總是需要很多輪修改。

**② 給 reference，不是給描述**
對於現有產品，他把 Claude Design 連接到真實的 GitHub repo，或提供品牌文件、現有 component。模型有具體材料可以建立——不是一段抽象描述需要詮釋。

Reference 勝過描述，每次都是。

**③ 設計系統 = 可重用的 context**
一旦確定了有效的視覺方向，他就把它編碼成設計系統。下次 Claude 從那個基礎出發，不是空白開始。和 AGENTS.md、design.md、Once UI 的 agent harness（9月25日）一樣的原則：想一次，限制來執行。

**④ 最後 10% 用直接編輯，不是重新提示**
Claude Design 有直接操作工具——重排、調整大小、編輯文字、改顏色、刪除。他用這些做最後的精確微調，而不是重新寫提示詞。

零 tokens，沒有新的生成循環。只在精確度比 prompting 更快的那層做手動控制。

**這揭示的通用模式：**

先定義結構 → 提供具體 reference（不是描述）→ 在有邊界的空間生成 → 手動精確編輯

我在 Figma Custom Skills 教程、Framer Skills 文件、Vercel design.md、Google Stitch 品牌 kit 拖入裡都看過這個順序。工具改變，底層邏輯不改變。

**問一個你自己工作流的問題：**
你目前哪個地方在用抽象描述，但可以用 reference 代替？

那個差距——描述和 reference 之間——是大多數 AI 設計品質流失的地方。完全在你的控制範圍內。

---

**誠實說明：**
這是 Nate 公開分享的個人工作流程，不是 Claude Design 官方教程。請根據你自己的 context 調整。

**重新框架：**
最好的 AI 設計工作流不是從「描述你想設計什麼」開始的，而是從「給模型一個具體可以建立的東西」開始的。工作流是 brief，brief 是限制，限制是上限。

---

#ClaudeDesign #AI設計 #UX設計 #設計工作流 #資深UX設計師 #AI設計工具 #設計系統 #NateParrott #AI工作流 #設計思維
