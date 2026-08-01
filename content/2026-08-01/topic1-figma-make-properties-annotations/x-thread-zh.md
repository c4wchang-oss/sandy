# X Thread — Figma Make：Properties Panel + Annotations
**主題：** Figma Make Properties Panel 和 Annotations 功能上線（2026 年 7 月 30 日）
**平台：** X（Twitter）
**語言：** 繁體中文
**格式：** Thread（8 則）

---

**Tweet 1 — 開場**
用文字 prompt 編輯 UI，快要變成最慢的方式了。

Figma Make 剛上線了 Properties Panel 和 Annotations。

AI 生成的 code，現在終於可以用人的方式編輯了。

🧵

---

**Tweet 2**
這次上線了什麼：

→ Properties Panel：直接在 Make 編輯器裡調 spacing、typography、layout、z-index、opacity
→ Annotations：在 canvas 上標記範圍，直接針對那個區域下 prompt
→ DOM tree 可見（你的 code 的 layers panel）

不用再寫「請調整 card component 的 padding」了。

---

**Tweet 3**
Credit 的設計機制很聰明。

直接操作會把每個編輯先 stage 在 prompt box 裡——不消耗 credit——等你確認才執行。

你可以試 5 種 padding、測 3 個 font weight、拖拉元素重排，零 token。確認了才 commit。

這不只是功能，是一個設計決定：AI 應該在哪個時間點介入。

---

**Tweet 4**
Annotations 才是更有趣的突破。

選「Annotate for agent」→ 在 canvas 上標記範圍 → 用自己的話描述要改什麼。

「滑鼠停在縮圖上時，輕微放大」
「這個按鈕在 300ms delay 後淡入」
「按下按鈕時加一個輕微的 press 效果」

空間性的 prompt，精準、有脈絡。

---

**Tweet 5**
注意 Annotations 做了什麼：

它把「在哪裡」和「改什麼」分開了。

位置是精確的（你畫的）。指令是靈活的（你寫的）。

模型不再猜你指的是哪個元素。你也不用再寫一大段 prompt 去描述 DOM 路徑。

這是 AI canvas 編輯的正確 UX 設計。

---

**Tweet 6**
Properties Panel 使用的是你現有 codebase 裡的 token。

顏色、typography、spacing——全部都是已經定義好的。你在自己的 constraint architecture 裡編輯，不是在繞過它。

Code Connect 快要來了，屆時會把 Make 直接連結到你的 Figma Design components。

AI 編輯完之後，設計稿和 code 的一致性還是維持得住。

---

**Tweet 7**
實際工作流程的改變：

以前：寫長 prompt → 希望模型理解正確 → undo → 重寫 → 重複。

現在：選元素 → 拖 spacing → 標記 Annotation → 描述具體行為 → commit。

edit loop 變緊了。模型現在是填補缺口，不是從頭詮釋一切。

---

**Tweet 8 — 結尾**
這次的真正標題不是「Make 加了新的編輯功能」。

而是：AI 設計編輯進入了空間感操作的時代。用文字描述一切的時代正在結束。

限制還是你的——token、系統、設計決策。模型負責執行。

這才是對的分工。

你現在在 Make 的 prompt-to-result ratio 有比三個月前低嗎？

---

*資料來源：https://www.figma.com/blog/properties-panel-and-annotations-now-in-figma-make/*
