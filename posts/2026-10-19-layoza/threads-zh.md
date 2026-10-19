# Threads — Layoza — 中文
# Oct 19, 2026 | 16:9 圖片 → x-threads-16x9-zh（與 X 共用）

---

動效 brief 品質的缺口一直是這個領域的老問題，從上個月 Jitter AI 發布 Opus 5.5 後變得更明顯。模型能力現在已經超過大多數使用者的 brief 品質了。工具可以給你複雜的動效——但前提是你能用動效導演的精準度描述你要什麼。

Layoza 是一個開源的 MCP server，附帶 19 個 agent skill，剛剛發布了一個 library 等級的解法：71 個行業適配的動效 mechanic。律師事務所的 brief → 平靜、易讀的動效。創意代理商的 brief → 動態感強烈的 hero。Library 依你的行業和強度設定完成 brief 到 mechanic 的翻譯。這跟 Figma Motion 自訂風格（10月6日）是不同的解法——後者要你自己定義命名的 token；Layoza 是幫你提案 mechanic。

但 motion library 只是更大流程的一部分。完整順序：

**先提取。** 任何現有網站，`layoza inspect . --write` 抽取設計 DNA——token、字型比例、間距、元件、動效——寫入 DESIGN.md、BRAND.md、MOTION.md、SITE-DNA.json。先參照，再生成。網站延伸自身而不是被覆蓋。

**Brief 轉方向。** 新專案拿到設計刻度盤（版面、字型、顏色、內容呈現、動效的 0–10 設定值）和三個彼此有明顯差異的設計方向。不是一個充滿自信的 AI 提案——是三個方向，各自不同，讓你選。設計方向層是設計師判斷重新介入的地方。

**審計收尾。** Headless Chromium 在三種寬度（1440/768/375px）檢查每個元素的對比度失敗、裁切問題、重疊、焦點遮擋、手機選單行為（開啟、焦點鎖定、Escape 關閉）、LCP/CLS，加上 45 項 craft 評審。

Impeccable（10月11日）命名的兩階段架構——生成前的 constraint + 生成後的確定性審計——現在以針對網頁設計的開源流程形式存在了。

誠實的限制：v0.1.3，正式環境使用紀錄有限，自信心程度要打折扣。設計方向提案是起點——三個方向不等於三個對答案，行業適配的動效 library 仍是有立場的預設（哪種「平靜」適合哪家律師事務所？）。DEV Community 的競品比較文章是自家撰寫、有附屬關係揭露。另外基本前提：`inspect_site` 讀你的已部署 URL，所以它繼承了正式環境跟你設計意圖之間的所有偏移——跟 Open Inspector 和 Onefold 一樣的限制。

框架：constraint → execute → audit 現在是完整的開源流程。Brief 品質 + site DNA 提取 + 生成後的 Chromium QA。整個迴路。

`npx layoza init`
