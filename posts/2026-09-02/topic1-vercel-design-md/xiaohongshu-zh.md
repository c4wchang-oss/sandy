# 小紅書 Post — Vercel design.md：教 AI Agent 什麼是好設計
**Platform:** 小紅書 (Xiaohongshu / RED)
**Date:** 2026-09-02
**Format:** Tutorial / 案例分析
**Topic:** Vercel 如何讓 AI agent 建出符合品牌設計的頁面？我把這個系統拆解了
**Source:** https://vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md

---

**標題：Vercel 如何教 AI agent 做符合品牌的設計？看完這個案例我有點震撼**

Vercel 公開了讓 AI agent 建出符合品牌頁面的完整系統，我把它拆解了一下。

✦ **三個組件**

1. **design.md** — prose guidance，定義「好的設計」是什麼：怎麼理解讀者的需求、怎麼組織內容的結構、哪些 composition 適合哪些情境——以及為什麼
2. **有範圍限制的 CSS stylesheet** — 可重用的 token 和 component class（header、table、stat strip、圖表樣式）；agent 使用 class 名稱，不自己發明
3. **決定性評估迴圈** — 固定測試情境、盲測 A/B 比較、人工 review、回饋分類路由到正確的層

✦ **誠實的結果**
↑ 已知設計錯誤減少 57%
↓ 六個測試頁面每一個仍有嚴重問題無法出貨

兩個數字都重要。系統只能預防你已經識別並編碼的錯誤。

✦ **最聰明的部分：回饋路由**
— 主觀判斷 → 更新 design.md
— 機械性錯誤 → 修 stylesheet
— 可驗證的錯誤 → 寫 code check

一旦編碼，這個錯誤就被永久預防。這其實是 DesignOps 工作——只是被系統化了。

✦ **對 Senior UX Designer 的意義**
→ 你的 design system 本來就是給 developer 的 brief，現在也是給 agent 的 brief
→ 你的書面推理品質，是 agent 能學到東西的上限
→ 隱性判斷——那些你知道卻說不清楚的東西——還是只在你身上。那就是 senior 的價值所在。

✦ **值得問自己和團隊的問題**
你有多少設計決策有寫下「為什麼」？不是 token 名稱——是背後的推理。

文件和判斷之間的落差，正是 agent 靠自己無法跨越的地方。

來源：vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md

#UX設計 #AI設計 #設計系統 #DesignOps #產品設計 #AI工具 #設計師必看 #約束架構
