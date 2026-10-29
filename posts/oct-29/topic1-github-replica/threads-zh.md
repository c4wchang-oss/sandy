# Threads Post — GitHub Replica（繁體中文）
# Date: Oct 29, 2026 | Tool: GitHub Replica | Platform: Threads
# Image: ../images/topic1-x-threads-16x9-zh.svg

---

GitHub Replica 這週發布了，它的定位值得認真看一下。

這是一個由 GitHub Design 團隊製作的開源 AI 原型設計工具。MIT 授權。跑在 GitHub Copilot app 裡。PM、工程師和設計師都可以用自然語言描述想要什麼，Replica 就建立成互動式 prototype。

但它和今年其他所有 AI 原型設計工具的差別在這裡：Replica 不從空白頁開始 prototype。它從你的 design system 開始。

設定叫做 /setup-skills。你指向你的 design system 文件、component 套件和產品 patterns。Copilot 檢查來源，安裝需要的東西，然後草擬 guidance。設計師 review 那份 guidance，核准每一份，之後才啟用。只有被核准的 guidance 才會影響 Replica 建立什麼。

這個順序很重要。整年，「AI 原型設計」的意思都是：AI 產出一個模糊像你的產品的東西，但 component 用錯、間距用錯、互動 patterns 用錯。設計師抓到問題，重新建立，把 AI 的工作扔掉。生成步驟很快；修正步驟很貴。Replica 賭的是不同的順序：先定義限制，然後讓任何人在限制內 prototype。

對 senior designer 的意涵有點不舒服，但有用。在這個模型裡，你的工作不是成為團隊裡最快的 prototype 製作者。你的工作是定義那些讓其他人的 prototype 是可信任的限制。如果你的 design system 文件很淺或已經過時，Replica 的輸出上限就是淺的或過時的。如果文件嚴謹而且是最新的，整個團隊拿到的就是嚴謹的 prototype。

協作在兩個層面運作。本地 prototype 不需要 server——只需要 Git、Node.js 和 Copilot app。要讓團隊 feedback，你發布到自架的 Replica Hub，讓隊友探索並留下意見。工程師驗證假設。PM 測試想法。設計師擁有護欄——不是迭代隊列。

誠實的限制：Replica 需要 GitHub Copilot 方案來使用 model（或你自己的 model provider，目前是公開預覽）。Hub 是自架的——你的團隊自己部署 Docker、設定 domain、跑 server。這不是 managed SaaS 工具。而且 guidance 品質上限就是你的 design system 文件準確度停下來的地方。

文件裡有一句話我覺得值得直接引用：「要求使用現有核准的 components，而不是視覺上相似的替代品。」

這就是整個 pattern 的精華。reference 勝過 description。Components 就是 brief。

在你設定這個之前值得問一下：你對 /setup-skills 跑出來會產出什麼有多少信心？你對那個問題的答案，就是你對團隊 prototype 長什麼樣子應該有多少信心。

github.com/github/replica。MIT 授權。
