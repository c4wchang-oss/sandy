# Topic 1: Meta Astryx — Threads (Traditional Chinese)
# Platform: Threads | Format: Long-form personal reflection + short punchy take | Language: Traditional Chinese (TW)

---

## 長文

Meta 上週五把 Astryx 開源了。150+ 個 accessible React component、內部用了 8 年、MCP endpoint 內建。

我的第一個反應：底線又拉高了。

---

Astryx 真正有意思的不是 component 數量，是架構。

行為邏輯和 accessibility 合規與視覺表現分開處理。Token 層管外觀。Component 管互動和 a11y。這是正確的關注點分離——現在它是你的起點，不是你在架構討論裡要提的提案。

---

`swizzle` 指令在你決定採用之前值得搞清楚。

你可以把任何 component eject 到自己的 repo 完全客製化。一旦 eject，那段 code 永遠是你的。上游升版不會再流進來。

這不是缺點。這是每個 design system 都做了然後又打破的誠實 trade-off——只是 Astryx 在門口就把它說清楚了。

---

MCP endpoint 是資深設計師應該注意的部分。

它意味著 Claude Code、Cursor 和其他 agent 可以直接 query Astryx 的 component 系統。你的 component library 不只是文件了——它是 inference 時間的 API。

這個邏輯也適用於你內部的 design system。如果 agent 沒辦法有意義地讀你的 component，你的 system 對 agent 來說就不存在。Machine-readability 是新的品質標準。

---

Reddit 上出現了「Meta 贊助框架的長期治理問題」的質疑。這是合理的擔憂。

React 2015 年有同樣的對話。解決它的不是 governance 文件——是採用率。

---

我這個季度一直在看的規律：

GeekLego（Sep 1）把 design system 規則放進 agent 可讀的 SKILL file。
OUI-1（Sep 10）訓練了一個專門從 component schema 生成 UI 的 model。
Astryx（Sep 13）把 8 年生產驗證的 design system 以 agent-ready infrastructure 形式開源。

Agent 可讀的 design system infrastructure 正在變成公共財。

底線漲這麼快的時候，天花板就是你個人的東西。你的產品 constraints、你用戶的 specific needs、你的 governance 決策——那些不在開源的 box 裡。

---

## 短文

Meta 剛把 React design system 的起跑線拉高了。

你的護城河不再是 component library。
是知道你的 constraints 為什麼存在——然後把它清楚到足以讓人和 agent 都能照著做。

Constraint intent 會複利。Component count 不會。
