# X Thread — Layoza — 中文
# Oct 19, 2026 | 16:9 圖片 → x-threads-16x9-zh

---

**Tweet 1（開頭）**
給 AI 設計工具的動效 brief 品質，至今仍是個品味問題。

Layoza 剛剛發布了 71 個以行業特性為基礎的動效 mechanic。

律師事務所的網站拿到平靜、易讀的動畫，創意代理商拿到動態感強烈的 hero。Brief 決定 mechanic，不是你的個人品味。

---

**Tweet 2**
Layoza 是開源的 MCP server + 19 個 agent skill，用於 AI 驅動的網頁設計。

完整流程：
→ 提取現有網站的 DESIGN.md + BRAND.md + MOTION.md
→ Brief → 三個設計方向
→ 行業適配的動效 mechanic
→ Headless Chromium QA

MIT 授權。支援 Claude Code、Cursor、Codex、Windsurf。

---

**Tweet 3**
Site DNA 提取是正確的起手式。

任何現有專案：`layoza inspect . --write` → token、字型比例、間距、元件清單、動效——全部寫入 DESIGN.md、BRAND.md、MOTION.md、SITE-DNA.json。

先參照，再生成。延伸而非覆蓋。

---

**Tweet 4**
設計方向層是我沒有看過用這種方式做的。

Brief → 0–10 設計刻度盤 + 三個設計方向，在版面、字型、顏色、內容呈現、動效上各有不同。

三個方向——一個方向永遠不夠。一個方向加上 AI 語氣肯定的表達，才是失敗的配方。

---

**Tweet 5**
動效 mechanic：71 個行業適配的 hero、section、micro 互動動畫。

選你的行業和強度。律師事務所 → 平靜易讀。創意代理商 → 動態強烈。Library 幫你完成 brief 到 mechanic 的翻譯。

這是動效 brief 品質缺口的系統性解答。

---

**Tweet 6**
Chromium QA：headless 瀏覽器在 1440/768/375px 測試。

逐元素對比度、裁切、重疊、焦點遮擋問題、手機選單（開啟、焦點鎖定、Escape 關閉）、LCP/CLS，加上 45 項 craft 評審。

這是功能底線，不是 IA 天花板。知道這個差別很重要。

---

**Tweet 7**
誠實的限制：
– v0.1.3：非常早期，正式環境使用紀錄有限
– 設計方向提案需要你的品味評估——三個方向不等於三個對答案
– Chromium QA 抓技術失敗，抓不住錯誤 IA 或受眾不符
– DEV Community 的競品比較文章是自家撰寫（有附屬關係揭露）

---

**Tweet 8（CTA）**
框架是這樣：

Impeccable（10月11日）是生成後的 Rust 審計，Layoza 在同一個流程裡加入了生成前的設計方向 + 動效 mechanic。

Brief → site DNA → 設計方向 → 動效 → Chromium QA。開源。MIT。

`npx layoza init`
