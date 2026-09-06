# Topic 2: Webflow Agent Instructions Generation
# Platform: Threads | Language: Traditional Chinese
# Date: Sep 6, 2026 | Format: 長文感想 + 短評
# Source: https://webflow.com/updates/agent-instructions-generation (Sep 2, 2026)

---

## 長文

這週看了 Webflow 新的 Agent Instructions Generation。

功能說明：AI 讀取你的 live 網站，自動幫你寫品牌指南、設計系統文件、圖片規則、CMS 結構。所有編輯你網站的 agent 都會把這些當作 context 參考。

我的第一反應是「方便」。第二反應是「等一下」。

問題是：它讀取的是你網站上實際存在的東西，不是你的設計意圖。不是原始的品牌指南說了什麼，不是在設計評審裡做出的決定。

它讀取所有的例外處理。開發者在 launch 前一天晚上做的一次性修改。沒人清理過的遺留元件。三年來逐漸偏移的那個略為不對的藍色。

這些全部都成了你的「品牌指南」。

之後所有接觸你網站的 agent 都會忠實地遵循這些指南。

令人不舒服的真相：Agent Instructions Generation 是我見過最能揭露設計負債的工具之一。不是因為它很複雜，而是因為它很誠實。它精確地告訴你，AI 會從你實際出貨的作品裡對你的品牌推論出什麼。

值得問的治理問題：在 agent 照著這些指南行動之前，誰來審查這些自動生成的指南？

「這是從我的網站生成的」不等於「這反映了我們的設計意圖」。

這個落差 — 已出貨的和原本意圖的之間 — 正是設計負債所在的地方。現在 AI 會把它編碼進每一個未來的決策，除非有人先抓出來。

我的建議：不要把這個當成設好就算的工具。把它當成審查來跑。如果你對生成的結果感到不舒服，那種不舒服正在指向真正需要做的工作。先修網站，再用意圖編輯指南，然後再信任 agent 去照著做。

設計師在 agentic 工作流裡的新角色不是品牌作者，是 instruction architecture 審查者。

---

## 短評

Webflow 可以從你的 live 網站自動生成品牌指南了。

它讀取的是實際存在的東西，不是你的意圖。

所有的例外、所有的不一致、所有你沒有修的東西。

現在全部被編碼成「品牌標準」。

把它當成審查工具來跑，不是捷徑。
