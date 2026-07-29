# Topic 2: Hallmark — X Thread (Traditional Chinese)
**Platform:** X (Twitter)
**Format:** Thread (8 tweets)
**Date:** July 29, 2026
**Topic:** Hallmark by Together AI — 反 AI 審美垃圾設計 skill

---

**Tweet 1 (hook)**
57 條規則，告訴 AI 好設計「拒絕」做什麼。

一個從內部對抗 AI 審美平庸的工具。
這週 GitHub 全球 trending #1。

---

**Tweet 2**
Hallmark。Together AI 開源設計 skill，給 Claude Code、Cursor、Codex 用。
一週 12.4k GitHub stars。

不是 UI library，不是 component system。
是一個行為約束文件，告訴你的 agent：不要生成那個預設值。

---

**Tweet 3**
它拒絕的「預設值」：
• 第一選擇就是 Inter 字體
• Hero section 紫色漸層
• 六個一模一樣的 feature card
• 每個 hover 都 bounce
• Hero → 3 features → CTA → footer

這不是審美偏好，是訓練數據裡所有網站的統計均值。

---

**Tweet 4**
機制：57 個「slop-test gates」。
Code emit 之前，agent 逐一過關卡。
有一個硬門檻沒過？重新生成。

加上 pre-emit 自我評分，六個軸：哲學、層次、執行、具體性、克制、多樣性。
分數以 CSS 註解印在輸出裡。

---

**Tweet 5**
四個動詞：
Build：生成新 UI，主題選擇 + 57 關驗證
Audit：對現有代碼打分，列問題清單，不修改
Redesign：換結構，保留文案、IA 和 brand
Study：從 URL 或截圖提取設計 DNA，可輸出 design.md

---

**Tweet 6**
Study 這個動詞對 senior designer 最有意思。
它識別宏觀結構、字體搭配、色彩錨點。
它拒絕像素級克隆。
輸出可移植的 design.md 讓其他 AI 工具使用。

競品分析，被寫成了一個協議。

---

**Tweet 7**
令人不舒服的觀察：
Hallmark 有效，是因為 AI 設計品質是分佈問題。
AI 生成趨向統計均值。
Hallmark 是一個把生成推向尾部的約束系統。

AI 的「品味」只是一個定義清晰的拒絕列表。

---

**Tweet 8 (CTA)**
真正的 headline 不是「anti-slop skill」。

而是：你積累多年的設計直覺——「這個看起來像每一個網站」、「版面要多樣化」、「別再用 Inter 加紫色了」——
現在可以被寫成 57 條 lint 規則。

設計工藝有了機器可讀的表達形式。
這件事值得好好想一想。
