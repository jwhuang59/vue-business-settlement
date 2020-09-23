<template>
    <div class="content">
        <div ref="camera_input"></div>
        <van-overlay :show="showLoading">
            <van-loading type="spinner" color="#fff" class="loading" size="0.5rem" />
        </van-overlay>
    </div>
</template>
<script>
import { Loading, Overlay, Toast } from 'vant';
export default {
    components: {
        [Loading.name]: Loading,
        [Overlay.name]: Overlay,
        [Toast.name]: Toast
    },
    name: 'CreateChooseImg',
    props: {
        getImgSub: {
            type: [Number],
            default: 0
        },
        getImgType: {
            type: [Number],
            default: 0
        }
    },
    data() {
        return {
            isUpload: false,
            showLoading: false
        };
    },
    methods: {
        createUploadImgEle(e) {
            const u = navigator.userAgent;
            const ua = navigator.userAgent.toLowerCase();
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            // input.multiple = 'multiple'; // 选择多张
            input.style.position = 'absolute';
            input.style.left = '0';
            input.style.top = '0';
            input.style.width = '100%';
            input.style.height = '100%';
            input.style.overflow = 'hidden';
            input.style.opacity = 0;
            if (ua.indexOf('Android') > -1 || (ua.indexOf('Linux') > -1 && ua.indexOf(' qq/') > -1)) {
                // 判断安卓qq
                input.capture = 'camera';
            }
            this.$refs.camera_input.appendChild(input);
            input.onchange = e => {
                this.showLoading = true;
                if (e.target.files.length === 0) return false;
                const formData = new FormData();
                formData.append('image', e.target.files[0]);
                this.$request('uploadImage', formData)
                    .then(res => {
                        this.$emit('getCameraImg', {
                            img: res.data.url,
                            name: res.data.objectName,
                            sub: this.getImgSub,
                            type: this.getImgType
                        });
                        this.showLoading = false;
                    })
                    .catch(() => {
                        Toast.fail({
                            message: '上传失败，请重新上传',
                            duration: 3000,
                            forbidClick: true
                        });
                        this.showLoading = false;
                    });
            };
        }
    },
    mounted() {
        this.createUploadImgEle();
    }
};
</script>
<style lang="scss" scoped>
.van-overlay {
    background: rgba(0, 0, 0, 0.7);
}
.loading {
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
