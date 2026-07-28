# ProtoPie AI 正式上線 — Component AI Authoring
## 平台：X（Twitter）— Thread 格式（8 則）
## 語言：繁體中文

---

**第 1 則（Hook）**
ProtoPie AI 從 beta 畢業了。大部分設計師會快速滑過這個公告。

但公告裡有一個細節，是我在 prototype 工具裡等了很久的東西。

🧵

---

**第 2 則**
主打功能叫做 Component AI authoring。

你現在可以：
→ 用自然語言把現有 layer 轉換成本地 component
→ 用文字指令 swap component instance
→ Override component 變數，不需要手動進 inspector

Studio AI 會讀取你的場景結構，重用現有變數，不會重複建立。

---

**第 3 則**
為什麼這很重要？

在這個版本之前，prototype 工具的 AI 都是繞過 component 在工作。

它可以生成畫面、過場、互動邏輯。但它完全不知道你的 component 架構長什麼樣子。它是在黑暗中作業。

這個版本改變了這件事。

---

**第 4 則**
有一個限制值得知道：

Studio AI 看不到畫布上的視覺設計。它只讀 layer 結構和屬性資料。

這其實是正確的行為。AI 在你的 component 架構裡面運作，不是在旁邊即興發揮。

讀取結構的系統，比猜測視覺的系統更可靠。

---

**第 5 則**
最讓我感興趣的意涵：

Prototype AI 和 code AI 現在說同一種語言了。

ProtoPie MCP 已經讓 coding agent 可以查詢 prototype 的場景、component、變數和互動。現在 ProtoPie 裡面的 AI 也理解同一個 component graph。

Design → code 的 pipeline 剛收緊了。

---

**第 6 則**
有一個讓人不舒服的問題：

你的 prototype 的 component 架構，乾淨到可以讓 AI 導航嗎？

命名不一致 → AI 輸出不一致
變數範圍臨時拼湊 → AI 把問題放大
沒有 component 重用 → AI 生成冗余

Garbage in，garbage out。只是速度更快了。

---

**第 7 則**
Component AI 實際跑起來是什麼樣子：

描述一個狀態切換 → AI swap component instance
描述一個 variant → AI override 變數，不重建
描述一個 pattern → AI 重用已有的結構

這是 AI 作為生成工具和 AI 作為架構工具之間的差別。

---

**第 8 則（CTA）**
真正的標題不是「ProtoPie AI 從 beta 畢業」。

而是：prototype 現在是一個以 component 為核心的產物，AI 可以查詢、修改、然後 handoff。

這跟二月發布的不是同一個產品。

你現在的 prototype component 架構長什麼樣子？
