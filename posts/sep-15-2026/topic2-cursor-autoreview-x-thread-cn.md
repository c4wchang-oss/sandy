# Topic 2: Cursor Auto-review — X Thread (Traditional Chinese)
**Image:** `images/topic2-autonomy-dial-en-16x9.png` (16:9)

---

**Tweet 1 (Hook)**
「自主性是一個刻度盤，不是開關。」

Cursor 剛推出 Auto-review。

這句話應該進你今年寫的每一份 agentic 產品 brief 裡。

---

**Tweet 2**
Auto-review 是一個 classifier agent，在 agent 執行下一個動作前，先在 context 裡審查它。

如果被擋下來，不是產生 confirmation prompt 給用戶，而是把 feedback 給上層 agent。上層 agent 自己找更安全的做法。

用戶不需要看到這個過程。

---

**Tweet 3**
來自 Cursor 團隊：

「問題不是這個動作孤立看起來有沒有風險。問題是這個動作是否符合用戶當初要 agent 做的事情。」

這就是門檻設計。這就是 UX 決策。

---

**Tweet 4**
這是幾乎每個 agentic 產品都做錯的難題。

摩擦太多：一直跳出 confirmation prompt，感覺 AI 根本不信任自己。
摩擦太少：agent 做了你不想要的不可逆動作。

Auto-review 在中間找到了路。

---

**Tweet 5**
架構：

1. Classifier 在 context 裡審查下一個動作
2. 被擋下 → 把理由回傳給上層 agent
3. 上層 agent 重新校準，找更安全的替代方案
4. 只有找不到替代方案時，才打擾你

用戶是最後手段，不是第一關卡。

---

**Tweet 6**
這對你設計的每一個產品都有意義：

你的 agent 在刻度盤上的哪個位置？

你的領域裡 classifier 邏輯是什麼？哪些動作低風險可以直接執行？哪些越過了重要的邊界？

大多數團隊還沒有回答這些問題。

---

**Tweet 7**
尚未解決的部分：Auto-review 目前主要針對本機 desktop agent。

同樣的原則需要套用在每一層 agentic 產品上，onboarding、表單、電商、客服。

大多數產品根本還沒設計過治理 UX。

---

**Tweet 8**
還很早期。但思考框架是對的：

治理 UX 的問題不是「顯示更多確認視窗」。

是「設計一個可以告訴另一個 agent 什麼時候要慢下來的機制」。

這是一個不同的設計問題。現在輪到你解決它了。
