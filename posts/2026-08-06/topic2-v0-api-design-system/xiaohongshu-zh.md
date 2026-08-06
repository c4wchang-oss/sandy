# 小紅書 Post — Topic 2: v0 API v2 — Design Systems as Machine-Readable Infrastructure
## Platform: 小紅書 (Xiaohongshu / RED) | Language: 繁體中文 | Date: Aug 6, 2026
## Source: Vercel blog "introducing-the-new-v0-api", Aug 5, 2026
## Format: 教學 / 觀點

---

**標題：**
v0 現在是一個 API｜你的 design system 剛剛變成了機器可讀的基礎設施

---

**內文：**

Vercel 在 8 月 5 日推出了 v0 API v2。你現在可以用程式的方式呼叫 v0：傳一個 prompt，拿到一個可以跑的 app，把預覽嵌入你自己的任何工具裡。

設計師需要理解的關鍵細節：你的 design system，可以以 API 參數的形式被傳進去。

這件事比聽起來更重要。讓我解釋 👇

**這實際上代表什麼：**
當任何工具都可以呼叫 v0，並把你的 design system 一起傳進 request，你的品牌限制就在「生成時」被機器強制執行了。不是在 review 時，不是在交接時，是在「生成時」。

這從根本上改變了 design system 的品質標準。

**舊品質標準：** 人類工程師能不能穩定地正確使用我們的 design system？

**新品質標準：** AI agent 能不能在沒有人類監督的情況下，正確地使用我們的 design system？

這兩個問題看起來相似，但實際上不一樣。人類可以問澄清問題。API 呼叫不行。

**讓 design system 現在就「AI 可讀」的 5 件事：**

1. **語意化的 token 命名，不是視覺化的**
"color-action-primary" → ✅ AI 可以推斷它應該在哪裡使用
"blue-600" → ❌ AI 完全不知道這個 token 扮演什麼角色

2. **有使用意圖說明的 component，而不只是 props 文件**
每個 component 都要有「什麼時候用 / 什麼時候不該用」的段落。這是 AI 在生成時做出正確選擇所需要的。

3. **消滅未記錄的覆寫值**
如果你的舊版畫面裡有一次性的樣式例外，而且沒有被記錄在 system 裡，AI 會從它們身上學習，然後大規模複製這些不一致。

4. **包含邊緣案例的使用範例**
把「錯誤但看起來合理」的使用方式也展示出來。AI 也能從負面範例學習——但前提是你要提供。

5. **清楚的 component 層級結構**
如果 model 分不清 "primary button" 和 "action button" 的差別，它就會自己假設。把層級關係說清楚。

**誠實的補充：**
大部分設計師不會直接寫 v0 API 呼叫。這目前還是工程師的基礎設施。

但你正在維護的 design system，會越來越多地以這種方式被消耗——不管你有沒有參與那個決策。理解消耗層的團隊，在爭取維護一個真正好用的 system 所需資源時，會處於更有利的位置。

建造一個人類能理解的 design system，現在只是起點。
建造一個 AI agent 能可靠使用的 design system，才是下一個前線。

---

**標籤：**
#設計系統 #UX設計 #AI設計 #設計工具 #DesignSystem #設計Token #資深設計師 #產品設計 #前端設計 #設計基礎設施
