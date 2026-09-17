# Threads Post — Notion 3.7 Agent Skills (EN)
## Sep 17, 2026 | Image: topic1-x-threads-en.png (16:9)

---

Notion 3.7 dropped Skills this week. On the surface: a shared library of reusable AI instructions. In practice: the first time I've seen a product make "who knows how to prompt well" an organizational question rather than a personal trait.

Here's the pattern I keep observing. Every team has a person who figured out how to work with AI in a way that actually produces results. They wrote a prompt that turns raw meeting notes into a useful PRD. Or they found the exact framing that gets Claude to produce an exec brief that sounds like an actual exec brief, not a generic summary. That knowledge lives in their chat history. It's not shared. It's not versioned. When they leave, it leaves with them.

Skills are pages. Maintained in Notion. Versioned like any other page. The team's best workflow gets encoded once, owned by whoever builds it, and used by everyone through Notion Agent. Admin can set 50 workspace-wide defaults. Everyone runs the same version.

The SKILL.md portability is the detail that changes the architecture. Create a skill in Notion → download it → Claude Code, Cursor, Gemini, and Grok all follow the same instructions. The same skill running in every agent environment your team uses, maintained in one place.

Two honest notes worth tracking before you build on this:

Downloads don't auto-sync. The orange badge tells you a skill was updated — but you still re-download manually. In distributed teams, someone is always running the stale version. That gap will matter in production.

Notion Agent auto-invokes skills based on the description you write. The accuracy of auto-invoke equals the quality of your description. Lazy descriptions mean the wrong skill fires automatically, confidently, without warning.

The form of org debt I don't see anyone naming yet: skills that encode outdated processes, still executing months later. Same structural problem as documentation debt. Harder to catch because the agent never flags it — it just does the wrong thing with full conviction.

The role shift: you stop being the person who writes the best prompt. You become the person who builds and maintains the skills library. What you encode becomes infrastructure your whole team runs on.
