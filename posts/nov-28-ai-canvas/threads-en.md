# Topic 2: AI Canvas — Design System for AI Agents with Done-Gate
# Platform: Threads
# Language: English
# Date: Nov 28, 2026

---

## THREADS POST — Long-form

AI Canvas launched on Product Hunt on Nov 18. The pitch is blunt: "No more AI slop. Design systems for AI agents." The screen-ten problem is what they're solving — the first screen Claude generates looks great, but by screen three or ten, everything has drifted: a new shade of gray on each page, spacing picked by feel, three different button treatments for the same action.

Their answer has two structural pieces. First, Andromeda Pro: a token-driven design system where the AI Brain is 93 files the agent reads before it starts building. Component rules, building skill, review skill, and verification tools. The agent reads the system first, not after problems appear. Second, the done-gate: when the agent finishes a screen, the gate checks whether the work follows the system. Raw color instead of a token? Failed. Off-scale spacing? Failed. The agent fixes it inside the system before the work counts as done.

The deliberate exception handling is worth noting. You can mark a line with an `allow` comment when you genuinely need to break the system for one screen. The exception is explicit and local — the rule doesn't change everywhere else. This is structurally better than "turning off the linter" because the exception is documented in the code, not silently introduced.

The MCP server connects to Claude, ChatGPT, Codex, VS Code, and Cursor. The agent can search the catalog, read source, install components — without leaving chat. Everything arrives as real, editable source via a shadcn command. MCP catalog access is always free and unmetered.

Where this sits in the constraint enforcement hierarchy I've been tracking: DESIGN.md and Library Guidelines are convention — documents agents should follow, can bypass. AI Canvas's done-gate is a post-generation check with mandatory correction — agents cannot silently produce drifted output and ship it. A2UI 1.0 (Nov 11) is protocol-level enforcement — agents architecturally cannot place unregistered components, full stop. AI Canvas sits in the middle: harder to bypass than a document, but not an architectural prevention.

The honest caveats: React only (no Vue, Svelte, plain HTML). The design system is Andromeda Pro — their design language, not yours. You retune the tokens, but you start from their system. The done-gate checks token usage, not whether you made the right design judgment for the user's context. The AI Brain is 93 files, which is real context window consumption — know your token budget per session. Free tier is MIT (Andromeda Legacy + select components), Andromeda Pro is premium.

The reframe I keep coming back to: consistency review passes after AI-generated multi-screen UI are genuinely expensive. You spend design time catching drift that shouldn't have been introduced in the first place. A gate that fails drift before it compounds is a workflow efficiency tool, not just a quality tool. The craft judgment — whether you chose the right component for the user's mental model, whether the IA is correct — that's still yours.

---

## THREADS SHORT TAKE

AI Canvas (Product Hunt, Nov 18) solves the screen-ten problem: first screen looks great, by screen ten everything has drifted.

Andromeda Pro AI Brain = 93 files the agent reads before building. Done-gate = enforces token + component consistency after every build. MCP server = agent-queryable component catalog, always free.

Constraint enforcement hierarchy update: convention (DESIGN.md) → done-gate (AI Canvas) → protocol enforcement (A2UI 1.0). Three levels, different strength.

Honest caveats: React only, Andromeda Pro is their design language (you retune tokens), 93 files = real context window cost, Andromeda Pro is premium tier.

The gate raises the floor. The craft ceiling is still yours.

---
