# Threads Post — DesignMD MCP（繁體中文）
# 2026年11月1日 | Senior UX Designer 視角

---

## 長篇反思

DesignMD 在10月27日推出了 MCP server 和 Remix 功能。表面上：你的 AI 工具現在可以搜索一個有數千個真實文件的 design system 資料庫、並排比較兩個系統、或從任何網站 URL 生成 DESIGN.md——不用離開你的編輯器。

Remix 功能才是關鍵。你從 Discover 資料庫挑一個真實的文件化 design system，調整顏色、字型、圓角、間距，存成自己的 DESIGN.md，還有可分享的連結。你不是從零開始寫，你是在 fork 真實的、有結構的設計工作。

我從九月開始追蹤 DESIGN.md 這個 arc。一開始是 Vercel 提出讓團隊自己寫的格式——用結構化的方式把 design system 告訴 AI agent。然後工具開始自動生成它，然後它變成在 Claude、Vercel、OpenDesign、GitHub Replica 之間可攜帶的格式。現在它是一個有社交機制的可瀏覽資料庫：發現、比較、remix、fork、發佈。

這是每個 developer 格式走向基礎設施的同一條路。npm package 一開始也不是可瀏覽可 fork 的。

誠實的部分：存取不等於理解。當你的 agent 搜索 DesignMD 並把一個真實的 design system 拉進情境，它拿到的是設計決策的輸出——token、間距、顏色值。不是這些決策背後的思路。為什麼是這些值、針對什麼受眾、在什麼情境——那還是你要自己寫的文件。

起點改善了，brief 品質的問題不會消失，它只是轉移了。問題變成：你從 remix 的系統保留什麼、覆蓋什麼、能不能說清楚為什麼？那還是設計判斷，不是資料庫問題。

---

## 短句精華

DesignMD MCP 讓 DESIGN.md 從你寫的一個檔案，變成你瀏覽、fork、分享的資料庫。真實 design system 的存取現在只需要一個 MCP 呼叫。它背後的思路，還是你要記錄的。
