
<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Picker, Button,Icon,Popup,Dialog } from 'vant';
export default {
    components:{
        [Button.name]: Button,
        [Icon.name]: Icon,
        [Picker.name]: Picker,
        [Popup.name]: Popup,
        [Dialog.name]: Dialog
    },
    data() {
        return {
            financeInfo:{
                cashierSystem:'',
                cashierSystemCn:'请选择收银系统',
                paymentList:[{}]
            },
            showPicker:false,
            cashierColumns: [
                {
                    values: ['龙收银', '思迅'],
                }
            ],
            
        };
    },
    methods:{
        changePicker(){
            this.showPicker = true;
        },
        cancelPicker(){
            this.showPicker = false;
        },
        confirmPicker(e){
            console.log(this.$refs.picker.getIndexes()[0])
            this.showPicker = false;
            this.financeInfo.cashierSystem = this.$refs.picker.getIndexes()[0];
            this.financeInfo.cashierSystemCn = e[0]
        },
        showNotes(e){
            Dialog.alert({message: e.target.dataset.notes});
        },
        addPayment(){
            this.financeInfo.paymentList.push({})
        },
        removePayment(){
            this.financeInfo.paymentList.pop({})
        },
        nextStep(){
            this.jump('compliance')
            // const regPhone = new RegExp(/^[1][3,4,5,6,7,8,9][0-9]{9}$/);
            // if(this.financeInfo.cashierSystem === "" || this.financeInfo.cashierSystem === undefined || this.financeInfo.cashierSystem === null){
            //     Dialog.alert({message: '请选择收银系统'});
            //     return false;

            // }else if(this.financeInfo.alipayAccount === "" || this.financeInfo.alipayAccount === undefined || this.financeInfo.alipayAccount === null){
            //     Dialog.alert({message: '请输入支付宝账户'});
            //     return false;

            // }else if(this.financeInfo.wechatMerchant === "" || this.financeInfo.wechatMerchant === undefined || this.financeInfo.wechatMerchant === null){
            //     Dialog.alert({message: '请输入微信商户号'});
            //     return false;

            // }else if(this.financeInfo.paymentList[0].bankCardName === "" || this.financeInfo.paymentList[0].bankCardName === undefined || this.financeInfo.paymentList[0].bankCardName === null){
            //     Dialog.alert({message: '请输入银行卡户名'});
            //     return false;

            // }else if(this.financeInfo.paymentList[0].bankCardNumber === "" || this.financeInfo.paymentList[0].bankCardNumber === undefined || this.financeInfo.paymentList[0].bankCardNumber === null){
            //     Dialog.alert({message: '请输入银行卡号'});
            //     return false;

            // }else if(this.financeInfo.paymentList[0].bankCardDeposit === "" || this.financeInfo.paymentList[0].bankCardDeposit === undefined || this.financeInfo.paymentList[0].bankCardDeposit === null){
            //     Dialog.alert({message: '请输入开户行'});
            //     return false;

            // }else if(!regPhone.test(this.financeInfo.paymentList[0].bankCardPhone)){
            //     Dialog.alert({message: '请输入银行卡绑定手机号'});
            //     return false;

            // }else{
            //     Dialog.confirm({
            //         title: '提示',
            //         message: '是否保存下一步',
            //     }).then(() => {
            //         this.jump('finance')
            //     })

            // }
        }
    }

};
</script>
