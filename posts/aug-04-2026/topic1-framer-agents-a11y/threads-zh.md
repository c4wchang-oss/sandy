# Threads 貼文 — 中文（繁體）
## 主題：Framer Agents 七月 2026 更新 — 無障礙設計進入工作流程
## 日期：2026 年 8 月 4 日

---

Framer Agents 現在可以跑 accessibility check 了。

不是獨立的工具，不是 export 出去的報告。就在你建頁面的同一個對話裡。

七月 2026 更新加入了 A11Y 圖層屬性支援——也就是說你可以 prompt agent 去確認你的 nav 有沒有缺少 label、幫所有圖片根據前後文加上 alt text、在 interactive component 套上 ARIA metadata。然後它就去做了。全部，同一個 chat。

這次更新同時也把 Page Effects 拉進 Agent 的操作範圍——捲動動畫、進場 transition、整頁 motion——代表設計師以前最常拖延的兩件事（動態效果和無障礙），現在都是 agent 的預設能力，不是事後補的功能。

我一直在想為什麼這件事比功能清單更重要。

設計業講「把 accessibility 建進去，不要之後才補」講了二十年。這個建議是對的，但大部分時候被忽略，因為工作流程不支援它。Accessibility 稽核發生在最後，是因為工具就活在最後面——獨立的 plugin、獨立的 checklist、和設計流程分開的對話。

當稽核工具跟做東西的工具是同一個，藉口就變了。不再是「沒時間」，而是「沒開口問」。那是一種不同層次的問責。

給所有團隊的測試：下次 Framer Agents session 結束前，再下一個 prompt：「對這個頁面跑一次 accessibility check。」看它找到什麼，看它花多久。

如果答案是五分鐘以內，你就沒有流程上的藉口繼續略過這件事了。

---
