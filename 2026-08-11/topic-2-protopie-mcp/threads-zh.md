# Threads — ProtoPie AI 正式上線 + MCP 發布
**日期**：2026 年 8 月 11 日  
**主題**：ProtoPie AI 正式版（Component AI authoring）+ ProtoPie MCP  
**格式**：長篇個人觀點  
**語言**：繁體中文

---

ProtoPie AI 這週正式上線了（從 beta 畢業）。官方主打的是 Component AI authoring，但我一直在想的是他們同時發布的 MCP 連接器。

在這之前，如果你想讓 AI agent 理解你的 prototype，你給它截圖或文字描述。那是一種有損的轉換——你在請模型從視覺輸出去逆推設計意圖，方向是反的。

ProtoPie MCP 讓 coding agent 可以直接存取互動模型：scenes、layers、components、variables、formulas、states、triggers。Agent 讀到的是你實際建構的東西，不是它長什麼樣子。

對設計到代碼的轉換來說，這比聽起來更重要。「我設計的」和「最後被蓋出來的」之間的落差，一直有部分是溝通問題。MCP 讓你的 prototype 變成一份結構化文件，agent 可以直接解析，不用丟失資訊。

Component AI authoring 也很值得關注——AI 現在可以把圖層轉成 component、建立 instances、覆寫 variables、把多個狀態合併成統一 component，全部用自然語言。這不是生成，是 component 系統管理。

但我覺得大多數人會忽略的部分是：ProtoPie AI 的品質跟你的圖層命名和組織方式直接相關。「submitButton」有效，「Rectangle 3」沒用。

檔案整潔度一直是有紀律設計師的標誌。現在它也是 AI 系統的品質輸入。你的 prototype 組織方式決定了你的 AI 輸出有多好。這是新的問責標準——坦白說，對那些一直很隨便命名的團隊是個好的強制力。

關於 ProtoPie 定位的老實問題：設計工具的 MCP 還很早期，現在還需要刻意設定。Figma 的 prototyping agent 也在 open beta。生態系統還沒有收斂。

但方向很清楚。高保真 prototype → 機器可讀的 brief → 更好的 AI 輸出。你蓋 prototype 的方式正在改變。

---

**短版（適合二次轉發）：**

AI 不是在讀你的 prototype，它在讀你的圖層名稱。

「submitButton」→ 有效。「Rectangle 3」→ 沒用。

檔案整潔度現在是品質輸入，不只是職業習慣。
