# 主題二：Zeplin AI Flows
# 平台：X（Twitter）Thread
# 語言：繁體中文
# 日期：2026 年 11 月 24 日
# 來源：Zeplin Gazette（blog.zeplin.io），2026 年 11 月 9 日

---

## X THREAD

**[Tweet 1 — Hook]**
Zeplin 推出了 AI 生成 screen flow 的 beta 功能。

20 分鐘的 flow 在 1 分鐘內完成不是重點。

它抓出了你還沒有設計的邊緣情況才是。🧵

---

**[Tweet 2]**
它怎麼運作：

把你的 screen 拖到 flow canvas 上。點「Create Flow with AI」。用自然語言描述你要的 flow。

AI 把 screen 排好順序，連接它們，用讓使用者前進的內容標記 connector。

它讀取 screen 名稱、layer 名稱和 component 結構——不只是像素。所以你的命名品質就是你的 brief 品質。

---

**[Tweet 3]**
來自 Zeplin 自己測試的邊緣情況故事：

「一個沒有 screen 的 error path，一個沒有退路的 dead end，一個我們提到了但從來沒有設計的邊緣情況。」

這就是它浮現的東西。不只是你已經知道的 happy path，而是你在使用者旅程中告訴自己之後再處理的缺口。

在工程師問之前先抓到這些，不是一件小事。

---

**[Tweet 4]**
它實際上在做什麼：

標出缺失的覆蓋範圍是昂貴的 senior 設計師時間。那是 dev 交接之前的缺口分析，就是當有人終於問「等等，使用者在第 4 步輸入無效內容的時候會發生什麼？」的時候。

AI Flows 讓那個分析變便宜了。不是免費的——你還是要決定如何處理每個缺口。但更便宜了。

---

**[Tweet 5]**
Brief quality ceiling 在這裡適用，但是在命名層：

AI 讀取 screen 名稱、layer 名稱和 component 結構。如果你的 screen 標籤是「Screen 32」和「New Frame 7」，AI 不知道它們代表什麼狀態。

命名清楚的 screen → 有用的 flow。命名糟糕的 screen → AI 能連接現有的，但如果概念不在名稱裡，就無法浮現缺少的。

為你的 screen 命名就好像你在為一個看不見你臉的 junior 設計師寫 brief。

---

**[Tweet 6]**
大多數人忽略的正式生產使用場景：

「整理一個變得混亂的 flow。」

當一個功能在四個 sprint 裡擴展。當三個設計師貢獻了不同的命名慣例。當 flow 有 40 個斷開的變體沒有人能導覽。

AI Flows 也能處理現有的 flow。把一個新 screen 放進去，描述它怎麼融入，它就會插入連接器和標籤，不用你重新排列所有東西。

---

**[Tweet 7]**
可用性和定價：

AI Flows 在所有方案的 beta 中。Beta 期間不改定價。

實際上：這值得在任何你一直打算審計的現有複雜 flow 上跑。光是缺口報告就值那 10 分鐘。

---

**[Tweet 8]**
重新框架：

AI Flows 的價值不是速度。Happy path 文件化本來就是可能的——只是繁瑣。

價值是缺口報告。AI 浮現的你還沒設計的邊緣情況。

跑 AI Flows 不是為了生成你的文件。跑它是為了找出你還沒有文件化的東西。

〔Zeplin AI Flows · blog.zeplin.io · 2026 年 11 月 9 日 · Beta，所有方案〕

---
