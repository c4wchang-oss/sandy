# Topic 2: Hallmark — 小紅書 (Traditional Chinese)
**Platform:** 小紅書 (Xiaohongshu)
**Format:** 干貨 review/tutorial 風格
**Date:** July 29, 2026
**Topic:** Hallmark by Together AI — 反 AI 審美垃圾設計 skill

---

**標題：** Hallmark：57 條規則，告訴 AI 好設計「拒絕」做什麼

這週 GitHub 全球 trending #1 是一個設計 skill。不是 UI 框架，是一個給 AI coding agent 的約束文件。

🚫 **它在解決什麼問題**

所有 AI 生成的介面都長一個樣：
• 永遠用 Inter 字體
• Hero 紫色漸層
• 六個一模一樣的 feature card
• 每個 hover 都 bounce
• Hero → 3 features → CTA → footer

這不是 AI 在偷懶，是 AI 在生成訓練數據的統計均值。「所有網站的均值」，就長這樣。

⚙️ **它怎麼運作的**

1. Emit 任何代碼之前，過 57 個「slop-test gates」
2. 任何硬門檻沒過？重新生成，不輸出
3. Pre-emit 自我評分，六個軸：哲學、層次、執行、具體性、克制、多樣性
4. 分數以 CSS 註解印在每個輸出裡
5. 20 個命名主題 + Custom 模式（適合有特定創意意圖的 brief）

🔤 **四個動詞（這才是實際工作流）**
• Build — 生成新 UI，完整 57 關驗證
• Audit — 對現有代碼打分，列問題清單，不修改
• Redesign — 換結構，保留文案、IA 和 brand
• Study — 從 URL 或截圖提取設計 DNA → 輸出 design.md

🎯 **為什麼 senior designer 要關注**

Audit = 自動化設計評審
Study = 競品分析變成結構化協議
Redesign = 輸出感覺太安全時的迭代觸發器

這些都是你腦子裡多年來一直在做的事。現在有了 CLI 指令。

💡 **更深層的觀察**

這個工具有效——意味著你可以用 57 條明確規則對抗 AI 審美垃圾——這告訴我們一件重要的事：AI 審美品質是分佈問題，不是能力問題。

AI 的「品味」只是一個定義清晰的拒絕列表。
設計工藝現在有了機器可讀的格式。

安裝：`npx skills add nutlope/hallmark`
支援 Claude Code、Cursor、Codex，MIT license，完全開源

#AI設計 #UX設計 #設計工具 #AITools #前端開發 #設計系統 #Hallmark #ClaudeCode #Cursor #設計師必看
