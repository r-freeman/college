import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './vee-validate';
import moment from 'vue-moment';

require('typeface-nunito-sans');
const VueTruncate = require('vue-truncate-filter');

Vue.config.productionTip = false;
Vue.use(moment);
Vue.use(VueTruncate);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
