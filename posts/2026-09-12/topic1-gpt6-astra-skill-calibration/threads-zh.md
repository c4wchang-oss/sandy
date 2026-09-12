# Topic 1: GPT-6 Astra — 重新思考 Skills 和 Prompts
# Platform: Threads | Language: Traditional Chinese
# Date: Sep 12, 2026 | Format: 長篇個人反思 + 短版要點
# Source: https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra (Sep 11, 2026)

---

你為了約束更弱的模型而寫的規則，現在正在約束更好的模型。

OpenAI 昨天發布了一份開發者指南 — 「重新思考 GPT-6 Astra 的 skills 和 prompts」— 雖然對象是使用 Codex 的工程師，但邏輯適用於任何建立了 AI 工作流程指令文件的人。包括已建立 DESIGN.md 文件、component skill 庫、或 agent brief 模板的 UX 設計師。

他們找出了三個具體的失敗模式：

**Skill 臃腫。** 大多數人已經積累了太多 skills，描述太長。Skills 太多，模型開始截斷描述以符合限制，最終為錯誤的任務載入錯誤的 skills。互相矛盾的描述讓情況更糟 — 模型選了聽起來相關但實際上沒用的東西。解法是更短、更精準的描述加上漸進揭露。一個路由到細節的根文件，勝過一個包含所有東西的文件。

**毯式的 AGENTS.md 指令。** 「每次編輯前，讀 architecture.md、database.md、deployment.md。」這在需要推著舊模型建立 context 的時候是必要的。GPT-6 Astra 能自己判斷需要讀什麼。毯式閱讀要求在每個小任務上都燒掉 context。好的指引是語境相關的：這類工作用這個文件，不是每次都讀。

**過期的防禦性護欄。** 舊模型自行行動，你加了確認關卡。那時候合理。這些關卡現在阻止 Astra 完成你其實完全沒問題的任務。模型的判斷力進步了，AGENTS.md 裡的信任邊界沒有更新。那是你 agent 工作流程裡一筆看不見的債務。

設計的意義：你的 DESIGN.md、skill 文件、brief 模板，就是 constraint architecture。原則和 design token 一樣 — 語義清晰、精簡，勝過全面防禦。品質天花板現在不再是模型，而是你積累的指令品質。

校準轉變：停止寫規則保護模型不傷害自己。開始寫 brief 定義完成樣貌。模型能力已經超過了大多數人的指令文件。

---

**短版：**
你為了馴服舊模型而加的規則，現在是阻礙。
AI 工作流程的 constraint architecture 需要定期維護。
指令品質是新的品質天花板。
