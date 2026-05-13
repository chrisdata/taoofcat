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
| AI | Anthropic Claude (claude-haiku) |
| 天气 | OpenWeatherMap API (via IP geolocation) |
| IG Feed | Behold.so (feed-id: a4pG3UyNqW4slt0pfxbK) |

**Railway 环境变量：**
- ANTHROPIC_API_KEY
- STRIPE_SECRET_KEY
- OPENWEATHER_API_KEY

---

## 已完成 ✅

### 主页 (index.html)
- 傻猪慢动作黑白视频背景 (hero-bg.mp4)
- 品牌名 + 金句 + 留白
- 五只猫横排 grid（点击进故事页）
- 已归道纪念区（小白、小黑，小头像横排）
- 猫咪日常 IG Feed（Behold.so）
- 导航栏

### 猫咪故事页（7只全部完成）
- cat-shazhu.html — 傻猪
- cat-feimao.html — 肥猫
- cat-feipo.html — 茶室猫
- cat-hubanzai.html — 虎斑仔
- cat-mengmengda.html — 萌萌哒
- cat-xiaobai.html — 小白（含 YouTube 视频）
- cat-xiaohei.html — 小黑

### 占卜系统 (divination.html)
- Google 一键登录
- 竹简图 Hero 背景（bamboo-bg.jpg）
- 易经介绍文字
- 准备弹窗（诚、静、清）
- 铜钱投掷仪式（6次，玄猫之道铜钱，旋转动画，金属音效）
- 进度条（6格）+ 手指动画提示
- 宣纸解卦弹窗（无横线，大字体，分段显示）
- 64卦完整数据
- AI 流式解读（傻猪语气，200-250字，分段）
- 傻猪金句（黑底金字，【】标记）
- 天气+时间个性化（IP定位，无需用户授权）
- 多语言支持（跟用户语言走）
- 粗口过滤（中/英/广东话/马来文/日文）
- 分享卡片（PNG，Web Share API）
- 字数限制（10-200字）+ checkbox确认
- 隐私声明

### 用户系统
- 新用户 1 罐罐头
- 邀请系统（双方各+2罐）
- 等级：🐾新手 → 🐱猫奴 → 🦁猫痴 → ✨猫道
- 管理员：chrischua83@gmail.com（∞罐头，😺玄猫主人）
- Profile 下拉面板（罐头、等级、邀请链接）
- Live 用户计数器（右下角）
- 动态 Stripe Checkout（$0.99/罐）

---

## 待完成 📋

### 紧急修复
- [ ] 竹简背景溢出 Hero 区域（CSS overflow 问题）

### 功能
- [ ] 每日打卡系统（来了送积分，兑换罐头）
- [ ] 好奇感——解读前几行模糊，付费解锁

### 内容自动化
- [ ] n8n：Telegram → Claude润色 → IG 自动发布
- [ ] Instagram Graph API（需转 Professional 账号）

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

---

## 品牌

- **品牌：** 玄猫之道 / Tao of Cat
- **IG：** @taoc.4t
- **理念：** 以猫观道，以道养猫，万物皆有缘起
- **主IP：** 傻猪（异瞳白猫，占卜师）
- **变现路线：** 罐头占卜 → 数字产品 → 猫粮品牌

*最后更新：2026年5月14日*
