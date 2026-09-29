# 小紅書 Post — Elyx: The Design File Format Is the AI Integration Design Decision (English)
**Topic:** Sketch co-founders launch Elyx — .elyx design files live in Git alongside code (Sep 24, 2026)

---

**Title:**
Sketch founders just redefined what a design file is — and it breaks the AI integration premise

---

**Body:**

The Sketch co-founders launched a new design tool called Elyx. Not as a Sketch successor. As a different answer to a question every AI design tool is currently answering wrong.

The question: how do we get design files into AI agents?

Every current answer involves a bridge. Figma MCP reads a binary file and translates it. DESIGN.md manually documents what the file contains. BRDNA Sequencer converts design artifacts into training context. All bridges.

Elyx's answer: design the file format so it doesn't need a bridge.

**What Elyx actually is:**
An "Integrated Design Environment" — the name is intentional. .elyx files are human-readable, AI-friendly, versionable, and live in your Git repo alongside source code. A Claude Code or Cursor agent can read your design file directly — no MCP translation layer, no documentation middleman.

**① The .elyx file format is the whole bet**
Design decisions stored as structured, readable data. Not a flat canvas layer file. Not a binary blob. Something a developer can inspect in code review and an AI agent can read without a translator.

**② CLI + agent skills for direct access**
AI coding agents can inspect .elyx files, check formatting, and render design output directly. The design file becomes a first-class input — not a downstream artifact to reference, but a live source to work from.

**③ Wiki-like connections — the underrated feature**
.elyx files are designed to link to each other: components → screens → flows → use cases → documented decisions. Not a flat file with layers. A knowledge graph of design intent. This is what "living source of truth" needs to actually mean.

**④ The honest caveats**
Local-first is a real trade-off: Sketch lost to Figma exactly because cloud collaboration won. No team collaboration model has been announced yet. File format adoption is historically the hardest problem in tooling — both sides (design + dev) have to commit. Private beta only, no production track record.

**The pattern this sits in:**
DESIGN.md → AGENTS.md → BRDNA → Once UI agent harness → .elyx

Every step in this arc has been trying to make design legible to machines. Elyx is proposing that the file format itself is where that legibility should live — not in a bridge you build on top of it.

---

**Honest caveat:**
Private beta only. No team collaboration announced. Local-first creates real trade-offs for distributed teams. File format adoption requires design + dev to align — historically very hard.

**The reframe:**
Every constraint stack we built this year — DESIGN.md, AGENTS.md, CLAUDE.md — is a workaround for a binary file format that was never designed to be read by machines. Elyx isn't building another workaround. It's asking whether we got the file format wrong from the start.

---

#Elyx #AIDesign #DesignTools #DesignSystem #SeniorUXDesigner #FileFormat #DesignDev #AgentNative #AIDesignTools #UXDesign2026
