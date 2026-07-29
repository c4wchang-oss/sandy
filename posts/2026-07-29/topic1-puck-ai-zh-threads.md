# Topic 1: Puck AI — Threads (Traditional Chinese)
**Platform:** Threads
**Format:** 長文反思
**Date:** July 29, 2026
**Topic:** Puck AI — 可嵌入產品的 AI 生成層

---

最近大家講了很多「給 AI context」——DESIGN.md、token、MCP connector。
預設假設一直是：你在設定 AI，讓它更好地幫你設計。

Puck AI 把這個邏輯翻轉了。

它是一個 React component，讓你把 AI 生成能力直接嵌入你的產品裡。
不是你在用 AI——是你的用戶在用 AI 生成介面。
而你，只是那個決定他們能建什麼的人。

兩個模式。Assembly：AI 用你的 component library 組頁面。Design：AI 在你定義的 guardrails 裡創造新 components。這個分法在概念上做了很多事。

Assembly 模式裡，沒有任何 prompt 技巧能讓 AI 生成你 library 以外的東西。
生成的邊界，就是你已經建好的東西的邊界。
Design system 不再是「參考」——而是一道實實在在的牆。

Design 模式裡，你寫 guardrails，你定義「新」的樣子。
AI 在你設計的語言裡運作。

讓我印象深刻的是：寫 component 架構的 product designer，現在是在為產品裡每一個用戶定義 AI 的生成詞彙。設計決策以前到「我們要推什麼功能」為止，現在延伸到了「用戶能叫 AI 建什麼」。

工藝問題改變了。不再只是「這個 component 設計得好不好」，而是「這個 component 應不應該成為 AI 可以生成的東西？」

Constraint architecture 以前是設計系統在工程師詮釋下保持形狀。
現在是設計系統定義面向用戶的 AI 生成的可能空間。

Puck AI 真正的貢獻不是那個 embedded editor——是讓這個問題變得清晰：誰在控制 AI 在你的產品裡能建什麼？

答案應該是 designer。
