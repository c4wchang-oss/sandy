# 小紅書貼文 — Figma Motion（中文）
**格式：** 干貨測評/觀點，emoji 分區，hashtag 放最後
**封面：** 3:4 比例圖

---

**標題：** Figma 終於有 timeline 了——UX 設計師的真實感受

---

Figma Motion 正式上線，我這幾天用它做 component-heavy 的設計系統，整理了一些真實心得 👇

---

🎬 **Figma Motion 到底是什麼**

就是 Figma Design 裡的原生動畫 timeline。不是 plugin，不是另外一個工具——就在 Design、Draw、Dev mode 旁邊的新模式。

你會得到：
- 完整 keyframe 控制（位置、縮放、旋轉、透明度）
- Easing curve + spring physics
- 預設動畫樣式（fade、move、scale）
- 自動錄製 keyframe（移動 playhead 時自動記錄變化）

---

🔑 **對 design system 最重要的地方**

你只需要 animate 一個 component **一次**，那個 motion 就會跟著它走遍所有地方——就像 fill style 和 typography token 一樣。

這叫做 motion 成為「系統屬性」。

不是 spec doc。不是另一個檔案。而是你的 design system 裡等同 token 的一層。

---

👩‍💻 **Handoff 體驗其實很好**

在 Dev Mode：
- 整條 timeline 全部可以 inspect
- 每個 easing curve、timing value、keyframe 都看得到
- 直接 copy 成 CSS、React 或 JSON
- 支援 MCP → 把有動畫的 frame 傳給 coding agent，帶著完整的 context

再也不用說「感覺快一點就好」這種話了。

---

✅ **現在最適合的使用情境（還是 beta）**
1. Component 等級的 micro-interaction
2. State change 動畫（hover、focus、error state）
3. 單一 frame 內的 loading 和 transition 動畫
4. 為團隊建立共用的 motion token 系統

---

⚠️ **還沒完成的功能**
- Screen-to-screen transition（即將推出）
- Spring physics 還在調整
- Lottie export（在 roadmap 上）

---

💭 **我的觀點**

Motion 在 design system 裡當了太久的二等公民。我們把所有東西都做成 token，就是沒有把「東西怎麼移動」也一起治理。

Figma Motion 不只是加了動畫功能，它讓你的團隊面對一個更難的問題：

**你們準備好像管理顏色和字型一樣管理 motion 嗎？**

這才是它真正打開的設計系統對話。

---

#FigmaMotion #UX設計 #設計系統 #MotionDesign #Figma #UI設計 #Config2026 #ProductDesign #設計工具
