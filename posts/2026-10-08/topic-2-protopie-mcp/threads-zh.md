# Topic 2: ProtoPie MCP Official — Threads Post (Traditional Chinese)
**Date:** 2026-10-08
**Platform:** Threads
**Format:** Long-form personal reflection
**Image:** protopie-mcp-x-threads-zh.jpg (16:9)

---

ProtoPie MCP 昨天正式 GA 了，我想解釋為什麼我認為它比目前的報導所暗示的更重要。

通常的框架是「現在你可以用 AI 建 prototype 了」——Studio MCP 確實做到這件事。把你的 AI 助手連接到 ProtoPie Studio，它就可以編輯你正在打開的 prototype：新增 trigger、調整 response、讀取互動結構、瀏覽你的設計函式庫、用 ID 定位特定元素。自然語言到 prototype 精修。這是真的有用，這就是 Pro 方案涵蓋的內容。

但 Code MCP 才是我認為對 handoff 問題更有意義的部分。

Code MCP 是一個你透過 npx 執行的本地唯讀 server。你在 ProtoPie Cloud 打開 Dev View，選擇任何元素——整個 prototype、特定場景、單一元件，或一個 layer——並複製它的連結。把那個連結貼到你的 coding agent（Claude Code、Cursor、Codex、VS Code、任何支援 MCP 的環境）。Agent 讀取實際的 prototype：場景樹、layer 結構、變數、trigger-response 配對、條件和公式。它讀取互動邏輯，不是截圖。

然後它寫出程式碼。

這關閉了一個一直很難解決的 handoff 缺口。互動規格一直是薄弱的一環。Figma spec 告訴開發者靜態狀態長什麼樣。當用戶點擊那個元素時發生什麼、什麼條件觸發那個狀態變化、那個微動效做什麼——這些住在設計師的腦袋裡、Slack 串裡、開發者沒有授權打開的 ProtoPie 檔案裡，以及他們試圖逆向工程的 prototype 錄影裡。Code MCP 讓那些資訊可被機器讀取。你在 ProtoPie 裡建立的 trigger-response 邏輯，就是 coding agent 工作所依據的規格。

唯讀 constraint 值得停下來想一想。Code MCP 可以讀取 prototype 但永遠不能寫回它。這不是限制——這是正確的決定。如果 AI 可以從程式碼生成端修改 prototype，你就有兩個事實來源。Prototype 和程式碼庫會開始分歧。唯讀是讓 prototype 具有權威性的東西。Constraint 讓 pipeline 可信。這跟上週的 Cubicle 是同一個原則（「唯讀設計」用於 AI agent 觀察工具），套用在 handoff pipeline 上。

這次發布的新框架：React Native 加入了 React、Flutter、SwiftUI、Compose、Qt/QML 和 ArkTS。

誠實的說明：Code MCP 僅限 Enterprise 方案。程式碼品質仍然取決於你的提示詞和你選擇的 agent——很好的 context 不保證正確的輸出。這是單向的；程式碼無法反向轉回 prototype。目前是本地 stdio server，還沒有遠端部署。

我一直思考的框架：Figma 有視覺設計層的 MCP 存取。ProtoPie 現在有互動和行為層的 MCP 存取。把它們放在一起，你就有了機器可讀的完整設計規格——視覺保真度和互動邏輯——都以 AI coding agent 可以直接讀取的格式存在，不需要任何人手動翻譯。

這改變了 handoff 問題實際上是什麼。問題不再是「我們怎麼把設計解釋得夠清楚」。而是「我們有沒有用讓它成為有用規格的保真度和結構來建造 prototype」。
