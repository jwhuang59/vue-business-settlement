
<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button,Dialog,Toast } from 'vant';
const regPhone = new RegExp(/^[1][3,4,5,6,7,8,9][0-9]{9}$/);
export default {
    components:{
        [Button.name]: Button,
        [Dialog.name]: Dialog,
        [Toast.name]: Toast
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
            if(regPhone.test(this.phone)){
                if(!this.isSend){
                    this.isSend = true;
                    this.codeText = 60;
                    this.$request("getCode",{
                        phone:this.phone
                    }).then((res) => {
                        if(res.success){
                            localStorage.setItem("token",res.data.sessionId)
                            Toast({message: '发送成功',position: 'bottom',});
                            const countDown = setInterval(() => {
                                this.codeText--;
                                if(this.codeText === 0){
                                    clearInterval(countDown);
                                    this.codeText = '重新获取验证码';
                                    this.isSend = false;
                                }
                            },1000)
                        }else{
                            Toast.fail({
                                message:res.msg,
                                duration:3000,
                                forbidClick:true,
                            });
                        } 
                        
                    })   
                }
            }else{
                Dialog.alert({message: '请输入正确的手机号'});
            }  
            
        },
        submit(){
            if(!regPhone.test(this.phone)){
                Dialog.alert({message: '请输入正确的手机号'});
                return false;
            }else if(this.code === "" || this.code === undefined || this.code === null){
                Dialog.alert({message: '请输入验证码'});
                return false;
            }else{
                this.$request("getLogin",{
                    phone:this.phone,
                    code:this.code
                }).then((res) => {
                    if(res.success){
                        Toast.success({
                            message:'登录成功',
                            duration:3000,
                            forbidClick:true,
                        });
                        setTimeout(() => {
                            this.$request("getShopStatus").then((res) => {
                                if(res.data.shopStatus === 0){
                                    this.jump("basics")
                                }else{
                                    this.jump("/")
                                }
                            })
                        },3000)
                    }else{
                        Toast.fail({
                            message:'登录失败',
                            duration:3000,
                            forbidClick:true,
                        });
                    } 
                })
            }
        },
    }

};
</script>
