# X Thread — Flowstep AI（繁體中文）
**主題：** Flowstep AI——第一個用 flow 而不是 screen 思考的 AI 設計工具
**角度：** 「UI is code from the start」——設計 journey，不是設計孤立的畫面
**日期：** 2026 年 7 月 23 日

---

**推文 1（Hook）**
大多數 AI 設計工具都是「螢幕工廠」。

給你一個 screen。通常還不錯。但往往是孤立的。

Flowstep 是我看到的第一個真正用 user journey 思考的工具。

聽起來是小差異，但其實不是。🧵

---

**推文 2**
其他所有 AI 設計工具給你一個 screen。

Flowstep 給你一個 flow。

你可以選任何一個生成的畫面，說：「給我生成下一步」。

它會根據你一開始輸入的 product context 自動推斷那個下一步。

---

**推文 3**
這背後的技術決策很重要：

Flowstep 的 canvas 從一開始就建在 code 上。

沒有「設計稿之後轉成 code」這個步驟。每個元素同時是設計層和 React/TypeScript/Tailwind 輸出。

handoff 不是一個步驟——它從一開始就是同一件事。

---

**推文 4**
你可以餵它一個 DESIGN.md 檔案作為 context。

這不是小事。你的 constraint architecture 會跟著進入 AI 的 prompt 空間。

它在你的設計系統裡生成，而不是繞過它。

大多數工具做不到這件事。

---

**推文 5**
MCP 整合 Cursor、Claude Code 和 Windsurf。

設計→code agent 流程不需要手動 copy-paste。輸出直接落在你的開發環境裡。

設計到 code 的流程是連續的，不再是一個個分開的步驟。

---

**推文 6**
不需要 plugin 直接 paste 到 Figma。⌘C/⌘V。

聽起來很小，但你試過跟 import plugin 搏鬥、修壞掉的 SVG export 之後就知道這多珍貴了。

去除摩擦本身就是一個 UX 決策。

---

**推文 7**
Flowstep 揭示的是：

我們的工具一直在訓練我們用 screen 思考，但我們本來應該用 journey 思考。

大多數 AI 設計工具從傳統設計工具繼承了同樣以 screen 為中心的心智模型。

Flowstep 打破了這個框架。

---

**推文 8**
資深設計師的視角：Flowstep 的意義不是「它很快」。

而是從單一 prompt 設計完整 flow，會強迫你在一開始就驗證 UX 邏輯。

AI 會浮現你跳過的那些空缺——missing state、dead end。

這不只是一個生成工具，這是一個思考夥伴。
