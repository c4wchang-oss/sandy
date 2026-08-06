# X Thread — Topic 2: v0 API v2 — Design Systems as Machine-Readable Infrastructure
## Platform: X (Twitter) | Language: 繁體中文 | Date: Aug 6, 2026
## Source: Vercel blog "introducing-the-new-v0-api", Aug 5, 2026

---

**Tweet 1（Hook）**
v0 昨天推出了 API。

送出一個 prompt，得到一個可以跑的 app，把你的 design system 當成參數傳進去。

Design system 的工作，剛剛改變了。

🧵

---

**Tweet 2**
v0 API v2 做了什麼：
→ 可程式化、無介面的 app 生成 agent
→ 傳 prompt → v0 在 Vercel Sandbox 裡跑起一個 app → 回傳一個可預覽的 URL
→ 把這個 URL 嵌入你自己的任何工具裡

你的 design system，可以被放進 request payload 一起傳出去。

---

**Tweet 3**
舊的心智模型：把你的 design system 以 Figma 檔案的形式發布出去。
工程師拉 component，有交接對話，東西還是會跑偏。

新的心智模型：你的 design system 是一個 API 參數。
任何呼叫 v0 的工具，都自動繼承你的品牌限制。

---

**Tweet 4**
這是那個沒有被大聲說出來的重要部分：

當你的 design system 可以透過 API 注入生成 pipeline，
它的品質衡量標準，就不再只是「人類工程師有沒有用對」。

而是「AI agent 有沒有能力在沒有人介入的情況下，穩定地正確使用它」。

這是完全不同的品質標準。

---

**Tweet 5**
一個「AI 可讀」的 design system 實際上長什麼樣子？

→ Token 命名是語意的，不是視覺的（"color-action-primary"，不是 "blue-600"）
→ Component props 記錄的是使用意圖，不只是允許值
→ 使用說明包含什麼時候「不該用」這個 component
→ 沒有埋在舊版畫面裡的、未記錄的覆寫值

---

**Tweet 6**
能看懂這個轉變的設計師，會開始把 design system 當作基礎設施來架構，而不是風格指南。

問題從「這在 Figma 裡看起來對嗎？」
變成了「AI agent 有沒有辦法在沒有人監督的情況下，穩定地正確使用這個 system？」

---

**Tweet 7**
誠實地說：v0 API v2 現在還是面向工程師的基礎設施。
大部分設計師不會直接寫 API 呼叫。

但你維護的 design system，會越來越多地以這種方式被消耗——
不管你有沒有在想這件事。

對這個消耗層渾然不覺，是一種風險。

---

**Tweet 8（CTA）**
新聞標題是「v0 去無介面化了」。

真正的故事是：design system 正在變成 AI 生成技術棧裡的共享依賴。

Token 品質、component 文件、結構一致性——那現在是 API 等級的基礎設施，不只是設計師的個人偏好。

你的 design system 準備好被機器消耗了嗎？
