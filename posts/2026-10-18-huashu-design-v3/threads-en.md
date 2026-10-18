# Threads — Huashu Design V3.0 — English
# Oct 18, 2026 | 16:9 image → x-threads-16x9-en (shared with X)

---

Huashu Design V3.0 shipped yesterday. 25k GitHub stars, MIT licensed, runs entirely inside Claude Code as a skill.

No separate app. No browser tab. You tell your coding agent to make a product launch animation, and 8–12 minutes later you have a 60fps MP4 with BGM. Or a clickable iPhone prototype in 10–15 minutes. Or a print-quality infographic. One sentence.

What I find interesting isn't the output quality (which is genuinely impressive — the README demos are all made by the skill itself). It's the philosophical bet.

Claude Design is a GUI product. You open it, you click, you drag, you edit. Huashu Design is a skill. The interface is a sentence to your coding agent. The author's framing: "Claude Design is the better graphic tool. Huashu Design makes the tool layer disappear."

V3.0 pushed style coverage from 60 to 84 — but each style ships with a specimen image so the agent sees what good looks like before executing. That's a quality architecture choice, not just a catalog expansion.

The direction selection was completely rebuilt. Six candidates generated in parallel across three logic systems (best-designer picks, real-world award site references, random rotation). Three finals are chosen for being the strongest, most different from each other, and most different from your past work. Your history is an active input, not an archive.

The learning system is what I'd actually want to see more tools ship: it tracks your past style choices locally (never uploaded) and reads your preference history back to you before starting the next project. Constraint infrastructure that accumulates. Your history preventing the next project from looking like the last one.

Honest limits: no Figma-editable output, no 3D/physics animation, blank-brand quality tops out at 65/100. The author says it plainly: "This is an 80-point skill, not a 100-point product. For people who won't open a design GUI, 80 points beats 100."

The frame I'm sitting with: when the tool layer disappears into your agent, the quality ceiling shifts from GUI literacy to constraint infrastructure. The style library, the brand assets, the learning history — that becomes the craft. The tool just executes it.
