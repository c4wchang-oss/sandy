# Topic 1: Graphical — X Thread (Traditional Chinese)
**Date:** 2026-10-07
**Platform:** X (Twitter)
**Format:** 8-tweet thread
**Image:** graphical-x-threads-zh.jpg (16:9)

---

**Tweet 1 — Hook**
AI 生成的介面看起來都很像的原因不是模型的問題。
是因為設計語言是用文字傳入的。

Graphical 是一個改用 constraint 傳入的工具。

---

**Tweet 2**
Josh Puckett 和 Adam Michela 剛發布了 Graphical：
一個視覺主題構建工具，輸出 `GUI.md`、token、Base UI 元件，以及三個 coding agent skill。

你設計好視覺語言，然後把整包東西交給你的 coding agent。

---

**Tweet 3**
工作流程是最有趣的部分：

1. 開啟 Graphical，建立你的主題（色彩、字體、間距、形狀、動效、元件狀態）
2. 匯出：你得到 `GUI.md` + token 檔案 + Base UI React 原始碼 + 3 個 agent skill
3. 把這個包丟進你的 coding agent 的 context
4. 它生成的每個畫面都知道你的設計語言了

---

**Tweet 4**
`GUI.md` 是關鍵的檔案。

這是 agent 在生成任何介面之前會讀的詳細主題參考。
不是給人看的 style guide——是給 agent 的 constraint 文件。

跟 `design.md`（Vercel）和 `DESIGN.md`（Onefold）是同一個原則，但專門針對視覺語言層。

---

**Tweet 5**
內附的三個 skill：

→ 用主題建立新畫面
→ 把主題套用到現有 UI
→ 找出並修復不一致的樣式

Agent 可以自我審核輸出是否偏移。
這跟「這裡有一段提示詞可以複製」是完全不同的工具類別。

---

**Tweet 6**
這跟我一直在追蹤的模式有關：

Thanor（Oct 5）：constraint spec 函式庫——30 個設計值在提示詞之前就消除 AI slop。
Graphical：視覺語言編輯器——以 agent 實際可以讀的格式輸出 constraint。

兩個工具說的是同一件事：更努力地下提示詞沒有用。Constraint 架構才有用。

---

**Tweet 7**
誠實的說明：
- 這是一次性購買，不是免費工具
- 基於 Base UI 元件——token 是框架無關的，但實作上是 React
- 品質天花板仍然取決於你在主題編輯器裡的品味
- 它不幫你寫提示詞——它讓你根本不需要再寫視覺風格的提示詞

---

**Tweet 8 — CTA**
Graphical 的洞察不是「AI 可以幫你的 UI 套樣式」。

而是你應該只定義一次視覺語言，用 agent 可以讀的格式，然後停止在每個提示詞裡重複描述它。

用提示詞工程來控制視覺風格是錯誤的工作單位。
Constraint 架構才是對的。

→ graphicalui.com

