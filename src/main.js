import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Select2 from 'v-select2-component';

Vue.config.productionTip = false;
Vue.component('Select2', Select2);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
