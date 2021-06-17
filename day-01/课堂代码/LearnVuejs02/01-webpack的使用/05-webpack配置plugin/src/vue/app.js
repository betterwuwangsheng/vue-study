export default {
  template: `
    <div>
      <h1>{{ message }}</h1>
      <button @click="btnClick"></button>
      <h1>{{ name }}</h1>
    </div>
    }`,

  //组件中的数据是函数(并且返回一个对象)
  data() {
    return {
      message: 'Hello Webpack',
      name: '吴汪胜'
    }
  },
  methods: {
    btnClick() {
      console.log('点击了');
    }
  }
}