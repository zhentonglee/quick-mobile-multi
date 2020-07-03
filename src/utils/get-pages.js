const glob = require('glob');
module.exports = function () {
  let pages = {};
  let pageTitle = {
    'buy-agreement': '报名协议',
    'coupon-agreement': '优惠券协议',
    'course-agreement': '课程详情',
    'user-agreement': '用户协议'
  };
  glob.sync('./src/pages/*/*.js').forEach(filePath => {
    let fileList = filePath.split('/');
    let fileName = fileList[fileList.length - 2];
    pages[fileName] = {
      // page 的入口
      entry: `src/pages/${fileName}/main.js`,
      // 模板来源
      template: `public/index.html`,
      // 在 dist 的输出
      filename: process.env.NODE_ENV === 'development' ? `${fileName}.html` : `${fileName}/index.html`,
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: pageTitle[fileName] ? pageTitle[fileName] : 'app-h5-fe',
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', fileName]
    };
  });
  return pages;
}