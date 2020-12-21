import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import vuetify from './plugins/vuetify';
import './mock/mock.js';
import axios from 'axios';
import '../config/axios';
import i18n from './i18n'; // 引入i18n实例

//将axios挂载到vue实例，在组件中可以直接调用
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app');
