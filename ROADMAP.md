# 玄猫之道 · ROADMAP
**网站：** TaoOfCat.com  
**后端：** https://web-production-907c5.up.railway.app  
**前端 Repo：** github.com/chrisdata/taoofcat  
**后端 Repo：** github.com/chrisdata/taoofcat-api  

---

## 技术架构

| 层级 | 技术 |
|------|------|
| 前端 | GitHub Pages (HTML/CSS/JS) |
| 后端 | Flask on Railway |
| 数据库 | Firebase Firestore (taoofcat-6cf6e) |
| 实时在线 | Firebase Realtime Database (asia-southeast1) |
| 认证 | Firebase Authentication (Google) |
| 支付 | Stripe (动态 Checkout API) |
| AI | Anthropic Claude (claude-haiku-4-5-20251001) |
| 图片托管 | Cloudinary (dlm2iyc5i) — Upload preset: Use filename as public ID |
| IG Feed | Behold.so (feed-id: a4pG3UyNqW4slt0pfxbK) — 待换成 @cjluckycats |
| 流量分析 | Google Analytics (G-7Q71WCDFF0) |
| 社媒排程 | Buffer (@taoc.4t) |
| 自动化 | n8n (本地 Windows PC, PM2 24/7, port 5678) |
| 邮件 | Cloudflare Email Routing → miao@taoofcat.com → chrischua83@gmail.com |
| **OG 分享路由** | **Cloudflare Worker (share.taoofcat.com)** |
| **AI 指挥中心** | **AI Boardroom (本地 Flask, port 7070)** |

**Railway 环境变量：**
- ANTHROPIC_API_KEY
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET
- TELEGRAM_BOT_TOKEN
- TELEGRAM_CHAT_ID
- CLOUDINARY_API_KEY（备用）

**Stripe Webhook：**
- Endpoint: https://web-production-907c5.up.railway.app/stripe-webhook
- 监听事件: checkout.session.completed
- Destination name: taoofcat-feeding

**Threads API：**
- App ID: 3015975775272887
- User ID: 27265815506345793
- Access Token: 有效期约60天（2026年7月到期）

**Cloudinary：**
- Cloud Name: dlm2iyc5i
- API Key: 238641685396762
- 图片 URL 格式: `https://res.cloudinary.com/dlm2iyc5i/image/upload/q_auto,f_auto,w_1200/文件名`
- 上传注意: 必须用 Upload preset 且开启「Use filename as public ID」，否则会加随机后缀
- **oracle-shares** preset（Unsigned）— 专供占卜分享卡片 PNG 上传用

**Firebase Realtime Database：**
- URL: https://taoofcat-6cf6e-default-rtdb.asia-southeast1.firebasedatabase.app
- 用途: 实时在线人数（Presence 系统）
- Rules: presence 节点 write=true, read=auth

---

## 已完成 ✅

### 主页 (index.html)
- 傻猪慢动作黑白视频背景 (hero-bg.mp4)
- **书法金色 Logo**（Illustrator 设计，SVG inline 嵌入 hero，960px 响应式）
- **拼音 Xuán Māo Zhī Dào**（每字对准下方，IM Fell English italic）
- 五只猫横排 grid（点击进故事页）
- 已归道纪念区（小白、小黑）→「已归道的玄猫 / In Loving Memory」
- 猫咪日常 IG Feed（Behold.so）
- 导航栏（书法 logo 小版 28px，滚动后自动变色）
- **中英双语切换**（EN/中文 按钮，localStorage 记忆语言）
- Google Analytics
- 全站 footer 加「帮助中心 / Support」链接
- **Firebase Presence** — 实时在线人数写入 Realtime Database
- **购书横幅** — Tao of Cat 电子书 $7.99（Gumroad）

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
- **全站中英双语**
- **EN 模式字体升级**：Lora + Playfair Display + IM Fell English
- **购书横幅** — 每页底部 footer 前
- **图片全部迁移至 Cloudinary**（q_auto,f_auto,w_1200，非 hero 图加 loading=lazy）

### 猫咪互动模块（全站7只猫）
- **跟猫说话** — Google 登录后留言，每天限1条
- **猫咪 AI 回应** — claude-haiku，各猫独立 prompt，打字机效果，金句用【】包住
- **内容审核** — 后端 Claude 先过滤粗口/不雅内容，拒绝才调用回应
- **留言审核** — 存为 pending，管理员批准后才显示（即时显示/删除无需刷新）
- **请猫吃真罐头** — Stripe 自定义金额付款，付款成功才发 Telegram 通知
- **喂食记录墙** — Firestore 存记录，Cloudinary 存照片

### 后端 (app.py on Railway)
- **五猫中文 prompt** × 5 + **五猫英文 prompt** × 5（占卜用）
- **七猫私语 prompt** — 中/英/日各一套（留言回应用，短回应50-80字）
- `/whisper` — 内容过滤 + 猫咪回应
- `/create-feeding-checkout` — Stripe 供养付款
- `/stripe-webhook` — 付款成功发 Telegram 通知
- `/new-user-notify` — 新用户注册发 Telegram 通知
- Stripe Checkout（产品名称跟语言切换）

### 用户系统
- 新用户 1 罐罐头
- 邀请系统（双方各+2罐）
- 等级：🐾新手 → 🐱猫奴 → 🦁猫痴 → ✨猫道
- 管理员：chrischua83@gmail.com（∞罐头，😺玄猫主人）
- Profile 下拉面板
- 动态 Stripe Checkout（$0.99/罐）
- **非退款声明**

### Admin Dashboard (admin.html)
- Google 登录，仅 chrischua83@gmail.com 可访问
- **实时在线人数**（Firebase Realtime Database Presence）
- **总猫奴 / 今日新增用户**统计
- **待审核留言**（所有猫，可批准/删除）
- **所有留言**（最近记录）
- **最新猫奴**（最近20位注册用户）

### Gumroad 电子书
- 书名：Tao of Cat
- 链接：taocat.gumroad.com/l/book
- 价格：$7.99
- 描述：全新文案（11 lessons · 30 pages · 英文版）
- 分类：Self Improvement → Philosophy

### Support 页面 (support.html)
- FAQ 8条
- 联系邮箱：miao@taoofcat.com
- 中英双语

### 邮件系统
- Cloudflare Email Routing 已启用
- miao@taoofcat.com → chrischua83@gmail.com

### 书法 Logo
- Illustrator 设计，王羲之书法风格
- 金色版（#d4a843）/ 深色版（#231f20）

### 自动化营销
- **Threads 全自动发帖**（n8n workflow，每天 9am / 1pm / 7pm）
- n8n 24/7 后台运行（PM2 + Windows Task Scheduler）
- Buffer 连接 IG + Threads（手动排程）

### 五猫 IP 系统
- 五猫性格定义 + 五行对应
- 各猫金句、擅长领域、占卜语气完整设定（中英双语）

### 分享系统（2026年5月19日）
- **hero-bg.mp4 迁移 Cloudinary**（q_auto，节省带宽）
- **虎斑仔图片修正**（photo key 统一为 hubanzai.jpg）
- **Cloudflare Worker** — `share.taoofcat.com`，处理 og:image + redirect 邀请链接
- **divination.html og:image** — 换成 Cloudinary og-image.jpg（630×1120）
- **分享按钮简化** — Threads/WA/TG/FB/IG 只发邀请链接，干净无冗余
- **保存卦象按钮** — 下载解卦 PNG 到本机，附隐私提示
- **隐私提示文字** — 「为保护您的私隐，卦象图只保存在您的手机里」

### AI Boardroom（2026年5月）
本地 AI 指挥中心，运行在 Windows PC，port 7070。

**文件结构：**
```
AI_Boardroom/
├── app.py
├── 启动Boardroom.bat
├── requirements.txt
├── meetings/
├── docs/
├── data/
├── outputs/
│   ├── 项目名_日期/
│   └── cats/
└── static/
    ├── index.html
    ├── history.html
    ├── research.html
    └── cat.html
```

**四种模式：** 开会 / 执行 / 链式对话 / 批准→直接执行

**AI 分工：**
- Claude — 系统架构师
- GPT-4o — 创意总监
- Gemini 2.0 Flash — 文案创作（注入玄猫 Persona）

---

## 待完成 📋

### 紧急
- [ ] Cloudinary 图片链接验证（确认所有页面图片正常显示）
- [ ] Threads Access Token 续期（约2026年7月到期）

### 猫咪供养系统升级
- [ ] 供养品项扩展：罐头 $3 / 冻干 $5 / 玩具 $8 / 营养品 $10 / 猫窝 $25 / 自定义
- [ ] 供养送罐头积分（$3=3罐，按比例）
- [ ] 大额供养（$50+）加拍照/视频回馈
- [ ] 喂食记录墙：每周拍一次「本周供养合照」发布

### 玄猫之道网站功能
- [ ] 每日打卡系统（来了送积分，兑换罐头）
- [ ] 好奇感——解读前几行模糊，付费解锁
- [ ] 付款成功感谢弹窗（feeding_success=1 参数处理）

### AI Boardroom 下一步
- [ ] **Step 2：Threads 发布接口** — 执行模式文案一键发 Threads
- [ ] **Step 3：猫图 → Gemini 写文案 → 发布一条龙**
- [ ] gpt-image-2 图片上传 Cloudinary（供 Threads 发图用）
- [ ] Threads Access Token 自动续期提醒

### 营销
- [ ] **现阶段涨粉策略：真实互动为主**
  - 每天用 /research 页面回复范本去 Threads 手动互动
  - 搜「失去猫」「猫咪走了」「rainbow bridge」找共鸣帖子回复
- [ ] **开始发帖推广** — 傻猪 x 小白父子照片，讲故事不推销
- [ ] **Threads bio 定稿**（以猫观道 · See the Tao through the cat 🐾）
- [ ] IG 全自动发布（暂缓，用 Buffer 手动）
- [ ] n8n 内容栏目优化

### 产品
- [ ] 猫式金刚功 PDF（$9.99，Gumroad）
- [ ] 英文 YouTube 频道
- [ ] 虚拟道具商店
- [ ] 月度会员（$4.99/月）
- [ ] 太太猫粮品牌（长期）

### 优化
- [ ] 背景音乐开关（真实古琴）
- [ ] 手机端测试
- [ ] SEO 优化（GA 数据出来后针对性处理）
- [ ] 博山炉焚香动画 — Sony 拍 MP4，上传 Cloudinary，加进占卜准备弹窗
- [ ] 猫咪去背照片上传 — remove.bg 处理后上传 Cloudinary（shazhu-1.png 等），更新 CAT_PHOTO_COUNTS

---

## 品牌

- **品牌：** 玄猫之道 / Tao of Cat
- **IG：** @taoc.4t
- **Threads：** @taoc.4t
- **太太 IG：** @cjluckycats（猫咪日常照片源）
- **书：** The Tao of Your Spoiled Cat (ISBN 9798277657362) https://a.co/d/04csJqXO
- **Gumroad：** taocat.gumroad.com/l/book（$7.99）
- **联系：** miao@taoofcat.com
- **理念：** 以猫观道，以道养猫，万物皆有缘起
- **主IP：** 傻猪（异瞳白猫，占卜师·土）
- **变现路线：** 罐头占卜 → 供养真罐头 → 电子书 → 数字产品 → 猫粮品牌
- **受众定位：** 猫奴为核心——失去猫的人、日常猫奴、人生迷茫的猫奴

---

## 下一个聊天继续

1. **供养系统升级** — 扩展品项 + 积分打通
2. **付款成功感谢弹窗** — feeding_success=1 参数处理
3. **Boardroom Step 2** — 执行模式文案一键发 Threads
4. **Boardroom Step 3** — 猫图生成后 Gemini 写文案，一键发 Threads 带图
5. **博山炉焚香动画** — Sony 拍 MP4，上传 Cloudinary，加进占卜准备弹窗
6. **猫咪去背照片** — remove.bg 处理后上传 Cloudinary，更新 CAT_PHOTO_COUNTS
7. **开始发帖推广** — 傻猪 x 小白父子照片
8. **Cloudinary 图片验证** — 确认所有页面图片正常显示

*最后更新：2026年5月19日*
