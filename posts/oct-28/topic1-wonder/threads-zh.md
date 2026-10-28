# Threads Post — Wonder（繁體中文）
# Date: Oct 28, 2026 | Tool: Wonder | Platform: Threads
# Image: ../images/topic1-x-threads-16x9-zh.svg

---

Wonder 這週發布了一個結構上不同的東西。

我整年都在看 AI 設計工具在同一個軸上競爭：更多 model、更好的 AI 生成、更多 credits。Wonder 10 月 27 日的發布完全改變了競爭變數。帶你已經在付費的 Claude Code 或 Codex 方案來。Agents 透過你現有的訂閱在本地跑。Wonder 在 AI 這邊不收任何額外費用。

這是 BYOA（Bring Your Own Agent）模型，是我今年看到最清楚的設計工具職責和 agent 供應商職責的分離。Wonder 負責 canvas。你負責 agent 關係。你現有的 skills、工具和 plugins 跟著 agent 進入 Wonder。從 Claude 切換到 Codex 是一個設定決策，不是平台遷移。這個架構給你未來的靈活性，而其他每個工具都把它綁定掉了。

Canvas 本身才是真正的故事。你在設計旁邊跑真實的 app。把任何畫面捕捉成可編輯圖層，在上面探索方向，準備好了就讓 agent 把修改套回程式碼。Design file 就是 live preview 就是 code review 的表面。AI 設計工作的 session boundary 問題——在 PRD、設計探索和程式碼之間失去 context——從 canvas 這側被解決了。

並行 worktree 裡的並行 agents 是真正新的東西。每個 chat 在自己的專案副本裡跑，agents 絕不衝突。你可以同時探索五個方向，選一個，把其他的 archive。其他每個 AI 設計工具一直在繞過的「一次只能一個 agent」限制就這樣消失了。

我覺得被低估的細節：會記得的 agents——而且你可以審計它。你的專案 context。你的設計偏好。你可以看到並編輯 agent 記得的東西。其他所有 AI 工具都把這個黑盒化。Wonder 把 agent 的工作記憶作為你擁有、可以檢查和修正的東西呈現出來。這才是你在整個專案中依賴的工具應該有的信任架構。

「Second opinion」是一等公民：在出貨之前，讓另一個 model 來 review 成果。Agent 自我審查循環出現在交接步驟，不只是生成過程中。這是一個被內建進工作流程的設計 QA 層——不是事後補充的。

誠實的部分：只有桌面版，Mac 和 Windows。現在支援 Claude Code 和 Codex，Cursor 和 OpenCode 即將推出。免費版每週 3,000 個 AI 生成圖層。Pro 是 $20/月，無限圖層和團隊分享。

我一直在思考的：當設計和程式碼在同一個 canvas 上即時共存，「handoff」這個概念什麼時候開始失去意義？Wonder 的答案是 canvas 同時容納兩者——設計和正在跑的 codebase。你不是在交接一個 mockup。你是在真實產品上面探索方向，然後讓 agent 直接在程式碼裡收尾。

這是不同類型的信任。在你在上面建立工作流程之前，值得好好理解清楚。
