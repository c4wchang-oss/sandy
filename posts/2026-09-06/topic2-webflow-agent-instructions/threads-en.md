# Topic 2: Webflow Agent Instructions Generation
# Platform: Threads | Language: English
# Date: Sep 6, 2026 | Format: Long-form reflection + short punchy take
# Source: https://webflow.com/updates/agent-instructions-generation (Sep 2, 2026)

---

## Long-form Post

I've been looking at Webflow's new Agent Instructions Generation this week.

The pitch: AI reads your live site and automatically writes your brand guidelines, design system documentation, asset rules, and CMS structure. Every agent that edits your site uses these as context.

My first reaction was "convenient." My second was "wait."

Here's the thing: it reads what's actually on your site. Not what you intended. Not what your original brand guide says. Not the decisions that were made in design review.

It reads every override. Every one-off fix a developer made the night before a launch. Every legacy component nobody ever cleaned up. Every slightly-off blue that crept in across three years of incremental updates.

All of that becomes your "brand guidelines."

And now every agent that touches your site will follow those guidelines — faithfully.

The uncomfortable truth: Agent Instructions Generation is one of the most revealing design debt tools I've encountered. Not because it's sophisticated. Because it's honest. It shows you exactly what AI will infer about your brand from your actual shipped work.

The governance question worth asking: who reviews these auto-generated instructions before agents act on them?

"It came from my site" is not the same as "it reflects our intent."

That gap — between what shipped and what was meant — is where design debt lives. And now AI will encode it into every future decision unless someone catches it first.

My recommendation: don't treat this as set-and-forget. Run it as an audit. If you're uncomfortable with what it generates, that discomfort is pointing at real work to do. Fix the site first. Edit the instructions with intent. Then let agents follow them.

The designer's new role in agentic workflows isn't brand author. It's instruction architecture reviewer.

---

## Short Punchy Take

Webflow will auto-generate your brand guidelines from your live site.

It reads what's actually there — not what you intended.

Every override. Every inconsistency. Every thing you never fixed.

Now encoded as "brand standards."

Run it as an audit, not a shortcut.
