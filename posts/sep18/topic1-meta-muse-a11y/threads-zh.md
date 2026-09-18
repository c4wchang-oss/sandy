# Threads 貼文 — Meta Muse：Accessibility Tree 就是 Agent 的介面（繁中）
## Sep 18, 2026 | 圖片：topic1-x-threads-zh.png（16:9）

---

這週 Meta 推出 Muse 之後，有個事情一直在我腦袋裡轉：

Muse 是個人 agent，幫你訂旅館、填表單、付款。它用真實的 Chromium 瀏覽器——但負責導航的 sub-agent 讀的是 accessibility tree 的快照。沒有 JavaScript 執行。沒有原始 DOM。沒有視覺渲染。

它讀的，跟螢幕閱讀器讀的一樣。

我做 UX 超過十年。Accessibility audit 一直活在「法規合規」和「包容性設計」的陰影裡——兩個都是正確的理由，但不知為何對大多數產品團隊來說永遠不夠緊急。

這週改變了什麼：強制力現在來自商業規模。

當 Muse 在導航你的 checkout flow，它看不到你的視覺層級。它看到的是語意 role、命名 state、label 關聯。如果你的互動元素是沒有 ARIA role 的 `div onClick`——Muse 找不到它們。如果 form label 是視覺上對齊但沒有在 tree 裡連結的——Muse 讀到的是空白欄位名稱。如果你的 layout 在不同產品分類之間會 shift，agent 就失去位置錨點。

web.dev 這週剛發布了一份 agent-friendly 網站設計指南。關鍵訊號：
→ 語意 HTML 優先於 styled div
→ 每個 label 都要有 `for` 屬性連結
→ 穩定 layout——agent 是靠位置校準，不是靠像素
→ 不要 ghost overlay 擋住互動目標

這是 accessibility 倡導者要求了二十年的同樣結構工作。差別在於：現在不能理解你未文件化語意結構的用戶，是以 agent 速度在瀏覽的。

你一直推遲的 accessibility audit？它不再是可選項了。
