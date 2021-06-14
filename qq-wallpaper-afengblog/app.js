//app.js
App({
  onLaunch: function () {
      qq.setStorageSync('likeList', qq.getStorageSync('likeList') ? qq.getStorageSync('likeList') : [])
  },
  globalData: {
    userInfo: null
  }
})
