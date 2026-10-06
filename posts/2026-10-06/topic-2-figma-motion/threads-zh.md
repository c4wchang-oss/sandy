# Topic 2: Figma Motion Custom Styles — Threads Post (Traditional Chinese)
**Date:** 2026-10-06
**Platform:** Threads
**Format:** Long-form personal reflection
**Image:** figma-motion-x-threads-zh.jpg (16:9)

---

9 月 30 日有個安靜的 Figma Motion 更新，我覺得它比看起來更有意義。

Custom animation styles（自訂動畫樣式）。你把緩動曲線、時間長度、variable 綁定屬性——存成一個有名字的、可重複使用的 style。發布到你的 library。在組織裡的每個檔案都套用，就像你用顏色 style 和文字 style 一樣。

這為什麼對我來說感覺像是一個重大的轉變：設計系統有顏色、字體、間距、元件變體的具名、可共享的 token 已經超過十年了。Motion 永遠是例外。緩動曲線住在某個人的 Notion 文件裡，或在某個 Storybook 文件的備注裡，或——更常見的是——根本什麼地方都沒有。你只能用文字向工程師描述動畫，或者希望他們能從 Figma prototype 裡眼估出來。沒有人能以程式化的方式套用它。

現在這件事開始改變了。

從 AI 工作流的角度來看，MCP 和 Skills 整合是讓這件事變得有趣的地方。Figma 說動畫 style 可以被 Figma 自己的 agent 自動套用，或透過 MCP 或 Skills 傳給 coding agent。在實際操作中，這意味著你的具名 motion style 現在是你已經在使用的 AI 設計流程的可讀輸入。動畫的提示品質落差——自從 Jitter AI 升級到 Opus 5.5 之後模型的能力開始超過大多數使用者的動畫提示品質，我就一直在觀察這個問題——現在部分可以從系統層面解決，而不只是從提示層面。

Audio 時間軸的更新是我真的沒預期到的。把音訊檔案拖到任何 clip 上，根據你的關鍵幀修剪並重新定位，用 MP4 或 WebM 匯出。音效設計現在住在跟動態設計同一個時間軸裡。這是一個容易被低估的 IA 決策：當音訊和動態設計在同一個工具裡，兩者的提示可以是同一個標注、同一個審閱、同一個設計決策的一部分。這是一種跟「把這個傳給音效設計師」完全不同的文件形式。

Lottie 和 dotLottie 匯出把網頁動畫的交付故事完整了，就像元件規格完整了 UI 交付一樣。Dev Mode 可以檢查完整的時間軸並把動畫程式碼複製成 CSS、JSON 或 React。Motion 流程現在跟元件流程的形狀一樣了。

誠實的注意事項：open beta 意味著功能可能還會改變。手動製作動畫不消耗 AI 點數，但 agent 套用 motion 會消耗——所以治理問題在這裡也適用。而且 motion style library 的品質上限是真實的：如果你的緩動曲線不是有意識選擇的，給它們命名並不會讓它們變好。

還沒有人回答的治理問題：誰擁有 motion style library？在大多數組織裡，顏色由品牌擁有，字體由設計系統擁有，間距由設定 grid 的人擁有。Motion 住在品牌（個性、時機）和工程（效能、無障礙）之間的空隙。Figma 的更新沒有解決這個問題。它只是讓這個問題無可迴避了。

Motion DesignOps 現在是一個真實的工作。對某些團隊來說它已經是真實的工作有一段時間了——他們只是沒有工具來執行它。現在或許有了。
