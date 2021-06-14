var app = getApp()
Page({
    data: {
        duitangData: [],
        thisStart: 0,
        options: null,
        noMoreText: '',
        isDisplay: true
    },
    onLoad(option) {
        if(option.id === 'like') {
            this.setData({
                duitangData: qq.getStorageSync('likeList'),
                isDisplay: false
            })
            return;
        }
        wx.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
            withShareTicket: true
        });
        this.setData({
            options: option.id
        })
        qq.request({
            url: 'https://m.duitang.com/napi/blog/list/by_category/',
            data: {
                start: this.data.thisStart,
                limit: 24,
                more: 1,
                include_fields: 'sender,album,like_count,msg',
                cate_key: option.id
            },
            success: (res) => {
                this.setData({
                    duitangData: res.data.data.object_list,
                    isDisplay: false
                });
            },
            fail: (err) => {
                console.log(err);
            }
        });
        qq.setNavigationBarTitle({
          title: option.name
        })
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
                cate_key: this.data.options
            },
            success: (res) => {
                if(res.data.data.object_list == ''){
                    this.setData({
                        noMoreText: '已经到底了~'
                    })
                    qq.showToast({
                        title: '没有更多了',
                        icon: 'none'
                    });
                    return;
                }else {
                   var supDuitang = this.data.duitangData.concat(res.data.data.object_list)
                   this.setData({
                       duitangData: supDuitang
                   }); 
                }
            }
        });
    },
    onReachBottom(){
        this.loadMore()
    }
})
