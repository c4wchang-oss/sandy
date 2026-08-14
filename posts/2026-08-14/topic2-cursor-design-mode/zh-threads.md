# Threads Post — Cursor Design Mode (ZH)
# Topic: Cursor Design Mode——視覺意圖終於從 code 那端對 AI 變得可讀 (Aug 13, 2026)
# Platform: Threads
# Format: 長篇個人觀點 + 簡短收尾

---

**Long-form post:**

Cursor Design Mode 幾個月前加了 multi-select 和語音輸入，我一直在思考它真正的意義。

Demo 看起來像魔法：在跑起來的 app 裡點一個元素，描述你要的改變，AI 編輯 code，你繼續移到下一個地方。

但實際發生的事情更有趣。

你點一個元素的時候，Cursor 傳給 agent 的是：它的 XPath、計算後的 CSS、React fiber tree 的 props、還有截圖。這不是靠像素猜測的 AI。是一個 agent 接收了你 UI 的 live render 狀態——你工程師實際建出來的結構。

大多數 AI UI 工具從表示法開始工作。設計稿、mockup、截圖。Cursor 從 live 的東西開始工作。

這個差距很重要。Figma 畫面給你看的是東西「應該」長什麼樣。跑起來的 app 給你看的是它「確實」長什麼樣——在真實資料裡，在你的使用者看到的狀態裡。

誠實的限制：你需要跑起來的本地開發伺服器。這不是設計師獨立工作的工具。它存在的時機，是當你離 code 夠近，近到可以指出你的意思——但你累了，不想再在 Slack 上解釋了。

這可能比以前更多人符合這個情境了。

---

**簡版收尾：**

v0 和 Figma 把設計帶進 code。
Cursor 把 code 帶進設計對話。

一個創造表示法。一個編輯真實的東西。
