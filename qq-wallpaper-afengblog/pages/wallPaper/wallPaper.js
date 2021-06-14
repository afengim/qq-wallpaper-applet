var app = getApp()
Page({
    data: {
        duitangData: [],
        thisStart: 0,
        isDisplay: true
    },
    onLoad() {
        let at = 'https://c-ssl.duitang.com/uploads/item/202006/17/20200617082332_ZwKAC.jpeg';
        console.log(at.substring(39,69))
        console.log(`https://c-ssl.duitang.com/uploads/item/${at.substring(39, 69)}.thumb.200_0.jpg`)
        wx.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
            withShareTicket: true
        });
        qq.request({
            url: 'https://m.duitang.com/napi/blog/list/by_category/',
            data: {
                start: this.data.thisStart,
                limit: 24,
                more: 1,
                include_fields: 'sender,album,like_count,msg',
                cate_key: '5d5cf9260c14a94a3155e254'
            },
            success: (res) => {
                this.setData({
                    duitangData: res.data.data.object_list,
                    isDisplay: false
                });
            }
        });
    },
    loadMore() {
        let _self = this;
        this.data.thisStart += 24;
        qq.request({
            url: 'https://m.duitang.com/napi/blog/list/by_category/',
            data: {
                start: this.data.thisStart,
                limit: 24,
                more: 1,
                include_fields: 'sender,album,like_count,msg',
                cate_key: '5d5cf9260c14a94a3155e254'
            },
            success: (res) => {
                var supDuitang = this.data.duitangData.concat(res.data.data.object_list)
                // this.data.duitangData = supDuitang
                this.setData({
                    duitangData: supDuitang
                });
            }

        });
    },
    onReachBottom(){
        this.loadMore()
    }
})
