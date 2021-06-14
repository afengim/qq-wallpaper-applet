<Loading isDisplay="{{ isDisplay }}"></Loading>
<view class="detail skeleton">
    <view class="detail_img">
        <image bindtap="lookImage" src="{{ details.photo.path }}" mode="widthFix"></image>
        <button class="download" bindtap="saveImgtoFile">
            保存该图片
            
      </button>
        <button class="download" bindtap="shareQzone">
            分享到QQ空间
       </button>
        
            <button class="shareqq" open-type="share" share-mode="{{['qq']}}">分享给TA吧~</button>
        
      
        
        <view class="detail_msg">
			<text class="gudingtxt">图片描述：</text>
            <text>{{ details.msg }}</text>
        </view>
        <view class="time_and_star">
            
        </view>
        <view class="detail_album">
            查看更多同类专题：<navigator url="../album/album?album_id={{details.album.id}}">{{ details.album.name }}</navigator>
        </view>
    </view>
    <view class="recomm_album">
        <view class="recomm_tips">推荐专题</view>
        <view class="recomm_item" qq:for="{{ details.related_albums }}">
            <navigator url="../album/album?album_id={{item.id}}">
                <view class="recomm_img">
                    <image src="{{ item.covers[0] }}" mode="widthFix"></image>
                </view>
                <view class="recomm_text">
                    <text>{{ item.name }}</text>
                    <view><view></view>{{ item.like_count }}</view>
                </view>
            </navigator>
        </view>
        <view style="height: 20px"></view>
       <!--<ad unit-id="b016ce38fca9293fe733d38561fe4edc"></ad> 
       <ad unit-id="1d2a3d4836edd8a307b6b9fbdea05d2f" type="card"></ad>-->
    </view>
  
</view>


