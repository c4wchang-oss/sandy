# 小紅書貼文 — 中文版
## 主題：AI UX 工具最新動態 — 2026 年 7 月

---

## 貼文 #1 — 主打貼文
### 標題（20字以內）
> 🔥 Figma AI Agent 真實用後感｜資深設計師講真話

### 正文

用了兩週 Figma Design Agent，幫大家踩一下這個坑 👇

**先說結論：真的有用，但不是你想的那種「有用」**

❌ 它不會替你想設計
✅ 它會替你做掉你最不想做的那些事

---

**📌 它幫我消滅的 3 種時間殺手：**

**1️⃣ 批量改名地獄**
以前整個 library 的 naming convention 要手動對齊，現在 agent 一次處理完，我只要審核一遍。

**2️⃣ Dark mode 轉換噩夢**
60 個 screen 一鍵轉換。不誇張。以前至少要兩天。

**3️⃣ Component 說明文件**
我已經「記得要補」了三個月的 component description，Agent 幫我起草完了。

---

**🔗 MCP 連接器才是真正的隱藏 Boss**

把 Figma 接上 Notion PRD + Linear ticket 之後——

設計師在 canvas 工作的同時，AI agent 直接參考產品需求文件。第一次感覺「設計和需求」住在同一個地方，不是分開的兩個世界。

---

**⚠️ 必須說的殘忍真相：**

Agent 的上限 = 你的 design system 品質

Token 亂 → AI 幫你更快出爛結果
Component 沒文件 → AI 猜，然後猜錯
命名沒邏輯 → AI 給你一套更有「效率」的混亂

**2026 年最值得做的投資：把你的 design system 整理好。**

---

**💬 給同樣是資深設計師的你：**

不要問「AI 會取代我嗎？」

要問「我如何讓我的工作系統，讓 AI 可以放大它？」

建最清晰的 token 系統的人、文件最完整的 library 的人——才是這波 AI 浪潮裡最有競爭力的設計師。

基礎好，每個 AI 工具都是你的超能力。

---

#UXdesign #Figma #AIdesign #設計師 #UI設計 #產品設計 #設計工具 #DesignSystem #人工智慧 #ProductDesign

---

## 貼文 #2 — 教學型
### 標題
> 🛠️ 2026 設計師 AI 工作流完整攻略｜Senior UX 分享

### 正文

有人問我現在的工作流是什麼？整理給大家 👇

這是 2026 年我作為 UX Lead 實際在用的 AI 工作流👆

---

**🔄 完整 AI 設計循環（現在業界最新）：**

**Step 1 → Figma 設計**
用 Figma Design Agent 協助：
- 生成初稿 / 變體探索
- 根據 Notion PRD 調整設計（透過 MCP）
- 批量整理 component library

**Step 2 → Claude Code + Figma MCP 生成程式碼**
把 Figma frame 的 URL 給 Claude Code
→ Claude 讀取真實設計規格（不是截圖！）
→ 生成 React + Tailwind 組件
→ Layout、間距、顏色全部精準帶入

**Step 3 → Cursor Design Mode 迭代**
在瀏覽器裡直接點 UI 元素
用語音或文字告訴 AI 要怎麼改
Agent 即時更新，不用寫程式碼

**Step 4 → Code to Canvas 送回 Figma 審查**
讓 Claude Code 把瀏覽器渲染的 UI 截取
送回 Figma 成為可編輯的 frame
設計師和工程師在同一個 canvas 上 review

---

**⚡ 這個循環的核心優勢：**

設計稿 → 程式碼 → 調整 → 送回設計稿，完全雙向。
不是單向的「設計 → 交付 → 希望工程師能懂」。

---

**🔑 讓這個工作流真正運作的關鍵：**

Design System 品質決定一切

✅ Token 命名清楚（顏色、間距、字型都變數化）
✅ Component 狀態完整（hover、active、disabled、error）
✅ 命名規則一致（AI 才能正確理解）
✅ 文件說明清楚（agent 才有正確的 context）

AI 工具不會讓爛的 design system 變好，只會讓它變爛得更快。

---

**📊 我的時間分配怎麼變了：**

| 工作類型 | 以前 | 現在 |
|---|---|---|
| 設計行政（改名、文件）| 40% | 10% |
| 程式碼 handoff | 20% | 5% |
| 真正的設計思考 | 40% | 85% |

這是真實數字。AI 把我從設計行政裡解放出來了。

---

有問題歡迎留言！我會盡量回覆 ❤️

#設計師日常 #UX設計 #Figma #AI工具 #設計工作流 #產品設計 #UI設計 #ClaudeCode #Cursor #DesignSystem

---

## 貼文 #3 — 觀點型（短）
### 標題
> 💡「Vibe Coding」已死？資深設計師說真話

### 正文

「Vibe Coding」的時代正在結束 👇

**舊時代（2024）：**
描述一下 → AI 生出來 → 上線 → 修爛掉的東西 💀

**新時代（2026）：**
先鎖定約束 → 定義規則 → 設置品質把關 → 再讓 AI 執行 ✅

---

**工具一樣：**
Figma、Cursor、Claude、v0、GPT-5.6 in Figma Make

**心態完全不同。**

---

現在業界厲害的設計師，在讓 AI 動手前，會先定義：

📐 Token 系統（間距、顏色、字型——鎖定不動）
♿ Accessibility 規則（非談判項目）
🔴 邊界案例（壞掉時要怎麼壞）
🎨 品牌行為原則（不是只有視覺 style guide）

**這才是 AI 真的能理解的設計簡報。**

---

設計師最大的超能力不是學會用 AI 工具。

**是建立一套「AI 可以在裡面工作」的設計系統。**

---

你現在用哪些 AI 設計工具呢？留言分享！

#AI設計 #設計師 #UX #Figma #VibeCode #設計思維 #ProductDesign #AI工具 #資深設計師

---

## 貼文 #4 — 新聞速報型
### 標題
> ⚡ AI 設計工具大更新｜2026年7月設計師必看

### 正文

這個月 AI 設計工具更新多到追不上！幫大家整理重點 👇

---

**🎨 Figma**

✨ **Design Agent 正式開放 Beta**（Config 2026 重點）
- 直接在 canvas 上工作
- 可連接 Notion、Linear、Slack（透過 MCP）
- 支援自訂 Skills（把你的工作流變成可複用的指令）
- 可以網路搜尋直接帶進設計（！！！）
- 支援檔案附件（把用研報告直接丟給 Agent）

🤖 **GPT-5.6 進 Figma Make**（2026.7.9）
- 從設計稿生成的第一版保真度大幅提升
- Layout、層次、間距都能精準帶入
- 支援所有方案

🎬 **Figma Motion**（Config 2026）
- Timeline 動畫原生支援
- 可以請 Agent 幫你做動畫
- 可直接 export 給工程師用的動畫規格

---

**💻 Cursor**

🖱️ **Design Mode 升級（v3.7）**
- 瀏覽器裡直接點 UI 元素
- 語音指令（Agent 跑著的時候可以繼續說下一個改動）
- 多選元素讓 AI 對齊調整
- Canvas 也支援 Design Mode 了

---

**🔗 Claude Code + Figma MCP**

- 雙向工作流：設計 → 程式碼 → 送回設計
- Claude 讀取真實設計規格，不是截圖
- Code to Canvas：讓瀏覽器 UI 直接變成可編輯的 Figma frame

---

**📌 我的重點心得：**

這些工具都在往「設計↔程式雙向循環」的方向走。

設計師的工作模式正在從「單向交付」走向「持續迭代的雙向 loop」。

這不是未來，這是現在。

---

哪個更新讓你最驚喜？留言告訴我！⬇️

#Figma #Cursor #ClaudeCode #AI設計工具 #UX設計 #設計師必看 #ProductDesign #2026設計 #AIdesign

---
