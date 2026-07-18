# X Thread — Google Stitch + DESIGN.md（繁體中文）
**主題：** Google Stitch 2026 年大改版——無限 canvas、語音輸入、Agent Manager，還有 DESIGN.md
**角度：** 所有人在討論「Vibe Design」，但沒人在聊那個 markdown 檔案
**格式：** 8 則推文串

---

**Tweet 1（Hook）**
所有人都在爭論「Vibe Design」。

我想聊的是那個沒人在提的東西。

一個叫 DESIGN.md 的 markdown 檔案。

它可能比 Google Stitch 這次更新的無限 canvas、語音輸入、或任何新功能都更重要。 🧵

---

**Tweet 2**
Google Stitch 做了全面改版。

無限 AI canvas。空間感知語音輸入。可同時探索多方向的 Agent Manager。從任何 URL 擷取設計系統。透過 MCP 連接 Cursor、Claude Code、Gemini CLI。

Demo 真的很驚豔。但我一直在想的是其中一個小東西。

---

**Tweet 3**
DESIGN.md 是一個純文字的 markdown 檔案，記錄你的設計系統。

顏色、字型比例、間距規則、元件名稱、語氣和 voice 指南。

人類可讀。可以用 git 做版本控制。然後——這才是重點——AI 也能讀。

你寫一次。你整個 workflow 裡的每個 AI 工具都可以參照它。

---

**Tweet 4**
每個 AI 設計工具都有這個問題：

你下指令。它生成一個看起來正確的東西。你再下指令。它漂移了。

工具不記得你跨 session 的 constraint。每次生成都從頭開始對抗你的設計系統。

DESIGN.md 是一個持久的 contract，AI 每次生成前都會對照檢查——不是你每次都要重複的 prompt。

---

**Tweet 5**
Stitch 的 workflow：

把你的設計系統匯出成 DESIGN.md（或自己寫——就是 markdown 而已）。每個新的 Stitch 專案讀取它。每次畫面生成都被約束在你既有的 color token、字型比例和元件規則裡。

你也可以從其他工具匯入它。把你的 Stitch 設計系統套用到不同專案，不用重新來過。

---

**Tweet 6**
真正的解鎖：DESIGN.md 是可以帶著走的。

透過 Stitch MCP server，你可以連接 Cursor、Claude Code 或 Gemini CLI。

設計系統規則從設計工具流向你的 coding agent。一個檔案。不需要截圖。不需要對每個工具重新 brief。

你的 constraint 變成了可攜帶的基礎架構。

---

**Tweet 7**
從 Senior UX 的角度來看：

這不是一個功能。這是一個檔案格式提案。

package.json 之於 Node，DESIGN.md 可能就是整個設計 ↔ 程式碼生態系的那個東西——一個任何 AI agent 都能讀取、對照、從中生成的機器可讀 contract。

你花了幾年建立的 constraint 架構，終於有了一個可攜帶的格式。

---

**Tweet 8**
真正的標題不是「Google 在 Stitch 加了語音和無限 canvas」。

而是：Google 提出了一個設計系統格式，讓 AI 不需要被 prompt 就能讀懂你的系統。

Vibe design 只是一種感覺。DESIGN.md 是基礎架構。

其中一個在 12 個月後會被取代。另一個只會越來越重要。

