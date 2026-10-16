# X Thread — Toolcraft 開源 Starter Kit（中文）
# Oct 16, 2026

---

**Tweet 1（開場鉤）**
今天有個東西上線了，設計圈完全沒有報導：Toolcraft — 一個讓 AI agent 「建造」設計應用程式的開源 framework。

不是 AI 在設計工具裡面，是 AI 建造設計工具本身。這是完全不同的分類。

---

**Tweet 2**
裡面有什麼：
→ 可運作的 canvas（不是示意圖，是真的能用的）
→ Toolbar + layer 系統
→ 帶 keyframe 工作流程的 timeline
→ 完整 UI 元件庫：slider、色票選擇器、字型選擇器

一個專業創意工具的完整應用程式架構，以腳手架的形式提供給 AI coding agent。

---

**Tweet 3**
最重要的細節：它附帶了內建的 AI skills、效能指令，還有視覺測試規則。

「視覺測試規則」= agent 產生的輸出在你看到之前就被檢查視覺一致性。不是邏輯，不是功能，是視覺品質。

這是在工具創作層級就有的品質關卡。

---

**Tweet 4**
脈絡在這：

Voyager（10/10）→ agent 透過 native API 操控「現有的」創意工具（Blender、DaVinci、Photoshop）
Toolcraft → 讓 agent 從頭「建造」新的設計工具的腳手架

Skills 收斂弧線剛剛延伸到了工具創作本身。

---

**Tweet 5**
沒有人在問的開放問題：誰來做品味審查，當沒有人設計那個工具？

Toolcraft 的架構是健全的。Canvas、layer 系統、keyframe 工作流程 — 這些都是正確的。

但預設值、操作可見性、互動的可發現性 — 這些是產品設計決策。沒有任何 framework 能夠編碼品味。

---

**Tweet 6**
我一直在追蹤可信任 AI 工具裡的同一個模式：約束架構是訊號。

Voyager：只透過 scripting API，檔案保持可編輯，沒有 lock-in
ProtoPie Code MCP：只讀，prototype 是唯一真相來源
Toolcraft：視覺測試規則約束 agent 的輸出品質

約束讓輸出變得可信任。

---

**Tweet 7**
有趣的使用場景不是「coding agent 建一個通用的設計工具」。

而是：對特定工作流程有深入了解的領域專家 + coding agent + Toolcraft = 為一個精確任務建造的專門創意工具，且架構已經通過視覺 QA。

這是以前不存在的生產模式。

---

**Tweet 8（CTA）**
今天在社群媒體上零聲量 = 早期訊號。

最後真的重要的工具，往往在大家注意到之前就已經在那裡了。Apache-2.0，值得加書籤。

toolcraft.sh
