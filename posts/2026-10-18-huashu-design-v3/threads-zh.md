# Threads — Huashu Design V3.0 — 中文
# Oct 18, 2026 | 16:9 圖片 → x-threads-16x9-zh（與 X 共用）

---

Huashu Design V3.0 昨天發布。25k GitHub star，MIT 授權，完全在 Claude Code 裡作為 skill 運行。

不用另開 App，不用另開瀏覽器分頁。你告訴 coding agent 做一段產品發布動畫，8–12 分鐘後拿回帶 BGM 的 60fps MP4。或是 10–15 分鐘的可點擊 iPhone 原型。或是印刷級資訊圖表。一句話的事。

有意思的不是輸出品質（確實很高——README 裡每個動畫都是 skill 自己做的）。是這個工具的哲學賭注。

Claude Design 是 GUI 產品，你打開它，點、拖、編輯。Huashu Design 是 skill，介面就是你對 coding agent 說的那句話。作者的說法：「Claude Design 是更好的圖形工具，Huashu Design 讓工具這層消失。」

V3.0 把風格從 60 種擴到 84 種，但每種都配樣張——agent 在動手之前先看到做好了長什麼樣。這是品質架構設計，不只是目錄擴充。

方向生成邏輯整個重做了。六個候選方向並行生成，分三套邏輯（最佳設計師選法、現實得獎作品參照、隨機輪盤），三個最終版的篩選條件是：最強、彼此最不同、跟你過去的作品最不撞。你的歷史是主動的輸入條件，不是存檔。

我最想看到更多工具學的是它的學習機制：追蹤你過去用過的風格選擇，只存本機不上傳，下個專案開始前把你的偏好歷史讀回來。會累積的 constraint infrastructure。你的歷史在防止下一個作品雷同。

誠實的限制：輸出 HTML 不能拖進 Figma 改位置，不支援 3D / 物理動畫，空白品牌品質上限 65 分。作者直接說：「這是 80 分的 skill，不是 100 分的產品。對不願意打開圖形界面的人，80 分的 skill 比 100 分的產品好用。」

我一直在想的框架：當工具層消失進你的 agent，品質天花板就從 GUI 熟練度轉移到 constraint infrastructure。風格庫、品牌素材、學習歷史——那才是 craft 所在的地方。工具只是負責執行。
