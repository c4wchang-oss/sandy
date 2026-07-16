# Threads 貼文 — Relume Library MCP（中文）
**格式：** 長篇個人反思，無 hashtag

---

我一直在想，為什麼 AI 生成的 UI 幾乎永遠都不好——我覺得原因比大家講的更簡單。

不是模型的問題。是 context 的問題。

叫任何一個 AI 程式工具建一個多頁面網站，你都會拿到同樣的結果：每個 section 都是獨立設計的。不同的按鈕樣式、不同的間距、不同的顏色決策。整個頁面是拼湊出來的，不是一個產品。就像是讓五個工頭各自裝修一間房間，但從頭到尾都沒有溝通過。

根本原因：AI 非常擅長寫程式碼，非常不擅長記住你的 component 長什麼樣子。它沒有設計系統，所以它在猜，在近似，在發明。

Relume 的 Library MCP 從結構上解決了這件事。把它連到 Cursor、Claude 或 Windsurf，你的 AI assistant 現在可以搜尋 1000+ 個可用於生產環境的 component——拿到的是真正的程式碼，不是猜出來的版本。每個 component 都帶著共用的 primitives、Tailwind token 和同一套 spacing system。從一開始，所有東西就說同一種語言。

我目前的工作流程：規劃頁面、用白話文描述每個 section、讓 AI 找到對應的 Relume component、帶著設計系統一起拉進來，然後改成自己的品牌樣式。就算在做品牌化之前，這種方式得到的一致性就已經遠遠優於空白畫布式的生成。

這就是我說的「constraint architecture」。AI 的輸出品質不只是模型能力的問題，而是你給模型什麼樣的限制和 context 來工作。一個精選的 component 庫就是一種限制。MCP 是傳遞這個限制的機制。

這背後有一個更深的趨勢：MCP 正在成為把設計系統 context 注入 AI agent 的主要介面。Figma MCP、Relume MCP、design token MCP。我們正在從「AI 生成」移動到「AI 檢索並調整」。

對這個時代的 senior designer 來說，問題是：你的團隊的 source of truth 是什麼？它可以透過 MCP 存取嗎？如果不行，AI 就不知道你們建了什麼——然後它就會繼續在猜。
