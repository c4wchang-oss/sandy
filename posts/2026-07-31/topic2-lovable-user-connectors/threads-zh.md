# Threads 貼文 — Lovable App User Connectors（繁體中文）
**主題：** Lovable App User Connectors — 你做一個 app，你的使用者各自活在不同的資料現實裡
**日期：** 2026 年 7 月 31 日
**平台：** Threads
**格式：** 長文反思 + 短句重點

---

## 長文貼文

每一個 AI 做的產品工作流程裡，都有一個設計被現實考驗的時刻。Lovable app 的這個時刻，剛變得複雜很多。

Lovable 這週推出了 app user connectors。簡單說：你發布的 app 的每個使用者，現在可以連接自己的第三方帳號——自己的 Google Drive、自己的 Slack、自己的 Salesforce pipeline、自己的 HubSpot CRM。你為自己做的 app，變成一個跑在你使用者個人資料上的 framework。

聽起來是工程功能。實際上是設計問題。

以前，做一個有 integration 的 app，意思是做一個有你的 integration 的 app。一個帳號、一個資料來源、一個脈絡。每個使用者看到同樣的資料風景。你可以有把握地設計，因為你知道會出現什麼。

現在資料是個人的。Team assistant 抓每個人自己的 Drive 和 Calendar。Sales dashboard 顯示每個業務自己的 pipeline。Recruiting 工具顯示每個 hiring manager 自己的候選人。你出一個設計。它跑在 N 個不同的資料現實上。

UX 的影響是連鎖的：

Empty state 不再是 edge case。還沒連接帳號的使用者，跟已經連接的使用者，first-run 的體驗是本質上不同的。從「未連接」到「已連接」的過渡，現在是主要設計流程，不是事後補丁。

Error state 變成身份特定的。當使用者的 token 過期，或者他們只有 read-only 權限，這個錯誤不是通用的——它關於他們對他們自己資料的存取。copy、修復路徑、嚴重程度，全都取決於設計師無法完全預測的脈絡。

Layout 的穩健性成了承重牆。你用 50 列的 pipeline 設計了 dashboard。當一個使用者有 500 列、另一個有 3 列，會發生什麼？你對 spacing、scroll 行為、預設排序的假設——全都被你無法完整模擬的變異性考驗。

這在企業產品設計裡是熟悉的問題，但對 Lovable builder 來說是新領域。你不再是你做的東西的主要使用者。你是一個 framework 的架構師，別人的資料在裡面跑。

當系統事先不知道自己的輸入時，systems thinking 不是選修。

---

## 短句重點

你做了一個 app。
你的使用者各自活在不同的資料現實裡。
資料是你的時候設計能運作。
問題是不是你的時候它還撐得住嗎。

