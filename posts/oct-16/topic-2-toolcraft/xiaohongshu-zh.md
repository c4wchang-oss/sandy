# Xiaohongshu Post — Toolcraft 開源 Starter Kit（中文）

---

**設計圈完全沒有人在說這件事：Toolcraft**
**讓 AI agent「建造」設計應用程式的開源 framework — 不是使用，是建造**

今天（10/16）上線，Apache-2.0。設計圈零報導。早期訊號。

---

**裡面有什麼：**

- 可運作的 canvas（不是示意圖，是真的能用的）
- Toolbar + layer 系統
- 帶 keyframe 工作流程的 timeline
- 完整 UI 元件庫：slider、色票選擇器、字型選擇器
- Claude、Cursor、Codex 的內建 AI skills
- Agent 輸出的效能指令 + 視覺測試規則

---

**為什麼這比看起來更重要：**

我一直追蹤的 AI skills 收斂弧線現在完整了：程式碼編輯器 → 設計工具 → 網頁 CMS → 創意桌面應用程式（Voyager，10/10）→ 現在是工具創作本身。

Toolcraft 是第一個 framework，coding agent 不是在創意工具「裡面」操作，而是「創造」工具。

---

**架構上什麼是新的：**

針對產生輸出的視覺測試規則 = 在 framework 層級就有品質關卡，而不是在 prompt 層級。

Agent 的創意輸出在你接觸它之前就已經被檢查視覺一致性了。這和「約束架構」原則一樣 — 約束讓輸出變得可信任。不只是正確，是可信任。

對比：
- Voyager：agent 限定在 scripting API → 檔案保持可編輯，沒有 lock-in
- ProtoPie Code MCP：只讀 → prototype 是唯一真相來源，pipeline 可信任
- Toolcraft：視覺測試規則 → 工具建造品質是架構性的，不只是一個希望

---

**值得深思的開放問題：**

誰來做品味審查？

Toolcraft 提供健全的架構。但預設值、哪些互動感覺可被發現、能力層級給使用者的訊息 — 這些是產品設計決策。沒有 framework 能夠編碼品味。

這就是問題所在。「沒有 slop ≠ 有品味」（Paul Bakaus 說的是 Impeccable，但同樣適用在這裡。）

---

**現在最好的使用場景：**

對特定創意工作流程有深入了解的領域專家 + coding agent + Toolcraft = 為一個精確任務建造的專門工具，且架構已經通過視覺 QA。

這是以前不存在的生產模式。不是「vibe-coded 設計 app」而是有約束架構內建的目的性工具。

---

**誠實的看法：**

今天在社群媒體上零聲量，剛好是值得關注的時候。最後真的重要的工具，往往在炒作週期之前就已經在那裡了。

Apache-2.0。toolcraft.sh

---

#AI設計 #開源 #UX設計 #設計工具 #Agent原生 #產品設計 #約束架構 #創意工具
