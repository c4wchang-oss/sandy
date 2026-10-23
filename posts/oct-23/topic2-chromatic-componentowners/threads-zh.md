# Threads Post — Chromatic COMPONENTOWNERS（繁體中文）
# 日期：2026/10/23 | 工具：Chromatic 2026 年 10 月 changelog | 平台：Threads
# 圖片：images/topic2-x-threads-16x9-zh.svg

---

Chromatic 的 COMPONENTOWNERS beta 是一個很小的 changelog 條目，但 governance 意涵讓我想了一會兒。

讓它重要的背景：AI agents——Claude Code、Cursor、Codex、Kombai——正在以超過大多數團隊 review 速度的速率寫 UI 程式碼。它們碰到 component。這些變更進 PR。問題不是有沒有人 review，而是對的人有沒有 review。

COMPONENTOWNERS 在結構上回答了這個問題。這是 repo 根目錄裡的純文字檔案。每一行把 Storybook 路徑模式對應到負責的人。每次 build 執行，Chromatic 找到每個有變更的 story，自動把那些負責人加到 UI Review。每個被指定的 reviewer 必須核准，Review 才能通過。

值得放慢腳步的區別：它對應的是 Storybook 路徑，不是檔案路徑。你的 design system component 分類結構是 governance 結構，不是你的目錄樹。`Forms/Input/Primary` 對應到在 design system 語言裡負責那個 component 的人——不是最後 commit 那個檔案的人。這是正確的治理層。

靜默失敗的風險是真實的：Chromatic 不驗證格式，格式錯誤的規則被靜默忽略。錯字的 email、沒有匹配任何東西的模式——都靜默忽略。在你在真實的 review 裡依賴它之前先測試你的 COMPONENTOWNERS 檔案。

同一個 changelog 還推出了 SteadySnap，它在不穩定的 interaction tests 到達 UI Review 之前就穩定化它。搭配很重要：COMPONENTOWNERS 改善誰來 review；SteadySnap 減少他們面對的假陽性雜訊。問題的兩半都解決了。

更深的轉變：社交流程——「tag 一個看起來相關的人」——在 agents 以比你的 queue 清空更快的速度 commit component 變更時無法擴展。結構化分配才能。一個檔案，一次性設定，每次 build 自動執行。

對已投資 Storybook 的團隊：這填補了真實的 governance 空缺。對還沒有的——這是開始的理由。誠實的限制是 COMPONENTOWNERS 需要 Storybook 基礎才能做任何事。

你的團隊的問題：誰負責你的 `Button/Primary` story？如果你 30 秒內答不出來，你現在還沒有 governance 問題。你有一個更根本的問題。
