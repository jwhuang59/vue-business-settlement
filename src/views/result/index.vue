
<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button, icon } from 'vant';
export default {
    components:{
        [Button.name]: Button,
        [icon.name]: icon
    },
    data() {
        return {
            shopStatus: '',
            thirdInfo: [
                {
                    thirdText:'复用资质·开通美团渠道',
                    thirdStatus:0,
                    thirdType:1
                },
                {
                    thirdText:'复用资质·开通饿了么渠道',
                    thirdStatus:0,
                    thirdType:2
                },
                {
                    thirdText:'复用资质·开通京东到家渠道',
                    thirdStatus:0,
                    thirdType:3
                },
                {
                    thirdText:'复用资质·开通口碑渠道',
                    thirdStatus:0,
                    thirdType:4
                }
            ]
        };
    },
    mounted() {
        const getLoginStatus = localStorage.getItem("token")
        if(!getLoginStatus){
            this.jump("login")
        }else{
            this.getStoreStatus();
            this.getThirdStatus();
        }
        
    },
    methods:{
        getStoreStatus(){
            this.$request("getShopStatus").then((res) => {
                this.shopStatus = res.data.shopStatus
            })
        },
        getThirdStatus(){
            this.$request("getThirdPartyStatus").then((res) => {
                if(res.data.length === 0) return false;
                res.data.map((item,index) => {
                    this.$set(this.thirdInfo[index],'thirdStatus',item.status);
                })

            })
        },
        toChannel(i){
            this.$store.commit({
                type: 'save_channel',
                playload: i || ""
            });
            this.jump('agreement');
        },
        getProblem(){
            this.jump('problem');
        }
    }

};
</script>
