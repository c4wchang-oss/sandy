# Threads Post — Framer Agents: Reasoning + Fast Mode (ZH)
# Topic: Framer 在 Agent 模型選擇器中加入推理深度控制和 Fast Mode (Aug 12, 2026)
# Platform: Threads
# Format: 長篇個人反思

---

關於 Framer 的 Reasoning + Fast Mode 更新，我看到最多的解讀是：「更多控制 = 更好的結果。」

沒錯。但這個框架跳過了更難的問題。

真正的洞察不是關於速度。是關於任務的重量。

輕度推理給日常執行用。Fast Mode 是 Framer 明確說明會消耗更多 token 的 deadline 武器。高度推理是給多步驟規劃問題的——那種一個決策錯了、會連帶影響三個畫面的工作。

Framer 建的其實是一個模型選擇器，它在 agent 開始工作之前，要求你先分類自己的工作。

我們大多數人從來沒有正式這樣做過。描述想要什麼，加些 context，送出。這個模式選擇器打斷了這個習慣。

用了幾天之後，我得出的結論：

→ 如果我無法決定選哪個推理等級，代表這個任務本身定義得還不夠清楚
→ Fast Mode 留給 client review 和 launch 衝刺，不是給你連續做十五個微調的
→ 當一個決策會影響多個流程時，高度推理值得多等那幾秒

誠實的但書：這在 agent 開始之前增加了認知負擔。那不是缺陷。那是工具在教你一個 agent 學不了的技能——知道你真正在解決的是哪種問題。

我們一直都在根據任務調整自己的思考深度。只是沒有把它說出來。

Framer 把那個心智模型做成了 UI。
