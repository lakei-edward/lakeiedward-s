// 前端
const frontEdnNav = require("../nav/frontEndNav");
// 框架
// const frameNav = require('../nav/frameNav');
// 开发
// const otherNav = require("../nav/otherNav");
// 索引
const indexNav = require("../nav/indexNav");
// 组件
const luckyui = require("../nav/luckyui");

module.exports = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "导航站",
    link: "/navigation/",
  },
  frontEdnNav,
  // frameNav,
  // otherNav,
  luckyui,
  indexNav, // 索引导航
];
