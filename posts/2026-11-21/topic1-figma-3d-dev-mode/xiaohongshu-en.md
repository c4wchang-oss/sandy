# Topic 1: Figma 3D Transforms + Dev Mode Agent
# Platform: Xiaohongshu (RED / 小紅書)
# Language: English
# Date: Nov 21, 2026

---

## POST TITLE
Figma shipped native 3D + a Dev Mode agent. Here's the pipeline change that matters.

---

## POST BODY

Figma released two updates this month that together compress a workflow that used to require multiple tools. Here's what changed and what to watch out for.

**3D transforms (Nov 12 — open beta)**

A non-destructive effect you apply to any layer: vector, image, frame, component, or text. Rotate on X/Y/Z, set depth (Z-axis). The original layer stays editable underneath. Shaders stack on top.

The critical part: 3D transforms map directly to CSS — translateZ, perspective, transform-style. Dev Mode shows you the exact values to hand off.

**What this replaces:**
- 3D mockups done in Cinema 4D or After Effects
- Video renders for stakeholder spatial review
- Manual CSS annotation explaining rotation values to engineering

**The new pipeline:**
1. Design the 3D scene in Figma (on-canvas handles + live preview)
2. Animate with Figma Motion — keyframe rotate X/Y and depth
3. Dev Mode copies the exact CSS transform values
4. Coding agent reads everything via Figma MCP — 3D effects included

**Figma agent in Dev Mode (Nov 19)**

The Figma agent is now also in Dev Mode. Use it to inspect designs, compare versions across releases, get code snippets for specific layers, and download assets in bulk.

This closes the handoff loop. Design agent builds the scene. Dev Mode agent explains it.

**5 things to know before you use it:**

1. "Keep nested layers 3D" on a parent frame = no opacity, blend modes, or clip content on that parent — plan your layer structure first
2. 3D transforms + shaders stack together (non-destructive effects can combine)
3. The Figma agent can compose full 3D scenes and animate them from a single prompt
4. Depth = translateZ in CSS. Perspective effect = CSS perspective property
5. Full seat required (edit access to the file)

**The story that reframes how to think about this:**

Figma's own motion designer needed 3D card layout logic — grid, helix, ring, scatter — for dozens of elements. He asked the Figma agent to build a plugin. The agent wrote it. He used it.

That's the frame. Not "AI designed for me." "I described a tool I needed and got it."

Tool authorship is becoming the senior UX designer's most important new skill.

---

#figma #uxdesign #designtools #3ddesign #figmatips #aidesign #ux #uiux #designsystems #productdesign
