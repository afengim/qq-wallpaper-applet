const imgurl = "../../static/img/11.png"
Page({
    onLoad(){
      qq.showShareMenu({
          showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
          withShareTicket: true
      }); 
    },
    scanQqcode(){
        qq.previewImage({
          urls: [imgurl],
          success() {
              qq.showToast({
                  title: '长按图片识别二维码',
                  icon: 'none',
                  duration: 1500
              })
          },
          fail(err) {
              console.log(err);
          }
        })
    }
})