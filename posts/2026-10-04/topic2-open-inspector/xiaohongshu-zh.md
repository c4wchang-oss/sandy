# 小紅書 Post — Open Inspector：滑鼠一指任何網站，取得它的設計系統（繁體中文）
**主題：** Open Inspector——免費的 MIT 瀏覽器擴充套件，可以檢視任何頁面並以 6 種格式匯出設計 token，包含給 Cursor/Claude 的 Markdown 格式。零網路請求。沒有網站存取權限。2026年10月2日。

---

**標題：**
這個免費瀏覽器擴充套件可以把任何生產網站變成 AI 設計 context——而且它看不到你的私人資料

---

**內文：**

Open Inspector 上週在 Product Hunt 上線（2026年10月2日）。標語：懸停任何網站，取得它的設計系統。

以下是這對 AI 驅動的設計工作流程在實際操作中意味著什麼。

**它匯出什麼：**

① CSS 自訂屬性——直接放進你的 stylesheet
② Tailwind config——把擷取的間距和字型比例作為 Tailwind tokens
③ SCSS 變數
④ JSON design tokens
⑤ W3C design tokens 規格格式
⑥ **給 Cursor 或 Claude 的 Markdown 交接格式**——改變工作流程的那個

**全頁掃描給你什麼：**

頁面實際遵循的間距比例（不只是某個元素的 padding——是背後的系統）

標題背後的排版層次——字型家族、字型大小比例、字重決策

依整個頁面使用頻率排序的色板

影響你當前正在看的東西的斷點

**為什麼 Markdown 匯出很重要：**

從九月開始，AI 設計工具中的普遍模式已被確認：reference 勝過描述。

具體的、結構化的 reference 在每個層次都能產出比抽象描述更好的 AI 輸出——在每個工具中都是如此。這就是為什麼 Claude Design 的創作者在每次會話中放入真實的 GitHub repo 和品牌檔案。這就是為什麼設計系統現在把 AGENTS.md 打包在 npm 套件裡。Reference 就是 constraint。

Open Inspector 是「從任何生產網站擷取 reference」的工具。

不用從頭寫 DESIGN.md 來描述你想要的東西——擷取一個設計良好的網站實際建構了什麼。他們的間距決策。他們的排版層次。他們的色彩邏輯。把它用作你的 AI agent 運作其中的 constraint context。

**信任架構（為什麼這比大多數擴充套件更重要）：**

大多數 CSS 檢視器擴充套件請求所有網站的權限。這意味著你的 staging 環境、內部儀表板，以及你登入的任何東西——都交給了你無法審計的閉源擴充套件。

Open Inspector：
- 只請求 activeTab（一個分頁，你的點擊授予，離開就撤銷）
- 零網路請求——由建置步驟驗證，找到 fetch/XHR/WebSocket/beacon 就失敗
- MIT 授權——你可以讀每一行

**誠實的限制：**

- 只支援 Chrome/Chromium
- 讀取已部署狀態，不是設計意圖——生產中的東西可能包含多年的偏移、覆蓋和意外
- 即時編輯在關閉後恢復（只用於檢視，不是生產工作流程）
- 沒有截圖，沒有 33 個尺寸的多裝置預覽（Hoverify 在那方面勝出）

**資深 UX 框架：**

每個生產網站都包含一個設計系統。它一直都在那裡——在撐過了上線的間距決策中，在通過了設計審查的排版層次中，在生產程式碼實際使用的色板中。

直到現在，把它擷取出來都是手工的偵探工作。Open Inspector 讓它只需一鍵和六種格式。

Markdown 匯出讓它直接可用作 AI constraint context。

設計情報存在於生產 reference 中。現在你可以用你的 agent 能讀取的格式取得它了。

---

#UI設計 #設計工具 #OpenInspector #AI設計 #設計系統 #Figma #AI工作流 #UX設計 #DesignTokens #資深UX設計師 #設計研究 #AI情境 #開源 #Chrome擴充套件 #設計工具2026
