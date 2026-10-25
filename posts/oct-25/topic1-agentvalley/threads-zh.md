# Threads Post — AgentValley（繁體中文）
# 日期：2026/10/25 | 工具：AgentValley | 平台：Threads
# 圖片：images/topic1-x-threads-16x9-zh.svg

---

我曾經以為同時跑三個 Claude Code agent 就代表我工作效率很高。

然後我算了一下自己花多少時間在切換 tab、確認哪個在等我。五個 terminal 視窗。五個游標。其中一個 session 坐在 permission dialog 上已經 20 分鐘了。我在另一個視窗，沒有注意到。

AgentValley 是免費開源的 macOS app，把每個 Claude Code session 放進你 MacBook 的 notch。每個 session 一張卡片。每個 sub-agent 一列。當任何一個需要你的注意時，紅色計數就會出現。一鍵跳到準確的 terminal tab。每個 agent 有一個 pixel programmer 頭像，讓你可以不用讀任何東西就視覺分辨它們。

我一直在想的不是功能集。是它背後的設計決定。

當「太多通知」成為問題時，自然的直覺是加更多通知。聲音。Badge。推播通知。新視窗。AgentValley 做了不同的選擇：把儀表板帶到你眼睛本來就會去的地方——notch——而不是把訊號推到你必須去看的地方。

這個區別——環境周邊可見性 vs 直接打斷——是真正的設計哲學差異。跟 glanceable 介面和 ambient display 背後是同樣的哲學。關於環境監控在不增加注意力成本的情況下降低錯誤率的研究並不新。AgentValley 只是把它應用到兩年前還不存在的東西上。

信任架構也值得注意。唯讀監控作為預設。寫入存取——直接從 notch 批准指令——需要你安裝一個單獨的 plugin。監控層和執行層刻意分開。你可以審核監控行為，因為它是開源的。這些不是被商業模式限制的功能。是讓工具值得信賴的約束。

有一件被低估的事：按 API 定價追蹤每個專案的成本，可匯出為 PDF statement of work。如果你在為客戶專案跑 agent，這是第一個讓 AI 成本成為每個專案明細項目的工具，而不是月費帳單上的謎。Brief 品質 = 信用效率。現在有數據了。可以去看了。

免費、開源、僅限 macOS、Claude Code 專屬。它解決的設計問題不是新的。一直都是同樣的通知設計問題——哪件事需要我的注意，我應該看哪裡？當答案變成「五個 agent 同時申請許可的其中一個」時，這個問題就變得更緊迫了。

---
