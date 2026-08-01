# Threads Post — Figma Make：Properties Panel + Annotations
**主題：** Figma Make Properties Panel 和 Annotations 功能上線（2026 年 7 月 30 日）
**平台：** Threads
**語言：** 繁體中文
**格式：** 長篇個人反思

---

**貼文**

Figma Make 昨天上線了 properties panel 和 annotations，我覺得值得停下來想一下，到底改變了什麼。

表面上的解讀：你現在可以直接在 Make 編輯器裡，用熟悉的 Figma 控制項調整 spacing、typography、z-index 和 opacity。你也可以在 canvas 上標記元素——框出一個範圍，寫下你想改什麼，agent 同時讀取位置和指令。

比較深層的解讀：AI 設計編輯，剛變成空間感的操作。

在這之前，編輯 AI 生成 UI 的唯一介面只有文字。你想修一個 card 的 padding，你就寫一句話描述它。你想在縮圖上加 hover 效果，你要在一個 prompt 裡描述元素、觸發條件和行為——然後希望模型能把你的文字對應到正確的 DOM 節點。

這是一種有損的互動。語言是模糊的，DOM 路徑是看不見的，模型只能猜。

Annotations 解決了位置的問題。你畫出範圍，你寫下行為，模型不用再猜你說的是哪個元素。

Properties Panel 解決了迭代的問題。編輯在 prompt box 裡暫存，不消耗任何 credit。試五種 padding，測三個 font weight，把元素拖來拖去，全部零 token，確認滿意了再 commit。

這個 credit 機制其實是一個設計宣言：AI 應該介入執行，而不是探索。你應該能看著東西、嘗試各種可能，只有在你知道自己想要什麼的時候，才把模型叫進來。

Properties Panel 使用的是你現有 codebase 裡的 token——顏色、spacing、typography。你還是在自己的 constraint architecture 裡編輯，不是在繞過 design system，而是在它裡面工作。

Code Connect 即將推出，會把 Make 和你的 Figma Design components 連結起來。等那個功能上線，設計師在 Make 裡編輯一個 button，就是在編輯同一份在 canvas 上也存在的 component 定義。handoff 的缺口就關上了。

真正的標題：edit loop 變緊了，模型的工作範圍縮小了。不是從頭詮釋一切，而是在一個已定義的 context 裡填補缺口。

這才是 AI 設計工具正確的方向——不是更多的生成，而是對「什麼時候生成才是對的工具」更精準的判斷。

---
