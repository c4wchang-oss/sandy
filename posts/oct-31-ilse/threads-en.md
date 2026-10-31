# Threads Post — Ilse (EN)
# Oct 31, 2026 | Senior UX Designer POV

---

## Long-form reflection

The "agent doesn't see what I see" problem has been real since the first coding agent shipped.

You're looking at a live app. You see a button that's wrong — wrong spacing, wrong weight, wrong color. You describe it to Claude Code. The agent edits something. Not always the right file. Not always the right component. Because it's working from your words, not from the thing you're looking at.

Ilse is a toolbar that sits on top of your running React app. Click an element. Write what should change. Ilse sends your agent the exact file, the exact line, the JSX snippet, the design tokens — not a description of what you're seeing. Your agent changes the code. You see the result immediately.

The part I want to underline: simple changes that map to a CSS class happen instantly, with zero AI, zero tokens spent. The intelligence layer only kicks in when the change requires code. That's the right division of labor.

The auto-DESIGN.md generation is the detail worth tracking. Ilse reads your components and tokens, writes them to a structured file your agent reads. No manual documentation. Your components are the brief. This is the same principle as GitHub Replica's `/setup-skills` — constraint before generation — but applied at the running application layer, not the prototyping layer.

Pro is test mode. You describe a user journey. Ilse walks your real app autonomously and reports what breaks. That's automated design QA built by someone who has done enough QA to know exactly which failure modes to look for.

Honest caveats: React only, Pro is pre-sale (November delivery), and you need an existing coding agent subscription. Built by a solo founder who spent 9 years as a designer before moving to code. The problem statement is one of the most precise I've read this year.

---

## Short punchy take

The fix for "agent edits the wrong component" isn't a better prompt. It's pointing. Click the element. Ilse sends the agent what it needs to know. Three tools confirmed this pattern in 2026. Ilse does it inside your running dev app.
