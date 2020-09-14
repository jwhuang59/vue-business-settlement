
<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button, icon } from 'vant';
export default {
    components:{
        [Button.name]: Button,
        [icon.name]: icon
    },
    data() {
        return {
            active: 0
        };
    },
    onLoad() {
        this.$store.commit({
            type: 'save_step',
            playload: this.active || 0
        });
    },
    methods:{
        nextStep(){
            this.$store.commit({
                type: 'save_step',
                playload: this.active || 0
            });
        },
        toChannel(){
            this.jump('agreement');
        },
        getProblem(){
            this.jump('problem');
        }
    }

};
</script>
