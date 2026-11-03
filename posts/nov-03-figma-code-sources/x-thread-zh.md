<!-- X / Twitter Thread — Figma Code Sources + Guidelines — ZH -->
<!-- Platform: X  |  Format: 8-tweet thread  |  Date: Nov 3, 2026 -->

**Tweet 1 (hook)**
Figma 的 Code Sources 進入 closed beta。

大家都在說「元件生成更準了」。

真正的框架：你的 npm package 現在就是 brief。

---

**Tweet 2**
以前：你向 agent 描述你的 design system。
Agent 詮釋它，生成一個「大概對」的東西。

Code Sources 改變了這件事。
連接你的 GitHub repo 或 npm package → agent 用你的真實元件構建。
不是近似物，是本體。

---

**Tweet 3**
這個修正的失敗模式既殘酷又沉默：

Agent 生成一個「card component」。顏色對、spacing 接近。你出貨了。

三次迭代之後：那個 card 已經偏移了。它從來沒有連接到你的真實 DS。設計債從生成時就開始——不是從偏移的那一刻。

---

**Tweet 4**
Figma 內的 constraint hierarchy 現在終於完整了：

Library Guidelines → agent 知道規則
Code Sources → agent 有真實元件

規則且零件。不是或。

這和 release notes 裡的其他東西是不同類別的修正。

---

**Tweet 5**
治理的含義很直接：

你的 DS 程式碼品質，現在量化地就是 agent 輸出的天花板。

命名不清的元件 → agent 選擇模糊。
Token 缺失 → agent 自創預設值。
Variant 沒文件 → agent 選錯。

DS 維護一直都很重要，現在它是經濟問題。

---

**Tweet 6**
誠實的地方：

Code Sources 是 closed beta，不是每個人都能用。

而且它只有在你的 DS 被正確打包的情況下才有效——乾淨的 npm exports、有型別的元件、文件完整的 props。

效益和你現有的 DS 嚴謹度成正比。

---

**Tweet 7**
在你的團隊申請 closed beta 之前，應該問的問題：

「如果 agent 能從我們現有的 DS 元件中選擇——有多少是真正 production-ready 的，vs 技術上已發布但靠默契維持的？」

那個數字就是你真正的 DS 品質審計。

---

**Tweet 8 (CTA)**
原則：reference beats description。永遠如此。

Code Sources 把這個原則延伸到 Figma 內部的元件層。

你的 design system 不需要被描述給 agent 聽。
它需要被直接給 agent。

→ Figma Config India 2026: figma.com/release-notes
