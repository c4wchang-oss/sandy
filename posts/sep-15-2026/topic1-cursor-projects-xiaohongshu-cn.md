# Topic 1: Cursor Projects — 小紅書 Post (Traditional Chinese)
**Image:** `images/topic1-coordinator-cn-3x4.png` (3:4)

---

**Title:** 設計系統再也不用靠人手動維護了？Cursor Projects 讓 AI 幫你 24 小時 review PR

---

今天聊一個對 senior designer 來說很重要的消息。

Cursor 正式推出 Projects，一個 coordinator agent 架構，不自己寫 code、只負責規劃任務、分配給 subagent 執行，結果交回給你確認。

**🔑 最重要的使用案例（來自 Cursor 官方 blog）**

一個工程師用 Project 管理設計系統：
- 自動掃描每個 PR
- 提取應該進 DS 的元件
- 每次看到同樣的錯誤，自動新增 lint rule
- 一天 20–100 個 PR
- 工程師只負責需要注意的地方

**📌 作為 senior designer，這代表什麼？**

你的角色不是「更快執行 DS audit」
而是「設計一個自動執行 DS audit 的系統」

具體來說要改變的思考方式：

**1. Field Guide = 你的設計決策記錄**
Projects 維護一個由 agent 策展的「Field Guide」，自動注入到每個新 agent 的 context 裡。你以前寫的 DS 文件、Figma annotation，就是在嘗試手動建這個東西。

**2. 門檻定義 = 新的設計工作**
你需要定義：「什麼品質水準下，coordinator 可以自己決定、不打擾我？」這比任何元件設計決策都難，也更重要。

**3. Coordinator 看的是 signal，不是 prompt**
Projects 可以監聽 Slack channel、在 PR 事件觸發、按排程執行。你的設計系統維護從「定期 sprint 任務」變成「背景持續流程」。

**⚠️ 誠實的 caveat**

Projects 還在 beta。Coordinator 品質取決於你一開始給的 intent 品質。如果你的 DS 本來就不夠 legible，coordinator 也無法代替你理解設計意圖。AI 規則只能和寫它的人一樣好。

**💡 底線**

execution → orchestration → governance → delegation

這是過去幾年 senior designer 角色演化的軌跡。Projects 是第一個讓「委派」變成持續後台流程的工具。

你準備好定義 coordinator 的門檻了嗎？

---

#設計系統 #AIdesign #UX設計 #Cursor #SeniorDesigner #DesignOps #AI工具 #設計師 #ProductDesign
