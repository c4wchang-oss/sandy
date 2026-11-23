# 主題二：Skillux — Skills 收斂趨勢到達 Marketplace 時刻
# 平台：X（Twitter）Thread
# 語言：繁體中文
# 日期：2026 年 11 月 23 日
# 來源：Skillux（skillux.dev），2026 年 11 月

---

## X THREAD

**[Tweet 1 — Hook]**
AI coding agent 現在可以用 $1.99 買到 UX 設計判斷力了。

你安裝一個 pack，它把 SKILL.md 丟進 `.cursor/skills/` 或 `~/.claude/skills/`，agent 讀它，agent 設計得更好。

這就是整個產品。而這是我從七月以來追蹤的 skills 收斂趨勢到達 marketplace 時刻的標誌。🧵

---

**[Tweet 2]**
一個 Skillux pack 實際上包含什麼：

→ SKILL.md — 鎖定的 flow、互動狀態（hover/focus/empty/error/loading）、文字尺度、間距節奏、對比規則
→ templates/ — agent 可以參考的可重用結構
→ example-site/ — 你可以在確認前先檢查的可運行範例介面
→ tokens — SKILL.md 指向的視覺數值
→ INSTALL.md — 每個工具要放在哪裡

這不是 prompt 庫，而是設計師的設計判斷力，以機器可讀的 constraint 檔案的形式被編碼起來。

---

**[Tweet 3]**
Skills 收斂趨勢是今年最主要的基礎架構故事：

CLAUDE.md → SKILL.md → design.md → Notion Skills → Agent Instructions → Framer Skills → Comfy Agent → HyperFrames → Voyager → Toolcraft → Skillux

這個趨勢到達了創意軟體生態系的每一層：code editor、設計工具、web CMS、AI 創意工具、專業桌面應用程式、工具著作。Skillux 把它延伸到 marketplace 商品化。

---

**[Tweet 4]**
安裝方式是 `npx skillux add <slug>`：

它把 pack 寫進 Cursor 的 `.cursor/skills/<slug>/`、Claude Code 的 `~/.claude/skills/<slug>/`、Codex/Windsurf 的 `.agents/skills/<slug>/`。

一次安裝，三個工具目標。然後你用結果提示，不是像素：「預算 app 的 onboarding——三個步驟，進度清楚，主要動作是繼續。」

skill 負責階層、間距和互動狀態。你負責產品決策。

---

**[Tweet 5]**
這引發的 governance 問題：

Miro VibeLab（10 月 26 日）：設計師在內部著作 skill → 定義設計系統 component + 使用規則 → 團隊在自己的產品上運行。

Skillux：設計師從 marketplace 購買 skill → 安裝 → agent 在自己的產品上運行通用 UX pattern。

兩者延伸同樣的原則，但代表了對「誰負責 skill 品質、誰的判斷在系統裡？」這個問題的不同答案。

---

**[Tweet 6]**
Floor 和 ceiling 的區別在這裡很重要：

Marketplace skill 編碼的是通用 UX 最佳實踐——一致的 hover 狀態、適當的 empty state、正確的 loading pattern、可辯護的間距系統。那是 floor。

你產品的視覺品牌、你的設計語言、你的具體 component 選擇——那是 ceiling。沒有任何 marketplace pack 能給你那個，因為它不存在於任何通用資產裡。

Skillux 給你更好的 floor，不提高 ceiling。

---

**[Tweet 7]**
什麼時候用它 vs 什麼時候自己著作：

**用 Skillux 的時機：**
→ 從零開始一個沒有既有設計系統的全新專案
→ AI agent 一直在犯結構性 UX 錯誤（錯誤的狀態、缺失的 flow、破碎的 hierarchy）
→ 你在正式 DS 文件化之前，需要為一個 prototype 快速建立 constraint 層

**自己著作 SKILL.md 的時機：**
→ 你有 marketplace 無法編碼的品牌特定視覺 constraint
→ 你需要 agent 在你真正的 component library 範圍內工作
→ skill 需要編碼你產品的具體 IA 決策

好消息是：Skillux 無論如何都給了你正確的格式。

---

**[Tweet 8]**
重新框架：

從九月以來的開放治理問題一直是：「當每個工具都有自己的 skill 格式、沒有單一的 source of truth 時，誰的 skill 是有權威的？」

Skillux 沒有解決這個問題，但它商品化了 UX 最佳實踐的 floor。這是有價值的——意味著更少的時間在修 hover 狀態，更多的時間做產品決策。

但它讓這個問題更清晰。Skillux floor 和品牌 ceiling 之間的落差，就是只有 senior 設計師才能提供的價值。那個落差不在縮小。

〔Skillux · skillux.dev · 2026 年 11 月 · `npx skillux add <slug>` · $1.99 起，年度 library $169.99〕

---
