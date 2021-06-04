const app = new Vue({

    //要挂载的标签
    el: '#app',

    //vue 要管理的数据
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            },
        ]
    },
    methods: {

        //遍历的是对象
        increment(index) {
            this.books[index].count++

        },
        decrement(index) {
            this.books[index].count--
        },
        remove(index) {

            //删除 splice(start, 数量)
            this.books.splice(index, 1)
        },

        //价格的显示格式
        getTotalPrice(price) {
            return '￥' + price.toFixed(2)
        }
    },

    //过滤器 -> 函数
    filters: {

        //不建议使用
        showPrice(price) {
            return '￥' + price.toFixed(2)
        },
    },

    //计算属性
    computed: {
        totalPrice() {

            let totalPrice = 0
            //1.for(let i = 0; i < this.books.length; ++i){
            //2.for (let i in this.books) {
            for (let item of this.books) {
                totalPrice += item.price * item.count
            }
            return totalPrice
        }
    },
})
