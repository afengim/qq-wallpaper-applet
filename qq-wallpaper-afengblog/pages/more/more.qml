<view class="more">
    <navigator open-type="switchTab" url="../wallPaper/wallPaper">
        <view>壁纸</view>
        <text>每天换一张壁纸</text>
    </navigator>
    <navigator open-type="switchTab" url="../headImg/headImg">
        <view>头像</view>
        <text>换个头像，换个心情</text>
    </navigator>
    <ad unit-id="f3bc4f10417ad7e2a572b1d62ec9ac64" type="feeds"></ad>
    <navigator qq:for="{{ categoryList }}" url="../view/view?id={{ item.target }}&name={{ item.name }}" qq:key="index">
        <view>{{ item.name }}</view>
        <text>{{ item.description }}</text>
    </navigator>
</view>
<ad unit-id="dcc168c2173f18943e85df21a38dd32e" type="card"></ad>