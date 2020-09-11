import Vue from 'vue';
import { Notify } from 'vant';

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
