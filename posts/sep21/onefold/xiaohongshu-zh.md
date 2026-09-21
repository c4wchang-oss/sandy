# Xiaohongshu — Onefold / DESIGN.md（繁體中文）
# Sep 21, 2026 | 教學 / 觀點 | 3:4 圖

---

**標題：用 Onefold 掃了我的網站，AI 找到了我不想看到的東西**

---

別被它的簡單外表騙了。Onefold 不是「存一下你的顏色」的工具。

---

## 它做什麼

Onefold 掃描你的公開網站，產生 DESIGN.md——給 AI coding agent 用的限制文件。

它萃取：
- 品牌顏色 + 深色模式邏輯
- 字型比例和選擇
- 形狀決策（圓角半徑、陰影）
- Component + icon 函式庫偏好
- 語氣和口吻指南
- 要避免的 pattern

結果放在程式碼旁邊。Coding agent 在產生任何東西之前會先讀它。

---

## 為什麼 DESIGN.md 現在很重要

AI coding agent（Claude Code、Cursor、Codex、Gemini CLI、GitHub Copilot）可以快速建立介面。但它們不會自動知道你為什麼選了那個顏色、那個圓角、那個 icon set。

DESIGN.md 是設計版本的 AGENTS.md。明確寫出來的情境，agent 在開始工作前先讀它。

---

## 限制架構堆疊

| 文件 | 用途 | 受眾 |
|------|------|------|
| AGENTS.md | 程式碼慣例 | Dev agent |
| CLAUDE.md | Agent 行為 | AI 助理 |
| DESIGN.md | 設計標準 | Coding agent |

Onefold 自動幫你建立第三行。

---

## 誠實的部分

Onefold 讀的是你部署了什麼，不是你想要什麼。

你已出貨產品裡的每一個不一致，對 AI 來說都變成了「品牌標準」。每個沒有記錄的例外。每個從設計系統漂移出去的顏色。

跑 Onefold 就是做設計債務稽核，不管你原本想不想做。

---

## 怎麼用（正確的方式）

1. 匯入你的公開 URL
2. 審查萃取出的調色盤、字型、形狀、語氣
3. **問自己：這是刻意的，還是漂移累積的？**
4. **先在你的實際設計系統裡修正漂移**
5. 選擇 component + icon 函式庫
6. 下載 → 加進 repository
7. 讓 coding agent 的 project instructions 指向 DESIGN.md
8. 對照文件 + 實際產品審查下一個產生的畫面

第 3 和第 4 步不在他們的操作指南裡。還是要做。

---

## 誠實評估

✅ 支援 Claude Code / Cursor / Codex / Copilot / Windsurf / Gemini CLI
✅ Lovable、v0、Bolt——貼進 project knowledge
✅ 移除了寫 DESIGN.md 的啟動阻力
⚠️ 萃取的是部署狀態，不是設計意圖
⚠️ 網站裡的不一致會變成 AI 的品牌參考
⚠️ 信任它之前還是要審查輸出

---

## 結語

DESIGN.md 的啟動阻力消失了。

你的品牌到底代表什麼的判斷，還是你的。

自己寫好的 brief 很有用。你還是必須審查它。

---

#AIDesign #設計系統 #限制架構 #AICodeAgents #UX工作流 #設計債務 #AITools #資深UX #DESIGN_md
