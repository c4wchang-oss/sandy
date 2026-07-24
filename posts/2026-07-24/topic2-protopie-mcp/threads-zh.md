# Threads 貼文 — ProtoPie MCP（繁體中文）
**平台：** Threads
**日期：** 2026 年 7 月 24 日

---

ProtoPie 這週上線 MCP 支援了。兩個模式：Studio MCP（在 ProtoPie 裡用自然語言建立互動），以及 Code MCP（讓 AI coding agent 拿到 prototype 背後的實際互動模型）。

外面大多數報導都在講 Studio MCP——「現在可以用自然語言描述，AI 幫你把 ProtoPie 的互動接好。」

這很有用。但 Code MCP 才是值得想更多的部分。

背景脈絡：在這之前，AI agent 要從 prototype 實作設計規格，拿到的是什麼？截圖、匯出影片、工程師的文字描述。這全部都是「詮釋」——工程師（或 agent）拿到一個視覺 artifact，從裡面推斷互動意圖。

Code MCP 改變了輸入。不是詮釋了，agent 拿到的是真正的互動模型——trigger、response、變數、公式、state、layer 結構。不是視覺近似，是規格本身。

Dev View 讓 context 變成可以精準瞄準的。你分享整個 prototype、單一 scene、一個 component、甚至一個 layer 的連結。Agent 拿到的是精準的、相關的 context，不是你整個設計系統的雜訊。

影響：從「點擊按鈕要有動畫」（從影片推斷）→「Trigger: Tap, Target: #button-01, Response: animate opacity 0→1, Duration: 200ms」（從規格讀取）。詮釋步驟被查詢取代了。

這符合我一直在追蹤的模式：Figma Code Layers、Flowstep、UserTesting MCP——設計 artifact 都在長出機器可讀的那層。Prototype 從來就應該是 spec。現在它真的是了。
