<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button, icon } from 'vant';
export default {
    components: {
        [Button.name]: Button,
        [icon.name]: icon
    },
    data() {
        return {
            shopStatus: '',
            thirdInfo: [
                {
                    thirdText: '复用资质·开通美团渠道',
                    thirdStatus: 0,
                    thirdType: 1
                },
                {
                    thirdText: '复用资质·开通饿了么渠道',
                    thirdStatus: 0,
                    thirdType: 2
                },
                {
                    thirdText: '复用资质·开通京东到家渠道',
                    thirdStatus: 0,
                    thirdType: 3
                },
                {
                    thirdText: '复用资质·开通口碑渠道',
                    thirdStatus: 0,
                    thirdType: 4
                }
            ],
        };
    },
    mounted() {
        const getLoginStatus = localStorage.getItem('token');
        if (!getLoginStatus) {
            // this.jump('login');
        } else {
            this.getStoreStatus();
            this.getThirdStatus();
        }
    },
    methods: {
        getStoreStatus() {
            this.$request('getShopStatus').then(res => {
                this.shopStatus = res.data.shopStatus;
            });
        },
        getThirdStatus() {
            this.$request('getThirdPartyStatus').then(res => {
                const { data } = res
                if (data.length === 0) return false;
                this.thirdInfo.forEach((item, index) => {
                    for(const i in data){
                        if(item.thirdType === data[i].type){
                            this.$set(this.thirdInfo[index], 'thirdStatus', data[i].status); 
                        }
                    }
                    
                });
                console.log(this.thirdInfo)
            });
        },
        toChannel(type,status) {
            if(status === 2 || status === 3) return false;
            this.jump('agreement',{ type });
        },
        getProblem() {
            this.jump('problem');
        }
    },
    watch: {
        shopStatus(val) {
            if (val === 0) {
                this.jump('basics');
            }
        }
    }
};
</script>
