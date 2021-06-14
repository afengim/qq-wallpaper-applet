<view class="index skeleton">
    <swiper
      indicator-dots="true"
      autoplay="true"
      interval="3000"
      duration="300"
      circular="true"
      indicator-color="#ffffff"
      indicator-active-color="#d4237a"
    >
      <block qq:for="{{ bannerList }}">
        <swiper-item>
           <navigator url="../album/album?album_id={{item.album_id}}">
               <image src="{{ item.image }}" class="slide-image" mode="widthFix"/>
           </navigator>
        </swiper-item>
      </block>
    </swiper>
    <view class="nav">
        <view class="nav_item">
            <view class="nav_item_wrap">
                <navigator open-type="switchTab" url="../wallPaper/wallPaper">壁纸</navigator>
            </view>
        </view>
        <view class="nav_item">
            <view class="nav_item_wrap">
                <navigator open-type="switchTab" url="../headImg/headImg">头像</navigator>
            </view>
        </view>
        <view class="nav_item" qq:for="{{ navList }}" qq:key="index">
            <view class="nav_item_wrap">
                <navigator url="../view/view?id={{item.id_code}}&name={{ item.name }}">{{ item.name }}</navigator>
            </view>
        </view> 
        <view class="nav_item">
            <view class="nav_item_wrap">
                <navigator url="../more/more">更多</navigator>
            </view>
        </view>   
    </view>
    <!--<ad unit-id="b016ce38fca9293fe733d38561fe4edc"></ad>-->
    <view class="index_recomm">
        <view class="loading_wrap" qq:if="{{ indexDis }}">
            <view class="load_more">
                <view class="loading clearfix">
                    <view></view><view></view><view></view>
                </view>
            </view>
        </view>
    <!-- <ad unit-id="dcc168c2173f18943e85df21a38dd32e"></ad> -->
        <view class="list_content">
          <view class="left">
            <block qq:for="{{indexRecommends}}" qq:key="">
              <template is="item" data="{{...item}}" qq:if="{{index%2==0}}"></template>
            </block>
          </view>
          <view class="right">
            <block qq:for="{{indexRecommends}}" qq:key="">
              <template is="item" data="{{...item}}" qq:if="{{index%2==1}}"></template>
            </block>
          </view>
          <ad unit-id="f3bc4f10417ad7e2a572b1d62ec9ac64" type="feeds"></ad>
        </view>
        <!--  下面是一个模块 -->
        <template name="item">
          <navigator url="../detail/detail?id={{id}}" class="wallpaper_item">
            <image lazy-load="true" src="{{ photo.path }}" mode="widthFix"></image>
            <view class="wallpaper_text">
                <text>{{ msg }}</text>
                <!-- <view class="time_and_star">
                    <view class="text"><icon type="success_no_circle" size="14" color="#ef498b" />{{ favorite_count }}</view>
                    <view class="text"><icon type="search" size="14" color="#ef498b" />{{ favorite_count }}</view>
                </view> -->
            </view>
          </navigator>
        </template>
    </view>
    <view class="footer">
        <view class="setting">
            <button bindtap="contac">联系我们</button>
            <button open-type="feedback">意见反馈</button>
            <button open-type="share">分享</button>
            <button bindtap="subscribeAppMsg">订阅</button>
            
        </view>
        <view class="index_tips">
            免责声明：图片来源于网络，如有侵权，请及时告知我们，我们会在最短时间内删除。
        </view>
    </view>
</view>
