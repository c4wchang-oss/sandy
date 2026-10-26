# Threads 文章 — Framer MCP（繁體中文）
# Date: Oct 26, 2026 | Tool: Framer MCP | Platform: Threads
# Image: images/topic1-x-threads-16x9-zh.svg

---

Framer 上週推出了 MCP，聲勢不大。媒體的報導大多停在「可以從 Claude 編輯你的網站」這個角度。更值得注意的是它對整體弧線的意義。

Web 平台 MCP 的時間軸在 46 天內收斂完成。Webflow 在 9/6，Elementor（WordPress）在 9/23，Framer 在 10/22。每個主要 web CMS 和網站建構工具現在都有 agent-native 介面。每一個都跑了相同的路徑：先建 constraint document，再建 Skills，最後開 MCP。相同順序，獨立決策，收斂路徑。當三個互相競爭的平台獨立選擇了相同的架構，那就不再是功能了，是基礎建設。

Framer 的實作在信任架構上做對了。變更在你明確說「publish」之前都停留在草稿狀態。你可以在 branch 上工作，跟 main 比較，確認後再合併。Claude 也加了一層——它在每個動作前詢問確認，你可以永久設定 publish 為「Needs approval」。當 agent 有存取線上網站的權限時，閘道比功能更重要。他們從第一天就把這件事做對了。

經濟面值得單獨說。Framer MCP 不從 Framer 扣費，改算在你的 Claude Pro 或 ChatGPT Plus 方案。你的 Framer credit 不動。對於已有 AI 訂閱的團隊，這是支出整合而不是增加行項。DesignOps 預算的論述變得更簡單。

兩個真實的限制：目前不支援多語系，意思是有 i18n 需求的團隊暫時繼續用 local CLI。而且你需要明確的 prompt——說出頁面名稱、section、component。Framer 說外部 agent 看到的 canvas 上下文比內建 agent 少。「讓它看起來更好」會給你一些東西，「把 pricing 頁面 hero section 的標題改成 X」才能給你真正想要的。

我一直在想的是從 chat 管理 CMS 的能力。整理一個本地 case study 資料夾，準備成 CMS schema，匯入。在 Framer 關閉的情況下。在你使用其他工具的時候。把 Ahrefs 或 Notion 接到同一個 agent session，在一個 context window 裡完成所有事。這不是 demo 用的工作流程。這是真正改變週一早上的工作方式。

品質上限：你 Framer 專案裡的 Skills。如果你還沒把 design system、品牌語調和 CMS 結構記錄成 Skills，agent 就是用預設值工作。MCP 開了門，你放在門後面的東西決定一切。

預覽期間所有方案免費。
