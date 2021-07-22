//存放公共方法

//防抖函数
export function debounce(func, delay) {
  let timer = null

  return function (...args) {

    //第一次 timer 为 null
    if (timer)
      clearTimeout(timer)

    //设置延迟时间
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

//时间戳转换为时间
export function formatDate(date, fmt) {

  //获取年份
  if (/(y+)/.test(fmt)) {
    // RegExp.$1 为 /(y+)/.test(fmt)返回的结果
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  //获取 
  // M+ -> 字符串匹配
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};
