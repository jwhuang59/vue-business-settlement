import Vue from 'vue';
import Request from './request';
import app from './app.vue';
import router from './router';
import './commons';
import store from './store';
import 'lib-flexible';
import SvgIcon from '@/components/SvgIcon/index.vue';
import VConsole from 'vconsole';

Vue.use(Request);
Vue.component('svg-icon', SvgIcon);
Vue.config.productionTip = process.env.NODE_ENV === 'production';

if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-new
    new VConsole();
}

new Vue({
    router,
    store,
    render: h => h(app)
}).$mount('#app');
