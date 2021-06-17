//生产时依赖
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.js')

//合并配置文件
module.exports = WebpackMerge(baseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin(),
  ]
})
