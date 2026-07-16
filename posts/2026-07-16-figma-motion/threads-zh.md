# Threads 貼文 — Figma Motion（中文）
**格式：** 長篇個人反思，無 hashtag

---

Figma Motion 上線了，我想聊一個大家都忽略的點。

大家的第一反應是「設計師不需要 After Effects 了」。也許吧。但這不是讓我重新思考的地方。

真正讓我改變想法的是這個：

過去十年，在我做過的每個 design system 裡，motion 一直是二等公民。顏色？Token。間距？Token。字型？Token。Motion？一個獨立的 After Effects 檔、一份別人需要自己解讀的 spec doc，然後工程師憑著「感覺快一點」這種描述自己做決定。

Figma Motion 真正不同的地方不是有了 timeline。而是：你只需要 animate 一個 component **一次**，那個 motion 就會跟著它走遍整個檔案——就像 fill style 和 typography 一樣。

這才是 motion 成為「系統屬性」的意義，而不是一次性的交付物。

再加上 MCP 支援（任何有動畫的 frame 都可以直接傳給 coding agent，帶著完整的 keyframe 和 timing context），以及 Dev Mode 可以直接輸出真正可用的 CSS、React 或 JSON——整個 design-to-code 的 motion pipeline 都不一樣了。

在 Dev Mode 裡，每個 timing value、easing curve、keyframe 全部都看得到、copy 得到。不需要翻譯，不需要猜意思。工程師打開就看到所有東西。

老實說：還是 beta。Screen-to-screen transition 還沒完成。現在最有用的還是 component 動畫、micro-interaction 和單一 frame 內的 state change。

但方向很清楚了。我第一次開始把 motion 當成 **system architecture** 的問題，而不是一個執行問題。

對任何設計團隊來說，真正的問題是：如果 motion 現在是一等公民，有 token 和 component 等級的傳播機制，你們準備好真正去「治理」它嗎？還是還會把每一個動畫當成一次性的決定？

這才是 Figma Motion 真正在問我們的問題。
