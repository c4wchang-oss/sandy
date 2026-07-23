# Threads 貼文 — Flowstep AI（繁體中文）
**平台：** Threads
**日期：** 2026 年 7 月 23 日

---

這週在測試 Flowstep。這是我遇到的第一個真正用 flow 而不是 screen 思考的 AI 設計工具。

這聽起來是個小差異，但其實不是。

其他工具給你一個 screen。Flowstep 給你一段 journey。你可以選任何一個生成的畫面，叫它生成下一步——它會根據你一開始給的 product context 推斷那個下一步應該是什麼。

這背後有個有趣的技術決策：Flowstep 的 canvas 從一開始就建在 code 上。沒有「設計稿之後被轉換成 code」這個步驟。每個元素同時是設計層和 React/TypeScript/Tailwind 輸出。handoff 不是一個動作——它從一開始就是同一件事。

三個我一直在想的細節：

**第一** — 你可以餵它一個 DESIGN.md 檔案。你的 constraint architecture 跟著進入 AI 的 prompt 空間。它在你的設計系統裡生成，不是繞過它。大多數工具不尊重你的系統，這個工具尊重。

**第二** — MCP 整合 Cursor、Claude Code 和 Windsurf。設計到 code 的流程是連續的。不需要手動傳輸，不會有 context 遺失。

**第三** — 不需要 plugin 直接 paste 進 Figma。⌘C/⌘V。聽起來微不足道，但你試過複雜元件在 import 流程裡壞掉的感受就知道了。

老實說：Flowstep 在你對 product direction 已經很清楚的時候最有用。它不是 research tool 也不是早期 exploration 的工具。它是「我知道要建什麼，現在讓我系統性地生成整個 flow 並驗證邏輯」的工具。

對這個使用情境——也是資深設計師花最多時間的地方——flow-first 的方式是正確的心智模型。

真正的重點不是「又一個 AI 設計工具」，而是：Flowstep 是第一個工具邏輯和 UX 邏輯對齊的工具。我們設計 journey，工具就應該用 journey 思考。
