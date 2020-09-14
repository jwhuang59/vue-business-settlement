import Vue from 'vue';
import Request from './request';
import app from './App.vue';
import router from './router';
import './commons';
import store from './store';
import 'lib-flexible';
import dayjs from 'dayjs';
import comChooseImg from '@/components/com-chooseImg';
import comCalendar from '@/components/com-calendar';

Vue.use(Request);
Vue.component('CreateChooseImg', comChooseImg);
Vue.component('ComCalendar', comCalendar);
Vue.prototype.dayjs = dayjs;
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
    router,
    store,
    render: h => h(app)
}).$mount('#app');
