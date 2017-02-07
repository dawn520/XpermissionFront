/**
 * Created by zhouchenxi on 2017/2/3.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource);
import {routes} from './router';

//实例化路由
var router=new VueRouter({routes});
//创建和挂载根实例。
var app = new Vue({
    router
}).$mount('#app');

