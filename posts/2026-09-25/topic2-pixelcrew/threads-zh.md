# Topic 2: PixelCrew — 多 Agent 設計團隊
# Platform: Threads
# Language: Traditional Chinese
# Date: 2026年9月25日
# Image: images/topic2-threads-zh.png (16:9)

---

這週試了 PixelCrew，想跟你說說為什麼我覺得它值得注意——哪怕現在還是 alpha 版本。

做這個工具的人：Andriy，曾任 Product Hunt 設計主管，在 Apple、GitLab、Mixpanel 都做過設計。還有 Dmitriy，GitLab 共同創辦人。他們的共同挫敗：AI 設計工具給你一個漂亮的 mockup，然後說完成了。但真實的設計是一個序列——研究、創意方向、線框圖、文案、設計系統、QA。跳過這些步驟，正是 AI 輸出看起來很 generic、在實際生產環境中撐不住的原因。

所以他們沒有跳過。

PixelCrew 跑三個專業化的 agent，有真正的交接：
Elena 讀你的 brief，做研究。Marcus 寫三個創意方向提案，然後幫最強的那個辯護。Mira 建線框圖，輸出帶設計系統的 production HTML。

每個階段都有產出物。研究報告、創意 brief、線框圖、可部署的程式碼。一個 brief 大概 25-45 分鐘。你用自己的 OpenRouter key，選自己喜歡的 model。

我一直在想的一件事：Marcus 會幫最強的方向「辯護」。不是列出三個選項讓你選，而是表態哪個最好。這是模型在替你做品味決策。大部分人用的時候不會仔細看這一步。但哪個方向「贏了」，以及為什麼，是真正的設計問題，值得你親自把關。

被低估的部分：你可以看到 agent 在討論決策的過程。大多數工具把過程藏起來。讓你看到討論過程，是一種信任界面——跟看 code review 比直接接受 Cursor 的輸出，是同樣的道理。

Alpha 版本，免費，早期。但結構是對的——專業分工、真正的交接、每個階段都有可以審查的產出物。這才是每個 AI 設計工具從一開始就應該有的樣子，而不是「給你一個 mockup」就結束了。
