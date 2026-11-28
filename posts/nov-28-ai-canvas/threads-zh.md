# 主題二：AI Canvas — 給 AI Agent 的設計系統 + Done-Gate
# 平台：Threads
# 語言：繁體中文
# 日期：2026 年 11 月 28 日

---

## THREADS 貼文 — 長篇

AI Canvas 在 11 月 18 日登上 Product Hunt。訴求很直接：「不再有 AI slop。給 AI agents 的設計系統。」他們解決的是第十個螢幕問題——Claude 生成的第一個螢幕看起來很棒，但到了第三或第十個螢幕，一切都漂移了：每頁不同灰色、間距靠感覺、同一個動作三種不同按鈕處理方式。

他們的答案有兩個結構性組件。第一，Andromeda Pro：一個 token 驅動的設計系統，AI Brain 是 agent 在開始建構前讀取的 93 個文件。元件規則、建構技能、審查技能、驗證工具。Agent 先讀系統，不是等問題出現後才讀。第二，done-gate：當 agent 完成一個螢幕，gate 檢查工作是否遵循系統。原始顏色值而非 token？失敗。不在比例尺上的間距？失敗。Agent 在系統內修正，才算工作完成。

刻意的例外處理值得注意。你可以在某行用 `allow` 註解標記，當你真的需要為一個螢幕打破系統。例外是明確的和局部的——規則在其他地方不改變。這在結構上優於「關掉 linter」，因為例外記錄在程式碼中，不是悄悄引入的。

MCP server 連接到 Claude、ChatGPT、Codex、VS Code 和 Cursor。Agent 可以搜尋目錄、讀取原始碼、安裝元件——不離開 chat。所有東西透過 shadcn 指令作為真實可編輯原始碼到達。MCP 目錄存取永遠免費且不計量。

在我一直在追蹤的約束執行層級中的位置：DESIGN.md 和 Library Guidelines 是約定——agent 應該遵循的文件，可以繞過。AI Canvas 的 done-gate 是帶有強制修正的後生成檢查——agent 無法悄悄產出漂移的輸出並發布。A2UI 1.0（11 月 11 日）是協議層執行——agent 在架構上無法放置未登錄的元件，完全不行。AI Canvas 在中間：比文件更難繞過，但不是架構性的預防。

誠實的前提：僅限 React（不支援 Vue、Svelte、純 HTML）。設計系統是 Andromeda Pro——他們的設計語言，不是你的。你調整 token，但從他們的系統開始。Done-gate 檢查 token 使用，不是你是否為使用者的情境做了正確的設計判斷。AI Brain 是 93 個文件，這是真實的 context window 消耗——了解你每次 session 的 token 預算。免費層是 MIT（Andromeda Legacy + 部分元件），Andromeda Pro 是高級方案。

我一直想的重新框架：AI 生成的多螢幕 UI 後的一致性審查遍次在每個 AI 輔助的專案中都很昂貴。在漂移複合之前抓住它的 gate 是一個工作流效率工具，不只是品質工具。工藝判斷——為使用者的心智模型選擇正確的元件、IA 是否正確、層級是否正確——那還是你的事。

---

## THREADS 短篇

AI Canvas（Product Hunt，11 月 18 日）解決第十個螢幕問題：第一個螢幕看起來很棒，到第十個螢幕一切都漂移了。

Andromeda Pro AI Brain = agent 在建構前讀取的 93 個文件。Done-gate = 每次建構後執行 token + 元件一致性。MCP server = agent 可查詢的元件目錄，永遠免費。

約束執行層級更新：約定（DESIGN.md）→ done-gate（AI Canvas）→ 協議執行（A2UI 1.0）。三個層級，不同強度。

誠實的前提：僅限 React，Andromeda Pro 是他們的設計語言（你調整 token），93 個文件 = 真實 context window 成本，Andromeda Pro 是高級方案。

Gate 提高地板。工藝天花板還是你的。

---
