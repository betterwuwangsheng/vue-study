//webpack 配置文件
//commonjs 导出

//获取当前文件路径
//映入插件
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  //入口
  entry: './src/main.js',

  //出口 -> 对象类型
  output: {

    //路径(绝队路径)
    //resolve() -> 拼接
    //全局变量 __dirname -> 获取当前文件所在路径
    path: path.resolve(__dirname, 'dist'),

    //文件名
    filename: 'bundle.js',
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        //匹配 css 文件
        test: /\.css$/,

        //css-loader 只负责 css 文件加载,不负责解析
        //style-loader 负责将样式添加到 DOM 中
        //使用多个 loader 时，是从走网友使用
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',

            options: {

              //当图片大小 < limit -> 会将图片编译为 base64 格式
              //当图片大小 > limit -> 使用 file-loader 加载
              limit: 13000,
              //修改文件打包后的名称
              name: 'img/[name].[hash:16].[ext]'
            }
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
    ],
  },
  resolve: {

    //别名
    alias: {

      //指向具体文件夹
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归吴汪胜所有'),

    //将 index.html 文件放到 dist 目录下
    new HtmlWebpackPlugin({

      //以 index.html 文件为模板
      template: 'index.html',
    }),
    new UglifyjsWebpackPlugin()
  ]
}
