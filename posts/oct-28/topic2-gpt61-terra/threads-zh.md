# Threads Post — GPT-6.1 Terra（繁體中文）
# Date: Oct 28, 2026 | Tool: GPT-6.1 Terra | Platform: Threads
# Image: ../images/topic2-x-threads-16x9-zh.svg

---

GPT-6.1 Terra 在 10 月 26 日上線。快速、便宜的電腦使用能力。而且它改變了設計工作的某些具體東西。

先說效能表現：Terra 比 GPT-6 Astra 快 3 倍，API 成本比 GPT-5.6 Terra 便宜 50%，而且在大約十分之一的 token 成本下幾乎達到 GPT-6 Astra 的 benchmark 分數。特別是對電腦使用能力——操作 GUI、點擊介面、在 macOS 和 Windows 上跑應用程式——這是讓例行自動化在經濟上合理的效率門檻。

Benchmark 的例子值得仔細閱讀。「把供應商目錄裡的產品照和 catalog 條目配對並更新清單。」「檢查行銷素材的裁切和文字排版，整理需要修改的地方。」這些不是通用能力展示。這些是實際 DesignOps 工作流程中間那些繁瑣、結構化、重複性的任務。Senior designers 每個週五下午在做的事，而不是他們真正被雇用來做的工作。

在成本減少 50%、速度快 3 倍的情況下，自動化那些任務的經濟邏輯剛剛轉變了。AI 輔助設計 QA 的瓶頸從成本移到了 brief 品質。如果你的「檢查這些素材」brief 夠精確，Terra 可以例行執行它。

我整年都在追蹤的 accessibility tree 框架在這裡直接相關。當一個電腦使用模型例行地操作你產品的 UI 來完成任務，每個無法訪問的元素都是一個等待發生的 agent 錯誤。沒有鍵盤快捷鍵代表 agent 需要更長時間或失敗。沒有 focus ring 代表不確定的導航。缺少標籤代表模糊的 context。你的產品的無障礙設計不是一個合規清單。它是 agent 可操作性的品質底線——現在這是一個效率問題，不只是倫理問題。

視覺推理的部分是對 senior designers 特別有趣的地方。在每個推理 effort 等級，Terra 在 MMMU-Pro 上都勝過 GPT-5.6 Terra。「把建築圖轉為 3D 模型」在 Agents' Last Exam benchmark 裡。那不是模式匹配——那是視覺結構的空間解讀。在 max effort 下，Terra 以 GPT-6 Astra 十分之一的價格達到接近前沿的分數。

這在實際上打開了什麼：設計驗證工作流程，agent 點擊 prototype、對照 spec 檢查文案、標記設計 token 值和渲染輸出之間的不一致。在一個讓每天都跑得合理的成本下。

在 ChatGPT Work 和 Codex 中對 Plus、Pro、Business、Enterprise、Edu 方案可用。不在 Chat 中——只在 Work 中。Computer Use 需要 plugin 加上 macOS 的螢幕錄製和輔助功能權限。

誠實的限制：視覺 QA 任務仍然需要精確的 brief。Terra 精確地執行；它不善於解讀模糊性。「檢查素材看起來好不好」不是一個 brief。「檢查沒有文字被裁切、所有 CTA 在行動裝置視口可見、品牌顏色符合附件 spec 中的 hex 值」才是一個 brief。Brief 品質現在是這個工作的成本底線和品質上限。
