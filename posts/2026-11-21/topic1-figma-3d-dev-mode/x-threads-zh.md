# 主題一：Figma 3D Transform + Dev Mode Agent
# 平台：X（Twitter）Thread + Threads
# 語言：繁體中文
# 日期：2026 年 11 月 21 日
# 來源工具：Figma 3D transform（11 月 12 日 open beta）+ Figma agent in Dev Mode（11 月 19 日）

---

## X THREAD

**[Tweet 1 — Hook]**
Figma 推出了 native 3D。

大家都在討論視覺效果——卡片可以翻轉，視角可以傾斜。

但這不是重點。

重點是 pipeline 的壓縮。來聊聊真正改變了什麼（還有沒人提的 caveat）：🧵

---

**[Tweet 2]**
3D transform 在 Figma 裡是 non-destructive effect。

X、Y、Z 軸旋轉，設定 depth（Z 軸位移）。原始 layer 保持可編輯，文字正確渲染，shader 可以疊加。

這個架構很重要——你可以自由探索空間感構圖，不會破壞原始 source file。

---

**[Tweet 3]**
以前的 pipeline 是這樣的：

Cinema 4D 或 After Effects → 渲染成影片 → 貼進 Figma → 另外做 annotation → 手動跟工程師解釋 CSS transform 數值。

現在這整條路消失了。

---

**[Tweet 4]**
現在的 pipeline：

在 canvas 上做 3D 設計 → 在 Figma Motion 加動畫 → Dev Mode 複製精確的 CSS（translateZ、perspective、transform-style）→ coding agent 透過 Figma MCP 讀取整份設計。

不用切換工具，不用說「旋轉角度是...」。

---

**[Tweet 5]**
Figma 也同步推出了 Dev Mode agent（11 月 19 日）。

可以 inspect 設計、比較版本差異、取得 code snippets、批次下載 assets。

Design agent 組 3D 場景，Dev Mode agent 負責跟工程師說明。同一個工具，閉合的 loop。

---

**[Tweet 6]**
最值得記下的 launch 故事：

Figma 自家 motion designer 需要把幾十張卡片排成 3D grid、helix、ring、scatter 的 layout 邏輯。他請 agent 幫他做了一個 plugin，agent 做出來了，他用了它。

這不是「AI 幫我設計」，而是「我描述了我需要的工具然後拿到了它」。是完全不同的技能。

---

**[Tweet 7]**
老實說的 caveat：

在 parent frame 開啟「Keep nested layers 3D」之後，你會失去：opacity、blend modes、effects、clip content。

做複雜構圖時不是小事。在你花了兩小時做 production mockup 之前，先確認這個限制。

---

**[Tweet 8]**
這一切的 pattern：

Figma 一直在把「需要切換到另一個工具」的事情壓縮進同一條 pipeline。3D → Motion → Dev Mode agent → MCP → coding agent。

Senior designer 的價值不在於哪個步驟——而在於理解每個步驟何時成為瓶頸，以及如何結構化 brief，讓 pipeline 不需要你守在每一個中間點。

〔Figma 3D transform open beta 11 月 12 日 / Dev Mode agent 11 月 19 日〕

---

## THREADS POST

**[長文反思]**

Figma 3D transform 在社群裡被當成視覺升級討論——卡片可以翻轉，視角可以傾斜。很棒。

但這不是重點。

重點是 pipeline 壓縮。

在 canvas 上做 3D 設計，Figma Motion 加動畫，Dev Mode 直接給你精確的 CSS——translateZ、perspective、transform-style——不用另外 transcribe，不用手動標注。Coding agent 透過 Figma MCP 讀取整份設計。不用切換工具，不用另外找一個空間設計軟體。

Figma 這週也推出了 Dev Mode agent：inspect 設計、比較版本、取得 code snippets、批次下載 assets。handoff 層最後的缺口正在關閉。

我一直回頭想的是 launch 影片裡的那個故事：Figma 自家 motion designer 需要把幾十張卡片排成 3D grid、helix、ring、scatter 的 layout。他請 Figma agent 幫他做了一個 plugin，agent 做出來了，他用了它。

這不是「AI 幫我設計」，而是「我描述了我需要的工具，幾分鐘後拿到了它」。Senior designer 的技能重心正在往 tool authorship 移動，那個故事精確地展示了它長什麼樣子。

值得記下的 caveat：在 parent frame 開啟「Keep nested layers 3D」，你會失去該 frame 的 opacity、blend modes、effects、clip content。複雜構圖時不是小事，別到做了兩小時才發現這個限制。

更大的 pattern：每一個以前需要切換工具或額外開會解釋的缺口，都在被填起來。Senior designer 的價值繼續往 orchestration 靠——決定要做什麼、結構化整條 pipeline、在 brief 不夠精準的時候知道在哪裡介入。

---

**[短版 punch — Threads 變體]**

Figma 3D transform 不是視覺升級，是 pipeline 的改變。

在 Figma 上做空間構圖 → Figma Motion 加動畫 → Dev Mode 複製 CSS → coding agent 透過 MCP 讀取。3D 設計到 code 的缺口剛剛關閉了。

最值得記的故事：Figma 自家 motion designer 請 agent 幫他寫了一個 3D 卡片 layout plugin（grid/helix/ring/scatter），agent 做出來了，他用了。

這是 frame：不是「AI 幫我設計」，而是「我描述了我需要的工具」。

Caveat：parent frame 開啟「Keep nested layers 3D」= 該 frame 的 opacity、blend modes、clip content 全部停用。複雜構圖先確認這個。
