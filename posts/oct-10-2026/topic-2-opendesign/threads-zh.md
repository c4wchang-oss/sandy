# Threads Post — 繁體中文
## 主題：OpenDesign — BYOK 設計 workspace，開源的 vendor lock-in 解答
## 日期：2026 年 10 月 10 日
## 格式：長篇個人反思

---

上週 Anthropic 把 Claude Design 整合進所有對話後，顯而易見的問題是：如果你的團隊不是在 Anthropic 生態系上，這看起來是什麼樣子？

OpenDesign 本週推出了協作 workspace，給出了答案。

OpenDesign 是開源的、Apache-2.0 授權、local-first，並圍繞著 BYOK 設計：帶上你自己的 agent。Claude Code、Codex、Cursor、Gemini CLI、Grok、DeepSeek、Kiro、Kilo、Qwen、OpenCode、Mistral、GitHub Copilot CLI——17 個 adapter。在它們之間切換是改配置，不是換產品。

工作流程在功能上與 Claude Design 類似：選設計系統，描述你要建什麼，agent 寫出可用的 HTML prototype，你即時預覽，分享給團隊，收集留言，把留言送回 agent 修改，然後匯出或交付。本週的團隊 workspace 新增了：共享專案、共享設計系統、共享 skills——同一個 OpenDesign Cloud 帳號上的每個人都可以存取。

設計系統：150+ 個開源系統，或者從網站 URL、GitHub repo、Figma 檔案生成一個。DESIGN.md 是可攜帶格式——就是 Vercel 引入的那個、Onefold 自動生成的那個、Claude 原生讀取的那個。OpenDesign 也讀它。

我想誠實地說明取捨。Claude Design 幾乎零設定摩擦——它內建於每個 Claude 對話。OpenDesign 需要你已經設定好一個 coding agent。對不熟悉本地 agent 設定的團隊來說，這不是小差異。

但價值主張不同。Claude Design 是無縫的、Anthropic 原生的。OpenDesign 是可攜帶的、agent 無關的。對已經投資 Cursor 或 Codex 工作流程的團隊——不想讓設計工作流程被鎖定在另一個 provider——可攜帶性才是真正的論據。

這引出了一個更深的問題：幾個月來我們一直在建立多 agent 工作流程。但沒有人認真研究過，當你想切換主要 AI provider 時會發生什麼。BYOK 設計意味著你的工作流程是可攜帶的。那才是真正的價值——不是現在的節省，而是未來的靈活性。

---

*圖片：16:9 — 見 images/x-threads-16x9-zh.jpg*
