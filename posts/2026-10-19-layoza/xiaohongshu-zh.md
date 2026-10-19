# 小紅書 — Layoza — 中文
# Oct 19, 2026 | 3:4 圖片 → xiaohongshu-3x4-zh

---

**標題：** 這個開源工具給 AI agent 一個結構化的網頁設計流程（brief → 動效 → Chromium QA）

---

**正文：**

AI 設計工具的動效 brief 缺口是真實存在的問題：模型可以執行複雜的動畫——但只有在你的 brief 夠精準的情況下。Layoza 是開源的 MCP server + 19 個 agent skill，用 71 個行業適配的動效 mechanic 解決這個問題。

**Layoza 實際做什麼：**

① Site DNA 提取 — `layoza inspect . --write` → 從任何現有專案產生 DESIGN.md + BRAND.md + MOTION.md + SITE-DNA.json。先參照，再生成。

② 設計方向 — brief → 三個有明顯差異的方向（版面、字型、顏色、內容呈現、動效）——不是一個充滿自信的單一提案

③ 動效 mechanic — 71 個行業適配動畫：律師事務所 → 平靜易讀，創意代理商 → 動態強烈 hero。Library 依你的行業和強度設定選擇。

④ Chromium QA — headless 瀏覽器在 1440/768/375px：對比度失敗、裁切、重疊、焦點問題、手機選單行為、LCP/CLS、45 項 craft 評審

**支援的工具：** Claude Code、Cursor、Codex、Windsurf、OpenCode、Antigravity

**框架支援：** React、Next.js、Astro、Vue、Nuxt、SvelteKit、純 HTML/CSS/JS、WordPress（theme.json v3）、Elementor、Shopify Liquid

**4 種模式：** 全新網站 / 延伸（新增頁面）/ 改善（修正但不改品牌）/ 重新設計（新方向，帶 baseline + rollback）

**誠實的限制：**

– v0.1.3：非常早期，正式環境使用紀錄有限
– 設計方向提案 = 起點，不是對答案
– Chromium QA = 功能底線，不是 IA / UX 天花板
– 讀取已部署狀態——正式環境偏移問題仍然存在

**安裝：** `npx layoza init`

**更大的觀點：** Brief → site DNA → 設計方向 → 動效 → QA。constraint-execute-audit 的迴路現在是完整的開源流程。

#AI設計 #設計工具 #UX設計 #MCP #開源 #動效設計 #資深設計師 #網頁設計 #設計系統
