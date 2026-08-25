# Aug 25 — Topic 1: Figma Enterprise-Managed Authorization for MCP (GA)

**Source:** Figma release notes, Aug 24, 2026  
**The news:** Enterprise-managed authorization for the Figma MCP server is now generally available. Admins on Enterprise and Organization plans can centrally manage the Figma MCP server's connection to AI agents (currently Claude) through their identity provider (currently Okta), using Cross App Access (XAA). Users no longer authenticate individually — they sign in once through Okta, and AI agents gain access to approved MCP servers without repeated OAuth prompts. More identity providers and AI agents are planned.  
**Core angle:** The question of "which AI agent gets to read your design files" just moved from the individual designer's settings to the org's IAM layer. This is the same governance infrastructure that controls employee system access — now extended to AI agent access. Constraint architecture escalated one more level: not token naming, not credit limits, but identity and authorization at the SSO tier. Design access is now a corporate data governance problem. Senior designers who understand this pattern will be in the room when it gets configured.

---

## X / THREAD (English) — 8 tweets

**Tweet 1 — Hook**
```
Figma just moved AI agent access out of designer settings and into your company's IT infrastructure.

Enterprise-Managed Authorization for Figma MCP is now GA.

The keys to your design files aren't yours to grant anymore.
```

**Tweet 2**
```
Here's what changed:

Before: every designer individually authorizes AI agents (Claude, Cursor, etc.) to connect to Figma via OAuth.

Now: IT admin configures it once in Okta.
Sign in through Okta = Claude gets Figma access automatically.
Offboard someone in Okta = access revoked across every MCP.
```

**Tweet 3**
```
This is bigger than a login convenience improvement.

MCP servers like Figma now sit in the same authorization layer as your email, Slack, and GitHub.

AI agent access = governed the same way employee system access is governed.

Design files are now corporate data. Officially.
```

**Tweet 4**
```
What this looks like in practice:

IT admin sets up Okta Cross App Access (XAA).
Figma + Claude get added as approved MCPs.
When a designer onboards, they get Figma AND Claude's Figma access — one flow.

Same when they leave.
No orphaned agent sessions. No forgotten OAuth tokens.
```

**Tweet 5**
```
The design implication:

If you want AI agents to have the right access scope — not too broad, not too narrow — the conversation is now with IT, not in a plugin settings panel.

"What should Claude be able to do in our Figma files" is an IAM question now.

Design leadership lives upstream.
```

**Tweet 6**
```
Connect this to the pattern this year:

Aug 5: Figma AI credit limits per user → AI as governed resource
Aug 18: Miro AI bundling → access governance across the org
Aug 24: Figma MCP managed auth → identity layer for AI agents

Constraint architecture keeps moving up the stack.

Token naming → credit policy → SSO authorization.
```

**Tweet 7**
```
Honest caveats:

Currently: Enterprise and Organization plans only.
Currently: Claude + Okta only. More IdPs and agents are planned.

This is day one of enterprise-grade MCP governance. The scope will expand. The pattern will spread.

If you're not on Enterprise, this is the direction everything is moving.
```

**Tweet 8 — CTA**
```
The question worth raising in your org now:

When your IT team configures MCP authorization — who represents the design team's perspective?

Not "which AI tool do we use."
But "what scope of access serves the work without creating new risks?"

That's a design leadership conversation. Don't skip it.
```

---

## X / THREAD (Traditional Chinese) — 8 tweets

**Tweet 1 — Hook**
```
Figma 把 AI agent 存取設計檔的權限，從設計師的個人設定移到公司 IT 基礎設施了。

Figma MCP 的 Enterprise-Managed Authorization 正式 GA。

你的設計檔能不能讓 AI 讀，不再是你個人決定的了。
```

**Tweet 2**
```
改變了什麼：

以前：每個設計師各自用 OAuth 授權 AI agent（Claude、Cursor 等）連接 Figma。

現在：IT admin 在 Okta 裡設定一次。
透過 Okta 登入 = Claude 自動獲得 Figma 存取權。
在 Okta 離職 = 同時撤銷所有 MCP 的 AI 存取。
```

**Tweet 3**
```
這不只是登入流程變方便。

Figma MCP server 現在和你的 email、Slack、GitHub 在同一個授權層。

AI agent 的存取 = 和員工系統存取用同一套 governance 管理。

設計檔正式成為公司數據了。
```

**Tweet 4**
```
實際流程長這樣：

IT admin 設定 Okta Cross App Access (XAA)。
把 Figma + Claude 加進核准的 MCP 清單。
設計師入職時，一個流程同時開通 Figma 和 Claude 的 Figma 存取。

離職時同樣，不會有遺忘的 OAuth token，沒有孤立的 agent session。
```

**Tweet 5**
```
對設計師的意義：

如果你想讓 AI agent 有合理的存取範圍——不太寬、不太窄——對話對象現在是 IT，不是 plugin 設定頁。

「Claude 應該能對我們的 Figma 做什麼」，現在是 IAM 問題。

設計 leadership 要往更上游走。
```

**Tweet 6**
```
把今年的 pattern 連起來看：

8/5: Figma AI 使用量限制 → AI 是被管控的資源
8/18: Miro AI 全員配套 → 全組織的存取治理
8/24: Figma MCP 管控授權 → AI agent 的身份層

Constraint architecture 一直在往 stack 上層移。

Token 命名 → 使用量政策 → SSO 授權。
```

**Tweet 7**
```
老實說：

目前限 Enterprise 和 Organization 方案。
目前只支援 Claude + Okta，更多 IdP 和 agent 還在規劃。

這是企業級 MCP governance 的第一天。範圍會擴大，pattern 會蔓延。

不在 Enterprise 的，這就是所有東西往哪個方向走。
```

**Tweet 8 — CTA**
```
現在值得在組織裡提出的問題：

當 IT 團隊在設定 MCP 授權時，設計團隊的觀點有沒有人在場代表？

不是「我們要用哪個 AI 工具」。

是「什麼存取範圍能支撐工作，又不引入新風險？」

這是設計 leadership 的對話。別缺席。
```

---

## THREADS (English) — Long-form

```
Something shipped quietly in Figma's release notes yesterday that I think deserves more attention than it's getting.

Enterprise-managed authorization for the Figma MCP server is now generally available. Admins on Enterprise and Organization plans can connect the Figma MCP server to AI agents — currently Claude — through their identity provider. Currently that means Okta, using Cross App Access (XAA). Sign in once through Okta, and Claude gets Figma access automatically. Offboard someone in Okta, and that access is revoked across every MCP simultaneously. No orphaned OAuth tokens. No forgotten agent sessions.

On the surface this looks like a login convenience improvement. Fewer prompts, less friction for designers already using Claude with Figma.

But I think the real shift is one level up: design files just joined the same authorization layer as email, GitHub, and Slack.

For years, the question of "which AI tool can read my Figma files" lived entirely in designer settings — individual OAuth flows, personal decisions, no IT visibility. That era just ended for Enterprise orgs. AI agent access is now governed the same way employee system access is governed. When you onboard a designer, they get Figma access AND Claude's Figma access in one flow. When they leave, both are revoked together.

This is the logical continuation of a pattern that's been building all year: Figma AI credit limits in August set AI usage as a governed resource. Miro's enterprise AI bundling made AI access an org-wide policy question. Now Figma MCP authorization makes AI agent scope a question for IT admins and security teams — not individual designers.

Constraint architecture keeps moving up the stack. First it was token naming quality. Then credit allocation policy. Now SSO authorization scope.

The design leadership implication: the people who understand what scope AI agents actually need — not too broad, not too narrow, right for the work — are designers. But the conversation about that scope is now happening in IT infrastructure teams.

The question worth raising in your organization before someone else answers it: when your IT team configures MCP authorization, who represents the design team's perspective on what should and shouldn't be accessible?

That's not a technical question. It's a design governance question that happens to live in an IT tool now.

Caveats: Enterprise and Organization plans only. Claude + Okta is the current scope; more identity providers and agents are on the roadmap. This is day one of a pattern, not the finished product.
```

---

## THREADS (Traditional Chinese) — Long-form

```
Figma 的 release notes 昨天悄悄上線了一個更新，我覺得值得比現在更多人注意。

Figma MCP server 的 Enterprise-Managed Authorization 正式 GA 了。Enterprise 和 Organization 方案的 admin，現在可以透過 identity provider（目前是 Okta）統一管理 Figma MCP server 與 AI agent（目前是 Claude）的連接。用 Okta Cross App Access 設定一次，設計師透過 Okta 登入後，Claude 自動獲得 Figma 存取。有人在 Okta 離職，所有 MCP 的存取同步撤銷，不會有遺忘的 OAuth token，沒有孤立的 agent session。

表面上看，這像是一個登入便利性的改善。設計師用 Claude 和 Figma 時少了幾個授權提示，少了一些摩擦。

但我認為真正的改變是往上一層：設計檔剛剛加入了和 email、GitHub、Slack 同一個授權層。

多年來，「哪個 AI 工具能讀我的 Figma 檔案」這個問題完全活在設計師的個人設定裡——各自的 OAuth flow、個人決定、IT 完全看不見。Enterprise 組織的這個時代剛結束。AI agent 的存取，現在用和員工系統存取一樣的方式管理。設計師入職，一個流程同時開通 Figma 存取和 Claude 的 Figma 存取。離職時，兩個同時撤銷。

這是今年一直在累積的一個 pattern 的延伸：8 月初 Figma AI 使用量限制，讓 AI 使用成為被管控的資源。Miro 企業 AI 配套，讓 AI 存取成為全組織政策問題。現在 Figma MCP 授權管控，讓 AI agent 的存取範圍成為 IT admin 和資安團隊的問題——不再是設計師個人的問題。

Constraint architecture 一直在往 stack 上層移。先是 token 命名品質，然後是使用量配置政策，現在是 SSO 授權範圍。

對設計 leadership 的意義：真正理解 AI agent 需要什麼存取範圍——不太寬、不太窄、符合工作需要——的人是設計師。但關於這個範圍的對話，現在發生在 IT 基礎設施團隊裡。

值得在別人替你回答之前，在組織裡提出的問題：當 IT 團隊在設定 MCP 授權時，設計團隊關於「什麼應該和不應該被存取」的觀點，有沒有人在場代表？

這不是技術問題。這是一個設計 governance 問題，只是現在碰巧發生在 IT 工具裡。

要說清楚：目前限 Enterprise 和 Organization 方案，目前只有 Claude + Okta。更多 identity provider 和 agent 在路線圖上。這是一個 pattern 的第一天，不是最終形態。
```

---

## 小紅書 (Traditional Chinese)

**Title:** Figma 這個更新讓 AI 存取設計檔變成 IT 問題了｜Senior UX 視角

**Body:**
```
【這週 AI 設計工具更新】

Figma MCP Enterprise-Managed Authorization 昨天 GA 了。

大多數設計師可能不會注意到這個更新，因為它藏在 release notes 裡，而且是 Enterprise 功能。

但我認為它代表的 pattern，每個在企業工作的設計師都要知道。

—

它改變了什麼？

以前：每個設計師各自在 Figma 裡授權 AI agent（Claude 等）存取檔案，個人管、IT 不知道。

現在：IT admin 在 Okta 設定一次。員工透過 Okta 登入 = Claude 自動獲得 Figma 存取。有人離職 = 所有 AI agent 的 Figma 存取同步撤銷。

設計檔正式成為被 SSO 管控的公司資產了。

—

從 Senior UX 角度看今年的 pattern：

① 8 月初：Figma AI 使用量限制（per user credit limit）
→ AI 使用量是被管控的資源

② 8 月中：Miro AI 企業配套
→ AI 存取是全組織政策問題

③ 8 月底：Figma MCP 統一授權 GA
→ AI agent 的存取範圍是 IT 基礎設施問題

Constraint architecture 一直在往 stack 上層移。
Token 命名 → 使用量政策 → SSO 授權範圍。

—

對設計師真正有影響的問題：

當你的 IT 團隊在設定哪些 AI agent 能存取哪些設計檔時，有設計師在場嗎？

「AI agent 需要多大的存取範圍」不是技術問題，是設計 governance 問題，只是現在碰巧發生在 IT 工具裡。

如果設計團隊不在那個對話裡，結果就是 IT 按照預設值設定，然後設計師拿到的工具要嘛太受限、要嘛完全沒有邊界。

—

要注意的地方：

❶ 目前限 Enterprise 和 Organization 方案
❷ 目前只支援 Claude + Okta（更多 IdP 和 agent 在路線圖上）
❸ 不在 Enterprise 方案的，這是所有東西的移動方向，值得現在就理解這個 pattern

#Figma #FigmaMCP #AI設計師 #UX設計師 #設計工具 #AIgovernance #企業設計 #DesignOps #設計系統
```

---

## 小紅書 (English)

**Title:** Figma just made AI agent access an IT infrastructure problem | Senior UX take

**Body:**
```
[This week in AI design tools]

Enterprise-Managed Authorization for the Figma MCP server went GA yesterday (Aug 24).

Most designers will scroll past it. It's in the release notes, it's Enterprise-only, and it sounds like an IT feature.

But the pattern it represents matters to every designer working in an enterprise org.

—

What actually changed:

Before: each designer individually authorizes AI agents (Claude, etc.) to access Figma via OAuth. Personal decision, no IT visibility.

Now: IT admin configures it once in Okta. Sign in through Okta = Claude automatically gets Figma access. Someone leaves = AI agent access across all approved MCPs is revoked simultaneously.

Design files are now a governed corporate asset at the SSO layer.

—

The pattern I've been watching build all year:

① Figma AI credit limits (Aug 5)
→ AI usage is a governed resource

② Miro enterprise AI bundling (Aug 18)
→ AI access is an org-wide policy question

③ Figma MCP enterprise-managed auth GA (Aug 24)
→ AI agent scope is an IT infrastructure question

Constraint architecture keeps moving up the stack.
Token naming → credit allocation policy → SSO authorization scope.

—

The question that actually matters for your team:

When your IT team configures MCP authorization, does anyone from design have a seat at the table?

"What scope should AI agents have in our Figma files" is not a technical question. It's a design governance question that happens to live in an IT tool now.

If design isn't in that conversation, IT will configure defaults, and designers will end up with tools that are either too locked down or completely ungoverned.

—

Worth knowing:

1. Enterprise and Organization plans only (for now)
2. Currently Claude + Okta; more identity providers and agents are on the roadmap
3. This is day one of the pattern — it will expand to more tools and more orgs

#Figma #FigmaMCP #AIDesign #UXDesign #DesignTools #DesignOps #EnterpriseDesign #AIGovernance #DesignSystems
```

---

## Image Brief

**EN image (1536×1024 — landscape for X/Threads):** `img/aug-25-topic1-en.png`  
Visual concept: Dark background. Three-layer vertical stack diagram showing the escalation of governance. Bottom layer (faded): "Token naming" with a small token/variable icon. Middle layer (semi-bright): "Credit allocation" with a usage-meter icon. Top layer (fully lit, highlighted): "SSO Authorization" with a shield/identity icon and Okta logo shape. Arrow pointing upward along the left side labeled "Constraint architecture moves up the stack." At the top, headline: "Your design files are now governed at the identity layer." Clean white sans-serif. Accent color: Figma purple on the top highlighted layer.

**ZH image (1024×1536 — portrait for 小紅書):** `img/aug-25-topic1-zh.png`  
Visual concept: Portrait layout, dark background. Bold headline at top: "AI 存取設計檔，現在是 IT 問題了" in white. Below: same three-layer escalation stack in Chinese labels — "Token 命名" (faded) → "使用量政策" (mid-bright) → "SSO 授權範圍" (highlighted in Figma purple with shield icon). Bottom summary box in rounded rectangle: "設計師要在這個對話裡" with a calendar/meeting icon. Figma logo badge in corner.
