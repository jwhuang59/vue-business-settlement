<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
import { Picker, Button, Icon, Popup, Dialog, Toast } from 'vant';
const regPhone = new RegExp(/^[1][3,4,5,6,7,8,9][0-9]{9}$/);
export default {
    components: {
        [Button.name]: Button,
        [Icon.name]: Icon,
        [Picker.name]: Picker,
        [Popup.name]: Popup,
        [Dialog.name]: Dialog,
        [Toast.name]: Toast
    },
    data() {
        return {
            financeInfo: {
                cashierSystem: '',
                cashierSystemCn: '请选择收银系统',
                paymentList: [{}]
            },
            showPicker: false,
            cashierColumns: [
                {
                    values: ['思迅', '龙收银']
                }
            ]
        };
    },
    mounted() {
        this.getFinanceInfo();
    },
    methods: {
        getFinanceInfo() {
            this.$request('getFinancialInfo').then(res => {
                if (res.data.paymentList.length === 0) return false;
                this.financeInfo.cashierSystem = res.data.cashierSystem;
                switch (res.data.cashierSystem) {
                    case 1:
                        this.financeInfo.cashierSystemCn = '思迅';
                        break;
                    case 2:
                        this.financeInfo.cashierSystemCn = '龙收银';
                        break;
                }
                this.financeInfo.alipayAccount = res.data.alipayAccount;
                this.financeInfo.wechatMerchant = res.data.wechatMerchant;
                this.financeInfo.paymentList = res.data.paymentList.length > 0 ? res.data.paymentList : [{}];
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
            this.financeInfo.cashierSystem = this.$refs.picker.getIndexes()[0] + 1;
            this.financeInfo.cashierSystemCn = e[0];
        },
        showNotes(e) {
            Dialog.alert({ message: e.target.dataset.notes });
        },
        addPayment() {
            this.financeInfo.paymentList.push({});
        },
        removePayment() {
            this.financeInfo.paymentList.pop({});
        },
        nextStep() {
            if (
                this.financeInfo.cashierSystem === '' ||
                this.financeInfo.cashierSystem === undefined ||
                this.financeInfo.cashierSystem === null
            ) {
                Dialog.alert({ message: '请选择收银系统' });
                return false;
            } else if (
                this.financeInfo.alipayAccount === '' ||
                this.financeInfo.alipayAccount === undefined ||
                this.financeInfo.alipayAccount === null
            ) {
                Dialog.alert({ message: '请输入支付宝账户' });
                return false;
            } else if (
                this.financeInfo.wechatMerchant === '' ||
                this.financeInfo.wechatMerchant === undefined ||
                this.financeInfo.wechatMerchant === null
            ) {
                Dialog.alert({ message: '请输入微信商户号' });
                return false;
            } else {
                for (const i in this.financeInfo.paymentList) {
                    if (
                        this.financeInfo.paymentList[i].bankCardName === '' ||
                        this.financeInfo.paymentList[i].bankCardName === undefined ||
                        this.financeInfo.paymentList[i].bankCardName === null
                    ) {
                        Dialog.alert({ message: '请输入银行卡户名' });
                        return false;
                    } else if (
                        this.financeInfo.paymentList[i].bankCardNumber === '' ||
                        this.financeInfo.paymentList[i].bankCardNumber === undefined ||
                        this.financeInfo.paymentList[i].bankCardNumber === null
                    ) {
                        Dialog.alert({ message: '请输入银行卡号' });
                        return false;
                    } else if (
                        this.financeInfo.paymentList[i].bankCardDeposit === '' ||
                        this.financeInfo.paymentList[i].bankCardDeposit === undefined ||
                        this.financeInfo.paymentList[i].bankCardDeposit === null
                    ) {
                        Dialog.alert({ message: '请输入开户行' });
                        return false;
                    } else if (!regPhone.test(this.financeInfo.paymentList[i].bankCardPhone)) {
                        Dialog.alert({ message: '请输入正确的银行卡绑定手机号' });
                        return false;
                    } else {
                        this.financeInfo.cashierSystemList = [
                            {
                                erpPost: this.financeInfo.cashierSystem,
                                erpPosNo: ''
                            },
                            {
                                erpPost: 7,
                                erpPosNo: this.financeInfo.alipayAccount
                            },
                            {
                                erpPost: 6,
                                erpPosNo: this.financeInfo.wechatMerchant
                            }
                        ];
                        Dialog.confirm({
                            title: '提示',
                            message: '是否保存下一步'
                        })
                            .then(() => {
                                this.$request('updateFinancialInfo', this.financeInfo)
                                    .then(res => {
                                        if (res.data) {
                                            Toast.success({
                                                message: '保存成功',
                                                duration: 3000,
                                                forbidClick: true
                                            });
                                            setTimeout(() => {
                                                this.jump('compliance');
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
        }
    }
};
</script>
