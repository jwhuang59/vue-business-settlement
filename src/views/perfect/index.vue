
<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button,Icon } from 'vant';
export default {
    components:{
        [Button.name]: Button,
        [Icon.name]: Icon,
    },
    data() {
        return {
            perfectMenu:[
                {
                    title:'法人健康证*',
                    photoNum:1,
                    uploadPhotoNum:0,
                    uploadPhotoMenu:['']
                },
                {
                    title:'门头照片*',
                    photoNum:6,
                    uploadPhotoNum:0,
                    uploadPhotoMenu:['']
                },
                {
                    title:'店内照片*',
                    photoNum:6,
                    uploadPhotoNum:0,
                    uploadPhotoMenu:['']
                }
            ],
        };
    },
    methods:{
        getCameraImg(data){
            this.perfectMenu[data.type].uploadPhotoNum++;
            this.$set(this.perfectMenu[data.type].uploadPhotoMenu,data.sub,data.img)
        },
        addPhoto(t){
            this.perfectMenu[t].uploadPhotoMenu.push('');
        },
        removePhoto(t,i){
            this.perfectMenu[t].uploadPhotoNum--;
            this.perfectMenu[t].uploadPhotoMenu.splice(i,1);
        },
        nextStep(){
            this.jump('result');
        },
        getProblem(){
            this.jump('problem');
        }
    },

};
</script>
