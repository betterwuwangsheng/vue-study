//小明
let name = '小明'
let age = 22
let flag = true

function sum(num1, num2) {
    return num1 + num2
}

if (flag) {
    console.log(sum(10, 20));
}


//导出方式一
export {
    flag, sum
}

//导出方式二
export var number = 100
export var height = 166

//导出函数和类
export function mul(num1, num2) {
    return num1 * num2
}

export class Person {
    run() {
        console.log('run');
    }
}

// const address = '北京市'

// export {
// address
// }
// export const address = '北京市'
//const address = '眉山市'
//export default address //导入时可以修改名称(开发时只能有一个 -> 防止重名)

export default function (argument) {
    console.log(argument);
}