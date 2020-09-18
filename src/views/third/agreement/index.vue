<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Button, Checkbox, Dialog, Toast } from 'vant';
export default {
    components: {
        [Button.name]: Button,
        [Checkbox.name]: Checkbox,
        [Dialog.name]: Dialog,
        [Toast.name]: Toast
    },
    data() {
        return {
            checked: false
        };
    },
    mounted() {},
    methods: {
        nextStep() {
            if (this.checked) {
                this.jump('standard');
            } else {
                Dialog.alert({ message: '请阅读并同意《锅圈运营服务协议》' });
            }
        },
        getProblem() {
            this.jump('problem');
        }
    }
};
</script>
