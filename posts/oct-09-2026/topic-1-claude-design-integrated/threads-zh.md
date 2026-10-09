# Threads 貼文 — 繁體中文
## 主題：Claude Design 整合——design.md 作為可攜式品牌規範層
## 日期：2026 年 10 月 9 日
## 格式：長篇個人觀察

---

我從九月開始追蹤 design.md 這個模式，從 Vercel 開始。這週它跑完了最後一圈。

Claude Design 不再是獨立工具。Anthropic 把它整合進每一個 Claude 對話，包含 Claude Code。claude.ai/design 這個獨立網站 12 月 14 日關閉。在那之前，你已經可以從任何 Claude 聊天視窗進入同樣的畫布、同樣的品牌規範、同樣會認識你 component 的輸出。

這一切的中心是 design.md。一個可攜式的 Markdown 檔案，裡面有你的品牌色、字型、component 樣式、spacing 規則——從你丟進去的 logo、deck、PDF、codebase 裡，Claude 提取出來的。把你的品牌素材丟進去，Claude 生成那份文件，然後那份文件到處旅行：用 /design-sync 進 Claude Code，匯出到 Gamma、Canva、Google Slides、Adobe。

實際上是什麼意思：在 Claude Code 裡面用 /design-sync，你的設計系統就自動進入那個專案所有 prompt 的 scope。Claude 用真實的 component 建構，在你看到之前先跟你的系統核對，靜靜修正，然後交付真正符合你品牌的東西。

對團隊：admin 鎖定核准的設計系統。品質底線是組織層級的決定，不是每個設計師自己的問題。

我一直說的那個老實話還是成立：品質上限是你放進去的東西決定的。Claude 從你給它的資產提取規則。一個從來沒有正式化設計系統的品牌，得到的是一個 AI 猜測那個正式化應該長什麼樣子。GIGO 仍然適用。

我在觀察的事：design.md 正在悄悄成為 AI 原生設計裡品牌可攜性的檔案格式。Vercel 寫它，Onefold 生成它，Graphical 輸出 GUI.md（給 code agent 用的同樣概念），Claude 原生讀它。

接下來六個月會揭示誰能從真實品牌資產生成最準確的那一份——那才是真正值得解決的設計問題。

---

*圖片：16:9——見 images/ 資料夾*
