# 主題一：Google Stitch Rapid + Stitch Loop
# 平台：Threads
# 語言：繁體中文
# 日期：2026 年 11 月 28 日

---

## THREADS 貼文 — 長篇

Google 在同一週內推出了兩個 Stitch 實驗：11 月 11 日的 Stitch Rapid 和 11 月 18 日的 Stitch Loop。它們處理產品生命週期的兩個相反端，放在一起，勾勒出一個值得關注的類別主張。

Stitch Rapid 是 Stitch 內的探索草稿板。粗略的 prompt 或截圖 → 大約 5 秒就能生成可點擊的中等保真度多螢幕流程。互動模型很好：右鍵點擊任何元素來編輯，按住 Space 鍵語音編輯，按鈕自動連結到螢幕之間。如果你點擊一個沒有目的地的導航元素，它當場生成那個螢幕。Session 不儲存——關閉標籤前請下載或傳送到 Stitch。

大多數報導錯過的細節：Stitch Rapid 跑在 Gemini Decisions API 上——不是生成式模型。Gemini Decision 1 在單次前向傳播中以 150-250ms 評估最多 1,000 個是非、選擇或評分問題。它不是從零生成設計，而是從一個有約束的選項空間評估哪些元件、佈局和狀態最適合你的情境。你在開始前選擇 7 個設計系統之一——那是架構參數，不是美學偏好設定。速度來自約束：有界的選項空間 → 快速評估。

這在結構上與「prompt → AI 發明任何東西」不同。Brief 約束了領域；模型在其中選擇。這更接近元件感知的佈局評估器，而不是生成式設計師。

Stitch Loop 是更長遠的押注。這是一個長期運行的 product agent（內部代號：Jitro），透過 180+ 個整合連接到你的 GitHub 和產品情境——Datadog、Sentry、Figma、Linear、Jira、Slack、Snowflake、Intercom、自訂 MCP——並持續運行目標導向的 loop。

四步循環：建議（從 live 產品數據中浮現有依據的機會）→ 方案（取捨、範圍、視覺設計選項）→ 建構（在隔離沙盒中寫程式碼 → GitHub PR，相關時附上截圖/影片）→ 反思（合併後監控 live metrics，從每次結果中學習）。目標達成後，它持續監控以防 metric 下滑。

預設 loop：安全性（Gemini 4 Carbon + CodeMender）、延遲、無障礙功能。從你自己的業務 metrics 添加自訂 loop（結帳轉換率、註冊率等）。

無障礙功能 loop 特別值得指出：它是產品層持續運行的無障礙功能執行 agent。不是「AI 可以在你要求時運行無障礙功能審核」——而是一個始終運行、找到違規、寫修正、開 PR 供你審查的命名後台程序。這是無障礙功能工作的不同操作模式。

誠實的框架：Stitch Loop 僅限候補名單，沒有定價、限制或正式上市日期。180+ 個整合清單未完整公開。Loop 實際輸出品質沒有基準數據。安全 loop 是 Google 唯一命名底層模型的地方（Gemini 4 Carbon + CodeMender）。在連接之前，你應該仔細考慮持續的生產 metric 存取對你的團隊數據意味著什麼。

值得追蹤的模式：Loop 的 brief 是 live 效能數據，不是設計師寫的規格。Agent 提出的變更有真實使用依據。這對「brief」的構成是有意義的轉變。

Stitch Rapid + Stitch + Stitch Loop = Pipeline 前端（5 秒探索）+ 中間（設計/建構）+ 後端（發布後的持續改善）。大多數設計工具活在中間。Stitch 對整個生命週期提出了主張。

---

## THREADS 短篇

Google 本月兩個新 Stitch 實驗（11 月 11 日 + 18 日）覆蓋了產品生命週期的兩個相反端。

Stitch Rapid：由 Gemini Decisions API（判別模型，不是生成式）驅動的 5 秒多螢幕 prototype。你預先選擇設計系統；速度來自約束，不是原始生成能力。Session 不儲存。

Stitch Loop：後發布 product agent。透過 180+ 個整合連接到 GitHub + live metrics，運行持續 loop（安全性、延遲、無障礙功能、自訂）。每個 PR 都需要你的批准——沒有任何東西會自行合併。

重新框架：Loop 的 brief 是你產品的 live 效能數據。那不是我對「設計工具」的預期。但這是一個關於 brief 在東西發布後實際存在於何處的一致押注。

誠實的前提：Loop 僅限候補名單，沒有定價，沒有基準數據，沒有正式上市日期。在連接到生產環境之前，了解你在連接什麼。

---
