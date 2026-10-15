# X Thread — Plastic（繁體中文）

---

**推文 1（Hook）**
設計檔案是介面的圖片。

Plastic 是一個畫布就是真實 HTML 和 CSS 的設計工具。

你畫的就是能直接出貨的東西。沒有 export。沒有重建。沒有翻譯層。🧵

---

**推文 2**
核心想法：與其設計一個工程師要重建成程式碼的 mockup，你直接在畫布上設計真實的介面。

你儲存的檔案就是可以直接部署的 web 介面。

Figma → Plastic 匯入會把 pages、frames、auto layout、文字、圖片和 variables 轉換成可編輯的 HTML/CSS。

---

**推文 3**
Agent（Claude Code、Codex、Cursor、Grok）透過 MCP 連接。

它們讀取的是真實設計——不是截圖，不是 spec 文件——並在畫布上即時做出改變。每一步都可以 undo。Agent 正在讀取或編輯的 layer 會即時顯示。

Agent 輸入：真實設計結構。Agent 輸出：真實設計改變。

---

**推文 4**
這裡的 constraint 架構很重要。

Agent 可以讀取程式碼來複製外觀，但無法編輯檔案或執行系統指令。它們只能透過 Plastic 自己的工具運作。

同樣的原則如同 ProtoPie Code MCP（唯讀保護 pipeline 的可信度）：約束本身就是讓工具在生產環境中安全的東西。

---

**推文 5**
這和今年做出同樣根本賭注的兩個工具並列：

Elyx（9/29）：有人類可讀、AI 友善檔案格式的設計工具。設計檔案本身就是 constraint 文件。
Timeful（10/5）：畫布編輯直接寫入 .vue 檔案的視覺 IDE。
Plastic：畫布就是 HTML/CSS 的視覺設計工具。每一步都沒有轉換。

---

**推文 6**
對資深設計師來說，什麼改變了：

交接變成「分享 frame 連結」。工程師和編碼 agent 從真實來源出發——有 token 的語義 HTML/CSS——而不是需要被解讀的截圖。

設計到程式碼的落差沒有被填補。它根本不存在。

---

**推文 7**
誠實的注意事項：

僅限邀請的預覽版、Apple Silicon Mac 應用程式（Windows 即將推出）、目前沒有公開定價。

這是一個真實 web 介面的設計工具——不是 Figma 規模的設計系統、動態效果庫或行動原生 UI。範疇很重要。

「無需重建」的承諾取決於你建立的元件和 token 保真度。

---

**推文 8**
這個模式：

Elyx（檔案格式）+ Timeful（Vue/Tailwind 畫布即程式碼）+ Plastic（HTML/CSS 畫布即設計）= 三個工具、三個角度、同樣的根本問題。

設計工具中二進制檔案格式的假設正在從多個方向同時被挑戰。

橋接時代可能比我們想的要短。

useplastic.app

---
