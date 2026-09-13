# Topic 1: Figma Agent Writes Its Own SKILL.md

**Date:** 2026-09-13  
**Source:** Figma September 3, 2026 update — Custom Skills for Figma Agent & Figma Make  
**Angle:** The Figma agent can now generate a reusable SKILL.md from the conversation you just had. Recursive constraint architecture: you're now teaching AI how to teach AI how to work.

---

## X (Twitter) Thread — English

**Tweet 1 (hook)**
The Figma agent can now write its own SKILL.md.

You have a good design crit session.
You ask it to turn that conversation into a skill.
You invoke /design-crit forever.

This is different from prompting. Let me explain.

---

**Tweet 2**
A prompt generates output.

A skill generates a repeatable *process*.

Same session. Different artifact. The distinction matters more than it sounds.

---

**Tweet 3**
SKILL.md is just markdown. But it encodes:

- token coverage check before shipping
- component audit sequence
- accessibility review criteria
- handoff documentation standards

Once installed, your team invokes it with a slash command. No re-prompting. No drift.

---

**Tweet 4**
Old workflow:
→ 200-word design review prompt, rewritten before every session

New workflow:
→ one good session
→ tell agent to write a skill from it
→ /design-crit loads it

The conversation was the brief. The brief is now the skill.

---

**Tweet 5**
The quality ceiling equation hasn't changed:

Brief quality = output quality

Except now you're writing a brief that writes future briefs.

The leverage compounds across every session your team runs.

---

**Tweet 6**
What the agent captures is the *method*, not your taste.

It can encode "always check token coverage before shipping."
It cannot encode "this weight feels off for the brand."

That boundary is not a bug. It's where senior judgment still lives.

---

**Tweet 7**
Honest caveat:

The generated SKILL.md encodes the behavior from the conversation you just had — including your shortcuts.

Audit before publishing to your org. Encode your aspirational process. Not your deadline behavior.

---

**Tweet 8**
The senior designer's edge isn't prompting better.

It's building the instruction architecture your whole team operates on.

Skills are the design-system equivalent for agent workflows.

Skill authorship is the new DesignOps.

---

## X (Twitter) Thread — Traditional Chinese

**Tweet 1 (hook)**
Figma agent 現在可以幫你寫自己的 SKILL.md 了。

你跟它做完一次設計 review。
你叫它把這次對話變成一個 skill。
以後 /design-crit 就可以直接跑。

這不一樣於 prompt。讓我解釋。

---

**Tweet 2**
Prompt 產生輸出。

Skill 產生可重複的 *流程*。

同樣的一次對話，不同的產出。這個差別比聽起來更重要。

---

**Tweet 3**
SKILL.md 只是 markdown。但它可以編碼：

- 出版前的 token 覆蓋率檢查
- component audit 的順序
- 無障礙審查標準
- 交付物件的文件規範

安裝之後，全團隊用 slash command 呼叫。不用重寫 prompt，不會有執行落差。

---

**Tweet 4**
舊的工作方式：
→ 每次設計 review 前重新寫 200 字 prompt

新的工作方式：
→ 做一次滿意的設計工作
→ 叫 agent 把那次流程寫成 skill
→ /design-crit 永久執行

那次對話就是 brief。那個 brief 現在就是 skill。

---

**Tweet 5**
品質上限的公式沒有變：

Brief 品質 = 輸出品質

只不過現在你是在寫一個「能寫 brief 的 brief」。

這個槓桿會在團隊每一次 session 裡累積。

---

**Tweet 6**
Agent 能記錄的是 *方法*，不是你的品味。

它可以寫「出版前必須確認 token 覆蓋率」。
它沒辦法寫「這個字重對品牌來說感覺不對」。

這個邊界不是 bug，是 senior judgment 還在的地方。

---

**Tweet 7**
誠實的警告：

Agent 生成的 SKILL.md 會忠實複製你那次 session 的行為——包含你當時圖快走的捷徑。

發布給團隊前一定要審查。編碼你的理想流程，不是你趕 deadline 的行為。

---

**Tweet 8**
Senior designer 的優勢不是 prompt 寫得更好。

是建立整個團隊 AI 工作的指令架構。

Skill 就是 agent 工作流程的 design system。

Skill 的作者身份，就是下一代的 DesignOps。

---

## Threads — English

Something subtle happened in Figma's September 3 update that I've been turning over since.

The Figma agent can now generate a SKILL.md from a conversation you just had. You work through a design crit. You like how it went. You tell the agent: "turn this into a reusable skill." It writes the instructions.

A skill is just markdown. But it's how you teach an agent to follow *your* team's review process — not its best guess at what a review looks like. Once installed, /design-crit or /check-tokens runs the same method every session, without re-prompting.

What struck me is this: the previous step to building a good skill was writing a good brief. The new step is having a good conversation first — and then letting the agent document it.

In practice that means skill quality depends on session quality. That's not a bug. That's a useful forcing function: you have to do deliberate work before you can automate it. You can't shortcut your way to a good skill.

One caveat I'd flag for teams: the agent encodes what you *did*, not what you *intended*. If you took shortcuts in that session, the skill inherits them. Audit the generated file before publishing to your org. You want to encode your aspirational process, not your deadline behavior.

The longer I sit with these tools, the more I think the actual senior designer skill is authoring constraint architecture — the rules AI operates by — not the outputs AI generates. Skills are the design system for agent behavior. Who writes them, reviews them, and governs them is the DesignOps question for the next year.

---

## Threads — Traditional Chinese

Figma 9月3日的更新有一個細節，我這幾天一直在想。

Figma agent 現在可以從你剛才的對話生成一個 SKILL.md。你跟 agent 做完一次設計 review，覺得流程不錯，就說「把這次對話變成一個可以重複用的 skill」。它就把指令寫出來。

Skill 只是 markdown。但它的作用是教 agent 按照你們團隊的 review 流程工作，而不是讓它自己猜什麼叫 review。安裝好之後，/design-crit 或 /check-tokens 每次都跑一樣的方法，不用再重寫 prompt。

讓我覺得有意思的是這樣：以前要建一個好的 skill，你得先寫一個好的 brief。現在是先好好做一次工作，然後讓 agent 來記錄它。

這表示 skill 的品質取決於你那次 session 的品質。這不是缺點，這是一個有用的約束：你必須先認真做過，才能把它自動化。你沒辦法靠捷徑生成好的 skill。

給團隊的一個提醒：agent 編碼的是你「做了什麼」，不是你「想做什麼」。如果那次 session 你走了捷徑，skill 就會繼承那些捷徑。發布給 org 之前一定要審查。你想要的是你的理想流程，不是趕 deadline 的行為。

越用這些工具，我越覺得真正的 senior designer 技能是設計「AI 工作的規則架構」，而不是 AI 的輸出。Skill 就是 agent 行為的 design system。誰來寫、誰來審查、誰來治理，這是接下來一年最重要的 DesignOps 問題。

---

## 小紅書 — Traditional Chinese

**Title:** Figma AI 現在會幫你寫自己的操作說明了

**Body:**

Figma 9/3 更新了一個比表面更重要的功能：

你跟 agent 做完一次設計 review，說「幫我把這個流程變成 skill」，它就自動產生一個 SKILL.md 讓你之後重複使用 ✨

**先解釋一下：什麼是 skill？**

不是 prompt（每次都要重新寫）
而是流程（一次定義，永久執行）

就像你的 design system 是「設計規則」，skill 就是「AI 的工作規則」

---

**為什麼我覺得這個功能很重要 👇**

① **對話就是 brief**
最好的 skill 不是你寫出來的，是你實際做過一次、讓 agent 記下來的。文件化門檻幾乎清零。

② **槓桿會複利**
Brief 品質 = 輸出品質，這個公式沒變。現在你是在寫「能寫 brief 的 brief」，這個槓桿會在每次 session 累積。

③ **方法可以編碼，品味不行**
Skill 可以記「出版前確認 token 覆蓋率」，沒辦法記「這個字重感覺不對」。Agent 替代不了 senior 的判斷，只能執行你設定的標準。

---

**建議操作流程：**

1. 先做一次你最滿意的設計 review / token audit / component check
2. 請 agent 把這次流程生成 skill
3. **認真審查 SKILL.md** — 刪掉你那次的捷徑，補上你的理想流程
4. 發布給團隊

---

**注意：**
Agent 產生的 skill 會複製你那次 session 的行為，包含你的 deadline 模式。一定要先審查再發布。

這個功能的更大意義是：senior designer 的工作正在從「產出設計」移往「定義 AI 怎麼產出設計」。Skill 文件是新的 DesignOps 資產。

#Figma #AI設計工具 #UX設計師 #DesignOps #AIworkflow #設計工作流程 #Figmaagent

---

## 小紅書 — English

**Title:** Figma Agent Now Writes Its Own Instructions — Here's Why That Matters

**Body:**

Figma's September 3 update added something quietly significant: the agent can now generate a reusable SKILL.md from the conversation you just had.

Have a great design crit session? Tell the agent to turn it into a skill. It writes the instructions. You invoke /design-crit forever.

**The difference between a prompt and a skill:**

Prompt → generates output, once, then you rewrite it next time  
Skill → generates a repeatable process, every session, automatically

Skills are markdown files. But they're how you encode your team's design review standards, token audit sequence, or handoff checklist — once, for good.

**Why this matters more than it sounds:**

① The conversation IS the brief  
You don't write the skill cold. You do good work first, then ask the agent to document it. The barrier to systematizing your process just dropped dramatically.

② The quality equation still applies  
Brief quality = output quality. You're now writing a brief that writes future briefs. That leverage compounds across every session your team runs.

③ Method gets encoded. Taste doesn't.  
"Check token coverage before shipping" can be a skill step. "This font weight feels off for the brand" cannot. The judgment boundary is clear — and that's where your value still sits.

**Suggested workflow:**  
1. Run your best design review / audit session ever  
2. Ask agent to generate a skill from it  
3. Audit the SKILL.md — remove your shortcut behavior  
4. Publish to your team  

The bigger picture: the senior designer's role is shifting from producing design to defining how AI produces design. Skill authorship is the new DesignOps.

#Figma #AIDesign #UXDesign #DesignOps #AIWorkflow #FigmaAgent
