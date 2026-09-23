# Threads Post — Pendo for Agents (English)
# Sep 23, 2026 | Long-form reflection | 16:9 image

---

**[Image attached]**

---

There's a finding in the Pendo for Agents announcement that I keep coming back to: after 47 million agent conversations, the recurring feedback wasn't "the model got it wrong." It was "agents pass eval checks, but they aren't actually helping if they don't know what the user is trying to achieve."

That is not an AI problem. That is a context problem. And it's the same false-proxy critique UX practitioners have leveled at task completion rate as a usability metric for decades. You can pass the test and still fail the person.

Pendo for Agents launched yesterday. Two halves: Agent Analytics (already GA) and Agent Toolkit (open beta). Agent Analytics measures whether an agent is helping. Agent Toolkit tries to fix the why — by connecting any AI agent to Pendo's behavioral data via MCP. Real-time session context. Frustration signals: rage clicks, dead clicks, U-turns, error clicks — sent straight to the agent. Workflow nudges for drop-offs. Guide surfacing for the exact documentation that answers the user's actual question.

What strikes me about this: we've been collecting exactly these signals for years. Heatmaps, session recordings, funnel analytics, cohort drop-offs. None of it was ever live context for agents. It was always retrospective reporting for product teams who might act on it in the next sprint. Pendo for Agents is the moment that changes — the behavioral data layer that product analytics teams have maintained for a decade becomes real-time input to agents instead of backward-looking dashboards.

The design implication runs deeper than it might look on the surface. Your agent inherits your product's behavioral history. Which means every incomplete onboarding flow, every dead end users power through by rage-clicking, every workflow step that gets abandoned halfway — those are now the direct inputs to what your agent gets wrong. Your UX debt is no longer abstract. It shows up as agent failure in the moment a user needs help.

The senior UX role here: you're no longer just designing the interface users click through. You're architecting the behavioral context layer that agents inherit. The quality of your IA, your flows, your guidance content — that's now the quality ceiling for how helpful your agent can be.

Caveat: Agent Toolkit is still open beta. Proactive support (frustration signals + workflow nudges) requires a separate connection and needs to be turned on via Pendo support during beta. Intercom Fin gets the most seamless integration; custom agents are supported but need more configuration. The 61% improvement stat is from Pendo's own Leo agent — one internal data point, worth being skeptical about until more is published.

The convergence signal is harder to ignore though. Dscout MCP in August. Dovetail Channels in August. Attest MCP in September. Now Pendo's behavioral layer in September. Every layer of user research and product analytics is routing into agent context. The pattern is clear: the agent reads the product's behavioral history. Your job is to make sure that history is worth reading.
