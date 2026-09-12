# Topic 1: GPT-6 Astra — 重新思考 Skills 和 Prompts
# Platform: X (Twitter) | Language: Traditional Chinese
# Date: Sep 12, 2026 | Format: Thread (8 tweets)
# Source: https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra (Sep 11, 2026)

---

**Tweet 1 (Hook)**
你為了馴服舊模型而加的每一條指令，現在可能正在阻礙一個更聰明的模型。

OpenAI 在 11 日發布的開發者文章是必讀的 — 即使你不是工程師。

🧵

---

**Tweet 2**
OpenAI 發布了「重新思考 GPT-6 Astra 的 skills 和 prompts」。

對象是使用 Codex 的開發者，但邏輯適用於任何維護 AGENTS.md 文件、skill 庫、或 AI 工作流程指令的人。

包括建立了 DESIGN.md 文件和 component skill 庫的設計師。

---

**Tweet 3**
問題 1：Skill 臃腫。

Skills 太多 → 描述被截斷 → 模型載入錯誤的指令。
互相矛盾的描述 → 模型選了不適用的 skill。

多不等於好。更短、更精準的描述表現更好。
和 design token 同樣道理。語義清晰、精簡，勝過全面防禦。

---

**Tweet 4**
問題 2：毯式的 AGENTS.md 規則。

「每次編輯前，讀 architecture.md、database.md、deployment.md。」

每次改錯字都燒掉大量 context。GPT-6 Astra 能自己判斷需要讀什麼，你不需要強迫它。

好的指引是語境相關的。壞的指引是毯式的。

---

**Tweet 5**
問題 3：為更弱的模型寫的防禦性護欄。

「繼續執行之前先問我」— 你為了防止舊模型走太遠而加的確認關卡。這些關卡現在主動阻止 Astra 完成你其實沒問題的工作。

模型的判斷力進步了，指令沒有跟上。

這是你 agent 工作流程裡的 UX 債務。

---

**Tweet 6**
設計的意義：

你的 DESIGN.md、component skill 文件、brief 模板 — 這些是 AI 運作的 constraint architecture。

原則和 design token 一樣：
→ 語義清晰、精簡，勝過全面防禦
→ 品質天花板 = 你的指令品質，不是模型能力

---

**Tweet 7**
新的校準方向：

→ Skill 描述：短、清楚說明何時使用、細節用漸進揭露
→ AGENTS.md：語境相關引用（「X 情況用 Y 文件」），不是毯式閱讀
→ 決策邊界：鬆開防禦性的護欄 — Astra 本身已有判斷力
→ 在開始之前定義完成條件

---

**Tweet 8 (CTA)**
GPT-6 Astra 可以根據這些原則幫你審計 AGENTS.md。

但更重要的：你最後一次審計 DESIGN.md 和 component skill 文件是什麼時候？

你為不那麼聰明的模型寫的指令，現在很可能是在拖累它。↓
