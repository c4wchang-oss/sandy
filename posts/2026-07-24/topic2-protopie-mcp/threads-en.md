# Threads Post — ProtoPie MCP (English)
**Platform:** Threads
**Date:** July 24, 2026

---

ProtoPie shipped MCP support this week. Two modes: Studio MCP for creating interactions via natural language inside ProtoPie, and Code MCP for giving AI coding agents access to your prototype's actual interaction model.

Most coverage is focusing on Studio MCP — "you can now build ProtoPie interactions by describing them instead of wiring them manually."

That's useful. But Code MCP is the part worth thinking harder about.

Here's the context: until now, AI agents implementing design specs from a prototype have been working from screenshots, exported videos, and written descriptions. All of that is interpretation. The developer (or agent) receives a visual artifact and infers the interaction intent from it.

Code MCP changes the input. Instead of interpretation, the agent gets the actual interaction model — triggers, responses, variables, formulas, states, layer structure. Not a visual approximation. The specification itself.

And Dev View makes context targetable. You share a link to a full prototype, a single scene, a component, or one layer. The agent gets focused, relevant context instead of a noisy dump of your entire design system.

The implication: implementation goes from "the button should animate on tap" (inferred from video) → "trigger: Tap, target: #button-01, response: animate opacity 0→1, duration: 200ms" (read from spec). The interpretation step gets replaced by a query.

This connects to something I've been tracking across tools: Figma Code Layers, Flowstep, UserTesting MCP. The design artifact is getting a machine-readable layer. The prototype was always supposed to be the spec. Now it actually is.
