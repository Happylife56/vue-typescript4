const path = require('path')

const name = 'Vue Typescript' // TODO: get this variable from setting.ts

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/static/' : '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 8888,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    progress: false,
    proxy: {
      '/shops': {
        target: `http://shop.deeptel.com.cn`,
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        pathRewrite: {
          // '/shops': ''
        }
      }
    }
  },
  pwa: {},
  css: {
    loaderOptions: {
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `@import "~@/styles/common.scss";`
      }
      // postcss: {
      //   // options here will be passed to postcss-loader
      //   plugins: [require('postcss-px2rem')({
      //     remUnit: 75
      //   })]
      // }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        // path.resolve(__dirname, './src/styles/common.scss')
      ]
    }
  },
  chainWebpack(config) {
    // 移除 prefetch、preload加载模式
    config.plugins.delete('preload') // 默认为index.html
    config.plugins.delete('prefetch') // 默认为index.html
  }
}
