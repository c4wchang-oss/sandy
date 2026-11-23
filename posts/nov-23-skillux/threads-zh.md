# 主題二：Skillux — Threads 貼文
# 平台：Threads
# 語言：繁體中文
# 日期：2026 年 11 月 23 日

---

## THREADS 長文

從七月開始，我一直在追蹤一個我稱為「skills 收斂趨勢」的現象——創意軟體生態系每一個主要層級都陸續得到某種形式的 agent 可讀 constraint 檔案。Code editor 有了 CLAUDE.md，設計工具有了 SKILL.md，web CMS 有了 Agent Instructions，AI 圖像工具有了 ComfyUI Skills，專業創意桌面應用程式有了 Voyager skills，工具著作本身有了 Toolcraft。

我在十月宣告這個趨勢完成。然後 Skillux 上線了。

Skillux 是一個 designer 著作的 SKILL.md pack marketplace，支援 Claude Code、Cursor 和 Codex。每個 pack 是一個 zip 檔：一個鎖定 flow、互動狀態、文字尺度和間距規則的 SKILL.md；agent 可以參考的 template；一個在確認前可以先查看的可運行範例介面；token；以及一份 INSTALL.md。用 `npx skillux add <slug>` 安裝，一個指令就把它放進你的工具在監看的任何 skill 資料夾。

有趣的問題不是這個工具是否有效，它幾乎肯定有效——constraint 文件改善 AI agent 輸出，這一整年已經被反覆證明了。有趣的問題是它揭示了哪裡的價值所在。

Marketplace skill 編碼的是通用 UX 最佳實踐。適當的 hover 狀態、正確的 empty state、不讓人困惑的 loading pattern、可辯護的間距系統。那是 floor——每個 AI 生成的介面應該要達到但沒有引導往往達不到的基準。

Ceiling 是不同的東西。Ceiling 是你產品特定的視覺語言，你品牌的設計決策，你 component library 的實際結構，你的 IA 選擇。那些東西沒有任何一個以通用可購買資產的形式存在，因為它們本質上就不通用。那正是讓它有價值的原因。

Miro VibeLab（10 月 26 日）和 GitHub Replica（10 月 28 日）從不同方向展示了同樣的原則：設計師在內部著作的 constraint 比任何預設值都能產出更好的結果。格式一樣，著作不一樣。

Skillux 縮短了 floor gap，沒有縮短 ceiling gap。設計師的工作因此變得更清晰：不要再花時間修那些一個 Skillux pack 本可以防止的結構性 UX 問題，把時間花在需要你判斷力的品牌特定 ceiling 工作上。

一個仍然開放的 governance 問題：當你的團隊同時運行 Skillux pack 和內部著作的 skill 時，誰的權威層級高？還沒有人清楚回答這個問題。

---

## THREADS 短版

AI agent 現在可以用 $1.99 買到 UX 設計判斷力了。

Skillux 是 SKILL.md pack 的 marketplace——鎖定的 flow、互動狀態、間距規則——支援 Claude Code、Cursor、Codex。`npx skillux add <slug>` 安裝，agent 讀它，agent 設計得更好。

重要的區別：marketplace skill 編碼的是通用 UX 最佳實踐 = floor。你品牌的具體設計語言和 component 決策 = ceiling。沒有任何 pack 能給你那個，因為它不通用。

這是有價值的。意味著更少時間修 hover 狀態，更多時間做真正需要 senior 判斷力的工作。但 ceiling gap 還是需要你自己去填。

---
