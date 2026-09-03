# Sep 3, 2026 — AI UX Posts

**Topic 1:** Webflow Source + Agent Instructions Generation (Webflow Conf 2026, Sep 2)
**Topic 2:** Takeanap D:bo — Design decision DNA

**Images:**
- `EN_webflow_source_16x9.png` — X / Threads (English, Topic 1)
- `ZH_webflow_source_3x4.png` — 小紅書 (Chinese, Topic 1)
- `EN_takeanap_dbo_16x9.png` — X / Threads (English, Topic 2)
- `ZH_takeanap_dbo_3x4.png` — 小紅書 (Chinese, Topic 2)

---

## X — Thread (English)
*Image: `EN_webflow_source_16x9.png` on tweet 2, `EN_takeanap_dbo_16x9.png` on tweet 5*

**Tweet 1 (hook)**
AI tools accelerated individual output. They didn't accelerate the team's judgment.

Two things that launched this week understand that distinction.

---

**Tweet 2** *(attach: EN_webflow_source_16x9.png)*
1/ Webflow Source removes the abstraction layer for AI agents.

That sounds technical. The UX story is different.

Visual builders hid code complexity so humans didn't have to think about it. Agents don't need that protection. They can read the code directly.

---

**Tweet 3**
What this means for designers:

Your job in Source isn't to design the page.
It's to design the constraints that govern what agents and marketers ship.

Brand system → AI context.
Views (role-based workspaces) → Governance design.

The artifact changed. The role didn't.

---

**Tweet 4**
The new designer artifact in Source:
- Brand system (components, styles, voice/tone)
- Agent Instructions auto-generated from your actual site
- Role-specific Views defining what each person can touch

Design system as runtime constraint. Not a Figma file. An operating environment.

---

**Tweet 5** *(attach: EN_takeanap_dbo_16x9.png)*
2/ Takeanap D:bo is a different kind of tool.

Not a generator. Not a co-pilot.
It captures the 'why' behind team design decisions.

They call it "design decision DNA." I'd call it: institutional knowledge that survives the next project.

---

**Tweet 6**
The premise is honest:

AI gives you ten directions in the time it used to take to get two.
The team still needs to choose one.

Generation bottleneck → moved.
Decision bottleneck → didn't move.

D:bo is betting on the second problem.

---

**Tweet 7**
Plan → Execute → Reflect.

The reflect phase is the one teams skip.
Because nobody has time to document decisions after they ship.

D:bo tries to make that happen automatically, from what already exists: requests, feedback, changes, outcomes.

Early. But directionally right.

---

**Tweet 8 (CTA)**
The most important UX skill right now isn't prompting.

It's designing the system that makes agent output trustworthy — and capturing the judgment that makes team decisions repeatable.

Both of these tools are betting on that. Worth watching.

---

## X — Thread (Chinese)
*Image: `EN_webflow_source_16x9.png` on tweet 2, `EN_takeanap_dbo_16x9.png` on tweet 5*

**Tweet 1 (hook)**
AI 工具加速了個人產出。沒有加速團隊判斷。

這週有兩個工具理解了這個差別。

---

**Tweet 2** *(attach: EN_webflow_source_16x9.png)*
1/ Webflow Source 把 AI agent 的「視覺抽象層」拿掉了。

技術語言背後的 UX 故事：
視覺建構工具是為了讓人類不用接觸 code 而存在的。
AI agent 不需要這個保護。直接讀 code 更快。

所以抽象層不見了。

---

**Tweet 3**
這對設計師的意思是：

你在 Source 裡的工作不是設計頁面。
是設計 AI 和行銷人員「可以做什麼」的邊界。

品牌系統 → AI context
Views（role-based workspace）→ 治理設計

產出物改了，角色沒改。

---

**Tweet 4**
設計師在 Source 裡的新「設計文件」：
- 品牌系統（component、style、voice/tone）
- Agent Instructions（從網站自動產出）
- 定義每個角色能碰什麼的 Views 規則

設計系統變成執行環境，不只是 Figma 檔案。

---

**Tweet 5** *(attach: EN_takeanap_dbo_16x9.png)*
2/ Takeanap D:bo 完全不一樣。

它不生成任何東西。
它捕捉設計決策背後的「為什麼」。

他們叫它「design decision DNA」。
我叫它：能活過下個 sprint 的組織知識。

---

**Tweet 6**
D:bo 的前提說得很誠實：

AI 給你 10 個方向的速度，和以前得到 2 個一樣快。
但團隊還是要從 10 個裡選 1 個。

個人產出的瓶頸移動了。
團隊決策的瓶頸沒有移動。

D:bo 在賭第二個問題。

---

**Tweet 7**
計畫 → 執行 → 反思。

反思是團隊最常跳過的一步。
因為東西 ship 了之後沒時間再回頭。

D:bo 試圖讓反思自然發生，從本來就存在的東西裡抓：需求、反饋、改動、結果。

還早，但方向對。

---

**Tweet 8 (CTA)**
現在最重要的 UX 技能不是 prompting。

是設計讓 AI 輸出值得信賴的系統——
還有讓團隊判斷可以重複的機制。

這兩個工具都在賭這件事。值得追。

---

## Threads (English) — Topic 1: Webflow Source

*(attach: EN_webflow_source_16x9.png)*

Webflow just launched Source and I keep thinking about one design decision they made.

They removed the abstraction layer for AI agents.

Visual builders — Webflow included — were built around a core idea: hide the code. Make design accessible without requiring developers. That abstraction was for humans. It let marketers drag-and-drop without touching CSS.

Source bets that AI agents don't need that protection. They can read the code directly. So for agents, the abstraction is just overhead.

The interesting part: removing the abstraction for agents doesn't simplify your job as a designer. It changes it.

In Source, the designer's job is to build the constraints that govern what agents and marketers ship: the brand system, the Views (role-specific workspaces), the Agent Instructions auto-generated from your actual site. You're not designing pages. You're designing the environment where pages get made — and governing who can make what.

Agent Instructions auto-generation is the piece I keep returning to. Webflow generates a first draft of brand guidelines, design system docs, asset guidelines, and CMS rules directly from your site. That's the design.md / CLAUDE.md pattern for the marketing layer. Your design decisions, made machine-readable automatically.

Honest caveat: Source is in a limited research preview, and the framing is heavily marketing-team-centric. It's not a Figma replacement or a design-centric product yet. But the governance design question — who controls what an agent can touch — is exactly the question that senior designers need to be involved in answering.

The abstraction layer designers created was to protect humans from complexity. The new layer we need to create is to constrain what AI can do with it.

---

## Threads (English) — Topic 2: Takeanap D:bo

*(attach: EN_takeanap_dbo_16x9.png)*

A tool launched this week that doesn't try to generate anything.

Takeanap D:bo captures design decisions instead of making them. It's for the part of product design that often takes the longest: getting a team to agree on what to keep, what to change, and why.

I've been thinking about why that's hard. In ten years of UX, I've watched the same pattern repeat. A designer gets comments in Figma. A PM explains a change direction in Slack. A leader makes the final call in a meeting. Weeks later, the team remembers the result — not the reasoning. The next project starts, a similar question comes up, and people reopen work that was already settled.

AI made this worse in a specific way: it accelerated individual output without accelerating organizational judgment. AI gives you ten viable directions in the time it used to take to get two. The team still needs to choose one. More options, more review work. Not less.

D:bo's bet is to capture the 'why' — structured around plan, execute, and reflect. The reflect phase is the one teams skip. Nobody has time to write up decision rationale after they ship. D:bo tries to surface it from what already happens: requests, feedback, changes, outcomes.

They call the accumulated record "design decision DNA." That's a little ambitious, but the underlying idea is real. Teams do have distinct working patterns — preferences for speed over polish, for accessibility over visual novelty, for customer evidence over intuition. That usually lives in people's heads and informal conversations. When those people leave, it leaves with them.

The risk is real too: this could easily become another administrative layer that product teams don't have time for. The product has to perform well enough that the reflection phase doesn't feel like documentation. That's a hard bar.

But the direction is right. The generation bottleneck moved. The decision bottleneck didn't.

---

## Threads (Chinese) — Topic 1: Webflow Source

*(attach: EN_webflow_source_16x9.png)*

Webflow 推出 Source，我一直在想他們做的一個設計決策。

他們把 AI agent 的抽象層拿掉了。

視覺建構工具——包括傳統的 Webflow——都圍繞著同一個核心理念建造：把 code 藏起來。讓設計師和行銷人員不用碰開發工作。那個抽象層是為人類存在的。

Source 賭的是：AI agent 不需要那個保護。直接讀 code 反而更快，更準確。對 agent 來說，抽象層只是多餘的摩擦。

有趣的地方在於：對 agent 移除抽象層，並不讓設計師的工作變簡單——只是讓工作的對象改變了。

在 Source 裡，設計師的工作是建造邊界：品牌系統、Views（每個角色各自的 workspace）、從實際網站自動產出的 Agent Instructions。你不是在設計頁面，你是在設計「頁面怎麼被製造」的環境——還有誰能製造什麼。

Agent Instructions 自動生成是我一直在想的那個功能。Webflow 從你的網站直接產出品牌指南、設計系統文件、CMS 規則的草稿。這是 design.md / CLAUDE.md 模式在行銷層的實現。你的設計決策，自動變成 AI 可以讀的 context。

說實話的部分：Source 目前是限量 research preview，定位還是以行銷團隊為主。它還不是設計師日常工作的主要平台。

但「誰有權決定 AI 可以碰什麼」這個問題，設計師必須先搶話語權。不然這個決定會由別人做。

之前設計師創造的抽象層，是為了保護人類不被複雜度壓垮。現在我們需要創造的新一層，是為了定義 AI 在複雜度裡能做什麼。

---

## Threads (Chinese) — Topic 2: Takeanap D:bo

*(attach: EN_takeanap_dbo_16x9.png)*

這週有一個工具不試圖生成任何東西。

Takeanap D:bo 捕捉設計決策，而不是製造它們。它針對的是產品設計裡最花時間的那個部分：讓整個團隊同意要保留什麼、改變什麼、為什麼。

做了 10 年 UX，我見過同樣的模式一直重複。設計師在 Figma 收到留言。PM 在 Slack 解釋方向改變的原因。主管在會議上做最後決定。幾週後，團隊記得結果，不記得理由。下個 sprint 開始，類似的問題又出現，大家重新打開已經討論過的決定。

AI 把這個問題放大了，方式很特定：它加速了個人產出，但沒有加速團隊判斷。AI 在以前得到 2 個方向的時間裡給你 10 個選項。團隊還是要選一個。更多選項，更多 review 工作——不是更少。

D:bo 的賭注是捕捉「為什麼」——圍繞計畫、執行、反思三個階段組織。反思階段是團隊最常跳過的。因為東西 ship 出去之後沒有時間回頭記錄決策。D:bo 試圖從本來就存在的東西裡自動浮現它：需求、反饋、改動、結果。

他們把累積起來的記錄叫做「design decision DNA」。有點 ambitious，但背後的概念是真實的。團隊有各自不同的工作模式——有人優先考慮速度、有人優先考慮易用性、有人跟著客戶反饋走。這些偏好通常住在某幾個人的腦袋裡和非正式的對話裡。那些人離開的時候，這些判斷邏輯也跟著走了。

風險也是真實的：這很容易變成另一個沒人維護的文件系統。這個產品必須讓反思階段發生得足夠自然，讓它不像是在「填表格」。這是很高的門檻。

但方向是對的。生成的瓶頸移動了。決策的瓶頸沒有移動。

---

## 小紅書 (Chinese) — Topic 1: Webflow Source

**Title:** 設計師在 AI 時代的新角色：你不再設計頁面，你設計 AI 能做什麼

*(attach: ZH_webflow_source_3x4.png)*

Webflow 剛在 Webflow Conf 2026 推出 Source，一個讓 AI agent 直接操作網站代碼的平台。

作為一個做了 10 年 UX 的設計師，我看到的不是「更快的工具」——我看到的是角色轉換。

**之前 vs 現在**
❌ 之前：設計師 → 設計頁面 → 工程師開發
✅ 現在：設計師 → 設計「AI 能做什麼的邊界」→ Agent 執行

Webflow Source 的核心設計邏輯：

**1️⃣ 移除 AI 的「視覺抽象層」**
視覺建構工具是為了讓人類不用接觸 code 而存在的。但 AI agent 不需要這個保護，直接讀 code 反而更快、更準確。

**2️⃣ Views：每個角色有自己的工作介面**
設計師、行銷人員、工程師在 Source 裡有各自的 workspace，由設計師定義每個角色能做什麼。這就是 UX 設計——只是設計對象從 user 變成了 teammate + agent。

**3️⃣ Agent Instructions 自動生成**
Webflow 從你的實際網站自動產出品牌指南、設計系統文件、CMS 規則的草稿。你的設計決策，自動變成 AI 的 context。

**設計師現在需要維護的新「設計文件」：**
- Brand system（component、style、voice/tone）
- Agent Instructions（從網站自動生成但需要你 review）
- Views 的 role-based 規則

**誠實說的 caveat：**
Source 目前是限量 research preview，定位比較偏行銷團隊，還不是設計師的主要工作平台。

但「誰能決定 AI 可以碰什麼」這個問題，設計師必須搶先佔有話語權。否則這個決定會由工程師或 PM 做。

#UXDesign #WebflowConf #AIDesign #DesignOps #設計師 #AI工具 #使用者體驗 #ProductDesign

---

## 小紅書 (Chinese) — Topic 2: Takeanap D:bo

**Title:** 為什麼 AI 工具讓你更快，但整個團隊還是很慢？

*(attach: ZH_takeanap_dbo_3x4.png)*

做了 10 年 UX，我見過太多次這個場景：

設計師在 Figma 收到一堆留言。PM 在 Slack 解釋為什麼要改方向。主管在會議上拍板。

三週後，大家記得結果，不記得原因。下個 sprint，類似的問題又出現了。

**AI 工具把這個問題放大了：它加速了個人產出，沒有加速團隊判斷。**

AI 給你 10 個方向，比以前得到 2 個方向還快。但團隊還是要從 10 個裡面選 1 個。更多選項 ≠ 更快決策。

這就是為什麼 Takeanap 的 D:bo 讓我覺得值得關注——它是少數不試圖「生成」任何東西的 AI 工具。

**D:bo 在做什麼？**
它捕捉設計決策背後的「為什麼」，把它變成可重複使用的團隊知識。他們稱之為「design decision DNA」。

**運作邏輯：**

**1️⃣ Plan（計畫階段）**
把需求結構化，加入 context 和使用場景

**2️⃣ Execute（執行階段）**
追蹤設計過程中出現的決策和反饋

**3️⃣ Reflect（反思階段）**
把反饋和結果整理成報告，供下個專案參考

**對 senior UX 設計師的意義：**
你做了 10 年累積的「品味」和「直覺」——其實是一套判斷邏輯。D:bo 試圖把這套邏輯從你腦袋裡外化出來，變成組織知識。

**誠實說的 caveat：**
D:bo 最大的風險是變成「另一個沒人看的文件系統」。Reflect 這個環節是最多團隊會跳過的——因為東西 ship 出去之後沒有時間回頭記錄。

目前是早期，做的是 Series A 團隊的 pilot。

但方向是對的：**生成的瓶頸移動了，決策的瓶頸沒有移動。**

#UXDesign #AITools #設計決策 #DesignOps #ProductDesign #設計師 #AI工具 #使用者體驗
