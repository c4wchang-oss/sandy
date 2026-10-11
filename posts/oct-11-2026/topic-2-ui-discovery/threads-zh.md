# Threads Post — 繁體中文
## 主題：UI Discovery — Reference Library 作為 AI Brief 基礎架構
## 日期：2026 年 10 月 11 日
## 格式：長篇個人反思

---

每個開發者都有過那個時刻：「讓它看起來像 Linear 的設定頁。」

這一直是真正的 brief。問題是如何把它轉譯成 coding agent 真正能執行的東西——從正確的畫面擷取正確的元素，以 agent 能理解的格式呈現。

UI Discovery（AppMole，10 月 10 日）把這個轉譯工作在 library 規模上產品化了。2,600+ 個真實網站，3,800 個 iOS app，111,000+ 個 UI 段落——每個都拆解成色板、字型和佈局模式，每個都附帶給 Cursor 和 Claude Code 的 AI-ready build prompt。MCP 連接讓你的 agent 不用等你去找參考，它直接瀏覽 library 並自行選擇。

我今年一直在追蹤 reference-over-description 這個反覆出現的模式。

BRDNA Sequencer 把品牌 DNA 轉成 agent 上下文，而不是要求抽象的風格描述。Stitch 讓你直接拖入 PDF 和產品圖片，而不是用文字描述你的視覺方向。Open Inspector 讓你懸停任何生產網站，把底層的 design system 導出為 Claude 能直接讀的 Markdown。Once UI 2.0 在 npm package 裡附帶自己的 agent harness，讓 design system 安裝時順帶安裝了自己的 brief。

UI Discovery 是同一個原則在 library 規模的實現：library 已經做了 prompt engineering 的工作。111,000 個段落，預先轉譯為 AI 能讀的格式。開發者說「像 Linear 的側邊欄」和一個讓 agent 直接執行大半工作的結構化 prompt 之間的差距——這就是它填補的東西。

我一直回到的品質上限問題：參考消除了模糊性，但不增加判斷力。

對錯誤資訊架構的完美執行仍然是錯誤的 IA。「像 Linear 的設定頁，但用於醫療 app」參考了出色的視覺執行，但對實際使用情境可能有糟糕的資訊架構。參考是執行工具。IA 決策——這是否是你的用戶實際任務的正確產品結構——仍然是你的責任。

產品本身對另一個限制也很誠實：「在你的市場中，『受到啟發』可能讀起來像『完全一樣』。」參考和差異化是有張力的。111,000 個段落的 library 優化的是讓你達到精緻的執行。在擁擠的產品類別中，這是必要但不充分的。你的用戶可能需要感受到你的產品是獨特屬於你的——而 Notion 側邊欄的 reference library 給不了你這個。

我會搭配使用兩個工具：UI Discovery 提供參考，Impeccable 用 61 條 deterministic 規則 audit 結果。參考品質進入執行品質進入底線執行。Brief 品質差距才是真正的差距，模型能力不是了。

---

*圖片：16:9 — 見 images/x-threads-16x9-zh.jpg*
