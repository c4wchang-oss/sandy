# 小紅書文章 — GitHub Replica（繁體中文）
# Date: Oct 29, 2026 | Tool: GitHub Replica | Platform: Xiaohongshu / 小紅書
# Image: ../images/topic1-xiaohongshu-3x4-zh.svg

---

**標題：**
GitHub Replica：整個團隊現在用你們的 design system 做 prototype 了

---

**內文：**

GitHub 在 10 月 28 日開源了 Replica。和今年所有其他 AI 原型設計工具最大的差別：它用你們真實的 components、patterns 和文件來建立互動式 prototype——不是 AI 自創的預設元件。

---

**發布了什麼：**

① Open-source（MIT 授權）——由 GitHub Design 團隊製作
② 跑在 GitHub Copilot app 裡——PM、工程師、設計師都可以用
③ 自然語言 → 互動式 prototype，使用你們真實的 design system
④ /setup-skills 建立限制層（設計師 review 並核准）
⑤ 本地優先：本地 prototype 不需要 server
⑥ 可選的自架 Replica Hub，供團隊 feedback 和留言

---

**/ setup-skills 怎麼運作：**

① 指向你的 design system 文件 + component 套件
② Copilot 檢查來源，安裝依賴，草擬 guidance
③ 設計師 review 每份 guidance 草稿——只有核准的才啟用
④ 被核准的 guidance 影響團隊之後建立的每一個 prototype

---

**對設計師改變了什麼：**

① 你不再是 prototype 的瓶頸——但你要負責限制的品質
② 你的 design system 文件成為團隊的 prototype brief
③ 文件太淺 → AI 產出偏離系統的東西，但隊友會信任甚至送出
④ 文件嚴謹 → 整個團隊每次都拿到嚴謹的起點

---

**誠實的限制：**

⚠️ 需要 GitHub Copilot 方案（或自己的 model provider，公開預覽中）
⚠️ Replica Hub 是自架的——你的團隊自己部署 Docker，設定 domain
⚠️ 不是獨立產品——活在 Copilot + GitHub 生態系裡
⚠️ Guidance 品質 = prototype 輸出上限；推廣給團隊前先測試

---

**Senior Designer 觀點：**

文件裡最好的一句話：「要求使用現有核准的 components，而不是視覺上相似的替代品。」

這就是整個論點。reference 勝過 description。你的真實 components 就是 brief。

在這個工作流程裡，設計師的新工作不是更快地做 prototype。是把限制寫得夠精確，讓其他人的 prototype 是可以信任的。

#AI原型設計 #設計系統 #UX設計師 #SeniorDesigner #GitHub #Copilot #限制架構 #AI工具 #設計運營 #產品設計
