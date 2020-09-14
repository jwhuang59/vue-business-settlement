<template>
    <div id="app">
        <div :class="[$route.meta.style,'header']">
            <van-icon name="arrow-left" class="icon_left" @click="back(-1)" v-show="!$route.meta.isBack"/>
            <p>{{$route.meta.title}}</p>
        </div>
        <router-view />
    </div>
</template>
<style lang="scss" src="./assets/scss/app.scss"></style>
<style scoped>
.header{
    width:100%;
    height:60px;
    background:#F8F8F8;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
}
.style{
    background:#31CF6E;
    color:#fff;
}
.style .icon_left{
    color:#fff;
}
.icon_left{
    position: absolute;
    left:10px;
    top:50%;
    transform: translate(0,-50%);
    font-size:22px;
    color:#333
}
.header p{
    font-size:16px;
}

</style>
<script>
import { icon,Button } from 'vant';
export default {
    components:{
        [icon.name]: icon,
        [Button.name]: Button
    },
};
</script>
