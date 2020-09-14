
<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button,Icon,Dialog,Calendar,Picker,Popup } from 'vant';
export default {
    components:{
        [Button.name]: Button,
        [Icon.name]: Icon,
        [Picker.name]: Picker,  
        [Dialog.name]: Dialog,
        [Calendar.name]: Calendar,
        [Popup.name]: Popup,
    },
    data() {
        return {
            licenceInfo:{
                businessLicensePhoto:['']
            },
            uploadPhotoNum:0,
            calendar:false,
            comCalendar:false,
        };
    },
    methods:{
        addPhoto() {
            this.licenceInfo.businessLicensePhoto.push('');
        },
        removePhoto(i){
            this.uploadPhotoNum--;
            this.licenceInfo.businessLicensePhoto.splice(i,1);
        },
        getValidity(){

        },
        showCalendar(){
            this.calendar = true;
        },
        changeCalendar(){

        },
        getCameraImg(data){
            this.uploadPhotoNum++;
            this.$set(this.licenceInfo.businessLicensePhoto,data.sub,data.img)
        },
        nextStep(){
            this.jump('perfect');
        },
        getProblem(){
            this.jump('problem');
        }
    },

};
</script>
