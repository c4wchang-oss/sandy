# 主題二：Google A2UI 1.0
# 平台：小紅書
# 語言：繁體中文
# 日期：2026 年 11 月 21 日

---

## 標題
Google A2UI 1.0：你的 design system 現在是合約，不是建議文件

---

## 正文

Google 在 11 月 11 日推出了 A2UI 1.0，大部分 UX 設計師都錯過了。來解釋一下為什麼這是這個月最重要的 design system 相關進展。

**它是什麼：**
一個 agent 生成 UI 的開放 protocol。Agent 描述「要顯示什麼」，你的 app 用自己 native 的 design system component 渲染。

**最關鍵的部分：**
Agent 只能放你 catalog 裡登記的 component，完全無法寫 HTML，無法 override CSS，不能「自創一個導航模式」。

**Catalog 怎麼運作：**
1. 你定義 component 類型、屬性和巢狀規則
2. Agent 只能從你的 catalog 裡選（選不在 catalog 裡的東西 = parse error）
3. App 用你真正的 native component 渲染
4. 視覺呈現（顏色、字型、間距）由你的 design system renderer 決定，不是 agent 決定

**A2UI 1.0 的新功能：**
- 雙向 function call：widget 直接呼叫 agent backend，不需要重新 inference（互動表單、即時價格查詢等）
- Accessibility 寫進 spec：renderer 預設必須對應 ARIA、SwiftUI semantics、Jetpack Compose
- 一個 surface 可以支援多個 catalog（DS catalog + data viz catalog 混用）
- 巢狀規則：allowedParents / allowedChildren 強制執行正確的巢狀結構
- 支援 web（React/Angular/Lit）、iOS（SwiftUI）、Android（Jetpack Compose）、Flutter

**為什麼 senior UX designer 應該在意：**

我們花了好幾個月在寫 AGENTS.md、GUI.md、Library Guidelines 試圖約束 agent 對 design system 的使用行為。A2UI 把這件事做到 protocol 層。

差異是：「請使用正確的 component」vs「你在架構上無法使用未登記的 component」。

Convention vs enforcement。

**Accessibility 的角度：**

當 accessibility semantics 是 protocol spec 的一部分——不是 guideline，不是 checklist——每一個 agent 生成的畫面預設就是 accessible 的。Renderer 自動對應 ARIA/SwiftUI/Jetpack Compose。

這把 accessibility 的討論從「我們有沒有 check 過？」變成「它在 protocol 裡嗎？」

**老實說的 caveat：**

Catalog quality = AI output quality ceiling。

如果你的 component library 有 400 個 variant，命名不一致、使用規則不清楚、巢狀約束沒有文件——A2UI 會繼承這些債並在 scale 上強制執行。

A2UI 不修復你的 design system，它放大它。

**給設計團隊的問題：**

你的 component library 文件精確到可以當機器可讀的合約用嗎？你能夠為每個 component 正確定義 allowedParents 和 allowedChildren 嗎？

這才是現在真正重要的 design systems 工作。

Atlassian、Bloomberg、ByteDance 已經在用了。

---

#ux設計 #設計系統 #AI設計 #google #a2ui #ui設計 #設計師日常 #accessibility #designsystem #productdesign
