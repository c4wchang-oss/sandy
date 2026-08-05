# Threads 貼文 — 主題二：DesignSync.AI
## 平台：Threads | 語言：繁體中文 | 格式：長篇個人思考
## 日期：2026-08-05 | 來源：https://itbusinesstoday.com/tech/ai/sun-rolls-out-designsync-ai-platform/

---

有 AI 爬了你的 Production 網站，把你說已經改掉的問題全都條列出來了。

DesignSync.AI 8 月 4 日上線。輸入網址，它爬取整個 Production 網站，輸出一份設計系統報告：色彩、Typography、間距、元件模式，全部從實際部署的版本提取出來。

這不是傳統意義的 UX Audit 工具，更接近鑑識。它告訴你 Production 裡的設計系統「實際上是什麼」，而不是你 Figma 檔案裡說應該要是什麼。

我做過夠多的產品，知道這兩件事之間的差距幾乎每次都讓人不舒服。在 Production 裡有六種幾乎一樣的藍色，但 Figma 只定義了兩種。Typography 在 18 個月的「快速修補」裡逐漸偏移。同一個 Card 元件被三組工程師各蓋了一次，每個人都以為自己在遵守 Spec。

以前這個差距是隱形的，或者說，你要花好幾週做手動 Audit 才能看見它。

DesignSync.AI 產生的是一個 Baseline。從這個 Baseline 出發，Sun Asterisk 的設計師再跟你一起建立統一的、AI 可用的設計資產。這是一個服務包著工具的商業模式，不是你買回去自己跑的獨立產品。

往上游想更重要：Claude Design、Figma Make、Cursor 這些 AI 建構工具的輸出品質，完全取決於它們工作的設計系統有多一致。如果你的 Production 設計系統是破碎的，每一個 AI 輸出都會繼承這個破碎。你沒辦法靠 Prompt 跨越一個爛掉的地基。

DesignSync.AI 就是診斷出地基哪裡裂掉的那個工具。

老實說：對有大量歷史技術債的團隊最有價值。如果你從一開始就在 AI 工具上重新建，可能比較不會遇到這個發散問題。

最後的 Reframe：你的 Production UI 裡一直都有一個設計系統，就算你從來沒有正式文件化它。每一個顏色值、字體大小、間距都在那裡。問題已經不是「我們有沒有設計系統」，問題是：我們的設計系統是不是我們以為的那個樣子？
