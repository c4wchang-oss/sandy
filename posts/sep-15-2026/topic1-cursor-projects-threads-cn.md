# Topic 1: Cursor Projects — Threads Post (Traditional Chinese)
**Image:** `images/topic1-coordinator-en-16x9.png` (16:9)

---

Cursor 剛推出 Projects，我一直在想「資深」這個概念到底代表什麼。

表面上這是給開發者的工具：一個 coordinator agent，不自己寫 code，只負責規劃任務、分配給 subagent 執行，把完成結果交回給你確認。每個 Project 維護一個「Field Guide」，由 agent 策展、隨每次任務成長、自動注入到所有新 agent 的 context 裡。可以監聽 Slack、在 PR 事件觸發、按排程執行。

被埋在裡面、其實最重要的部分是一個使用案例：一個 Cursor 工程師用 Project 掃描所有 PR，提取應該進設計系統的元件，每次看到同樣的錯誤就自動加一條 lint rule。一天 20 到 100 個 PR，工程師只負責需要注意的地方。

我花了很多年寫沒人讀的設計系統文件。我做過一次次 quarterly audit，每次都找到上一季剛修好的問題。我在 Figma 加 annotation，希望它們能比原作者的 context 活得更長。

這些工作，其實都是我在嘗試手動建立 Field Guide。

現在浮現的角色模式很清楚：senior 不是執行得更快，是設計「幫你執行的系統」。不是描述 output，是定義門檻。「什麼品質水準之下，coordinator 可以自己決定、不需要打擾我？」這個問題，比我最近做的任何元件決策都難。

Projects 還在 beta，coordinator 品質取決於你一開始給的 intent。但角色的轉移不再是理論了。它在背景跑著，監看 PR，在你睡覺的時候。
