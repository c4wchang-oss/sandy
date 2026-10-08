# Topic 2: ProtoPie MCP Official — 小紅書 Post (Traditional Chinese)
**Date:** 2026-10-08
**Platform:** 小紅書 (Xiaohongshu / RED)
**Format:** Practical tutorial / review
**Image:** protopie-mcp-xhs-zh.jpg (3:4)

---

**Title:** ProtoPie MCP 正式 GA——Prototype 現在是你 Coding Agent 直接讀的規格文件

**Body:**

ProtoPie MCP 昨天正式發布。兩個 MCP server。在設計到程式碼的工作流程中做兩件完全不同的事。

**Studio MCP（Pro 方案）—— 工作時的 AI 副駕駛：**
- 把 Claude / Cursor / Codex 連接到 ProtoPie Studio
- AI 用自然語言新增 trigger 和 response
- 瀏覽並插入函式庫元件（在工作流程中保持你的設計系統）
- 複製元素 ID 放入提示詞，精準定位特定元素
- AI 即時與你一起讀取和編輯 prototype

**Code MCP（Enterprise）—— 把完成的 Prototype 轉換成生產程式碼：**
1. 在 ProtoPie Cloud 打開 Dev View
2. 選擇任何元素：整個 Pie、一個場景、一個元件，或一個 layer
3. 複製 Dev View 連結
4. 貼入 Claude Code / Cursor / Codex / VS Code
5. Agent 讀取：場景樹、layer 結構、變數、trigger、response、公式
6. Agent 生成與你 prototype 實際互動邏輯相符的程式碼

**支援的框架：**
React · React Native（新增！）· Flutter · SwiftUI · Compose · Qt/QML · ArkTS

**為什麼這關閉了 Handoff 缺口：**
薄弱的一環一直都是互動規格——不是視覺規格。

- Figma 告訴開發者靜態狀態長什麼樣
- ProtoPie Code MCP 告訴 coding agent 用戶互動時發生什麼

你的 trigger-response 邏輯不再需要在 Slack 裡解釋了。它是 agent 直接讀取的結構化資料。ProtoPie 裡的高保真互動工作現在在 handoff 時有直接的經濟價值。

**要理解的關鍵設計決定：**
Code MCP 是唯讀的。它不能寫回你的 prototype。

這是正確的。寫入權限 = 兩個事實來源 = 分歧。唯讀讓 prototype 具有權威性。Constraint 讓 pipeline 可信。

**誠實的說明：**
- Studio MCP → Pro 方案 | Code MCP → 僅限 Enterprise
- 程式碼品質取決於你的提示詞和 agent
- 只有單向——沒有程式碼 → prototype 的反向轉換
- 本地 stdio server（尚無遠端部署）

加上 Figma MCP：視覺設計 + 互動邏輯 = 完整的機器可讀設計規格。

#ProtoPie #MCP #設計Handoff #UX設計 #CodingAgent #設計到程式碼 #Prototyping #AI設計 #產品設計 #設計工具
