# X Thread — Claude Design：開發者本人怎麼用這個工具（繁體中文）
**主題：** Nate Parrott（Claude Design 作者）分享他真實的日常工作流程——2026年9月27日
**角度：** 工具作者用法和大多數人用法之間的差距，揭示了所有成功 AI 設計工作流背後的通用模式。

---

**Tweet 1 / Hook**
建立 Claude Design 的 product designer 分享了他實際怎麼用它。

看起來跟大多數人用的方式差很多。

這個差距不是工具特定的問題。而是限制優先工作流和描述優先工作流之間的差別。

Thread. 🧵

---

**Tweet 2**
差距 1：他從 wireframe 開始，不是 mockup。

在顏色、字體、圖片之前——他先用低保真度規劃版面。模型可以專注在構成上，不用同時解決美感。

先做結構，再做視覺細節。

大多數人直接跳到視覺設計，這就是為什麼第一版輸出總是需要很多輪修改。

---

**Tweet 3**
差距 2：他給真實 context，不是描述。

如果是在為現有產品設計，他把 Claude Design 連接到真實的 GitHub repo。或者上傳品牌文件。或者提供現有的 components。

模型有具體的東西可以從中建立——不是一段描述需要去詮釋。

Reference 勝過描述。每次都是。在每一層都是。

---

**Tweet 4**
差距 3：他建立設計系統，然後重用它。

一旦確定了一個有效的視覺方向，他就把它編碼成設計系統。下次 Claude 從那個基礎出發——不是空白的開始。

跟 AGENTS.md、CLAUDE.md、design.md、Once UI 2.0 agent harness 一樣的原則。

思考一次，限制來執行。

---

**Tweet 5**
差距 4：最後 10% 用直接編輯，不是重新提示。

Claude Design 有直接操作工具——重排、調整大小、編輯文字、改顏色、刪除元素。他用這些做精確微調。

零 tokens。沒有新的生成循環。只是在精確度最重要的那層做手動調整。

最後 10% 永遠是精確度問題。Prompting 無法解決它。

---

**Tweet 6**
浮現的模式：

先定義結構 → 提供具體 reference，不是描述 → 在有邊界的空間裡生成 → 手動精確編輯。

這不是 Claude Design 的工作流。這是我看過的每一個高品質 AI 設計工作流的架構。

---

**Tweet 7**
Google Stitch 用品牌 kit PDF 作為視覺 reference（9月24日）。
Once UI 2.0 把設計系統作為 agent context 打包在 npm 裡（9月25日）。
BRDNA Sequencer 把品牌 DNA 編碼為機器可讀的 agent 輸入。
Vercel design.md 把設計意圖記錄為 AI 參數。

Reference 勝過描述。在每一層。從每個工具。在同一個兩週窗口裡。

---

**Tweet 8 / CTA**
問題不是你用哪個 AI 設計工具。

而是：你目前工作流程的哪個地方，在用抽象描述代替可以用 reference 的地方？

那個差距——描述和 reference 之間——是大多數 AI 設計品質流失的地方。

而這完全在你的控制範圍內可以縮小。
