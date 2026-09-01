# Threads 貼文 — Runway Solaris：Interface World Model
# 平台：Threads | 語言：繁體中文 | 日期：2026-09-01
# 來源：https://runway.com/news/research/introducing-solaris

---

「每個行為都必須提前明確定義和實作，所以軟體在任何用戶抵達之前就已經凍結了。」

Runway 在介紹 Solaris 時寫了這句話。Solaris 是他們的新 Interface World Model，能夠即時逐格生成 UI，不需要程式碼。但這也是我讀過的，對所有我交付過的產品最誠實的一句描述。

Solaris 消除了中間表示層。不再是「設計 → 語言 → 程式碼 → 渲染 UI」，而是直接生成介面本身。視覺化、有生命力、開放式。影格就是應用程式。

他們做了用戶研究：250 位受試者，7,500 個配對判斷。Solaris 對比接收相同互動請求的程式碼介面。結果：Solaris 在指令執行上被 61% 偏好，在自然行為上被 71% 偏好。

他們也測量了一件我一直感受到但無法量化的事：設計到程式碼的翻譯損失。SSIM 隨視覺複雜度上升而下降。每個受測的多模態 LLM——包含 Claude Fable 5——在從截圖重建介面時都會損失大量資訊。設計意圖越豐富，損失越多。

Solaris 目前還做不到：穩定可讀的文字、Accessibility API、長期 session 一致性、後端整合。這些不是細節。恰好是 UX 精確度最重要的地方。

Solaris 真正提出的問題不是「這會取代 Figma 嗎？」而是：如果程式碼層消失了，設計師的產出物是什麼？

不是 mockup。Mockup 永遠都是意圖的下游產物。

產出物變成：已記錄的意圖。Constraint architecture。用自然語言描述「互動代表什麼」的規則——因為那是現在模型訓練的素材。

Solaris 目前只有 early access，不是正式產品。但這是迄今為止最清晰的信號，說明翻譯問題——那個我們一直用交付文件和 component spec 拼補的問題——從來就是設計問題。

損失發生的位置改變了。你的工作沒有。
