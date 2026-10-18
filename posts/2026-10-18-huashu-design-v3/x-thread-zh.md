# X Thread — Huashu Design V3.0 — 中文
# Oct 18, 2026 | 16:9 圖片 → x-threads-16x9-zh

---

**Tweet 1（開頭）**
Huashu Design 剛突破 25k GitHub star，同時發布 V3.0。

這是一個裝在 Claude Code 裡的設計 skill。打一句話，拿回可點擊原型、動效輸出或資訊圖表。不需要開任何 GUI。

V3.0 教了我一件關於設計工具走向的事：

---

**Tweet 2**
大部分 AI 設計工具都在賭 GUI。

Huashu 賭的是相反的方向：讓工具層消失。你不開 App，你告訴 coding agent，skill 自己跑。

Claude Design（GUI）vs Huashu Design（skill）。兩個都對，只是不同的賭注。

---

**Tweet 3**
V3.0 把設計風格從 60 種擴充到 84 種——每種都附一張樣張。

Agent 在動手之前先看到「做好了長什麼樣」。

這不只是風格庫，這是內建在工具裡的品質底線。

---

**Tweet 4**
方向生成的邏輯整個重做了。

六個候選方向並行生成（三套邏輯：最佳設計師選法 / 現實得獎參照 / 隨機輪盤）。最後三版的挑選條件：最強、彼此最不同、跟你最近的作品最不撞。

你的歷史紀錄在防止下一個作品雷同。

---

**Tweet 5**
沒人在討論的部分：學習機制。

它追蹤你做過什麼、用過什麼風格選擇——只存在本機，不上傳。下一個專案開始之前，它把你說過的品味偏好讀回來給你。

會隨著時間累積的 constraint architecture。

---

**Tweet 6**
動效設計現在是真的了。

Stage + Sprite 時間片段模型。60fps 插幀。帶 BGM 的 MP4 導出。每件 8–12 分鐘。

不是 Framer Motion 等級的動畫——但足夠做發布序列、產品解說、和你原本會跳過不做的動態簡報。

---

**Tweet 7**
誠實的限制：
– 輸出 HTML，不能拖進 Figma 改位置
– 不支援 3D / 物理 / 粒子動畫
– 完全空白的品牌從零 = 60–65 分

作者自己說：「這是 80 分的 skill，不是 100 分的產品。對不願意打開圖形界面的人，80 分的 skill 比 100 分的產品好用。」

這就是設計哲學。

---

**Tweet 8（CTA）**
我一直回想的那個框架：

當你的設計工具變成一句話，品質天花板就不再是 GUI 了。而是你建立的那些 constraint——風格庫、品牌素材、學習歷史。

工具消失，craft 留下來。

安裝：npx skills add alchaincyf/huashu-design
