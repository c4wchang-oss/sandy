# Topic 1: Graphical — 小紅書 Post (Traditional Chinese)
**Date:** 2026-10-07
**Platform:** 小紅書 (Xiaohongshu / RED)
**Format:** Practical review / tutorial
**Image:** graphical-xhs-zh.jpg (3:4)

---

**Title:** AI 建的介面為什麼看起來都一樣？這個工具在提示詞之前就解決了

**Body:**

你的 AI 介面看起來跟其他所有 AI 介面一樣，因為你在用文字描述你的設計語言。模型去近似它。Graphical 把實際的 constraint 直接給你的 coding agent。

本週剛發布，Josh Puckett（Iteration Design）+ Adam Michela。工作方式：

**Graphical 做什麼：**
1. 視覺主題編輯器——設計你完整的視覺語言：色盤、字型比例、間距、形狀（圓角、陰影）、動效（緩動、時間），元件互動狀態
2. 匯出包——`GUI.md`（agent 主題參考）、design token、Base UI React 元件、3 個 agent skill
3. 把包丟進 Claude / Cursor / Codex / ChatGPT context → agent 建的每個畫面都遵循你的設計語言

**內附的 3 個 Agent Skill：**
- 在你的主題中建立新畫面
- 把主題套用到現有 UI
- 找出並修復不一致的樣式（agent 自我審核輸出）

**為什麼設計師要在意這件事：**
- Constraint 架構 > 提示詞工程——在視覺品質上
- `GUI.md` = 你的 coding agent 會讀的 constraint 文件；不是給人看的 style guide
- 「找出並修復偏移」skill = 品質迴圈內建在工作流程裡，不是手動步驟
- 跟 design.md（Vercel）、DESIGN.md（Onefold）、GUI.md（Graphical）是同一個模式——constraint 文件堆疊現在覆蓋到 coding agent 的視覺層
- 視覺語言只定義一次；停止在每一個提示詞裡重複描述風格

**誠實的說明：**
- 付費（一次性購買，非訂閱）
- 基於 Base UI/MUI——實際上是 React
- 主題品質 = 你在編輯器裡的設計判斷
- 不是提示詞轉 UI 的生成工具——是生成上游的 constraint 層

**適合誰：**
使用 coding agent 出貨產品、對每個東西都長得像同一個 shadcn 入門套件感到厭倦的設計師和開發者。

重點框架：停止對視覺風格做提示詞工程。用你的 agent 可以讀的格式定義一次。

→ graphicalui.com

#AI設計 #CodingAgent #設計系統 #UIDesign #ConstraintArchitecture #GraphicalUI #設計工具 #AITools #前端設計 #UX設計

