<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button, Checkbox, Dialog, Toast } from 'vant';
export default {
    components: {
        [Button.name]: Button,
        [Checkbox.name]: Checkbox,
        [Dialog.name]: Dialog,
        [Toast.name]: Toast
    },
    data() {
        return {
            checked: false,
            disabled:true
        };
    },
    mounted() {},
    methods: {
        nextStep() {
            if (this.checked) {
                this.jump('standard',{'type':this.$route.query.type});
            } else {
                Dialog.alert({ message: '请阅读并同意《锅圈运营服务协议》' });
            }
        },
        getProblem() {
            this.jump('problem');
        }
    },
    watch:{
        checked(){
            if(this.checked){
                this.disabled = false;
            }else{
                this.disabled = true;
            }
        },
        deep:true
        
    }
};
</script>
