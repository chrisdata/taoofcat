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

### Support 页面、邮件系统、书法 Logo、自动化营销
- Threads 全自动发帖（n8n，每天 9am/1pm/7pm）
- Buffer 连接 IG + Threads

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
- [ ] 英文 YouTube 频道
- [ ] 月度会员（$4.99/月）

### 优化
- [ ] 手机端测试
- [ ] SEO 优化（GA 数据出来后针对性处理）
- [ ] 背景音乐开关（真实古琴）

---

## 品牌

- **品牌：** 玄猫之道 / Tao of Cat
- **IG：** @taoc.4t
- **Threads：** @taoc.4t（已发委托帖子）
- **太太 IG：** @cjluckycats
- **书：** The Tao of Your Spoiled Cat (ISBN 9798277657362)
- **Gumroad：** taocat.gumroad.com/l/book（$7.99）
- **委托：** miao@taoofcat.com
- **理念：** 以猫观道，以道养猫，万物皆有缘起
- **主IP：** 傻猪（异瞳白猫，占卜师·土）
- **变现路线：** 猫咪插画委托 → 罐头占卜 → 供养真罐头 → 电子书 → 中途缘起卡 → 数字产品
- **受众定位：** 猫奴为核心——失去猫的人、日常猫奴、人生迷茫的猫奴、想定制猫咪插画的人

---

## 下一个聊天继续

1. **中途猫系统测试** — 完整跑通志愿者上传→审核→领养者申请→接受流程
2. **委托第一单** — 等 Threads 帖子发酵，有询问就跟进
3. **foster_cats Rules 更新** — applications 子集合加 update 权限
4. **更多插画作品** — 傻猪之后继续画，充实 commission 页面
5. **供养系统升级** — 扩展品项 + 积分打通
6. **Boardroom Step 2** — 执行模式文案一键发 Threads

*最后更新：2026年5月22日*
