# 主題二：Skillux — 小紅書貼文
# 平台：小紅書
# 語言：繁體中文
# 日期：2026 年 11 月 23 日

---

## 標題
AI agent 現在可以用 $1.99 買到 UX 設計判斷力——這對 senior 設計師意味著什麼？

---

## 正文

Skillux 這個月上線了：一個 designer 著作的 SKILL.md pack marketplace，支援 Claude Code、Cursor 和 Codex。每個 pack 給 AI coding agent 鎖定的 UX 規則——flow、互動狀態、間距、文字尺度——以及一個可以參考的可運行範例介面。

這是我今年一整年追蹤的 skills 收斂趨勢（每個主要 AI 工具層都得到 agent 可讀的 constraint 檔案）到達它的 marketplace 時刻。

**一個 Skillux pack 實際上給 agent 什麼：**

- 鎖定的 flow 路徑和 IA——agent 沒辦法從零發明導覽 pattern
- 所有互動狀態都寫成規則——hover、focus、empty、error、loading；再也不會「忘記加 empty state」
- 文字尺度和間距節奏——不需要每次手動糾正的一致尺寸
- 可運行的範例網站——在安裝 constraint 之前先查看輸出

**安裝方式：**

```
npx skillux add <skill-slug>
```

Cursor 放進 `.cursor/skills/`，Claude Code 放進 `~/.claude/skills/`，Codex 放進 `.agents/skills/`。一次安裝，三個工具目標。

**5 件值得知道的事：**

1. **Floor，不是 ceiling** — marketplace skill 編碼的是通用 UX 最佳實踐；給你比預設更好的輸出，不是品牌特定的輸出

2. **定價** — 有免費的入門 pack；單個 pack $1.99-$7.99；完整 library 年費 $169.99

3. **它做不到什麼** — 它無法編碼你產品的具體視覺品牌、你的 component library 選擇，或你產品的特定 IA 決策；那些需要你自己著作 SKILL.md（Skillux 也給了你那個格式）

4. **Authority hierarchy 問題** — 如果你同時運行一個 Skillux pack 和你自己的 SKILL.md，哪個優先？目前還沒有清楚的答案；安裝兩個之前先檢查是否有衝突規則

5. **Governance 比較** — Miro VibeLab（10 月 26 日）= 設計師在內部著作 skill，編碼你的設計系統 component 和規則。Skillux = 設計師購買通用 UX skill 安裝。同樣的原則，不同的權威來源。

**對 senior 設計師的誠實框架：**

Floor 是真實的工作量。修 hover 狀態、修正 empty state、加 loading pattern——那是真實的時間成本。如果一個 Skillux pack 能防止那類錯誤，它就解放了你去做只有你才能做的工作。

Ceiling 才是你真正被付錢做的事：你品牌的視覺語言、你產品的具體 IA、你的 component 架構決策。那些不會被 marketplace 商品化，需要你的判斷力、你的著作、你刻意的 constraint 設計。

Skillux 讓清除 floor 的成本變便宜了。Ceiling 還是要你自己去建。

---

#UX設計 #AI工具 #claudecode #cursor #設計系統 #AIworkflow #SKILL_md #產品設計 #designops #senior設計師 #AI設計工具

---
