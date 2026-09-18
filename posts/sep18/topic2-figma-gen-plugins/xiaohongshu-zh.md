# 小紅書貼文 — Figma Generative Plugins：Brief 就是產品（繁中）
## Sep 18, 2026 | 圖片：topic2-xiaohongshu-zh.png（3:4）

---

**標題：** Figma 的 agent 從你的文字建 plugin——不需要 JavaScript，但你需要會寫 brief

---

Figma Generative Plugins 剛開放社群發布。

這實際意味著：
→ 用自然語言描述你需要什麼工具
→ Agent 建好有 UI 的可運行 plugin
→ 發布到 500 萬設計師在用的 Figma Community

不需要寫程式碼。但你還是要像工程師一樣思考——只是在 constraint 層面，不是在 code 層面。

---

**Figma 官方文件的關鍵區別：**

**Plugin = 確定性**
相同輸入 → 相同輸出，每次都是。
適合用於：你想要一致、可重複的轉換。

**Skill = 適應性**
Agent 每次解讀脈絡，結果可能不同。
適合用於：你想要判斷，不是重複。

選擇哪個，就是設計決策。

---

**一個好的 plugin prompt 包含什麼：**

1️⃣ 清楚定義輸入——什麼被選取或觸發
2️⃣ 寫轉換規則——什麼改變、以什麼順序、在什麼尺度
3️⃣ 設定輸出限制——精確尺寸、命名規則、結構
4️⃣ 說明 edge case——什麼明確不應該發生
5️⃣ 設定預設值——輸入不明確時套用什麼

這是 component spec。你一直在建立的同一套技能。

---

**資深設計師的視角：**

最好的 plugin 作者不會是開發者。
會是手動跑過同樣流程兩百次的設計師。

→ 手動做了三年的批次重命名？寫成 plugin。
→ 每次都用相同方式重建 type ramp？把它 encode 起來。
→ 第一百次在 debug 同樣的 overflow 問題？建一個自動標記的 plugin。

要誠實說的：確定性 = 缺口在規模化時浮現。在你輸入變化的邊界測試，不只是在乾淨的中心案例。

---

#Figma #GenerativePlugins #UX設計 #DesignSystem #設計師必看 #AIdesign #FigmaAI #資深設計師
