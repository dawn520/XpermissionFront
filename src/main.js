/**
 * Created by zhouchenxi on 2017/2/3.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource);
//导入全局动画插件
import {routes} from './router';
import Velocity from './assets/js/velocity.min';
window.Velocity = window.velocity = Velocity;
import './assets/js/velocity.ui';
import './plugins/iCheck/icheck.min';

import '../plugins/iCheck/square/blue.css'


//实例化路由
var router=new VueRouter({routes});

//创建和挂载根实例。
var app = new Vue({
    router
}).$mount('#app');



