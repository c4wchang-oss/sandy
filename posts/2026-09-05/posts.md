# AI UX Posts — Sep 5, 2026

**Topic 1:** Figma Animated Shaders + Code Access for Third-Party Agents (Sep 1–3, 2026)
**Topic 2:** Divi AI Agents for Divi 5 — 22 Purpose-Built Skills (Sep 4, 2026)

---

## TOPIC 1: Figma Animated Shaders + Code Access

**Source:** https://www.figma.com/blog/how-we-built-generative-plugins-and-shaders/
**Also:** https://www.mikegingerich.com/blog/figma-adds-animated-shaders-third-party-ai-agent-support/

**Angle:** The canvas became a two-way agent interface. Animated shaders are visible — code access is structural. Any external AI agent (Claude Code, Cursor, Codex) can now read, modify, and redeploy your shader programs via MCP. The design artifact is now executable code that agents can act on bidirectionally.

---

### X Thread (EN)

**Tweet 1 (hook):**
Figma shipped animated shaders this week.

Most people are talking about the visual effects.

I'm looking at code access — and what it means that any external agent can now read, modify, and redeploy your shader programs via MCP.

---

**Tweet 2:**
Background: Figma launched generative plugins and shaders at Config 2026.

You describe what you want, the design agent builds it. Mouse-reactive fills. Scroll-triggered animated effects. Procedural backgrounds.

That was the launch. The September update adds something different.

---

**Tweet 3:**
Code access.

When you build a shader using the Figma design agent, you can now download the WGSL/JS code behind it.

Take it to Cursor. Open it in Claude Code. Modify the behavior — slower response, stronger refraction, different easing.

Push back to Figma. It rebuilds, versions, and redeploys.

---

**Tweet 4:**
What this means architecturally:

Your Figma file is no longer just a design reference.
It's a code repository with GPU programs living inside it.

External agents can query them, modify them, and push changes back — via MCP.

The canvas became a two-way agent interface.

---

**Tweet 5:**
The constraint architecture angle:

Your shader description IS your design spec.
The WGSL code the agent generates IS the implementation.
The MCP server IS the API connecting both to whichever agent you're working with.

Quality ceiling = the specificity of your description.

"Cool glassy effect" → generic.
"Glass refraction that intensifies as scroll depth increases" → something you actually wanted.

---

**Tweet 6:**
The workflow in practice:

1. Prompt the Figma design agent: describe the visual behavior
2. Agent generates the animated shader on canvas
3. Download the WGSL + runtime
4. Edit in Cursor / Claude Code with proper tooling
5. Push back → Figma redeploys

The brief lives in Figma.
The edit happens outside it.
The result returns.

---

**Tweet 7:**
Honest caveats:

→ Figma MCP doesn't execute shaders during context capture (flattens to base color)
→ Round-trip editing requires a Full seat
→ Animated shaders in production need the Figma shader runtime React component
→ WGSL is unforgiving — vague descriptions produce valid but generic results

Not zero-setup. This rewards preparation.

---

**Tweet 8:**
The broader pattern:

Figma is building toward a canvas where every asset is programmable — and every program is agent-accessible.

Shader is the hardest case. If that works via MCP round-trip, eventually everything does.

What are you still treating as a static artifact that could be an editable program?

📎 Image: `figma-shaders-xthreads-en.png`

---

### X Thread (ZH)

**Tweet 1 (hook):**
Figma 這週推出了動態 shader。

大多數人在談那些視覺效果。

我在看的是 code access——以及任何外部 agent 現在都可以透過 MCP 讀取、修改、重新部署你的 shader 程式，這代表什麼。

---

**Tweet 2:**
背景：Figma 在 Config 2026 推出了生成式 plugin 和 shader。

你描述你要什麼，設計 agent 幫你 build——對滑鼠有反應的 fill、scroll 觸發的動畫效果、程序性背景。

那是 launch。九月的更新加了不同的東西。

---

**Tweet 3:**
Code access。

當你用 Figma 設計 agent build 一個 shader，你現在可以下載它背後的 WGSL/JS code。

帶到 Cursor。在 Claude Code 裡開啟。修改行為——更慢的反應、更強的折射、不同的 easing。

推回 Figma。它重新 build、versioning 和重新部署。

---

**Tweet 4:**
這在架構上代表什麼：

你的 Figma 檔案不再只是設計參考。
它是一個有 GPU 程式住在裡面的 code repository。

外部 agent 可以 query 它、修改它、推回去——透過 MCP。

Canvas 變成了雙向的 agent 介面。

---

**Tweet 5:**
Constraint architecture 的角度：

你的 shader 描述 = 你的設計 spec。
Agent 生成的 WGSL code = 實作。
MCP server = 連接兩者和你使用的任何 agent 的 API。

品質上限 = 你描述的精確度。

「很酷的玻璃效果」→ 平庸。
「折射率隨 scroll depth 漸增的玻璃效果」→ 你實際上想要的東西。

---

**Tweet 6:**
實際工作流程：

1. Prompt Figma 設計 agent：描述視覺行為
2. Agent 在 canvas 上生成動態 shader
3. 下載 WGSL + runtime
4. 在 Cursor / Claude Code 裡用正式工具編輯
5. 推回去 → Figma 重新部署

Brief 在 Figma 裡。
編輯在外部發生。
結果回來。

---

**Tweet 7:**
老實說的限制：

→ Figma MCP 擷取 context 時不執行 shader（flatten 成 base color）
→ Round-trip 編輯需要 Full seat
→ Production 裡的動態 shader 需要 Figma shader runtime React component
→ WGSL 很嚴格——模糊描述產出技術正確但美學平庸的結果

不是零設定。這是一個獎勵準備的工作流程。

---

**Tweet 8:**
更大的 pattern：

Figma 正在建立一個每個 asset 都可以程式化——每個程式都可以被 agent 存取——的 canvas。

Shader 是最難的情況。如果這個透過 MCP round-trip 能運作，最終所有東西都可以。

你還在把什麼東西當成靜態 artifact，其實可以是可編輯的程式？

📎 Image: `figma-shaders-xthreads-zh.png`

---

### Threads (EN)

Figma shipped animated and interactive shaders this week, and everyone is talking about the mouse-reactive fills and scroll-triggered effects. Those are genuinely impressive. But the update I keep thinking about is called code access, and it changes what a Figma file fundamentally is.

When you build a shader or generative plugin using the Figma design agent, you can now view and download the code behind it. The WGSL program, the runtime, the plugin logic. Take it to Cursor or Claude Code. Edit it with whatever tooling you actually prefer for code work. Then push the result back to Figma. It rebuilds, versions, and redeploys the shader on canvas.

Your Figma file now contains a code repository. External agents — Claude Code, Cursor, Codex — can query that code, modify it, and push changes back via MCP. The canvas became a two-way agent interface, not just a design reference that agents read from.

The constraint architecture angle: the quality of what the agent generates depends entirely on the quality of your description. WGSL is unforgiving. "Make something glassy" produces technically valid but aesthetically generic output. "Glass refraction that intensifies as scroll depth increases, peaks at 60% scroll, then softens" gives you something actually designed. Your description is your spec. Precision is the skill.

Honest caveats: Figma's MCP render path doesn't execute shaders during context capture — they flatten to base color, not live visual output. Round-trip editing requires a Full seat. Animated shaders in production contexts need the Figma shader runtime React component (not a standard CSS fallback). This is not a zero-setup workflow. It rewards designers who have already done the work of thinking precisely about what they want.

The pattern worth watching: Figma is building toward a canvas where every asset is programmable and every program is agent-accessible. Shader is the hardest case — GPU code, real-time rendering, complex runtime dependencies. If that works via MCP round-trip, eventually everything does.

What are you still treating as a static artifact that could be an editable program?

📎 Image: `figma-shaders-xthreads-en.png`

---

### Threads (ZH)

Figma 這週推出了動態和互動式 shader，所有人都在討論那些對滑鼠有反應的 fill 和 scroll 觸發的動畫效果——那些確實令人印象深刻。但讓我一直在思考的是一個叫做 code access 的更新，它改變了 Figma 檔案根本上是什麼這件事。

當你用 Figma 設計 agent build 一個 shader 或生成式 plugin，你現在可以查看和下載它背後的 code——WGSL 程式、runtime、plugin 邏輯。帶到 Cursor 或 Claude Code。用你實際上比較喜歡的工具做 code 編輯。然後把結果推回 Figma。它重新 build、versioning，在 canvas 上重新部署 shader。

你的 Figma 檔案現在包含一個 code repository。外部 agent——Claude Code、Cursor、Codex——可以 query 那個 code、修改它、透過 MCP 推回去。Canvas 變成了雙向的 agent 介面，不只是 agent 讀取的設計參考。

Constraint architecture 的角度：agent 生成的品質完全取決於你的描述品質。WGSL 很嚴格。「做一個玻璃效果」產出技術上正確但美學上平庸的輸出。「折射率隨 scroll depth 漸增、在 60% scroll 時達到峰值、然後逐漸減弱的玻璃折射效果」讓你有機會得到一個真正被設計過的東西。你的描述就是你的 spec。精確性是技能。

老實說的限制：Figma 的 MCP render path 在擷取 context 時不執行 shader——它們被 flatten 成 base color，不是即時視覺輸出。Round-trip 編輯需要 Full seat。Production context 裡的動態 shader 需要 Figma shader runtime React component（不是標準的 CSS fallback）。這不是零設定的工作流程，而是獎勵那些已經認真想清楚自己要什麼的設計師。

值得觀察的 pattern：Figma 正在建立一個每個 asset 都可以程式化、每個程式都可以被 agent 存取的 canvas。Shader 是最難的情況——GPU code、即時渲染、複雜的 runtime 依賴。如果這個透過 MCP round-trip 能運作，最終所有東西都可以。

你還在把什麼東西當成靜態 artifact，其實可以是可編輯的程式？

📎 Image: `figma-shaders-xthreads-zh.png`

---

### 小紅書 (ZH)

**標題:** Figma 動態 Shader 大家都在談效果，但我更想說 Code Access

Figma 這週推出了動態 shader + code access，從 Senior UX Designer 的角度，這是我覺得真正重要的部分 👇

**什麼是 Code Access？**

以前：在 Figma 用設計 agent build 一個 shader = 這個 shader 只活在 canvas 裡
現在：你可以下載 shader 的 WGSL/JS code，在 Cursor 或 Claude Code 裡編輯，改完推回 Figma——它重新 build 和部署

**Canvas 變成了什麼？**

設計參考 → 雙向 agent 介面

外部 AI agent（Claude Code、Cursor、Codex）可以透過 MCP：
📖 讀取你的 shader code
✏️ 修改它  
🚀 推回去重新部署

你的 Figma 檔案現在有一個 code repository 住在裡面

**實際工作流程**

① Prompt Figma 設計 agent：描述你想要的視覺行為
② Agent 在 canvas 上生成動態 shader
③ 下載 WGSL + runtime code
④ 在 Cursor/Claude Code 裡修改行為（更慢反應、更強折射...）
⑤ 推回 Figma → 重新部署

**品質上限 = 描述的精確度**

WGSL 很嚴格，你的描述就是你的設計 spec：

❌ 「幫我做一個很酷的玻璃效果」
→ 技術正確，美學平庸

✅ 「折射率隨 scroll depth 漸增、到 60% 時達到峰值、然後逐漸減弱的玻璃折射效果」
→ 有機會得到你真正想要的東西

**老實說的限制**
⚠️ Figma MCP 擷取 context 時不執行 shader（flatten 成 base color）
⚠️ Round-trip 編輯需要 Full seat
⚠️ Production 裡的動態 shader 需要 Figma shader runtime React component
⚠️ 不是零設定——獎勵有準備的人

如果 shader 這個最難的情況都能透過 MCP round-trip 運作，代表 Figma 往「所有 asset 都可以被 agent 讀取、修改、重部署」的方向走得很清晰了

#Figma #Shader #AIDesign #UXDesign #AI工具 #設計師 #Cursor #ClaudeCode #MCP #DesignTools

📎 Image: `figma-shaders-xhs-zh.png`

---

### 小紅書 (EN)

**Title:** Figma Animated Shaders: Everyone Missed the Most Important Part

Figma just shipped animated shaders + code access. Here's what actually matters from a senior UX perspective 👇

**What "Code Access" actually means**

Before: Build a shader with Figma's design agent = shader lives only inside Figma canvas
Now: Download the WGSL/JS code, edit in Cursor or Claude Code, push back to Figma — it rebuilds and redeploys

**What Figma canvas is becoming**

Design reference → bidirectional agent interface

External AI agents (Claude Code, Cursor, Codex) can via MCP:
📖 Read your shader code
✏️ Modify it
🚀 Push it back and redeploy

Your Figma file now has a code repository living inside it

**The actual workflow**

① Prompt the Figma design agent: describe the visual behavior
② Agent generates the animated shader on canvas
③ Download the WGSL + runtime code
④ Edit behavior in Cursor/Claude Code (slower response, stronger refraction...)
⑤ Push back to Figma → redeploy on canvas

**Quality ceiling = description quality**

WGSL is unforgiving. Your description IS your design spec:

❌ "Make a cool glassy effect"
→ Technically valid, aesthetically generic

✅ "Glass refraction that intensifies as scroll depth increases, peaks at 60% scroll, then softens"
→ A real chance at what you actually wanted

**Honest caveats**
⚠️ Figma MCP doesn't execute shaders during context capture (flattens to base color)
⚠️ Round-trip editing requires a Full seat
⚠️ Animated shaders in production need the Figma shader runtime React component
⚠️ Not zero-setup — rewards preparation

If shaders — the hardest case — can work via MCP round-trip, Figma is clearly building toward a canvas where every asset is programmable and agent-accessible.

#Figma #Shader #AIDesign #UXDesign #DesignTools #Cursor #ClaudeCode #MCP #ProductDesign

📎 Image: `figma-shaders-xhs-en.png`

---

## TOPIC 2: Divi AI Agents for Divi 5

**Source:** https://www.elegantthemes.com/blog/theme-releases/ai-agent

**Angle:** The "agent embedded in the builder" pattern went mainstream — and the architectural decision that matters is domain-specific over generic. 22 purpose-built skills means the constraint architecture lives in skill definitions, not in your prompt. The quality ceiling changed fundamentally. And this landed on WordPress, which is ~40% of the web.

---

### X Thread (EN)

**Tweet 1 (hook):**
Divi just shipped AI Agents for Divi 5.

22+ purpose-built skills. Natural language control over layouts, menus, design settings, Theme Builder templates.

This is what domain-specific agents actually look like. And it matters more than you think.

---

**Tweet 2:**
Most AI integrations in design tools are a chat interface connected to a generic model.

You describe what you want. The model generates a response. The tool tries to parse that into API calls.

Quality depends on whether the model can guess the right calls from natural language.

22 purpose-built skills is structurally different.

---

**Tweet 3:**
What 22 purpose-built skills looks like:

→ One skill understands Divi modules and their configuration space
→ One manages global design system settings
→ One works with Theme Builder templates
→ One queries WordPress documentation
→ One processes screenshots and websites as design references

Each skill encodes the domain knowledge a generic model has to guess at.

---

**Tweet 4:**
The constraint architecture insight:

Generic agent quality ceiling = the model's general web design knowledge.
Domain-specific agent quality ceiling = how well those skills were authored.

The constraint architecture lives in the skill definitions, not in your prompt.

This shifts who the real product designer is: the person who wrote the skills.

---

**Tweet 5:**
The feature most people will overlook: screenshot and website input.

You can point the agent at a competitor's site, a screenshot of an app you admire, a reference image.

"Build something inspired by this."

The design brief is visual, not just textual. That's a fundamentally different input modality.

---

**Tweet 6:**
The scale question:

WordPress is ~40% of the web.
Divi powers ~4-5% of all websites.
Divi's users: small business owners, freelancers, teams who've never had design system tooling.

This agent interface is their first contact with what design system-aware AI looks like.

The floor for 40% of the web just moved.

---

**Tweet 7:**
The honest caveat:

22 skills written by one team in one launch will have gaps. Skill quality won't be uniform. A poorly-authored skill for global color management will confidently apply bad design decisions at scale.

The skill author is the product designer. First versions always have edge cases.

---

**Tweet 8:**
The pattern that matters:

Generic agents are getting commoditized.
Domain-specific agents with purpose-built skills are where the quality gap will emerge.

The question to ask any AI tool: how many domain-specific skills do you have, and who authored them?

📎 Image: `divi-xthreads-en.png`

---

### X Thread (ZH)

**Tweet 1 (hook):**
Divi 剛推出了 Divi 5 的 AI Agents。

22+ 個專門打造的 skill。自然語言控制 layout、menu、設計設定、Theme Builder template。

這就是 domain-specific agent 真正的樣子，而且它比你想的更重要。

---

**Tweet 2:**
大多數設計工具裡的 AI 整合是一個連接到通用 model 的 chat 介面。

你描述你要什麼。Model 生成回應。工具嘗試把那個解析成 API 呼叫。

品質取決於 model 能否從自然語言猜出正確的呼叫。

22 個專門打造的 skill 在結構上是不同的。

---

**Tweet 3:**
22 個專門打造的 skill 長什麼樣：

→ 一個理解 Divi modules 和它們的設定空間
→ 一個管理全域設計系統設定
→ 一個操作 Theme Builder template
→ 一個查詢 WordPress 文件
→ 一個把截圖和網站當設計參考處理

每個 skill 把 domain 知識編碼進去，而通用 model 只能猜測。

---

**Tweet 4:**
Constraint architecture 的洞察：

通用 agent 品質上限 = model 對 web 設計的通用知識。
Domain-specific agent 品質上限 = 那些 skill 被寫得多好。

Constraint architecture 在 skill 定義裡，不在你的 prompt 裡。

這改變了誰是真正的產品設計師：寫那些 skill 的人。

---

**Tweet 5:**
大多數人會忽略的功能：截圖和網站輸入。

你可以把競爭對手的網站、你欣賞的 app 截圖、一張參考圖片指給 agent 看。

「幫我做一個受這個啟發的東西。」

設計 brief 是視覺的，不只是文字的。這是一個根本不同的輸入方式。

---

**Tweet 6:**
規模的問題：

WordPress 是整個 web 的 ~40%。
Divi 在大約 4-5% 的所有網站上。
Divi 的用戶：小企業主、自由工作者、從來沒有設計系統工具的團隊。

這個 agent 介面是他們第一次接觸設計系統 AI 的樣子。

40% 的 web 的底線剛剛移動了。

---

**Tweet 7:**
老實說的限制：

一個團隊在一次推出中寫的 22 個 skill 必然有落差。Skill 品質不會統一。一個為全域顏色管理寫了邏輯不好的 skill，會自信地在大規模執行不好的設計決策。

Skill 作者才是產品設計師。第一版永遠有 edge cases。

---

**Tweet 8:**
值得關注的 pattern：

通用 agent 正在商品化。
有專門打造 skill 的 domain-specific agent 是品質差距會出現的地方。

問任何 AI 工具的問題：你有多少個 domain-specific skill，誰寫的？

📎 Image: `divi-xthreads-zh.png`

---

### Threads (EN)

Divi AI Agents launched yesterday for Divi 5, and I want to talk about the architectural decision underneath the feature list — because I think it signals where quality in AI tools is actually going.

The feature list is what you'd expect: natural language control over layouts, menus, design settings, Theme Builder templates, and global design systems. Screenshot and website input as design references. WordPress documentation lookup. 22+ purpose-built skills doing the work.

That number — 22 purpose-built skills — is the signal.

Most AI integrations in design tools are a chat interface bolted onto a generic model. You describe what you want, the model generates a response, the tool tries to parse that into the right API calls. Quality depends on whether a general model can guess the right calls from natural language. It usually can't — not with the precision a real builder needs.

22 purpose-built skills is different. One skill understands Divi modules and their full configuration space. One manages global design system settings. One works with Theme Builder templates. Each skill encodes the domain knowledge that a generic model would have to guess at. The constraint architecture lives in the skill definitions — not in your prompt.

This changes who the real product designer is in an AI tool: it's whoever authored the skills. A well-authored skill for global color management will guide the agent toward coherent decisions across a whole site. A poorly-authored one will let the agent confidently apply bad design decisions at scale. The designer who wrote the skill is the person whose taste gets multiplied.

Scale worth noting: WordPress is ~40% of the web. Divi's users are largely small business owners, freelancers, and teams who've never had access to design system tooling. This is their first contact with agent-powered design. The floor for a significant fraction of the web just moved.

Honest caveat: 22 skills written by one team in one launch will have gaps and inconsistencies. First versions always do. But the architectural direction — domain-specific over generic — is right.

📎 Image: `divi-xthreads-en.png`

---

### Threads (ZH)

Divi AI Agents 昨天為 Divi 5 推出了，我想談功能列表底下的架構決策——因為我認為它指向了 AI 工具品質真正會走向哪裡。

功能列表是你預期的那種：自然語言控制 layout、menu、設計設定、Theme Builder template、全域設計系統。截圖和網站輸入作為設計參考。WordPress 文件查詢。22+ 個專門打造的 skill 在做這些工作。

那個數字——22 個專門打造的 skill——才是信號。

大多數設計工具裡的 AI 整合是一個貼在通用 model 旁邊的 chat 介面。你描述你要什麼，model 生成回應，工具嘗試把那個解析成正確的 API 呼叫。品質取決於通用 model 能否從自然語言猜出正確的呼叫。通常不行——至少不是 builder 真正需要的那種精確度。

22 個專門打造的 skill 是不同的。一個 skill 理解 Divi modules 和它們完整的設定空間。一個管理全域設計系統設定。一個操作 Theme Builder template。每個 skill 把通用 model 只能猜測的 domain 知識編碼進去。Constraint architecture 在 skill 定義裡——不在你的 prompt 裡。

這改變了在 AI 工具裡誰是真正的產品設計師：是寫那些 skill 的人。一個為全域顏色管理寫得好的 skill 會引導 agent 在整個網站上做一致的決策。一個寫得差的 skill 會讓 agent 自信地在大規模執行不好的設計決策。寫 skill 的設計師，才是品味被放大的那個人。

規模值得注意：WordPress 是整個 web 的 ~40%。Divi 的用戶主要是小企業主、自由工作者、從來沒有設計系統工具的團隊。這是他們第一次接觸 agent-powered design。很大一部分 web 的底線剛剛移動了。

老實說的限制：一個團隊在一次推出中寫的 22 個 skill 必然有落差和不一致。第一版永遠如此。但架構方向——domain-specific 勝過 generic——是對的。

📎 Image: `divi-xthreads-zh.png`

---

### 小紅書 (ZH)

**標題:** Divi 推出 AI Agent：22 個專門 Skill 告訴我「好的 AI 工具」應該長這樣

Divi 昨天為 WordPress 的 Divi 5 推出了 AI Agents，22+ 個專門打造的 skill。這個數字讓我重新思考了一件事 👇

**通用 AI vs 22 個專門 Skill**

大多數 AI 工具：chat 介面 + 通用 model → model 猜測 API 呼叫
Divi Agent：22 個 skill，每個理解一個特定的 Divi 功能領域

✅ 一個 skill 理解 Divi modules 的完整設定空間
✅ 一個管理全域設計系統設定
✅ 一個操作 Theme Builder template
✅ 一個查詢 WordPress 文件
✅ 一個把截圖和外部網站當設計參考處理（直接說「幫我做受這個啟發的東西」）

**Constraint Architecture 在哪裡？**

通用 agent → 品質上限在 model 的知識
Domain-specific agent → 品質上限在 skill 被寫得多好

這代表：**寫 skill 的人才是真正的產品設計師**

好的 skill → agent 做正確設計決策
差的 skill → agent 自信地執行錯誤決策（大規模）

**規模有多大？**

WordPress ~40% 的 web
Divi 在約 4-5% 所有網站上
Divi 的用戶：小企業主、自由工作者、從沒有設計系統工具的團隊

→ 40% 的 web 底線剛剛移動了

**老實說的限制**
⚠️ 22 個 skill 一次推出，必然有落差
⚠️ Skill 品質不會統一，第一版永遠有 edge cases
⚠️ 需要 Divi AI 訂閱（含在 Divi Pro 裡，beta 期間 ~$5/月）

**問任何 AI 工具的問題**
你有多少個 domain-specific skill？誰寫的？這兩個問題的答案決定了品質天花板在哪。

#Divi #WordPress #AIDesign #UXDesign #AI工具 #設計師 #網站設計 #ProductDesign #AIagent

📎 Image: `divi-xhs-zh.png`

---

### 小紅書 (EN)

**Title:** Divi AI Agents: What 22 Purpose-Built Skills Means for Design Quality

Divi launched AI Agents for Divi 5 — 22+ purpose-built skills, not generic AI. Here's why the architecture matters more than the features 👇

**Generic AI vs 22 Purpose-Built Skills**

Most AI tools: chat interface + general model → model guesses the right API calls
Divi Agent: 22 skills, each understanding a specific Divi domain

✅ One skill understands Divi module configuration space
✅ One manages global design system settings
✅ One works with Theme Builder templates
✅ One queries WordPress documentation
✅ One processes screenshots and external sites as design references (just say "make something inspired by this")

**Where does the constraint architecture live?**

Generic agent → quality ceiling is the model's general knowledge
Domain-specific agent → quality ceiling is how well the skills were authored

This means: **the skill authors are the real product designers**

Good skill → agent makes correct design decisions
Poor skill → agent confidently executes wrong decisions (at scale)

**How big is this?**

WordPress powers ~40% of the web
Divi is on ~4-5% of all websites
Divi's users: small business owners, freelancers, teams who've never had design system tooling

→ The floor for a significant fraction of the web just moved

**Honest caveats**
⚠️ 22 skills in one launch will have gaps and inconsistencies
⚠️ Skill quality won't be uniform across all domains
⚠️ Requires Divi AI subscription (included in Divi Pro, ~$5/month during beta)

**The question to ask any AI tool**
How many domain-specific skills do you have, and who authored them? Those two answers determine where the quality ceiling actually is.

#Divi #WordPress #AIDesign #UXDesign #DesignTools #AIagent #WebDesign #ProductDesign

📎 Image: `divi-xhs-en.png`

---

## IMAGE FILES

| File | Format | Platform | Topic | Lang |
|------|--------|----------|-------|------|
| `figma-shaders-xthreads-en.png` | 16:9 | X / Threads | Figma Animated Shaders | EN |
| `figma-shaders-xthreads-zh.png` | 16:9 | X / Threads | Figma Animated Shaders | ZH |
| `divi-xthreads-en.png` | 16:9 | X / Threads | Divi AI Agents | EN |
| `divi-xthreads-zh.png` | 16:9 | X / Threads | Divi AI Agents | ZH |
| `figma-shaders-xhs-en.png` | 3:4 | 小紅書 | Figma Animated Shaders | EN |
| `figma-shaders-xhs-zh.png` | 3:4 | 小紅書 | Figma Animated Shaders | ZH |
| `divi-xhs-en.png` | 3:4 | 小紅書 | Divi AI Agents | EN |
| `divi-xhs-zh.png` | 3:4 | 小紅書 | Divi AI Agents | ZH |
