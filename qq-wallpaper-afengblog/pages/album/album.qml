<Loading isDisplay="{{ isDisplay }}"></Loading>
<view class="album">
<!--<ad unit-id="133323cfd75671ad57fe06e1bc730bcb"></ad>-->
<view style="height: 20px"></view>
 <view class="album_name">
        <view>{{ duitangData[0].msg }}</view>
        <view>本专题共有<text>{{ albumNumber }}</text>个作品</view>
    </view>
    <view class="view">
      <view class="list_content">
        <view class="left">
          <block qq:for="{{duitangData}}" qq:key="">
            <template is="item" data="{{...item}}" qq:if="{{index%2==0}}"></template>
          </block>
        </view>
        <view class="right">
          <block qq:for="{{duitangData}}" qq:key="">
            <template is="item" data="{{...item}}" qq:if="{{index%2==1}}"></template>
          </block>
        </view>
      </view>
      <!--  下面是一个模块 -->
      <template name="item">
        <navigator url="../detail/detail?id={{id}}" class="wallpaper_item">
          <image lazy-load="true" src="{{ photo.path }}" mode="widthFix"></image>
          <view class="wallpaper_text">
              <text>{{ msg }}</text>
              
          </view>
        </navigator>
      </template>
    </view>
</view>
