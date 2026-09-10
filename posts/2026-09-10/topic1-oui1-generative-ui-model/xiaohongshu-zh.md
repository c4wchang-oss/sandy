# Topic 1: OUI-1 — 全球首個開源生成式 UI 模型
# Platform: 小紅書 (Xiaohongshu) | Language: Traditional Chinese
# Date: Sep 10, 2026 | Format: 觀點 / 教學
# Source: https://www.openui.com/blog/oui-1 (Sep 8, 2026)

---

**標題：** 第一個「專門生成 UI」的開源模型出現了 — 它照出了你設計系統的原形

---

🎯 **發生了什麼：**
Thesys 在 2026 年 9 月 8 日發布 OUI-1 — 全球首個專為 UI 生成訓練的開源模型。不是文字，不是通用代碼，而是根據你的 component library 組裝出來的介面。

Generative UI Benchmark：71.7%（基礎模型是 13%）。
可以在 RTX 5090 本地執行，不需要 API。

📌 **核心機制：**
你把 component library 的 TypeScript 型別簽章放進 system prompt。
OUI-1 根據自然語言 brief 用這些元件生成介面。

你的 TypeScript props = 模型的設計 brief
你的 token 命名 = 模型的色彩和間距字典

📌 **這揭露了什麼：**

1. **設計系統技術債不再隱形**
   Props 命名模糊 → AI 生成模糊的 UI
   Variants 沒有文件 → AI 自己猜用哪個
   Edge cases 沒處理 → 生成的介面在 edge cases 出錯
   你的團隊在 design review 發現的那些問題，在推論時再次出現。

2. **結構有效性 ≠ 可用的 UI**
   71.7% 是 parser 能不能接受輸出的分數，不是「使用者能完成任務嗎」的分數。
   那個判斷力的空隙是你的。它不在 benchmark 裡。

3. **本地推論 = 企業資料治理決策**
   你的 component library、brief、生成輸出 — 全在機器上。
   沒有 API，資料不離開你的網絡。
   對敏感客戶工作：這是治理決策，不是效能功能。

✅ **現在可以做什麼：**

1. **審計你的 component library prop 命名**
   有語意嗎？一個陌生人看到 prop 名稱，能理解意圖嗎？
   那個「陌生人」現在也包括 OUI-1。

2. **用「意圖」而不只是「選項」記錄 variants**
   「`variant='emphasis'` 用在操作具破壞性的時候」
   優於「選項：default、emphasis、destructive」

3. **明確定義 edge cases**
   空白狀態、錯誤狀態、載入狀態。
   如果沒有在 library 裡定義，模型不知道它們存在。

4. **把生成的輸出當成設計系統稽核報告**
   跑你的 component signatures 通過 OUI-1。觀察它生成什麼。
   輸出裡的混亂，是設計系統裡混亂的訊號。

⚠️ **誠實的 caveat：**
71.7% 結構有效性 ≠ 生產就緒的 UI 生成。
「有效的元件圖」和「使用者真正能用的介面」之間的差距依然很大。
可用性 benchmark 還不存在，我們在早期基礎設施的階段。

💡 **重新框架：**
OUI-1 不會讓設計判斷力過時。
它讓 component library 的品質在推論時變得可見。
撰寫型別簽章的設計師，就是在寫模型遵循的規則。

---

#AI設計工具 #設計系統 #UX設計師 #生成式UI #componentlibrary #設計思維 #AItools #UXUI #產品設計 #設計師日常
