Page({
    data: {
        userInfo: qq.getStorageSync('userInfo'),
        infoBg: qq.getStorageSync('userInfo') && qq.getStorageSync('userInfo').avatarUrl.substring(0, qq.getStorageSync(
            'userInfo').avatarUrl.length - 3) + '0',
        login: false,
        likeList: qq.getStorageSync('likeList')
    },
    onLoad() {
        if (qq.getStorageSync('userInfo')) {
            let avatar = qq.getStorageSync('userInfo').avatarUrl
            let url = avatar.substring(0, avatar.length - 3) + '0'
            this.setData({
                userInfo: qq.getStorageSync('userInfo'),
                infoBg: url,
                likeList: qq.getStorageSync('likeList')
            })
        }

    },
    setDatas() {
        this.setData({
            userInfo: qq.getStorageSync('userInfo')
        })
    },
    updataMyload(e) {
        console.log(e);
        if (e.detail) {
            this.setData({
                login: e.detail
            })
            this.onLoad()
        }
    },
    onCancelUseInfo(e) {
        if (e.detail) {
            this.setData({
                login: e.detail
            })
        }
    },
    getUserInfo(e) {
        this.setData({
            uesrInfo: e.detail.uesrInfo
        })
        qq.setStorageSync('userInfo', e.detail.userInfo)
    },
    onSetListHandle() {
        if (!this.data.userInfo) {
            this.setData({
                login: true
            })
            return;
        }
        qq.navigateTo({
            url: '../view/view?id=like&name=收藏'
        })
    },
    onCheckLoginHandle() {
        if (!this.data.userInfo) {
            this.setData({
                login: true
            })
            return;
        }
    }
})
