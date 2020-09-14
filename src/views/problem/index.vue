
<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button } from 'vant';
export default {
    components:{
        [Button.name]: Button,
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
        getProblem(){
            this.jump('problem');
        }
    }

};
</script>
