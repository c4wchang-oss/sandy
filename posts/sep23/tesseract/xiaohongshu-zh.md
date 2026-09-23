# Xiaohongshu — Mirage Tesseract（繁體中文）
# Sep 23, 2026 | 教學 / 分析 | 3:4 圖

---

**標題：Premiere 存在 35 年了。這個免費工具直接給你的 AI agent 影片剪輯的基本元素。不需要 Adobe 訂閱。**

---

「為 agent 重建的 Premiere 和 After Effects。」——Mirage CEO

---

## Tesseract 是什麼

**Mirage Tesseract** 是 2026 年 9 月 22 日推出的免費本地端影片創意套件。

不是「Premiere 裡的 AI」。是一個原生介面就是 agent 指令的影片引擎。

由 Mirage 建立——Captions（2 億 5,000 萬+ 影片產出）背後的公司。

免費使用。你的 agent 訂閱費用另計。不需要 Adobe 訂閱。

---

## Agent 能用它做什麼

Agent 直接存取：

**影片剪輯**
編輯素材、剪接、轉場、時間軸

**動態圖形**
關鍵影格、緩動曲線、動態文字、向量圖形

**合成**
圖層、遮罩、遮板、混合模式、調整圖層、效果

**聲音**
音頻音量、時間軸、淡入淡出

全部透過自然語言描述。不需要點擊 GUI。

---

## 值得理解的設計洞察

Agent 產生的影片的品質天花板不在於 agent 的智慧。

在於引擎能呈現什麼。

引擎理解關鍵影格緩動 → agent 能產出流暢動畫。
引擎有路徑上的文字 → agent 可以描述出它。
引擎無法模型化某個概念 → 沒有任何 brief 能產出它。

**引擎暴露的詞彙 = 你的創意天花板。**

這跟設計系統 token 的原則相同。限制範圍決定輸出範圍。

---

## 地板轉移

Tesseract 之前：
- 專業影片剪輯 = Adobe 訂閱 + 多年工具知識
- 動態設計 = After Effects 熟練度

Tesseract 之後：
- 跟你已經在用的 agent 描述你想要什麼
- 免費本地端引擎處理剩下的事

跟 Canva（2013，範本給每個人）和 Wixel（2026，網站生成）一樣的模式。

門檻是工具知識。現在是 brief 品質。

---

## 如何開始

1. 需要 Mac（Apple Silicon 或 Intel）
2. 需要相容的本地端 agent 環境（Claude Code、Codex 或類似的）
3. 透過 `npx skills add mirage-hq/Tesseract` 安裝，或使用 ChatGPT 外掛（即將推出）
4. 把素材指向 agent + 給一個創意 brief
5. Agent 建立、預覽、修改、渲染可編輯的專案

---

## Agent 原生 vs. 工具裡的 AI 模式

| 模式 | 範例 | 運作方式 |
|------|------|---------|
| 工具裡的 AI | Premiere AI 功能 | AI 在 GUI 裡輔助 |
| Agent 原生 | Tesseract | Agent 直接操作創意基本元素 |

Tesseract = 第二個模式。跟 OUI-1 做 UI 生成一樣。

---

## 誠實的評估

✅ 免費本地端引擎（不需要 Adobe 訂閱）
✅ 引擎由 Captions 驗證（2 億 5,000 萬個影片）
✅ 跟你已經在用的 agent 搭配使用
✅ 不需要新帳號或 API key
⚠️ 推出時只支援 Mac（不支援 Linux、WSL、雲端）
⚠️ ChatGPT + Claude 外掛還是「即將推出」，尚未發布
⚠️ 瀏覽器版介面尚未提供
⚠️ Agent 介面仍在早期——正式環境使用前先查看 GitHub

---

## 技能轉變

Premiere 教你：軌道 → 時間軸 → 關鍵影格 → 輸出。

Tesseract 問你：你能描述得夠精確，讓引擎產出你想要的嗎？

「慢動作廣角鏡頭切到特寫。標題以 200 毫秒 ease-out 淡入。音頻降到 30% 並在 2 秒內回升。」

那個 brief。那就是技能。

---

#影片剪輯 #AI設計 #創意工具 #AIAgent #動態設計 #資深UX #AI影片 #無需Adobe #設計師必看 #工具推薦
