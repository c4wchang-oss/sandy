# Threads Post — Figma AI Agent 作為 Design System 維護工具 (ZH)
# Topic: Figma AI agent 實際測試證實其稽核/維護優勢，以及創建方面的差距
# Platform: Threads
# Format: 長篇個人反思

---

所有實際測試 Figma AI agent 的人都得出同樣的發現：維護方面表現出色，創建方面不穩定。

交給它結構化、可重複的分析性工作——稽核命名規則、標記 detached component、大規模撰寫文件、執行 gap analysis——它是真的有用。而且比人工稽核更可靠，因為它不會累，也不會跳過無聊的部分。

給它空白 frame，叫它創造一個符合你系統的 component？這就是它開始偏移的地方。

這不是模型失敗。這是 context 問題。「忠於你的 design system」不是一套 agent 能從結構中學會的規則。它需要積累起來的判斷力——了解 pattern 如何演化、為什麼做某些決策、例外情況代表什麼意思以及為什麼它們被容許存在。

角色轉變是真實的，但不是戲劇性的：

你不再是做維護稽核的人。
你變成了建立「足夠讓 AI 維護」的系統的人。

這意味著：
→ Variable 名稱要帶有語意意義，不只是 hex 值
→ Component 描述要解釋何時使用，不只是長什麼樣
→ 所有東西都要 auto layout——那是 agent 理解空間意圖的方式
→ Component properties 要明確定義每個狀態

這些一直都是最佳實踐。現在它們也是你的 AI 品質上限。

一個具體的重新框架：你的 design system 文件和你的 AI agent context 參數，現在是同一份文件。如果你沒有寫成讓一個人在 30 秒內理解的內容，agent 也不會懂。

「清潔員」的比喻只有在空間夠乾淨的前提下才成立。
