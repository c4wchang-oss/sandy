# Threads 文章 — NNG AI 調查 + Zombie UI（繁體中文）
# Date: Oct 26, 2026 | Research: NNG survey + Stripe/Miro case studies | Platform: Threads
# Image: images/topic2-x-threads-16x9-zh.svg

---

NNG 本週發布了 AI UX 調查。標題是：AI 省了時間。這是真的，但這不是值得討論的部分。

值得討論的部分是「lukewarm」——不冷不熱。大多數從業者對他們每天在用的 AI 工具感覺不熱情也不懷疑，就是中性的、曖昧的、沒有明確立場。我一直在想這是為什麼。

以下是我的解讀：有兩件都叫做「省時間」的事。AI 讓生成很快，有時候快得令人印象深刻。沒有讓它更快的——有時候反而更慢的——是驗證。確認輸出是否符合品牌、結構健全、無障礙、沒有在你的 component system 上面發明一套自己的。一個團隊用 Claude、ChatGPT、Copilot 做了兩天的黑客松。產品在早期看起來幾乎完成了，但在任何東西真正能用之前需要大量審查。那個差距——生成速度 vs 端到端速度——還不在任何人的專案估算裡。

Stripe 設計主管本週幫失敗模式命了名：「Zombie UI」。這是在沒有充分 design system 保護的情況下部署 AI 生成所產生的過度打磨、通用介面。輸出功能正常，視覺完整，說得過去，就是不是你的東西。設計決策屬於訓練模型的人——那些預設值是為廣泛的可接受度優化的，不是為你品牌的特定表達。最難察覺的地方：Zombie UI 看起來不像壞掉了，看起來可以。這才是它難以被阻止的原因。

Stripe 的解法值得研究：一個 command-line 工具，在人工 review 前把品牌限制直接烘焙進生成程式碼。不是 style guide，不是 prompt 指令，是在生成時執行的結構性限制，不是事後的修正。限制在輸出存在之前就運行，而不是在你已經看到錯誤的東西之後。

Miro 的 Staff Designer 從 prototyping 這邊記錄了相同問題：agent 發明按鈕，忽視 design system，建構技術上可用但完全脫離實際 component library 的 UI。修法：一個 skill，在 agent 開始建構任何東西之前把 design system 的元件、規則和範例前置到 context 裡。每個解決了這個問題的團隊，答案都是一致的：在生成開始之前讓 constraint 明確。

如果你的團隊對 AI 工具感覺不冷不熱，我建議在對工具本身下結論之前問一個更具體的問題：AI 在端到端上省了時間嗎——生成加上驗證加上修正——還是只有在生成步驟？按任務類型，有記錄的。這個數字幾乎總是比一般的感受更有用，而且它才是真正能改變領導層對 AI 投資思考方式的數據。
