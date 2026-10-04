# 小紅書 Post — Cubicle：唯讀設計的 AI agent 辦公室（繁體中文）
**主題：** Cubicle——AI coding agents 的即時像素風辦公室（Claude Code + Paperclip）。MIT 授權，零依賴，唯讀設計。2026年10月3日。

---

**標題：**
這個 AI agent 辦公室工具剛剛上線——最好的設計決策是它拒絕做的事

---

**內文：**

Cubicle 這週在 Product Hunt 上線（2026年10月3日第6名）。這是一個為你的 AI coding agents 打造的即時像素風辦公室。

你的 Claude Code 和 Paperclip agents 以像素角色出現在辦公桌前。工作時打字。需要你時舉手。完成時去休息室。

設計為唯讀。

**它實際上在做什麼：**

① 即時監看你的 Claude Code hooks 和 Paperclip issue 資料
② 渲染即時的 352×208 像素辦公室——agent 狀態透過姿勢、位置和對話泡泡表達
③ 當 agent 在等你時：泡泡閃爍顯示 issue ID，讓你立即看到
④ Kiosk 模式（?kiosk）用於全螢幕 TV 或第二螢幕
⑤ 伺服器端遮蔽（--redact）在共享螢幕前過濾敏感資訊

**技術選擇就是設計本身：**

單一 Node 檔案。不到 200 行。只用標準函式庫。零 npm 依賴。零網路請求——建置步驟掃描 fetch/XHR/WebSocket/beacon 來驗證這一點。

你可以在十分鐘內讀完整個 codebase。這就是讓它值得信賴的原因。

**為什麼「唯讀設計」是有趣的部分：**

當一個視覺化工具可以修改東西時，它就成了不確定性的來源。你停止信任你正在看的東西。你試圖獲得的透明度消失了。

這是將 constraint architecture 應用到觀察者本身。唯讀限制不是一個缺失的功能，它是產品哲學。

**它真正在解決的問題：**

跑 1 個 AI agent？Log 沒問題。

同時跑 5 個 agents？「大家在哪裡，誰在等我？」變成一個空間可視性問題。Log 在這個問題上失效，因為它們是線性的，不是空間的。

像素風辦公室給你 AI 工作的周邊視野。你瞥一眼螢幕角落——你不用打開 terminal。

**誠實的限制：**

- 目前只有 Claude Code + Paperclip（Codex 和 Gemini CLI adapter 是開放的 issues）
- 還沒有每個 agent 的花費追蹤
- 像素風編碼很有魅力——在把它當作團隊基礎設施依賴之前，對照你的心智模型驗證一下
- MIT 授權，200 行，完全可讀

**資深 UX 框架：**

隨著團隊擴展到 5、10、20 個並行 AI agents，agent 可觀測性成為一個 UX 設計問題。問題從「agent 在工作嗎？」轉移到「整個團隊能一眼看出 agent 狀態嗎？」

這是一個空間設計問題。而 Cubicle 是第一個把它當作空間設計問題處理的工具。

本週最誠實的產品決策：一個拒絕碰它正在觀察的東西的工具。

---

#AIAgents #UX設計 #設計工具 #ClaudeCode #AI工作流 #產品設計 #資深UX設計師 #AI生產力 #Agent可觀測性 #開源 #設計工具2026
