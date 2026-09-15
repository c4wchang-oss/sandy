# Topic 2: Cursor Auto-review — 小紅書 Post (Traditional Chinese)
**Image:** `images/topic2-autonomy-dial-cn-3x4.png` (3:4)

---

**Title:** AI agent 幫你做決定 vs 問你確認——這個設計問題幾乎每個產品都做錯了

---

這週 Cursor 推出了一個我覺得所有做 agentic 產品的設計師都應該仔細研究的更新：Auto-review。

一句話概念：**「自主性是刻度盤，不是開關。」**

**🔑 它怎麼運作**

1. Agent 要執行下一個動作
2. Classifier agent 在 context 裡審查這個動作
3. 風險低 → 直接執行
4. 被擋下 → 把理由告訴上層 agent（不是用戶）
5. 上層 agent 自己找更安全的替代方案
6. 只有在找不到替代方案時，才打擾你

**用戶是最後手段，不是第一關卡。**

**🔍 這解決了什麼 UX 問題**

大多數 agentic 產品只有兩種狀態：
❌ 太多 confirmation prompt → 完全不像 AI，用戶被訓練成看都不看就點確認
❌ 完全不問 → agent 做了你不想要的不可逆動作

Auto-review 的設計是在這兩者之間找到位置。

**📌 對你設計的每個產品意味著什麼**

3 個問題你現在就該問自己：

**1. 你的 agent 在刻度盤的哪個位置？**
有明確定義「低風險動作」vs「越過重要邊界的動作」嗎？

**2. 你的 classifier 邏輯是什麼？**
在你的產品領域，什麼算「符合用戶原始意圖」？什麼算「超出範圍」？

**3. 你的 agent 在被擋下後能重新校準嗎？**
還是它每次都直接把問題拋回給用戶？

**⚠️ 誠實的 caveat**

Auto-review 目前主要針對本機 desktop agent，還在早期階段。每個產品領域的 classifier 邏輯都不一樣，沒有現成答案。「自主性是刻度盤」是正確的思考框架，但你的刻度盤需要自己設計。

**💡 底線**

治理 UX 的問題不是「要不要跳出更多確認視窗」。

是「設計一個能告訴另一個 agent 什麼時候要慢下來的機制」。

這個設計問題，幾乎沒有現成的 pattern library。你要自己從頭想。

---

#AIdesign #UX設計 #DesignPattern #AgentUX #agentic產品 #Cursor #ProductDesign #設計師 #AI工具
