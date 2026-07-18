# Threads Post — Google Stitch + DESIGN.md (English)
**Format:** Long-form personal reflection + punchy take
**Tone:** Thoughtful, no hashtags, more reflective than X thread

---

Google Stitch shipped a big update this week — infinite canvas, voice input, a full Agent Manager. The demos are genuinely impressive. But I've been thinking about something much smaller: a markdown file called DESIGN.md.

Here's the problem I've watched teams fight for years. You define a design system. Tokens, components, type scale, spacing, the whole architecture. Then an AI tool generates a screen. And it arrives with every value hardcoded — colors as hex, sizes as pixels, nothing bound to anything you built. Every AI-generated output is a direct attack on your design system's structure.

DESIGN.md is Google's answer to that. It's a plain-text file that encodes your entire design system in a format AI can read. You write it once. Every Stitch project references it. Every generated screen is constrained by it. You can version-control it, export it, import it across projects, and — through the Stitch MCP server — send it to Cursor, Claude Code, or Gemini CLI so your design system rules travel to your coding agents too.

This is the thing I keep telling teams: the problem isn't that AI can't design. The problem is that AI doesn't know what it's not allowed to do. DESIGN.md is the file that tells it.

It's not a feature. It's a file format proposal. And if it gets adopted broadly — by other design tools, by IDEs, by agents — it could become what package.json is to the JavaScript ecosystem: the machine-readable contract that every tool in your stack knows how to read.

The "vibe design" stuff will evolve and get rebranded every 18 months. A common design system file format compounds. Those are very different things.

