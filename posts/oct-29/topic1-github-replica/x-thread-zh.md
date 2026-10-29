# X Thread — GitHub Replica（繁體中文）
# Date: Oct 29, 2026 | Tool: GitHub Replica | Platform: X / Twitter
# Image: ../images/topic1-x-threads-16x9-zh.svg

---

**Tweet 1 (Hook)**
大家都說「AI 現在可以做 prototype 了」。

真正的意思是：AI 可以產出看起來像 prototype 的東西。

GitHub Replica 做的是不同的事。

它用你們自己的 design system 來 prototype。

Thread ↓

---

**Tweet 2**
10 月 28 日發布：
- Open-source，MIT 授權——由 GitHub Design 團隊製作
- 跑在 GitHub Copilot app 裡
- PM、工程師、設計師都可以用自然語言描述想要的東西
- Replica 使用你們真實的 components、patterns 和文件——不是 AI 預設的泛用元件

---

**Tweet 3**
運作機制：/setup-skills

指向你的 design system 文件、component 套件和說明文件。
Copilot 檢查、安裝，並草擬 guidance。
設計師 review 並核准每份草稿。

核准之後，才會影響 Replica 建立什麼。

---

**Tweet 4**
為什麼重要：

今年每一個「AI 原型設計」工具都在產出偏離品牌、偏離設計系統的 mockup——設計師只能扔掉重來。

Replica 調換了順序：先定義限制，再生成。

你的 design system 就是 brief——不是事後才打的描述。

---

**Tweet 5**
設計師在這個工作流程裡的工作：

不是做 prototype。

是定義 /setup-skills 的限制，讓其他人的 prototype 是可信的。

Design system 文件很淺 → Replica 的輸出品質上限就很淺。
文件很嚴謹 → 整個團隊拿到嚴謹的 prototype。

---

**Tweet 6**
協作模型：
- 本地 prototype（不需要 server 或 Hub）
- 發布到自架的 Replica Hub 讓團隊 feedback 和留言
- GitHub build action 處理發布流程

工程師驗證假設。PM 測試想法。
設計師擁有護欄——不是迭代隊列。

---

**Tweet 7**
誠實的限制：
- 需要 GitHub Copilot 方案（或自己的 model provider——公開預覽中）
- Replica Hub 是自架的：你的團隊需要部署 Docker、設定 domain
- 設計指引品質 = prototype 輸出的品質上限
- 早期測試：「要求使用現有核准的 components，不是視覺上相似的替代品」

---

**Tweet 8**
值得記住的框架：

Prototype 的撰寫 → 民主化了。
限制的撰寫 → 仍然是設計師的責任。

Replica 讓第二份工作比第一份更加關鍵。

github.com/github/replica — MIT，免費探索。
