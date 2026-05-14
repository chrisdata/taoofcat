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
| IG Feed | Behold.so (feed-id: a4pG3UyNqW4slt0pfxbK) |
| 流量分析 | Google Analytics (G-7Q71WCDFF0) |
| 社媒排程 | Buffer (@taoc.4t) |
| 自动化 | n8n (本地 Windows PC, PM2 24/7, port 5678) |

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
- 傻猪慢动作黑白视频背景 (hero-bg.mp4)
- 品牌名 + 金句 + 留白
- 五只猫横排 grid（点击进故事页）
- 已归道纪念区（小白、小黑，小头像横排）→ 改名「已归道的玄猫」
- 猫咪日常 IG Feed（Behold.so）
- 导航栏
- **中英双语切换**（EN/中文 按钮，localStorage 记忆语言）
- Google Analytics

### 猫咪故事页（7只全部完成）
- cat-shazhu.html — 傻猪
- cat-feimao.html — 肥猫
- cat-feipo.html — 茶室猫
- cat-hubanzai.html — 虎斑仔
- cat-mengmengda.html — 萌萌哒
- cat-xiaobai.html — 小白（含 YouTube 视频）
- cat-xiaohei.html — 小黑
- 全部加 Google Analytics
- **待办：加 EN/中文 切换按钮（新聊天继续）**

### 占卜系统 (divination.html)
- Google 一键登录
- 竹简图 Hero 背景（bamboo-bg.jpg）
- **五行归位选猫系统**（五猫各守一个五行，登录后先选猫再占卜）
  - 傻猪·土 / 肥猫·金 / 茶室猫·火 / 虎斑仔·木 / 萌萌哒·水
  - 真实猫咪照片（圆形头像）
  - 点击显示猫咪性格、金句详情
- 准备弹窗（诚、静、清）— 标题跟选中的猫走
- 铜钱投掷仪式（6次，真实音效 coin-sound.mp3）
- 进度条（6格）+ 手指动画提示
- 宣纸解卦弹窗（无横线，大字体，分段显示）
- 64卦完整数据
- **五猫各自 AI prompt 风格**（中英文各一套，共10套）
- 猫金句（黑底金字，【】标记）
- 多语言支持（跟用户语言走）
- 粗口过滤
- **分享按钮 SVG 图标**（Threads / IG / WhatsApp / Telegram / Facebook / 保存）
- 字数限制（10-200字）+ checkbox确认
- 隐私声明
- 关闭解卦前确认提示（防止误关丢失）
- **中英双语切换**（全页面即时切换，localStorage 记忆）
- Google Analytics
- 天气功能已移除（不再提用户地点）
- Live 用户计数器改为 Admin 专属（仅 chrischua83@gmail.com 可见）
- Admin 计数器显示：总人数 + 今日新增

### 后端 (app.py on Railway)
- **五猫中文 prompt** × 5
- **五猫英文 prompt** × 5（Sha Zhu / Fei Mao / Cha Shi / Hu Ban Zai / Meng Meng Da）
- 根据前端传入 cat_name 自动选择中/英文 prompt
- 天气 route 保留但占卜不再使用
- Stripe Checkout（产品名称跟语言切换）

### 用户系统
- 新用户 1 罐罐头
- 邀请系统（双方各+2罐）— 邀请区加社交分享图标（WA/Telegram/Threads/Facebook）
- 等级：🐾新手 → 🐱猫奴 → 🦁猫痴 → ✨猫道
- 管理员：chrischua83@gmail.com（∞罐头，😺玄猫主人）
- Profile 下拉面板（罐头、等级、邀请链接）
- Admin 专属 Live 用户计数器（总人数 + 今日新增）
- 动态 Stripe Checkout（$0.99/罐）

### 自动化营销
- **Threads 全自动发帖**（n8n workflow）
  - 每天 9am / 1pm / 7pm 三条
  - Claude 根据时间自动选主题（卦象感悟 / 猫咪禅语 / 引流占卜）
  - 已 Published 运行中
- n8n 24/7 后台运行（PM2 + Windows Task Scheduler，无窗口）
- **Buffer** 连接 IG + Threads（手动排程）
- **内容工作流**：照片发给 Claude 写文案 → 复制到 Buffer 发布

### 五猫 IP 系统
- 五猫性格定义（Chris 亲自描述，基于真实猫咪）
- 五行对应：傻猪土 / 肥猫金 / 茶室猫火 / 虎斑仔木 / 萌萌哒水
- 各猫金句、擅长领域、占卜语气完整设定

---

## 待完成 📋

### 紧急
- [ ] cat 故事页加 EN/中文 切换按钮（nav + footer 双语，故事内容可暂缓）

### 功能
- [ ] 每日打卡系统（来了送积分，兑换罐头）
- [ ] 好奇感——解读前几行模糊，付费解锁

### 营销
- [ ] Threads Access Token 续期（约2026年7月到期）
- [ ] IG 全自动发布（Meta API 太复杂，暂缓，用 Buffer 手动）
- [ ] n8n 内容栏目优化（多样化主题）

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
- **书：** The Tao of Your Spoiled Cat (ISBN 9798277657362) https://a.co/d/04csJqXO
- **理念：** 以猫观道，以道养猫，万物皆有缘起
- **主IP：** 傻猪（异瞳白猫，占卜师·土）
- **变现路线：** 罐头占卜 → 数字产品 → 猫粮品牌

---

## 下一个聊天继续

1. cat 故事页加 EN/中文 切换按钮
2. 故事页内容双语（视工程量决定）

*最后更新：2026年5月14日*
