<template>
	<div ref="camera_input"></div>
</template>
<script>
	import { isWeixin,isMQQbrowser,isAndroid } from '@/commons/compatible'
	export default {
		name: 'CreateChooseImg',
		props:{
			getImgSub: {
				type: [Number],
				default: 0
			},
			getImgType: {
				type: [Number],
				default: 0
			},	
		},
		data(){
			return{
			}
		},
		methods: {
			createUploadImgEle(e) {
				const input = document.createElement('input');
				input.type = 'file';
				input.accept = 'image/*';
				input.multiple = 'multiple';
				input.style.position = "absolute";
				input.style.left = '0';
				input.style.top = '0';
				input.style.width = '100%';
				input.style.height = '100%';
				input.style.overflow = "hidden";
				input.style.opacity = 0;
				input.onchange = (event) => {
					// console.log(event)
					// console.log(event.target.files);
					const files = Array.prototype.slice.call(event.target.files);
					// console.log(files)
					// if (!files.length) return;
					this.$emit('getCameraImg', {
						img: event.target.files,
						sub: this.getImgSub,
						type: this.getImgType
					});
					// this.$emit('getImgSub', '');
				}
				try{
					if (isAndroid() && isWeixin() && !isMQQbrowser()) {
						input.capture = 'camera';
					}
				}catch(e){
					console.log("创建原生input元素报错 ：",e);
				}
				this.$refs.camera_input.appendChild(input);
			},
		},
		mounted() {
			this.createUploadImgEle();
		}
	}
</script>
<style lang="scss" scoped>

</style>

