# X Thread — Cubicle：唯讀設計的 AI agent 辦公室（繁體中文）
**主題：** Cubicle——為 AI coding agents 打造的即時像素風辦公室（Claude Code + Paperclip）。MIT 授權，零依賴，設計為唯讀。2026 年 10 月 3 日上線。
**角度：** 「唯讀設計」不是功能限制，它就是產品本身的設計。當你同時跑多個 AI agents 的時候，「大家在哪裡？」這個問題是一個空間可視性問題，光靠 log 回答不了。Cubicle 解決這個問題——而這個限制正是讓答案值得信賴的原因。

---

**Tweet 1 / Hook**
Cubicle 上線了：一個為你的 AI agents 打造的即時像素風辦公室。

Claude Code agents 以像素角色出現在辦公桌前。工作時打字。需要你時舉手。完成時去休息室。

唯讀設計。

最後這一點值得深入探討。

---

**Tweet 2**
Cubicle 實際上在做什麼：

一個單一的 Node 伺服器（不到 200 行，只用標準函式庫，零依賴）監看你的 Claude Code hooks 和 Paperclip issue 資料。

提供一個 HTML 頁面。在 352×208 的 canvas 上用 fillRect 畫出所有東西。沒有圖像、沒有框架、沒有建置步驟。

創作者的筆記：第一次開啟 Paperclip 整合時，他發現了兩個他不知道存在的等待中問題。

---

**Tweet 3**
為什麼唯讀？

不是因為這個工具無法寫入。而是因為寫入權限會破壞你試圖看清楚的東西。

一旦視覺化工具可以修改任何東西，它就變成了一個不確定性的來源。你停止信任你正在看的東西。透明度消失了。

唯讀不是對產品的限制，它就是產品本身。

---

**Tweet 4**
Cubicle 實際上在解決的 UX 問題：

當你跑 1 個 agent 時，log 沒問題。線性的，可以掃描。

當你同時跑 5 個 agents 時，「大家在哪裡，誰在等我？」變成一個空間問題，log 完全失效。

Cubicle 給你 AI 工作的周邊視野。你瞥一眼螢幕角落。你不用打開 terminal。

---

**Tweet 5**
「零依賴、零網路請求」的設計不只是簡約主義。

一個會發出網路請求的視覺化工具，你無法完全信任它。Cubicle 的建置步驟掃描它自己的原始碼和打包後的 bundle，尋找 fetch/XHR/WebSocket/beacon——如果找到任何一個就建置失敗。

這是將 constraint architecture 應用到觀察者工具本身。驗證過程是產品誠信聲明的一部分。

---

**Tweet 6**
像素風格的比喻做的工作比看起來多。

空間編碼——姿勢 + 位置 + 對話泡泡——以比一行 log 低得多的認知負擔傳達 agent 狀態。

同樣原則如同研究顯示，環境監控（顏色 + 縮圖）以零注意力成本比閱讀 chat 記錄減少了 48% 的 AI agent 錯誤。

辦公室比喻讓 agent 狀態一眼就看清楚。這是一個真實的設計決策。

---

**Tweet 7**
值得說出的誠實限制：

目前只支援 Claude Code + Paperclip。Codex 和 Gemini CLI 的 adapter 在 repo 上標記為「good first issue」。

Paperclip 的每個 agent 花費追蹤還沒有（開放的 issue）。

像素風認知編碼很有魅力。在你把它放在螢幕邊緣依賴它之前，驗證狀態映射符合你的心智模型。

MIT 授權，不到 200 行 Node，你可以在 10 分鐘內讀完整個程式。

---

**Tweet 8**
重新框架：

隨著團隊同時跑更多 AI agents，設計問題從「agent 有多好？」轉移到「agent 狀態對其他團隊成員有多可見？」

Cubicle 用空間比喻回答這個問題。唯讀限制讓答案值得信賴。

本週最誠實的產品決策是一個拒絕碰你 codebase 的像素風辦公室。
