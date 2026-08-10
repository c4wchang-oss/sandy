# X Thread — Figma Generative Plugins + Shaders（繁體中文）
**日期：** 2026-08-10
**主題：** Figma Generative Plugins & Shaders open beta
**角度：** Plugin vs. agent——什麼時候把自動化編碼成工具，什麼時候繼續讓判斷留在對話裡

---

**Tweet 1（開場鉤）**
Figma 加了兩個看起來很像但完全不同的東西：generative plugins 和 shaders。
大多數設計師會用同樣的方式對待它們。
這就是錯誤所在。

---

**Tweet 2**
Generative plugin = 你描述一個工具一次，agent 幫你把它建出來。
執行是確定性的（deterministic）。一樣的 input → 一樣的 output。每次都是。
不是 agent 在做設計決策——是 agent 在幫你建自動化工具。

---

**Tweet 3**
Shader = 你用自然語言描述一個視覺效果，agent 寫 WebGPU 程式碼，然後它變成一個原生的 Figma property。
有 parameter 可以調整、可以跟 fill 和 effect 疊加、可以透過 MCP export。

---

**Tweet 4**
真正重要的差別：
→ 任務是可重複的、輸出應該每次一樣 → 建 plugin
→ 任務需要判斷力 → 直接用 agent 對話

搞混這兩個，你會在需要精確的地方得到不確定的結果。

---

**Tweet 5**
應該建成 plugin（而不是一直重新 prompt agent）的工作流程：
— 根據 component type 自動命名 layers
— 對選取範圍套用品牌 spacing 規則
— 批次清除 frame 內所有 component override

這些不需要讓 agent 去「思考」。一次編碼，永久使用。

---

**Tweet 6**
應該留在 agent 對話的工作流程：
— 為新功能探索 layout 方向
— 針對新的用戶情境重新規劃 flow
— 為新產品方向調整 component 架構

這些需要判斷力。繼續留在 agent 對話裡處理。

---

**Tweet 7**
關於 shader：你的 prompt 精確度就是你的品質天花板。
「一個發光的 mesh gradient」→ 很通用的東西。
「低頻 noise texture，暖琥珀色調，40% 透明度，無銳利邊緣」→ 才能用的東西。
視覺物理 → 語言 → GPU。

---

**Tweet 8**
更大的教訓：
Figma 正在變成一個讓你設計自己工具的環境。
Senior designer 的技能不是知道有哪些工具——而是知道要建哪些工具。
你上次為自己的團隊寫 plugin brief 是什麼時候？
