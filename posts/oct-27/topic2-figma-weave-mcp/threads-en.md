# Threads Post — Figma Weave via Figma MCP (English)
# Date: Oct 27, 2026 | Tool: Figma Weave MCP | Platform: Threads
# Image: ../images/topic2-x-threads-16x9-en.svg

---

Figma shipped a small release note on October 26 that's actually a significant infrastructure change. All Weave video and image models are now accessible through the Figma MCP.

What that means in practice: you're in Claude Code or Cursor. Without switching to the Weave UI, without building a Weave workflow first, you tell your agent to generate a product video using Kling, or campaign images using Nano Banana. The agent handles the model calls through three MCP tools — find the model, run the model, get the output. You confirm the cost before each run. That's the whole interaction.

The design stack context: Figma MCP has been making visual design agent-readable for over a year. Specs, Code Layers, design tokens — your agent can read and work with the design layer. What's new is the production media layer. Weave via MCP means the same agent session that reads your design file can now generate the video content, the product shots, the campaign imagery. Design to production media in one conversation window.

The trust architecture is done right. Before any paid run, the agent surfaces the cost and waits for confirmation. You're never surprised by a credit charge. This matters especially because the two meters are separate — Weave credits are not Figma AI credits. A Figma Make session and a Weave model run are two different line items on two different accounts. If your team has designers using Figma AI features and the same team running Weave generations through a coding agent, those costs are flowing to different places. That governance gap needs an owner.

What's missing at launch: creating and editing Weave workflows from an agent isn't supported. You can call existing models, not compose new workflows. For a designer who already has a working Weave workflow, this is pure value — run it from whatever agent context you're in. For a designer who doesn't have one yet, workflow authoring still requires the Weave UI.

Prerequisites worth being clear about: you need a Figma account with MCP access plus a separate paid Weave account. Link them in Weave's settings, and your external agent finds the Weave tools automatically through the same Figma MCP server.

The design question this creates: when your agent can generate production media alongside your design work, what changes about how you write the brief? The brief always shaped the design. Now it shapes the video content too. If brief quality wasn't a serious discipline before, it has to be now.
