# Threads 貼文 — Emergent Visual Edits（繁中）
## Sep 17, 2026 | 圖片：topic2-x-threads-zh.png（16:9）

---

Emergent 這週推出 Visual Edits。在 app 預覽裡點任何元素，queue 你的修改，一次批次 apply 給 agent。

兩週前 Bolt.new 也出了同樣的東西。兩個不同的工具，同一個結論。

兩個團隊獨立想通的事：AI 生成的介面「差一點」的那個 gap，是直接操作的問題，不是 prompt 的問題。你沒辦法用文字精確描述空間意圖來穩定地填補那個 gap。是那個按鈕，不是「一個按鈕」。是這個精確的 padding 數值，不是「差不多那麼多的空間」。所以兩個團隊都做了點擊編輯。

Emergent 的 queue 先、apply 後是正確的 UX 決策。每次改一個就 apply 的 AI builder 製造 debug 迴圈——修一個，另一個跑掉，再描述，又一個跑掉。Queue 把整個 set 一次批次提交給 agent。這就是 code review 的運作方式：確認 diff，清掉不對的，commit 乾淨的版本。同樣的原則。

我覺得有用的心智模型：chat 做架構決策（大區塊、版面結構、元件排列）。Visual Edits 做精修（文字值、顏色、間距、邊框）。不同粒度，不同模式。知道什麼時候用哪個，就是一半的技巧。

所有這些工具都還缺的：拖曳重新排序空間元素、響應式斷點預覽、元件約束。從文字和樣式開始的範圍是刻意設計的——對第一個版本來說是正確的決策。等空間操作補齊，AI builder 才能追上原型工具十年前就能做的事。

這個模式確認了。Bolt 和 Emergent 不是特例——他們是訊號。Lovable、Replit、Vercel 六個月內都到這裡。行業門檻剛剛移動了：不是「可以生成 UI」，而是「可以讓你精修 UI」。

這個領域花了兩年教設計師怎麼下 prompt。應該把一部分時間用來先做好正確的編輯介面。Shneiderman 1982 年就寫了直接操作的原則。AI builder 花到 2026 年才重新發現為什麼它重要。
