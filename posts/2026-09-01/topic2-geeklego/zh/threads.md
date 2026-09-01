# Threads 貼文 — GeekLego：AI-Native 開源設計系統
# 平台：Threads | 語言：繁體中文 | 日期：2026-09-01
# 來源：https://geekyants.com/blog/geekyants-launches-geeklego-an-ai-native-open-source-design-system

---

我們為設計系統寫了二十年的文件。為人類寫的。

GeekyAnts 上週開源了 GeekLego——一個建立在 Tailwind CSS v4 上、MIT 授權的 AI-native 設計系統——而其中新的部分不是 component library 或 token 本身。是直接內建在系統裡的機器可讀 governance 規則。

GeekLego 可以告訴 Claude Code、Codex、Gemini CLI 以及任何支援 agent 的工具，確切如何使用每個 component、如何套用 design token、適用哪些 accessibility 要求、以及如何與你的 Figma 工作流程保持同步。不是 AI 生成程式碼之後才說。是在生成之前。在生成的當下。

這就是所有人繞了幾個月卻沒有清楚說出來的 governance 模型轉變：在生成時介入標準，不是事後執行。

這真正改變了什麼：設計系統文件現在同時有兩個受眾——開發者和 agent。對 agent 最重要的規則，和 DesignOps 一直以來在乎的規則是同一件事：component 的意圖、token 的語意、constraint 的原因。我們只是不知道我們一直在為兩個受眾寫作。

GeekLego 提出的誠實問題：機器可讀規則由誰來撰寫？不是開發者，不是 AI。是理解每個 constraint 為什麼存在的人。這不是技術職位，是設計領導力的職位。

MIT 授權加上開源，意味著地板移動了。所有採用 GeekLego 的團隊都獲得了相同的 governance 基準線。資深設計師的優勢不再是「有一套設計系統」——而是「設計系統的意圖被記錄得夠清晰，讓 agent 能正確套用」。

設計系統的 ROI 論述剛剛改變了。不只是「一致的 UI」和「更快的交付」。還有：「你的 AI coding agent 按照你的規則編碼，而不是按照它自己的猜測。」

品質上限仍然在你這裡。GeekLego 只是讓地板變得明確了。
