<Loading isDisplay="{{ isDisplay }}"></Loading>
<view class="head">
<!--<ad unit-id="b016ce38fca9293fe733d38561fe4edc"></ad>-->
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
  <!-- <view class="load_more" id="the-id" bindtap="loadMore">
    <view class="loading clearfix">
        <view></view><view></view><view></view>
    </view>
  </view> -->
</view>
