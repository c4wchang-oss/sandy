# Xiaohongshu Post — Chromatic COMPONENTOWNERS（繁體中文）
# 日期：2026/10/23 | 工具：Chromatic 2026 年 10 月 changelog | 平台：小紅書
# 圖片：images/topic2-xiaohongshu-3x4-zh.svg

---

**標題：**
Chromatic COMPONENTOWNERS：用文字檔案做 design system 治理，不靠社交流程

---

**正文：**

如果 AI agents 正在修改你的 UI component，而你靠的是「有人會 tag 對的 reviewer」——那不是 governance，那是靠運氣。

Chromatic 的 COMPONENTOWNERS beta 是更有結構的答案。

---

**它是什麼：**

放在 repo 根目錄的純文字檔案，把 Storybook component 路徑對應到負責的人。每次 build 執行，Chromatic 自動把那些負責人加到 UI Review。每個被指定的 reviewer 必須核准，Review 才能通過。

---

**為什麼 Storybook 路徑 vs 檔案路徑的區別重要：**

COMPONENTOWNERS 在你的 design system 分類層面進行治理，不是目錄結構。

`Forms/Input/Primary` → 在你 DS 裡負責 Input 變體的設計師

不是：

`src/components/forms/input/index.tsx` → 最後 commit 那個檔案的人

Design system 所有權是關於在產品語言裡的 component 責任，不是 repo 語言裡的程式碼作者。

---

**設定前四件事要知道：**

① 最後符合的規則獲勝——把通用的 `*` 放在最上面。放在最後一行會覆蓋上面所有規則。

② Chromatic 靜默忽略格式錯誤的規則。沒有驗證輸出。在信任它之前先測試。

③ 需要 Chromatic CLI 18.8.0+

④ 只有你的團隊有 Storybook coverage 才有用。沒有 story = 沒有可以治理的 component 介面。這是前提，不是附注。

---

**同一個 changelog：SteadySnap**

穩定不穩定的 interaction tests 在到達 UI Review 之前。假陽性雜訊減少 = reviewer 真的讀面前的東西。

COMPONENTOWNERS 改善誰來 review。
SteadySnap 改善值得 review 的東西的信號品質。
兩半都重要。

---

**Senior UX 觀點：**

AI agents——Claude Code、Cursor、Codex、Kombai——修改你的 design system component 比你的 review queue 清空的速度還快。「Tag 一個看起來相關的人」在 agent 速度下就不管用了。結構化分配才能擴展。

一個檔案。一次性設定。每次 build 自動執行。

你的團隊的問題：誰負責你的 `Button/Primary` story？

如果你 30 秒內答不出來，先從那裡開始——不是從 governance 檔案開始。

---

#DesignSystem #Chromatic #UITesting #DesignOps #ComponentOwnership #Storybook #AI設計 #UX設計師
