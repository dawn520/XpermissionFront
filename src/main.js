/**
 * Created by zhouchenxi on 2017/2/3.
 */
//导入全局动画插件
import Velocity from './assets/js/velocity.min';
window.Velocity = window.velocity = Velocity;
import './assets/js/velocity.ui';
import './plugins/iCheck/icheck.min';
import '../plugins/iCheck/square/blue.css'

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import {routes} from './router';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);

//实例化路由
const router=new VueRouter({routes});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next();
});
//创建store
const store = new Vuex.Store({
    state: {
        siteUrl: 'http://localhost'
    },
    mutations: {

    }
});

Vue.http.headers.common['X-CSRF-TOKEN'] = Laravel.csrfToken;

//创建和挂载根实例。
var app = new Vue({
    router,
    store
}).$mount('#app');



