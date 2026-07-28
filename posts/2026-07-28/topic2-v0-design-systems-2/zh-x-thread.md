# v0 Design Systems 2.0
## 平台：X（Twitter）— Thread 格式（8 則）
## 語言：繁體中文

---

**第 1 則（Hook）**
v0 剛把理解 design system 的方式整個重寫了。

它不再讀你的文件，而是讀你的 codebase、你的 Figma、你的 Storybook——學習你的團隊實際上怎麼*使用* component。

這個差別是一切的根源。🧵

---

**第 2 則**
v0 Design Systems 2.0 可以吃進什麼：

→ GitHub repository（component 定義 + 使用模式）
→ npm package（公開和私有）
→ Storybook 文件
→ Figma frames
→ 現有 UI 的截圖
→ ZIP 壓縮包和已部署的 live app

你不再是在描述你的 design system，而是直接交給它。

---

**第 3 則**
它學習的不只是「有哪些 component 存在」。

它學習：
→ 哪些 prop 常常一起被使用
→ 你的團隊怎麼組合 component
→ 哪些 pattern 在真實實作裡重複出現
→ Provider 設定、global styles、font 的接法

使用智慧，不只是 component 清單。

---

**第 4 則**
Import 之後，它變成一個 skill——一個每次對話都會繼承的可重用 context。

之後你建的每個 app 都從一個真實的 starter 開始：你的 provider 已掛載、字型已載入、第一次 render 就是品牌對的。

v0 不會即興捏造一個「差不多」的 Button，它用你的。

---

**第 5 則**
真正改變品質基準的那部分：

每次 build，v0 會讀取你真實的 component source（read-only 掛載），然後確認：這個 prop 存在嗎？這個 token 名稱解得開嗎？這個 icon 有 export 嗎？

它不會幻覺出一個你的系統裡根本不存在的 prop。

---

**第 6 則**
他們做了一個 demo：同一個 prompt——「做出 GitHub 的介面」——分別用五個不同的 design system 跑。

Microsoft Fluent、IBM Carbon、Shopify Polaris、AWS Cloudscape、GitHub Primer。

同一個描述，五個完全不同的輸出。你的 design system 是一個創意視角，不是一份約束文件。

---

**第 7 則**
對 senior designer 的意涵：

如果你的 design system 現在是 AI 的約束層，那它的品質就是 v0 所有輸出的品質上限。

Token 凌亂 → 輸出凌亂
Variant 沒有文件 → AI 選不正確
使用模式不一致 → AI 選錯 pattern

維護 design system 剛剛變成關鍵基礎設施。

---

**第 8 則（CTA）**
真正的標題不是「v0 支援自定義 design system」。

而是：v0 學會了區分「component 存在」和「你的團隊實際使用 component」之間的差別。

如果你的 design system 不反映你的團隊實際怎麼建東西，AI 會忠實地重現這個落差。

你上次審查你的 design system 是怎麼被*使用*的，而不只是怎麼被*記錄*的，是什麼時候？
