# 主題一：Tokens by UI Colors — 從設計意圖出發的 DESIGN.md
# 平台：X（Twitter）Thread
# 語言：繁體中文
# 日期：2026 年 11 月 23 日
# 來源：Tokens by UI Colors（uicolors.app/tokens），2026 年 11 月 10 日上線

---

## X THREAD

**[Tweet 1 — Hook]**
現在有五種方式可以生成 DESIGN.md 檔案。

其中四種是讀取你已部署的產品，然後萃取裡面已有的東西。

只有一種讓你從「設計意圖」開始著手。

這個差異比功能列表重要得多。🧵

---

**[Tweet 2]**
DESIGN.md 生成工具的發展脈絡，按時間排列：

→ 手動撰寫（一直都存在）
→ Vercel design.md 規格（9 月 2 日）——格式有了，但沒有工具
→ Onefold 掃描器（9 月 20 日）——掃描已部署的網站，萃取 token
→ DesignMD MCP（11 月 1 日）——透過 agent 從已記錄的設計系統生成
→ Tokens by UI Colors（11 月 10 日）——從零開始，視覺化建構，在真實 UI 預覽，然後匯出

每種方式對「設計意圖存在哪裡」的假設都不一樣。

---

**[Tweet 3]**
Tokens by UI Colors 是一個視覺化的 token 建構平台。

你設定顏色（原始色板 → 語意角色）、文字尺度、間距、圓角、陰影層次。操作很快——有 preset 讓你快速試方向，也有細粒度的 override 讓你精確調整。

它使用業界已經收斂的兩層 token 模型：primitive token（原始數值）→ semantic token（使用那些數值的命名角色）。

---

**[Tweet 4]**
為什麼 primitive → semantic 的順序對 AI agent 很重要：

把一個 hex code 給 agent 它不知道那是什麼意思。`#10B981` 只是一個顏色。

但給 agent `color.action.primary: #10B981`——有語意角色附在上面——它就知道怎麼用了。它知道這個顏色不該出現在 destructive 操作、文字標籤，或 disabled 狀態上。

語意層就是把 token 數值轉變成 agent 可讀的 constraint 的關鍵。

---

**[Tweet 5]**
讓這個工具超越一般 token 建構器的步驟：

在你匯出之前，你可以在真實的 UI 範例中預覽你的決策——component、landing page 段落、介面 pattern。你在情境中看對比度，看文字尺度在小字號時是否真的可讀，看間距放在卡片裡而不是規格表格裡的感覺對不對。

你是在確認你的設計決策，然後再把它們放進 agent 的 context。

---

**[Tweet 6]**
兩條匯出路徑：

→ CSS variables——給開發者、給現有 codebase、給 Tailwind config
→ DESIGN.md——給 AI agent、給 Claude Code、給 Cursor、給任何讀取 constraint 檔案的工具

DESIGN.md 輸出遵循 Google Labs 規格（prose rationale + YAML token group）。這表示它可以立即在所有已採用這個格式的工具上使用：Claude Design、Vercel、Gamma、Adobe、OpenDesign 的 17 個 adapter。

---

**[Tweet 7]**
誠實的 caveat：

這是一個建立工具，不是一個同步層。匯出的 DESIGN.md 是靜態檔案——它不會跟你的 Figma variable、你的 code token，或你的已部署網站保持連結。如果你的 token 有漂移，你要手動更新這個檔案。

沒有雙向整合。如果你需要 live sync layer，那是 Figma variable + Code Layers，或者自定義設置。這個工具是新專案起點的正確答案，不是維護既有設計系統的答案。

---

**[Tweet 8]**
重新框架：

每個基於掃描的 DESIGN.md 工具（Onefold、DesignMD、Higgsfield、Open Inspector）都會繼承已部署的狀態——包括漂移、包括意外發生的事、包括那個本來應該是 16px 但沒人修正的 12px 間距。

Tokens by UI Colors 給你的 DESIGN.md 從你的決策出發，而不是從你的 production drift 出發。

這不是小小的差別。Brief 的 quality ceiling 就是進了這個檔案的東西。確保進去的是你的意圖。

〔Tokens by UI Colors · uicolors.app/tokens · 2026 年 11 月 10 日上線 · 匯出：CSS variables + DESIGN.md〕

---
