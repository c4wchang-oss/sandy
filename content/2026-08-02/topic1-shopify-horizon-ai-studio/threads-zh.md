# Threads Post — Shopify Horizon AI Studio：AI 生成版型 + 原生 A/B 測試
**主題：** Shopify Horizon AI Studio 上線（2026 年 7 月 28 日宣布；8 月 4 日 Plus 商家開始）
**平台：** Threads
**語言：** 繁體中文
**格式：** 長篇個人反思

---

**貼文**

Shopify Horizon AI Studio 下週開始對 Plus 商家開放，我一直在想為什麼這個工具和過去兩年上線的每個「AI 版型生成器」不一樣。

顯而易見的部分：你現在可以在 Shopify 的商店前台標記任何一個 section，用自然語言描述版型，就能得到一個完整的 section 程式碼——Liquid markup、JSON schema、CSS——直接塞進你的 Horizon 主題。不需要 page builder 訂閱，不需要懂 Liquid，不需要打電話給 agency。

比較不明顯的部分：那些 AI 生成的版型變體，可以立刻對一部分流量上線，和你現有的版型互相競爭。Shopify 原生的 A/B 測試框架會在你設定的信心門檻下，自動推出勝者。

這就是結構性的轉變，不是生成本身，而是這個迴圈。

Horizon 之前每個 page builder 都有同樣的問題：你在一個地方設計，在另一個地方驗證，手動推出勝者。生成介面和效能介面永遠是分開的，你永遠在做一個翻譯步驟：「我覺得這個版型比較好」→「這是數據說是的那個版型」。

Horizon 把這個缺口補起來了。AI 生成器和 A/B 測試引擎共用同一個 canvas。你的設計假設直接變成實驗，不需要 handoff。

這改變了什麼技能最重要。Brief 的品質變成了上限。你能多精確地描述一個版型——結構、響應式行為、哪些元素是可以編輯的、視覺層級應該是什麼——決定了輸出的品質。「三欄式商品特色格，桌機等寬，手機堆疊，24px gap，每欄有獨立可編輯的標題和 CTA」能穩定生成出好結果。「讓它看起來漂亮一點」則不行。

這是 constraint architecture 套用在一個完全不同的領域。AI 只能在你給它的詞彙範圍內生成。精準的 brief 是窄的 constraint，模糊的 brief 是寬的 constraint。寬的 brief 產生更多變化，但品質較低。精準的 brief 產生的變體較少，但每一個都是可測試的。

老實說的注意事項：Horizon 的設計範圍是刻意比較窄的。不支援 JavaScript 互動，不支援 Shopify Functions，不支援第三方 app blocks。如果你的商店跑的是高度客製化的 Dawn 或舊版主題，遷移到 Horizon 基礎是一個真正的專案，不是一個切換開關。目前 prompt 介面也只支援英文。

但它正在提高的上限是真實的。第一次在電商裡，一個設計師可以問「如果 hero 是全寬而不是限縮寬度會怎樣？」，然後在幾個小時內就有流量數據回答這個問題，而不是幾週。

真正的標題：生成器和驗證器終於在同一個房間裡了。

---
