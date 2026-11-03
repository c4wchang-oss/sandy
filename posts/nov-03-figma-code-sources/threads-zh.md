<!-- Threads — Figma Code Sources + Guidelines — ZH -->
<!-- Platform: Threads  |  Format: Long-form reflection + punchy short take  |  Date: Nov 3, 2026 -->

---

**[長文]**

在大家稱讚 AI 元件生成的時候，沒人討論的失敗模式：

Agent 生成了一個 card component。顏色符合品牌，spacing 接近，字型看起來對。你出貨了。

三次迭代之後：那個 card 已經偏移了。它從來沒有連接到你真實的 design system。它是你 DS 的一個合理詮釋——從描述生成的近似物，不是從 source 生成的元件。設計債從生成的那一刻就開始，不是從偏移的那一刻。

Figma 的 Code Sources（closed beta）從源頭關掉這個漏洞。把你的 GitHub repo 或 npm package 連接到 Figma agent。Agent 用你的真實元件構建——不是合理的近似，是本體。

這和 Guidelines（告訴 agent 規則）是不同類別的修正。Code Sources 給 agent 零件。規則加零件，兩者同時在 Figma 內部運作，這是第一次。

對資深設計師的含義很直接：你的 design system 程式碼品質，現在量化地就是 agent 輸出的天花板。命名不清的元件 → agent 選擇模糊。Token 缺失 → 自創預設值。Variant 沒文件 → 選錯。

DS 維護一直都很重要，現在它是經濟問題。每一個文件不足的元件，都是每一個觸碰到它的生成任務的品質天花板下降。

誠實的地方：Closed beta。需要乾淨的 npm 打包。效益和你現有的 DS 嚴謹度完全成正比。

在你的團隊申請之前應該問的問題：你已發布的元件裡，有多少是真正 production-ready 的——vs 技術上已發布但靠建造它的人的默契維持的？

那個數字就是你真正的 DS 審計。而 Code Sources 剛讓它變得有後果了。

---

**[短版觀點]**

Agent 無法做出比你給它的資訊更好的決定。

你一直在描述你的 design system 給它聽。

現在你可以直接給它真實的東西。

這不是升級，這是類別的改變。
