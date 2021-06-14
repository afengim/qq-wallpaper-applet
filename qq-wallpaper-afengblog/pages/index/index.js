Page({
    data: {
        bannerList: [],
        navList: [{
                name: '表情',
                id_code: '5d4bf0ed405dd99416c2af6f'
            },
            {
                name: '文字',
                id_code: '5d4cdeba405dd99416c2afbe'
            },
            {
                name: '爱豆',
                id_code: '5d4cdbf0405dd99416c2afb7'
            },
            {
                name: '影视',
                id_code: '5d4cdcdc405dd99416c2afb9'
            },
            {
                name: '动漫',
                id_code: '5d4cdd82405dd99416c2afbb'
            }
        ],
        indexRecommends: [],
        showSkeleton: false,
        indexDis: true
    },
    onLoad() {
        wx.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
            withShareTicket: true
        });
        qq.request({
            url: 'https://wallpaperku.tjws.net/xcx/banner.json',
            data: {
                app_code: 'mdt'
            },
            success: res => {
                this.setData({
                    bannerList: res.data.data.object_list
                })
            }
        });
        qq.request({
            url: 'https://m.duitang.com/napi/index/hot/',
            data: {
                start: 0,
                limit: 48,
                more: 1,
                include_fields: 'sender,album,like_count,msg'
            },
            success: (res) => {
                this.setData({
                    indexRecommends: res.data.data.object_list,
                    indexDis: false
                });
            }
        });
    },
    // share() {
    //     qq.showShareMenu({
    //         showShareItems: []
    //     })
    // },

    contac() {
        qq.showModal({
            title: '功能未开放',
            content: '官方暂未开放客服功能，有问题请联系QQ:3207346758',
            confirmText: '复制',
            confirmColor: '#02bd00',
            success(res) {
                if (res.confirm) {
                    qq.setClipboardData({
                        //准备复制的数据
                        data: '1369591617',
                        success: function(res) {
                            qq.showToast({
                                title: '复制成功',
                            });
                        }
                    });
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    onPullDownRefresh(){
      wx.stopPullDownRefresh({
          success: (res) => {
              console.log(res);
              qq.showToast({
                  icon: 'none',
                  title: '已刷新',
                  duration: 1000
            })
          }
      })
       
       
    }
})
