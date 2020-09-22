<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Picker, Button, Icon, Popup, Dialog, Uploader, Toast } from 'vant';
import validateIdCard from './validateIdCard.js';
const regPhone = new RegExp(/^[1][3,4,5,6,7,8,9][0-9]{9}$/);
export default {
    components: {
        [Button.name]: Button,
        [Icon.name]: Icon,
        [Picker.name]: Picker,
        [Popup.name]: Popup,
        [Dialog.name]: Dialog,
        [Uploader.name]: Uploader,
        [Toast.name]: Toast
    },
    data() {
        return {
            basicInfo: {
                areaText: '选择省/市/区'
            },
            getIDCardPhoto: ['', '', ''],
            showPicker: false,
            cityList: [],
            loading: false
        };
    },
    created() {
        this.getAllCity();
    },
    mounted() {
        this.getBasicInfo();
    },
    methods: {
        // afterRead(file) {
        //     const formData = new FormData()
        //     formData.append('image', file.file)
        //     this.$request("uploadImage",formData).then((res) => {
        //         this.fileList[0].url = res.data.url
        //     })
        // },
        getAllCity() {
            this.$request('getCityList').then(res => {
                const allCityList = res.data[0].cities;
                allCityList.map((item, one) => {
                    this.cityList.push({});
                    this.cityList[one].children = [];
                    this.cityList[one].text = item.regionName;
                    this.cityList[one].regionId = item.regionId;
                    allCityList[one].cities.map((item, two) => {
                        this.cityList[one].children.push({});
                        this.cityList[one].children[two].children = [];
                        this.cityList[one].children[two].text = item.regionName;
                        this.cityList[one].children[two].regionId = item.regionId;
                        if (allCityList[one].cities[two].cities) {
                            allCityList[one].cities[two].cities.map((item, three) => {
                                this.cityList[one].children[two].children.push({});
                                this.cityList[one].children[two].children[three].text = item.regionName;
                                this.cityList[one].children[two].children[three].regionId = item.regionId;
                            });
                        } else {
                            this.cityList[one].children[two].children.push({});
                            this.cityList[one].children[two].children[0].text = allCityList[one].cities[two].regionName;
                            this.cityList[one].children[two].children[0].regionId =
                                allCityList[one].cities[two].regionId;
                        }
                    });
                });
            });
        },
        getBasicInfo() {
            this.$request('getBasicInfo').then(res => {
                if(!res.data.storePhone) return false
                this.basicInfo.storeName = res.data.storeName;
                this.basicInfo.storePhone = res.data.storePhone;
                this.basicInfo.province = res.data.province;
                this.basicInfo.country = res.data.country;
                this.basicInfo.city = res.data.city;
                this.basicInfo.areaText = res.data.areaText;
                this.basicInfo.storeAddress = res.data.storeAddress;
                this.basicInfo.idCardNumber = res.data.idCardNumber;
                this.basicInfo.frontIDCard = this.getNameByUrl(res.data.frontIDCard);
                this.basicInfo.afterIDCard = this.getNameByUrl(res.data.afterIDCard);
                this.basicInfo.holdIDCard = this.getNameByUrl(res.data.holdIDCard);
                this.getIDCardPhoto = [res.data.frontIDCard, res.data.afterIDCard, res.data.holdIDCard];
            });
        },
        changePicker() {
            this.showPicker = true;
        },
        cancelPicker() {
            this.showPicker = false;
        },
        confirmPicker(e) {
            this.showPicker = false;
            this.basicInfo.areaText = e[0] + ' ' + e[1] + ' ' + e[2];
            this.cityList.map((item, one) => {
                if (item.text === e[0]) {
                    this.basicInfo.province = item.regionId;
                    this.cityList[one].children.map((item, two) => {
                        if (item.text === e[1]) {
                            this.basicInfo.city = item.regionId;
                            this.cityList[one].children[two].children.map((item, three) => {
                                if (item.text === e[2]) {
                                    this.basicInfo.country = item.regionId;
                                }
                            });
                        }
                    });
                }
            });
        },
        getCameraImg(data) {
            switch (data.sub) {
                case 0:
                    this.basicInfo.frontIDCard = data.name;
                    this.$set(this.getIDCardPhoto, 0, data.img);
                    break;
                case 1:
                    this.basicInfo.afterIDCard = data.name;
                    this.$set(this.getIDCardPhoto, 1, data.img);
                    break;
                case 2:
                    this.basicInfo.holdIDCard = data.name;
                    this.$set(this.getIDCardPhoto, 2, data.img);
                    break;
            }
        },
        removePhoto(index) {
            switch (index) {
                case 0:
                    this.basicInfo.frontIDCard = '';
                    this.basicInfo.frontImgIDCard = '';
                    this.$set(this.getIDCardPhoto, 0, '');
                    break;
                case 1:
                    this.basicInfo.afterIDCard = '';
                    this.basicInfo.afterImgIDCard = '';
                    this.$set(this.getIDCardPhoto, 1, '');
                    break;
                case 2:
                    this.basicInfo.holdIDCard = '';
                    this.basicInfo.holdImgIDCard = '';
                    this.$set(this.getIDCardPhoto, 2, '');
                    break;
            }
        },
        getNameByUrl(url) {
            const formatUrl = url.split('?')[0].split('/');
            return formatUrl[3] + '/' + formatUrl[4];
        },
        nextStep() {
            console.log(this.basicInfo)
            if (
                this.basicInfo.storeName === '' ||
                this.basicInfo.storeName === undefined ||
                this.basicInfo.storeName === null
            ) {
                Dialog.alert({ message: '请输入门店名称' });
                return false;
            } else if (!regPhone.test(this.basicInfo.storePhone)) {
                Dialog.alert({ message: '请输入门店电话' });
                return false;
            } else if (
                this.basicInfo.province === '' ||
                this.basicInfo.province === undefined ||
                this.basicInfo.province === null
            ) {
                Dialog.alert({ message: '请输入门店所在地区' });
                return false;
            } else if (
                this.basicInfo.storeAddress === '' ||
                this.basicInfo.storeAddress === undefined ||
                this.basicInfo.storeAddress === null
            ) {
                Dialog.alert({ message: '请输入门店详细地址' });
                return false;
            } else if (!validateIdCard(this.basicInfo.idCardNumber)) {
                Dialog.alert({ message: '请输入正确的身份证号' });
                return false;
            } else if (
                this.basicInfo.frontIDCard === '' ||
                this.basicInfo.frontIDCard === undefined ||
                this.basicInfo.frontIDCard === null
            ) {
                Dialog.alert({ message: '请上传正面照片' });
                return false;
            } else if (
                this.basicInfo.afterIDCard === '' ||
                this.basicInfo.afterIDCard === undefined ||
                this.basicInfo.afterIDCard === null
            ) {
                Dialog.alert({ message: '请上传反面照片' });
                return false;
            } else if (
                this.basicInfo.holdIDCard === '' ||
                this.basicInfo.holdIDCard === undefined ||
                this.basicInfo.holdIDCard === null
            ) {
                Dialog.alert({ message: '请上传手持身份证照' });
                return false;
            } else {
                Dialog.confirm({
                    title: '提示',
                    message: '是否保存下一步'
                })
                    .then(() => {
                        
                        this.$request('updateBasicInfo', this.basicInfo)
                            .then(res => {
                                if (res.data) {
                                    Toast.success({
                                        message: '保存成功',
                                        duration: 3000,
                                        forbidClick: true
                                    });
                                    setTimeout(() => {
                                        this.jump('finance');
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
