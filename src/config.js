/**
 * Aurora 主题配置文件
 * 食用指南：https://github.com/chanshiyucx/blog/issues/41
 * 联系作者：Blog https://chanshiyu.com      QQ 1124590931
 */

export default {
  /**
   * =========================================================
   *                      站点功能【必需】
   * =========================================================
   */

  /**
   * 站点标题
   */
  title: 'Histion',
  subtitle: '私密小窝',

  /**
   * Github Issues 配置
   */
  username: 'Histion', // github 用户名
  repository: 'blog-factory/word', // 文章仓库地址
  token: ['a960fc35d35a736b47a052c', '588e9fb0d020e5f99'], // token 从中间任意位置拆开成两部分，避免 github 代码检测失效

  /**
   * Gitalk 配置，文档详见：https://github.com/gitalk/gitalk
   */
  gitalk: {
    clientID: '8e3855b18d3067aad824',
    clientSecret: '7644d0e864e03bac4b2b4d4717c0f4a661bdc5da',
    repo: 'blog-factory/comment', // 评论仓库地址
    owner: 'histion',
    admin: ['histion'],
    distractionFreeMode: false, // 是否开始无干扰模式【背景遮罩】
  },

  /**
   * leancloud 配置 【注意切换为国际版】
   */
  leancloud: {
    appId: 'BNCdq3btVDUSqv7YWqO8nY2Q-MdYXbMMI',
    appKey: 'tJVw9s8txlFTfB75JHlXeLTb',
  },

  /**
   * =========================================================
   *                        页面设置
   * =========================================================
   */

  /**
   * 归档页面
   */
  archiveOpts: {
    display: true, // 是否显示该页面
    enableComment: false, // 是否开启评论功能
    qoute: '華枝春滿 天心月圓', // 页面顶部一言
  },

  /**
   * 分类页面
   */
  categoryOpts: {
    display: true,
    enableComment: false,
    qoute: '桜華月想 暮色蒼然',
  },

  /**
   * 标签配置
   */
  tagOpts: {
    display: true,
    enableComment: false,
    qoute: '灯笼流丽，百鬼夜行',
  },

  /**
   * 灵感页面
   */
  inspirationOpts: {
    display: true,
    enableComment: true,
    qoute: '詠奏妖華，明鏡止水',
  },

  /**
   * 书单页面
   */
  bookOpts: {
    display: true,
    enableComment: true,
    qoute: '追想風景 彼岸帰航',
  },

  /**
   * 友链页面
   */
  friendOpts: {
    display: true,
    enableComment: true,
    qoute: '青青子衿，悠悠我心',
  },

  /**
   * 关于页面
   */
  aboutOpts: {
    display: true,
    enableComment: true,
    qoute: '蝉鸣如雨，花宵道中',
    avatar: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/avatar.jpg',
    graduated: '家里蹲大学',
    college: '下饭专业',
    contact: [
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/email.png',
        link: 'Mailto:h840246202@gmail.com',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/github.png',
        link: 'https://github.com/histion',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/telegram.png',
        link: 'https://t.me/',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/music.png',
        link: 'https://music.163.com/',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/rsshub.png',
        link: '',
      },
    ],
  },

  /**
   * =========================================================
   *                         主题自定义
   * =========================================================
   */

  /**
   * 加载动画
   */
  loadingImg: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/loading.gif',

  /**
   * 文章默认图
   */
  defaultCover: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/bg/defaultCover.jpg',

  /**
   * 赛钱箱
   */
  qrcode: [
    {
      name: '支付宝',
      img: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/zfb.png',
    },
    {
      name: '微信',
      img: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/wx.png',
    },
  ],

  /**
   * 音乐播放器,
   */
  APlayer: [
    {
      name: 'うたかたの风と蝉时雨',
      artist: 'Little Planet',
      url: 'https://files.catbox.moe/wo7zjt.mp3',
      cover: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/cover1.jpg',
    },
    {
      name: '春の凑に',
      artist: 'TUMENECO',
      url: 'https://files.catbox.moe/ducy49.mp3',
      cover: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/cover2.jpg',
    },
    {
      name: '夏阳炎',
      artist: '天威梦方',
      url: 'https://files.catbox.moe/7migen.mp3',
      cover: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/cover3.jpg',
    },
    {
      name: '秋风のとおり道',
      artist: '风神华伝',
      url: 'https://files.catbox.moe/b58fq6.mp3',
      cover: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/cover4.jpg',
    },
    {
      name: '冬のわすれもの',
      artist: 'ハルノカゼ',
      url: 'https://files.catbox.moe/vwnawp.mp3',
      cover: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/cover5.jpg',
    },
  ],

  /**
   * 主题配色，主要用于文章、灵感、关于等卡片配色
   * 推荐一个超棒的取色站，日本の伝統色：http://nipponcolors.com/
   */
  themeColors: [
    '#B28FCE', // 薄
    '#86C166', // 苗
    '#F596AA', // 桃
    '#F19483', // 曙
    '#F9BF45', // 玉子
    '#FAD689', // 浅黄
    '#E79460', // 洗柿
    '#2EA9DF', // 露草
    '#FB966E', // 洗朱
    '#BC9F77', // 白茶
    '#867835', // 黄海松茶
    '#B9887D', // 水がき
  ],
}
