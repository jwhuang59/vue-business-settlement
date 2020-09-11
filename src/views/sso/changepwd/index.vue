<template src="./index.html"></template>
<style lang="scss" src="./index.scss" scoped></style>
<script>
export default {
    data() {
        return {
            phone: '',
            code: '',
            password: '',
            newPassword: '',
            codeText: '获取验证码',
            phoneErrText: '',
            codeErrText: '',
            passErrText: '',
            time: 60,
            timer: null,
            phoneErr: false,
            codeErr: false,
            passErr: false
        };
    },
    methods: {
        async send() {
            if (this.phoneBlur()) {
                const { code, data, msg } = await this.$request('send', this.phone);
                if (code === 200) {
                    this.$notify({
                        type: 'success',
                        message: '验证码发送成功'
                    });
                    this.codeText = this.time + 's';
                    this.timer = setInterval(() => {
                        if (this.time === 1) {
                            clearInterval(this.timer);
                            this.timer = null;
                            this.time = 60;
                            this.codeText = '获取验证码';
                        } else {
                            this.time--;
                            this.codeText = this.time + 's';
                        }
                    }, 1000);
                }
            }
        },
        async resetPass() {
            const obj = {
                phone: this.phone,
                checkCode: this.code,
                password: this.newPassword
            };
            const { code, data, msg } = await this.$request('resetPass', obj);
            if (code === 200) {
                this.$notify({
                    type: 'success',
                    message: '密码重置成功'
                });
            }
        },
        reset() {
            this.phone = '';
            this.code = '';
            this.password = '';
            this.newPassword = '';
        },
        phoneBlur() {
            if (!/^1[3456789]\d{9}$/.test(this.phone) || this.phone === '') {
                this.phoneErrText = '请输入正确的手机号';
                this.phoneErr = true;
                return false;
            } else {
                this.phoneErr = false;
                return true;
            }
        },
        codeBlur() {
            if (this.code.length !== 6) {
                this.codeErrText = '请输入正确的验证码';
                this.codeErr = true;
                return false;
            } else {
                this.codeErr = false;
                return true;
            }
        },
        passBlur() {
            if (this.newPassword === '') {
                this.passErrText = '密码不能为空';
                this.passErr = true;
                return false;
            } else if (this.password !== this.newPassword) {
                this.passErrText = '两次密码不一致';
                this.passErr = true;
                return false;
            } else if (!this.checkPass(this.newPassword)) {
                this.passErrText = '密码长度7-24位，需要包含小写字母&大写字母&数字';
                this.passErr = true;
                return false;
            } else {
                this.passErr = false;
                return true;
            }
        },
        sendCode() {
            if (this.codeText !== '获取验证码') {
                return;
            }
            this.send();
        },
        goPass() {
            this.$router.push({ name: 'resetPassword' });
        },
        checkPass(pass) {
            const str = pass;
            const regUpper = /[A-Z]/;
            const regLower = /[a-z]/;
            const numbers = /[0-9]/;
            const reg = /^[a-zA-Z0-9]{7,24}$/;
            let complex = 0;
            if (regLower.test(str)) {
                ++complex;
            }
            if (regUpper.test(str)) {
                ++complex;
            }
            if (numbers.test(str)) {
                ++complex;
            }
            if (complex >= 3 && reg.test(str)) {
                return true;
            } else {
                return false;
            }
        },
        submit() {
            if (
                !this.phoneErr &&
                !this.codeErr &&
                !this.passErr &&
                this.passBlur() &&
                this.phoneBlur() &&
                this.codeBlur()
            ) {
                this.resetPass();
            }
        }
    },
    created() {
        this.reset();
    }
};
</script>
