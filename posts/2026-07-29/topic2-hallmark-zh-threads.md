# Topic 2: Hallmark — Threads (Traditional Chinese)
**Platform:** Threads
**Format:** 長文反思
**Date:** July 29, 2026
**Topic:** Hallmark by Together AI — 反 AI 審美垃圾設計 skill

---

Hallmark 這週拿到 12.4k GitHub stars，全球 trending #1。
一個設計 skill，不是 UI library。

讓我解釋它實際上在做什麼，因為「anti-AI-slop」這個標籤讓它看起來比真正的意義膚淺。

所有 AI 生成的介面都預設同一個審美：Inter 字體、紫色漸層、六個一樣的卡片、hover 一律 bounce、hero → features → CTA → footer。

這不是 AI 在偷懶，是統計學。AI 生成趨向訓練數據的均值。「所有網站的均值」，說難聽點，很普通。

Hallmark 是一個約束文件，在 emit 任何代碼之前跑 57 個「slop-test gates」。有一個硬門檻沒過？重新生成。還有 pre-emit 自我評分，六個軸：哲學、層次、執行、具體性、克制、多樣性，分數以 CSS 註解印在輸出裡。

四個動詞。Build 生成新 UI。Audit 對現有代碼打分，只列問題，不修改。Redesign 換結構保留內容。Study 是最有意思的：從 URL 或截圖提取設計 DNA——宏觀結構、字體搭配、色彩錨點——可以輸出可移植的 design.md。

讓我印象最深的是：這是設計評審被形式化成代碼。

`hallmark audit` = 同儕設計評審，列清單，不改東西，只給分。
`hallmark study` = 競品分析，但變成了一個結構化協議。
`hallmark redesign` = 「做得不一樣」的迭代。

資深設計師直覺上都在做這些事。現在有了一個 CLI。

令人不舒服的部分：要讓這個工具有效，有人必須坐下來清楚地說出，為什麼 AI 設計看起來像 AI 設計。他們必須把審美直覺說清楚。這比聽起來難得多。

真正的 headline 不是「57 條規則對抗 AI 審美垃圾」。

而是：設計直覺——那種「一眼就知道不對」、花了幾年才建立起來的感覺——現在可以被表達成 lint ruleset。我們到了一個品味有機器可讀格式的時間點。

我不確定這是設計思維的勝利，還是對 AI 正在做什麼的一個警告。
可能兩者都是。
