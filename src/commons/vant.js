import Vue from 'vue';
import { Icon, Button, Notify, Toast } from 'vant';

Vue.prototype.$notify = options => {
    if (typeof options === 'string' || (typeof options === 'object' && options.type === 'danger')) {
        Notify.setDefaultOptions({
            type: 'danger',
            color: '#ad0000',
            background: '#ffe1e1',
            duration: 3000
        });
    } else {
        Notify.resetDefaultOptions();
    }
    Notify(options);
};

Vue.component(Notify.name, Notify);
Vue.component(Icon.name, Icon);
Vue.component(Button.name, Button);
Vue.component(Toast.name, Toast);
