# v0 Design Systems 2.0
## 平台：Threads
## 語言：繁體中文

---

v0 剛把它的 design system 整合方式整個重寫了，我認為這件事值得認真看待。

之前的版本讓你在 prompt 裡描述你的 design system。Design Systems 2.0 做的是不同的事：你把真實的來源交給它——GitHub repo、npm package、Storybook 文件、Figma frame、現有 UI 的截圖、已部署的 live app——v0 的 agent 把這些都讀進去，然後學習你的團隊實際上怎麼*使用* component，而不只是哪些 component 存在。

這個差別很重要。大多數團隊的 design system 都有一個維護在某個地方、但在另一個地方被忽略的現象。文件記載的 API 不一定反映真實的使用模式。技術上可用的 prop 可能被用成跟文件漂移的方式。v0 現在是從真實 codebase 學習，不是從參考文件。

它建立的東西：一個有你真實 component 和 token 的 playground、一個已驗證的約束層（每次 build 都對照你的真實 source 確認每個 prop 名稱、token 和 icon 真的存在）、以及一個 skill——一個持續在你團隊每次對話中繼承的可重用 context。你的團隊建的每個 app 都從一個已經品牌對齊的真實 starter 開始。

他們做了一個很有意思的 demo：同一個 prompt（「做出 GitHub 的介面」），分別用五個 design system 跑——Fluent、Carbon、Polaris、Cloudscape、Primer。五個完全不同的輸出。同一個描述，五種不同的創意語言。你的 design system 不是一份約束文件，而是一個決定 AI 產出什麼的創意視角。

有一個我一直在想的意涵：如果 design system 是 AI 的約束層，那它的品質就是所有生成內容的品質上限。零散的 token、不一致的命名、沒有文件的 variant——這些都會被放大。也許更重要的是：如果 v0 是從你 codebase 的真實使用模式來學習，那你的團隊記錄的東西和你的團隊實際建的東西之間的落差，就不再是隱形的了。它會出現在輸出裡。

維護 design system 一直是策略性的工作。現在它是決定你的 AI 工具表現好不好的基礎設施。

你上次看你的 design system 是怎麼被*使用*的，而不只是怎麼被*記錄*的，是什麼時候？
