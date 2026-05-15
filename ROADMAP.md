# 玄猫之道 · ROADMAP
**网站：** TaoOfCat.com  
**后端：** https://web-production-907c5.up.railway.app  
**前端 Repo：** github.com/chrisdata/taoofcat  

---

## 技术架构

| 层级 | 技术 |
|------|------|
| 前端 | GitHub Pages (HTML/CSS/JS) |
| 后端 | Flask on Railway |
| 数据库 | Firebase Firestore (taoofcat-6cf6e) |
| 认证 | Firebase Authentication (Google) |
| 支付 | Stripe (动态 Checkout API) |
| AI | Anthropic Claude (claude-haiku-4-5-20251001) |
| 图片托管 | Cloudinary (dlm2iyc5i) |
| IG Feed | Behold.so (feed-id: a4pG3UyNqW4slt0pfxbK) — 待换成 @cjluckycats |
| 流量分析 | Google Analytics (G-7Q71WCDFF0) |
| 社媒排程 | Buffer (@taoc.4t) |
| 自动化 | n8n (本地 Windows PC, PM2 24/7, port 5678) |
| 邮件 | Cloudflare Email Routing → miao@taoofcat.com → chrischua83@gmail.com |
| **AI 指挥中心** | **AI Boardroom (本地 Flask, port 7070)** |

**Railway 环境变量：**
- ANTHROPIC_API_KEY
- STRIPE_SECRET_KEY
- CLOUDINARY_API_KEY（备用）

**Threads API：**
- App ID: 3015975775272887
- User ID: 27265815506345793
- Access Token: 有效期约60天（2026年7月到期）

**Cloudinary：**
- Cloud Name: dlm2iyc5i
- API Key: 238641685396762

---

## 已完成 ✅

### 主页 (index.html)
- 傻猪慢动作黑白视频背景 (hero-bg.mp4)（需确认已上传 GitHub）
- **书法金色 Logo**（Illustrator 设计，SVG inline 嵌入 hero，960px 响应式）
- **拼音 Xuán Māo Zhī Dào**（每字对准下方，IM Fell English italic）
- 五只猫横排 grid（点击进故事页）
- 已归道纪念区（小白、小黑）→「已归道的玄猫 / In Loving Memory」
- 猫咪日常 IG Feed（Behold.so）
- 导航栏（书法 logo 小版 28px，滚动后自动变色）
- **中英双语切换**（EN/中文 按钮，localStorage 记忆语言）
- Google Analytics
- 全站 footer 加「帮助中心 / Support」链接

### 猫咪故事页（7只全部完成）
- cat-shazhu.html — 傻猪
- cat-feimao.html — 肥猫
- cat-feipo.html — 茶室猫
- cat-hubanzai.html — 虎斑仔
- cat-mengmengda.html — 萌萌哒
- cat-xiaobai.html — 小白（含 YouTube 视频）
- cat-xiaohei.html — 小黑
- 全部加 Google Analytics
- **全站书法 logo 嵌入 nav（金色，26px）**
- **全站中英双语**（nav、标题、正文、图片说明、引言、closing、按钮全翻译）
- 道德经 / 易经 / 金刚经引言全部英文化
- 各猫 CTA 按钮跟猫名走（让茶室猫为你占卜 / Let Cha Shi Mao Read for You）
- **EN 模式字体升级**：Lora（正文）+ Playfair Display（标题）+ IM Fell English（引言）

### 占卜系统 (divination.html)
- Google 一键登录
- 竹简图 Hero 背景（bamboo-bg.jpg）
- **五行归位选猫系统**（五猫各守一个五行）
- 铜钱投掷仪式（6次，真实音效）
- 宣纸解卦弹窗 + 结果卡
- 64卦完整数据（含 name_en / nature_en / quote_en / src_en）
- **五猫各自 AI prompt 风格**（中英文各一套，共10套）
- **EN 模式传英文 cat_name 给后端**（走英文 prompt）
- **64卦引言全部英文化**（quote_en）
- 分享按钮修复（opacity 替代 textContent，图标不消失）
- **分享各平台独立逻辑**（Threads 发帖 / IG 复制文字 / WA 文字链接 / TG / FB 分享链接 / Save 下载图片）
- **分享自动附带邀请链接**（双方各得2罐，中英双语）
- **Postcard 左下角书法 logo**（32px，金色）
- Postcard 免责声明中英切换
- 猫咪名字双语（选猫界面）
- 大按钮「投币问卦」双语
- 非退款声明（商店弹窗 + 占卜输入页）
- 全站书法 logo 嵌入 nav
- **随机猫咪照片系统**（解卦结果 + 宣纸弹窗，每次随机不同，去背 PNG）
  - Cloudinary 命名：`shazhu-1.png` ~ `shazhu-N.png`（五猫各自）
  - 上传照片后更新 `CAT_PHOTO_COUNTS` 数字即可
  - 照片用 remove.bg 去背，猫咪浮在宣纸上
- **中英双语切换**（全页面，含 JS 动态内容）
- Google Analytics

### 后端 (app.py on Railway)
- **五猫中文 prompt** × 5
- **五猫英文 prompt** × 5
- 根据前端传入 cat_name 自动选中/英文 prompt
- Stripe Checkout（产品名称跟语言切换）

### 用户系统
- 新用户 1 罐罐头
- 邀请系统（双方各+2罐）
- 等级：🐾新手 → 🐱猫奴 → 🦁猫痴 → ✨猫道
- 管理员：chrischua83@gmail.com（∞罐头，😺玄猫主人）
- Profile 下拉面板
- Admin 专属 Live 用户计数器
- 动态 Stripe Checkout（$0.99/罐）
- **非退款声明**（Cans are non-refundable digital credits）

### Support 页面 (support.html)
- FAQ 8条（罐头、退款、账号、付款、隐私、邀请等）
- 联系邮箱：miao@taoofcat.com
- Instagram + Threads 社媒链接
- 回复时间 / Stripe 安全 / 罐头永久 / 怡保马来西亚
- 中英双语

### 邮件系统
- Cloudflare Email Routing 已启用
- miao@taoofcat.com → chrischua83@gmail.com
- DNS MX + TXT + SPF + DKIM 全部配置完成

### 书法 Logo
- Illustrator 设计，王羲之书法风格
- 金色版（#d4a843）— hero + nav + postcard
- 深色版（#231f20）— 浅色背景备用
- SVG 1.1 格式，inline 嵌入，无限缩放

### 自动化营销
- **Threads 全自动发帖**（n8n workflow，每天 9am / 1pm / 7pm）
- n8n 24/7 后台运行（PM2 + Windows Task Scheduler）
- Buffer 连接 IG + Threads（手动排程）

### 五猫 IP 系统
- 五猫性格定义 + 五行对应
- 各猫金句、擅长领域、占卜语气完整设定（中英双语）

### AI Boardroom ← 新增（2026年5月）
本地 AI 指挥中心，运行在 Windows PC，port 7070。

**文件结构：**
```
AI_Boardroom/
├── app.py                  ← Flask 后端（中转 Claude/GPT/Gemini API）
├── 启动Boardroom.bat       ← 双击启动
├── requirements.txt
├── meetings/               ← 会议记录自动存档（JSON）
├── docs/                   ← 上传的参考文件（.md/.txt）
├── data/                   ← 每日话题简报（research_YYYYMMDD.json）
├── outputs/                ← AI 执行模式产出的文件
│   ├── 项目名_日期/
│   └── cats/               ← gpt-image-2 生成的猫图
└── static/
    ├── index.html          ← 主界面（开会/执行/链式对话）
    ├── history.html        ← 历史会议记录
    ├── research.html       ← 每日话题简报（内容版 ForexFactory）
    └── cat.html            ← 猫图编辑器（gpt-image-2）
```

**四种模式：**
- **开会模式** — 三方讨论，Phase 1 独立分析 → Phase 2 互相点评 → 综合汇报
- **执行模式** — Claude 自动拆解任务，三方独立执行，输出真实文件
- **链式对话** — 5轮真实 AI 互动（Claude 拆解 → GPT+Gemini 回应 → Claude 深化 → 各方立场 → Gemini 结论）
- **批准→直接执行** — 链式对话结论一键转执行模式，省 API

**AI 分工：**
- Claude — 系统架构师（常驻，负责逻辑/技术/框架）
- GPT-4o — 创意总监（负责创意/内容方向）
- Gemini 2.0 Flash — 文案创作（最懂 Chris 风格，注入 Persona 档案）

**Persona 注入：**
- GPT 和 Gemini 永久注入「玄猫·平衡口语版」人格档案
- Claude 本身已了解 Chris（无需注入）

**AI 参与开关：**
- 每个 AI 可独立 toggle on/off
- 关掉的 AI 不调用 API，省费用
- 纯技术讨论只开 Claude

**猫图编辑器 (`/cat`)：**
- 上传猫照片 → gpt-image-2 编辑
- 8个快速操作：去背景/换背景/吉卜力风/卡通风/换姿势/加配件/写真风/油画风
- 生成历史记录，点击复用
- OpenAI Key 与 Boardroom 共用 localStorage

**话题简报 (`/research`)：**
- 内容版 ForexFactory——每天早上扫一眼，决定今天做什么
- 影响力评分：🔴高影响 / 🟠中影响 / 🟡低影响 / ⚪弱信号
- Toggle ON 才执行，省 API，顺势而为
- 每个话题含：搜索关键词（点击复制）+ 回复范本（点击复制）
- 今日建议帖子：中文 + 英文草稿 + hashtag（全部点击复制）
- 批量选中话题 → 一键「开会讨论」或「生成内容」

**n8n 每日作战计划 workflow：**
- 每天 8am 自动运行
- Claude (haiku) 根据日期/节气/星期生成今日互动计划
- 存入 `data/research_YYYYMMDD.json`
- 费用约 $0.003/天，一个月 $0.09

**会议记录系统：**
- 每场会议自动存档为 JSON
- `/history` 页面可回顾所有历史会议
- 可手动下载 .txt 格式

**API Keys（本地 localStorage 保存）：**
- Claude: Anthropic API Key (sk-ant-...)
- GPT: OpenAI API Key (sk-...)
- Gemini: Google AI Studio Key (AIza...)

---

## 待完成 📋

### 紧急
- [ ] Behold.so 换成太太 @cjluckycats 的 feed（算了，@taoc.4t 慢慢发）
- [ ] Threads Access Token 续期（约2026年7月到期）

### 玄猫之道网站功能
- [ ] 每日打卡系统（来了送积分，兑换罐头）
- [ ] 好奇感——解读前几行模糊，付费解锁

### AI Boardroom 下一步
- [ ] **Step 2：Threads 发布接口** — 执行模式生成文案后，一键发到 Threads（用现有 Token）
- [ ] **Step 3：猫图 → Gemini 写文案 → 发布一条龙** — cat.html 生图后传 Gemini，预览满意一键发 Threads（带图）
- [ ] gpt-image-2 图片上传 Cloudinary（供 Threads 发图用，需公开 URL）
- [ ] Threads Access Token 自动续期提醒

### 营销
- [ ] **现阶段涨粉策略：真实互动为主**
  - 每天用 /research 页面的回复范本去 Threads 手动互动
  - 搜「失去猫」「猫咪走了」「rainbow bridge」找共鸣帖子回复
  - 顺势关注对方，建立真实受众
- [ ] IG 全自动发布（Meta API 太复杂，暂缓，用 Buffer 手动）
- [ ] n8n 内容栏目优化（多样化主题）
- [ ] **开始发帖推广**——从傻猪 x 小白父子照片开始，讲故事不推销
- [ ] **Threads bio 定稿**（以猫观道 · See the Tao through the cat 🐾）
- [ ] **目标受众更新**：猫奴为主（失去猫的人 / 日常猫奴 / 人生迷茫的猫奴），不强调老庄哲学

### 产品
- [ ] 猫式金刚功 PDF（$9.99，Gumroad）
- [ ] 英文 YouTube 频道
- [ ] 虚拟道具商店
- [ ] 月度会员（$4.99/月）
- [ ] 太太猫粮品牌（长期）

### 优化
- [ ] 全站图片压缩
- [ ] 背景音乐开关（真实古琴）
- [ ] 手机端测试
- [ ] SEO 优化（GA 数据出来后针对性处理）

---

## 品牌

- **品牌：** 玄猫之道 / Tao of Cat
- **IG：** @taoc.4t
- **Threads：** @taoc.4t
- **太太 IG：** @cjluckycats（猫咪日常照片源）
- **书：** The Tao of Your Spoiled Cat (ISBN 9798277657362) https://a.co/d/04csJqXO
- **联系：** miao@taoofcat.com
- **理念：** 以猫观道，以道养猫，万物皆有缘起
- **主IP：** 傻猪（异瞳白猫，占卜师·土）
- **变现路线：** 罐头占卜 → 数字产品 → 猫粮品牌
- **受众定位（更新）：** 猫奴为核心——失去猫的人、日常猫奴、人生迷茫的猫奴

---

## 下一个聊天继续

1. **Boardroom Step 2** — 执行模式文案生成后一键发 Threads（接现有 Token）
2. **Boardroom Step 3** — cat.html 猫图生成后 Gemini 写文案，一键发 Threads 带图
3. **博山炉焚香动画** — Sony 拍 MP4，上传 Cloudinary，加进准备弹窗
4. **猫咪去背照片上传** — remove.bg 处理后上传 Cloudinary（shazhu-1.png 等），更新 CAT_PHOTO_COUNTS
5. **开始发帖推广** — 玄猫来访那篇已发，下一篇傻猪 x 小白父子照片

*最后更新：2026年5月15日*
