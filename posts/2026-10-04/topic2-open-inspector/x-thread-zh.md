# X Thread — Open Inspector：滑鼠一指任何網站，取得它的設計系統（繁體中文）
**主題：** Open Inspector——免費的 MIT 授權瀏覽器擴充套件，可以檢視任何頁面並以 6 種格式匯出設計系統 token，包含給 Cursor 或 Claude 的 Markdown 格式。零網路請求。沒有網站存取權限。2026年10月2日在 Product Hunt 上線。
**角度：** 「給 Cursor/Claude 的 Markdown 交接」匯出格式是轉捩點。Open Inspector 不只讓你複製一個顏色——它讓你擷取任何生產網站的整個 constraint framework，直接餵進你的 AI context。Reference 勝過描述，而現在這個 reference 已經以你的 agent 能讀取的格式呈現了。

---

**Tweet 1 / Hook**
Open Inspector 剛上線：滑鼠指向任何網站，取得它的設計系統。

不只是顏色和字體。它實際上遵循的間距比例。標題背後的排版層次。影響你正在看的東西的斷點。

然後——以 Markdown 格式匯出給 Cursor 或 Claude。

最後這一點值得停下來思考。

---

**Tweet 2**
它實際上在做什麼：

懸停檢視。點擊鎖定。用方向鍵遍歷 DOM tree。

每個值都在面板中可即時編輯（關閉後恢復——這是設計如此）。

全頁掃描：間距比例、字型比例、色板、斷點、排版解剖。

匯出格式：CSS 變數、Tailwind config、SCSS、JSON、W3C design tokens——以及給你的 coding assistant 的 Markdown 交接格式。

---

**Tweet 3**
為什麼這件事的意義不止是「更好的 DevTools」。

DevTools 告訴你某個元素計算出來是什麼。

Open Inspector 告訴你頁面是怎麼建構的——隱藏在生產程式碼背後的設計系統。一個團隊實際上承諾的間距比例。通過了設計審查的排版層次。

這是競爭設計情報，可以一鍵擷取。

---

**Tweet 4**
給 Cursor/Claude 的 Markdown 匯出是讓這個工具從檢視工具轉變為 AI context 工具的關鍵。

九月份跨工具確認的「reference 勝過描述」模式：在每個層次，具體的 reference 都能產出比抽象描述更好的 AI 輸出。

Open Inspector 是任何生產網站的「擷取 reference」工具。

不用透過描述你想要的東西來寫你的 DESIGN.md——擷取一個設計良好的網站實際建構了什麼。然後用那個作為 constraint context。

---

**Tweet 5**
「沒有網站存取權限」的設計值得明確指出。

每個替代擴充套件（CSS Peeper、Hoverify）都請求所有網站的權限。這意味著你的 staging 環境、內部儀表板、你登入的任何東西——都交給了你無法審計的閉源擴充套件。

Open Inspector 只請求 activeTab，由你的點擊授予一個分頁，離開頁面後撤銷。Chrome 的安裝對話框根本不顯示任何網站存取。

信任架構是產品設計的一部分。

---

**Tweet 6**
零網路請求，由建置步驟驗證。

不只是聲稱——如果原始碼或打包後的 bundle 包含 fetch、XHR、WebSocket 或 beacon 呼叫，建置就會失敗。

與 Cubicle 的唯讀限制相同的邏輯：限制是可驗證的，這才是讓它值得信賴的原因。你無法驗證的限制不是限制——它是一個行銷聲明。

---

**Tweet 7**
值得說出的誠實限制：

只支援 Chrome/Chromium。

即時編輯在關閉後恢復——這是一個檢視工具，不是生產工作流程工具。

沒有截圖或多裝置預覽（Hoverify 在這方面勝出）。

「讀取生產狀態，不是設計意圖」的限制也適用於此——與 Webflow Agent Instructions 自動生成和 Onefold 網站掃描相同的問題。部署的 ≠ 設計的。

---

**Tweet 8**
重新框架：

設計系統隱藏在每個生產網站裡。它們一直都在——在間距比例、排版層次、色板、斷點決策中。

Open Inspector 把它們擷取出來。Markdown 匯出讓它們直接可用作 AI context。

設計情報一直都在 reference 裡。現在你可以用你的 agent 能讀取的格式取得它了。
