# Threads Post — Topic 2: v0 API v2 — Design Systems as Machine-Readable Infrastructure
## Platform: Threads | Language: 繁體中文 | Date: Aug 6, 2026
## Source: Vercel blog "introducing-the-new-v0-api", Aug 5, 2026

---

**Main Post（長文版）：**

Vercel 昨天推出了 v0 API v2。標題版本的說法是：v0 現在是一個無介面、可程式化的 app 生成 agent。你透過 API 送出一個 prompt，v0 生成一個可以跑的應用程式，在 Vercel Sandbox 裡啟動起來，然後給你一個可以嵌入任何地方的預覽 URL。

但我一直在思考的，是這件事：你的 design system，以參數的形式被傳進了 API request。

就這一句話，安靜地重新定義了 design system 究竟是什麼。

對設計產業的大部分歷史來說，design system 是以 Figma library、Storybook、component package，或這些的某種組合形式發布出去的。人類——設計師和工程師——學習如何使用它。你的 design system 品質，是用這些人使用它的一致性來衡量的。

這個模型依然有效。但它正在被延伸。當一個基於 API 的生成工具，可以把你的 design system 當作輸入，在另一端產出符合品牌的輸出，你現在面對的是一個不同的品質標準：AI agent 有沒有辦法在沒有人監督的情況下，正確地使用你的 design system？

這不是抽象的問題。想想 AI agent 要可靠地使用 design system，實際需要什麼：
- Token 命名要傳達使用意圖（"color-action-primary"），而不只是視覺外觀（"blue-600"）
- Component 文件要說明什麼時候「該用」，也要說明什麼時候「不該用」
- Component 結構不能有埋在裡面的、未記錄的例外或舊版覆寫
- Props 要有足夠的語意訊號，讓 model 在沒有被明確告知的情況下，也能推斷出正確的選擇

這些跟「讓 design system 對人類工程師友好」所需要的東西是一樣的。但對歧義的容忍度不同。工程師可以問一個澄清問題。API 呼叫不行。

我認為再過兩年，「AI 可讀性」會成為 design system 的正式稽核標準，和無障礙性、工程師可用性並列。現在就開始思考這件事的 design system 團隊，會有明顯的先行優勢。

誠實的補充：大部分設計師不會直接寫 v0 API 呼叫。這目前還是工程師的基礎設施。但你正在維護的 design system，會越來越多地以這種方式被消耗——不管你有沒有在想這件事。理解消耗層，現在已經是工作的一部分了。

---

**短版（精華摘要）：**

v0 現在是一個 API。你的 design system 可以當參數傳進去。

這是 design system 工作描述改變的那一刻：從「給人類的指南」，變成「機器可讀的輸入」。

你在維護一個風格指南，還是在建設基礎設施？
