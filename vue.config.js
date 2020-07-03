const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path = require('path');
let getPages = require('./src/utils/get-pages.js');
const resolve = dir => {
  return path.join(__dirname, dir);
}

if (process.env.BUILD_MODE === 'development') {
  process.env.VUE_APP_BASE_API = '/';
} else if (process.env.BUILD_MODE === 'test') {
  process.env.VUE_APP_BASE_API = '/';
} else if (process.env.BUILD_MODE === 'production') {
  process.env.VUE_APP_BASE_API = '/';
} else {
  process.env.VUE_APP_BASE_API = '/';
}

module.exports = {
  pages: getPages(),
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            propList: ['*']
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    // eslint-loader配置
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.formatter = require('eslint-friendly-formatter')
        options.emitWarning = false
        options.fix = true
        return options
      })
    // 相对路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@course-detail', resolve('src/pages/course-detail'))
  },
  productionSourceMap: false,
  devServer: {
    proxy: 'http://39.108.116.189:8089'
  }
}
