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
- **foster-cats** preset（Unsigned）— 专供中途猫照片上传用，文件夹：fosters/

**Firebase Realtime Database：**
- URL: https://taoofcat-6cf6e-default-rtdb.asia-southeast1.firebasedatabase.app
- 用途: 实时在线人数（Presence 系统）
- Rules: presence 节点 write=true, read=auth

---

## 已完成 ✅

### 主页 (index.html)
- 傻猪慢动作黑白视频背景 (hero-bg.mov → Cloudinary q_auto,vc_auto,f_mp4)
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
- **Hero 按钮三个**：去问猫 / 定制猫咪插画 / 认识猫咪家族（对称统一）

### 猫咪故事页（7只全部完成）
- 全部加 Google Analytics、书法 logo、中英双语、购书横幅
- 图片全部迁移至 Cloudinary

### 猫咪互动模块
- 跟猫说话、猫咪 AI 回应、内容审核、留言审核、请猫吃真罐头、喂食记录墙

### 后端 (app.py on Railway)
- 五猫中英日 prompt、七猫私语 prompt
- `/whisper` `/create-feeding-checkout` `/stripe-webhook` `/new-user-notify`
- `/foster-translate` — AI 生成三语猫咪资料（中英日）
- `/foster-review` — AI 审核中途猫提交内容
- `/foster-apply` — 领养申请 AI 分析问卷答案 + Telegram 通知

### 用户系统
- 新用户 1 罐罐头、邀请系统、等级系统、Profile 下拉面板
- 动态 Stripe Checkout（$0.99/罐）、管理员权限

### Admin Dashboard (admin.html)
- 实时在线人数、用户统计、留言审核
- **中途猫审核模块**：待审核队列、AI 评级显示、批准/拒绝、已上架管理

### 中途猫系统（2026年5月）
完整的全球中途猫领养平台，集成在玄猫之道内。

**页面：**
- `adopt.html` — 浏览墙（走马灯最新上架 + 筛选卡片墙 + 无限滚动）
- `foster.html` — 志愿者上传表单（三语自动翻译、AI 审核、Cloudinary 直传）
- `foster-cat.html` — 单猫详情页（三语切换、问卷申请、等待状态、接受/拒绝后解锁联系方式）
- `my-fosters.html` — 志愿者管理页（统计、Tab 分类、申请列表、AI 评级、接受/拒绝、30天提醒、恢复待领养）
- `foster-profile.html` — 志愿者公开主页（走马灯展示、傻猪圆形金边头像、分享功能）
- `webview-check.js` — WebView 检测，提示用真实浏览器打开

**数据结构（Firestore）：**
- `foster_cats` 集合：完整猫咪资料（三语、地区三级、健康状态含怀孕、照片、AI审核结果）
- `foster_cats/{id}/applications` 子集合：申请记录（问卷答案、AI 评级 green/yellow/red、状态）

**Firestore 复合索引（已建）：**
- status + created_at
- status + country + created_at
- status + country + state + created_at
- foster_uid + created_at
- foster_uid + status + created_at

**Firestore Rules：** 已更新含 foster_cats 权限

**变现规划：**
- 自愿供养平台（跟现有供养系统打通）
- 领养成功缘起卡（$1-2 下载高清版）
- 志愿者认证徽章年费（$5-10/年）

### 猫咪插画委托 (commission.html)
- Hero：「瞬间，即是永恒」/ 副标题：将它的灵动化为数字画卷
- 关于画者：20年 Vector Artist 故事
- 创作过程三步骤（联络 → Outline 确认 → 上色交付）
- 作品展示：真实照片 vs 插画对比、眼睛特写、Vector Outline View
- Vector 优势六卡片（无限印刷、周边商品、去背景、改颜色、永久档案、个人品牌）
- Vector vs 传统绘画对比表格
- 中英双语切换
- 联络：miao@taoofcat.com

### Gumroad 电子书
- 书名：Tao of Cat，链接：taocat.gumroad.com/l/book，价格：$7.99
- **Receipt 页面已更新**：Custom message 含傻猪署名、taoofcat.com 导流、占卜页链接、@taoc.4t
- **Button text**：Meet the Cats 🐱

### Support 页面、邮件系统、书法 Logo、自动化营销
- Threads 全自动发帖（n8n，每天 9am/1pm/7pm）
- Buffer 连接 IG + Threads
- **n8n Threads workflow 升级（2026年5月23日）**：Claude节点已Deactivate，Code节点改为10条ebook文案库随机发，每天3次全部推电子书，含 #CatsOfThreads #TaoOfCat #CatWisdom 等hashtag

### 全站繁体中文支持（2026年5月23日）
19个HTML页面全部完成简/繁/EN/JP四语切换。

**A组（14页）**：index / cat-* / commission / daily / divination / journal / support
- applyLang() 加 tw 分支，document.lang → zh-TW
- 导航按钮：简 / 繁 / EN / JP
- Google Fonts 加载 Noto Serif TC
- 每个 data-zh 元素自动加 data-tw，100% 覆盖率

**B组（5页）**：adopt / foster / foster-cat / foster-profile / my-fosters
- JS MAP系统（OpenCC s2twp转换，45-153条/页）
- 页面加载时DOM text-walker自动替换
- 导航栏加繁简切换按钮，reload生效
- 两组共享 localStorage key（taoc_lang）

### YouTube 频道规划（2026年5月23日）
- **定位**：胶片美学 · 猫咪存在的瞬间 · 无声胜有声
- **设备**：Sony ZV-E1 全画幅 + Helios 44 苏联老镜头 + DaVinci Resolve + Filmbox Pro + Scatter
- **风格**：慢动作无声纯音乐，彩色与黑白混用
  - 静止/凝视/光影 → 黑白或极低饱和
  - 玩耍/扑跳/多猫 → 保留彩色胶片暖调
  - 傻猪异瞳特写 → 永远彩色（异瞳是最强视觉资产）
- **频道名**：玄猫之道 / Tao of Cat（与现有品牌统一）
- **内容系列**：傻猪日常 / 五猫众生相 / 猫式禅意特写 / 已归道特别篇
- **频道简介**：中英双语已撰写，含关键词 cat asmr / relaxing cat videos / vintage Soviet glass
- **工作流**：S-Cinetone → 120fps → Resolve 24fps → Filmbox LUT → Scatter片头 → 导出

### 宠物沟通师合作（2026年5月23日）
- **目标**：Amanda Pan（@pettingeverything），Ipoh出生现KL，32岁，RM168/小时，WhatsApp远程
- **DM已发**：邀请免费为傻猪做沟通session，以Ipoh老乡切入
- **等待回复中**：测试问题——傻猪为何挑食
- **合作愿景**：taoofcat.com 宠物沟通预约页面，平台收款分成（平台30% / 沟通师70%）
- **最深价值**：失去宠物的人「最后一次对话」服务

### 玄猫御膳房（2026年5月23日规划）
- **品牌名**：玄猫御膳房 · Tao of Cat Imperial Feast
- **主理人**：太太（香港人，擅长烟熏/低温慢煮Sous Vide/熟成牛肉/中西餐）
- **产品方向**：手工猫咪鲜食，Fine Dining工艺，高压灭菌机确保食品安全
- **起步**：小批量 → 朋友宠物店寄卖 → 玄猫之道网站销售
- **自动化**：AI咨询 → Stripe下单 → Telegram通知备货 → 物流追踪
- **合作渠道**：本地宠物店老板（已认识，曾来家中看傻猪）
- **内容**：傻猪第一批试吃员，ZV-E1慢动作记录，Helios 44胶片色调
- **待建**：玄猫御膳房网页，品牌logo（书法体）

### Fiverr 重新启动（2026年5月23日）
- Top Rated + Pro 身份保留（两年inactive仍在）
- 51个portfolio作品
- 画人/猫vector portrait gig已上架，猫gig审核中
- 收到 $1,107 portrait brief，已发portfolio等客户回复

### 第二本 Ebook — I Was Never Gone（2026年5月23日）
- **书名：** I Was Never Gone — Letters from your cat
- **英文版：** taocat.gumroad.com/l/iwasnevergone（$4.99）
- **繁体中文版：** taocat.gumroad.com/l/iwasnevergone_tw（$4.99）
- **封面：** AI生成异瞳白猫，"Dedicated to Xiaobai"
- **内容：** 12封猫的第一人称信，基于 Lori Cowen 动物沟通 YouTube 视频素材
- **素材来源：** Baxter / Milo / Opie / Capone / Miriam / Carie / Mac / Stanley / 被车撞的猫 / Admiral / Bacon 共11个视频
- **核心框架：** 猫选择相遇→守护宇宙→离开时灵魂平静→没有离开只是换形式→就在你身边→灵眼打开再见面
- **定位：** 素材搜集员，不声称灵性权威，前言说明来源
- **n8n推广：** 25条文案轮转（Tao of Cat 10条 + 英文10条 + 繁体5条）
- **网站：** index.html & cat-xiaobai.html 已更新双书卡区块，繁体自动切换繁体版链接
- **cat-xiaobai结尾：** 改为「我从未离去」真言，四语版本
- **待办：** Cloudinary上传封面图 iwasnevergone_cover

### 第三本 Ebook — YouTube to Passive Income（规划中）
- **书名：** How to Turn Your YouTube Subscriptions into Passive Income in One Day
- **副标题：** No writing experience needed. Just AI and what you already watch.
- **理念：** 每个人都是某领域收藏家，只是不知道收藏可以变成书
- **流程：** 找喜欢的YouTube → Tactiq抓字幕 → 喂AI分析提炼 → 整理成ebook → Gumroad上架
- **真实案例：** 今天与Claude对话的完整过程就是书的主要素材
- **定价：** $9.99（卖可复制系统）
- **待完成：** 新chat继续写作

### 五猫 IP 系统 & 分享系统

### AI Boardroom（本地 Flask, port 7070）

---

## 待完成 📋

### 紧急
- [ ] Cloudinary 图片链接验证（确认所有页面图片正常显示）
- [ ] Threads Access Token 续期（约2026年7月到期）
- [ ] foster_cats applications 子集合 Firestore Rules 加 update 权限（志愿者接受/拒绝申请）

### 中途猫系统待完善
- [ ] 领养成功缘起卡生成（付费下载）
- [ ] 志愿者认证徽章年费系统
- [ ] Cloudflare Worker 支持 foster-cat.html og:image 分享

### 猫咪插画委托
- [ ] 更多作品上传（傻猪之后的新作品）
- [ ] 推广：Threads 已发第一条委托帖子 ✅
- [ ] $1,107 brief 跟进，等客户回复

### 玄猫御膳房
- [ ] 书法体品牌 Logo（玄猫御膳房）
- [ ] taoofcat.com 新增御膳房页面
- [ ] 太太购入高压灭菌机，开始研发配方
- [ ] 第一批产品小批量寄卖（宠物店老板）
- [ ] AI咨询→下单→物流自动化系统

### 宠物沟通师
- [ ] Amanda Pan 回复后安排傻猪沟通session
- [ ] taoofcat.com 宠物沟通预约页面
- [ ] 沟通合作内容策划（YouTube + 网站）

### YouTube 频道
- [ ] 第一条视频：傻猪窗边发呆，慢动作，古琴配乐
- [ ] 建立Filmbox Pro胶片预设（定一个LUT不换）
- [ ] 联络香港副导演朋友来家拍摄内容
- [ ] 片尾卡片设置（导流taoofcat.com）

### 玄猫之道网站功能
- [ ] 每日打卡系统（来了送积分，兑换罐头）
- [ ] 好奇感——解读前几行模糊，付费解锁
- [ ] 付款成功感谢弹窗（feeding_success=1 参数处理）
- [ ] 博山炉焚香动画 — Sony 拍 MP4，上传 Cloudinary

### AI Boardroom 下一步
- [ ] Step 2：Threads 发布接口 — 执行模式文案一键发 Threads
- [ ] Step 3：猫图 → Gemini 写文案 → 发布一条龙
- [ ] Threads Access Token 自动续期提醒

### 供养系统升级
- [ ] 供养品项扩展：罐头 $3 / 冻干 $5 / 玩具 $8 / 营养品 $10 / 猫窝 $25
- [ ] 供养送罐头积分
- [ ] 大额供养（$50+）加拍照/视频回馈

### 产品
- [ ] 猫式金刚功 PDF（$9.99，Gumroad）
- [ ] 月度会员（$4.99/月）

### 优化
- [ ] 手机端测试
- [ ] SEO 优化（GA 数据出来后针对性处理）
- [ ] 背景音乐开关（真实古琴）

---

## 品牌

- **品牌：** 玄猫之道 / Tao of Cat
- **子品牌：** 玄猫御膳房 · Tao of Cat Imperial Feast（猫咪手工鲜食）
- **IG：** @taoc.4t
- **Threads：** @taoc.4t（已发委托帖子 + ebook自动推广）
- **太太 IG：** @cjluckycats
- **书：** The Tao of Your Spoiled Cat (ISBN 9798277657362)
- **Gumroad：** taocat.gumroad.com/l/book（$7.99）
- **委托：** miao@taoofcat.com
- **理念：** 以猫观道，以道养猫，万物皆有缘起
- **主IP：** 傻猪（异瞳白猫，占卜师·土）
- **变现路线：** 猫咪插画委托 → 罐头占卜 → 供养真罐头 → 电子书 → 中途缘起卡 → 宠物沟通 → 玄猫御膳房鲜食
- **受众定位：** 猫奴为核心——失去猫的人、日常猫奴、人生迷茫的猫奴、想定制猫咪插画的人
- **品牌根源：** 道德经 / 庄子 / 意识探索（OBE/Darius J Wright）/ 宠物沟通（Lori Cowen）/ 灵魂契约

---

## 下一个聊天继续

1. **第三本 Ebook** — How to Turn Your YouTube Subscriptions into Passive Income in One Day（新chat写作）
2. **Fiverr $1,107 brief** — 客户回复后跟进报价
3. **Amanda Pan 回复** — 安排傻猪沟通session
4. **iwasnevergone_cover** — 上传封面图到 Cloudinary
5. **Reddit r/Petloss** — 关注帖子反应，回复评论
6. **玄猫御膳房 Logo** — 书法体设计
7. **御膳房网页** — taoofcat.com 新增页面
8. **YouTube 第一条视频** — 傻猪窗边发呆
9. **香港副导演朋友** — 联络约来家拍摄
10. **foster_cats Rules 更新** — applications 子集合加 update 权限
11. **供养系统升级** — 扩展品项 + 积分打通
12. **Boardroom Step 2** — 执行模式文案一键发 Threads

*最后更新：2026年5月23日*
