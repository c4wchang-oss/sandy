# 主題二：Google A2UI 1.0
# 平台：X（Twitter）Thread + Threads
# 語言：繁體中文
# 日期：2026 年 11 月 21 日
# 來源工具：Google A2UI 1.0（2026 年 11 月 11 日）

---

## X THREAD

**[Tweet 1 — Hook]**
Google 在 11 月 11 日推出了 A2UI 1.0。

大部分設計師都滑過去了。

不應該。這是 design system constraint 的討論終於移動到 protocol 層——而這個差異很重要。

🧵

---

**[Tweet 2]**
A2UI 實際上是什麼：

一個 agent 生成 UI 的 protocol。Agent 描述「要顯示什麼」，app 用自己的 native component 渲染。

Agent 無法寫 HTML，無法 override 你的 CSS，只能從你明確登記在 catalog 裡的 component 裡選。

---

**[Tweet 3]**
Catalog 就是 constraint：

你定義一個 component catalog——一份 agent 和 renderer 之間的合約。每個 component 類型、每個屬性、每個允許的巢狀規則都在裡面。

如果某個 component 沒在 catalog 裡，agent 就無法生成它。這不是 convention，這是 parse error。

---

**[Tweet 4]**
來對比一下——我們花了好幾個月在寫 AGENTS.md、GUI.md、Library Guidelines，試圖告訴 agent 要怎麼使用我們的 design system。

A2UI 把這件事做到 protocol 層。

差異是：「請遵守這些規則」vs「你在架構上無法違反這些規則」。

---

**[Tweet 5]**
Semantic hints，不是 visual properties：

Agent 傳送的是 `usageHint: "h1"`，不是 `fontSize: 24, color: "#FF0000"`。

由 renderer 根據你的 design system 決定視覺呈現方式。品牌一致性是架構保證的，不是靠希望 agent 有讀你的 style guide。

---

**[Tweet 6]**
Accessibility 是 spec 的一部分。

Renderer 必須對應平台的 accessibility API：web 的 ARIA、Flutter 的 Semantics、iOS 的 SwiftUI accessibility。

當這是 protocol 層的規定，它就不再是 checklist 上的一項了——它是底線。「Accessibility tree = agent interface」這個 frame 終於有了 production 層級的答案。

---

**[Tweet 7]**
老實說的 caveat：

Catalog quality = output quality ceiling，跟每一份 constraint document 的問題一樣。

如果你的 component library 有 400 個 variant，命名不一致、使用規則不清楚，你的 A2UI catalog 會直接繼承這些債。

A2UI 強制執行 governance，它不修復 governance。

---

**[Tweet 8]**
A2UI 對 senior designer 提出的問題：

你的 design system 文件精確到可以當合約用嗎？你能夠為每個 component 正確地定義 allowedParents 和 allowedChildren 嗎？

這才是現在真正重要的 design systems 工作。

支援 React、Angular、Lit（web）· SwiftUI（iOS）· Jetpack Compose（Android）· Flutter。
開源。Atlassian、Bloomberg、ByteDance 已經在用了。

---

## THREADS POST

**[長文反思]**

Google 在 11 月 11 日推出了 A2UI 1.0，大部分設計師都滑過去了。

簡短版本：這是一個開放 protocol，AI agent 描述「要顯示什麼」，你的 app 用你自己的 native component 渲染。Agent 從你定義的 catalog 裡選，如果某個 component 沒登記，agent 就無法生成它。

這不是 convention，這是 protocol 層的 constraint。

我們花了好幾個月在寫 AGENTS.md、GUI.md、Library Guidelines 試圖告訴 agent 要怎麼用我們的 design system。A2UI 把這件事做到結構層。「請遵守這些規則」和「你在架構上無法違反這些規則」之間的差距，就是文件和執行之間的差距。

Semantic hints，不是 visual properties：agent 傳送 `usageHint: "h1"`，不是 `fontSize: 24`。Renderer 根據你的 design system 決定視覺呈現。品牌一致性是架構保證的。

Accessibility 在 spec 裡面。Renderer 必須對應 ARIA、SwiftUI semantics、Jetpack Compose。當它是 protocol 的一部分，它就是底線，不是 checklist。

老實說的 caveat：catalog quality = output quality ceiling，跟每一份 constraint document 的問題一樣。如果你的 component library 本身不一致，A2UI 會在 scale 上繼承並強制執行這個不一致。它不修復 governance，它執行 governance。

A2UI 對 senior designer 提出的問題：你的 design system 文件精確到可以當合約用嗎？你能夠為每個 component 正確定義 allowedParents 和 allowedChildren 嗎？

這才是現在真正重要的 design systems 工作。

---

**[短版 punch — Threads 變體]**

Google A2UI 1.0：agent 只能放你 catalog 裡登記的 component，無法寫 HTML，無法 override CSS，無法自創 UI 模式。

這是 AGENTS.md → GUI.md → Library Guidelines 的討論從文件移動到 protocol 執行的時刻。

老實說的 caveat：如果你的 design system 文件很薄，A2UI 在 scale 上執行的就是薄的輸出。constraint 天花板的問題，現在在架構層。

對你的團隊的問題：你的 component library 文件精確到可以當合約用嗎？
