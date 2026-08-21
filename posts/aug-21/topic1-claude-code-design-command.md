# Aug 21 — Topic 1: Claude Code `/design` Command (Research Preview)

**Source:** Announced by Nate Parrott (Anthropic) on Aug 18, 2026  
**The news:** Anthropic ships `/design` in Claude Code — generates editable UI artboards from the terminal, inherits CLAUDE.md workspace context, then hands to Claude for implementation. Research preview for Pro/Max/Team/Enterprise.  
**Core angle:** The sequence is finally correct — design decision before code, not after. Quality ceiling = documentation quality. Constraint architect role moved upstream.

---

## X / THREAD (English) — 8 tweets

**Tweet 1 — Hook**
```
The /design command in Claude Code is not about design entering the terminal.

It's about the sequence finally being correct.
```

**Tweet 2**
```
Old workflow:
Write code → realize the layout is wrong → open Figma → redesign → paste back.

/design flips it:
Generate artboards first → pick one → implement.

The decision happens before the code, not after.
```

**Tweet 3**
```
What makes it interesting: /design inherits your CLAUDE.md.

Your design tokens. Your brand files. Your spacing scale.

The first output isn't a generic guess — it starts on-brand.

That's a fundamentally different starting point from claude.ai/design.
```

**Tweet 4**
```
Honest caveat: early users report it's token-hungry.

The first artboard still needs review against your actual design tokens. It doesn't auto-match your existing code style.

Quality ceiling = the quality of your workspace documentation.
```

**Tweet 5**
```
Which means the constraint architect role just became more important, not less.

You still have to write the CLAUDE.md.
You still have to define the tokens.
You still have to build the system the AI inherits.

The work moved upstream.
```

**Tweet 6**
```
Before /design: designers maintain Figma components + handoff specs.
After /design: designers maintain CLAUDE.md + design token docs + brand files.

Same discipline. Different artifact. Now AI-legible.
```

**Tweet 7**
```
The terminal isn't replacing Figma.

But /design signals that where design decisions get made is shifting — toward wherever implementation happens.

Which is increasingly: where the code is.
```

**Tweet 8 — CTA**
```
Worth asking on your team:

If the design decision now happens in the terminal — who owns it?

The developer with /design access? The designer reviewing artboards? Both?

The role boundary just got blurrier. Talk about it now, not after it ships.
```

---

## X / THREAD (Traditional Chinese) — 8 tweets

**Tweet 1 — Hook**
```
Claude Code 的 /design 指令，不是「設計進入終端機」這件事。

是執行順序終於正確了。
```

**Tweet 2**
```
舊的工作流：
寫程式 → 發現版面不對 → 開 Figma → 重設計 → 貼回去。

/design 把順序翻轉：
先產生 artboard → 挑一個 → 實作。

設計決策發生在寫程式之前，不是之後。
```

**Tweet 3**
```
真正有趣的地方：/design 會繼承你的 CLAUDE.md。

你的 design token、品牌檔案、spacing scale 全部讀進來。

第一個輸出不是泛用猜測，是已經 on-brand 的起點。

這跟開 claude.ai/design 重頭來是完全不同的事。
```

**Tweet 4**
```
老實說：早期使用者反應這個功能很消耗 token。

第一個 artboard 還是要對照你的 design token 檢查一遍。
它不會自動匹配你現有的 code style。

品質上限 = 你的 workspace 文件品質。
```

**Tweet 5**
```
這代表 constraint architect 的角色變得更重要，不是更不重要。

CLAUDE.md 還是要你寫。
Token 還是要你定義。
AI 要繼承的系統，還是要你建。

工作往 upstream 移了。
```

**Tweet 6**
```
/design 之前：designer 維護 Figma components + handoff spec。
/design 之後：designer 維護 CLAUDE.md + design token 文件 + 品牌檔案。

同樣的紀律，不同的產出物，現在是 AI 可讀的格式。
```

**Tweet 7**
```
終端機不會取代 Figma。

但 /design 是個清楚的訊號：設計決策發生的地方，在往 implementation 所在的地方移動。

而 implementation 愈來愈多在：code 在的地方。
```

**Tweet 8 — CTA**
```
值得在你的團隊討論的問題：

如果設計決策現在發生在終端機裡，誰擁有它？

有 /design 權限的工程師？審查 artboard 的設計師？兩者？

角色邊界模糊了。現在就要談，別等到上線之後。
```

---

## THREADS (English) — Long-form

```
Anthropic shipped /design in Claude Code this week — a command that generates editable UI artboards from inside the terminal, then hands them directly to Claude for implementation.

The part most coverage got wrong: this isn't about designers moving into the terminal. It's about the sequence of decisions finally being correct.

For years the default pattern has been: write code → realize the layout doesn't work → go to Figma → redesign → hand back to engineering. The design decision happened after code was started, which meant every early design choice was under pressure to not require "too much" rework.

/design flips that. You run `/design a few options for {feature}`, get several editable artboards, pick the direction, then implement. The decision precedes the code.

What I think matters most: the command inherits your CLAUDE.md. Your design tokens, brand files, spacing scale — all of it is already in the workspace context. So the first artboard isn't a generic guess you iterate away from. It's already starting from your system.

The honest caveat: it's still a research preview. Early users report it's token-hungry. The first artboard needs review against your actual tokens — it doesn't auto-match your codebase style perfectly. These are rough edges you should expect.

But the implication for senior designers is the same one we keep coming back to: the quality ceiling is your documentation quality. Not the model. Not the command. Your CLAUDE.md. Your token docs. The system the AI inherits.

The constraint architect role didn't get automated. It got moved upstream.

/design is a taste of what it looks like when design documentation becomes the input format for implementation. If you're not building toward AI-legible design systems, this week was a useful signal.
```

---

## THREADS (Traditional Chinese) — Long-form

```
Anthropic 這週在 Claude Code 推出了 /design 指令——在終端機裡產生可編輯的 UI artboard，然後直接交給 Claude 實作。

大多數報導搞錯了重點：這不是「設計師進入終端機」的故事，是設計決策的執行順序終於對了。

多年來的預設模式是：寫程式 → 發現版面有問題 → 開 Figma → 重設計 → 交回去給工程。設計決策發生在 code 開始寫之後，代表每個早期設計選擇都承受著「不能要求太多重工」的壓力。

/design 把這個順序翻轉了。你先跑 `/design a few options for {feature}`，拿到幾個可編輯的 artboard，選方向，然後才實作。決策在 code 之前發生。

我覺得最重要的地方：這個指令會繼承你的 CLAUDE.md。你的 design token、品牌檔案、spacing scale 全都已經在 workspace context 裡。所以第一個 artboard 不是從零開始的泛用猜測，而是從你的系統出發的起點。

老實說：這還是 research preview。早期使用者反應 token 消耗很高。第一個 artboard 還是要對照你的 token 仔細檢查——它不會完美匹配你的 codebase 風格。這些粗糙的邊角是你應該預期的。

但對資深設計師的啟示和我們一直談的是同一件事：品質上限是你的文件品質。不是模型，不是指令，是你的 CLAUDE.md，是你的 token 文件，是 AI 繼承的那個系統。

Constraint architect 的角色沒有被自動化，它往 upstream 移了。

/design 讓我們嘗到了「設計文件成為實作輸入格式」是什麼感覺。如果你還沒有在往 AI 可讀的設計系統方向走，這週是一個值得注意的訊號。
```

---

## 小紅書 (Traditional Chinese)

**Title:** Claude Code 的 /design 指令到底改變了什麼？｜Senior UX 視角

**Body:**
```
【今週最值得關注的 AI 設計工具更新】

Anthropic 這週在 Claude Code 推出 /design 指令（research preview），讓你在終端機裡直接生成、編輯 UI artboard，然後交給 AI 實作。

很多人說「設計進入終端機了」——但我覺得這個框架說錯了重點。

真正改變的是：設計決策的執行順序。

—

以前的順序：
① 工程師寫 code
② 發現版面不對
③ 找設計師開 Figma 改
④ 改完再交回去

現在的順序：
① 先跑 /design，產生幾個 artboard
② 選方向、調整
③ 再讓 Claude 實作

決策在 code 之前，不是之後。
這個差異比想像中大。

—

更有趣的地方：/design 會繼承你的 CLAUDE.md

你的 design token、品牌色、spacing scale、字型規則——只要你放在 workspace，第一個輸出就已經是 on-brand 的起點，不是從零開始的泛用猜測。

—

但老實說，這是 research preview，有幾個要注意的地方：

① Token 消耗高，大 context 會很貴
② 第一個 artboard 要對照你的 token 仔細檢查
③ 不會自動完美匹配你的 codebase 既有風格

—

對我來說，這個工具最大的啟示不是「更快設計」，而是：

Design system 文件品質 = AI 輸出品質上限

不是模型，不是指令，是你的 CLAUDE.md。是你的 token 文件。是你建好的那個系統。

Constraint architect 的角色沒有消失，它往更前面移了。

如果你的設計系統還只是 Figma 裡的元件，現在是時候想想要怎麼讓它 AI 可讀了。

#ClaudeCode #AIdesign #UX設計 #設計師必看 #AI工具 #Anthropic #designsystem #設計系統
```

---

## Image Brief

**EN image (16:9 for X/Threads):** See `img/aug-21-topic1-en.png`  
**ZH image (3:4 for Xiaohongshu):** See `img/aug-21-topic1-zh.png`
