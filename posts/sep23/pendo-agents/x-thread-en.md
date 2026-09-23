# X Thread — Pendo for Agents (English)
# Sep 23, 2026 | 8 tweets | 16:9 image attached to tweet 1

---

**Tweet 1 (hook + image)**
47 million AI agent conversations.

Agents passed every eval.

Users still felt unhelped.

The problem wasn't the model. It was missing context.

---

**Tweet 2**
Pendo launched "Pendo for Agents" yesterday.

Two halves: Agent Analytics (GA) + Agent Toolkit (open beta).

Agent Analytics answers: is this agent actually helping?
Agent Toolkit answers: why isn't it, and how do we fix it — before the user even types a message.

---

**Tweet 3**
Agent Toolkit connects any AI agent to Pendo's behavioral data via MCP.

What agents get access to in real-time:
— Session context: what the user just tried to do
— Frustration triggers: rage clicks, dead clicks, U-turns, error clicks
— Workflow nudges: where someone dropped off a defined flow
— Guide surfacing: the exact walkthrough that solves their problem

These are the signals we've been collecting for a decade. Now they're agent inputs.

---

**Tweet 4**
Here's the UX framing worth paying attention to:

"Agents pass eval checks, but they aren't actually helping if they don't know what the user is trying to achieve."

This is the exact same critique UX practitioners have made about task completion rate as a usability metric for 25 years.

Benchmark scores ≠ user success.

---

**Tweet 5**
The design implication runs deeper than it looks.

Your AI agent inherits your product's behavioral context. Which means:

— Every incomplete workflow you never fixed = a workflow nudge agent gets wrong
— Every dead end users rage-click past = a frustration signal agents now respond to
— Every onboarding step nobody finishes = a gap the agent will find immediately

Your UX debt is now directly visible in your agent's helpfulness.

---

**Tweet 6**
The MCP pattern is becoming infrastructure for behavioral data, not just design tools.

Dscout MCP in August. Dovetail Channels in August. Attest MCP in September. Now Pendo's MCP for session context.

The arc: research data → product analytics → real-time behavioral signals, all flowing into agent context.

The agent doesn't replace the product. It reads the product's behavioral history.

---

**Tweet 7**
The honest caveat:

Agent Analytics is GA. Agent Toolkit is open beta — frustration signals and workflow nudges require a separate proactive support connection, and turning that on requires contacting Pendo support during beta.

Also: 61% improvement in Pendo's own Leo agent with this approach. One data point, not a benchmark. But directionally notable.

---

**Tweet 8 (CTA)**
"Agents pass evals but fail users" was always a context problem.

The context is: what did this user just try? Where did they get stuck? What guide already answers this?

That context has always existed in your analytics. The question is whether your agent can read it.

That's the design problem now.
