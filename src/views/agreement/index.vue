
<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button,Checkbox,Dialog } from 'vant';
export default {
    components:{
        [Button.name]: Button,
        [Checkbox.name]: Checkbox,
        [Dialog.name]: Dialog,
    },
    data() {
        return {
            checked:false
        };
    },
    methods:{
        nextStep(){
            if(this.checked){
                this.jump('standard');
            }else{
                Dialog.alert({message: '请阅读并同意《锅圈运营服务协议》'});
            }
            
        },
        getProblem(){
            this.jump('problem');
        }
    }

};
</script>
