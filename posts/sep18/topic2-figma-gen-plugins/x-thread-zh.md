# X 串文 — Figma Generative Plugins：Brief 就是產品（繁中）
## Sep 18, 2026 | 圖片：topic2-x-threads-zh.png（16:9）

---

**Tweet 1（hook — 附圖）**
Figma 的 agent 現在可以用純文字建 plugin。

描述你需要什麼工具。
Agent 寫程式碼。
發布給 500 萬設計師。

角色轉換不是「AI 做你的工作」。
是「你設計 AI 用來做所有人工作的工具」。

---

**Tweet 2**
Generative Plugins 現在開放社群發布。

描述一個 plugin——批次重新樣式 icon、生成 type ramp、標記壞掉的流程。
Agent 建好有運行 UI 的 plugin。
你發布到 Figma Community。

不需要 JavaScript。
只需要 constraint architecture。

---

**Tweet 3**
Figma 的文件做了一個值得說清楚的區別：

Plugin = 確定性
相同輸入 → 相同輸出，每次都是。

Skill = 適應性
Agent 解讀脈絡，結果每次可能不同。

這是設計決策——跟你在 design system 做的決策一樣：這個模式要 hardcode，還是留給 judgment 的空間？

---

**Tweet 4**
文件裡的範例 prompt 很有啟發性。

一個 icon styler plugin：
→ 輸入：當前選取的 icon
→ 顏色：primary + accent 加上預設值
→ 尺寸：16、24、32
→ 規則：每個尺寸一個輸出 frame，精確尺寸
→ 規則：stroke weight 隨尺寸等比縮放
→ 規則：不要額外的包裝 frame

這不是 code prompt。這是 component spec。

---

**Tweet 5**
那個 prompt 裡的每條規則都是設計決策：

有效的輸入是什麼？
什麼轉換應該永遠發生？
什麼事情絕對不應該發生？
哪些 edge case 需要明確處理？

如果你寫過嚴謹的 component specification，你已經有這個技能了。

交付格式改變了。思考方式沒變。

---

**Tweet 6**
社群發布的角度被低估了。

過去大多數 Figma plugin 是想解決自己問題的開發者建的。

現在最好的 plugin 作者將會是碰到每個 edge case 的設計師——那些因為手動除錯過兩百次、能精確描述轉換規則的人。

---

**Tweet 7**
誠實的提醒：

Plugin = 確定性。
缺口在規模化時會浮現。

「相同輸入 → 相同輸出」在你的輸入變化比你的 prompt 預期的更多時會壞掉。

用防禦性的方式寫你的 constraint architecture。
在你輸入範圍的邊界測試，不只是在乾淨的中心案例。

---

**Tweet 8**
這週去建一個 plugin。

不是為了提升效率——是為了理解新的創作循環。

描述一個你手動執行了太多次都不想承認的流程。看 agent 把你的心智模型翻譯成運行的程式碼。

你會先編碼什麼工作流？
