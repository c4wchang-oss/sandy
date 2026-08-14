# X Thread — Cursor Design Mode (ZH)
# Topic: Cursor Design Mode——視覺意圖終於從 code 那端對 AI 變得可讀 (Aug 13, 2026)
# Platform: X (Twitter)
# Format: 8-tweet thread

---

**Tweet 1 — Hook**
Cursor Design Mode 不是要讓設計更像寫 code。

它是讓視覺意圖對 AI 變得可讀。

這是兩個完全不同的問題，有完全不同的意義。🧵

---

**Tweet 2**
當你在 live app 裡點一個元素，這件事發生了：

Cursor 傳給 agent：
→ XPath + component 身份
→ 計算後的 CSS 樣式
→ React fiber tree props
→ 當下頁面狀態的截圖

然後你描述要的改變。Agent 修改 code。App hot-reload。

---

**Tweet 3**
注意這裡發生了什麼。

Agent 沒有讀像素。

它讀的是 live render 狀態：結構、關係、component tree 裡編碼的意圖。

這跟「把這個 button 弄大一點」是根本不同的輸入。

---

**Tweet 4**
Multi-select 讓這件事更進一步。

指向兩個元素。叫 agent 讓一個符合另一個。

Agent 同時拿到 code 和視覺排版關係。

這是空間式的 briefing，終於對機器可讀了。

---

**Tweet 5**
值得注意的反轉：

Figma 和 v0 是把設計帶入 code。
Cursor Design Mode 是把 code 帶入設計對話。

你編輯的是 live 產品，不是它的表示法。

---

**Tweet 6**
重要的限制：它需要跑起來的本地開發伺服器。

這不是靜態 mockup 的工具。

這是給已經在建構的人用的——讓他們不用切換 context，就能關掉視覺意圖的落差。

---

**Tweet 7 — 給設計師的誠實看法**
這是一個說設計語言的開發者工具。

如果你不在 codebase 裡，它對你沒幫助。

如果你偶爾在——它移除了 UI 調整裡最大的摩擦點。

---

**Tweet 8 — CTA**
要求不是「成為工程師」。

要求是：能指出你的意思。

這一直都是那個落差所在。

Cursor 從 code 那端把它關掉了。
