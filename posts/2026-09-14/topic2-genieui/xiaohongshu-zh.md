# Topic 2: GenieUI — 小紅書 (Traditional Chinese)
# Platform: 小紅書 (Xiaohongshu) | Format: Practical Opinion/Tutorial | Language: Traditional Chinese (TW)

---

## 標題
這個 AI 設計工具把你的 design system 當「邊界」不是「參考」

## 正文

看到一個工具讓我停下來想了一下。

**GenieUI**。

一句話描述：把 prompt 轉成可編輯的 iOS / Android 介面。

但它的工作方式，跟你看過的其他 AI design tool 根本不一樣。

---

**大多數 AI 設計工具的邏輯 VS GenieUI**

❌ 一般工具：自由生成 → 你去修 → 事後套限制
✅ GenieUI：先登記你的 design system → AI 只從你的 catalog 選 → 拿到可編輯的 component tree

他們的 tagline 說得很直接：
**「有規則的精靈比有想像力的精靈更有用。」**

---

**Output 是什麼樣子**

不是 screenshot。
不是你沒辦法碰的 HTML markup。

是一個帶有 layers、inspector、zoom 和直接操作的 **component tree**。

因為全部都從你的 component 生成，所以所有東西都是可編輯的——AI 是在你的詞彙內工作，不是自己發明一套。

---

**為什麼 Senior Designer 應該注意**

Quality ceiling = **你的 design system 的詞彙品質**。

- Component props 模糊 → AI 決策模糊
- Token 命名不一致 → layout 不一致
- 文件不夠清楚 → AI 就猜

之前的 AI 工具可以糊過你的 design system 文件品質問題。
GenieUI 不行。

這個工具讓你以前可以拖著的 design system 債，以一種新方式顯形。

---

**它是 model-agnostic 的**

Claude、Codex、Gemini、Grok、DeepSeek、Mistral 全部支援。

可以針對不同任務換不同 model，不需要重建 project。

沒有 vendor lock-in = 不會有某個 model 的美感偏見永久住進你的工作流。

---

**誠實說的部分**

GenieUI 是社群 v0.1 項目，有以下限制：

- 「Component tree」到「deployed mobile screen」之間還有 gap
- 不是要取代 Figma 或你的 design system 工具
- 目前還是早期，有 bug 很正常

但 **constraint-first 的架構思路是對的**。

接下來兩年做到 production quality 的那個工具，就是贏家。

---

**現在值得做的一件事**

拿一個你最常用的 component，看看你的 props 和 token 名稱，是不是具體到可以讓 AI 做出「好決定」而不需要問你。

如果不是——那是 design system 的問題，不是 AI 的問題。

這個答案，會告訴你你的 design system 投資有沒有真的回收。

#AIdesign #designsystem #UX設計師 #AItools #mobiledesign #PrototypingTool #AIdesigntool #Senior設計師 #design #2026趨勢
