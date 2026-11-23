# 主題一：Tokens by UI Colors — 小紅書貼文
# 平台：小紅書
# 語言：繁體中文
# 日期：2026 年 11 月 23 日

---

## 標題
你的 DESIGN.md 應該來自你的設計決策，而不是來自你的 production drift

---

## 正文

所有主要 AI 工具現在都在讀取的設計 constraint 格式是 DESIGN.md。而大多數設計師跳過的問題是：你的 DESIGN.md 究竟從哪裡來的？

**生成 DESIGN.md 的兩種方式：**

**掃描式**（Onefold、DesignMD MCP、Open Inspector）：讀取你已部署的產品，萃取裡面已有的東西。速度快。但你繼承了 production 目前的狀態——包括沒人修正的間距不一致、從原始規格漂移的顏色、那個應該是 16px 但一直是 12px 的 gap。

**意圖式**（Tokens by UI Colors）：你從零開始視覺化建構 token 系統，在匯出前在真實 UI 中預覽。進去的是你決定的東西，不是已出貨的東西。

**Tokens by UI Colors 實際上做什麼：**

這是一個 primitive + semantic token 設計的視覺建構平台。你定義原始數值（顏色、文字尺度、間距、圓角、陰影），然後為它們指定語意角色（action.primary、text.muted、surface.elevated）。這個兩層結構讓 DESIGN.md 輸出對 AI agent 真正有用——agent 得到的不只是數值，而是 context。

**5 件值得知道的事：**

1. **匯出前先預覽** — 在生成檔案之前，在真實 UI component（卡片、按鈕、頁面段落）中測試你的 token 決策；這是你抓出在情境中不對的文字尺度和顏色的地方

2. **兩條匯出路徑** — CSS variables（給開發者和既有 codebase）或 DESIGN.md（給 Claude Code、Cursor、Gamma、Adobe——任何讀取 Google Labs 格式的工具）

3. **Primitive → semantic 順序是強制的** — 你沒辦法跳過定義 primitive token，直接去設定語意 token；這很重要，因為語意 token 才是 AI 可讀的 constraint 層

4. **靜態檔案** — 不跟 Figma variable 或 code 保持 live sync；不是維護工具，是新專案或全新 brief 的建立工具

5. **免費使用** — 不需要付費，不需要建帳號；匯出的是你擁有的純文字檔案

**Brief 品質原則：**

你的 DESIGN.md 是 quality ceiling，不是 quality floor。Agent 在你給它的 constraint 範圍內產出。如果那些 constraint 是從深思熟慮的意圖建立、在真實 UI 中預覽過的，那個 ceiling 就很高。如果是從你的已部署產品刮取、沒有經過審查的，那個 ceiling 就繼承了你的 production debt。

**這個工具適合誰：**

想要 AI agent 從第一天就依照自己真實視覺系統工作的設計師。需要從零建構 DESIGN.md 的團隊。已經在用 AI agent 做 UI 工作、懷疑 brief 品質是瓶頸的人。

---

#UX設計 #AI工具 #設計系統 #設計token #productdesign #AIworkflow #claudecode #cursor #senior設計師 #designops #DESIGN_md

---
