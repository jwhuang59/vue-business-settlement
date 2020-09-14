
<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Picker, Button,Icon,Popup,Dialog } from 'vant';
import { getProvince,getCity } from '../../api/api';

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
            basicInfo:{
                areaText:'选择省/市/区',
                cityList:[],
            },
            showPicker:false,
            cityList: [
                {
                    text:'',
                    children:[
                        {
                            text:'',
                            children:[]
                        }
                        
                    ]
                },
                
            ],

            // {
            //         values: [],
            //         defaultIndex: 3
            //     },
            //     {
            //         values: [],
            //         defaultIndex: 2
            //     },
            //     {
            //         values: [],
            //         defaultIndex: 1
            //     }

            // columns: [
            //         {
            //         text: '浙江',
            //         children: [
            //             {
            //             text: '杭州',
            //             children: [{ text: '西湖区' }, { text: '余杭区' }],
            //             },
            //             {
            //             text: '温州',
            //             children: [{ text: '鹿城区' }, { text: '瓯海区' }],
            //             },
            //         ],
            //         },
            //         {
            //         text: '福建',
            //         children: [
            //             {
            //             text: '福州',
            //             children: [{ text: '鼓楼区' }, { text: '台江区' }],
            //             },
            //             {
            //             text: '厦门',
            //             children: [{ text: '思明区' }, { text: '海沧区' }],
            //             },
            //         ],
            //         },
            //     ],
            cameraArr: [{}]
        };
    },
    mounted() {
        this.$request("getCityList").then(res => {
            const allCityList = [];
            const cityList = res.data[0].cities
            // this.cityList = res.data[0].cities
            cityList.map((item,index) => {
                this.cityList[index].children = item.cities
                this.cityList[index].text = item.regionName
                
            })
            console.log(this.cityList)
        })
    },
    methods: {
        changePicker(){
            this.showPicker = true;
            console.log(this.basicInfo)
        },
        cancelPicker(){
            this.showPicker = false;
        },
        confirmPicker(e){
            this.showPicker = false;
            console.log(e)
        },
        frontIDCard(data){
            this.$request("uploadImage",{

            })
            this.$set(this.basicInfo,'frontIDCard',data.img)
        },
        afterIDCard(data){
            this.$set(this.basicInfo,'afterIDCard',data.img)
        },
        holdIDCard(data){
            this.$set(this.basicInfo,'holdIDCard',data.img)

        },
        removePhoto(index){
            switch(index){
                case 1:
                    this.basicInfo.frontIDCard = '';
                    break;
                case 2:
                    this.basicInfo.afterIDCard = '';
                    break;
                case 3:
                    this.basicInfo.holdIDCard = '';
                    break;
            }
        },
        nextStep(){
            this.jump('finance')
            // const regPhone = new RegExp(/^[1][3,4,5,6,7,8,9][0-9]{9}$/);
            // if(this.basicInfo.storeName === "" || this.basicInfo.storeName === undefined || this.basicInfo.storeName === null){
            //     Dialog.alert({message: '请输入门店名称'});
            //     return false;

            // }else if(this.basicInfo.storePhone === "" || this.basicInfo.storePhone === undefined || this.basicInfo.storePhone === null){
            //     Dialog.alert({message: '请输入门店电话'});
            //     return false;

            // }else if(this.basicInfo.storeRegion === "" || this.basicInfo.storeRegion === undefined || this.basicInfo.storeRegion === null){
            //     Dialog.alert({message: '请输入门店所在地区'});
            //     return false;

            // }else if(this.basicInfo.storeAddress === "" || this.basicInfo.storeAddress === undefined || this.basicInfo.storeAddress === null){
            //     Dialog.alert({message: '请输入门店详细地址'});
            //     return false;

            // }else if(this.basicInfo.IDCardNumber === "" || this.basicInfo.IDCardNumber === undefined || this.basicInfo.IDCardNumber === null){
            //     Dialog.alert({message: '请输入身份证号'});
            //     return false;

            // }else if(this.basicInfo.frontIDCard === "" || this.basicInfo.frontIDCard === undefined || this.basicInfo.frontIDCard === null){
            //     Dialog.alert({message: '请上传正面照片'});
            //     return false;

            // }else if(this.basicInfo.afterIDCard === "" || this.basicInfo.afterIDCard === undefined || this.basicInfo.afterIDCard === null){
            //     Dialog.alert({message: '请上传反面照片'});
            //     return false;

            // }else if(this.basicInfo.holdIDCard === "" || this.basicInfo.holdIDCard === undefined || this.basicInfo.holdIDCard === null){
            //     Dialog.alert({message: '请上传手持身份证照'});
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
