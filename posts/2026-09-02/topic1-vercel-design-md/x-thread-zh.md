# X Thread — Vercel design.md：教 AI Agent 什麼是好設計
**Platform:** X (Twitter)
**Date:** 2026-09-02
**Topic:** Vercel design.md — 要教會 AI agent「好設計是什麼」，真正需要什麼
**Source:** https://vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md

---

**Tweet 1（hook）**
你只能教 agent 你已經寫下來的東西。

這是 Vercel design.md 系統最重要的發現——比標題上的數字更讓人坐立不安。

**Tweet 2**
Vercel 公開了讓 AI agent 建出符合品牌頁面的完整流程。

三個組件：design.md prose 文件、有範圍限制的 CSS stylesheet、決定性評估迴圈。

**Tweet 3**
標題數字：已知設計錯誤減少 57%。

誠實的補充：六個測試頁面每一個都還有嚴重到無法出貨的問題。

兩個數字同時為真。

**Tweet 4**
為什麼？系統只能預防你已經識別過的錯誤。

跑一次測試。Human reviewer 看到問題。分類：
— 主觀判斷 → 進 design.md
— 機械性錯誤 → 修 stylesheet
— 可驗證的錯誤 → 寫 code check

這個錯誤從此被預防。沒見過的錯誤，還是你的責任。

**Tweet 5**
評估迴圈本身是個扎實的設計 review 模式。

盲測 A/B 比較 agent 輸出。人工 reviewer。回饋路由到對的層。

大多數設計團隊有在做 review。很少有人把結果編碼成持久性規則。

**Tweet 6**
Stylesheet 是最少被討論、卻最重要的部分：

Agent 一直在自己發明 typography、spacing 和版面。所以 Vercel 把這些決策完全拿走——打包成 CSS class，任何 agent 都能引用。

Constraint architecture。讓 model 自己決定的東西愈少愈好。

**Tweet 7**
核心問題：你有多少設計判斷已經真的被寫下來了？

不是 Figma 檔，不是 component library。是一份解釋決策「為什麼」的文件——具體到讓 agent 能分辨對的判斷和錯誤。

**Tweet 8**
真正的限制：你可以把已文字化的知識給 agent。

那個隱性判斷——十幾年積累的「知道但說不清楚」——還是只在你身上。

這個落差不是 model 的限制，是 senior designer 價值集中的地方。

↳ vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md
