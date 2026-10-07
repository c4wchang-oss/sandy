# Topic 1: Graphical — Threads Post (Traditional Chinese)
**Date:** 2026-10-07
**Platform:** Threads
**Format:** Long-form personal reflection
**Image:** graphical-x-threads-zh.jpg (16:9)

---

我常常看到設計師在跟 coding agent 合作時犯一個錯誤：花時間寫更好的風格提示詞。更具體。更有感染力。「現代、乾淨、不要那麼generic」。「受 Linear 啟發」。「精緻、高端的感覺」。

然後 agent 產出的東西跟其他所有 AI 介面看起來都一樣——因為它在詮釋你的描述，而不是在讀你的設計語言。

Josh Puckett（前 Uber，現在是 Iteration Design）這週跟 Adam Michela 一起發布了 Graphical，這是我看過對這個問題最清晰的答案。

這個工具有兩個部分相互搭配。第一：一個視覺主題編輯器，讓你做出真實的設計決策——你的具體色彩配置、字型比例、間距系統、圓角半徑、陰影、動效緩動、元件互動狀態。所有真正讓介面感覺是你的而不是模板的東西。第二：一個輸出，產生 `GUI.md`（給 agent 的詳細主題參考）、token、Base UI React 元件，以及三個 agent skill——一個用來在主題中建立新畫面，一個用來把主題套用到現有 UI，一個用來找出並修復樣式偏移。

你把這個包丟進 coding agent 的 context。它現在有的是 constraint，不是描述。當它生成新畫面時，是直接套用你的設計語言，而不是在近似它讀到的文字。

這是 constraint 架構模式套用在 coding agent 工作流程上。我一直在觀察這個模式在不同工具上成形——Vercel 的 `design.md` 給產品設計 context、Onefold 的 `DESIGN.md` 給網站結構、Thanor 30 個值的 constraint spec 給 AI 生成的網頁、Once UI 2.0 在 npm 套件裡一起出貨自己的 agent harness。每一個都在論證同一件事：瓶頸從來不是模型，是你給它的 constraint 的品質。Graphical 針對視覺語言層面論證這件事，並給你工具去執行它。

我最覺得有趣的是 agent skill 開啟了什麼。第三個 skill——「找出並修復不一致的樣式」——是 agent 在自我審核輸出是否偏移。這不是一個提示詞技巧。這是一個內建在工作流程裡的品質迴圈。Agent 可以在你看到之前先檢查它剛建立的東西是否符合你的設計語言。

誠實的說明：這是一次性購買，不是免費工具。它是圍繞 Base UI（來自 MUI）建立的，所以你的元件實際上是 React，即使 token 技術上是框架無關的。品質天花板在編輯器裡仍然取決於你的設計判斷——Graphical 給你工具，但主題只有你在建立它時做出的決策好。

但原則是對的：只定義一次你的視覺語言，用你的 agent 原生可以讀的格式，然後停止在每個提示詞裡重複描述它。用提示詞工程控制視覺風格是錯誤的工作單位。這才是對的。

