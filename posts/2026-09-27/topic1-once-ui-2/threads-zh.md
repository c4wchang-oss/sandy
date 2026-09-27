# Threads Post — Once UI 2.0：Agent-First 設計系統（繁體中文）
**主題：** Once UI 2.0 在 npm 套件裡內建 agent harness（2026年9月25日）

---

## 長篇個人觀察

我一直在想「讓你的設計系統 AI-ready」到底是什麼意思。

大多數我看到的答案都圍繞著文件。把 token 說明寫清楚。改善命名一致性。加使用指南。都對，都必要。但都還是需要有人在設計系統和 AI 之間做翻譯——一個人類維護著一個機器可能讀、也可能不讀的附屬文件。

Once UI 2.0 這週出現了，npm 套件裡直接帶著一個不同的答案。一個 agent harness：compact rules（~2KB）、按目的索引的 component catalog、依意圖配對的 task bundles、gold examples，還有一個 validation CLI。一個指令——`npx once-ui-init-agent`——就把 AGENTS.md 和 Cursor rule 文件寫進你的專案。設計系統在安裝自己的 brief。

作者關於它是怎麼被建立出來的反思值得停下來想：「Once UI 2.0 不是讓 agent 設計這個系統做出來的。它是因為讓量測便宜到我不需要猜測才做出來的。當程式碼變得更容易生產，限制和實證才更重要，不是更不重要。」

這是 DesignOps 的思維，不是工程思維。設計系統的重點從來不是 component，是被編碼進去的決策——用什麼、什麼時候用、為什麼用。Compact rules 文件就是這樣做的：`Card` 只能用於互動元素。靜態 panel 用 `Column + surface recipe`。如果設計意圖不清楚，問——不要生成再看看調整。這些不是風格偏好，是 agent 在開始寫任何一行之前就會讀到的限制定義。

有一條收斂脈絡在這裡結束了：OUI-1 是第一個被訓練來生成 UI 的模型。BRDNA Sequencer 把品牌 DNA 編碼為機器可讀的 context。Figma Custom Skills 把設計判斷編碼為斜線指令。全都往同一個方向走：設計意圖應該可以被機器讀取。Once UI 2.0 是我第一次看到設計系統從套件內部出貨自己的可讀性層——不需要另一個團隊分開維護。

說實話：2.0 alpha，236 個 GitHub stars。架構是對的；生產規模的穩定性是另一個問題。70% 輸出精簡度的說法（對比 Tailwind+shadcn）來自他們自己的文件——在你自己的 codebase 上驗證。

---

## 短版金句（單獨發）

你在 component 裡編碼的每一個設計原則，一直都是某個東西的 brief。
你只是不知道誰要讀它。

Once UI 2.0 決定讓 agent 從套件內部讀它。
不是從文件，不是從 wiki，是從 `npm install` 寫入的 AGENTS.md。

限制一直都是重點。
現在它們有讀者了。
