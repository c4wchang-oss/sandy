# Xiaohongshu Post — Cursor Design Mode (ZH)
# Topic: Cursor Design Mode——視覺意圖終於從 code 那端對 AI 變得可讀 (Aug 13, 2026)
# Platform: 小紅書 (Xiaohongshu)
# Format: 教學/觀點，實用風格
# Aspect ratio for image: 3:4

---

**Title:**
Cursor Design Mode 教學｜直接點 UI 元素，AI 幫你改 Code

---

**Body:**

還沒用過 Cursor Design Mode？這裡是它實際在做什麼（以及什麼時候真的有用）：

**是什麼：**
Cursor Agents Window 裡的視覺編輯層。你在 live 跑起來的 app 裡點元素，AI agent 就根據你的描述修改 code。

**怎麼用：**
① 在 Agents Window 裡打開 Cursor 瀏覽器（需要有跑起來的本地開發伺服器）
② 切換 Design Mode：Cmd + Shift + D
③ 在 live app 裡點任何一個元素
④ 描述你要的改變
⑤ Agent 修改 code → app hot-reload

**Agent 實際接收到什麼：**
不是像素。你點一個元素的時候，Cursor 傳送：
— XPath + component 身份
— 計算後的 CSS 樣式
— React fiber tree props
— 當下頁面狀態的截圖

它不是從視覺猜測。它讀的是 live render 狀態。

**進階操作：**
→ Multi-select：點 2 個以上的元素 → 請 agent 讓它們視覺一致
→ Draw：圈出一個區域，做空間式、區域範圍的說明
→ Voice：在 agent 還在跑上一個修改時，就用語音排隊下一個指令

**這個工具實際上給誰用的：**
有時候也需要進 codebase 的設計師（哪怕只是偶爾）。新創公司的 product designer。那些受夠了在 Slack 上解釋 UI 細節、但其實可以直接指出來的人。

**現在還不適合的情境：**
純 Figma 端、沒有本地開發環境的設計師。靜態 mockup 工作。這個工具的設計目標不是這個。

誠實的框架：這是一個說設計語言的開發者工具。要求不是「成為工程師」，而是能指出你的意思。Cursor 從 code 那端把這個落差關掉了。

---

#CursorAI #設計工具 #AI設計 #前端設計 #UX設計 #設計開發 #ProductDesign
