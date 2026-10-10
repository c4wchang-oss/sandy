# Threads Post — 繁體中文
## 主題：Voyager — 你現有創意 app 的 agent harness
## 日期：2026 年 10 月 10 日
## 格式：長篇個人反思

---

我追蹤 skills 基礎架構在各工具之間的收斂已有好幾個月。

程式編輯器最先有 agent harness。接著是設計工具，然後是網頁 CMS，再來是 AI 原生創意工具。上週，Voyager 完成了最後一層：專業創意桌面軟體。

Voyager 來自 Moda 團隊（YC F26），是一個桌面 agent harness，透過原生 scripting API 驅動 Blender、DaVinci Resolve、After Effects、Ableton、Photoshop、Illustrator、Final Cut Pro 和 Unity。不是替代品，不是 AI 原生的替代選擇，而是讓你現有的工具可以被 agent 從描述中驅動。

Scripting API 的選擇是產品最重要的技術決策。Voyager 透過 Photoshop scripting 控制 PS，透過 DaVinci scripting API 控制 Resolve，透過 AE scripts 控制 After Effects。視窗控制只作為那些 app 沒有透過 API 暴露的罕見控制項的後備手段——而且只在你明確授予的 macOS 權限範圍內運作。

這在實踐中意味著：你的 Blender 專案維持 .blend 格式，你的 Resolve 專案維持 Resolve 格式。agent 不是在模擬你的工具——它是像一個有經驗的 plugin 一樣在裡面工作。

程式碼庫也可以重複使用為 Claude Code、Codex、Cursor 安裝的 skills。相同的格式，不同的領域。這意味著跨工具 skills 治理的問題——當 skills 跨越多個工具時，哪些 skills 才是權威的？——現在延伸到了創意製作層。

誠實說明的限制：目前需要 macOS 15 + Apple Silicon（Windows/Linux 是 alpha）。你需要自己的 Claude 或 Codex 訂閱。生成（圖片、影片、音訊）按 provider 成本計費。付費方案從 $19/月起。

但我最欣賞的架構：Voyager 在創意 app harness 旁邊內建了免費的 Design、Video 和 DAW 引擎。沒有 DaVinci Resolve？使用 Voyager Video 引擎。有 DaVinci？agent 就用那個。在不強迫用戶切換新 app 或新訂閱的情況下，在他們所在之處相遇，比聽起來要難。

有一件事這個無法解決：motion brief gap。能讓 agent 更快驅動 DaVinci Resolve，不會讓你的剪輯更好。Brief 品質依然是瓶頸。整個創意桌面層現在都 agent 可呼叫了——你告訴它要做什麼，依然完全是你的責任。

---

*圖片：16:9 — 見 images/x-threads-16x9-zh.jpg*
