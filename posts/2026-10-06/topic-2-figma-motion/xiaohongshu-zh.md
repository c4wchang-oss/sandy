# Topic 2: Figma Motion Custom Styles — 小紅書 Post (Traditional Chinese)
**Date:** 2026-10-06
**Platform:** 小紅書 (Xiaohongshu / RED)
**Format:** 實用評測
**Image:** figma-motion-xhs-zh.jpg (3:4)

---

**標題：** Motion 終於變成設計 token 了。Figma 改了什麼

**內容：**

十年以上，每個設計系統都有顏色、字體、間距的 token。

Motion 永遠是例外。緩動曲線住在某人的 Notion 文件裡。時間長度值在多年前的某個 Slack thread 裡。沒有人能以一致的方式套用它們。

Figma Motion 的 9 月 30 日更新改變了這件事。

什麼是新的而且真的有用的：

1. **Custom animation styles（自訂動畫樣式）** — 把緩動 + 時間長度 + variable 綁定屬性存成一個有名字的、可發布的 library style。像套用顏色 style 一樣套用它。

2. **發布到 library** — 你的 motion style library 跟顏色和文字 style 住在一起。整個組織的單一真相來源。

3. **MCP + Skills 整合** — Coding agent 可以套用你的具名 motion style。你的緩動值現在是機器可讀的。AI 動畫的提示品質變得部分可以系統化。

4. **時間軸上的 Audio** — 把音訊拖到任何 clip 上，根據關鍵幀修剪，以 MP4/WebM 匯出。音效設計加入 motion 層。

5. **Lottie / dotLottie 匯出** — 直接從 Figma 匯出。Dev Mode 顯示完整動畫時間軸，附可複製的 CSS/JSON/React 程式碼。

6. **文字動畫控制** — 為個別字元、文字或行設定動畫。動畫套用後文字依然可編輯。

為什麼對你的工作流程來說重要：

- 「流暢」和「有彈性」對 AI 工具來說是沒用的提示詞。有精確緩動曲線的具名 style 不是。
- 治理終於有了一個表面：你的 motion library 現在可以被稽核和執行了。
- Agent 可以以程式化的方式套用 motion：提示 → 具名 style → 一致套用 = 不再需要逐個元件猜測。

誠實的注意事項：
- 仍在 open beta（可能改變）
- 手動製作動畫不消耗 AI 點數；agent 套用 motion 會消耗
- 上限 = 你的 motion style library 的品質

這個更新帶出的真正問題：在你的組織裡，誰擁有並維護 motion style library？

顏色 → 品牌。字體 → 設計系統。Motion → ???

這個落差現在無可迴避了。

#UX設計 #FigmaMotion #設計系統 #設計Token #動態設計 #設計工具 #Figma #AIDesign #DesignOps #設計開發協作
