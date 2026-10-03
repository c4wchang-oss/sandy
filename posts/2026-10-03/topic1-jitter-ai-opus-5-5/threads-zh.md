# Threads Post — Jitter AI：Opus 5.5 和 motion brief 的問題（繁體中文）
**主題：** Jitter AI 升級到 Claude Opus 5.5——更好的 motion 理解、canvas 上的可編輯動畫、減少 25% credits（2026年10月1日）

---

## 長文反思

Jitter 這週把 AI 升級到了 Claude Opus 5.5。對 motion 的理解更好——轉場、排序、元素節奏、讓動畫感覺是刻意而非機械的那些東西。

升級是真的。但它呈現了一件一直為真、現在更難忽視的事。

AI motion 工具的品質天花板從來都不是模型。一直都是 brief。

我的意思是這樣。Jitter AI 直接在 canvas 上建立動畫——每個 layer、每個 timing、每條 easing 曲線在生成後都完全可編輯。這是正確的產品架構。你得到的是一個存活在你所擁有的檔案裡的 motion 起始點，而不是一個你無法觸碰的完成影片。從「AI 生成完成影片」到「AI 生成可編輯的 motion layer 結構」的轉變，跟 Ming-Image Layer 開始把 AI 生成的設計分解成透明可編輯 layer 是一樣的事，跟 Mirage Tesseract 給 agent 直接存取 keyframe 是一樣的事。為專業生產流程設計的 AI 輸出，不只是為了交付。

Opus 5.5 更強的 motion 理解意味著工具現在執行一個寫得好的 brief 的能力比之前好很多。它理解排序——哪些元素應該先動、layer 之間的 timing 關係如何創造節奏。「建立一個片頭序列，標題以輕微向上飄動的方式淡入，然後支援文字以 0.2 秒的交錯跟上，再來是 CTA 以彈跳方式落地」現在能得到接近那樣的東西。

它還是不能做的：替你寫那個 brief。

Artboard variations 功能值得特別點名。一個 prompt，多個動畫方向並排在 canvas 上。這是結構化的 motion 探索——不是「生成然後祈禱」。這就是好的創意審查流程長什麼樣子：同時看到幾個方向，套用判斷，然後確定一個。Brief 品質定義方向空間。你的判斷在裡面做選擇。

25% credits 減少是個安靜的效率訊號。每個 token 更多輸出。同樣的 brief 走得更遠。在一個 Figma 剛剛明確表示 brief 品質同時是品質決策和 credit 效率決策（從今天起四天後 Weave 正式上線）的世界裡，這正在成為一個模式：寫更好的 brief，用更少的資源得到更多。

誠實的框架：Jitter AI 加上 Opus 5.5 讓 brief 問題無從否認。如果你的 motion 輸出令你失望，差距幾乎可以確定是在 motion intent 的文件上——不在模型的能力。像 motion 總監那樣寫 brief，不是像 prompt 工程師。然後用可編輯的 layer 精確地縮短剩餘的差距。

---

## 短評（單獨發布）

Jitter 升級到了 Opus 5.5——更好的 motion 理解、更好的排序、減少 25% credits。

沒有升級的東西：brief。

生成後每個 layer 都保持可編輯。這是對的決定。輸出是生產起始點，不是完成品。

像 motion 總監那樣寫。像設計師那樣精修。

模型的天花板現在比你的 brief 高。
