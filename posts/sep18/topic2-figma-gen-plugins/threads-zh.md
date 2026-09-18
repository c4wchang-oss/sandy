# Threads 貼文 — Figma Generative Plugins：Brief 就是產品（繁中）
## Sep 18, 2026 | 圖片：topic2-x-threads-zh.png（16:9）

---

Figma Generative Plugins 最有趣的地方不是 AI 寫了程式碼。

是設計師寫了 brief——而 brief 就是產品。

背景：Figma 的 agent 現在可以從純文字描述生成完整可運行的 plugin。描述這個工具，agent 建好有 UI 的 plugin，你發布到 Figma Community。不需要 JavaScript。

Figma 文件裡有一句話讓我停下來想了很久：

「Plugin 最適合確定性工作流：相同輸入應該每次產生相同結果。Skill 更適合需要 agent 解讀脈絡、作出判斷、或調整方式的情境。」

確定性 plugin vs 適應性 skill 的區別——這是產品設計決策，不是技術決策。跟你在 design system 做的決策一樣：這個模式要 hardcode，還是留給 judgment 的空間？

文件裡的範例是一個 icon styler plugin。Prompt 包含了：
→ 什麼被選取（輸入）
→ 顏色欄位加上預設值
→ 尺寸選項：16、24、32
→ 轉換規則：每個尺寸一個 frame、精確尺寸、stroke weight 等比縮放、不要額外包裝 frame

那個 prompt 的每一行都是設計決策。輸入、轉換規則、edge case、什麼事情絕對不應該發生。那是一份 component spec。

我一直在想的是：最有價值的 plugin 作者不會是碰巧使用 Figma 的開發者。會是那些碰到同一個工作流缺口兩百次的設計師——因為他們手動除錯過足夠多次，知道所有 edge case，能精確描述轉換規則。

如果你寫過嚴謹的 component specification，你已經有這個技能了。
介面改了。思考方式沒變。
