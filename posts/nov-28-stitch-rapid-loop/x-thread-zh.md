# 主題一：Google Stitch Rapid + Stitch Loop
# 平台：X（Twitter）Thread
# 語言：繁體中文
# 日期：2026 年 11 月 28 日
# 來源：
#   Stitch Rapid — stitch.google.com，2026 年 11 月 11 日
#   Stitch Loop — blog.google，2026 年 11 月 18 日

---

## X THREAD

**[Tweet 1 — Hook]**
Google 在同一週內推出了兩個 Stitch 實驗。

Pipeline 前端：5 秒的多螢幕 prototype。
Pipeline 後端：從 live metrics 寫你 PR 的後發布 product agent。

Brief 不再是設計師寫的文件了。而是產品的數據告訴你它需要什麼。

🧵

---

**[Tweet 2]**
Stitch Rapid（11 月 11 日）是 Stitch 內的探索草稿板。粗略的 prompt 或截圖 → 可點擊的中等保真度多螢幕流程，大約 5 秒。

右鍵點擊任何元素來編輯。按住 Space 鍵用語音編輯，不到 2 秒。按鈕自動連結到螢幕之間——點擊一個沒有目的地的連結，它當場生成那個螢幕。

重要：session 不會儲存。關閉標籤前請下載或傳送到 Stitch。

這是一個探索草稿板，不是生產工具。

---

**[Tweet 3]**
技術上最有趣的地方：Stitch Rapid 跑在 Gemini Decisions API 上——不是生成式模型。

Gemini Decision 1 在單次前向傳播中以 150-250ms 評估最多 1,000 個問題。它不是從零發明設計，而是從一個有約束的選項空間中評估哪些元件、佈局和狀態最適合你的情境。

你在開始前選擇 7 個設計系統之一。那是生成的約束參數。

速度來自約束，不來自原始生成能力。

---

**[Tweet 4]**
Stitch Loop（11 月 18 日）是另一種東西。

一個長期運行的 product agent，透過 180+ 個整合連接到你的 GitHub 和 live metrics：Jira、Linear、Datadog、Figma、Sentry、Slack、Snowflake、Intercom、自訂 MCP。

它持續運行你設定的目標導向 loop。開箱即用的三個預設 loop：安全性、延遲和無障礙功能。隨時添加自訂 loop（結帳轉換率等）。

---

**[Tweet 5]**
每個 loop 的四步循環：

1. **建議** — 從 live 產品數據中浮現有依據的機會
2. **方案** — 取捨、範圍、視覺設計選項
3. **建構** — 在隔離的雲端沙盒中寫程式碼，開 GitHub PR（相關時附上截圖/影片）
4. **反思** — 合併後監控 live metrics，從正負面結果中學習

目標達成後，它持續監控以防 metric 下滑。

---

**[Tweet 6]**
無障礙功能 loop 值得特別提出來。

Loop 有一個預設的無障礙功能 loop。它持續在你的 live 產品上運行——找到違規、寫修正、開 PR。這將「無障礙功能 = agent 底線」從成本論點（10 月 28 日 GPT-6.1 Terra）延伸到產品層的*排程執行 agent*。

不是「AI 可以審核無障礙功能」，而是一個始終在運行的命名後台程序。

---

**[Tweet 7]**
誠實的前提：

**Stitch Rapid：**
→ Session 不儲存——關閉標籤前請下載
→ 早期 MVP；Google 表示喜愛的部分之後會整合到完整 Stitch
→ 7 個設計系統是有限的選板；可能沒有一個完全符合你的 DS

**Stitch Loop：**
→ 僅限候補名單（AI Ultra 訂閱者優先）；未公布定價或限制
→ 180+ 個整合未完整列出；非安全 loop 的模型名稱未公開
→ Loop 輸出品質沒有基準數據——聲明未經獨立測試驗證
→ 連接之前，了解持續的生產 metric 存取對你的數據意味著什麼

---

**[Tweet 8]**
重新框架：

Stitch Rapid + Loop 是全生命週期的押注：
- Rapid = 探索草稿板（5 秒，有約束的選項空間）
- Stitch = 設計 + 建構
- Loop = 發布後的持續改善（brief = live 效能數據）

大多數工具活在從構思到建構的窗口。Stitch Loop 聲稱發布後的窗口。

Brief 曾經是設計師寫的東西。現在 Google 正在建立一個 brief 是產品數據告訴你它需要什麼的系統。

[Stitch Rapid · stitch.google.com · 2026 年 11 月 11 日 | Stitch Loop · blog.google · 2026 年 11 月 18 日]

---
