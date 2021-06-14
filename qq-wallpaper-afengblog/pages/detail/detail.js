Page({
    data: {
        details: {},
        imgLocalPath: null,
        showSkeleton: false,
        isDisplay: true,
        options: null,
        likeList: qq.getStorageSync('likeList')
    },
    onLoad(option) {
        this.setData({
            options: option.id
        })
        qq.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
            withShareTicket: true,
            success() {
                // qq.shareAppMessage({
                //     title: this.data.details.msg,
                //     imageUrl: this.data.imgLocalPath,
                //     entryDataHash: true,
                //     query: `id=${option.id}`
                // })
            }
        });
        qq.request({
            url: 'https://m.duitang.com/napi/blog/detail/',
            data: {
                blog_id: option.id,
                include_fields: 'tags,related_albums,related_albums.covers,root_album,share_links_2,extra_links,icon_description,root_id'
            },
            success: res => {
                qq.setNavigationBarTitle({
                  title: res.data.data.msg
                });
                qq.getImageInfo({
                    src: res.data.data.photo.path,
                    success: res => {
                        this.setData({
                            imgLocalPath: res.path
                        })
                    }
                })
                this.setData({
                    details: res.data.data,
                    isDisplay: false
                });
            },
            fail: err => {
                console.log(err);
            }
        });
    },
    lookImage() {
        qq.previewImage({
            current: this.data.details.photo.path, // 当前显示图片的http链接
            urls: [this.data.details.photo.path], // 需要预览的图片http链接列表
            success(res) {
                qq.showToast({
                    title: '长按保存或分享图片',
                    icon: 'none',
                    duration: 2000
                })
            },
            fail(err) {
                qq.showToast({
                    title: `错误${err}`,
                    icon: 'none'
                })
            }
        })
    },
    saveImgtoFile(){
        qq.saveImageToPhotosAlbum({
          filePath: this.data.imgLocalPath,
          success(res) {
              qq.showToast({
                  title: '已保存至系统相册',
                  icon: 'success',
                  duration: 2000
              })
          }
        })
    },
    shareQzone(){
       qq.openQzonePublish({
           text: `${this.data.details.msg} \美图小程序_最全美图一网打尽，壁纸、头像，表情包、爱豆、影视、动漫应有尽有，更多精彩等你来发现！`,
           media: [
               {
                   type: 'photo',
                   path: this.data.imgLocalPath
               }
           ]
       })
    },
    
})
