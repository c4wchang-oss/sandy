# Threads Post — Builder.io Agent Native Design（中文）
**Platform:** Threads
**Date:** 2026-08-31
**Topic:** Builder.io Agent Native Design — artifact 就是畫面本身，不是它的圖片
**Source:** https://www.builder.io/blog/agent-native-design-figma-alternative

---

我們這個行業最古老的落差，不是設計與開發之間的落差。

是「這是它應該長什麼樣」和「這是它實際怎麼運作」之間的距離。

Builder.io 這個月推出了 Agent Native Design。免費、MIT 授權、開源，不需要註冊。

你產出的東西不是 Figma frame，是跑在真實瀏覽器裡的 HTML 頁面。真實互動，同一份 source 直接 export。

你可以掛上自己的 design system，它就從你的 component 和 token 生成——不是什麼 AI 通用風格，是你的。

這對 ideation 階段改變了什麼：responsive 的問題、互動的死角、empty state——這些通常在 staging 才浮現，在決策早就鎖定的好幾週之後。如果是 live HTML prototype，第一週就會看到，在任何一行 production code 被寫出來之前。

老實說：這不是 Figma 的替代品。複雜的 component library、Enterprise 規模的 handoff、design system governance——還沒到那個層次。它的定位是從 ideation 到驗證的階段，不是完整的設計生命週期。

但概念上的轉移是真實的：當 prototype 就是交付物——同一份 HTML 最後會交給 coding agent——「它能不能用？」就成了起點的問題，不是終點的意外。

你還在交一張畫面的圖嗎？
