//webpack 配置文件
//commonjs 导出

//获取当前文件路径
const path = require('path')
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
        filename: 'bundle.js'
    },
}