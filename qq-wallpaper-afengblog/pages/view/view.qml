<Loading isDisplay="{{ isDisplay }}"></Loading>
<view style="height: 10px;"></view>
<ad unit-id="dcc168c2173f18943e85df21a38dd32e" type="card"></ad>
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
<!-- <view class="load_more">
  {{ noMoreText }}
    <view class="loading clearfix" qq:if="{{ !noMoreText ? true : false }}">
        <view></view><view></view><view></view>
    </view>
</view> -->
