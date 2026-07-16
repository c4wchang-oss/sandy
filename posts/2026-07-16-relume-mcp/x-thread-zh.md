# X Thread — Relume Library MCP（中文）
**主題：** Relume Library MCP：1000+ 個 component 直接進 AI 編輯器
**切角：** MCP 作為 AI agent 的設計系統護欄——不是噱頭，是結構性解法
**格式：** 8 則 thread

---

**第 1 則（Hook）**
AI 生成 UI 的問題不在 AI。

在於 AI 沒有設計系統。

Relume 的新 MCP 從結構上解決了這個問題。🧵

---

**第 2 則**
你一定見過這個模式：

你叫 AI 建一個頁面。它做了。一個 section 接一個 section——每一個都是獨立設計的，不同的按鈕、不同的間距、不同的 token。

一個拼湊品，不是一個產品。

---

**第 3 則**
根本原因：AI 非常擅長寫程式碼，但非常不擅長記住你的 component 長什麼樣子。

它在猜，它在近似，它在發明。

它沒有 source of truth。

---

**第 4 則**
Relume 的 Library MCP 從結構上解決了這件事。

把它連到 Cursor、Claude、Windsurf（任何 MCP client），你的 AI assistant 現在可以瀏覽 1000+ 個真實的、可用於生產環境的 component——拿到的是真正的程式碼，不是近似版本。

---

**第 5 則**
我測試的工作流程：
1. 規劃頁面結構
2. 描述每個 section → AI 找到對應的 Relume component
3. 拿進真正的程式碼（帶著設計系統 token）
4. 改成你的品牌樣式

從一開始，所有東西就共用同一套 primitives、Tailwind preset 和 spacing token。

---

**第 6 則**
這是把「constraint architecture」原則用在 AI 生成 UI 上。

不要給 AI 一塊空白畫布，給它一個精選的真實 component 庫。

輸出品質的差異不是漸進式的，是本質上的。

---

**第 7 則**
這背後更深的趨勢：MCP 正在成為把設計系統 context 注入 AI agent 的主要介面。

Figma MCP、Relume MCP、design token MCP。

對 senior designer 的問題是：你的 source of truth 是什麼？它支援 MCP 嗎？

---

**第 8 則**
AI 生成的 UI 沒有品質問題。

它有 **context** 問題。

把真正的設計系統給 AI 當 source of truth，輸出就會不一樣。就是這樣。

→ relume.io/relume-library-mcp
