//生产时依赖
const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.js')

//合并配置文件
//开发时依赖
module.exports = WebpackMerge(baseConfig, {
  //开发时服务器
  devServer: {

    //目录
    contentBase: './dist',

    //实时监听
    inline: true,
  },
})
