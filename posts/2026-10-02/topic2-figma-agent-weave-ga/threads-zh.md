# Threads Post — Figma Design Agent + Weave：免費 Beta 將在10月6日結束（繁體中文）
**主題：** Figma Design agent 和 Weave 工具在2026年10月6日正式 GA——agent 採浮動 credit 費用模型，Weave 工具採固定 credit 費用

---

## 長文反思

Figma 的 Design agent 和 Weave 工具在10月6日 GA——距今四天。免費 beta 結束。計費開始。

我想聊聊「浮動 credit 費用」實際上意味著什麼，因為 Figma 的文件用了這個詞然後繼續往下說，沒有拆解它的含義。

浮動 credit 費用意味著：「使用量會根據你 prompt 的複雜度、agent 採取的動作，以及你提供的任何脈絡——比如連接的 libraries 或附加的檔案——而變化。」

這是 Figma 第一次明確說明 brief 品質跟費用掛鉤。一個帶有乾淨連接 library 的詳盡 prompt，每次 session 的 credits 費用會比模糊的 prompt 更高——但它會更快產出更好的結果，需要更少的修改循環。

一個模糊的 prompt 以兩種方式消耗：更差的產出，以及 agent 在試圖搞清楚你意思的過程中燃燒的更多 credits。這兩種費用是複合的。描述不清現在是預算決策，不只是工藝決策。

Weave 工具不同。每工具固定費用，就像 Figma 的其他圖像 AI 功能一樣。可預測且可審計。

Figma 本週發布了一個 Workflow Lab 文章——值得在10月6日之前閱讀。它展示了一個 Weave canvas campaign 工作流：設計系統 frames 作為 Figma 節點（鎖定的約束）→ 生成節點 → 用於市場特定在地化的 Any LLM 節點（5種語言，每個節點用該市場文案人員寫的指導原則配置）→ 輸出為可編輯的 Figma 圖層。

一個設計系統。一個 campaign 結構。五個市場。可編輯的產出。每個 Weave 工具都有固定的、可知的 credit 費用。

這是 Weave 定價模型對你有利的模式：結構化的、可重複的、高量的 production 工作，你在運行之前就理解節點詞彙且 brief 是清晰的。這跟在你要求 agent 使用設計系統之前，先了解你的設計系統裡有什麼 token 和元件，是同樣的原理。

這週的治理準備——實際的行動項目，不是抽象建議：

你的團隊中誰一直在使用 Design agent，用於什麼目的？你需要這個來預測 credit 消耗。如果沒有人在免費 beta 期間追蹤這個，現在是你發現這個落差的時候。

哪些工作流程應該繼續？有些值得 credit 費用。有些是探索性的。現在是你決定哪個是哪個的時候。

每用戶 credit 限制是否已設置？這個功能自8月以來就在管理員控制台。如果你的組織還沒做這個，Design agent 的浮動費用模型讓它更迫切，不是更不迫切。

你連接的 libraries 是否夠乾淨，值得附加？連接的 library 品質現在是 credit 效率變數，不只是產出品質變數。

底層的重點：設計團隊的 AI 工具治理不是財務或 IT 問題。Figma 把 credit 管理工具放在管理員控制台裡。設計領導端的某人需要使用那個控制台——而不是在11月收到意外帳單時才反應。

---

## 短評（單獨發布）

Figma 的 Design agent credit 模型對大多數 AI 工具避免說的一件事很誠實：

Brief 越好，運行費用越高。

脈絡品質和 credit 消耗一起移動。10月6日是你發現你的團隊 prompt 習慣是否在經濟上有效率的時候。

