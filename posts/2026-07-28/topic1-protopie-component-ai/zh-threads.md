# ProtoPie AI 正式上線 — Component AI Authoring
## 平台：Threads
## 語言：繁體中文

---

ProtoPie AI 昨天正式從 beta 畢業了。公告低調得有點奇怪。讓我說說真正改變了什麼。

主打功能叫做 Component AI authoring。你現在可以把現有的 layer 轉換成本地 component、swap instance、用自然語言 prompt override component 的變數。Studio AI 會讀取你的場景結構，重用現有的變數，而不是重複建立新的。

最後這一點是關鍵。這代表 AI 建立了你 component 系統的工作模型，不是描述，是模型。

在這之前，prototype 工具的 AI 都是繞過 component 在工作。它可以生成畫面、過場動畫、互動邏輯——但它完全不知道你的 component 架構長什麼樣子。它是在黑暗中作業。

這個版本改變了這件事。

還有一個限制值得注意：Studio AI 看不到畫布上的視覺設計，只讀 layer 結構和屬性資料。我認為這是正確的行為——AI 在你的架構裡面運作，不是在旁邊即興發揮。讀取結構的系統，比猜測視覺的系統更可靠。

最讓我感興趣的意涵：prototype AI 和 code AI 現在說同一種語言了。ProtoPie MCP 已經讓 coding agent 可以查詢 prototype 的場景、component、變數和互動。現在 ProtoPie 裡面的 AI 也理解同一個 component graph。這個循環正在收緊。

這帶出了一個讓所有 senior designer 不舒服的問題：你的 prototype 的 component 架構，乾淨到足以讓 AI 導航嗎？如果你的 layer 結構不一致、命名規範一團亂、變數範圍是臨時拼湊的——AI 會忠實地重現這個混亂，速度比你手工快很多。

Prototype 從來就應該以 component 為核心。ProtoPie AI 現在開始執行這個標準了。
