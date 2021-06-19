//使用commonjs 的模块化导入 -> 通过 require 导入

const {add, mul} = require('./js/mathUtils.js')


console.log(add(20, 30));
console.log(mul(20, 30));

// ES6 模块化导入
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//依赖 css 文件
require('./css/normal.css')

//依赖 less 文件
require('./css/special.less')

//导入 Vue 包
import Vue from 'vue';
// import App from  "./vue/app"
import App from './vue/App'
// const App = {
//   template: `
//     <div>
//     <h1>{{ message }}</h1>
//     <button @click="btnClick"></button>
//     <h1>{{ name }}</h1>
//     </div>
//     }`,
//
//   //组件中的数据是函数(并且返回一个对象)
//   data() {
//     return {
//       message: 'Hello Webpack',
//       name: '吴汪胜'
//     }
//   }
// }

//使用 Vue 进行开发
new Vue({
  el: '#app',
  // 抽取 template
  template: `<App/>`,
  //   <div>
  //   <h1>{{ message }}</h1>
  //   <button @click="btnClick"></button>
  //   <h1>{{ name }}</h1>
  //   </div>
  // `,
  // data: {
  //   message: 'Hello Webpack',
  //   name: '吴汪胜'
  // },

  //注册组件
  components: {

    //对象增强写法(组件首字母大写)
    App,
  },
})
