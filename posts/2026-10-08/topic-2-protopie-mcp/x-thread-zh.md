# Topic 2: ProtoPie MCP Official — X Thread (Traditional Chinese)
**Date:** 2026-10-08
**Platform:** X (Twitter)
**Format:** 8-tweet thread
**Image:** protopie-mcp-x-threads-zh.jpg (16:9)

---

**Tweet 1 — Hook**
ProtoPie MCP 正式 GA 了。

Prototype 不再只是溝通產出物。它現在是機器可讀的規格文件。

Studio MCP 控制 prototype。Code MCP 把它轉換成任何 AI coding agent 的生產程式碼。來說說這個 pipeline 實際上做什麼。

---

**Tweet 2**
兩個 server。兩件完全不同的事：

Studio MCP：ProtoPie Studio 裡的 AI 副駕駛。編輯你正在打開的 prototype——新增 trigger、讀取互動、瀏覽你的設計函式庫。Pro 方案。

Code MCP：唯讀轉換器。你完成的 prototype → AI coding agent 的結構化 context。僅限 Enterprise。

---

**Tweet 3**
Code MCP 的 handoff 工作流程：
1. 在 ProtoPie Cloud 打開 Dev View
2. 選擇：整個 Pie、一個場景、一個元件，或一個 layer
3. 複製連結
4. 貼入 Claude Code / Cursor / Codex / VS Code
5. Agent 讀取：場景樹、變數、trigger-response 配對、條件、公式
6. Agent 寫出程式碼

不是截圖。是實際的互動邏輯。

---

**Tweet 4**
這才是關閉 prototype → 程式碼缺口的東西。

舊的 handoff：Zeplin spec + 設計師試圖在 Slack 解釋微互動 + 開發者去猜測。

新的 handoff：你 ProtoPie prototype 裡的 trigger-response 邏輯，就是 coding agent 直接讀取的規格。

Prototype 裡的互動保真度不再只是驗證用的。它就是 handoff 產出物。

---

**Tweet 5**
Code MCP 的唯讀 constraint 是正確的設計決定。

寫入權限意味著 AI 可以從程式碼端修改 prototype。兩個事實來源。它們會分歧。

唯讀是讓 prototype 具有權威性的東西。Constraint 讓 pipeline 可信。

---

**Tweet 6**
Code MCP 支援的框架：
React、React Native（這次新增）、Flutter、SwiftUI、Compose、Qt/QML、ArkTS。

這次也新增：Studio MCP 的函式庫瀏覽（在工作流程中保持設計系統的同時新增函式庫元件）、ID 定位（複製任何 layer、場景、變數或 trigger ID 直接用在提示詞裡）。

---

**Tweet 7**
誠實的說明：
- Code MCP 僅限 Enterprise 方案——Studio MCP 是 Pro
- 程式碼品質取決於你的 agent 和提示詞；Code MCP 提供很好的 context，不保證輸出
- 唯讀——程式碼無法反向轉回 prototype
- 目前只有本地 stdio server；還沒有遠端 MCP
- React Native 是新增的；其他框架之前就支援了

---

**Tweet 8 — CTA**
我一直思考的框架：

Figma 有視覺設計層的 MCP 存取。ProtoPie 現在有互動和行為層的 MCP 存取。

這是完整的設計規格——視覺保真度和互動邏輯——都以 AI coding agent 可以直接讀取的格式存在。

Handoff 問題現在是一種不同類型的問題了。
