# X Thread — Chromatic COMPONENTOWNERS（繁體中文）
# 日期：2026/10/23 | 工具：Chromatic 2026 年 10 月 changelog | 平台：X / Twitter
# 圖片：images/topic2-x-threads-16x9-zh.svg

---

**Tweet 1（Hook）**
Chromatic 剛推出 UI Review 的 component 所有權功能。這是個被包裝成 changelog 條目的 governance 設計問題。

---

**Tweet 2**
COMPONENTOWNERS 是你的 repo 根目錄裡的純文字檔案。每一行把 Storybook 路徑模式對應到負責的人。

每次 build 執行，Chromatic 找到所有有變更的 story，對應到這個檔案，自動把那些負責人加到 UI Review。

每個被指定的 reviewer 必須核准，Review 才能通過。

---

**Tweet 3**
為什麼現在這個很重要：

AI agents——Claude Code、Cursor、Codex、Kombai——在寫 UI 程式碼。它們修改 component。這些變更進 PR。

誰來 review？

之前：剛好被你 tag 到的人，或預設的 reviewer。現在：真正負責那個 component 的人或團隊。

---

**Tweet 4**
容易忽略的區別：

COMPONENTOWNERS 對應的是 Storybook 路徑，不是檔案路徑。

你的 Button 在 `src/components/button/index.tsx`。在 Storybook 裡是 `Forms/Input/Button`。

所有權對應到你的 design system 分類——不是目錄結構。這是正確的抽象層。

---

**Tweet 5**
有一個規則一定要搞對：

最後符合的規則獲勝。

把通用的 `*` 放在檔案最上面。如果放在最後一行，它會覆蓋上面所有規則。

另外：Chromatic 靜默忽略格式錯誤的規則。沒有驗證輸出。在信任它之前先測試。

---

**Tweet 6**
同一個 changelog：SteadySnap 穩定不穩定的 interaction tests。

不穩定的 tests = UI Review 假陽性 = review 疲勞 = 沒看清楚就核准。

COMPONENTOWNERS 改善誰來 review；SteadySnap 改善值得 review 的東西的品質。

這個搭配是刻意的。兩半都重要。

---

**Tweet 7**
誠實的限制：

只有你的團隊有 Storybook 紀律才能用。

沒有 Storybook coverage = 沒有 COMPONENTOWNERS 可以管理的介面 = 你的 component 在沒有任何視覺快照的情況下被修改。

對已投資 visual testing 的團隊：這填補了真實的 governance 空缺。對還沒有的團隊——這是開始的理由。

---

**Tweet 8（CTA）**
更深的轉變：當 AI agents 修改你的 design system component，「tag 一個看起來相關的人」無法擴展。

結構化分配才能擴展。一個檔案。一次性設定。每次 build 自動執行。

問題：你的 design system 有 COMPONENTOWNERS 檔案嗎？

如果你 30 秒內說不出誰負責 `Button/Primary`，你已經有了答案。
