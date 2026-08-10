# 小紅書 Post — Figma Generative Plugins + Shaders（繁體中文）
**日期：** 2026-08-10
**格式：** 教學 / 觀點，實用清單，hashtag 在最後

---

**標題：** Figma 現在讓你自己建工具了——plugin 和 agent 的差別，大多數人都搞錯了

---

Figma generative plugins 上線了，但我一直看到很多設計師在犯同一個錯誤 👇

Figma 現在有兩種 AI 工具。大多數人把它們當成一樣的。其實不是。

**Generative Plugin** = 你描述一個工具，agent 把它建出來，之後每次執行方式都一樣。不帶判斷。

**Agent 對話** = 讀取 context、做決策、根據情況調整。每次執行都可能不同。

**簡單判斷原則：**
如果你可以寫出「永遠對 Y 做 X」，建成 plugin。
如果任務每次都會因為 context 不同而改變，留在 agent 對話裡。

---

**3 個應該建成 plugin 的工作流程（而不是一直重新 prompt agent）：**

① 根據 component type 自動命名 layers → 規則每次都一樣，幹嘛一直重新 prompt？

② 對選取範圍套用品牌 spacing → 你已經知道數字了，編碼一次就好

③ 清除 frame 內所有 component override → 完全確定性，建一次永久用

---

**3 個應該留在 agent 對話的工作流程：**

① 為新功能探索 layout 方向 → 需要判斷力

② 為新用戶情境重寫 IA → 需要適應性

③ 組合新的 component 模式 → 需要創意決策

---

**關於 Shaders：** Figma 的 WebGPU shader 系統是真的令人印象深刻。Prompt agent 建立視覺效果，它會以原生 Figma property 的形式回來——有 parameter 可以調整、可以疊加、可以透過 MCP export。

實用技巧：prompt 越精確，輸出越好。

❌「一個發光的 gradient fill」
✅「低頻 animated noise fill，暖琥珀色調，柔和邊緣，無銳利對比斷層」

---

**加分點：** Open beta 期間建立和迭代都是免費的。Plugin 執行永遠不消耗 credits。

🔑 大方向：Figma 正在變成一個讓你設計自己工具的環境。Senior designer 的價值轉移方向：從產出工藝 → 工具架構設計。

你會建的第一個 plugin 是什麼？

---

#FigmaAI #UX設計 #ProductDesign #AI工作流程 #設計工具 #GenerativeDesign #FigmaPlugins #設計系統
