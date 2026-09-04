# AI UX Posts — Sep 4, 2026

**Topic 1:** Framer Agents 3D Transforms (Sep 1, 2026)
**Topic 2:** Doop — Open-Source AI Agent Design Canvas (launched this week)

---

## TOPIC 1: Framer Agents — 3D Transforms

**Source:** https://www.framer.com/updates/agent-3d-transforms
**Blog:** https://www.framer.com/blog/teaching-the-framer-agent-to-design-in-3d/

**Angle:** The model was never the 3D bottleneck — the canvas architecture was. Framer solved selectable/editable 3D in 2024; now the agent speaks that language. Key principle: agent for scale, canvas for judgment.

---

### X Thread (EN)

**Tweet 1 (hook):**
Framer just gave their agent 3D Transform support.

Most tools treat 3D as a CSS trick.
Framer treats it as a design surface.

The difference is architectural — and it took 2 years to get here.

---

**Tweet 2:**
The hard part isn't the model. It's the canvas.

When a layer rotates in 3D perspective space, its visible shape stops matching a flat rectangle.

Selection handles, resize cursors, nested rotations — they all need to follow the projection geometry.

Framer solved that math in 2024. Now the agent writes into it.

---

**Tweet 3:**
So when you prompt the agent to "build a 3D rotating logo animation," it's coordinating 50+ connected frames, perspective values, rotation axes, and backface visibility — simultaneously.

That's not a prompt → output loop.
That's structural design work at scale.

---

**Tweet 4:**
The design principle Framer uses is worth stealing:

Use the agent for scale.
Use the canvas for judgment.

Prompt when a change spans many layers. Switch to canvas when you want to tune the spring, adjust timing, fix the optical weight.

---

**Tweet 5:**
"Optical weight" is the tell here.

A model can rotate a mark across 3 axes and produce mathematically correct geometry.

It cannot feel whether the mark collapses into a hairline and looks wrong.

That feeling is yours. The structure is the agent's.

---

**Tweet 6:**
This is the division of labor I've been waiting for:

→ Structure: agent
→ Judgment: human

Not "AI replaces design," not "AI is just autocomplete."
A spatial collaborator that handles what you can't scale, so you can focus on what only you can feel.

---

**Tweet 7:**
Caveat worth noting: this is Framer-specific.

The canvas projection math (selectable 3D in perspective space) isn't solved in Figma, Sketch, or other tools. You can't give this capability to an agent unless the canvas architecture already supports it.

Your tool choice is now also your agent vocabulary choice.

---

**Tweet 8:**
The broader pattern:

Every design capability that lands in the canvas → the agent eventually gains access to it.

Framer's design primitives are becoming the agent's vocabulary.
What's on the canvas is what the agent can say.

What primitives are you waiting for agents to speak?

📎 Image: `framer-3d-xthreads-en.png`

---

### X Thread (ZH)

**Tweet 1 (hook):**
Framer 剛給他們的 agent 加上了 3D Transform 支援。

大部分工具把 3D 當成一行 CSS。
Framer 把它當成設計表面。

這個差別是架構性的——而且花了兩年才到這一步。

---

**Tweet 2:**
難的不是 model，是 canvas。

當一個 layer 在 3D 透視空間旋轉，它的可見形狀就不再是平面矩形了。

Selection handle、resize cursor、巢狀旋轉——全都要跟著投影幾何走。

Framer 在 2024 年解決了這個數學。現在 agent 可以在那個系統裡操作。

---

**Tweet 3:**
所以當你說「幫我做一個旋轉的 logo 動畫」，agent 同時在協調 50+ 個 connected frame 的 perspective、旋轉軸、depth、backface——

那不是 prompt → 輸出。
那是大規模的結構性設計工作。

---

**Tweet 4:**
Framer 用的設計原則值得借用：

用 agent 處理 scale。
用 canvas 做 judgment。

需要改很多 layer 的時候交給 agent。想調 spring 感覺、timing 節奏、視覺重量——那是你的工作。

---

**Tweet 5:**
「視覺重量」是關鍵。

Model 可以在三個軸向上旋轉一個 mark，產出數學上正確的幾何。

但它感覺不出那個 mark 在某個角度是不是變成了一條細線、看起來很奇怪。

這個感覺是你的。結構是 agent 的。

---

**Tweet 6:**
這是我一直在等待的分工：

→ 結構：agent
→ Judgment：人

不是「AI 取代設計」，不是「AI 只是 autocomplete」。
一個空間協作者，處理你無法 scale 的部分，讓你專注在只有你能感受到的部分。

---

**Tweet 7:**
提醒：這是 Framer 專屬的。

Canvas 的投影數學（透視空間裡可選取的 3D layer）在 Figma、Sketch 等工具裡還沒解決。沒有這個 canvas 架構，就沒辦法給 agent 這個能力。

你選的設計工具，現在同時也是你選的 agent 詞彙表。

---

**Tweet 8:**
更大的 pattern：

每一個進入 canvas 的設計能力 → agent 最終都會獲得。

Framer 的設計 primitive 正在變成 agent 的語言。
Canvas 能表達什麼，agent 就能說什麼。

你還在等哪些 primitive 被 agent 說出來？

📎 Image: `framer-3d-xthreads-zh.png`

---

### Threads (EN)

Framer shipped 3D Transform support for their agent this week, and I want to talk about why it took this long — not as a criticism, but as a lesson in what "AI design capability" actually depends on.

The model was never the bottleneck.

When a layer rotates in 3D perspective space, its visible shape stops matching a flat rectangle. Nested rotations compound. Selection handles, resize cursors, and effect controls all need to track the projected geometry — not the flat bounding box. Framer solved that projection math when they shipped 3D Transforms to the canvas in 2024. Nobody else has.

The agent now writes into that same system. So when you prompt "build a rotating logo animation," it coordinates perspective, rotations across three axes, depth, masks, and effects — all in connected frames you can still select and edit.

The principle Framer named is worth keeping: **use the agent for scale, use the canvas for judgment.**

Prompt when a change spans many layers. Switch to the canvas when you want to tune the spring, fix the optical weight, adjust timing. Those are still yours. The agent builds the structure. It cannot feel whether a rotating mark collapses into a hairline and looks wrong.

The implication I keep coming back to: your choice of design tool is now also your choice of agent vocabulary. What the canvas can represent is what the agent can say. Tools that deferred solving hard canvas problems — editable 3D, live code layers, spatial annotation — are now also deferring what their agents can do.

That gap is going to compound.

📎 Image: `framer-3d-xthreads-en.png`

---

### Threads (ZH)

Framer 這週給他們的 agent 加上了 3D Transform 支援。我想聊的不是這個功能有多酷——而是為什麼它花了這麼長時間才出現。

model 從來不是瓶頸。

問題在 canvas 的架構。當一個 layer 在 3D 透視空間裡旋轉，它的可見形狀就不再是一個平面矩形了。巢狀旋轉會疊加。selection handle、resize cursor、effect control 全都需要跟著投影幾何走，而不是跟著平面 bounding box。

Framer 在 2024 年就解決了這個投影數學——其他工具到現在還沒做到。

現在 agent 可以在那個系統裡直接操作。你說「幫我做一個旋轉的 logo 動畫」，它就在協調 perspective、三個軸向的旋轉、depth、mask 和 effects——而且生成出來的每一個 frame 你都還可以選取、編輯。

Framer 說得很精準：**用 agent 處理 scale，用 canvas 做 judgment。**

需要改一大堆 layer 的時候交給 agent。你想要微調 spring 的感覺、調整視覺重量、改動時機，那是你的工作。agent 可以建出結構，但它感覺不出一個旋轉中的 mark 是不是在某個角度變成了一條細線、看起來很奇怪。

讓我一直思考的一件事是：**你選的設計工具，現在同時也是你選的 agent 詞彙表。** Canvas 能表達什麼，agent 就能說什麼。那些一直沒去解決困難 canvas 問題的工具——可編輯的 3D、live code layers、spatial annotation——現在他們的 agent 也同樣在迴避這些事情。

這個落差只會越來越大。

📎 Image: `framer-3d-xthreads-zh.png`

---

### 小紅書 (ZH)

**標題:** AI 設計師必看｜Framer agent 現在能做 3D 動效了，但真正厲害的不是動畫

Framer 剛給他們的 AI agent 加上 3D Transform 支援，我來幫你整理這件事真正重要的地方 👇

**為什麼這個更新不簡單**

3D 動效其實很多工具都「支援」——CSS 一行就能旋轉一個 div。但在設計工具裡讓 3D layer 依然是可選取、可編輯、可巢狀的，是一個超難的 canvas 數學問題。Framer 在 2024 年就解決了，現在 agent 可以在那個系統裡直接操作。

**它實際上能做什麼**

✅ 你說一句話，agent 同時協調 50+ 個 connected frame 的旋轉、perspective、depth、mask
✅ 生成出來的每個 layer 你都還能直接在 canvas 選取、編輯
✅ 用 Opus 5 Fast + Light reasoning 跑，速度快
✅ 適合需要跨大量 layer 做一致調整的複雜動效

**你還是要做什麼**

視覺重量、spring 的手感、timing 的節奏——這些是你的工作。agent 建結構，你做 judgment。

**我的結論**

你選的設計工具，現在同時也是你的 agent 詞彙表。Canvas 能表達什麼，agent 就能說什麼。這個差距，在不同工具之間只會越來越大。

#AIdesign #Framer #UXDesign #設計師 #AI工具 #動效設計 #ProductDesign

📎 Image: `framer-3d-xhs-zh.png`

---

### 小紅書 (EN)

**Title:** Framer 3D Agent — what actually matters for senior UX designers

Framer added 3D Transform support to their AI agent this week. Here's why it matters more than it sounds 👇

**The hard part was never the model**

Most tools "support" 3D — CSS can rotate anything in a line. The hard problem: making 3D layers still selectable, resizable, and nestable *after* they rotate through perspective space. Framer solved that canvas math in 2024. No other design tool has. Now the agent writes into that same system.

**What it actually means for workflow**

✅ Prompt once → agent coordinates 50+ connected frames, rotations across 3 axes, depth, masks simultaneously
✅ Every generated layer remains selectable and editable on the canvas
✅ Runs on Opus 5 Fast with Light reasoning — quick generations
✅ Built for changes that span many layers

**What's still yours**

Optical weight. Spring feel. Timing judgment. The agent builds the structure. It cannot feel whether a rotating mark collapses into a hairline and looks wrong. That's your call.

**The bigger pattern**

Your choice of design tool is now your choice of agent vocabulary. What the canvas can represent is what the agent can say. Tools that skipped hard canvas problems are now also limiting what their agents can do.

That gap compounds.

#AIDesign #Framer #UXDesign #DesignTool #AIAgent #MotionDesign #ProductDesign

📎 Image: `framer-3d-xhs-en.png`

---
---

## TOPIC 2: Doop — Open-Source AI Agent Design Canvas

**Source:** https://doop.design/ | https://github.com/kgoedecke/doop
**Launched:** This week (ProductHunt, Sep 4 week, 2026)

**Angle:** The session-boundary problem is the real AI design bottleneck — not model capability. Doop externalizes design memory onto the canvas itself. The canvas IS the brief. Persistent shared context > per-session prompt injection.

---

### X Thread (EN)

**Tweet 1 (hook):**
Doop launched this week: an open-source canvas where AI agents design alongside you, live.

The interesting part isn't that agents can generate frames.
It's that they share memory.

---

**Tweet 2:**
The persistent problem with AI-assisted design:

Every session starts from zero unless you manually paste context.
"Here's our brand," "here's what we decided last week," "please don't suggest this again."

Context is the bottleneck — not capability.

---

**Tweet 3:**
Doop's answer: the canvas IS the memory.

Design decisions, comments, taste doctrine, style guides — all live on the canvas, visible to every agent that connects.

The next agent joins and picks up where the last one left off. Mid-thought.

---

**Tweet 4:**
The interaction model is different too:

"Design with agents, not prompts-and-refresh."

Agents stream frames onto the canvas live. You see their cursor. You can jump in, adjust a layer, comment — while they're still working.

Collaboration, not delegation.

---

**Tweet 5:**
The attribution model matters:

Agents connect via MCP OAuth and work *as you.* Their output is signed with your identity in the activity feed.

Agency + accountability on the same canvas.
No ambiguity about what the agent did vs. what you did.

---

**Tweet 6:**
It's open source (AGPL-3.0) and free while in beta. Bring your own AI subscriptions — no platform tokens. Claude Code, Codex, or any MCP client works.

One command:
`claude mcp add --transport http doop https://doop.design/mcp`

---

**Tweet 7:**
Honest caveats:
→ v0.1.0, early stage
→ Frames are HTML in sandboxed iframes — not a design system tool
→ "Taste doctrine" is a text document, not token bindings
→ Closer to a multiplayer prototype scratchpad than a Figma alternative

Worth watching. Not worth replacing your stack with — yet.

---

**Tweet 8:**
But the design principle it represents is right:

Shared context > per-session prompt injection.

The canvas needs to be a memory surface, not just a rendering surface.

Whatever tool gets design system + governance + component library right alongside this pattern — that's the workflow.

📎 Image: `doop-xthreads-en.png`

---

### X Thread (ZH)

**Tweet 1 (hook):**
Doop 這週上線了：一個開源 canvas，AI agent 可以在上面和你即時協作設計。

有趣的不是 agent 能生成 frame。
是他們共享記憶。

---

**Tweet 2:**
AI 輔助設計一直有個問題：

每次開新 session 都從零開始，除非你手動貼 context。
「這是我們的品牌」「這是上週決定的事」「請不要再這樣了」

瓶頸是 context，不是能力。

---

**Tweet 3:**
Doop 的答案：canvas 就是記憶。

設計決策、comment、品味說明、style guide——全留在 canvas 上，對每個連進來的 agent 都可見。

下一個 agent 連進來，就從上一個停下的地方繼續。中途接手。

---

**Tweet 4:**
互動模式也不一樣：

「和 agent 一起設計，不是 prompt 然後重新整理頁面。」

Agent 把 frame 即時串流到 canvas 上。你看得到他們的 cursor。你可以跳進去、調整 layer、留 comment——在他們還在工作的時候。

是協作，不是委託。

---

**Tweet 5:**
歸屬模型很重要：

Agent 透過 MCP OAuth 連線，用你的身份操作。他們的輸出在 activity feed 裡用你的名字簽名。

Agency + 責任在同一個 canvas 上。
Agent 做的和你做的，沒有模糊地帶。

---

**Tweet 6:**
開源（AGPL-3.0），beta 期間免費。用你自己的 AI 訂閱——不需要平台 token。Claude Code、Codex、任何 MCP client 都支援。

一行指令：
`claude mcp add --transport http doop https://doop.design/mcp`

---

**Tweet 7:**
老實說的限制：
→ v0.1.0，非常早期
→ Frames 是 sandboxed iframe 裡的 HTML——不是設計系統工具
→「品味信條」是文字文件，不是 token binding
→ 比較像多人原型便條紙，不是 Figma 替代品

值得關注，但還不值得替換你的工具鏈。

---

**Tweet 8:**
但它代表的設計原則是對的：

持久的共享 context > 每個 session 重新注入 prompt。

Canvas 需要是記憶的表面，不只是渲染表面。

不管最終是哪個工具，在這個模式上同時做對設計系統、governance 和 component library——那就是那個 workflow。

📎 Image: `doop-xthreads-zh.png`

---

### Threads (EN)

Something launched this week that I haven't been able to stop thinking about. Not because it's production-ready (it isn't). Because the design problem it's solving is the right one.

Doop is an open-source multiplayer design canvas where AI agents design beside you, live. They stream frames onto the canvas as they work. You see their cursor. You can comment, adjust layers, and redirect — while the agent is still mid-task.

But the feature that matters is the shared memory.

Every design decision, comment, taste note, and style guide lives on the canvas — visible to every agent that connects. The next agent you bring in picks up that context and continues. Not from a blank prompt. Mid-thought.

This addresses the thing I find most tedious about AI-assisted design right now: the session boundary problem. Every conversation starts from zero. Every agent, whether Claude or Codex or something else, needs to be re-briefed constantly. The designer becomes a context manager — pasting the same brand decisions, the same token names, the same "please don't do this" notes into every new session.

Doop makes the canvas the memory surface. The brief is the canvas. Context doesn't expire.

Honest caveats: v0.1.0, early stage, HTML frames in sandboxed iframes — not a Figma replacement. The "taste doctrine" is a text document, not token bindings. Closer to a collaborative prototype scratchpad than a design system tool.

But the pattern it represents is the one I think will win: persistent shared context > per-session prompt injection. Whatever tool eventually gets the design system, governance, and component library right alongside that pattern — that's the workflow.

📎 Image: `doop-xthreads-en.png`

---

### Threads (ZH)

這週有個東西讓我一直在想。不是因為它已經準備好用在 production 了（還沒）。是因為它試圖解決的設計問題，是對的。

Doop 是一個開源的多人設計 canvas，AI agent 可以在旁邊和你一起設計、即時進行。他們把 frame 串流到 canvas 上，你可以看到他們的 cursor，可以在他們還在工作的時候留 comment、調整 layer、改變方向。

但真正重要的功能是**共享記憶**。

每一個設計決策、comment、品味說明、style guide，都留在 canvas 上——對每一個連進來的 agent 都可見。下一個你帶進來的 agent 會繼承這個 context，從那個點繼續，不是從空白的 prompt，而是中途接手。

這解決了我現在覺得最累的事：**session 邊界問題**。每次對話都從零開始，每個 agent 都要重新 brief 一遍。設計師變成了 context manager，要一直把相同的品牌決策、token 名稱、「請不要這樣做」的備註貼進每一個新 session。

Doop 把 canvas 變成記憶的表面。brief 就是 canvas，context 不會消失。

老實說的限制：v0.1.0，早期，frame 是在 sandboxed iframe 裡跑的 HTML——不是 Figma 的替代品。「品味信條」是一份文字文件，不是 token binding。比較像是協作原型便條紙，不是設計系統工具。

但它代表的模式，我覺得最終會贏：持久的共享 context > 每個 session 重新注入 prompt。不管最終是哪個工具，在這個模式上同時做對設計系統、governance 和 component library 的——那就是那個 workflow。

📎 Image: `doop-xthreads-zh.png`

---

### 小紅書 (ZH)

**標題:** 這個開源設計工具讓我重新思考「AI 協作」的意思

Doop 這週上線了，一個讓 AI agent 在 canvas 上和你即時協作的開源設計工具。我來說為什麼我覺得它代表的方向是對的 👇

**現在 AI 輔助設計最累的事**

每次開新 session 都要重新 brief。同樣的品牌規範、token 名稱、「不要用這個顏色」——要一直重複貼。設計師變成了 context 管理員。

**Doop 的回答：canvas 就是記憶**

所有的設計決策、comment、品味說明、style guide 都留在 canvas 上，每個連進來的 agent 都看得到。下一個 agent 不是從空白開始，而是接著上一個人的思路繼續。

**它實際上怎麼運作**

✅ Frames = 在 sandboxed iframe 裡跑的真實 HTML
✅ Agent 透過 MCP OAuth 連線，用你的身份操作（有歸屬、有責任）
✅ 支援 Claude Code、Codex、任何 MCP client
✅ 開源（AGPL-3.0）、免費 beta、用你自己的 AI 訂閱

**老實說的限制**

⚠️ v0.1.0，非常早期
⚠️ 是 HTML prototype canvas，不是 Figma 替代品
⚠️ 「品味信條」是文字文件，不是 token binding
⚠️ 比較像多人原型便條紙

**為什麼我還是覺得重要**

它代表的設計原則是對的：持久的共享 context > 每個 session 重新注入 prompt。不管最後是哪個工具做到了這件事——那就是我想要的 workflow。

#AIdesign #UXDesign #設計師 #OpenSource #AI工具 #原型設計 #ProductDesign

📎 Image: `doop-xhs-zh.png`

---

### 小紅書 (EN)

**Title:** Doop: What an AI design canvas with shared memory actually means

Doop launched this week — an open-source design canvas where AI agents design beside you, live. Here's why the memory model matters 👇

**The real problem with AI-assisted design today**

Every session starts from zero. Brand decisions, token names, "please don't do this again" — copy-pasted into every new prompt. Designers become context managers.

**Doop's answer: the canvas is the memory**

Design decisions, comments, taste notes, style guides — all live on the canvas, visible to every agent that connects. The next agent you bring in picks up that context and continues mid-thought. Not from a blank slate.

**How it works**

✅ Frames = real HTML in sandboxed iframes
✅ Agents connect via MCP OAuth and work as you (attributed, accountable)
✅ Works with Claude Code, Codex, any MCP client
✅ Open source (AGPL-3.0), free in beta, bring your own AI subscriptions

**Honest caveats**

⚠️ v0.1.0, very early stage
⚠️ HTML prototype canvas — not a Figma replacement
⚠️ "Taste doctrine" is a text doc, not token bindings
⚠️ Closer to a collaborative prototype scratchpad

**Why I think the pattern matters**

Persistent shared context > per-session prompt injection. Whatever tool eventually gets the design system, governance, and component library right alongside this pattern — that's the workflow.

#AIDesign #UXDesign #OpenSource #AItool #DesignCanvas #PrototypeDesign #ProductDesign

📎 Image: `doop-xhs-en.png`

---

## IMAGE FILES

| File | Format | Platform | Topic | Lang |
|------|--------|----------|-------|------|
| `framer-3d-xthreads-en.png` | 16:9 | X / Threads | Framer 3D | EN |
| `framer-3d-xthreads-zh.png` | 16:9 | X / Threads | Framer 3D | ZH |
| `doop-xthreads-en.png` | 16:9 | X / Threads | Doop | EN |
| `doop-xthreads-zh.png` | 16:9 | X / Threads | Doop | ZH |
| `framer-3d-xhs-en.png` | 3:4 | 小紅書 | Framer 3D | EN |
| `framer-3d-xhs-zh.png` | 3:4 | 小紅書 | Framer 3D | ZH |
| `doop-xhs-en.png` | 3:4 | 小紅書 | Doop | EN |
| `doop-xhs-zh.png` | 3:4 | 小紅書 | Doop | ZH |
