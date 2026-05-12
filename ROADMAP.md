# 玄猫之道 · 产品路线图
> 最后更新：2026年5月12日

---

## 一、项目概述

**品牌**：玄猫之道 (Tao of Your Cat)  
**网站**：taoofcat.com  
**创始人**：Chris（马来西亚怡保）  
**核心IP**：傻猪——异瞳白猫（一蓝一棕），玄猫之道占卜师  
**定位**：以猫咪为核心的东方哲学社交平台，融合易经、道德经、金刚经  

**平台愿景**：打造全球猫奴的精神聚集地——占卜、社交、哲学、游戏感四合一

---

## 二、已完成功能 ✅

### 前端（taoofcat.com）
- [x] 主页 index.html
- [x] 占卜页面 divination.html
  - 傻猪圆形头像（AI书房版 shazhu-study.png）
  - 异瞳呼吸动画
  - 占卜时傻猪变暗/睁眼动画
  - Google一键登录（Firebase Authentication）
  - 罐头系统（Firestore云端储存，新用户送3罐）
  - 12卦象随机抽取（含道德经/金刚经金句）
  - AI个性化解读（傻猪口吻，"本猫"第一人称）
  - 复制分享功能
  - Stripe付款（$0.99/罐，1-50罐自选）
  - 付款后自动加罐头

### 后端（Railway）
- [x] Flask API：https://web-production-907c5.up.railway.app
- [x] /divination 接口（SSE流式输出）
- [x] 使用 claude-haiku-4-5 模型
- [x] CORS 已配置

### 基础设施
- [x] GitHub Pages 托管前端（chrisdata/taoofcat）
- [x] Railway 托管后端（chrisdata/taoofcat-api）
- [x] Firebase（Authentication + Firestore）
- [x] Stripe 香港账号（太太名下）
- [x] Anthropic API Key 已配置

---

## 三、平台完整Vision

```
第一层：占卜（已上线）
  └── 傻猪易经占卜 + AI解读 + 罐头付费系统

第二层：虚拟道具商店（下一阶段）
  └── 不同道具影响傻猪状态和占卜风格
  └── 收集欲 + 游戏感

第三层：猫咪社交（中期）
  └── 用户上传自己的猫，建立猫咪档案
  └── 分享占卜结果
  └── 猫咪互动、点赞、评论

第四层：猫奴社群（长期）
  └── 东方哲学 + 猫咪生活方式社群
  └── 创作者变现生态
```

---

## 四、虚拟道具系统设计

### 道具列表
| 道具 | 价格 | 效果 |
|------|------|------|
| 🐟 吞拿鱼罐头 | $0.99 | 基本占卜（现有） |
| 🍣 三文鱼罐头 | $2.99 | 深度占卜，回答更长更有哲学深度 |
| 🧶 毛线球 | $1.99 | 傻猪心情好，偏向吉卦，语气温柔 |
| 🪄 逗猫棒 | $1.99 | 傻猪兴奋活泼，回答幽默风趣 |
| 🏮 金色铃铛 | $4.99 | 解锁隐藏稀有卦象（共8个） |
| 🍵 普洱茶 | $3.99 | 傻猪冥想状态，最深度禅意解读 |
| 🪬 护身符 | $9.99 | 本月运势全解读（一次性使用） |

### AI Prompt 策略
每种道具对应不同的system prompt modifier：
- 逗猫棒：「今天有人陪你玩，心情极好，回答带点俏皮和猫咪式幽默」
- 普洱茶：「进入冥想状态，回答极简，每句话都有禅意留白」
- 三文鱼：「吃了好东西，灵感大开，引用更多典故，回答深度加倍」

---

## 五、猫咪社交功能设计

### 用户猫咪档案
- 上传猫咪照片
- 填写猫咪名字、品种、性格
- 猫咪"天命卦象"（注册时随机抽定，永久绑定）
- 猫咪等级（根据互动次数升级）

### 社交动态
- 分享占卜结果到动态
- 其他用户可以"摸摸"（点赞）
- 评论用猫咪表情包回应
- 每日"今日天机"公告（傻猪发布）

### 病毒传播机制
- 占卜结果卡片设计成适合截图分享的格式
- 分享后附带邀请码，朋友注册送额外罐头
- "你的猫今天抽到XX卦"自动生成分享图

---

## 六、技术架构

### 前端
- 纯HTML/CSS/JS（GitHub Pages）
- Firebase SDK（Authentication + Firestore）
- 未来迁移到：Vue.js 或 Next.js

### 后端
- Flask（Railway）
- Anthropic API（claude-haiku-4-5）
- 未来加入：用户道具数据库、社交功能API

### 数据库（Firestore）
```
users/
  {uid}/
    cans: number
    items: { wand: 0, ball: 2, ... }
    cats: [{ name, photo, gua }]
    created: timestamp

divinations/
  {id}/
    uid: string
    question: string
    gua: string
    response: string
    item_used: string
    timestamp: timestamp
```

### 环境变量（Railway）
- ANTHROPIC_API_KEY：已配置

---

## 七、产品路线图

### 现在（已完成）
- 占卜基本功能上线
- Google登录 + 罐头系统
- Stripe收款

### 第二阶段（下2-4周）
- [ ] 虚拟道具商店
- [ ] 道具影响AI回答风格
- [ ] 占卜历史记录
- [ ] 分享卡片美化（适合截图）
- [ ] 傻猪真实照片版上线

### 第三阶段（1-2个月）
- [ ] 用户猫咪档案
- [ ] 基本社交动态
- [ ] 邀请好友送罐头机制
- [ ] 手机版优化

### 第四阶段（3-6个月）
- [ ] 完整猫咪社交平台
- [ ] 创作者功能（卖自己的猫咪创作）
- [ ] 多语言（中文、英文、马来文）
- [ ] App版本

---

## 八、变现策略

### 短期
- 罐头付费占卜（$0.99/罐）
- 虚拟道具销售

### 中期
- 月度会员（无限占卜 + 专属道具）
- 创作者抽成（平台卖数字猫咪周边）

### 长期
- 品牌联名（猫咪用品品牌赞助）
- 玄猫之道NFT/数字收藏
- 线下活动（怡保猫咪市集）

---

## 九、内容营销策略

### Threads/IG/小红书
- 每天发傻猪占卜内容
- "今日天机"系列
- 创作过程vlog（石头雕刻、vector创作）
- 用户占卜结果分享

### YouTube（玄猫之道频道）
- 怡保捡石头 + 激光雕刻过程
- 书法+vector创作过程
- 用逗猫棒逗傻猪的日常
- 道德经/金刚经解读（猫咪视角）

---

## 十、给未来Claude的技术说明

每次开新对话，把这份文件贴给Claude，说明你要继续开发哪个功能。

**关键文件位置：**
- 前端：github.com/chrisdata/taoofcat
- 后端：github.com/chrisdata/taoofcat-api
- 后端API：https://web-production-907c5.up.railway.app
- Firebase项目：taoofcat-6cf6e

**开发流程：**
1. Claude写代码
2. 下载文件
3. 放入本地taoofcat文件夹
4. VS Code预览
5. GitHub Desktop commit + push
6. GitHub Pages自动更新

---

*玄猫之道 · 傻猪在等你 🐱*
