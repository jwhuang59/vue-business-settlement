
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
            standardInfo:{},
            licenseArr:[{}],
            showPicker:false,
            showCalendar:false,
            rangeColumns:['123','456']
        };
    },
    onLoad() {
        this.$store.commit({
            type: 'save_step',
            playload: this.active || 0
        });
    },
    methods:{
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
            this.jump('licence');
        },
        getProblem(){
            this.jump('problem');
        }
    }

};
</script>
