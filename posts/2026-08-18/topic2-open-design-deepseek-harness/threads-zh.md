# Threads 貼文 — 繁體中文
# 主題：Open Design 0.19.1 + DeepSeek Harness 本地 AI agent

---

**【長篇反思】**

Open Design 0.19.1 剛推出 DeepSeek Harness 整合。DeepSeek Harness（dsh）是一個開源 agent harness，架構是「everything is a plugin」——幾天內在 GitHub 衝到了 149,000 顆星。

讓這件事有趣的不是星數，是架構方向。

大多數設計工具的 AI 整合都遵循同樣的模式：設計工具對模型發出 API 呼叫，模型回傳輸出，工具渲染結果。設計工具在主導。設計工具呼叫模型。

用 harness 模型，這是反過來的。DeepSeek Harness 是 orchestration 環境。Open Design 是裡面的一個插件。Agent 進入設計工具，而不是工具伸出去呼叫模型。

這個架構差異對我們思考設計專業工作流程中的 AI 有真實影響。

**第一：隱私。** 當 agent 在本地跑、設計工具是本地插件，沒有資料離開你的機器。對於在做尚未發布產品設計、未公開品牌識別、或任何 NDA 保護內容的設計公司——這是第一個不需要和廠商談資料處理協議就能用 AI 的配置。

**第二：設計工具的角色改變了。** 現在 Figma 和 Claude Design 把自己定位成 AI 輔助設計發生的環境。Harness 模型暗示了一個未來：設計工具只是 agent 使用的眾多工具之一——和程式碼編輯器、檔案系統、測試工具並列。設計工具失去了主角地位。

**第三：品質上限。** Figma Agent 和 Claude Design 有針對平台優化的專有模型。本地開源 harness 什麼都沒有。你的設計系統是你唯一的品質上限。這意味著如果你的設計系統混亂，本地 agent 工作流程會比任何雲端工具更快、更用力地揭露這件事。

我看「AI 需要本地化才能用於企業」這個論點被討論了兩年。這是第一次我看到架構在工具層面真的做到了。不只是模型選擇——整個 orchestration 環境都在本地。

對大多數團隊來說，prompt 工程的額外負擔值不值得：我真的還不知道。但對「資料不能離開我們網路」是硬性要求的團隊，這現在值得認真測試了。

---

**【簡短直接的看法】**

DeepSeek Harness：149k 星。「Everything is a plugin。」

現在 Open Design 是其中一個插件。

模型在本地跑。設計工具變成情境來源。
對有嚴格資料政策的企業設計團隊——這是第一個真實的答案。

---
