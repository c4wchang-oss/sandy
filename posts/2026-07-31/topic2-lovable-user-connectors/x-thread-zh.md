# X 串文 — Lovable App User Connectors（繁體中文）
**主題：** Lovable App User Connectors — 你做一個 app，你的使用者各自活在不同的資料現實裡
**日期：** 2026 年 7 月 31 日
**平台：** X（Twitter）
**格式：** 8 則串文

---

**第 1 則（hook）：**
Lovable 剛推出 app user connectors。
你 app 的每個使用者現在可以連接自己的 Google、Slack、Salesforce 帳號。
這不是功能更新。這是設計 constraint 的根本轉移。
🧵

---

**第 2 則：**
以前：你做一個有 integration 的 app。
一個 Google 帳號、一個 Slack workspace、一個資料來源。
你 app 的每個使用者看到的都是同一組 integration。你的 integration。

---

**第 3 則：**
現在：每個使用者連接自己的帳號。
Team assistant 抓每個人自己的 Drive 和 Calendar。
Sales dashboard 顯示每個業務自己的 HubSpot pipeline。
你出貨了一個 app。你的使用者各自活在不同的資料脈絡裡。

---

**第 4 則：**
很多人沒注意到的 UX 意涵：
你不再是為一個固定的資料集設計。
你是為 N 個不同的個人資料現實設計。
你的 empty state、loading state、error state，現在需要在你無法預測的脈絡下都能運作。

---

**第 5 則：**
這是使用者層面的 constraint architecture。
不是設計師決定顯示什麼資料——是使用者自己的權限決定的。
Hiring manager 看自己的 Workday pipeline。業務看自己的 CRM。
你的 layout 要能撐過所有這些情境。

---

**第 6 則：**
以前是工程師的 auth 架構問題，現在是設計考量。
使用者還沒連接帳號時會怎樣？Token 過期時？他們只有 read-only 權限時？
這些不是 edge case。這是某個比例的使用者的主要流程。

---

**第 7 則：**
說實話：這讓更多人能做更多東西，但它轉移了責任。
你出貨的產品現在是一個跑在使用者真實資料上的 framework。
如果設計沒有處理好資料的變異性，每個使用者的體驗就會漂移。
Systems thinking 在這裡不是選修。

---

**第 8 則（CTA）：**
真正的標題不是「Lovable 加了 per-user integration」。
是「用 Lovable 做 app，你的使用者各自帶著 N 個你只能用自己的資料測試的個人資料脈絡進來」。
你的設計怎麼處理它還不知道的資料？

