<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button, Icon, Dialog, RadioGroup, Radio, Calendar, Toast } from 'vant';

export default {
    components: {
        [Button.name]: Button,
        [Icon.name]: Icon,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio,
        [Dialog.name]: Dialog,
        [Calendar.name]: Calendar,
        [Toast.name]: Toast
    },
    data() {
        return {
            complianceInfo: {
                businessLicensePhoto: ['']
            },
            uploadPhotoNum: 0,
            calendarSub: '',
            showCalendar: false,
            radio: '1',
            minDate: '',
            maxDate: ''
        };
    },
    created() {
        this.minDate = this.$utils.getMixMaxDate().minDate;
        this.maxDate = this.$utils.getMixMaxDate().maxDate;
    },
    mounted() {
        this.getComplianceInfo();
    },
    methods: {
        getComplianceInfo() {
            this.$request('getComplianceInfo').then(res => {
                if (res.data.businessLicensePhoto) {
                    this.complianceInfo.businessLicensePhoto =
                        res.data.businessLicensePhoto.length > 0 ? res.data.businessLicensePhoto : [''];
                    this.complianceInfo.businessLicenseName = res.data.businessLicenseName;
                    this.complianceInfo.legalRepresentativeName = res.data.legalRepresentativeName;
                    this.complianceInfo.unifiedCreditCode = res.data.unifiedCreditCode;
                    this.complianceInfo.businessRegisteredAddress = res.data.businessRegisteredAddress;
                    this.complianceInfo.businessTermValidity = res.data.businessTermValidity;
                    if (res.data.businessTermValidity !== '1') {
                        this.radio = '2';
                        this.complianceInfo.businessTermValidity = res.data.businessTermValidity;
                        this.complianceInfo.businessTermValidityText = res.data.businessTermValidity;
                    } else {
                        this.radio = '1';
                        this.complianceInfo.businessTermValidity = '1';
                        this.complianceInfo.businessTermValidityText = '请选择营业执照有效期';
                    }
                    this.complianceInfo.businessApprovalTime = res.data.businessApprovalTime
                        ? res.data.businessApprovalTime
                        : '请选择营业执照核准日期';
                    this.complianceInfo.businessScope = res.data.businessScope;
                    this.uploadPhotoNum = res.data.businessLicensePhoto.length;
                }
            });
        },
        changeCalendar(i) {
            this.calendarSub = i;
            this.showCalendar = true;
        },
        addPhoto() {
            this.complianceInfo.businessLicensePhoto.push('');
        },
        removePhoto(i) {
            this.uploadPhotoNum--;
            this.complianceInfo.businessLicensePhoto.splice(i, 1);
        },
        changeRadio(e) {
            this.complianceInfo.businessTermValidity = e;
            this.complianceInfo.businessTermValidityText = '请选择营业执照有效期';
        },
        getValidity(e) {
            const getDate = this.dayjs(e).format('YYYY-MM-DD');
            switch (this.calendarSub) {
                case 1:
                    this.complianceInfo.businessTermValidityText = getDate;
                    this.complianceInfo.businessTermValidity = getDate;
                    break;
                case 2:
                    this.complianceInfo.businessApprovalTime = getDate;
                    break;
            }
            this.showCalendar = false;
        },
        getCameraImg(data) {
            this.uploadPhotoNum++;
            this.$set(this.complianceInfo.businessLicensePhoto, data.sub, data.img);
        },
        nextStep() {
            console.log(this.complianceInfo);
            if (this.complianceInfo.businessLicensePhoto.length < 0) {
                Dialog.alert({ message: '请上传营业执照照片' });
                return false;
            } else if (
                this.complianceInfo.businessLicenseName === '' ||
                this.complianceInfo.businessLicenseName === undefined ||
                this.complianceInfo.businessLicenseName === null
            ) {
                Dialog.alert({ message: '请输入营业执照名称' });
                return false;
            } else if (
                this.complianceInfo.legalRepresentativeName === '' ||
                this.complianceInfo.legalRepresentativeName === undefined ||
                this.complianceInfo.legalRepresentativeName === null
            ) {
                Dialog.alert({ message: '请输入法定代表人' });
                return false;
            } else if (
                this.complianceInfo.unifiedCreditCode === '' ||
                this.complianceInfo.unifiedCreditCode === undefined ||
                this.complianceInfo.unifiedCreditCode === null
            ) {
                Dialog.alert({ message: '请输入统一信用代码' });
                return false;
            } else if (
                this.complianceInfo.businessRegisteredAddress === '' ||
                this.complianceInfo.businessRegisteredAddress === undefined ||
                this.complianceInfo.businessRegisteredAddress === null
            ) {
                Dialog.alert({ message: '请输入营业执照注册地址' });
                return false;
            } else if (
                this.complianceInfo.businessTermValidity === '' ||
                this.complianceInfo.businessTermValidity === undefined ||
                this.complianceInfo.businessTermValidity === null ||
                this.complianceInfo.businessTermValidity === '2'
            ) {
                Dialog.alert({ message: '请输入营业执照有效期' });
                return false;
            } else if (
                this.complianceInfo.businessApprovalTime === '' ||
                this.complianceInfo.businessApprovalTime === undefined ||
                this.complianceInfo.businessApprovalTime === null
            ) {
                Dialog.alert({ message: '请选择营业执照核准日期' });
                return false;
            } else if (
                this.complianceInfo.businessScope === '' ||
                this.complianceInfo.businessScope === undefined ||
                this.complianceInfo.businessScope === null
            ) {
                Dialog.alert({ message: '请输入经营范围' });
                return false;
            } else {
                Dialog.confirm({
                    title: '提示',
                    message: '完成并开通锅圈商城'
                })
                    .then(() => {
                        this.$request('updateComplianceInfo', this.complianceInfo)
                            .then(res => {
                                if (res.data) {
                                    Toast.success({
                                        message: '保存成功',
                                        duration: 3000,
                                        forbidClick: true
                                    });
                                    setTimeout(() => {
                                        this.jump('/');
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
            }
        }
    }
};
</script>
