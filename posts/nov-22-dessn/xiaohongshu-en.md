# Topic 1: Dessn — 小紅書 Post
# Platform: 小紅書 (Xiaohongshu)
# Language: English
# Date: Nov 22, 2026

---

## POST TITLE
Every AI design tool works from screenshots. Dessn works from your running code.

---

## POST BODY

Here's a tool that changes the quality ceiling for AI-assisted design work, and it's not about generation at all.

**What Dessn actually does:**
Connect your GitHub/GitLab/Bitbucket repo. Your codebase builds into a live canvas in 5–15 minutes. Every screen is a clickable frame. Every frame runs your real code.

**Why it matters for agents:**
In every other tool, a coding agent approximates your design system. It builds components that look like yours. In Dessn, the agent finds the components your app actually uses — with the file and line reference — and reuses them. Not visual lookalikes. The actual source.

**5 things worth knowing:**

1. **Design system is enforced by default** — the agent can't create components that aren't in your codebase, it can only use what's already there
2. **Changes are returnable** — work comes back as git patches, commits, or bundles that apply to your local repo
3. **MCP-native** — works with Claude Code, Codex, Cursor, ChatGPT, claude.ai; install via `claude plugin install dessn@dessn` or add `https://mcp.dessn.ai/mcp` as remote MCP
4. **Cloud agent caveat** — ChatGPT, claude.ai can read your canvas and lay out boards, but frame code writes go to Dessn's own design agent (not directly to your code)
5. **Free tier limit** — 50 MCP calls/month per team; reading counts, not just writing; Pro = unlimited, one seat covers whole team

**The bigger pattern:**
I've been tracking "canvas-as-context" since September — the idea that AI agents should work from the same surface as designers, not descriptions of it. Dessn is the seventh instance. It's the first where the canvas IS the production codebase.

"Reference beats description" has been the year's dominant principle. This is where it ends up.

**Who this is for:**
Product teams with established codebases who keep shipping new screens with inconsistent component usage. The fix isn't a better prompt — it's a canvas that only knows your actual components.

---

#UXdesign #AItools #designsystem #productdesign #UXtips #figma #codingagent #designworkflow #AIworkflow #senior设计师
