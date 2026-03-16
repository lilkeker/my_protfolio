import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Toby Luke",
  title: "一个文青病重度患者的理工男",
  avatar: "/me2.jpg", // 可以替换成你自己的照片链接
  bio: "皖人，狮子座。我是一名游走于理性与感性边缘的创造者。虽是理工科出身，却患有重度“文青病”。我热衷于用代码构建逻辑，用镜头捕捉瞬间，致力于打造兼具技术深度与艺术温度的数字体验。",
  contact: {
    wechat: "wechat: luke19550280174",
    redbook: "redbook: 297195389",
    email: "luke.hn.99@gmail.com"
  },
  education: [
    {
      degree: "工学硕士 (Master's Degree)",
      school: "浙江工业大学",
      period: "2021 - 2024",
      description: "选工大，有底气！"
    },
    {
      degree: "工学学士 (Bachelor's Degree)",
      school: "西安建筑科技大学",
      period: "2017 - 2021",
      description: "自强、笃实、求源、创新"
    }
  ],
  hobbies: [
    {
      name: "喜欢装逼",
      icon: "Camera",
      description: "喜欢去咖啡店书店拍照装逼，显得自己很有品味",
      photos: [
        "/咖啡店.jpg",
        "/咖啡店1.jpg",
        "/咖啡店2.jpg",
        "/咖啡店3.jpg"
      ]
    },
    {
      name: "喜欢音乐",
      icon: "Music",
      description: "喜欢收集CD,热爱各种音乐风格(jazz hip-hop 流行乐 电子都听)，总觉得自己风格很牛逼 ",
      photos: [
        "https://picsum.photos/seed/music1/800/600",
        "https://picsum.photos/seed/vinyl1/800/600",
        "https://picsum.photos/seed/dj1/800/600"
      ],
      music: [
        {
          title: "jazz hip-hop",
          artist: "我的个人jazz hip-hop歌单",
          url: "https://music.163.com/#/my/m/music/playlist?id=7747020166"
        },
        {
          title: "舒缓emo",
          artist: "我的个人舒缓emo歌单",
          url: "https://music.163.com/#/my/m/music/playlist?id=12229521219"
        },
        {
          title: "XG",
          artist: "喜欢的一个女团！！！",
          url: "https://music.163.com/#/my/m/music/playlist?id=12257835627"
        }
      ]
    },
    {
      name: "户外活动",
      icon: "Bike",
      description: "喜欢骑行(不是pro)和徒步，在大自然中更能放松自我!!",
      photos: [
        "/我的小粉.jpg",
        "/小粉2.jpg",
        "/小粉3.jpg"
      ]
    },
    {
      name: "喜欢吃",
      icon: "EATing",
      description: "会做饭也喜欢下馆子，喜欢土菜馆&麦当劳，酸甜苦辣都爱吃！",
      photos: [
        "/巴菲杯.jpg",
        "/自己做的龙虾.jpg",
        "/自己做的三明治.jpg",
        "/自己做的糖葫芦.jpg",
        "/衢州菜.jpg",
        "/大排面.jpg"
      ]
    },
    {
      name: "书影",
      icon: "Books&Films",
      description: "看过的电影和书！",
      books: [
        "克林索尔的最后夏天",
        "悉达多",
        "白夜行",
        "局外人",
        "此生未完成",
        "在轮下",
        "need read more"
      ],
      movies: [
        "一一",
        "星际穿越",
        "红辣椒",
        "本杰明·巴顿奇事",
        "超脱",
        "黑镜",
        "爱，死亡和机器人",
        "山河故人",
        "小武",
        "need watch more"
      ]
    }
  ],
  photos: [
    {
      url: "/平圩电厂.jpg",
      title: "家乡",
      category: "城市"
    },
    {
      url: "/杭州江边建筑.jpg",
      title: "上班的城市",
      category: "城市"
    },
    {
      url: "/钱塘江.jpg",
      title: "杭州江边",
      category: "城市"
    },
    {
      url: "/栾树.jpg",
      title: "秋日风景",
      category: "自然"
    },
    {
      url: "/树.jpg",
      title: "骑车拍到的",
      category: "自然"
    },
    {
      url: "/西湖夕阳.jpg",
      title: "西湖落日",
      category: "自然"
    },
    {
      url: "/虎跑.jpg",
      title: "虎跑枫树",
      category: "自然"
    },
    {
      url: "/风筝儿童.jpg",
      title: "童年",
      category: "自然"
    },
    {
      url: "/秋天草坪.jpg",
      title: "秋天的草坪",
      category: "自然"
    },
    {
      url: "/江边骑车.jpg",
      title: "江边单车",
      category: "城市"
    },
    {
      url: "/太子湾.jpg",
      title: "太子湾郁金香",
      category: "自然"
    },
    {
      url: "/白塔公园.jpg",
      title: "白塔公园",
      category: "自然"
    }
  ]
};
