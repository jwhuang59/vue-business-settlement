
<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button,Dialog } from 'vant';
export default {
    components:{
        [Button.name]: Button,
        [Dialog.name]: Dialog
    },
    data() {
        return {
            phone:"",
            code:"",
            codeText:"发送验证码",
            isSend:false
        };
    },
    methods:{
        sendCode(){
            const that = this;
            if(!this.isSend){
                this.isSend = true
                this.codeText = 60;
                const countDown = setInterval(() => {
                    that.codeText--;
                    if(this.codeText === 0){
                        clearInterval(countDown);
                        that.codeText = '重新获取验证码';
                        that.isSend = false;
                    }
                },1000)
            }
            
        },
        submit(){
            if(this.code === "" || this.code === undefined || this.code === null){
                Dialog.alert({message: '请输入验证码'});
                return false;

            }else{

            }
        },
    }

};
</script>
