# 2026-10-08 Daily AI UX Content Batch

### Topics Covered

**Topic 1 — GPT-6 Intelligent UI (OpenAI)**
GPT-6 with Intelligent UI rolls out globally — Free and Go tiers starting October 8. The model decides what kind of interface to give you based on your question: interactive diagrams with tappable parts, adjustable widgets, inline calculators, forms, side-by-side comparisons, mini-games, or plain text. Format decision moves from designer to model. Technically: a library of native streamable components + a compiler that renders progressively while GPT-6 continues thinking. This is inference-time UI composition — not richer templates, but model-driven format selection from question semantics. Extends the "AI IA decision-making" pattern (ChatGPT Visualize Aug 26 → Basedash Dashboard Oct 1 → conversation layer Oct 8). New frame: confident, polished, wrong IA at conversational scale; designer's role shifts from interface composer to interface evaluator at this layer. Honest caveat: we have no strong data on whether users recognize AI-composed interface misdirection or adapt their mental models to match.

**Topic 2 — ProtoPie MCP Official GA**
ProtoPie MCP officially launches as two servers with distinct jobs. Studio MCP (Pro plan): AI co-pilot inside ProtoPie Studio editing the prototype you have open — adds triggers, reads interactions, browses design library, targets elements by ID. Code MCP (Enterprise): local read-only server that converts a finished prototype to production code for any AI coding agent (Claude Code, Cursor, Codex, VS Code) via a Dev View link. Reads scene tree, layer structure, variables, trigger-response pairs, conditions, and formulas — not screenshots, the actual interaction logic. React Native added to framework support alongside React, Flutter, SwiftUI, Compose, Qt/QML, ArkTS. The read-only constraint is correct design: write access would create two sources of truth. New frame: prototype-as-specification = the interaction logic you built in ProtoPie is the authoritative machine-readable spec coding agents work from; handoff becomes machine-to-machine not human-to-human. Together with Figma MCP (visual design layer), now a complete machine-readable design specification exists. Honest caveats: Code MCP Enterprise only; code quality depends on prompts and agent; one-directional (no code → prototype round-trip); local stdio only.

### Deliverables
- X thread × 2 (EN + ZH) per topic = 4 threads
- Threads post × 2 (EN + ZH) per topic = 4 posts
- 小紅書 post × 2 (EN + ZH) per topic = 4 posts
- Images × 4 per topic (16:9 for X/Threads EN+ZH, 3:4 for 小紅書 EN+ZH) = 8 images

### New Frames Added to Memory
- Inference-time UI composition: model decides format, picks components from native library, assembles at response generation time; designer role = UI evaluator not UI composer at conversation layer (GPT-6 Intelligent UI)
- AI IA decision-making pattern now reaches conversation interface layer: ChatGPT Visualize (chart type) → Basedash (dashboard IA) → GPT-6 Intelligent UI (response format)
- Prototype-as-specification: ProtoPie Code MCP makes the interaction logic inside prototypes machine-readable for coding agents; handoff becomes structured data not explanation
- Read-only constraint as correct pipeline design: Code MCP can read but never write prototype — preserves prototype as authoritative single source of truth
- Complete machine-readable design spec convergence: Figma MCP (visual design layer) + ProtoPie Code MCP (interaction + behavior layer) = full design spec in agent-readable format
