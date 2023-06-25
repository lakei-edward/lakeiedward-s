const { penName, footerTitle } = require("../common/info");
module.exports = {
  // 页脚信息
  createYear: 2017, // 博客创建年份
  copyrightInfo:
    penName + ' | ' + footerTitle + ' <a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备2023006581号-1</a>', // 博客版权信息，支持a标签
}