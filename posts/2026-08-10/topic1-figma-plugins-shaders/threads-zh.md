# Threads Post — Figma Generative Plugins + Shaders（繁體中文）
**日期：** 2026-08-10
**格式：** 長篇個人反思，無 hashtag

---

坦白說，Figma generative plugins 這次發布裡，最被低估的功能不是 shaders——是 Figma 悄悄畫出的那條線：plugin 和 agent 的差別。

Plugin 是拿來處理確定性的工作。一樣的 input，一樣的 output。你定義工具一次，它每次都不帶判斷地執行。

Agent 是拿來處理需要適應的工作。它帶入 context，讀你的檔案，做你沒有明確指定的決策。

這個差別比看起來的更重要。我接觸的大多數團隊把 AI 當成一個一直在對話的黑盒子。每次都重新 prompt agent 去 rename layers、套用 spacing、清除 override。這不是好好用 AI——這是貴出來的 AI。

真正的做法是：找出工作流程裡可重複的部分，描述清楚，然後請 Figma agent 把它建成 plugin。Beta 期間免費建立。執行永遠不消耗 credits。

Shaders 也是真的令人興奮。WebGPU 視覺效果從自然語言生成，parameter 化成原生 Figma property。你的 design system 現在可以包含一個「holographic glitch fill」或「低頻 noise overlay」，讓任何隊友都能套用，不需要懂任何 shader 程式碼。

但坦誠地說：shaders 的品質上限是你 prompt 的精確度。這不是魔法棒——這是翻譯挑戰。「讓它看起來很電影感」只會得到很通用的東西。描述精確的視覺物理，才能得到可用的東西。

我正在觀察的更大趨勢：Figma 正在變成一個讓你設計自己工具的環境。這是有意義的轉變。意思是 senior designer 的技能組合正在從「做什麼」擴展到「建什麼工具讓下次更快。」
