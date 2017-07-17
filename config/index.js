// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  // production生产环境
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    // 构建输出静态资源路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 构建输出二级目录
    assetsSubDirectory: 'static',
    // 构建发布的根目录，可配置为资源服务器域名或 CDN 域名
    assetsPublicPath: '/',
    // 是否开启 cssSourceMap
    // 由于代码压缩后调bug定位非常困难，引入sourcemap记录压缩前后的位置信息记录，当产生错误时直接定位到未压缩前的位置
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 默认关闭 gzip，因为很多流行的静态资源主机，例如 Surge、Netlify，已经为所有静态资源开启gzip
    productionGzip: false,
    // 需要使用 gzip 压缩的文件扩展名
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // 运行“build”命令行时，加上一个参数 --report，可以在构建完成后参看包分析报告
    // true为开启，false为关闭
    bundleAnalyzerReport: process.env.npm_config_report
  },
  // dev 开发环境
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // proxyTable 代理的接口（可跨域）
    // 使用方法：https://vuejs-templates.github.io/webpack/proxy.html
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
