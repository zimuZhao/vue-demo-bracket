/**
 * 工具函数
 * 主要包含三个函数：
 * 1.生成静态资源的路径
 * 2.生成 ExtractTextPlugin对象或loader字符串
 * 3.生成 style-loader的配置
 */
var path = require('path')
var config = require('../config')
// 提取css的插件
// https://github.com/webpack-contrib/extract-text-webpack-plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * 生成静态资源的路径
 * @param _path 相对于静态资源文件夹的文件路径
 * @returns {*|string} 静态资源的完整路径
 */
exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  //  path.posix.join与path.join一样，不过总是以 posix 兼容的方式交互
  return path.posix.join(assetsSubDirectory, _path)
}

/**
 * 生成处理css的loaders配置
 * @param options
 * @returns {{css: *, postcss: *, less: *, sass: *, scss: *, stylus: *, styl: *}}
 */
exports.cssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    var loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {indentedSyntax: true}),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
/**
 * 生成 ExtractTextPlugin对象或loader字符串
 * style-loader文档：https://github.com/webpack/style-loader
 * @param options
 * @returns {Array}
 */
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
