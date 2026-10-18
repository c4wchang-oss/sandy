# 小紅書 — Melius Brand Kits — 中文
# Oct 18, 2026 | 3:4 圖片 → xiaohongshu-3x4-zh

---

**標題：** 品牌治理變成結構性問題了（不再只是 review cycle 的事）

---

**正文：**

Melius 推出了 Brand Kits。這個機制跟我看過的所有「生成符合品牌風格」工具都不一樣。

**運作方式：**

① 貼上官網 URL（或上傳品牌規範）
② Agent 解析品牌 → 生成一個「brand anchor」Markdown 文件
③ 把 anchor 放到畫布上作為文字節點
④ 從 anchor 拉 edge 連到每個圖片 / 影片生成節點
⑤ 每個生成都自動把 anchor 讀進 context

**Brand anchor 裡面有什麼：**
– 色票（hex 代碼，各色什麼情境使用）
– 字型（實際的字型名稱 + 層級規則）
– 攝影風格（棚拍 vs 生活感，暖色 vs 冷色）
– 造型語言和視覺元素
– 每種使用情境的明確 do's and don'ts
– 品牌語氣，含例句

**MCP 選項：**
透過 MCP 連接 Claude → 指向 brand.md → Claude 自動把品牌 context 注入它建的每個畫布。不用在 session 之間手動複製貼上。

**誠實的限制：**
Brand anchor 活在 canvas 層面。新畫布 = 全新 context。只能複製貼上或靠 MCP。跨專案的品牌一致性還是設計師的責任。

**我一直在追蹤的更大 pattern：**
– Automo（10/13）：brand kit 透過 MCP 攜帶到 Claude
– Linearity AI（10/17）：brand kit 品質 = 輸出天花板
– Melius Brand Kits（10/17）：URL → 結構化 anchor → edge 連接的 constraint

AI 創意生產的關鍵變數現在是 brand kit 品質。不是模型，不是 prompt。

品牌治理：review cycle → 文字區塊 → canvas edge → MCP 注入

#AI設計 #品牌設計 #設計系統 #UX設計 #資深設計師 #品牌策略 #AI創意
