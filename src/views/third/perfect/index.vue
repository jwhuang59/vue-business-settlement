<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button, Icon, Dialog, Toast } from 'vant';
export default {
    components: {
        [Button.name]: Button,
        [Icon.name]: Icon,
        [Dialog.name]: Dialog,
        [Toast.name]: Toast
    },
    data() {
        return {
            perfectMenu: [
                {
                    title: '法人健康证*',
                    photoNum: 1,
                    uploadPhotoNum: 0,
                    uploadPhotoMenu: ['']
                },
                {
                    title: '门头照片*',
                    photoNum: 6,
                    uploadPhotoNum: 0,
                    uploadPhotoMenu: ['']
                },
                {
                    title: '店内照片*',
                    photoNum: 6,
                    uploadPhotoNum: 0,
                    uploadPhotoMenu: ['']
                }
            ]
        };
    },
    mounted() {
        this.getPerfectInfo();
    },
    methods: {
        getPerfectInfo() {
            this.$request('getPerfectInfo').then(res => {
                this.perfectMenu[0].uploadPhotoNum = res.data.healthPhoto.length;
                this.perfectMenu[0].uploadPhotoMenu = res.data.healthPhoto;
                this.perfectMenu[1].uploadPhotoNum = res.data.doorheadPhoto.length;
                this.perfectMenu[1].uploadPhotoMenu = res.data.doorheadPhoto;
                this.perfectMenu[2].uploadPhotoNum = res.data.storePhoto.length;
                this.perfectMenu[2].uploadPhotoMenu = res.data.storePhoto;
            });
        },
        getCameraImg(data) {
            this.perfectMenu[data.type].uploadPhotoNum++;
            this.$set(this.perfectMenu[data.type].uploadPhotoMenu, data.sub, data.img);
        },
        addPhoto(t) {
            this.perfectMenu[t].uploadPhotoMenu.push('');
        },
        removePhoto(t, i) {
            this.perfectMenu[t].uploadPhotoNum--;
            this.perfectMenu[t].uploadPhotoMenu.splice(i, 1);
        },
        nextStep() {
            console.log(this.perfectMenu);
            if (
                this.perfectMenu[0].uploadPhotoMenu[0] === '' ||
                this.perfectMenu[0].uploadPhotoMenu[0] === undefined ||
                this.perfectMenu[0].uploadPhotoMenu[0] === null
            ) {
                Dialog.alert({ message: '请上传法人健康证' });
                return false;
            } else if (
                this.perfectMenu[1].uploadPhotoMenu[0] === '' ||
                this.perfectMenu[1].uploadPhotoMenu[0] === undefined ||
                this.perfectMenu[1].uploadPhotoMenu[0] === null
            ) {
                Dialog.alert({ message: '请上传门头照片' });
                return false;
            } else if (
                this.perfectMenu[2].uploadPhotoMenu[0] === '' ||
                this.perfectMenu[2].uploadPhotoMenu[0] === undefined ||
                this.perfectMenu[2].uploadPhotoMenu[0] === null
            ) {
                Dialog.alert({ message: '请上传店内照片' });
                return false;
            } else {
                Dialog.confirm({
                    title: '提示',
                    message: '是否完成并开通'
                })
                    .then(() => {
                        this.$request('updatePerfectInfo', {
                            healthPhoto: this.perfectMenu[0].uploadPhotoMenu,
                            doorheadPhoto: this.perfectMenu[1].uploadPhotoMenu,
                            storePhoto: this.perfectMenu[2].uploadPhotoMenu,
                            type: this.$store.state.data.channel
                        })
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
        },
        getProblem() {
            this.jump('problem');
        }
    }
};
</script>
