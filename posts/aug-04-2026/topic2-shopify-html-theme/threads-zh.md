# Threads 貼文 — 中文（繁體）
## 主題：Shopify HTML-first AI 主題 — 當程式碼本身變成限制架構
## 日期：2026 年 8 月 4 日

---

Shopify 正在預覽一個新的 AI-native 主題，程式碼行數比 Horizon 少了 93%。

原因值得仔細想，不只是「精簡」這麼簡單。

Horizon 是為了可視化配置而設計的——大量 JSON，序列化輸出，對商家有彈性，但直接讀很難懂。新主題回歸 HTML-first。Shopify 產品總監 Ben Sehl 解釋：「主流 AI 模型本來就懂 HTML，表達力強、語境明確、token 效率高。」

今年有 20% 的 Shopify 商家用 Sidekick 編輯主題，產生了 2500 萬次修改。Shopify 從中得到的結論是：程式碼越明確、越好讀，AI agent 的表現越好。這跟人類開發者對「可維護 codebase」的要求完全一致。

這種對齊不常發生，值得注意。

我最在意的細節：Shopify 為 AI 生成的主題制定了 20 條規則——合約規範、結構要求、複雜度上限、巢狀約束、檔案大小限制。

這不是文件。這是嵌進主題語言結構裡的限制架構（constraint architecture）。這些規則不是參考，是 AI 在裡面跑的護欄。

今年我們在每個主要設計工具鏈裡都看到這個模式：限制 AI 生成範圍的設計系統、作為機器可讀合約的 DESIGN.md、定義 AI 輸出邊界的 component library。Shopify 在 storefront 程式碼層做了同樣的事。

對於正在思考 AI-facing 系統的設計師，這件事的意義是：可讀性不再只是 codebase 的衛生習慣。當 AI agent 編輯你的輸出，可讀性就是準確性。一個 agent 第一次讀就能正確解析的模板，產生的是正確的修改。一個它要反向工程的 JSON 結構，產生的是偏移。

你的系統地基，就是你的 AI 能穩定做到的事情的天花板。

---
