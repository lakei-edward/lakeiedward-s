const head = require("./config/head.js");
const plugins = require("./config/plugins.js");
const themeConfig = require("./config/themeConfig.js");

module.exports = {
  theme: "vdoing", // 使用依赖包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题
  base: "/lakeiedward/",//部署之后访问得路径
  title: "lakeiedward's",
  description: "web前端技术博客，专注web",
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
    extractHeaders: ["h2", "h3", "h4"],
  },
  head,
  plugins,
  themeConfig,
};
