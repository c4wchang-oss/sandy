# 主題一：Figma 3D Transform + Dev Mode Agent
# 平台：小紅書
# 語言：繁體中文
# 日期：2026 年 11 月 21 日

---

## 標題
Figma 原生 3D + Dev Mode 有 agent 了｜這個 pipeline 的改變比你想的大

---

## 正文

Figma 這個月推了兩個更新，合在一起，補上了一個以前需要好幾個工具才能完成的 pipeline。來整理一下真正改變的是什麼，以及需要注意的陷阱。

**3D transform（11 月 12 日，open beta）**

一個可以套在任何 layer 上的 non-destructive effect：vector、image、frame、component、text 都可以用。X/Y/Z 軸旋轉，設定 depth（Z 軸位移）。原始 layer 保持可編輯，shader 可以疊加在上面。

最關鍵的一點：3D transform 直接對應 CSS——translateZ、perspective、transform-style。Dev Mode 裡可以看到精確的數值直接複製。

**這替代了什麼：**
- 在 Cinema 4D 或 After Effects 裡做的 3D mockup
- 為了讓 stakeholder 看空間感而渲染出來的影片
- 手動跟工程師解釋 CSS transform 數值的過程

**新的 pipeline：**
1. 在 Figma 裡設計 3D 場景（canvas 上直接拖動 handles，即時預覽）
2. 用 Figma Motion 加動畫——keyframe 旋轉 X/Y 和 depth
3. Dev Mode 複製精確的 CSS transform 數值
4. Coding agent 透過 Figma MCP 讀取整份設計，包含 3D effects

**Figma agent 進駐 Dev Mode（11 月 19 日）**

Figma agent 現在也在 Dev Mode 裡了。可以用它 inspect 設計、比較不同版本的差異、取得特定 layer 的 code snippets、批次下載 assets。

這把 handoff loop 關閉了：Design agent 組場景，Dev Mode agent 解釋給工程師。

**5 件使用前需要知道的事：**

1. 在 parent frame 開啟「Keep nested layers 3D」= 該 frame 的 opacity、blend modes、clip content 全部停用——先規劃好你的 layer 結構
2. 3D transform 和 shader 可以疊加（non-destructive effects 可以組合）
3. Figma agent 可以用一個 prompt 組出完整的 3D 場景並加上動畫
4. Depth = CSS 的 translateZ；Perspective effect = CSS 的 perspective 屬性
5. 需要 Full seat（需要 edit access）

**重新 frame 這件事的故事：**

Figma 自家 motion designer 需要把幾十張卡片排成 3D grid、helix、ring、scatter 的 layout 邏輯。他請 Figma agent 幫他做了一個 plugin，agent 做出來了，他用了。

這是重要的 frame：不是「AI 幫我設計」，而是「我描述了我需要的工具然後拿到了它」。

Tool authorship 正在成為 senior UX designer 最重要的新技能之一。

---

#figma #ux設計 #設計工具 #3d設計 #ui設計 #設計師日常 #ai設計工具 #figma技巧 #productdesign #設計系統
