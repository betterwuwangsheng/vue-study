export default {


  // context 上下文
  //传递参数
  // aUpdateInfo(context, payload) {

  //   //模拟异步操作
  //   setTimeout(() => {
  //     context.commit('updateInfo')
  //     console.log(payload.message)

  //     //回调
  //     payload.success()
  //   }, 1000);
  // }

  aUpdateInfo(context, payload) {

    //模拟异步操作
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload)

        //回调
        resolve('11')
      }, 1000)
    })
  }
}
