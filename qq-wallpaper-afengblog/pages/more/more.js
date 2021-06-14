const category = require('../../static/data/more.js');
Page({
    data: {
        categoryList: []
    },
    onLoad() {
        //console.log(categoryData);
        wx.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
            withShareTicket: true
        });
        this.setData({
            categoryList: category.categoryData
        })
    }
})
