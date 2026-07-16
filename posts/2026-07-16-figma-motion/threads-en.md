# Threads Post — Figma Motion (English)
**Format:** Long-form personal reflection, no hashtags

---

Figma Motion just shipped, and I want to talk about the part that most people are missing.

The obvious take is "designers don't need After Effects anymore." Sure, maybe. But that's not what changed my thinking.

Here's what did:

For the last decade, motion has been a second-class citizen in every design system I've worked on. Colors? Tokens. Spacing? Tokens. Typography? Tokens. Motion? A separate After Effects file, a spec doc that someone manually interpreted, and then a developer doing their best with a "it should feel fast-ish" comment.

The thing that's different with Figma Motion isn't that it has a timeline. It's that you can animate a component **once**, and that motion travels with it everywhere in the file — the same way fill styles and typography do.

That's motion becoming a *system property*, not a deliverable.

Add MCP compatibility on top of that (you can pass any animated frame directly to a coding agent, with full keyframe and timing context), and Dev Mode inspection that outputs real CSS, React, or JSON — and the whole design-to-code pipeline for motion looks fundamentally different.

In Dev Mode, every timing value, easing curve, and keyframe is readable and copyable. No interpretation. No "what did you mean by this?" The developer opens it and sees everything.

Honest caveats: still beta. Screen-to-screen transitions aren't ready. The strongest use cases right now are component animations, micro-interactions, and state changes within a single frame.

But the direction is clear. And I'm thinking about motion for the first time as a **system architecture** question — not an execution question.

The real question for any design team: if motion is now a first-class citizen with tokens and component-level propagation, are you ready to actually *govern* it? Or will you still treat every animation as a one-off decision?

That's the harder thing Figma Motion asks of us.
