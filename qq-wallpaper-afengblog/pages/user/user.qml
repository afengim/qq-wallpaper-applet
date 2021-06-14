<Login login="{{ login }}" bind:updataLoad="updataMyload" bind:onCancelUseInfo="onCancelUseInfo"></Login>
<view class="user">
    <view class="face">
        <view class="info_bg" style="background: url({{ userInfo ? infoBg : '../../static/img/logo.jpg' }}) center no-repeat;background-size: 100%;">
        </view>
        <view class="full"></view>
        <view class="avatar" bindtap="onCheckLoginHandle">
            <image src="{{ userInfo ? userInfo.avatarUrl : '../../static/img/logo.jpg' }}" mode="widthFix"></image>
        </view>
        <view class="info">
            <view class="name">{{ userInfo ? userInfo.nickName : '未登录' }}</view>
            <view class="gender {{ userInfo.gender == 1 ? 'nan' : 'nv' }}">{{ userInfo.gender == 1 ? '🤸️️♂️' : '🤸️♀' }}</view>
        </view>
        <view class="like" bindtap="onSetListHandle">
            <view>收藏<text>❤</text></view>
        </view>
    </view>
    <view class="show">
        <view class="list_content" qq:if="{{ userInfo && likeList && likeList.length > 0 }}">
          <view class="left">
            <block qq:for="{{likeList}}" qq:key="{{index}}">
              <template is="item" data="{{...item}}" qq:if="{{index%2==0}}"></template>
            </block>
          </view>
          <view class="right">
            <block qq:for="{{likeList}}" qq:key="{{index}}">
              <template is="item" data="{{...item}}" qq:if="{{index%2==1}}"></template>
            </block>
          </view>
        </view>
        <view class="nolike" qq:else>{{ userInfo ? '没有任何收藏' : '点击头像授权后可以看到收藏' }}</view>
    </view>
</view>

<template name="item">
    <navigator url="../detail/detail?id={{id}}" class="wallpaper_item">
        <image lazy-load="true" src="{{ photo.path }}" mode="widthFix"></image>
        <view class="wallpaper_text">
            <text>{{ msg }}</text>
        </view>
    </navigator>
</template>
