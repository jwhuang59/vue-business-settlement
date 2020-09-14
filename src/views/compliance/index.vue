
<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button,Icon,Dialog,RadioGroup,Radio,Calendar } from 'vant';
import { getProvince,getCity } from '../../api/api';

export default {
    components:{
        [Button.name]: Button,
        [Icon.name]: Icon,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio,
        [Dialog.name]: Dialog,
        [Calendar.name]: Calendar
    },
    data() {
        return {
            complianceInfo:{
                businessLicensePhoto:['']
            },
            uploadPhotoNum:0,
            showCalendar:false,
            radio:"1",
        };
    },
    mounted() {
    },
    methods: {
        changeCalendar(){
            this.showCalendar = true;
            console.log(this.complianceInfo)
        },
        addPhoto() {
            this.complianceInfo.businessLicensePhoto.push('');
        },
        removePhoto(i){
            this.uploadPhotoNum--;
            this.complianceInfo.businessLicensePhoto.splice(i,1);
        },
        getValidity(){

        },
        getCameraImg(data){
            this.uploadPhotoNum++;
            this.$set(this.complianceInfo.businessLicensePhoto,data.sub,data.img)
        },
        nextStep(){
            this.redirect('result')
            // if(this.complianceInfo.businessLicensePhoto.length < 2){
            //     Dialog.alert({message: '请上传营业执照照片'});
            //     return false;

            // }else if(this.complianceInfo.businessLicenseName === "" || this.complianceInfo.businessLicenseName === undefined || this.complianceInfo.businessLicenseName === null){
            //     Dialog.alert({message: '请输入营业执照名称'});
            //     return false;

            // }else if(this.complianceInfo.legalRepresentativeName === "" || this.complianceInfo.legalRepresentativeName === undefined || this.complianceInfo.legalRepresentativeName === null){
            //     Dialog.alert({message: '请输入法定代表人'});
            //     return false;

            // }else if(this.complianceInfo.creditCode === "" || this.complianceInfo.creditCode === undefined || this.complianceInfo.creditCode === null){
            //     Dialog.alert({message: '请输入统一信用代码'});
            //     return false;

            // }else if(this.complianceInfo.businessRegisteredAddress === "" || this.complianceInfo.businessRegisteredAddress === undefined || this.complianceInfo.businessRegisteredAddress === null){
            //     Dialog.alert({message: '请输入营业执照注册地址'});
            //     return false;

            // }else if(this.complianceInfo.validity === "" || this.complianceInfo.validity === undefined || this.complianceInfo.validity === null){
            //     Dialog.alert({message: '请输入有效期'});
            //     return false;

            // }else if(this.complianceInfo.businessApprovalTime === "" || this.complianceInfo.businessApprovalTime === undefined || this.complianceInfo.businessApprovalTime === null){
            //     Dialog.alert({message: '请输入营业执照核准日期'});
            //     return false;

            // }else if(this.complianceInfo.businessScope === "" || this.complianceInfo.businessScope === undefined || this.complianceInfo.businessScope === null){
            //     Dialog.alert({message: '请输入营业范围'});
            //     return false;

            // }else{
            //     Dialog.confirm({
            //         title: '提示',
            //         message: '完成并开通锅圈商城',
            //     }).then(() => {
            //         this.jump('finance')
            //     })

            // }
            
        }
    }
};
</script>
