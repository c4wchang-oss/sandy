# 小紅書 — Huashu Design V3.0 — 中文
# Oct 18, 2026 | 3:4 圖片 → xiaohongshu-3x4-zh

---

**標題：** 這個開源 skill 讓我的 Claude Code 變成了設計工作室（含 60fps 動效輸出）

---

**正文：**

Huashu Design V3.0 剛發布。GitHub 25k star，MIT 授權，完全以 skill 的形式跑在 Claude Code / Cursor / Codex 裡。

實際能做什麼：

① 一句話 → 可點擊的 iPhone 原型（10–15 分鐘，真機身比例，可以真的點）
② 一句話 → 動效影片導出（60fps MP4，帶 BGM，8–12 分鐘）
③ 一句話 → 印刷級資訊圖表（PDF / PNG / SVG）
④ 5 維度專家評審（雷達圖 + Keep / Fix / Quick Wins）套在任何設計上

**V3.0 真正新的東西：**

① 84 種設計風格（從 60 種擴充），每種都有樣張——agent 先看到目標再動手
② 方向生成邏輯重做：6 個候選方向並行生成（三套邏輯），3 個最終版依「最強 × 彼此最不同 × 跟你過去作品最不撞」篩出
③ 學習機制——追蹤你的風格選擇，只存本機不上傳，下個專案開始前讀回來
④ design_lint.py——自動檢查裂圖、對比度不足、console 報錯

**誠實的限制：**
– 輸出 HTML，無法拖進 Figma 改位置
– 不支援 3D 或物理模擬動畫
– 空白品牌從零的品質上限在 60–65 分

**安裝：** `npx skills add alchaincyf/huashu-design`

**更大的觀點：** 當你的設計工具是 coding agent 裡的一個 skill，品質天花板就從 GUI 熟練度轉移到你建的 constraint infrastructure。風格庫、品牌素材、學習紀錄——craft 現在住在那裡。

#AI設計 #ClaudeCode #設計工具 #UX設計 #資深設計師 #動效設計 #開源 #設計Skill
