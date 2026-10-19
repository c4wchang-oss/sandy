# Threads — Skisso — 中文
# Oct 19, 2026 | 16:9 圖片 → x-threads-16x9-zh（與 X 共用）

---

跟 AI coding agent 協作改 UI 最難的部分，從來不是 agent 的能力問題，是中間那層翻譯。

你知道你說的是哪個元素，你知道你要改哪個屬性，你知道你想要的值是多少。然後你花三分鐘寫了一段文字描述它——agent 用整個 context window 解讀你的段落、猜你的意思、貼入整頁 HTML 只為了找到正確的 div。

Skisso 是一個免費的 Chrome extension，由瑞典的 product designer Alex Zakabluk 做的，把那個步驟去掉了。你在真實運行的產品上點選元素，用你的 design token 改它——間距、顏色、字型、版面——然後只把 diff 交給 agent。Agent 收到的是選擇器、屬性名稱、改之前的值、改之後的值。就這樣。

能說服人的數字：整頁 context dump 大約 25,700 tokens，Skisso diff 大約 380 tokens。這不只是效率提升，這是設計意圖在你和 agent 之間傳遞的完全不同的方式。

我認為它做對的地方：它讀你既有的 CSS 變數，改動輸出是 `var(--brand-primary)` 不是隨機 hex 碼。內建 55 個 shadcn/ui 元件，自動繼承你網站現有的字型、顏色和圓角。如果你已經建了有 token 的 design system，它放大這個架構的效果。如果還沒有，它補不了那個缺口——這是誠實的限制，不是功能不足。

我最想看到更多工具學的是它的信任架構：完全在本機運行，不需要帳號，不對外傳資料，在 localhost、staging、正式環境都能用。跟 Cubicle 和 Open Inspector 一樣的可驗證原則——架構本身是承諾，不靠隱私政策背書。

MCP 讓迴路閉合：`npx -y skisso`，你的 coding agent 可以直接查詢你選了什麼、取得改動。不用複製貼上，不用解釋。Agent 直接查你的真實工作階段。

誠實的限制：目前只支援 Chrome，適合改現有 UI 不適合設計全新介面，還不支援針對特定 breakpoint 的獨立編輯（作者自己說這在 to-do list 上），最適合已有 CSS token 架構的情況。另外：真實產品的狀態是已部署的版本，不一定完全等於設計意圖——任何讀正式環境的工具都有這個問題。

我一直在想的框架：這是 reference-beats-description 的邏輯終點。你不再描述你想要什麼，你呈現確切的改動。解讀的步驟消失了。Brief 就是 diff。

免費。本機。不需帳號。skisso.app
