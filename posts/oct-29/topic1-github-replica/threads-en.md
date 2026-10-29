# Threads Post — GitHub Replica (English)
# Date: Oct 29, 2026 | Tool: GitHub Replica | Platform: Threads
# Image: ../images/topic1-x-threads-16x9-en.svg

---

GitHub Replica launched this week, and the framing is worth paying attention to.

It's an open-source AI prototyping tool built by GitHub Design. MIT license. Runs in the GitHub Copilot app. Product managers, engineers, and designers can all describe what they want in natural language — and Replica builds it as an interactive prototype.

But here's what's different from every other AI prototyping tool this year: Replica doesn't prototype from a blank page. It prototypes from your design system.

The setup is called /setup-skills. You point it at your design system documentation, component packages, and product patterns. Copilot checks the sources, installs what's needed, and drafts guidance. Designers review that guidance and approve each piece before it becomes active. Only the approved guidance shapes what Replica builds.

This ordering is consequential. All year, "AI prototyping" has meant: AI generates something that looks vaguely like your product, with the wrong components, wrong spacing, and wrong interaction patterns. Designers catch it, rebuild it, throw the AI work away. The generation step is fast; the correction step is expensive. Replica bets on a different sequence — define the constraints first, then let anyone prototype inside them.

The implication for senior designers is uncomfortable in a useful way. In this model, your job isn't to be the fastest prototyper on the team. It's to be the person who defines the constraints that make everyone else's prototyping trustworthy. If your design system documentation is shallow or outdated, Replica's output ceiling is shallow or outdated. If it's rigorous and current, the whole team gets rigorous prototypes.

Collaboration works in two layers. Local prototyping requires no server — just Git, Node.js, and the Copilot app. For team feedback, you publish to a self-hosted Replica Hub where teammates explore and comment. Engineering validates assumptions. PMs test ideas. Designers own the guardrails, not the iteration queue.

Honest constraints: Replica requires a GitHub Copilot plan for model access (or your own model provider, currently in public preview). Hub is self-hosted — your team deploys Docker, configures the domain, and runs the server. This is not managed SaaS. And the guidance quality ceiling is wherever your design system documentation accuracy stops.

One thing the docs say that I think is worth quoting directly: "Ask for existing approved components rather than visual lookalikes."

That's the whole pattern in one sentence. Reference beats description. The components ARE the brief.

The question worth asking before you set this up: how confident are you in what your /setup-skills run will produce? The answer to that question is exactly as confident as you should be in what the team's prototypes will look like.

github.com/github/replica. MIT license.
