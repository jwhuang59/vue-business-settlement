<template>
    <div class="template">
        <div class="header" v-show="$route.meta.isCommon">
            <div class="step_wrapper">
                <template v-for="item in $router.options.routes">
                    <div class="step_item" v-for="(child, index) in item.children" :key="index" v-if="child.meta.process === $route.meta.process">
                        <div class="active dot" v-if="$route.meta.indexStep === index">
                            <span></span>
                        </div>
                        <van-icon name="checked" class="icon_checked" size="0.5rem" v-else-if="$route.meta.indexStep>index" />
                        <div class="dot" v-else></div>
                        <div class="line"></div>
                        <p>{{ child.meta.title }}</p>
                    </div>
                </template>
            </div>
        </div>
        <router-view></router-view>
        <!-- <keep-alive>
            <router-view></router-view>
        </keep-alive> -->
        <van-button type="default" @click="getProblem" v-show="$route.meta.isCommon">遇到问题 · 我要反馈</van-button>
    </div>
</template>
<style lang="scss" scoped>
.template {
    padding-bottom: 20px;
    .header {
        width: 90%;
        background: #f8f8f8;
        margin: 20px auto;
        .step_wrapper {
            width: 90%;
            padding: 15px 20px;
            margin: 0 auto;
            background: #f8f8f8;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        .step_item {
            width: 33.3%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 2;
            .icon_checked {
                color: #999;
            }
            p {
                font-size: 13px;
                margin-top: 5px;
                color: #333300;
            }
            .dot {
                width: 15px;
                height: 15px;
                border-radius: 50%;
                border: 1px solid #999;
                position: relative;
            }
            .active {
                border: 1px solid #31cf6e;
                span {
                    width: 10px;
                    height: 10px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    background: #31cf6e;
                }
            }
            .line {
                width: 40%;
                flex: 1;
                height: 1px;
                position: absolute;
                background: #868686;
                right: -20%;
                top: 8px;
            }
        }
        .step_item:last-child .line {
            display: none;
        }
    }
    button {
        width: 90%;
        display: block;
        margin: 0 auto;
        height: 45px;
        color: #31cf6e;
        border: 1px solid #31cf6e;
        border-radius: 20px;
        font-size: 15px;
    }
}
</style>
<script>
import { Step, Steps, button } from 'vant';
export default {
    components: {
        [Step.name]: Step,
        [Steps.name]: Steps,
        [button.name]: button
    },
    provide() {
        return {
            reload: this.reload
        };
    },
    data() {
        return {
            isAlive: true
        };
    },
    mounted() {},
    methods: {
        reload() {
            this.isAlive = false;
            this.$nextTick(function () {
                this.isAlive = true;
            });
        },
        getProblem() {
            this.jump('problem');
        }
    }
};
</script>
