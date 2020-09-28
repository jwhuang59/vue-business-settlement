<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button, Icon, Dialog, Calendar, Picker, Popup, Toast } from 'vant';

export default {
    components: {
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
            licenceList: [
                {
                    licenseValidity: '请输入许可证结束日期',
                    licenseApprovalTime: '请输入许可证核准日期'
                },
                {
                    licenseValidity: '请输入许可证结束日期',
                    licenseApprovalTime: '请输入许可证核准日期'
                },
                {
                    licenseValidity: '请输入许可证结束日期',
                    licenseApprovalTime: '请输入许可证核准日期'
                }
            ],
            uploadFileImg: ['', '', ''],
            uploadPhotoNum: 0,
            showLicenceSub: 0,
            calendar: false,
            calendarSub: 0,
            minDate: '',
            maxDate: ''
        };
    },
    created() {
        this.minDate = this.$utils.getMixMaxDate(10).minDate;
        this.maxDate = this.$utils.getMixMaxDate(10).maxDate;
    },
    mounted() {
        this.getLicenseInfo();
    },
    methods: {
        getLicenseInfo() {
            this.$request('getLicenseInfo').then(res => {
                if (res.data.licenceList.length === 0) return false;
                this.uploadPhotoNum = 3;
                const licenceList = res.data.licenceList;
                for (const i in licenceList) {
                    this.licenceList[i].licensePhoto = this.getNameByUrl(licenceList[i].licensePhoto);
                    this.uploadFileImg[i] = licenceList[i].licensePhoto;
                    this.licenceList[i].licenseTypeName = licenceList[i].licenseTypeName;
                    this.licenceList[i].licenseNumber = licenceList[i].licenseNumber;
                    this.licenceList[i].licenseRegistrationAddress = licenceList[i].licenseRegistrationAddress;
                    this.licenceList[i].licenseValidity = licenceList[i].licenseValidity;
                    this.licenceList[i].licenseApprovalTime = licenceList[i].licenseApprovalTime;
                    this.licenceList[i].remark = licenceList[i].remark;
                }
            });
        },
        switchLicence(i) {
            this.showLicenceSub = i;
        },
        removePhoto(i) {
            this.uploadPhotoNum--;
            this.licenceList[i].licensePhoto = '';
            this.uploadFileImg[i] = '';
        },
        showCalendar(i) {
            this.calendarSub = i;
            this.calendar = true;
        },
        getValidity(e) {
            const getDate = this.dayjs(e).format('YYYY-MM-DD');
            switch (this.calendarSub) {
                case 1:
                    this.licenceList[this.showLicenceSub].licenseValidity = getDate;
                    break;
                case 2:
                    this.licenceList[this.showLicenceSub].licenseApprovalTime = getDate;
                    break;
            }
            this.calendar = false;
        },
        getCameraImg(data) {
            this.uploadPhotoNum++;
            this.$set(this.licenceList[data.sub], 'licensePhoto', data.name);
            this.$set(this.uploadFileImg, data.sub, data.img);

        },
        getNameByUrl(url) {
            if(!url) return '';
            const formatUrl = url.split('?')[0].split('/');
            return formatUrl[3] + '/' + formatUrl[4];
        },
        nextStep() {

            const newLicenceList = this.licenceList.filter(item => {
                if(item.licensePhoto !== ""){
                    return item
                }
            })
            console.log(newLicenceList)
            for (const i in newLicenceList) {
                
                if (
                    newLicenceList[i].licensePhoto === '' ||
                    newLicenceList[i].licensePhoto === undefined ||
                    newLicenceList[i].licensePhoto === null
                ) {
                    Dialog.alert({ message: '请上传许可证照片' });
                    Dialog.alert({
                        title: '请点击上传许可证照片',
                        message: '填写许可证详细信息',
                    })
                    return false;
                } else if (
                    newLicenceList[i].licenseTypeName === '' ||
                    newLicenceList[i].licenseTypeName === undefined ||
                    newLicenceList[i].licenseTypeName === null
                ) {
                    Dialog.alert({ message: '请输入执照类型名称' });
                    return false;
                } else if (
                    newLicenceList[i].licenseNumber === '' ||
                    newLicenceList[i].licenseNumber === undefined ||
                    newLicenceList[i].licenseNumber === null
                ) {
                    Dialog.alert({ message: '请输入许可证编码' });
                    return false;
                } else if (
                    newLicenceList[i].licenseRegistrationAddress === '' ||
                    newLicenceList[i].licenseRegistrationAddress === undefined ||
                    newLicenceList[i].licenseRegistrationAddress === null
                ) {
                    Dialog.alert({ message: '请输入许可证注册地址' });
                    return false;
                } else if (
                    newLicenceList[i].licenseValidity === '' ||
                    newLicenceList[i].licenseValidity === undefined ||
                    newLicenceList[i].licenseValidity === null || 
                    newLicenceList[i].licenseValidity.indexOf('-') === -1
                ) {
                    Dialog.alert({ message: '请输入许可证有效日期' });
                    return false;
                } else if (
                    newLicenceList[i].licenseApprovalTime === '' ||
                    newLicenceList[i].licenseApprovalTime === undefined ||
                    newLicenceList[i].licenseApprovalTime === null || 
                    newLicenceList[i].licenseApprovalTime.indexOf('-') === -1
                ) {
                    Dialog.alert({ message: '请输入许可证签发日期' });
                    return false;
                }
            }
            Dialog.confirm({
                title: '提示',
                message: '是否保存下一步'
            })
                .then(() => {
                    this.$request('updateLicenseInfo', {
                        licenceList: newLicenceList
                    })
                        .then(res => {
                            if (res.data) {
                                Toast.success({
                                    message: '保存成功',
                                    duration: 3000,
                                    forbidClick: true
                                });
                                setTimeout(() => {
                                    this.jump('perfect',{'type':this.$route.query.type});
                                }, 3000);
                            }
                        })
                        .catch(() => {
                            Toast.fail({
                                message: '保存失败',
                                duration: 3000,
                                forbidClick: true
                            });
                        });
                })
                .catch(() => {});
        },
        getProblem() {
            this.jump('problem');
        }
    }
};
</script>
