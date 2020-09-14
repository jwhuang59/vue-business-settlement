
<template>
    <div class="template">
        <div class="header" v-show="$route.meta.isCommon">
            <van-steps :active="$route.meta.indexStep" class="step_wrapper">
                <template v-for="item in $router.options.routes">
                    <van-step v-for="(child,index) in item.children" :key="index" v-if="child.meta.process === $route.meta.process">{{child.meta.title}}</van-step>
                </template>
            </van-steps>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <van-button type="default" @click="getProblem" v-show="$route.meta.isCommon">遇到问题 · 我要反馈</van-button>
    </div>
</template>
<style scoped>
.template{
    padding-bottom:20px;
}
.header {
    width: 90%;
    background: #F8F8F8;
    padding:10px 0;
    margin: 20px auto;
}
.step_wrapper{
    width:70%;
    margin: 0 auto;
    background: #F8F8F8;
}
button {
    width: 90%;
    display: block;
    margin: 0 auto;
    height: 45px;
    color: #31CF6E;
    border:1px solid #31CF6E;
    border-radius: 20px;
    font-size:15px;
}
</style>
<script>
import { Step, Steps, button} from 'vant';
export default {
    components:{
        [Step.name]: Step,
        [Steps.name]: Steps,
        [button.name]: button,
    },
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
        return {
            isAlive:true,

        };
    },
    mounted() {
    },
    methods:{
        reload() {
            this.isAlive = false;
            this.$nextTick(function () {
                this.isAlive = true
            })
        },
        getProblem(){
            this.jump('problem');
            
        }
    },

};
</script>
