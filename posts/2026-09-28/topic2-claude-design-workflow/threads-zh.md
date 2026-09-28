# Threads Post — Claude Design：開發者本人的真實工作流程（繁體中文）
**主題：** Nate Parrott（Claude Design 作者）分享他真實的日常工作流程——2026年9月27日

---

## 長篇個人觀察

我已經看過這個模式夠多次了，可以給它一個名字。

每次有人分享他們真實使用主要 AI 設計工具的工作流程，它看起來像是限制架構——不是提示詞工程。更多前置 context，更少描述，更多 reference，有結構的生成空間，最後手動精確。

Nate Parrott，建立 Claude Design 的 product designer，這週分享了他的工作流程。以下是他的用法和大多數人用法之間誠實的差距。

他從 wireframe 開始，不是 mockup。在顏色、字體、圖片之前，他先用低保真度把結構搞對。模型可以專注在構成上，不用同時解決美感問題。說出來聽起來很顯然，幾乎沒有人這樣做。

他給模型真實的 context——不是描述。對於現有產品，他把 Claude Design 連接到真實的 GitHub repo。現有的 component 名稱，真實的品牌素材。模型從具體的材料裡建立，不是從對抽象提示詞的詮釋裡建立。Reference 勝過描述。這和 Stitch 的品牌 kit 拖入是一樣的轉變，和 BRDNA 把品牌 DNA 編碼，和 Once UI 把設計系統作為 agent context 打包在 npm 裡。

他建立設計系統並重用它。一旦他有了一個有效的視覺方向，他就把它編碼。下一個 session 從那個基礎出發。和我寫過的每一個限制架構工具一樣的原則——想一次，讓限制無限期執行。

最後 10%，他不重新提示。他用 Claude Design 的直接編輯工具——重排、調整大小、顏色、文字、刪除——做精確微調。零 tokens。這些編輯是唯一手動控制實際上比 prompting 快的階段。他使用那個階段。

值得停下來想的部分：這不是 Claude Design 的工作流程。這個順序是通用的。先做結構。具體 reference，不是描述。有邊界的生成空間。最後手動精確。我在 Figma Custom Skills 教程、Framer Skills 文件、Vercel design.md 框架裡都看過它出現。工具改變，底層邏輯不改變。

它對實踐者提出的問題：你目前的 AI 設計工作流程裡，哪個地方在用描述代替可以用 reference 的地方？那個差距——描述和 reference 之間——是大多數品質流失的地方。完全在你的控制範圍內。

---

## 短版金句（單獨發）

建立 Claude Design 的人不是從描述他想設計什麼開始的。

他從給模型一個真實可以建立的東西開始。

一個 wireframe。一個 repo。一個設計系統。一個 reference。

這不是工作流程小技巧。
這是每一個真正產出高品質結果的 AI 設計工作流背後的整個模式。
