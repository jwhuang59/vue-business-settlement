<template>
    <div id="app">
        <div :class="[$route.meta.style, 'header']" v-if="$route.meta.isThird">
            <van-icon name="arrow-left" class="icon_left" @click="back(-1)" v-show="!$route.meta.isBack" />
            <p>{{ $route.meta.title }}</p>
        </div>
        <router-view />
    </div>
</template>
<style lang="scss" src="./assets/scss/app.scss"></style>
<style scoped>
.header {
    width: 100%;
    height: 60px;
    background: #f8f8f8;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
}
.style {
    background: #31cf6e;
    color: #fff;
}
.style .icon_left {
    color: #fff;
}
.icon_left {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 22px;
    color: #333;
}
.header p {
    font-size: 16px;
}
</style>
<script>
/** 动态引入icon-css样式文件 */
/* eslint-disable */
if (process.env.NODE_ENV === 'development') {
    import('@/assets/scss/iconfont/iconfont.css');
} else {
    import('@/assets/scss/iconfont/iconfont.css');
}
</script>
