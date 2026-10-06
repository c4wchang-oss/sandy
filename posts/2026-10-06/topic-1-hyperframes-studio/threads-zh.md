# Topic 1: HyperFrames Studio — Threads Post (Traditional Chinese)
**Date:** 2026-10-06
**Platform:** Threads
**Format:** Long-form personal reflection
**Image:** hyperframes-x-threads-zh.jpg (16:9)

---

HyperFrames Studio 這週上線了。免費。開源。HeyGen 團隊開發的。它嘗試用跟市面上所有工具都不一樣的方式解決 AI 影片問題。

前提是這樣：HyperFrames 的影片就是一個 HTML 專案。Agent 負責寫 HTML、CSS 和 GSAP 動畫。你在 Studio 裡開同一個專案資料夾。沒有匯出步驟，沒有轉換，沒有分開的「AI 版」和「可編輯版」。整個過程，agent 和人類在同一組檔案上工作。

身為設計師，讓我覺得有意思的是它定義任務切割的清晰度。Studio 介面就內建了兩種模式：當你要改故事、結構，或是需要跨多個場景做調整的時候用「Ask agent」；當你想調整時間點、修某個你可以直接指著的版面細節或動畫的時候用畫布編輯器。工具不讓你混淆這個邊界。這是一個產品決策，不是限制。

過去幾個月我一直在追蹤一個 AI 創作工具的模式逐漸成形：輸出被設計成製作的起點，而不是完成品。Ming-Image Layer（來自 AI 的可編輯圖像層）、Jitter AI（可編輯的動畫層）、Mirage Tesseract（影片 agent 的關鍵幀存取）、現在的 HyperFrames Studio（共享時間軸）。每個主要的創作媒體類型都到位了：圖像、動態、影片。這個類別現在完整了。「AI 創作工具」的意義跟六個月前不一樣——它意味著一個預設你會編輯結果的工具。

畫格標注模式也值得注意。你可以在預覽裡直接指著某個畫格留下備注，agent 去處理。跟 Shopify Sidekick 的截圖回饋循環（10/2）和 MagicPath 的畫布選取即提示模式（10/1）是同一個空間標注原則。指著一個東西幾乎永遠是比描述它更好的提示。理解這件事的工具正在收斂。

技能基礎建設：`npx skills add heygen-com/hyperframes --full-depth` 把整個框架放進你的 coding agent 的 context。Figma → Notion → Framer → Comfy Agent → 現在的 HyperFrames。每個創作層現在都有 skill 介面。三個月前這還不是事實。

誠實的注意事項：HTML/GSAP/CSS 作為影片格式對 agent 創作來說很優雅，但不是每個團隊的原生製作格式。目前只有 macOS + Linux（Windows 即將推出）。Agent 的第一個版本是草稿——團隊對此很直接。而且這還很早期；GitHub repo 在上線前後一天之內就發布了九個 release。

但架構原則——同一組檔案、清晰的任務邊界、精確修改時用空間標注——是正確的。大多數 AI 影片工具還是給你一個完成的影片，如果你需要改什麼就只能重新提示。那是錯誤的模式。

HyperFrames 在回答的問題是：如果 AI 創作流程從一開始就為協作設計，而不是上線之後再加個編輯模式，會是什麼樣子？

這個問題對每個正在上線 AI agent 的創作工具都會一直有意義。
