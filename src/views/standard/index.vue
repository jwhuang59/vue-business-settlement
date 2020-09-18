
<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button,Icon,Dialog,Calendar,Picker,Popup,Toast } from 'vant';
export default {
    components:{
        [Button.name]: Button,
        [Icon.name]: Icon,
        [Picker.name]: Picker,  
        [Dialog.name]: Dialog,
        [Calendar.name]: Calendar,
        [Popup.name]: Popup,
        [Toast.name]: Toast
    },
    data() {
        return {
            standardInfo:{},
            licenseArr:[{}],
            showPicker:false,
            showCalendar:false,
            rangeColumns:['123','456']
        };
    },
    mounted() {
        this.getStandard()
    },
    methods:{
        getStandard(){
            this.$request("getStandardInfo").then((res) => {
                this.standardInfo.businessLicenseName = res.data.businessLicenseName
                this.standardInfo.shopName = res.data.shopName
                this.standardInfo.legalRepresentativeName = res.data.legalRepresentativeName
                this.standardInfo.businessRegisteredAddress = res.data.businessRegisteredAddress
                this.standardInfo.unifiedCreditCode = res.data.unifiedCreditCode
                this.$set(this.standardInfo,'businessTermValidity',res.data.businessTermValidity === "1" ? "永久有效" : res.data.businessTermValidity)
                this.standardInfo.businessApprovalTime = res.data.businessApprovalTime
                this.standardInfo.businessScope = res.data.businessScope
                this.standardInfo.businessLicensePhoto = res.data.businessLicensePhoto
                this.standardInfo.paymentList = res.data.paymentList
                this.standardInfo.alipayAccount = res.data.alipayAccount
                this.standardInfo.wechatMerchant = res.data.wechatMerchant

            })
        },
        cancelPicker(){
            this.showPicker = false;
        },
        confirmPicker(e){
            this.showPicker = false;
            this.financeInfo.cashierSystem = e[0]
        },
        changeCalendar(){
            this.showCalendar = true;
        },
        changePicker(){
            this.showPicker = true;
        },
        addLicense() {
            this.licenseArr.push({});
        },
        licenseArrImg(img){
            this.complianceInfo.businessLicensePhoto.push(img)
        },
        getDate(){
            this.showCalendar = true;
        },
        nextStep(){
            Dialog.confirm({
                title: '提示',
                message: '是否确认无误·继续补充',
            }).then(() => {
                Toast.success({
                    message:'保存成功',
                    duration:3000,
                    forbidClick:true,
                });
                setTimeout(() => {this.jump('licence');},3000)
            }).catch(() => {})
            
        },
        getProblem(){
            this.jump('problem');
        }
    }

};
</script>
