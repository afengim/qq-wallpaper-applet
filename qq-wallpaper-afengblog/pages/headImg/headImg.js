var app = getApp()
Page({
    data: {
        duitangData: [],
        thisStart: 0,
        isDisplay: true
    },
    onLoad() {
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
                cate_key: '5d4cde1a405dd99416c2afbd'
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
        this.data.thisStart += 24;
        qq.request({
            url: 'https://m.duitang.com/napi/blog/list/by_category/',
            data: {
                start: this.data.thisStart,
                limit: 24,
                more: 1,
                include_fields: 'sender,album,like_count,msg',
                cate_key: '5d4cde1a405dd99416c2afbd'
            },
            success: (res) => {
                var supDuitang = this.data.duitangData.concat(res.data.data.object_list)
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
