<!-- Xiaohongshu — Figma Code Sources + Guidelines — ZH -->
<!-- Platform: 小紅書  |  Format: Review/Tutorial  |  Date: Nov 3, 2026 -->

**標題：** Figma Code Sources 改變了 design system 給 agent 的方式

---

更新：Figma Code Sources（closed beta，Config India 2026）讓你把 GitHub repo 或 npm package 直接連接到 Figma agent。Agent 用你的真實元件構建——不是它對你 DS 的詮釋，是本體。

為什麼這對資深設計師很重要：

**01 它修正的失敗模式**
AI 生成看起來正確但不連接你 DS 的元件，會製造沉默的設計債。顏色對、spacing 接近，但每次迭代都在偏移。Code Sources 從源頭關掉這個漏洞——agent 用你的真實零件，不是合理的近似物。

**02 規則 + 零件（不是或）**
Library Guidelines 告訴 agent 規則。
Code Sources 給 agent 真實元件。
兩者在 Figma 內同時運作。第一次 constraint 和元件保真度在同一個生成步驟裡同時作用。

**03 DS 品質現在就是輸出天花板**
命名不清的元件 → agent 選擇模糊。
Token 缺失 → agent 自創預設值。
Variant 沒有文件 → agent 選錯。
每個文件不足的元件都是量化可見的品質天花板下降。

**04 審計問題**
在你的團隊申請 closed beta 之前，問：你已發布的 DS 元件有多少是真正 production-ready 的，vs 技術上已發布但靠默契維持的？那個落差就是你真正的品質審計。

---

Code Sources 不會幫你修的：

✓ 元件保真度：是——agent 用你的真實元件，不是通用元件
✗ 元件正確性：你還是得先把對的元件建好
✗ 缺失的 variants：你沒建的 variant，Code Sources 也給不了 agent
✗ Closed beta：大多數團隊暫時還無法申請

---

誠實的地方：

需要乾淨的 npm exports、有型別的元件、文件完整的 props。效益和你現有的 DS 嚴謹度完全成正比。文件不足的 DS → agent 從一組真實但意義不明的選項裡做出有把握但錯誤的選擇。

---

框架的轉移：

Reference beats description。永遠如此。

Code Sources 把這個原則延伸到 Figma 內部的元件層。你的 design system 不需要被描述給 agent 聽，它需要被直接給 agent。

---

#Figma #DesignSystem #AIDesign #設計系統 #UX設計 #ProductDesign #DesignOps #UI設計
