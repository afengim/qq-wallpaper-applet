<view class="login" qq:if="{{ !login }}">
    <view class="login_wrap" style="background-image: url(../../static/img/login.png);">
        <view class="tips">
            <view class="title">你还未授权</view>
            <text>为了完整体验，需要你授权</text>
            <text>仅用于展示头像和昵称</text>
        </view>
        <view class="button">
            <button type="default" bindtap="onCancelUseInfo">再想想</button>
            <button type="default" open-type="getUserInfo" bindgetuserinfo="getUserInfo">立即授权</button>
        </view>
    </view>
</view>