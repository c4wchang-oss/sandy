# Threads Post — English
## Topic: UI Discovery — Reference library as AI brief infrastructure
## Date: October 11, 2026
## Format: Long-form personal reflection

---

Every developer has had the moment: "make it look like Linear's settings page."

That's always been the real brief. The problem was translating it into something a coding agent could actually execute — capturing the right elements from the right screen in a format the agent understands.

UI Discovery (AppMole, Oct 10) productizes that translation at library scale. 2,600+ real websites, 3,800 iOS apps, 111,000+ UI sections — each dissected into palettes, fonts, and layout patterns, each shipped with an AI-ready build prompt for Cursor and Claude Code. The MCP connection means your agent doesn't wait for you to find the reference. It browses the library and selects it.

I've been tracking reference-over-description as a recurring pattern all year.

BRDNA Sequencer translated brand DNA into agent context rather than requiring abstract style description. Stitch let you drag in a PDF and product photos rather than text-describing your visual direction. Open Inspector let you hover any production site and export the underlying design system as Markdown that Claude reads directly. Once UI 2.0 shipped its own agent harness inside the npm package so the design system installs its own brief.

UI Discovery is the same principle at library scale: the library has already done the prompt engineering. 111,000 sections, pre-translated into the format AI reads. The gap between a developer saying "like Linear's sidebar" and a structured prompt that gets the agent most of the way there — that's what this closes.

The quality ceiling question I keep returning to: reference removes ambiguity, it doesn't add judgment.

A well-executed reference to the wrong information architecture is still wrong IA. "Like Linear's settings page but for a healthcare app" references excellent visual execution and potentially bad information architecture for the actual use case. Reference is an execution tool. The IA decision — whether this is the right product structure for your user's actual task — is still yours.

The product itself is honest about the other limit: "Inspired by would read as identical to in your market." Reference and differentiation are in tension. A library of 111,000 sections optimizes for getting you to a polished execution. In crowded product categories, that's necessary but not sufficient. Your users may need to feel that your product is distinctly yours — and a reference library for Notion's sidebar doesn't give you that.

Two tools I'd use together: UI Discovery for the reference, Impeccable to audit the result against 61 deterministic quality rules. Reference quality into execution quality into floor enforcement. The brief quality gap is the real gap now. Model capability isn't.

---

*Image: 16:9 — see images/x-threads-16x9-en.jpg*
