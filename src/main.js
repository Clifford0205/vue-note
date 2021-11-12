import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Select2 from 'v-select2-component';
import ECharts from 'vue-echarts';
import DatePicker from 'vue2-datepicker';
import VueDatePicker from '@mathieustan/vue-datepicker';
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';
import './plugins/bootstrap-vue';

Vue.config.productionTip = false;
Vue.component('Select2', Select2);
Vue.component('v-chart', ECharts);
Vue.component('DatePicker', DatePicker);
// Vue.use(VueDatePicker);
Vue.use(VueDatePicker, {
  lang: 'en'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
