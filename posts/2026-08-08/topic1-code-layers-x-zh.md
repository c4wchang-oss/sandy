# Topic 1: Figma Code Layers — X Thread (Traditional Chinese)
# Aug 8, 2026 | Platform: X (Twitter) | Language: Traditional Chinese
# Source: Figma Config 2026, Code Layers closed beta rollout (figma.com/blog/code-on-the-figma-canvas/)

---

**推文 1（hook）：**
問題從來不是 handoff 太麻煩。
是我們有兩個不同的 source of truth。

Figma Code Layers 改變的，正是這件事。

---

**推文 2：**
背景說明：Code Layers = canvas 上的任何 layer 都可以變成可執行的程式碼。
支援 React、TypeScript、Tailwind CSS。
可以直接把 GitHub repo clone 進 Figma canvas。
一切都在多人協作的 Figma 檔案裡運作。

---

**推文 3：**
大家的標題都在說「不再需要 handoff」。
但這說錯了重點。

Handoff 的問題從來不是摩擦。
是分歧。

設計檔說一件事。
Code 說另一件事。
最後 production 從 code 那邊出去。

---

**推文 4：**
Code Layers 讓 canvas 成為雙方都在同一個地方做決定的地方。
Designer 從視覺面調整 component。
Engineer 編輯底下的程式碼。
同一個 layer。同一個檔案。同一個 truth。

---

**推文 5：**
重點是雙向性。
變更可以從 design → code，也可以從 code → design。

這是協作工具第一次真正做到這件事，在這個規模上。

---

**推文 6：**
誠實說：這還是 exploratory 階段。
你不會從 Figma 直接 deploy。
Code Layers 是快速迭代用的，不是 production。
CI/CD 和 code review 還是要跑。

---

**推文 7：**
還有一件沒人說的事：
Quality ceiling = 你的 design system 結構。

如果你的 component 在 Figma 裡是一團混亂，
code 回來也會是一團混亂。

---

**推文 8：**
Code Layers 逼出來的轉變是這樣：
Design system 現在要對機器可讀，不只是對人類。
不只是 browse Figma 的人看得懂。

這是 senior designer 的新工作。
不是消滅 handoff。
是讓系統對機器也清晰。

---

**推文 9（CTA）：**
Figma Code Layers 現在是 closed beta。
等待名單：figma.com/config-betas

你的 design system 現在的機器可讀性有多高？
不做 walkthrough，engineer 能理解你的 component 結構嗎？
