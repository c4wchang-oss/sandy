# Threads — Figma Code Layers (English)
**Format:** Long-form personal reflection, no hashtags, conversational

---

I've thought a lot about the handoff problem in design.

Not the tooling version of it — "how do we export specs cleanly" — but the structural version: design and engineering have always been two parallel tracks working toward the same product, and handoff is the moment they're forced to synchronize. Every synchronization is a translation. And translations always lose something.

Figma Code Layers, which is in closed beta right now, is the most aggressive attempt I've seen to just... eliminate the translation.

The idea is blunt: code is a layer type on the canvas. You clone a repo, it lands on your canvas as a running layer. Your teammates can look at it, leave comments, prompt against it. You can extract it back into editable Figma design layers, refine the visual details, push changes back to the code layer, and when you're happy, push back to the repo.

Same artifact. Both teams. One canvas.

I don't think this is going to be smooth for most teams. The governance questions alone are significant — who owns a change made to a code layer in a Figma file? Who reviews that before it goes back to the repo? What does code review look like when it happens in a design tool? These aren't UX questions. They're organizational questions. Teams that haven't done the work to align on their design/engineering collaboration model are going to find Code Layers chaotic before they find it useful.

But for teams that are aligned, the upside is real. The handoff moment stops being a document exchange and becomes a canvas edit. A designer can work directly on a production component — not a replica of it, the component itself — and communicate with precision that no spec sheet ever could.

What I keep thinking about is the platform play underneath this. If engineers start doing code review in Figma rather than in GitHub PRs, Figma becomes infrastructure for the engineering process, not just the design one. That changes Figma's leverage in the stack enormously.

The canvas absorbing code isn't a feature. It's a thesis about where the source of truth should live.

I'm genuinely unsure whether that thesis is right. But I'm paying close attention to who gets access to the closed beta and what they build.

