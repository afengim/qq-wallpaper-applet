Page({
    properties: {
        login: {
            type: Boolean,
            value: false,
            observer() {
                // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
                // 通常 newVal 就是新设置的数据， oldVal 是旧数据
                console.log('改编');
            }
        }
    },
    methods: {
        getUserInfo(e) {
            qq.setStorageSync('userInfo', e.detail.userInfo)
            const login = false
            this.triggerEvent('updataLoad', login)
        },
        onCancelUseInfo() {
            const login = false
            this.triggerEvent('onCancle', login)
        }
    }
    
})
