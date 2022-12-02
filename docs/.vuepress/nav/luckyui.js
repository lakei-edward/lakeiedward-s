// 前端航栏
module.exports = {
  text: "作品",
  link: "/luckyui/", // 目录页链接，此处 link 是 vdoing 主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  items: [
    // 没有二级导航时可以直接添加
    // { text: "vue-luckyui", link: "/luckyui/home/" },
    {
      text: "UI组件",
      items: [
        {
          text: "vue-luckyui",
          link: "https://github.com/lakei-edward/lucky-ui",
        },
        {
          text: "vue-luckyui文档",
          link: "https://lakei-edward.github.io/luckyui.github.io/",
        },
      ],
    },
    {
      text: "若依框架",
      items: [
        { text: "ry-page-json", link: "/luckyui/home/" },
        { text: "ry-page-json文档", link: "/luckyui/home/" },
      ],
    },
  ],
};
