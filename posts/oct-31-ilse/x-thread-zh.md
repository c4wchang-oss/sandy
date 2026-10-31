# X / Twitter Thread — Ilse（繁體中文）
# 2026年10月31日 | Senior UX Designer 視角

---

**推文 1（hook）**
一個設計師做了 9 年設計，做到受不了用文字跟看不見螢幕的 agent 描述按鈕。

所以他做了一個工具列。

Ilse 是我今年看過最直白的工具，專門解決「agent 看不見我看見的東西」這個問題。

---

**推文 2**
Ilse 解決的問題，精確版本：

你在跑起來的 app 裡，你看到一個按鈕不對。你用文字告訴 Claude Code。Claude 改了錯誤的檔案，因為它是從文字出發，不是從你的螢幕出發。

Ilse 補上這個落差，不需要在你的 stack 裡再加一個設計工具。

---

**推文 3**
它怎麼運作：

在你的 React app 上點擊任何一個元素 → 寫下要改什麼 → Ilse 把精確的檔案路徑、行號、JSX 片段和 design token 傳給你的 agent——不是描述。

Agent 改程式碼，你馬上看到結果。

---

**推文 4**
Design token 整合很重要。

簡單的修改，如果對應到一個 CSS class，直接在頁面上生效，不用 AI，不花 token。

只有需要修改程式碼的部分才送給 agent——而且送的時候帶著精確的 context，不是一段說明文字。

---

**推文 5**
自動生成 DESIGN.md 是我一直回頭想的細節。

Write design system → Ilse 讀取你的 component 和 token，寫進 `.ilse/ds/DESIGN.md`。

不用 AI，不用手動寫文件。你的 component 就是 brief。

---

**推文 6**
Pro 版（預購，11 月出貨）：test mode。

你描述一個使用者流程：「買那盞燈」。
Ilse 自動在你的真實 app 上走完這個流程，回報哪裡壞了、在哪個畫面、是哪個元素。

不需要另外的測試工具，就有自動化的設計 QA。由一個做夠多 QA、知道所有失敗模式的人做的。

---

**推文 7**
誠實的部分：

- 只支援 React（Next.js, Vite, Remix, Astro）
- Pro 功能（test mode）在預購階段，2026 年 11 月出貨
- 需要有自己的 coding agent 訂閱（Claude Code、Cursor、Codex、Gemini）
- 早期工具，solo founder 做的，他還在留言區回每一則留言

---

**推文 8**
我要加進思考框架的：

視覺指點 > 文字描述，作為 agent 的 context。

Skisso 在 live 的 CSS 做到這點，Ilse 在跑起來的 React dev app 做到，MagicPath 在 canvas 元素做到。

同一個原則今年被確認了三次：讓 agent 看到你的意思，不要描述它。
