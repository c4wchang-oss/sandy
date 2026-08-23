# Aug 23 — Topic 1: Spline V2

**Source:** Spline blog, Aug 20, 2026  
**The news:** Spline V2 is a complete rebuild of the 3D editor for the agentic era — native AI Agent in the sidebar, MCP server bundled in the desktop app (Claude Code/Cursor/ChatGPT auto-connect), constraint solver for spatial description instead of XYZ coordinates, WebGPU renderer, Edit/Code/Preview modes, automatic 2D/3D routing between Hana (UI) and Spline 3D.  
**Core angle:** 3D is now the last major design surface to get the MCP treatment. Constraint-based spatial description = design thinking finally legible to machines. Brief quality is the ceiling, same as everywhere else.

---

## X / THREAD (English) — 8 tweets

**Tweet 1 — Hook**
```
3D design tools just got the MCP treatment.

Spline V2 dropped this week.

The last major design surface is now AI-driveable.
```

**Tweet 2**
```
The MCP server ships inside the Spline desktop app.

Open Spline, run Claude Code or Cursor alongside it — the agent auto-detects and connects.

Zero configuration. The 3D editor is now a machine-readable canvas.
```

**Tweet 3**
```
What the agent can actually do:

Read and write objects, materials, lights, cameras, events, states — and code.

It builds scenes that react to input.

Hover. Click. Scroll. Not just scenes that look right.
```

**Tweet 4**
```
The part I keep coming back to: the constraint solver.

You don't place objects at X/Y/Z coordinates.

You describe spatial relationships:
"near", "on top of", "facing"

The solver works out the rest.

That's how senior designers actually think about space.
```

**Tweet 5**
```
The 2D/3D routing is automatic.

Describe a UI screen → goes to Hana (the 2D editor).
Describe a 3D scene → goes to Spline 3D.

The agent picks the right surface without you specifying.
One prompt, right output.
```

**Tweet 6**
```
"AI can do 3D now" is the wrong headline.

The real headline:

3D briefs work the same way as layout briefs.

Context quality is your ceiling.

A vague prompt gets a vague 3D scene.
```

**Tweet 7**
```
Honest caveats:

Agent sessions on heavy scenes are token-intensive.

MCP requires the desktop app — no web-only workflow gets this.

The agent doesn't read your brand guidelines automatically.
Design intent still has to be explicit.
```

**Tweet 8 — CTA**
```
Worth asking on your team:

Is there a 3D moment in your product where the brief you'd give a human designer is now the right input for Spline's agent?

The gap between "I want to try 3D" and "I have something to brief" just got smaller.
```

---

## X / THREAD (Traditional Chinese) — 8 tweets

**Tweet 1 — Hook**
```
3D 設計工具這週加入了 MCP 陣營。

Spline V2 上線。

最後一個主要設計介面，現在是 AI 可驅動的 canvas 了。
```

**Tweet 2**
```
MCP server 直接封裝在 Spline 桌面 app 裡。

打開 Spline，旁邊開 Claude Code 或 Cursor，agent 自動偵測連線。

不用設定。3D 編輯器變成機器可讀的設計介面。
```

**Tweet 3**
```
Agent 能做什麼：

讀寫物件、材質、燈光、鏡頭、事件、狀態，還有 code。

它建出來的場景會對使用者輸入反應。

Hover、點擊、scroll。不只是「看起來對」的場景。
```

**Tweet 4**
```
我一直想的是 constraint solver。

你不用設定 X/Y/Z 座標。

你描述空間關係：
「靠近」、「在上面」、「面向」

Solver 幫你算出位置。

這才是資深設計師實際思考空間的方式。
```

**Tweet 5**
```
2D/3D 路由是自動的。

描述 UI 畫面 → 進 Hana（2D 編輯器）。
描述 3D 場景 → 進 Spline 3D。

Agent 自動選介面，你不用指定。
一個 prompt，對的輸出。
```

**Tweet 6**
```
「AI 現在可以做 3D 了」是錯的標題。

真正的標題：

3D 簡報和版面簡報現在用同一套邏輯了。

品質上限是你的 context 品質。

語焉不詳的 prompt 得到語焉不詳的 3D 場景。
```

**Tweet 7**
```
老實說：

Heavy scene 加上 agent session 的 token 消耗很高。

MCP 要桌面 app 才能用，純 web 流程拿不到。

Agent 不會自動讀你的品牌規範。
設計意圖還是要明確說出來。
```

**Tweet 8 — CTA**
```
值得問你的團隊：

你的產品裡，有沒有某個你一直想用 3D 的地方，
其實現在只差一份你願意寫清楚的 brief？

「想試 3D」和「有東西可以 brief」之間的距離，剛剛縮短了。
```

---

## THREADS (English) — Long-form

```
Spline V2 shipped this week and it answered a question I've been carrying for a while: what happens when 3D — the last major design surface — gets the same MCP treatment as Figma, ProtoPie, and every other tool we've been talking about?

The answer is what always happens. The surface becomes AI-legible. The ceiling becomes your brief quality.

Spline bundled an MCP server directly into the desktop app. Launch it alongside Claude Code, Cursor, or ChatGPT — auto-detection, no config. The same tools you're already using to write code and build UIs can now directly manipulate a live 3D scene.

But the part I find most interesting isn't the interoperability. It's the constraint solver.

You don't place objects at coordinates. You describe spatial relationships: "near", "on top of", "facing". The solver works out where things go from that. That's not a small UX detail. That's the difference between executing geometry and describing intent. It's how senior designers think about space — relationally, not absolutely — turned into a machine-legible input.

The agent also reads events and states. Which means it can build reactive scenes, not just static ones. A 3D product visualization that responds to scroll. An interactive environment that changes on hover. You're not just describing what a scene looks like — you're describing how it behaves.

Honest caveats: MCP requires the desktop app. Pure web workflows don't get this. Heavy scenes plus agent sessions can be token-intensive. And the agent doesn't automatically know your brand — design intent still needs to be explicit.

But the direction is the same one we keep tracking. Every surface where designers express intent is becoming machine-legible. Each time that happens, the tool gets faster and the brief gets more important.

The question I'd sit with: where in your product is there a 3D moment you've been deferring because it was "too specialized"? The gap between wanting to try 3D and having the workflow to brief it just got smaller.
```

---

## THREADS (Traditional Chinese) — Long-form

```
Spline V2 這週上線了。它回答了我一個放了很久的問題：當 3D 這個最後一個主要設計介面，終於得到和 Figma、ProtoPie 一樣的 MCP 待遇，會發生什麼事？

答案和每次一樣。介面變得 AI 可讀，品質上限變成你的 brief 品質。

Spline 把 MCP server 直接封裝進桌面 app 裡。打開 Spline，旁邊開 Claude Code、Cursor 或 ChatGPT，自動偵測、不用設定。你已經在用的工具，現在可以直接操作一個活的 3D 場景。

但我覺得最有趣的地方不是互通性，是 constraint solver。

你不用設 X/Y/Z 座標，你描述空間關係：「靠近」、「在上面」、「面向」。Solver 從這些關係算出位置。這不是小小的 UX 細節，這是「執行幾何」和「描述意圖」之間的差距。它是資深設計師思考空間的方式——關係性的，不是絕對位置——變成機器可讀的輸入。

Agent 也讀 events 和 states，代表它建出來的是有反應的場景，不只是靜態的場景。對 scroll 有反應的 3D 產品展示。對 hover 改變的互動環境。你描述的不只是場景的樣子，而是它的行為。

老實說：MCP 要桌面 app 才能用，純 web 流程拿不到。Heavy scene 加 agent session 的 token 消耗高。Agent 不會自動知道你的品牌，設計意圖還是要明確。

但方向和我們一直在追蹤的是同一件事。每個設計師表達意圖的介面，都在變成 AI 可讀。每次發生這件事，工具變快，brief 變重要。

我會思考的問題是：你的產品裡，有沒有一個你一直因為「太專業了」而拖著的 3D 時刻？想試 3D 跟有流程可以 brief 之間的距離，剛剛縮短了。
```

---

## 小紅書 (Traditional Chinese)

**Title:** Spline V2：3D 設計工具正式進入 AI 可驅動時代｜Senior UX 視角

**Body:**
```
【今週值得注意的設計工具更新】

Spline V2 上線了，這是它有史以來最大的改版。

對大多數設計師來說，Spline 是「那個做酷 3D 動畫的工具」。

但 V2 之後，它變成了：AI 可以直接驅動的設計介面。

—

V2 主要改了什麼？

① AI Agent 內建側邊欄
可以讀寫物件、材質、燈光、鏡頭、事件、狀態，還有 code
建出來的場景是有反應的，不只是靜態好看

② MCP server 封裝進桌面 app
Claude Code、Cursor、ChatGPT 開在旁邊就自動連接
不用另外設定

③ Constraint solver 空間關係描述
不用設 X/Y/Z 座標
你說「靠近」、「在上面」、「面向」
Solver 自己算出位置

④ 2D/3D 路由自動分流
UI 描述 → Hana（2D 介面）
3D 場景描述 → Spline 3D
一個 prompt，agent 自己選對的介面

⑤ WebGPU 重建 renderer
速度快很多，支援 PBR 材質和反射

—

對 UX 設計師的意義：

Figma 有 MCP，ProtoPie 有 MCP，Spline 現在也有了。

3D 不再是「需要專人處理的黑盒子」。
它跟版面設計、互動設計一樣，變成了 brief 品質決定輸出品質的介面。

Constraint solver 這件事我特別喜歡——你描述的是設計意圖，不是精確座標。
這才是設計師真正思考空間的方式。

—

要注意的地方：

❶ MCP 要桌面 app 才能用，純 web 流程沒有
❷ Agent + heavy scene 的 token 消耗很高
❸ Agent 不會自動讀你的品牌規範，設計意圖要明確說

—

如果你的產品裡有一個你一直想試 3D 卻不知從何開始的地方——
Spline V2 讓「想試試看」和「有流程可以做」之間的距離縮短了很多。

#Spline #SplineV2 #3D設計 #AI設計工具 #UX設計師 #設計工具 #AIagent #MCP #設計系統
```

---

## 小紅書 (English)

**Title:** Spline V2 dropped: 3D is now an AI-driveable design surface | Senior UX take

**Body:**
```
[This week in AI design tools]

Spline V2 dropped this week — their biggest release ever.

Most designers know Spline as "that tool for cool 3D web animations."

After V2, it's something different: a design surface that AI agents can drive directly.

—

What changed in V2:

① Built-in AI Agent in the sidebar
Reads/writes objects, materials, lights, cameras, events, states — and code
Builds scenes that react to input (hover, click, scroll)
Not just scenes that look good

② MCP server bundled in the desktop app
Claude Code, Cursor, ChatGPT auto-connect when running alongside
Zero configuration required

③ Constraint solver for spatial description
No X/Y/Z coordinates needed
Say "near", "on top of", "facing" — solver works out positions
This is how senior designers actually think about space

④ Automatic 2D/3D routing
UI description → Hana (2D editor)
3D scene description → Spline 3D
One prompt, agent picks the right surface

⑤ WebGPU renderer rebuild
Much faster, PBR materials, reflections

—

What this means for UX designers:

Figma has MCP. ProtoPie has MCP. Now Spline has MCP.

3D is no longer a specialist black box.
It follows the same logic as layout and interaction design:
brief quality = output quality.

The constraint solver is the detail I keep thinking about.
You describe design intent, not absolute coordinates.
That's a meaningful difference.

—

Caveats worth knowing:

1. MCP requires the desktop app — web-only workflows don't get it
2. Agent + heavy scene sessions are token-intensive
3. Agent won't read your brand guidelines automatically — intent needs to be explicit

—

If there's a 3D moment in your product you've been deferring because it felt "too specialized" —

Spline V2 just narrowed the gap between wanting to try it and having a workflow to do it.

#SplineV2 #AIdesign #UXdesign #3Ddesign #DesignTools #MCP #AgentWorkflow
```

---

## Image Brief

**EN image (1536×1024 — landscape for X/Threads):** `img/aug-23-topic1-en.png`  
Visual concept: Dark background. Large typographic headline "3D is now a brief." Geometric constraint lines connecting abstract 3D nodes (not coordinates, but relational arrows labeled "near / above / facing"). Small pill labels: "Spline V2" "MCP" "Constraint Solver". Clean sans-serif. Minimal color: white type, electric blue accent on the constraint arrows.

**ZH image (1024×1536 — portrait for 小紅書):** `img/aug-23-topic1-zh.png`  
Visual concept: Same dark background, portrait layout. Top: "Spline V2" header in Chinese and English. Middle: 3D constraint diagram with Chinese labels (靠近 / 在上面 / 面向). Bottom: "Brief 品質 = 輸出品質" in bold. Hashtag strip at bottom.
