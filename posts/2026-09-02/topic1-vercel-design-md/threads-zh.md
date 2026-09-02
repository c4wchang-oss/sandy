# Threads Post — Vercel design.md：教 AI Agent 什麼是好設計
**Platform:** Threads
**Date:** 2026-09-02
**Topic:** Vercel 讓 AI agent 建出符合品牌頁面的系統——以及 57% 減少到底在說什麼
**Source:** https://vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md

---

Vercel 公開了讓 AI agent 建出符合品牌頁面的完整流程。那個數字我琢磨了一陣子。

標題：design.md 讓已知設計錯誤減少 57%。補充：六個測試頁面每一個都還有嚴重到無法出貨的問題。

兩個數字同時為真，這不是矛盾——這才是重點。

系統分三部分：design.md 文件，用散文說明「好的設計」是什麼；公開的 CSS stylesheet，把 design system 的 primitive 打包成可引用的 class；決定性評估迴圈，human reviewer 把每個錯誤分類進三個桶子——主觀判斷進 design.md、機械性錯誤進 stylesheet、可驗證的錯誤變成 code check。一旦分類，這個錯誤就被永久預防。

限制是結構性的：你只能編碼你已經見過的失敗。新型態頁面、從來沒需要明確表達的美學判斷——那些仍然需要人的判斷。系統的每次改進，都是一份「看著 agent 搞錯然後學到東西」的紀錄。

評估迴圈本身是個扎實的設計 review 模式。盲測 A/B 比較、人工 reviewer、把結果路由到系統的正確層。大多數設計團隊有某種 review 流程。很少有人把那些 review 的結果轉換成編碼的、持久性的規則。

更深的問題：你有多少設計判斷已經真的被寫下來了？不是 Figma 檔，不是 token library——是一份解釋決策「為什麼」的文件，具體到讓 agent 能分辨對的判斷和錯誤。

那份文件是 agent 能學的東西。那個隱性判斷——十幾年積累的「知道某件事就是會壞」——還是只在你身上。

這個落差不是 model 的限制。這就是你的工作。
