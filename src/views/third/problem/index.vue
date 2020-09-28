<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button } from 'vant';
export default {
    components: {
        [Button.name]: Button
    },
    data() {
        return {
            active: 0
        };
    },
    onLoad() {
    },
    methods: {
        getProblem() {
            this.jump('problem');
        }
    }
};
</script>
