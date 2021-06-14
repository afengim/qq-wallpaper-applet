const app = getApp();
Page({
    data: {
        duitangData: [],
        thisStart: 0,
        options: null,
        albumNumber: 0,
        noMoreText: '',
        isDisplay: true
    },
    onLoad(option) {
        wx.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
            withShareTicket: true
        });
        this.setData({
            options: option.album_id
        })
        qq.request({
            url: 'https://m.duitang.com/napi/blog/list/by_album/',
            data: {
                start: this.data.thisStart,
                limit: 24,
                more: 1,
                album_id: option.album_id
            },
            success: res => {
                qq.setNavigationBarTitle({
                    title: `专辑-${res.data.data.object_list[0].msg}`
                });
                this.setData({
                    duitangData: res.data.data.object_list,
                    albumNumber: res.data.data.total,
                    isDisplay: false
                })
            },
            fail: err => {
                console.log(err);
            }
        });
    },
    onReachBottom() {
        this.loadMore()
    },
    loadMore() {
        this.data.thisStart += 24;
        qq.request({
            url: 'https://m.duitang.com/napi/blog/list/by_album/',
            data: {
                start: this.data.thisStart,
                limit: 24,
                more: 1,
                album_id: this.data.options
            },
            success: res => {
                if (res.data.data.object_list == '') {
                    this.setData({
                        noMoreText: '已经到底了~'
                    })
                    qq.showToast({
                        title: '没有更多了',
                        icon: 'none'
                    });
                    return;
                } else {
                    var supDuitang = this.data.duitangData.concat(res.data.data.object_list)
                    this.setData({
                        duitangData: supDuitang
                    });
                }

            },
            fail: err => {
                console.log(err);
            }
        })
    }

})
