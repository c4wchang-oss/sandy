# Threads Post — Open Inspector：滑鼠一指任何網站，取得它的設計系統（繁體中文）
**主題：** Open Inspector——免費的 MIT 瀏覽器擴充套件，可以檢視任何頁面並以 6 種格式匯出設計 token，包含給 Cursor/Claude 的 Markdown 格式。零網路請求。沒有網站存取權限。2026年10月2日。

---

## 長篇反思

Open Inspector 這週在 Product Hunt 上線了。標語是「懸停任何網站，取得它的設計系統。」現實比這稍微更有趣。

這個工具是基於一個原則建構的瀏覽器擴充套件：它應該只請求你明確給予的權限，不多一點。沒有「讀取和變更所有網站的所有資料」——這是每個我安裝過的 CSS 檢視器都提出的要求。Open Inspector 只請求 activeTab，由你的點擊授予一個分頁，你一離開頁面就立即撤銷。Chrome 的安裝對話框根本不顯示任何網站存取。建置步驟掃描原始碼和打包後的 bundle 是否有任何 fetch、XHR、WebSocket 或 beacon 呼叫——如果找到就建置失敗。

這很重要，因為工具的信任架構是其設計的一部分。一個在你用它來檢視競爭對手網站的同時，可以悄悄觀察你的 staging 環境和內部儀表板的工具，不是你應該用於競爭工作的工具。Open Inspector 消除了這個風險。這是一個設計決策，不只是一個功能。

它實際上在做什麼：懸停任何元素即時檢視，看到字型、間距、顏色、計算後的排版。點擊鎖定。用方向鍵遍歷 DOM tree。全頁掃描擷取頁面實際遵循的間距比例、標題背後的排版層次、依使用頻率排序的色板，以及影響當前 viewport 的斷點。

六種匯出格式：CSS 自訂屬性、Tailwind config、SCSS、JSON、W3C design tokens——以及給 Cursor 或 Claude 的 Markdown 交接格式。

最後這種格式是讓這個工具從「更好的 DevTools」轉變為結構上更重要東西的關鍵。

九月份，我們確認了所有值得關注的 AI 設計工具中的一個普遍模式：reference 勝過描述。具體的、結構化的 reference 在每個層次都能產出比抽象描述更好的 AI 輸出。這就是為什麼 Stitch 的品牌素材拖入勝過從頭寫的 DESIGN.md。為什麼 Claude Design 的創作者 Nate Parrott 在每次會話中放入真實的 GitHub repo 和品牌檔案，而不是描述他想要什麼。為什麼 Once UI 把自己的 agent harness 打包在 npm 套件裡——讓 constraint reference 跟著工具走，而不是分開存放。

Open Inspector 是任何生產網站的「擷取 reference」工具。

不用透過描述你想要的設計感覺來寫 DESIGN.md——你可以擷取一個設計良好的生產網站實際建構了什麼——它的間距比例、排版決策、色彩系統——然後用那個作為你的 AI agent 的 constraint context。Reference 一直都在那個生產網站裡。現在你可以用你的 agent 能讀取的格式取得它了。

誠實的限制：這讀取的是生產狀態，不是設計意圖。與 Webflow Agent Instructions 自動生成（九月六日）和 Onefold 網站掃描（九月二十一日）相同的問題。部署的不一定符合設計的。你擷取的間距比例可能包含多年生產工作中積累的偏移、不一致和覆蓋。把它當作 constraint context 的起點，而不是最終真相。

重新框架：設計系統一直隱藏在每個生產網站裡。對任何有耐心閱讀 DevTools 的開發者來說，它們一直都可見。Open Inspector 讓它們可以被擷取。Markdown 匯出讓它們直接可用作 AI context。信任架構讓這個工具在競爭情報工作中是安全的。

Reference 勝過描述。現在你可以從任何地方擷取 reference 了。

---

## 簡短有力的觀點（單獨發文）

Open Inspector：懸停任何網站，以 6 種匯出格式取得它的設計系統。

包含給 Cursor 和 Claude 的 Markdown 格式。

零網路請求。沒有網站存取。MIT 授權。建置步驟驗證兩者。

Reference 勝過描述。這是任何生產網站的「擷取 reference」工具。

設計情報一直都在那個網站裡。現在你可以用你的 agent 能讀取的格式取得它了。

誠實限制：讀取的是已部署狀態，不是設計意圖。作為起點使用，不是最終真相。
