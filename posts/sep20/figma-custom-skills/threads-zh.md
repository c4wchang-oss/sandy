# Threads Post — Figma Custom Skills（繁體中文）
# Sep 20, 2026 | 長文反思 | 16:9 圖

---

【附圖】

---

Custom Skills 改變了「使用 Figma AI」的意思。

在這之前，每次 agent session 都從零開始。重新解釋情境。重新設定限制。重新提醒風格偏好。

Custom Skills 是 Figma 的答案。你描述一個你已經摸清楚的工作流程——如何套用你的編輯風格、如何跑 DS 合規審查——它就變成整個團隊都可以呼叫的斜線指令。/apply-aesthetic。/audit-ds。/check-accessibility。

這不是新想法。Cursor 的 SKILL.md、Cursor Projects 的 Field Guide、Notion Skills 3.7、CLAUDE.md——同一個 pattern 一直在每個主要工具裡出現。把你的判斷編碼。然後重複使用。差別在於 Custom Skills 活在 Figma 畫布上，就在你當初做出那個判斷的工作流程裡面。

檔案附件和 GitHub context 是比較安靜的補充。它們讓 brief 不再只是文字框。它由這幾個部分組成：你附加的參考檔案、agent 讀取的 GitHub component 結構、你的 custom skill 限制，還有畫布上選取的內容。多來源的 brief 需要一種新的作者清晰度。

在你建立第一個 skill 之前，有個區別值得先理解：skill 是自適應的——當 agent 需要解讀情境、做出判斷時適合用。plugin 是確定性的——當相同輸入應該永遠產生相同輸出時適合用。需要 plugin 的時候不要用 skill，反之亦然。這是產品設計決策，不是個人偏好。

一個我一直回頭想的誠實補充：skill 捕捉的是你在 session 裡做了什麼，不是你想要什麼。如果產生它的 session 很草率，skill 就會把那個草率編進去。發佈給組織之前要先審查。那個自己寫 brief 的 brief，會複利它繼承的東西。

我追蹤的角色轉移現在走到第三步：執行 → 編排 → 工具設計。Custom Skills 是工具設計來到畫布上。你不再只是 Figma AI 的使用者了——你在編寫你的團隊所使用的 AI。

你每週不假思索重複做十次的工作流程是什麼？那就是你的第一個 skill。
