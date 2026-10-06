# Topic 2: Figma Motion Custom Styles — Threads Post (English)
**Date:** 2026-10-06
**Platform:** Threads
**Format:** Long-form personal reflection
**Image:** figma-motion-x-threads-en.jpg (16:9)

---

A quiet Figma Motion update shipped on September 30 that I think is more consequential than it looks.

Custom animation styles. You save an easing curve, a duration, variable-backed properties — as a named, reusable style. Publish it to your library. Apply it across every file in your organization, exactly like you've been applying color styles and text styles for years.

Here's why this feels like a meaningful shift to me: design systems have had named, shareable tokens for color, typography, spacing, and component variants for over a decade. Motion was always the exception. Easing curves lived in someone's Notion doc, or in a comment in a Storybook file, or — more often — nowhere at all. You had to describe animation in prose to developers or hope they could eyeball a Figma prototype. Nobody could apply it programmatically.

That starts to change now.

The MCP and Skills integration is where this gets interesting from an AI workflow perspective. Figma says animation styles can be applied automatically by its own agents or passed to coding agents via MCP or Skills. In practice, this means your named motion styles are now readable inputs to the same AI pipeline you're already using for design. The brief quality gap for animation — which I've been watching since Jitter AI upgraded to Opus 5.5 and the model started exceeding most users' motion brief quality — is now partially addressable from the system side, not just from the prompt side.

The audio timeline update is the one I genuinely didn't expect. Drag an audio file onto any clip, trim and reposition it against your keyframes, export with MP4 or WebM. Sound design now lives inside the same timeline as motion design. That's an IA decision that's easy to underestimate: when audio and motion are in the same tool, the brief for both can be part of the same annotation, the same review, the same design decision. That's a different kind of documentation than "send this to the sound designer."

Lottie and dotLottie export closes the handoff story for web animation the same way component specs close handoff for UI. Dev Mode can inspect the full timeline and copy animation code as CSS, JSON, or React. The motion pipeline is now the same shape as the component pipeline.

Honest caveats: open beta means features may still change. Manually animating never consumes AI credits, but agent-applied motion does — so governance applies here too. And the motion style library quality ceiling is real: if your easing curves aren't intentional, naming them doesn't make them better.

The governance question nobody has answered yet: who owns the motion style library? In most organizations, color is owned by brand, typography is owned by design systems, and spacing is owned by whoever set up the grid. Motion lives in a gap between brand (personality, timing) and engineering (performance, accessibility). The Figma update doesn't resolve that question. It just makes it unavoidable.

Motion DesignOps is now a real job. For some teams it's been a real job for a while — they just didn't have the tools to enforce it. Now they might.
