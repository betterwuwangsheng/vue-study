import {sum, height} from './aaa.js'
//小红
let flag = true

if (flag) {
    console.log(sum(10, 2000));
}

console.log('身高：', height, 'cm');

//导入函数和类
import {mul} from './aaa.js'

console.log(mul(10, 10));

import {Person} from "./aaa.js";

const p = new Person()
console.log(p.run())