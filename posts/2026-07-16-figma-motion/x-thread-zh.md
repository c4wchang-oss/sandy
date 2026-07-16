# X Thread — Figma Motion（中文）
**主題：** Figma Motion：原生 timeline 動畫正式上線
**切角：** Motion 作為設計系統屬性，而不是一次性交付物
**格式：** 8 則 thread

---

**第 1 則（Hook）**
Figma Motion 上線了。

一般反應：「設計師不需要 After Effects 了。」

但真正重要的不是這個。🧵

---

**第 2 則**
Figma Motion 在 canvas 裡加了一條完整的 timeline。

Keyframe、easing curve、spring physics、預設動畫。

你的 component、variable、動畫——全部在同一個檔案裡。

---

**第 3 則**
但讓我真正重新思考的是這件事：

你只需要 animate 一個 component **一次**，那個 motion 就會跟著它走遍所有地方——就像 fill style 和 typography 一樣。

這才是 motion 成為「系統屬性」的意義，而不是一次性的交付物。

---

**第 4 則**
10 幾年來，motion 在 design system 裡一直是二等公民。

顏色 → token。間距 → token。字型 → token。

Motion → 一個獨立的 After Effects 檔 + 一份 spec doc + 工程師自己解讀你說的「感覺快一點」。

---

**第 5 則**
在 Dev Mode，整條 timeline 全部都可以 inspect。

每個 timing value、每條 easing curve、每個 keyframe。

直接 copy 成 CSS、React 或 JSON。不需要翻譯，不需要猜。

---

**第 6 則**
讓我最興奮的 pipeline 變化：Figma Motion 支援 MCP。

任何有動畫的 frame 都可以直接傳給 coding agent——帶著完整的 keyframe 和 timing context。

設計意圖 → 程式碼，不需要中途翻譯。

---

**第 7 則**
老實說：還是 beta。

Screen-to-screen transition 還沒完成，spring physics 還在調整。

現在最有用的是：component 動畫、micro-interaction、單一 frame 內的 state change。

---

**第 8 則**
真正的問題不是「能不能在 Figma 裡做動畫？」

而是：你準備好把 motion 當成設計系統的**系統屬性**嗎——像對待顏色和字型一樣嚴謹？

這才是設計 leadership 的課題。Figma 只是讓這個問題變得無法迴避了。

→ figma.com/blog/introducing-figma-motion
