# 小紅書文章 — NNG AI 調查 + Zombie UI（繁體中文）
# Date: Oct 26, 2026 | Research: NNG survey + Stripe/Miro case studies | Platform: Xiaohongshu / 小紅書
# Image: images/topic2-xiaohongshu-3x4-zh.svg

---

**標題：**
NNG 調查：AI 讓設計工作更快，但設計師感覺「不冷不熱」——真正原因在這裡

---

**內文：**

NNG 的調查出來了。AI 一致性地讓 UX 工作省時間。但大多數從業者感覺……曖昧。不熱情，不挫折，就是普通。

作為一個持續觀察這個領域的 Senior UX Designer，以下是我認為真正發生了什麼：

---

**沒人談論的落差：**

「AI 省時間」= 在生成步驟成立
「AI 端到端省時間」= 不清楚

一個團隊的 2 天黑客松（Claude + ChatGPT + Copilot）：
→ 第 6 小時，產品看起來幾乎完成了
→ 需要好幾天的驗證，東西才真的能用

生成時間 ≠ 總專案時間。大多數估算還在混淆這兩個數字。

---

**Zombie UI 問題（Stripe 本週命名了它）：**

「Zombie UI」= AI 生成的過度打磨、通用介面，看起來完整但品牌靈魂為零。

功能正常。視覺完整。在 review 時說得過去。但完全不是你的東西。

最危險的地方？Zombie UI 看起來不像壞掉了，看起來可以。這才是它能上線的原因。

---

**真正有效的修法：**

① Stripe 的做法：在人工 review 前把品牌限制烘焙進生成程式碼的 command-line 工具——在生成時執行的結構性限制，不是之後

② Miro 的做法：一個 skill，在 agent 開始建構之前把 design system 元件 + 使用規則 + 範例前置到 agent context 裡

③ 原則：生成前的 constraint > 生成後的修正。每次都是。

---

**你的團隊應該問的診斷問題：**

不要問：「AI 有省時間嗎？」
要問：「AI 端到端省了時間嗎？」（生成 + 驗證 + 修正）

按任務類型記錄這個數字。那才是能改變領導層對話的數據。

---

**Senior UX 核心觀點：**

不冷不熱 ≠ 工具很糟。
不冷不熱 = 生成有多快和建立信任有多慢之間的校準落差。

先放 constraint，量測端到端，記錄所有事。

#UX設計 #AI設計 #設計研究 #設計師日常 #ProductDesign #DesignOps #AI工具 #NNGroup #UX #ZombieUI
