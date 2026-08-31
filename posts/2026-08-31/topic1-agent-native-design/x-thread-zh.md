# X Thread — Builder.io Agent Native Design（中文）
**Platform:** X (Twitter)
**Date:** 2026-08-31
**Topic:** Builder.io Agent Native Design — 開源 HTML prototyping 工具，artifact 就是畫面本身
**Source:** https://www.builder.io/blog/agent-native-design-figma-alternative

---

**Tweet 1（hook）**
Handoff 的問題從來不是流程問題，是 artifact 的問題。

Prototype 是畫面的圖片，摩擦就是結構性的。

**Tweet 2**
Builder.io 八月推出了 Agent Native Design。MIT 授權，免費，不需要註冊。

你產出的東西不是 mockup，是跑在真實瀏覽器裡的真實 HTML 頁面。

**Tweet 3**
你掛上自己的 design system（Figma 檔、repo URL 或 package），他們的 Design System Intelligence 會索引你的 component、token、icon。

Agent 從你的 constraints 生成，不是 AI 的通用風格。

**Tweet 4**
這對 ideation 階段改變了什麼：

Responsive 問題、互動死角、empty state。

這些通常在 staging 才浮現，在決策早就鎖定的好幾週之後。如果是 live HTML prototype，第一週就會看到。

**Tweet 5**
Interaction model 對了：

描述畫面 → AI 生成 Alpine + Tailwind HTML → 用對話精修

可以 export HTML、ZIP、PDF 或 Figma SVG。Preview 跑的就是同一份 source。

**Tweet 6**
老實說：這不是 Figma。

複雜的 component system、design system governance、Enterprise 規模的 handoff——還沒到那個層次。

它的定位是從 ideation 到 browser 驗證的階段。

**Tweet 7**
但概念上的轉移是真實的：

當 prototype 就是交付物——同一份 HTML 最後交給 coding agent——「它能不能用？」變成第一週的問題，不是第六週的驚喜。

**Tweet 8**
Senior designer 的問題：

你還在交一張畫面的圖？還是交畫面本身？

↳ github.com/BuilderIO/agent-native（MIT，免費，開源）
