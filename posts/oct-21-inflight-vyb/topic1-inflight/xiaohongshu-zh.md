# Inflight — Xiaohongshu Post (Traditional Chinese)
# Platform: 小紅書 (Xiaohongshu)
# Format: Practical review/tutorial style
# Date: Oct 21, 2026

---

**Title:** 設計 review 一直是產品開發最混亂的交接點，這個工具剛把它修好了

---

如果你的設計 review 流程長這樣：

📍 Loom 錄影丟進 Slack
📍 留言分散在 Notion
📍 設計師把所有東西重新打成 prompt
📍 Agent 生出錯誤的畫面
📍 重複

你不孤單。這幾乎是現在所有團隊的狀況。

**Inflight** 是一個直接住在你 prototype 裡的 feedback 層。

---

**它怎麼運作（一步一步）：**

1. 分享 preview 連結或 HTML prototype
2. Reviewers 把留言 pin 在 app 實際的 UI 元素上——不是截圖，是真實的 running app
3. 直接在 prototype 上錄影回覆，不用另外開 Loom 連結
4. 你的 coding agent（Cursor、Claude Code、Codex）透過 MCP 拿到結構化的 next steps

沒有翻譯層，不用重新打字。Feedback 從 reviewer → 元素 → agent，一條線走完。

---

**為什麼對跟 AI coding agents 合作的設計師很重要：**

→ 人類讀到模糊的 feedback，會追問
→ AI agent 執行模糊的 feedback，會套用假設然後生出錯誤的畫面

當執行者是 AI 的時候，不精確的 feedback 成本高得多。

---

**大多數人會忽略的功能：**

Structured questions。在 review 開始前，你定義哪些決策真正需要 feedback——框成特定的問題。agent 拿到的是結構化答案，不是意識流留言。

這是把 brief writing 的紀律帶進 review 流程。小小的改變，很大的差別。

---

**誠實評估：**

✅ 支援 deployed apps + HTML prototypes
✅ MCP 連接 Claude Code、Cursor、Codex
✅ 內建 Slack 同步——留言自動出現在 thread
✅ 影片回覆住在 prototype 裡面
⚠️ 需要在 HTML 加 script tag
⚠️ 真正的考驗：你的團隊會不會認真寫 structured questions，還是把一樣模糊的 feedback 丟進比較漂亮的介面？

---

**更大的圖：**

ProtoPie MCP 讓 prototype 對 coding agents 變成 machine-readable。
Inflight 讓 prototype 的 review 也變成 machine-readable。

Design handoff 的兩端現在都封閉了。

設計 review 一直是 handoff 斷掉的地方。Inflight 是我看過第一個讓 feedback 對 agent 也變成 machine-readable 的工具——不只是對人類可讀。

---

#UX設計 #設計工具 #AI工具 #prototype #設計流程 #產品設計 #設計review #codingagent #MCP #設計師
