# Xiaohongshu Post — Emergent Visual Edits (EN)
## Sep 17, 2026 | Image: topic2-xiaohongshu-en.png (3:4)

---

**Title:** AI app builders finally figured out what every designer already knew: click the thing you want to change

---

For two years, every AI app builder forced you to describe spatial intent in words. Write "make the button blue." Hope it picks the right button.

Emergent just changed that with Visual Edits — and the same pattern appeared at Bolt.new two weeks ago. Two tools, same conclusion.

Here's how it works, why the UX is correct, and what's still missing:

**1/ What Visual Edits actually does**
Click any element in your app preview → panel opens → edit text, color, borders, layout, or type the change in plain words. Each edit adds to a queue. Review the queue (undo/redo any item). When it looks right, hit Apply. Agent makes all changes at once.

**2/ Why queue-before-apply is the correct UX call**
Applying changes one at a time creates a debugging loop: fix one thing → something else shifts → describe that → another thing moves. Queue → batch commit → review → apply clean.
This is how code review works. Same principle for visual editing.

**3/ The right mental model for AI builders**
Chat → layout decisions ("make this a two-column section")
Visual Edits → precision refinements ("this heading is too large, the CTA needs to be bolder")
Different granularity. Different mode. Know which to reach for.

**4/ Why this pattern is converging across tools**
Bolt.new (Sep 6) and Emergent (Sep 16) both landed here independently. Lovable, Replit, and Vercel likely next within 6 months. The new baseline for AI app builders isn't "generates UI" — it's "lets you refine it."

**5/ What's still missing**
Drag-to-reorder spatial elements, responsive breakpoint preview, component constraints. Text + styling is the right first scope. Spatial manipulation comes next.

**Senior UX take:**
The gap between "almost right" and "right" in AI-built interfaces is a direct manipulation problem, not a prompt problem. Shneiderman wrote this in 1982. We're just rediscovering why it matters in 2026.

Use Visual Edits during client review sessions — queue all notes live, apply once. Clients see immediate results, you avoid the serial prompt-fix loop.

---

#AIDesign #UXDesign #AIAppBuilder #ProductDesign #DirectManipulation #Emergent #BoltNew #DesignThinking #PrototypingTools
