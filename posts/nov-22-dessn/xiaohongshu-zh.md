# 主題一：Dessn — 小紅書貼文
# 平台：小紅書
# 語言：繁體中文
# 日期：2026 年 11 月 22 日

---

## 標題
所有 AI 設計工具都在對截圖工作，Dessn 對你正在運行的 code 工作

---

## 正文

分享一個改變 AI 輔助設計工作 quality ceiling 的工具——而且它跟「生成」沒有任何關係。

**Dessn 實際上在做什麼：**
連接你的 GitHub/GitLab/Bitbucket repo，你的 codebase 在 5 到 15 分鐘內建成一個 live canvas。每個畫面都是可以點擊的 frame，每個 frame 運行你的真實 code。

**為什麼這對 agent 很重要：**
在所有其他工具裡，coding agent 會「近似」你的 design system——做出「看起來像你的」component。在 Dessn 裡，agent 找到你的 app 真正在用的 component，拿到 file 和 line reference，然後直接重用它。不是視覺近似版本，是真正的 source。

**5 件值得知道的事：**

1. **Design system 預設被執行** — agent 無法創造不在你 codebase 裡的 component，只能用已經存在的東西
2. **改動可以帶回去** — 工作以 git patch、commit 或 bundle 的形式帶回你的 local repo
3. **MCP-native** — 支援 Claude Code、Codex、Cursor、ChatGPT、claude.ai；`claude plugin install dessn@dessn` 或加 `https://mcp.dessn.ai/mcp` 為 remote MCP
4. **Cloud agent 的 caveat** — ChatGPT、claude.ai 可以讀你的 canvas 和整理 boards，但 frame code 寫入要轉給 Dessn 自己的 design agent（不直接寫進你的 code）
5. **免費方案限制** — 每 team 每月 50 個 MCP call；讀取也算；Pro 無上限，一個座位覆蓋整個 team

**更大的 pattern：**
我從九月開始追蹤「canvas-as-context」——AI agent 應該從設計師在看的同一個表面出發工作，而不是從描述那個表面的文字出發。Dessn 是第七個實例，第一個讓 canvas 等於 production codebase 的工具。

「reference 比描述更有效」是今年的主導原則，這是它的邏輯終點。

**適合誰：**
有成熟 codebase、一直在出新畫面但 component 使用不一致的 product team。解法不是更好的 prompt，而是一個只認識你真實 component 的 canvas。

---

#UX設計 #AI工具 #設計系統 #產品設計 #UX技巧 #figma #codingagent #設計workflow #AIworkflow #senior設計師 #AI設計
