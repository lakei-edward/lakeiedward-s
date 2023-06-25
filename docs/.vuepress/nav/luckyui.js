// 前端航栏
module.exports = {
  text: "作品",
  items: [
    // 没有二级导航时可以直接添加
    // { text: "vue-luckyui", link: "/luckyui/home/" },
    {
      text: "UI组件库",
      items: [
        {
          text: "vue-luckyui",
          link: "https://github.com/lakei-edward/lucky-ui",
        },
        {
          text: "vue-luckyui文档",
          link: "http://www.luckyui.cn/vue-luckyui/",
        },
      ],
    },
    {
      text: "若依页面分层工具",
      items: [
        { text: "ry-layer-page", link: "https://github.com/lakei-edward/ry-layer-page" },
        { text: "ry-layer-page文档", link: "http://www.luckyui.cn/ry-layer-page/" },
      ],
    },
  ],
};
