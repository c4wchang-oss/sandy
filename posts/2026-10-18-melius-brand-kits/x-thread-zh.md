# X Thread — Melius Brand Kits — 中文
# Oct 18, 2026 | 16:9 圖片 → x-threads-16x9-zh

---

**Tweet 1（開頭）**
Melius 剛推出 Brand Kits。貼上官網 URL → agent 解析品牌 → 生成「brand anchor」文字區塊 → 畫布上後續所有生成都從這個錨點建立。

這個模型很有意思。讓我解釋底層的 UX 原則：

---

**Tweet 2**
大部分品牌治理是文化層面的。Style guide 寫一次，馬上沒人管。Review cycle 靠的是部落知識來抓違規。

Brand anchor 改變了執行模型：把規則編碼進一個文字區塊，用畫布 edge 連接到每個生成節點。constraint 變成結構性的了。

---

**Tweet 3**
Brand anchor 的格式設計得很好。不是模糊的風格指南。

具體的：色票 hex 代碼、字型名稱、攝影規則（棚拍 vs 生活感、暖色 vs 冷色、有人 vs 純產品）、造型語言、明確的 do's and don'ts。

壓縮成一個文字區塊，agent 一次就能讀完。

---

**Tweet 4**
Canvas edge 模型讓這個機制跑得起來。

把 brand anchor 放在畫布上作為文字節點。拉 edge 連到你的圖片和影片生成節點。Agent 每次呼叫時自動讀它作為 context。

視覺化的 constraint 路由。你可以直接看到哪些生成有品牌約束。

---

**Tweet 5**
MCP 整合是治理的答案。

如果你用 Claude + Melius MCP，Claude 從你的 project file 讀 brand.md，自動注入到每個畫布。不需要複製貼上，不需要手動連接。

跟著 AI assistant 走的品牌 constraint。

---

**Tweet 6**
還沒解決的問題：brand anchor 活在 canvas 層面。

不同畫布之間不會自動攜帶。每個新畫布 = 重新開始，或再貼一次 anchor。

這是每個 AI 創意工具都有的 session boundary 問題。MCP 是繞路，不是解法。

---

**Tweet 7**
這個 pattern 現在很清楚了。

Automo（10/13）——品牌 constraint 經由 MCP 攜帶到 Claude。Linearity AI（10/17）——brand kit 是品質天花板，不是模型。Melius Brand Kits（10/17）——URL → 結構化 brand anchor → edge 連接的 constraint。

三個工具，同一個洞見：brand kit 品質 > 模型能力。

---

**Tweet 8（CTA）**
重新框架：

品牌治理以前靠 review cycle 執行。現在被編碼進文字區塊，用 canvas edge 連接到生成節點，由 MCP server 自動注入。

從流程層治理 → 工具層治理。值得持續關注。
