# 小紅書貼文 — Meta Muse：Accessibility Tree 就是 Agent 的介面（繁中）
## Sep 18, 2026 | 圖片：topic1-xiaohongshu-zh.png（3:4）

---

**標題：** Meta 的新 agent 不讀你的 DOM，它讀你的 accessibility tree——UX 設計師必須知道的事

---

你的 hover 動畫？看不到。
你的視覺層級？看不到。
你的 CSS？看不到。

Meta Muse agent 實際看到的是：role、name、state——你 UI 的語意結構，視覺噪音全部剝掉。

跟螢幕閱讀器讀的東西一樣。Accessibility 工作二十年都是為了人。現在同時也是為了以規模瀏覽你產品的 agents。

---

**Muse 沒辦法導航的東西：**

1️⃣ 用 `div` 做的按鈕，沒有 ARIA role → 根本找不到
2️⃣ 視覺上對齊但沒有 `for` 屬性連結的 form label → 讀到空白欄位名稱
3️⃣ 頁面之間 layout 會 shift → agent 失去位置錨點
4️⃣ 透明 overlay 蓋住互動目標 → 被擋住
5️⃣ 視覺分析後小於 8px² 的互動目標 → 被過濾掉

---

**你現在需要做的事：**

1️⃣ 對你最核心的 3 個流程跑 accessibility tree audit（不只是色彩對比檢查）
2️⃣ 確認每個互動元素有語意 role，不只是視覺樣式
3️⃣ 每個 form label 在 HTML 裡要有明確關聯，不只是視覺對齊
4️⃣ 設計穩定 layout，同類型頁面的 CTA 位置要一致
5️⃣ 想清楚 handback UX：Muse 暫停讓 user 接手時，你的 UI 準備好了嗎？

---

**資深 UX 的視角：**

你因為 WCAG 感覺像合規任務而推遲的 accessibility 技術債——現在是產品失敗模式了。

Agent 不會對模糊的 UI 聳肩。它們會靜默失敗然後繼續。

Accessibility tree 一直是你的 agent 介面。
只是你之前沒有 agent 而已。

---

#UX設計 #AIdesign #accessibility #MetaMuse #AIagent #設計師必看 #DesignSystem #使用者體驗 #資深設計師
