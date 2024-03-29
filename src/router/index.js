import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import VmodelComputed from '@/views/VmodelComputed';
import emit from '@/views/emit';
import sync from '@/views/sync';
import Props from '@/views/Props';
import Slot from '@/views/Slot';
import Select from '@/views/Select';
import Ref from '@/views/Ref';
import Chart from '@/views/Chart';
import DatePicker from '@/views/DatePicker';
import CheckBox from '@/views/CheckBox';
import Transition from '@/views/Transition';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/zh-cn';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vmodel-computed',
    name: 'VmodelComputed',
    component: VmodelComputed
  },
  {
    path: '/emit',
    name: 'emit',
    component: emit
  },
  {
    path: '/sync',
    name: 'sync',
    component: sync
  },
  {
    path: '/props',
    name: 'props',
    component: Props
  },
  {
    path: '/slot',
    name: 'slot',
    component: Slot
  },
  {
    path: '/select',
    name: 'select',
    component: Select
  },
  {
    path: '/Ref',
    name: 'Ref',
    component: Ref
  },
  {
    path: '/Chart',
    name: 'Chart',
    component: Chart
  },
  {
    path: '/DatePicker',
    name: 'DatePicker',
    component: DatePicker
  },
  {
    path: '/check-box',
    name: 'CheckBox',
    component: CheckBox
  },
  {
    path: '/transition',
    name: 'Transition',
    component: Transition
  }
];

const router = new VueRouter({
  routes
});

export default router;
