# 小紅書 Post — Once UI 2.0：Agent-First 設計系統（繁體中文）
**主題：** Once UI 2.0 在 npm 套件裡內建 agent harness（2026年9月25日）

---

**標題：**
設計系統應該主動向 AI 說明自己——Once UI 2.0 做到了

---

**內文：**

Once UI 2.0 這週以開源 React/Next.js 設計系統的身份出現，是專門為 agent-first 工作流程而建立的。最值得注意的功能不是 100+ 個 component，而是 npm 套件直接帶著 agent harness 出貨——一個指令（`npx once-ui-init-agent`）就自動寫入你的 AGENTS.md 和 Cursor rules。

設計系統在安裝自己的 brief。以下是這對你的工作方式意味著什麼：

**① Agent harness 實際包含什麼：**
- Compact rules（~2KB）：用什麼 component、永遠不要寫什麼
- Component catalog：按目的索引，不按字母
- Task bundles：依意圖配對的食譜（pricing 頁面、hero 區塊、dashboard）
- Gold examples：可以模仿的生產級結構
- Validation CLI：合併前自動確認生成的程式碼

**② 作者的洞察才是真正的故事：**
「當程式碼變得更容易生產，限制和實證才更重要，不是更不重要。」不是更多 prompting，是更精確的限制。Compact rules 裡有一條規則：如果設計意圖不清楚——問，不要生成。預設：克制、置中、單一品牌強調色、不用佔位圖片。一個聲明了預設美感的設計系統。

**③ 你的工作流程會有什麼改變：**
你不需要另外寫 agent brief，`npm install` 幫你寫。設計系統告訴 agent 它自己的規則。你的角色改變了：不是「向 AI 解釋設計系統」，而是「讓設計系統的限制精確到可以自我說明」。

**④ 這如何融入更大的模式：**
OUI-1（9月10日）是第一個被訓練來生成 UI 的模型。GeekLego、Astryx 和 BRDNA 讓設計系統變得機器可讀。Once UI 2.0 從套件內部出貨自己的可讀性層。Floor 移動了：獨立創作者現在有了以前需要整個 DesignOps 團隊才能建立的 agent-native 基礎設施。

**⑤ 70% 精簡輸出的說法：**
Once UI 說因為模型讀取精確規則而不是在猜測，輸出比 Tailwind+shadcn 精簡 70%。我無法獨立驗證這個說法。機制說得通——在承諾用於生產之前，先在你自己的 codebase 上測試。

---

**說實話：**
2.0 alpha，236 個 GitHub stars，MIT 授權。架構正確；生產規模的穩定性尚未驗證。在用於生產前先在自己的 codebase 上驗證。

**重新框架：**
設計系統一直在編碼設計師的判斷。Once UI 2.0 確保 agent 在開始生成之前先讀了那個編碼。這不是新想法——這是第一個自己出貨的實作。

---

#OnceUI #AI設計系統 #UX設計 #DesignOps #AgentFirst #AI設計工具 #資深UX設計師 #設計系統 #ReactNextJS #AI工作流程
